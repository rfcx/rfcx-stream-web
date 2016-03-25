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
  isModernBrowser: window.isVisualizationSupported && window.isAudioContextSupported,
  // how many streams/playlists were requested
  loadsCount: 0,
  // is audio muted
  isMuted: false,
  init: function() {
    this.bindEvents();
  },
  reset: function() {
    this.stopPlayback();
    this.urls = [];
    this.list = [];
    this.index = 0;
    this.currentAudio = undefined;
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    // Mute button clicked
    $('#muteBtn').click(this._onMuteBtnClicked.bind(this));
    // Mobile play button clicked
    $('#playBtn').click(this._onPlayBtnClicked.bind(this));
  },
  initVisualization: function () {
    if (this.isModernBrowser) {
      // init waveform and sonogram if visualization is supported by current browser
      initAnalysers();
    }
    else {
      // if visualization is not supported init slideshow
      initCanvases();
      slideshow.setUncloseable();
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
          _this.loadAudioFile(index);
        })(i);
      }
      else {
        // set loop for last audio
        this.list[i].loop = (i == urlsCount-1);
      }
    }
  },
  loadAudioFile: function(index) {
    var isLooped = (index == this.urls.length-1),
        url      = this.urls[index];

    function autoplay() {
      this.setLoadingState(false);
      if ((!window.isTablet && !window.isPhone && this.loadsCount === 0) || this.loadsCount > 0) {
        this.startPlayback();
      }
    }

    if (this.isModernBrowser) {
      // if audio source is supported then load audio buffer
      loadAudioBuffer(url, function (buffer) {
        this.list[index] = this.createAudioBuffer({
          buffer: buffer,
          // set loop for last audio
          loop: isLooped,
          loopStart: 1.5,
          loopEnd: buffer.duration
        });
        if (index == 1) {
          // trigger play on first load
          autoplay.call(this);
        }
      }.bind(this));
    }
    else {
      // if audio source is supported then create html Audio object
      this.list[index] = this.createAudioTag({
        src: url,
        // set loop for last audio
        loop: isLooped
      });
      if (index == 1) {
        // trigger play on first load
        autoplay.call(this);
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
    audio.addEventListener('loadedmetadata', function() {
      audio.currentTime = 2;
    }, false);
    audio.muted = this.isMuted;
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
  _onMuteBtnClicked: function(ev) {
    this.isMuted = !this.isMuted;
    $(ev.target).toggleClass('muted', this.isMuted).attr('title', this.isMuted? 'Unmute' : 'Mute');
    if (this.isModernBrowser) {
      gain.gain.value = this.isMuted? 0 : 1;
    }
    else {
      this.toggleAudiosMute(this.isMuted);
    }
  },
  _onPlayBtnClicked: function(ev) {
    var $this = $(ev.target);
    if ($this.prop('disabled')) {
      return;
    }
    this.startPlayback();
    $(this).trigger('mobile-playback-started')
  },
  toggleAudiosMute: function(isMuted) {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].muted = isMuted;
    }
  },
  startPlayback: function() {
    this.loadsCount++;
    this.isStopped = false;
    $('#muteBtn').removeClass('stopped');
    $('#bigPlayBtnContainer').hide();
    this.playAudio();
  },
  stopPlayback: function () {
    if (this.isModernBrowser) {
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
    $('#muteBtn').prop('disabled', opts.disabled);
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
      if (this.isModernBrowser) {
        // Start playback with offset of 1500 ms to avoid empty gap in the start of audio
        audio.start(0, 1.5);
        audio.connect(splitter);
        audio.connect(gain);
      }
      else {
        audio.play();
      }
      this.currentAudio = audio;
    }
    if(this.index == 1) {
        if (this.isModernBrowser) {
          window.requestAnimationFrame(draw);
        }
    }
    $(this).trigger('started');
  },
  setLoadingState: function (isLoading) {
    this.changeButtonState({disabled: isLoading});
    this.toggleLoader({visible: isLoading});
    $(this).trigger('loading', isLoading);
  },
  toggleLoader: function(opts) {
    $('#loaderContainer').toggleClass('hidden', !opts.visible);
  }
};

$(function() {
  audio.init();
});