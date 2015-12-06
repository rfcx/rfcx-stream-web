/* jshint -W079 */
'use strict';
var $ = require('jquery');

var queue = {
  list: [],
  audioIndex: 1,
  init: function() {
    this.requestData(this.sendAudio.bind(this));
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
        // x-auth-token and x-auth-user are required for backend api call
        request.setRequestHeader("x-auth-token", '1rftlz6f16zo4noms9pbi3rzdefeh8sktggbcmap');
        request.setRequestHeader("x-auth-user", 'user/63079ab5-fd39-4486-b01c-f61426ffce50');
      },
      success: function(res) {
        console.log('RFCX | Received from Server: ', res);
        if (res && res.length) {
          this.refreshList(res);
          if (cb) cb();
        }
      }.bind(this),
      error: function(error) {
        console.log('RFCX | Error Loading from Server. Retry in 10 seconds');
        setTimeout(function() {
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
      if (this.list.indexOf(item.url) == -1) {
        this.list.push(item.url);
      }
    }
  },
  prepareNext: function() {
    // if audio is not last in the list
    if (this.audioIndex+1 < this.list.length) {
      // then increment current audio file index
      this.audioIndex++;
      // and request new file from the server
      this.requestData(this.sendAudio.bind(this));
    }
  },
  sendAudio: function() {
    // send event to audio object with new audio file url
    $(this).trigger('newurl', {
      urls: [this.list[this.audioIndex]]
    });
  }
};

var audio = {
  urls: [],
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onChangeUrls.bind(this));
  },
  initHowler: function() {
    var _this = this;
    console.log('HOWLER | Audio to Play:', this.urls);
    if (this.howl) {
      // if howler was initialized earlier then simply change audio url and howler will play it
      this.howl.urls(this.urls);
      return;
    }
    // if howler was not initialized earlier then init it
    this.howl = new Howl({
      autoplay: true,
      urls: this.urls,
      loop: true,
      volume: 1,
      onload: function() {
        console.log('HOWLER | Audio Loaded');
      },
      onloaderror: function() {
        console.log('HOWLER | Error While Loading the Audio');
      },
      onplay: function() {
        console.log('HOWLER | Playback Started');
      },
      onend: function() {
        console.log('HOWLER | Playback Finished');
        // trigger event to queue that current playback was finished to prompt new files to be requested
        $(_this).trigger('playbackended');
      }
    });
  },
  _onChangeUrls: function(ev, data) {
    if (data && data.urls) {
      this.urls = data.urls;
      this.initHowler();
    }
  }
};

$(function() {
  audio.init();
  queue.init();
});

module.exports = queue;