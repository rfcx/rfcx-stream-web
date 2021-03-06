"use strict";

var menu = {
  $el: $('#playerMenu'),
  init: function(data) {
    this.parseData(data);
    this.bindEvents();
  },
  bindEvents: function() {
    this.$el.on('click', '.js-audio-item', this.onAudioLinkClicked.bind(this));
    $(audio).on('loading', this.onAudioLoading.bind(this));
  },
  onAudioLinkClicked: function(ev) {
    $('.js-audio-item.active').removeClass('active');
    var $this              = $(ev.target),
        name               = $this.attr('data-name'),
        type               = $this.attr('data-type'),
        url                = $this.attr('data-url'),
        timezone           = $this.attr('data-timezone'),
        timezone_label     = $this.attr('data-timezone-label'),
        flickr_photoset_id = $this.attr('data-flickr-photoset-id');
    $this.addClass('active');
    queue.setupAudio({
      type: type,
      name: name,
      url : url,
      flickr_photoset_id: flickr_photoset_id,
      timezone: {
        value: timezone,
        label: timezone_label
      }
    });
  },
  onAudioLoading: function(ev, isLoading) {
    this.$el.toggleClass('loading', isLoading);
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
        timezone: stream.timezone,
        timezone_label: stream.location,
        flickr_photoset_id: stream.flickr_photoset_id,
        is_active: stream.is_active !== undefined? stream.is_active : true
      })
    }
  },
  addButton: function(data) {
    var $button = $('<button/>', {
      class: 'btn btn-default js-audio-item',
      type: 'button',
      disabled: !data.is_active,
      'data-name': data.name,
      'data-url': data.audio_url,
      'data-type': data.type,
      'data-timezone': data.timezone,
      'data-timezone-label': data.timezone_label,
      'data-flickr-photoset-id': data.flickr_photoset_id,
      text: data.shortname
    });
    $button.addClass(data.type);
    this.$el.append($button);
    $button.wrap("<div class='dropup'></div>");
  }
};