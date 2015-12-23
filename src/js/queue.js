"use strict";

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
      if (this.list.indexOf(item.urls['mp3']) === -1) {
        this.list.push(item.urls['mp3']);
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

$(function() {
  queue.init();
});