
'use strict';

var slideshow = {
  isInitialized: false,
  photos: [],
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $(queue).on('stream-changed', this.onStreamChanged.bind(this));
    $('#btnShowCarousel').click(this.onBtnShowClicked.bind(this));
    $('#btnHideCarousel').click(this.onBtnHideClicked.bind(this));
  },
  onStreamChanged: function() {
    if (this.isInitialized) {
      this.destroyCarousel();
      this.showCarousel();
    }
  },
  onBtnShowClicked: function() {
    this.showCarousel();
  },
  onBtnHideClicked: function() {
    this.hideCarousel();
  },
  showCarousel: function() {
    this.getPhotoset();
    $('#btnShowCarousel').hide();
    $('#btnHideCarousel').show();
    $('#imgSlideshow').fadeIn();
  },
  hideCarousel: function() {
    $('#btnHideCarousel').hide();
    $('#imgSlideshow').fadeOut('fast', function() {
      this.destroyCarousel();
    }.bind(this));
    $('#btnShowCarousel').show();
  },
  setUncloseable: function() {
    $('#btnHideCarousel').addClass('unclosable');
    return this;
  },
  getPhotoset: function() {
    $.ajax({
      url: 'https://api.flickr.com/services/rest',
      type: 'GET',
      dataType: "jsonp",
      jsonp: "jsoncallback",
      data: {
        method: 'flickr.photosets.getPhotos',
        format: 'json',
        api_key: '7b547aa9677a147677cfa44f21151be1',
        photoset_id: queue.stream.flickr_photoset_id
      },
      beforeSend: function() {
        this.toggleLoader(true);
      }.bind(this),
      success: function(res) {
        if (res && res.photoset && res.photoset.photo) {
          for (var i = 0; i < res.photoset.photo.length; i++) {
            this.photos.push(this.getImageUrl(res.photoset.photo[i]));
          }
          this.initCarousel();
        }
      }.bind(this),
      error: function(err) {
        console.log('err', err);
      }
    });
  },
  getImageUrl: function(photo) {
    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret +'_b.jpg';
  },
  initCarousel: function() {
    $("#imgSlideshow").Kenburns({
      images: this.photos,
      scale:0.9,
      duration:10000,
      fadeSpeed:800,
      ease3d: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      onLoadingComplete: function() {
        this.toggleLoader(false);
        this.isInitialized = true;
      }.bind(this)
    });
  },
  destroyCarousel: function() {
    $.data($("#imgSlideshow")[0])['plugin_Kenburns'].destroy();
    this.photos = [];
  },
  toggleLoader: function(isVisible) {
    $('#loaderContainer').toggleClass('hidden', !isVisible);
    this.isInitialized = false;
  }
};

$(function() {
  slideshow.init();
});