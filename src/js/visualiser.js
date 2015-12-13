function output(str) {
  console.log(str);
}

// Events
// init() once the page has finished loading.

// Temporary patch until all browsers support unprefixed context.
if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext'))
  window.webkitAudioContext = AudioContext;

window.onload = init;

var context;
var source;
var analyser;
var audioBuffer;

var analyserView1;

function init() {
  analyserView1 = new AnalyserView("view1");

  initAudio();
  analyserView1.initByteBuffer();
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
        console.log("Error decoding human voice!");
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
  window.requestAnimationFrame(draw);
}