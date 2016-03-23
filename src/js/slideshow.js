'use strict';

var slideshow = {
  // set disabled mode for slideshow by default - let's say most browsers support webgl, so we will not show slideshow on load
  currentMode: '3d',
  isInitialized: false,
  // array of current photoset's photos
  photos: [],
  // photosets ajax responses will be stored here
  photosCache: {},
  init: function() {
    // if browser doesn't support webgl, then set current view mode to slideshow
    if (!window.isVisualizationSupported || !window.isAudioContextSupported) {
      this.currentMode = 'slideshow';
    }
    this.bindEvents();
  },
  bindEvents: function() {
    // when we change stream by clicking on menu button
    $(queue).on('stream-changed', this.onStreamChanged.bind(this));
    $('#btnShowCarousel').click(this.onBtnShowClicked.bind(this));
    $('#btnHideCarousel').click(this.onBtnHideClicked.bind(this));
  },
  onStreamChanged: function() {
    // if slideshow was initialized, then destroy it to init new one
    if (this.isInitialized) {
      this.destroyCarousel();
    }
    if (this.currentMode === 'slideshow') {
      this.showCarousel();
    }
  },
  onBtnShowClicked: function() {
    // set current mode to slideshow when user clicked on "Show Slideshow" button while he see webgl canvases
    this.currentMode = 'slideshow';
    this.showCarousel();
  },
  onBtnHideClicked: function() {
    // set current mode to 3d when user closes slideshow by clicking on X button
    this.currentMode = '3d';
    this.hideCarousel();
  },
  showCarousel: function() {
    this.getPhotoset();
    $('#btnShowCarousel').hide();
    $('#btnHideCarousel').show();
    $('#imgSlideshow').fadeIn();
    window.isVisualizationEnabled = false;
  },
  hideCarousel: function() {
    $('#btnHideCarousel').hide();
    $('#imgSlideshow').fadeOut('fast', function() {
      this.destroyCarousel();
    }.bind(this));
    $('#btnShowCarousel').show();
    window.isVisualizationEnabled = true;
  },
  setUncloseable: function() {
    // when browser doesn't support webgl, we will show only slideshow, so X button is redundant in this case
    $('#btnHideCarousel').addClass('unclosable');
    return this;
  },
  getPhotoset: function() {
    var photosetId = queue.stream.flickr_photoset_id;
    this.toggleLoader(true);
    // if we have already requested this photosed in current session, then get it from cache
    if (this.photosCache[photosetId]) {
      this.getPhotos(this.photosCache[photosetId]);
    }
    else {
      $.ajax({
        url: 'https://api.flickr.com/services/rest',
        type: 'GET',
        dataType: "jsonp",
        jsonp: "jsoncallback",
        data: {
          method: 'flickr.photosets.getPhotos',
          format: 'json',
          api_key: '7b547aa9677a147677cfa44f21151be1',
          photoset_id: photosetId
        },
        success: function(res) {
          if (res && res.photoset && res.photoset.photo) {
            // save photoset data to local cache
            this.photosCache[photosetId] = res;
            this.getPhotos(res);
          }
        }.bind(this),
        error: function(err) {
          console.log('err', err);
          this.toggleLoader(false);
          this.hideCarousel();
        }.bind(this)
      });
    }
  },
  getPhotos: function(data) {
    for (var i = 0; i < data.photoset.photo.length; i++) {
      this.photos.push(this.getImageUrl(data.photoset.photo[i]));
    }
    this.initCarousel();
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
      onLoadingFirstComplete: function() {
        this.toggleLoader(false);
        this.isInitialized = true;
      }.bind(this)
    });
  },
  destroyCarousel: function() {
    if ($.data($("#imgSlideshow")[0])['plugin_Kenburns']) {
      $.data($("#imgSlideshow")[0])['plugin_Kenburns'].destroy();
    }
    this.photos = [];
  },
  toggleLoader: function(isVisible) {
    $('#loaderContainer').toggleClass('loading-carousel', isVisible);
    this.isInitialized = false;
  }
};

$(function() {
  slideshow.init();
});