"use strict";

$(function() {

  function updateMediaQueriesVars() {
    window.isPhone  = $('#phoneDeviceContainer').css('display') == 'none';
    window.isTablet = $('#tabletDeviceContainer').css('display') == 'none';
  }

  updateMediaQueriesVars();

  $(window).resize(updateMediaQueriesVars);

});