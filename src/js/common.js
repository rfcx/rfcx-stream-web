"use strict";

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

window.isVisualizationSupported = webgl_detect();

$(function() {

  function updateMediaQueriesVars() {
    window.isPhone  = $('#phoneDeviceContainer').css('display') == 'none';
    window.isTablet = $('#tabletDeviceContainer').css('display') == 'none';
  }

  updateMediaQueriesVars();

  $(window).resize(updateMediaQueriesVars);

});