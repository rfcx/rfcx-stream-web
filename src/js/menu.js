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
    var $this = $(ev.target),
        name  = $this.attr('data-name'),
        type  = $this.attr('data-type'),
        url   = $this.attr('data-url');
    queue.setupAudio({
      type: type,
      name: name,
      url : url
    });
  },
  parseData: function (data) {
    if (data.streams) {
      this.parseStreams(data.streams);
    }
    if (data.playlists) {
      this.parsePlaylists(data.playlists);
    }
  },
  parseStreams: function(streams) {
    if (streams.length == 1) {
      this.addDropdown({
        name: streams[0].name,
        audio: streams[0].urls.audio,
        playlists: null,
        type: 'stream'
      })
    }
  },
  parsePlaylists: function(playlists) {
    for (var i = 0; i < playlists.length; i++) {
      var playlist = playlists[i];
      this.addDropdown({
        name: playlist.name,
        audio: null,
        playlists: playlist.playlists,
        type: 'playlist'
      })
    }
  },
  addDropdown: function(opts) {
    var id = Math.round(Math.random() * 1000000);
    var $dropdown = $('<div class="dropup"></div>');
    var $button  = $('<button class="btn btn-default dropdown-toggle ' + opts.type + '" type="button" data-toggle="dropdown" ' +
                'aria-haspopup="true" aria-expanded="true" id="dropdown' + id +'">' + opts.name + '<span class="caret"></span></button>');
    $dropdown.append($button);
    if (opts.audio) {
      $button.attr('data-url', opts.audio);
    }
    if (opts.type == 'stream') {
      $button.addClass('js-audio-item').attr('data-type', 'stream');
      $button.attr('data-name', opts.name);
    }
    // Disable playlist buttons while playlist stuff is not ready
    if (opts.type == 'playlist') {
      $button.attr('disabled', 'disabled');
    }
    if (opts.playlists) {
      if (opts.playlists.length) {
        $dropdown.append('<ul class="dropdown-menu" aria-labelledby="dropdown' + id + '"></ul>');
        for (var i = 0; i < opts.playlists.length; i++) {
          var playlist = opts.playlists[i];
          var $dropdownChild = $('<li></li>');
          var $buttonChild  = $('<a href="#" class="js-audio-item" data-type="' + opts.type + '" data-url="' +
                                playlist.urls.audio + '">' + playlist.name + '</a>');
          $buttonChild.attr('data-name', opts.name + ' - ' + playlist.name);
          $dropdownChild.append($buttonChild);
          $dropdown.find('ul').append($dropdownChild);
        }
      }
      else {
        $button.attr('disabled', 'disabled');
      }
    }
    this.$el.append($dropdown);
  }
};