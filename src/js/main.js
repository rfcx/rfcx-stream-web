/* jshint -W079 */
'use strict';
var $ = require('jquery');

var queue = {
  list: [],
  init: function() {
    this.requestData();
    this.bindEvents();
  },
  bindEvents: function() {
    $(this).on('refreshqueue', this.requestData.bind(this));
  },
  requestData: function() {
    // use rfcx-console method for requesting audio
    $.ajax({
      type: 'GET',
      // hardcode guardian id
      url: 'https://api.rfcx.org/v1/guardians/201b89ba5ae2/audio.json?limit=3',
      beforeSend: function (request)
      {
        // x-auth-token and x-auth-user are required for backend api call
        request.setRequestHeader("x-auth-token", 'rlzoj1oopinydvitxaiowqt68mn8764qffy7yc8o');
        request.setRequestHeader("x-auth-user", 'user/63079ab5-fd39-4486-b01c-f61426ffce50');
      },
      success: function(res) {
        console.log('res', res);
        if (res && res.length) {
          this.refreshList(res);
        }
      }.bind(this)
    })
  },
  refreshList: function(data) {
    // iterate through all new items in inverse order
    for (var i = data.length-1; i >= 0; i--) {
      var item = data[i];
      // if current url was not presented in the list than append it to the end of array
      if (this.list.indexOf(item.url) == -1) {
        this.list.push(item.url);
      }
    }
  }
};

$(function() {
  queue.init();
});

module.exports = queue;