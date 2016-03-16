"use strict";

var queue = {
  apiUrl: 'https://api.rfcx.org',
  list: [],
  measureList: [],
  token: '',
  guid: '',
  stream: {
    url: undefined,
    name: undefined,
    type: undefined
  },
  timeout: undefined,
  isStopped: false,
  setupUI: function() {
    this.isStopped = false;
    this.list = [];

    audio.initVisualization();

    var def = this.requestData()
      .then(function(res) {
        menu.init(res);
        // Play Live stream automatically
        $('.js-audio-item').first().click();
      }.bind(this));

    def.fail(function() {
      console.log('RFCX | Error Receiving Data from Server. Retry in 10 seconds');
      setTimeout(this.setupUI.bind(this), 10000);
    }.bind(this));
  },
  setupAudio: function(opts) {
    // do not setup one stream twice
    if (this.stream.url == opts.url) {
      return;
    }
    this.stream = opts;
    this.list = [];
    audio.urls = [];
    audio.stopPlayback();
    audio.firstLoad = true;
    this.isStopped = false;
    this.pullAudio();
  },
  pullAudio: function() {
    this.pullStream()
      .then(function(res) {
        this.setStreamName();
        this.refreshAudios(res);
        this.sendAudio();
      }.bind(this));
  },
  resetAudio: function() {
    this.list = [];
    this.isStopped = false;
    this.pullAudio();
  },
  bindEvents: function() {
    $(audio).on('reset', this.resetAudio.bind(this));
    $(audio).on('stopped', this.onAudioStopped.bind(this));
  },
  checkPassword: function() {
    var def = this.requestToken();
    def.done(function(data) {
      this.bindEvents();
      this.saveTokens(data);
      this.setupUI();
    }.bind(this));
    return def;
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
  setStreamName: function() {
    if (this.stream.name) {
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
      url: this.apiUrl + '/v1/player/web',
      beforeSend: function (request) {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  pullStream: function() {
    if (this.stream.type == 'stream') {
      this.createRequestTimeout();
    }
    return $.ajax({
      type: 'GET',
      //url: this.apiUrl + this.stream.urls.audio + '?limit=3',
      url: this.apiUrl + this.stream.url + (this.stream.type == 'stream'? '?limit=3' : ''),
      beforeSend: function (request) {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  pullImages: function() {
    $.ajax({
      type: 'GET',
      url: this.apiUrl + this.stream.urls.slideshow,
      beforeSend: function (request) {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this),
      success: function(res) {
        console.log('res', res);
      }
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
        this.measureList.push(item['measured_at']);
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