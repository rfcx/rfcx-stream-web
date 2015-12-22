
'use strict';

var slideshow = {
  init: function() {
    this.bindEvents();
    this.initCarousel();
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
    $('#imgSlideshow').fadeIn().slick('setPosition').slick('slickPlay');
  },
  hideCarousel: function() {
    $('#btnHideCarousel').hide();
    $('#imgSlideshow').fadeOut('fast').slick('slickPause');
    $('#btnShowCarousel').show();
  },
  setUncloseable: function() {
    $('#btnHideCarousel').addClass('unclosable');
    return this;
  },
  initCarousel: function() {
    $('#imgSlideshow').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      speed: 700,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 5000
    });
  }
};

$(function() {
  slideshow.init();
});