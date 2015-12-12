/* jshint -W079 */
'use strict';
var $ = require('jquery');

window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

var queue = {
  list: [],
  init: function() {
    // initial data request
    this.requestData(function(){
      // after success send audio files to audio object
      this.sendAudio();
      // and trigger start event
      this.triggerStart();
    }.bind(this));
    this.bindEvents();
  },
  bindEvents: function() {
    $(audio).on('playbackended', this.prepareNext.bind(this));
  },
  requestData: function(cb) {
    // use rfcx-console method for requesting audio
    $.ajax({
      type: 'GET',
      // hardcode guardian id
      url: 'https://api.rfcx.org/v1/guardians/0bdbb4a5d567/audio.json?limit=3',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call. hardcoded
        request.setRequestHeader("x-auth-token", 'bxca0geq04njg2278b30m22obm5yqdwy1f1q5lqm');
        request.setRequestHeader("x-auth-user", 'user/63079ab5-fd39-4486-b01c-f61426ffce50');
      },
      success: function(res) {
        console.log('RFCX | Received from Server: ', res);
        if (res && res.length) {
          // add new urls to local array
          this.refreshList(res);
          if (cb) cb();
        }
      }.bind(this),
      error: function(error) {
        console.log('RFCX | Error Loading from Server. Retry in 10 seconds');
        setTimeout(function() {
          // repeat request in 10 seconds
          this.requestData(this.sendAudio.bind(this));
        }.bind(this), 10000);
      }.bind(this)
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
    this.initAnalyser();
    this.bindEvents();
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    // listen to the queue object for the start event
    $(queue).on('start', this.startPlayback.bind(this));
  },
  createAudios: function() {
    // create html audio instances for each of audio file
    // after that all audio files will be requested, cached and ready to play immediately
    console.log('AUDIO |', this.urls.length - this.list.length, 'new audios');
    for (var i=0; i < this.urls.length; i++) {
      if (!this.list[i]) {
        // create only new items
        var audio = new Audio();
        audio.crossOrigin = 'anonymous';
        audio.preload = true;
        audio.autoplay = false;
        audio.src = this.urls[i];
        $(audio).on('play', this._onPlay);
        $(audio).on('ended', this._onEnd.bind(this));
        this.list[i] = audio;
        $('#audios').append(audio);
      }
    }
  },
  _onPlay: function(ev) {
    console.log('AUDIO | Playback Started:', ev.target.src);
  },
  _onEnd: function(ev) {
    console.log('AUDIO | Playback Finished:', ev.target.src);
    // if audio is not last in the list then play the next
    this.playNext();
  },
  _onNewUrls: function(ev, data) {
    if (data && data.urls) {
      // save all urls to local array
      this.urls = data.urls;
      // create new audio instances
      this.createAudios();
    }
  },
  playNext: function() {
    var isNew = false;
    if(this.index + 1 < this.list.length) {
      this.index++;
      isNew = true;
    }
    // if audio was last in the list then play it again
    this.list[this.index].play();
    if (isNew) {
      this.updateAnalyser(this.list[this.index]);
    }
    // trigger event to queue to request new audios from server
    $(this).trigger('playbackended');
  },
  startPlayback: function() {
    // start playing from the second audio file
    this.list[1].play();
    this.updateAnalyser(this.list[1]);
  },
  updateAnalyser: function(audio) {
    var source = this.context.createMediaElementSource(audio);
    source.connect(this.analyser);
    this.analyser.connect(this.context.destination);
  },
  initAnalyser: function() {
    var _this = this;
    this.context = new AudioContext();
    this.analyser = this.context.createAnalyser();

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    var cwidth            = canvas.width,
        cheight           = canvas.height - 2,
        meterWidth        = 10, //width of the meters in the spectrum
        gap               = 2, //gap between meters
        capHeight         = 2,
        capStyle          = '#fff',
        meterNum          = 5000 / (10 + 2), //count of the meters
        capYPositionArray = []; ////store the vertical position of hte caps for the previous frame
    //var gradient = ctx.createLinearGradient(0, 0, 0, 300);
    var gradient = ctx.createLinearGradient(0, 0, 0, cheight);
    gradient.addColorStop(1, '#fff');
    gradient.addColorStop(0.5, 'rgba(17, 153, 17, 0.812)');
    gradient.addColorStop(0, 'rgba(17, 153, 17, 0.812)');

    function renderFrame() {
      var array = new Uint8Array(_this.analyser.frequencyBinCount);
      _this.analyser.getByteFrequencyData(array);
      var step = Math.round(array.length / meterNum); //sample limited data from the total array
      ctx.clearRect(0, 0, cwidth, cheight);
      for (var i = 0; i < meterNum; i++) {
        var value = array[i * step];
        if (capYPositionArray.length < Math.round(meterNum)) {
          capYPositionArray.push(value);
        }
        ctx.fillStyle = capStyle;
        //draw the cap, with transition effect
        if (value < capYPositionArray[i]) {
          ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
        } else {
          ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
          capYPositionArray[i] = value;
        }
        ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
        ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
      }
      requestAnimationFrame(renderFrame);
    }
    renderFrame();
  }
};

$(function() {
  audio.init();
  queue.init();
});

module.exports = {
  queue: queue,
  audio: audio
};