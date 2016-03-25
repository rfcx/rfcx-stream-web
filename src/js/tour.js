'use strict';

var tour = {
  resizeTimeout: {},
  init: function() {
    this.refreshResponsiveDependentSteps();
    this.bindEvents();
  },
  bindEvents: function() {
    // when login is sucessful, we register the tourguide 
    $(login).on('successful-login', this._onSuccessfulLogin);
    $(window).resize(this._onWindowResize.bind(this));
    // when user pressed play button in mobile view
    $(audio).on('mobile-playback-started', this._onAudioPlaybackStarted.bind(this));
  },
  _onSuccessfulLogin: function() {
    setTimeout(function(){
      tl.pg.init({
        custom_open_button: 'hidePageGuideToggle',
        // turn on auto_refresh with 500 ms interval to handle dynamical updates
        auto_refresh: true
      });
    }, 30000);
  },
  _onWindowResize: function() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(this.refreshResponsiveDependentSteps, 500);
  },
  _onAudioPlaybackStarted: function() {
    // show tour label for slideshow button when user pressed play button
    // slideshow play button is hidden under big play button on page load, so we will show tour label only
    // after playback has started
    $('#stepBtnShowCarousel').attr('data-tourtarget', '#btnShowCarousel');
  },
  refreshResponsiveDependentSteps: function() {
    if (window.isPhone || window.isTablet) {
      // hide slideshow play button's label on page load for mobile devices (see previous comment)
      $('#stepBtnShowCarousel').removeAttr('data-tourtarget');
    }
    else {
      // show slideshow play button's label on page load for desktop devices
      $('#stepBtnShowCarousel').attr('data-tourtarget', '#btnShowCarousel');
    }
  }
};

$(function() {
  tour.init();
});