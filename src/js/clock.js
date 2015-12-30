"use strict";

var clock = {
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $(audio).on('started', this.onPlaybackStarded.bind(this));
    $(audio).on('stopped', this.stopTimer.bind(this));
    $(audio).on('continued', this.startTimer.bind(this));
  },
  onPlaybackStarded: function(ev) {
    this.initTime(queue.measureList[ev.target.index]);
  },
  initTime: function(date) {
    this.time = new Date(date);
    this.startTimer();
  },
  startTimer: function() {
    this.stopTimer();
    this.timer = setInterval(function(){
      this.parseTime();
      this.render();
      this.increaseTime();
    }.bind(this), 1000);
  },
  stopTimer: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  parseTime: function() {
    this.h = this.time.getHours();
    this.m = this.time.getMinutes();
    this.s = this.time.getSeconds();

    this.m = this.checkTime(this.m);
    this.s = this.checkTime(this.s);
  },
  increaseTime: function() {
    this.time.setSeconds(this.time.getSeconds() + 1);
  },
  render: function() {
    $('#clock').text(this.h + ":" + this.m + ":" + this.s);
  },
  checkTime: function(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
  }
};

$(function() {
  clock.init();
});