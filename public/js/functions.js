'use strict';

//******************************************************
//                 JavaScript
//******************************************************

(function () {

  var Menu = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.$menuButton = this.$body.find('.menu-button');
      this.$closeButton = this.$body.find('.menu-close');
      this.$headerWrapper = this.$body.find('.header-wrapper');
    },
    bindEvents: function bindEvents() {
      this.$menuButton.on('click', this.openMenu.bind(this));
      this.$closeButton.on('click', this.closeMenu.bind(this));
    },
    openMenu: function openMenu() {
      this.$headerWrapper.addClass('active-menu');
      this.$body.addClass('active-menu');
    },
    closeMenu: function closeMenu() {
      this.$headerWrapper.removeClass('active-menu');
      this.$body.removeClass('active-menu');
    }
  };

  Menu.init();
})();

(function () {

  var Greeter = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$window = $(window);
      this.$greeterWrapper = $('.greeter-wrapper');
      this.$greeter = this.$greeterWrapper.find('.greeter');
    },
    bindEvents: function bindEvents() {
      this.$window.on('load', this.activateGreeter.bind(this));
    },
    activateGreeter: function activateGreeter() {
      for (var i = 0; i < this.$greeter.length; i++) {
        this.doSetTimeout(i);
      }
    },
    doSetTimeout: function doSetTimeout(i) {
      var _this = this;

      setTimeout(function () {
        _this.$greeter[i].classList.add('active-greeter');
      }, 500 * i);
    }

  };

  Greeter.init();
})();

(function () {

  var IndexSlide = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.$window = $(window);
      this.$pageSlideBtn = this.$body.find('.page-slide-button');
      this.$aboutWrapper = this.$body.find('.about-wrapper');
    },
    bindEvents: function bindEvents() {
      this.$pageSlideBtn.on('click', this.slidePage.bind(this));
      this.$window.on('scroll', this.listener.bind(this));
    },
    slidePage: function slidePage() {
      $('html, body').animate({
        scrollTop: this.$aboutWrapper.offset().top
      }, 1200);
    },
    listener: function listener() {
      this.$x = this.$body.scrollTop();
    }
  };

  IndexSlide.init();
})();