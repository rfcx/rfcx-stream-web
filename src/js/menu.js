"use strict";

var menu = {
  $el: $('#playerMenu'),
  init: function(data) {
    this.parseData(data);
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
      $button.attr('data-audio', audio);
    }
    if (opts.playlists) {
      if (opts.playlists.length) {
        $dropdown.append('<ul class="dropdown-menu" aria-labelledby="dropdown' + id + '"></ul>');
        for (var i = 0; i < opts.playlists.length; i++) {
          var playlist = opts.playlists[i];
          var $dropdownChild = $('<li></li>');
          var $buttonChild  = $('<a href="#" data-audio="' + playlist.urls.audio + '">' + playlist.name + '</a>')
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