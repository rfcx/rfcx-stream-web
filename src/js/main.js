/* jshint -W079 */
'use strict';

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

var queue = {
  list: [],
  init: function() {
    this.createChain();
    this.bindEvents();
  },
  createChain: function() {
    var def = this.requestToken().then(this.requestData.bind(this)).then(function(res) {
      if (res && res.length) {
        // add new urls to local array
        this.refreshList(res);
      }
      // after success send audio files to audio object
      this.sendAudio();
      // and trigger start event
      this.triggerStart();
    }.bind(this));

    def.fail(function() {
      console.log('RFCX | Error Receiving Data from Server. Retry in 10 seconds');
      setTimeout(this.createChain.bind(this), 10000);
    }.bind(this));
  },
  bindEvents: function() {
    $(audio).on('playbackended', this.prepareNext.bind(this));
  },
  requestToken: function() {
    return $.ajax({
      type: 'GET',
      url: 'https://api.rfcx.org/v1/tokens/player'
    })
  },
  requestData: function(data) {
    // use rfcx-console method for requesting audio
    return $.ajax({
      type: 'GET',
      // hardcode guardian id
      url: 'https://api.rfcx.org/v1/guardians/74b55fd8b7f2/audio.json?limit=3',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + data.guid);
        request.setRequestHeader("x-auth-token", data.token);
      }
    })
  },
  refreshList: function(data) {
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
    this.requestData(this.sendAudio.bind(this));
  },
  sendAudio: function() {
    // send event to audio object with new audio file url
    $(this).trigger('newurl', {
      urls: this.list
    });
  },
  triggerStart: function() {
    // sent event to audio object to start playback
    $(this).trigger('start');
  }
};

var audio = {
  // array to store all urls
  urls: [],
  // array to store all audio objects
  list: [],
  // current index to play
  index: 1,
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
  },
  createAudios: function() {
    // create html audio instances for each of audio file
    // after that all audio files will be requested, cached and ready to play immediately
    var _this = this;
    for (var i=0; i < this.urls.length; i++) {
      if (!this.list[i]) {
        (function(index) {
          loadAudioBuffer(_this.urls[index], function (buffer) {
            var source = context.createBufferSource();
            source.buffer = buffer;
            // set loop for last audio
            if (index == _this.urls.length-1) {
              source.loop = true;
            }
            _this.list[index] = source;
            if (index == 1) {
              _this.startPlayback();
            }
          });
        })(i);
      }
      else {
        this.list[i].loop = false;
      }
    }
  },
  _onEnd: function(ev) {
    console.log('AUDIO | Playback Finished:', ev);
    // if audio is not last in the list then play the next
    this.playNext();
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
  playNext: function() {
    var toPlayNewSong = false;
    if(this.index + 1 < this.list.length) {
      this.index++;
      toPlayNewSong = true;
    }
    // if audio was last in the list then play it again
    console.log('play', this.index, this.list[this.index], this.urls[this.index]);
    if (toPlayNewSong) {
      this.list[this.index].onended = this._onEnd.bind(this);
      this.list[this.index].start(0.0);
      this.list[this.index].connect(analyser);
    }
    // trigger event to queue to request new audios from server
    $(this).trigger('playbackended');
  },
  startPlayback: function() {
    // start playing from the second audio file
    console.log('play', 1, this.list[this.index], this.urls[this.index]);
    this.list[1].connect(analyser);
    this.list[1].onended = this._onEnd.bind(this);
    this.list[1].start(0.0);

    window.requestAnimationFrame(draw);
  }
};

$(function() {
  audio.init();
  queue.init();
});