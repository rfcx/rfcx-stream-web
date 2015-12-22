"use strict";

var clock = {
  init: function() {
    this.startTime();
  },
  startTime: function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = this.checkTime(m);
    s = this.checkTime(s);
    $('#clock').text(h + ":" + m + ":" + s);
    setTimeout(this.startTime.bind(this), 500);
  },
  checkTime: function(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
  }
};

$(function() {
  clock.init();
});