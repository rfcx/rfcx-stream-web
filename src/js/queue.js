"use strict";

var queue = {
  apiUrl: 'https://api.rfcx.org',
  list: [],
  token: '',
  guid: '',
  stream: undefined,
  timeout: undefined,
  isStopped: false,
  createChain: function() {
    this.isStopped = false;
    this.list = [];

    var def = this.requestData()
      .then(function(res) {
        this.stream = res.streams[0];
        this.setStreamName();
        return this.pullStream();
      }.bind(this))
      .then(function(res) {
        this.refreshAudios(res);
        this.sendAudio();
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
  checkPassword: function() {
    var def = this.requestToken();
    def.done(function(data) {
      login.hideOverlay();
      this.bindEvents();
      this.saveTokens(data);
      this.createChain();
    }.bind(this));
    def.fail(function(err) {
      if (err.status == 401) {
        login.setMessage('Passphrase is not correct');
      }
      else {
        login.setMessage('Error while initialization');
      }
    });
  },
  requestToken: function() {
    return $.ajax({
      type: 'POST',
      url: this.apiUrl + '/v1/player/login',
      data: {
        'password': window.rfcxPassphrase
      }
    })
  },
  setStreamName: function(data) {
    if (this.stream && this.stream.name) {
      $('#streamName').text(this.stream.name);
    }
  },
  saveTokens: function(data) {
    this.token = data.token.token;
    this.guid  = data.token.guid;
  },
  requestData: function() {
    return $.ajax({
      type: 'GET',
      //url: 'https://api.rfcx.org/v1/guardians/0bdbb4a5d567/audio.json?limit=3',
      url: this.apiUrl + '/v1/player/web',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  pullStream: function() {
    this.createRequestTimeout();
    return $.ajax({
      type: 'GET',
      url: this.apiUrl + this.stream.urls.audio + '?limit=3',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  refreshAudios: function(data) {
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
    this.pullStream().then(
      function(res) {
        if (res && res.length) {
          // add new urls to local array
          this.refreshAudios(res);
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