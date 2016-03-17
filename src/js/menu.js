"use strict";

var menu = {
  $el: $('#playerMenu'),
  init: function(data) {
    this.parseData(data);
    this.bindEvents();
  },
  bindEvents: function() {
    this.$el.on('click', '.js-audio-item', this.onAudioLinkClicked.bind(this));
  },
  onAudioLinkClicked: function(ev) {
    $('.js-audio-item.active').removeClass('active');
    var $this           = $(ev.target),
        name            = $this.attr('data-name'),
        type            = $this.attr('data-type'),
        url             = $this.attr('data-url'),
        timezone_offset = $this.attr('data-timezone-offset'),
        timezone_label  = $this.attr('data-timezone-label');
    $this.addClass('active');
    queue.setupAudio({
      type: type,
      name: name,
      url : url,
      timezone: {
        offset: timezone_offset,
        label: timezone_label
      }
    });
  },
  parseData: function (data) {
    if (!data.streams) {
      return;
    }
    for (var i = 0; i < data.streams.length; i++) {
      var stream = data.streams[i];
      this.addButton({
        name: stream.name,
        shortname: stream.shortname,
        audio_url: stream.urls.audio,
        type: stream.type,
        timezone_offset: stream.timezone_offset,
        timezone_label: stream.location
      })
    }
  },
  addButton: function(data) {
    var $button = $('<button/>', {
      class: 'btn btn-default js-audio-item',
      type: 'button',
      'data-name': data.name,
      'data-url': data.audio_url,
      'data-type': data.type,
      'data-timezone-offset': data.timezone_offset,
      'data-timezone-label': data.timezone_label,
      text: data.shortname
    });
    $button.addClass(data.type);
    this.$el.append($button);
    $button.wrap("<div class='dropup'></div>");
  }
};