window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

var audio = {
  // array to store all urls
  urls: [],
  // array to store all audio objects
  list: [],
  // current index to play
  index: 0,
  // current audio object or audio source
  currentAudio: undefined,
  // is stop button was pressed
  isStopped: false,
  // is audio source and visualization is supported by current browser
  isVisualizationSupported: !!window.AudioContext,
  init: function() {
    this.bindEvents();
    this.initVisualization();
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    // play/stop button clicked
    $('#playStopBtn').click(this._onPlayStopBtnClicked.bind(this));
  },
  initVisualization: function () {
    if (this.isVisualizationSupported) {
      // init waveform and sonogram if visualization is supported by current browser
      initAnalysers();
    }
    else {
      // if visualization is not supported show slideshow
      slideshow
        .setUncloseable()
        .showCarousel();
    }
  },
  parseAudioData: function() {
    // create html audio instances for each of audio file
    // after that all audio files will be requested, cached and ready to play immediately
    var _this     = this,
      urlsCount = this.urls.length;
    for (var i=0; i < urlsCount; i++) {
      if (!this.list[i]) {
        (function(index) {
          var isLooped = (index == urlsCount-1),
              url      = _this.urls[index];
          if (_this.isVisualizationSupported) {
            // if audio source is supported then load audio buffer
            loadAudioBuffer(url, function (buffer) {
              _this.list[index] = _this.createAudioBuffer({
                buffer: buffer,
                // set loop for last audio
                loop: isLooped
              });
              if (index == 1) {
                // trigger play on first load
                _this.playAudio();
              }
            });
          }
          else {
            // if audio source is supported then create html Audio object
            _this.list[index] = _this.createAudioTag({
              src: url,
              // set loop for last audio
              loop: isLooped
            });
            if (index == 1) {
              // trigger play on first load
              _this.playAudio();
            }
          }
        })(i);
      }
      else {
        // set loop for last audio
        this.list[i].loop = (i == urlsCount-1);
      }
    }
  },
  createAudioBuffer: function(data) {
    var source = context.createBufferSource();
    source.buffer = data.buffer;
    source.loop = data.loop;
    return source;
  },
  createAudioTag: function(data) {
    var audio = new Audio();
    audio.src = data.src;
    audio.loop = data.loop;
    return audio;
  },
  _onPlayEnd: function(ev) {
    console.log('AUDIO | Playback Finished:', ev);
    // if audio is not last in the list then play the next
    if (!this.isStopped) {
      this.playAudio();
    }
  },
  _onNewUrls: function(ev, data) {
    if (data && data.urls) {
      // save all urls to local array
      this.urls = data.urls;
      console.log('AUDIO | Total:', this.urls.length, 'audio files');
      // create new audio instances
      this.parseAudioData();
    }
  },
  _onPlayStopBtnClicked: function(ev) {
    var $this = $(ev.target);
    // if audio has not started playing
    if (!this.currentAudio) {
      return;
    }
    if (!$this.hasClass('stopped')) {
      $(ev.target).addClass('stopped');
      if (this.isVisualizationSupported) {
        this.currentAudio.stop();
      }
      else {
        this.currentAudio.pause();
      }
      this.isStopped = true;
      $(this).trigger('stopped');
    }
    else {
      $(ev.target).removeClass('stopped');
      if (this.isVisualizationSupported) {
        this.index = 0;
        this.isStopped = false;
        this.list = [];
        $(this).trigger('reset');
      }
      else {
        this.currentAudio.play();
        $(this).trigger('continued');
      }
    }
  },
  playAudio: function() {
    var toPlayNewSong = false;
    if(this.index + 1 < this.list.length) {
      this.index++;
      toPlayNewSong = true;
    }
    // if audio was last in the list then play it again
    console.log('AUDIO | Play', this.index+1, this.list[this.index], this.urls[this.index]);
    if (toPlayNewSong) {
      var audio = this.list[this.index];
      audio.onended = this._onPlayEnd.bind(this);
      if (this.isVisualizationSupported) {
        audio.start(0.0);
        audio.connect(analyser);
      }
      else {
        audio.play();
      }
      this.currentAudio = audio;
    }
    if(this.index == 1) {
        if (this.isVisualizationSupported) {
          window.requestAnimationFrame(draw);
        }
    }
    $('#playStopBtn').addClass('visible');
    $(this).trigger('started');
  }
};

$(function() {
  audio.init();
});