"use strict";

var login = {
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $('#loginForm').submit(this.onSubmit.bind(this));
  },
  onSubmit: function(ev) {
    ev.preventDefault();
    this.savePassphrase();
    this.checkPassword();
    return false;
  },
  savePassphrase: function() {
    window.rfcxPassphrase = $('#passphraseInput').val();
  },
  checkPassword: function() {
    queue.checkPassword();
  },
  hideOverlay: function() {
    $('#loginOverlay').fadeOut('fast');
  }
};

$(function() {
  login.init();
});