window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

function webgl_detect() {
  if (!!window.WebGLRenderingContext) {
    var canvas = document.createElement("canvas"),
      names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
      context = false;

    for(var i=0;i<4;i++) {
      try {
        context = canvas.getContext(names[i]);
        if (context && typeof context.getParameter == "function") {
          // WebGL is enabled
          return true;
        }
      } catch(e) {}
    }

    // WebGL is supported, but disabled
    return false;
  }

  // WebGL not supported
  return false;
}

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
  isVisualizationSupported: webgl_detect(),
  // flag to trigger autoplay on first desktop load
  firstLoad: true,
  init: function() {
    this.bindEvents();
  },
  reset: function() {
    this.stopPlayback();
    this.urls = [];
    this.list = [];
    this.index = 0;
    this.currentAudio = undefined;
    this.firstLoad = true;
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    // play/stop button clicked
    $('#playStopBtn').click(this._onPlayStopBtnClicked.bind(this));
    $('#playBtn').click(this._onPlayBtnClicked.bind(this));
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
                loop: isLooped,
                loopStart: 1.5,
                loopEnd: buffer.duration
              });
              if (index == 1) {
                // trigger play on first load
                _this.setLoadingState(false);
                if (!window.isTablet && !window.isPhone && _this.firstLoad) {
                  _this.firstLoad = false;
                  _this.startPlayback();
                }
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
              _this.setLoadingState(false);
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
    source.buffer    = data.buffer;
    source.loop      = data.loop;
    source.loopStart = data.loopStart;
    source.loopEnd   = data.loopEnd;
    return source;
  },
  createAudioTag: function(data) {
    var audio = new Audio();
    audio.src = data.src;
    audio.loop = data.loop;
    // Start playback with offset of 2000 ms to avoid empty gap in the start of audio
    audio.currentTime = 2;
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
    if ($this.prop('disabled')) {
      return;
    }
    // play audio
    if ($this.hasClass('stopped')) {
      this.isStopped = false;
      $this.removeClass('stopped');
      $('#bigPlayBtnContainer').hide();
      if (this.isVisualizationSupported) {
        this.playAudio();
      }
      else {
        if (!this.currentAudio) {
          this.playAudio();
        }
        else {
          this.currentAudio.play();
          $(this).trigger('continued');
        }
      }
    }
    // stop audio
    else {
      this.stopPlayback();
      if (this.isVisualizationSupported) {
        this.setLoadingState(true);
        $(this).trigger('refresh');
      }
    }
  },
  _onPlayBtnClicked: function(ev) {
    var $this = $(ev.target);
    if ($this.prop('disabled')) {
      return;
    }
    this.startPlayback();
  },
  startPlayback: function() {
    this.isStopped = false;
    $('#playStopBtn').removeClass('stopped');
    $('#bigPlayBtnContainer').hide();
    this.playAudio();
  },
  stopPlayback: function () {
    $('#playStopBtn').addClass('stopped');
    if (this.isVisualizationSupported) {
      if (this.currentAudio) {
        this.currentAudio.stop();
      }
      this.index = 0;
      this.list = [];
    }
    else {
      if (this.currentAudio) {
        this.currentAudio.pause();
      }
    }
    this.isStopped = true;
    $(this).trigger('stopped');
  },
  changeButtonState: function(opts) {
    $('#playStopBtn').prop('disabled', opts.disabled);
    $('#playBtn').prop('disabled', opts.disabled);
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
        // Start playback with offset of 1500 ms to avoid empty gap in the start of audio
        audio.start(0, 1.5);
        audio.connect(splitter);
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
    $(this).trigger('started');
  },
  setLoadingState: function (isLoading) {
    this.changeButtonState({disabled: isLoading});
    this.toggleLoader({visible: isLoading});
  },
  toggleLoader: function(opts) {
    $('#loaderContainer').toggleClass('hidden', !opts.visible);
  }
};

$(function() {
  audio.init();
});