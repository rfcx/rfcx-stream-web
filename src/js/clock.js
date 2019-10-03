"use strict";

var clock = {
  $el: $('#clock'),
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $(audio).on('started', this.onPlaybackStarded.bind(this));
    $(audio).on('stopped', this.stopTimer.bind(this));
    $(audio).on('continued', this.startTimer.bind(this));
    $(audio).on('paused', this.stopTimer.bind(this));
  },
  onPlaybackStarded: function(ev) {
    this.initTime(queue.measureList[ev.target.index]);
  },
  initTime: function(date) {
    this.time = moment.tz(date, queue.stream.timezone);
    setTimeout(this.setTimezone, 1000);
    this.startTimer();
  },
  startTimer: function() {
    this.stopTimer();
    this.timer = setInterval(function(){
      this.render();
      this.increaseTime();
    }.bind(this), 1000);
  },
  stopTimer: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  increaseTime: function() {
    this.time = moment(this.time).add(1, 's');
  },
  render: function() {
    this.$el.html(moment.tz(this.time, queue.stream.timezone).format('HH:mm:ss'));
  },
  setTimezone: function() {
    $('#clockLabel').show();
    $('#timezone').html(queue.stream.timezone);
  }
};

$(function() {
  clock.init();
});
