"use strict";

var login = {
  $info: $('#passwordErrorLabel'),
  $form: $('#loginForm'),
  $input: $('#passwordInput'),
  $submitBtn: $('#btnSubmitLoginForm'),
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    this.$form.submit(this.onSubmit.bind(this));
    this.$form.on('click touchstart', '.js-keypad-btn',       this.onKeypadBtnClicked.bind(this));
    this.$form.on('click touchstart', '.js-keypad-backspace', this.onKeypadBackspaceClicked.bind(this));
  },
  onSubmit: function(ev) {
    ev.preventDefault();
    if (!this.$input.val().length) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.disableButton();
    this.clearMessage();
    this.savePassphrase();
    this.checkPassword();
    return false;
  },
  onKeypadBtnClicked: function(ev) {
    var $this = $(ev.target),
        val   = $this.attr('data-value');
    this.clearMessage();
    this.$input.removeClass('error');
    this.$input.val(this.$input.val() + val);
    ev.preventDefault();
  },
  onKeypadBackspaceClicked: function(ev) {
    var currentVal = this.$input.val();
    if (!currentVal.length) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.$input.val(currentVal.substr(0, currentVal.length-1));
    ev.preventDefault();
  },
  enableButton: function() {
    this.$submitBtn.prop('disabled', false);
  },
  disableButton: function() {
    this.$submitBtn.prop('disabled', true);
  },
  savePassphrase: function() {
    window.rfcxPassphrase = this.$input.val();
  },
  checkPassword: function() {
    queue.checkPassword()
      .done(function () {
        this.hideOverlay();
        this.enableButton();
      }.bind(this))
      .fail(function(err) {
        this.enableButton();
        if (err.status == 401) {
          this.$input.addClass('error');
          this.setMessage('Invalid Password');
        }
        else {
          this.setMessage('Error while initialization');
        }
      }.bind(this));
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