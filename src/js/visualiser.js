function output(str) {
  console.log(str);
}

// Temporary patch until all browsers support unprefixed context.
if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext'))
  window.webkitAudioContext = AudioContext;


var context;
var analyser;

var analyserView1,
    analyserView2;

function initAnalysers() {
  analyserView1 = new AnalyserView("3dSonogramView");
  analyserView2 = new AnalyserView("waveformView", ANALYSISTYPE_WAVEFORM);

  initAudio();
  analyserView1.initByteBuffer();
  analyserView2.initByteBuffer();
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

  analyser = context.createAnalyser();
  analyser.fftSize = 2048;

  // Connect audio processing graph
  analyser.connect(context.destination);
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
  analyserView1.doFrequencyAnalysis();
  analyserView2.doFrequencyAnalysis();
  window.requestAnimationFrame(draw);
}