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
    this.startQueue();
    this.hideOverlay();
    return false;
  },
  savePassphrase: function() {
    window.rfcxPassphrase = $('#passphraseInput').val();
  },
  startQueue: function() {
    queue.init();
  },
  hideOverlay: function() {
    $('#loginOverlay').fadeOut('fast');
  }
};

$(function() {
  login.init();
});