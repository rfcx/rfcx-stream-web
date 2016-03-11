"use strict";

var login = {
  $info: $('#passwordErrorLabel'),
  $form: $('#loginForm'),
  $input: $('#passwordInput'),
  $keypadControls: $('#keypadControls'),
  $keypadLoader: $('#keypadLoader'),
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    this.$form.submit(this.onSubmit.bind(this));
    this.$input.on('change', this.onInputChanged.bind(this));
    this.$form.on('click touchstart', '.js-keypad-btn',       this.onKeypadBtnClicked.bind(this));
    this.$form.on('click touchstart', '.js-keypad-backspace', this.onKeypadBackspaceClicked.bind(this));
  },
  onSubmit: function(ev) {
    ev.preventDefault();
    this.submitForm();
    return false;
  },
  onInputChanged: function(ev) {
    var $this = $(ev.target),
        val   = $this.val();
    this.$form.find('.js-keypad-backspace').toggleClass('visible', !!val.length);
    if (val.length === 4) {
      this.submitForm();
    }
  },
  onKeypadBtnClicked: function(ev) {
    var $this = $(ev.target),
        val   = $this.attr('data-value');
    var inputVal = this.$input.val();
    if (inputVal.length > 4) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.$input.val(inputVal + val).trigger('change');
    ev.preventDefault();
  },
  onKeypadBackspaceClicked: function(ev) {
    var currentVal = this.$input.val();
    if (!currentVal.length) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.$input.val(currentVal.substr(0, currentVal.length-1)).trigger('change');
    ev.preventDefault();
  },
  submitForm: function() {
    if (!this.$input.val().length) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.clearMessage();
    this.savePassphrase();
    this.checkPassword();
  },
  savePassphrase: function() {
    window.rfcxPassphrase = this.$input.val();
  },
  checkPassword: function() {
    this.toggleLoadingState(true);
    queue.checkPassword()
      .done(function () {
        this.hideOverlay();
        this.toggleLoadingState(false);
      }.bind(this))
      .fail(function(err) {
        this.toggleLoadingState(false);
        if (err.status == 401) {
          this.$input.val('').trigger('change');
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
  },
  toggleLoadingState: function(isLoading) {
    this.$keypadControls.toggleClass('loading', isLoading);
    this.$keypadLoader.toggleClass('visible', isLoading);
  }
};

$(function() {
  login.init();
});