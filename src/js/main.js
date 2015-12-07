/* jshint -W079 */
'use strict';
var $ = require('jquery');

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
      url: 'https://api.rfcx.org/v1/guardians/201b89ba5ae2/audio.json?limit=3',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call. hardcoded
        request.setRequestHeader("x-auth-token", 'tmqjqm0bh1z5a9qjqg7loamacawf2bzl73xyom2u');
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
  // object to store all audio objects
  howlers: {},
  // current index to play
  index: 1,
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    // listen to the queue object for the start event
    $(queue).on('start', this.startPlayback.bind(this));
  },
  createHowlers: function() {
    // create Howler instances for each of audio file
    // after that all audio files will be requested, cached and ready to play immediately
    for (var i=0; i < this.urls.length; i++) {
      if (!this.howlers[i]) {
        // create only new items
        this.howlers[i] = new Howl({
          urls: [this.urls[i]],
          onplay: this._onPlay,
          onend: this._onEnd.bind(this)
        });
      }
    }
  },
  _onPlay: function() {
    console.log('HOWLER | Playback Started', this._src);
  },
  _onEnd: function() {
    console.log('HOWLER | Playback Finished');
    // if audio is not last in the list then play the next
    if(this.index + 1 !== this.howlers.length) {
      this.index++
    }
    // if audio was last in the list then play it again
    this.howlers[this.index].play();
    // trigger event to queue to request new audios from server
    $(this).trigger('playbackended');
  },
  _onNewUrls: function(ev, data) {
    if (data && data.urls) {
      // save all urls to local array
      this.urls = data.urls;
      // create new Howler instances
      this.createHowlers();
    }
  },
  startPlayback: function() {
    // start playing from the second audio file
    this.howlers[1].play();
  }
};

$(function() {
  audio.init();
  queue.init();
});

module.exports = queue;