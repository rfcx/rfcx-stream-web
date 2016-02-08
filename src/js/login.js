"use strict";

var login = {
  $info: $('#formInfo'),
  $form: $('#loginForm'),
  $submitBtn: $('#btnSubmitLoginForm'),
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    this.$form.submit(this.onSubmit.bind(this));
  },
  onSubmit: function(ev) {
    ev.preventDefault();
    this.disableButton();
    this.clearMessage();
    this.savePassphrase();
    this.checkPassword();
    return false;
  },
  enableButton: function() {
    this.$submitBtn.prop('disabled', false);
  },
  disableButton: function() {
    this.$submitBtn.prop('disabled', true);
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