"use strict";

function webglSupported() {
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

function audioContextSupported() {
  // This feature is still prefixed in Safari
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  return !!window.AudioContext;
}

window.isVisualizationSupported = webglSupported();
window.isAudioContextSupported  = audioContextSupported();

$(function() {

  function updateMediaQueriesVars() {
    window.isPhone  = $('#phoneDeviceContainer').css('display') == 'none';
    window.isTablet = $('#tabletDeviceContainer').css('display') == 'none';
  }

  updateMediaQueriesVars();

  $(window).resize(updateMediaQueriesVars);

});