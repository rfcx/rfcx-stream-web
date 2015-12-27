
'use strict';

var slideshow = {
  isInitialized: false,
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $('#btnShowCarousel').click(this.onBtnShowClicked.bind(this));
    $('#btnHideCarousel').click(this.onBtnHideClicked.bind(this));
  },
  onBtnShowClicked: function() {
    this.showCarousel();
  },
  onBtnHideClicked: function() {
    this.hideCarousel();
  },
  showCarousel: function() {
    $('#btnShowCarousel').hide();
    $('#btnHideCarousel').show();
    $('#imgSlideshow').fadeIn(function() {
      if (!this.isInitialized) {
        this.initCarousel();
      }
    }.bind(this));
  },
  hideCarousel: function() {
    $('#btnHideCarousel').hide();
    $('#imgSlideshow').fadeOut('fast');
    $('#btnShowCarousel').show();
  },
  setUncloseable: function() {
    $('#btnHideCarousel').addClass('unclosable');
    return this;
  },
  initCarousel: function() {
    $("#imgSlideshow").Kenburns({
      images:[
        "/public/img/slideshow/photo1.jpg",
        "/public/img/slideshow/photo2.jpg",
        "/public/img/slideshow/photo3.jpg",
        "/public/img/slideshow/photo4.jpg",
        "/public/img/slideshow/photo5.jpg",
        "/public/img/slideshow/photo6.jpg",
        "/public/img/slideshow/photo7.jpg"
      ],
      scale:0.9,
      duration:10000,
      fadeSpeed:800,
      ease3d: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    this.isInitialized = true;
  }
};

$(function() {
  slideshow.init();
});