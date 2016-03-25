'use strict';

var tour = {
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // when login is sucessful, we register the tourguide 
    $(login).on('successful-login', this._onSuccessfulLogin);
  },
  _onSuccessfulLogin: function() {

    // setTimeout(function(){
    //   tl.pg.init({ custom_open_button: 'hidePageGuideToggle' });
    // }, 30000);
    
  }
};

$(function() {
  tour.init();
});