function output(str) {
  console.log(str);
}

// Temporary patch until all browsers support unprefixed context.
if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext'))
  window.webkitAudioContext = AudioContext;

// if set to false, then webgl rendering is suspended
window.isVisualizationEnabled = true;

var context;
var analyser,
    analyser2,
    splitter,
    gain;

var analyserView1,
    analyserView2;

function initCanvases() {
  updateAnalyzersDimensions();

  $(window).resize(updateAnalyzersDimensions);
}

function initAnalysers() {
  initCanvases();

  analyserView1 = new AnalyserView("3dSonogramView");
  analyserView2 = new AnalyserView("waveformView", ANALYSISTYPE_WAVEFORM);

  initAudio();
  analyserView1.initByteBuffer();
  analyserView2.initByteBuffer();
}

function updateAnalyzersDimensions() {
  var $sonogramCanvas = $('#3dSonogramView');
  $sonogramCanvas.attr('width', $sonogramCanvas.parent().width());
  $sonogramCanvas.attr('height', parseInt(parseInt($sonogramCanvas.attr('width')) / 1.8));

  var $waveform = $('#waveformView');
  $waveform.attr('width', $waveform.parent().width());
  $waveform.attr('height', parseInt(parseInt($waveform.attr('width')) / 3.3));
}

function loadAudioBuffer(url, cb) {
  // Load asynchronously

  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(
      request.response,
      function (b) {
        if (cb) cb(b);
      },

      function (buffer) {
        console.log("Error decoding audio!");
      }
    );
  };

  request.send();
}

function initAudio() {
  context = new webkitAudioContext();

  gain = context.createGain();
  gain.gain.value = 1;

  analyser = context.createAnalyser();
  analyser2 = context.createAnalyser();
  analyser.fftSize = 2048;
  analyser2.fftSize = 2048;

  splitter = context.createChannelSplitter();
  splitter.connect(analyser,0,0);
  splitter.connect(analyser2,1,0);

  splitter.connect(gain, 0);
  splitter.connect(gain, 1);

  gain.connect(context.destination);
}

if (!window.requestAnimationFrame) {

  window.requestAnimationFrame = (function () {

    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

        window.setTimeout(callback, 1000 / 60);

      };

  })();

}

function draw() {
  if (window.isVisualizationEnabled) {
    analyserView1.doFrequencyAnalysis();
  }
  analyserView2.doFrequencyAnalysis();
  window.requestAnimationFrame(draw);
}