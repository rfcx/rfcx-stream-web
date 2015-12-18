/* jshint -W079 */
'use strict';

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

var queue = {
  list: [],
  token: '',
  guid: '',
  timeout: undefined,
  isStopped: false,
  init: function() {
    this.createChain();
    this.bindEvents();
  },
  createChain: function() {
    this.isStopped = false;
    this.list = [];
    var def = this.requestToken()
      .then(function(data){
        this.saveTokens(data);
        return this.requestData();
      }.bind(this))
      .then(function(res) {
        // add new urls to local array
        this.refreshList(res);
        // after success send audio files to audio object
        this.sendAudio();
        //this.createRequestTimeout();
      }.bind(this));

    def.fail(function() {
      console.log('RFCX | Error Receiving Data from Server. Retry in 10 seconds');
      setTimeout(this.createChain.bind(this), 10000);
    }.bind(this));
  },
  bindEvents: function() {
    $(audio).on('reset', this.createChain.bind(this));
    $(audio).on('stop', this.onAudioStopped.bind(this));
  },
  requestToken: function() {
    return $.ajax({
      type: 'POST',
      url: 'https://api.rfcx.org/v1/player/login'
    })
  },
  saveTokens: function(data) {
    console.log('dd', data);
    this.token = data.token.token;
    this.guid  = data.token.guid;
  },
  requestData: function() {
    // use rfcx-console method for requesting audio
    this.createRequestTimeout();
    return $.ajax({
      type: 'GET',
      // hardcode guardian id
      url: 'https://api.rfcx.org/v1/guardians/0bdbb4a5d567/audio.json?limit=3',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  refreshList: function(data) {
    console.log('RFCX | Received from server:', data);
    // iterate through all new items in inverse order
    for (var i = data.length-1; i >= 0; i--) {
      var item = data[i];
      // if current url was not presented in the list than append it to the end of array
      if (this.list.indexOf(item.url) === -1) {
        this.list.push(item.url);
      }
    }
  },
  prepareNext: function() {
    // new data request
    this.requestData().then(
      function(res) {
        if (res && res.length) {
          // add new urls to local array
          this.refreshList(res);
        }
        this.sendAudio();
      }.bind(this)
    );
  },
  sendAudio: function() {
    // send event to audio object with new audio file url
    $(this).trigger('newurl', {
      urls: this.list
    });
  },
  createRequestTimeout: function() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    // request new audio files every 100 seconds
    if (!this.isStopped) {
      this.timeout = setTimeout(this.prepareNext.bind(this), 100000)
    }
  },
  onAudioStopped: function() {
    this.isStopped = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
};

var audio = {
  // array to store all urls
  urls: [],
  // array to store all audio objects
  list: [],
  // current index to play
  index: 1,
  currentAudioNode: undefined,
  isStopped: false,
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    $('#playStopBtn').click(this._onPlayStopBtnClicked.bind(this));
  },
  createAudios: function() {
    // create html audio instances for each of audio file
    // after that all audio files will be requested, cached and ready to play immediately
    var _this     = this,
        urlsCount = this.urls.length;
    for (var i=0; i < urlsCount; i++) {
      if (!this.list[i]) {
        (function(index) {
          loadAudioBuffer(_this.urls[index], function (buffer) {
            var source = context.createBufferSource();
            source.buffer = buffer;
            // set loop for last audio
            source.loop = (index == urlsCount-1);
            _this.list[index] = source;
            if (index == 1) {
              _this.startPlayback();
            }
          });
        })(i);
      }
      else {
        // set loop for last audio
        this.list[i].loop = (i == urlsCount-1);
      }
    }
  },
  _onEnd: function(ev) {
    console.log('AUDIO | Playback Finished:', ev);
    // if audio is not last in the list then play the next
    if (!this.isStopped) {
      this.playNext();
    }
  },
  _onNewUrls: function(ev, data) {
    if (data && data.urls) {
      // save all urls to local array
      this.urls = data.urls;
      console.log('AUDIO | Total:', this.urls.length, 'audio files');
      // create new audio instances
      this.createAudios();
    }
  },
  _onPlayStopBtnClicked: function(ev) {
    var $this = $(ev.target);
    if (!$this.hasClass('stopped')) {
      $(ev.target).addClass('stopped');
      this.currentAudioNode.stop();
      this.isStopped = true;
      $(this).trigger('stop');
    }
    else {
      $(ev.target).removeClass('stopped');
      this.isStopped = false;
      this.list = [];
      $(this).trigger('reset');
    }
  },
  playNext: function() {
    var toPlayNewSong = false;
    if(this.index + 1 < this.list.length) {
      this.index++;
      toPlayNewSong = true;
    }
    // if audio was last in the list then play it again
    console.log('play', this.index+1, this.list[this.index], this.urls[this.index]);
    if (toPlayNewSong) {
      this.list[this.index].onended = this._onEnd.bind(this);
      this.list[this.index].start(0.0);
      this.list[this.index].connect(analyser);
      this.currentAudioNode = this.list[this.index];
    }
    // trigger event to queue to request new audios from server
    $(this).trigger('playbackended');
  },
  startPlayback: function() {
    // start playing from the second audio file
    console.log('play', 2, this.list[this.index], this.urls[this.index]);
    this.list[1].onended = this._onEnd.bind(this);
    this.list[1].connect(analyser);
    this.list[1].start(0.0);
    this.currentAudioNode = this.list[1];

    window.requestAnimationFrame(draw);
  }
};

var clock = {
  init: function() {
    this.startTime();
  },
  startTime: function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);
    $('#clock').text(h + ":" + m + ":" + s);
    setTimeout(this.startTime.bind(this), 500);
  },
  checkTime: function(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
  }
};

$(function() {
  audio.init();
  queue.init();
  clock.init();
});