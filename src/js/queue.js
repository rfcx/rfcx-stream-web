"use strict";

var queue = {
  apiUrl: window.conf.baseUrl,
  list: [],
  measureList: [],
  token: '',
  guid: '',
  stream: {
    url: undefined,
    name: undefined,
    type: undefined,
    timezone: {
      offset: undefined,
      label: undefined
    }
  },
  timeout: undefined,
  isStopped: false,
  reset: function() {
    clearTimeout(this.timeout);
    this.list = [];
    this.measureList = [];
    this.stream.url = undefined;
    this.stream.name = undefined;
    this.stream.type = undefined;
    this.stream.timezone.value = undefined;
    this.stream.timezone.label = undefined;
    this.isStopped = false;
  },
  setupUI: function() {
    this.isStopped = false;
    this.list = [];

    audio.initVisualization();

    this.firstRequest();
  },
  firstRequest: function() {
    var def = this.requestData()
      .then(function(res) {
        menu.init(res);
        // Play first stream automatically
        $('.js-audio-item').first().click();
      }.bind(this));

    def.fail(function() {
      console.log('RFCX | Error Receiving Data from Server. Retry in 10 seconds');
      setTimeout(this.firstRequest.bind(this), 10000);
    }.bind(this));
  },
  setupAudio: function(opts) {
    // do not setup one stream twice
    if (this.stream.url == opts.url) {
      return;
    }
    audio.reset();
    audio.setLoadingState(true);
    this.reset();
    this.stream = opts;
    this.pullAudio();
    $(this).trigger('stream-changed');
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
    $(audio).on('refresh', this.resetAudio.bind(this));
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
    if (this.stream.type == 'stream' || (this.stream.type == 'playlist' && this.list.length < 20)) {
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
  refreshAudios: function(data) {
    console.log('RFCX | Received from server:', data);
    // iterate through all new items in inverse order
    if (this.stream.type == 'stream') {
      for (var i = data.length-1; i >= 0; i--) {
        var item = data[i];
        // if current url was not presented in the list than append it to the end of array
        if (this.list.indexOf(item.urls['mp3']) === -1) {
          this.list.push(item.urls['mp3']);
          this.measureList.push(item['measured_at']);
        }
      }
    }
    else if (this.stream.type == 'playlist') {
      for (var j = 0; j < data.length; j++) {
        var item = data[j];
        // if current url was not presented in the list than append it to the end of array
        if (this.list.indexOf(item.urls['mp3']) === -1) {
          this.list.push(item.urls['mp3']);
          this.measureList.push(item['measured_at']);
        }
      }
    }
  },
  prepareNext: function() {
    if (this.stream.type === 'playlist') {
      this.increaseUrlTime();
    }
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
  },
  increaseUrlTime: function() {
    // get startinf_atter parameter from current playlist url
    var startingAfter = this.getParameterByName('starting_after', this.stream.url);
    // time has not standard value (e.g. 2016-03-12t21:49:00z) apply uppercase to avoid bug in IE
    var time = new Date(startingAfter.toUpperCase());
    // increase this time by 90 seconds
    time.setSeconds(time.getSeconds() + 90);
    // update url with new time
    this.stream.url = this.updateUrlParameter('starting_after', time.toISOString(), this.stream.url);
  },
  // get url parameter
  getParameterByName: function(param, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    param = param.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + param + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  // set new value to url parameter
  updateUrlParameter: function(param, value, url){
    var pattern = new RegExp('\\b('+ param +'=).*?(&|$)');
    if(url.search(pattern) >= 0){
      return url.replace(pattern,'$1' + value + '$2');
    }
    return url + (url.indexOf('?')>0 ? '&' : '?') + param + '=' + value;
  }
};