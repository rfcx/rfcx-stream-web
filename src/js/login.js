"use strict";

var login = {
  $info: $('#formInfo'),
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $('#loginForm').submit(this.onSubmit.bind(this));
  },
  onSubmit: function(ev) {
    ev.preventDefault();
    this.clearMessage();
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
  },
  clearMessage: function() {
    this.setMessage('');
  },
  setMessage: function(mes) {
    this.$info.text(mes);
  }
};

$(function() {
  login.init();
});