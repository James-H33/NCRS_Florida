//******************************************************
//                 JavaScript
//******************************************************

"use strict";

var article = document.getElementById('article');
var title = article.dataset.title;

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

  var Carousel = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.$window = $(window);
      this.$indexWrapper = this.$body.find('#index-wrapper');
      this.$carousel = this.$body.find('.index-carousel');
    },
    bindEvents: function bindEvents() {
      this.$window.on('load', this.loopImages.bind(this));
    },
    slideImages: function slideImages(i) {
      var _this2 = this;

      setTimeout(function () {
        _this2.$carousel[i].classList.add('active-slide');

        if (i === 12) {
          setTimeout(function () {
            _this2.loopImages();
          }, 5000);
        }
      }, 5000 * i);
    },
    loopImages: function loopImages() {
      for (var i = 0; i < 13; i++) {
        this.slideImages(i);
      }
      this.$carousel.removeClass('active-slide');
    }
  };

  if (title === 'index') {
    Carousel.init();
  }
})();

(function () {

  var AboutMenu = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.$window = $(window);
      this.$aboutLeft = this.$body.find('.about-left-col');
      this.$aboutRight = this.$body.find('.about-right-col');
      this.$aboutLeftLi = this.$aboutLeft.find('li');
      this.$aboutRest = this.$body.find('.about-right-restorer');
      this.$aboutNews = this.$body.find('.about-right-news');
      this.$aboutJudge = this.$body.find('.about-right-judge');
      this.$aboutEvents = this.$body.find('.about-right-events');
      this.$aboutIntroWrapper = this.$body.find('.about-intro-wrapper');
      this.$windowHeight = this.$window.innerHeight();
    },
    bindEvents: function bindEvents() {
      this.$window.on('scroll', this.listen.bind(this));
      this.$aboutLeftLi.on('click', this.animateMenu.bind(this));
    },
    activeMenu: function activeMenu(i) {
      this.$aboutLeftLi.removeClass();
      if (i === 0) {
        this.$aboutLeftLi[0].classList.add('active-li');
      }
      if (i === 1) {
        this.$aboutLeftLi[1].classList.add('active-li');
      }
      if (i === 2) {
        this.$aboutLeftLi[2].classList.add('active-li');
      }

      if (i === 3) {
        this.$aboutLeftLi[3].classList.add('active-li');
      }

      if (i === 4) {
        this.$aboutLeftLi[4].classList.add('active-li');
      }
    },
    listen: function listen() {
      this.$x = this.$body.scrollTop();
      this.$aboutTop = Math.floor(this.$aboutLeft.offset().top);

      if (this.$aboutTop <= this.$aboutRest.offset().top) {
        this.activeMenu(0);
      } else if (this.$aboutTop >= this.$aboutRest.offset().top - this.$windowHeight * .30) {
        this.activeMenu(1);
      }
      if (this.$aboutTop >= this.$aboutNews.offset().top - this.$windowHeight * .35) {
        this.activeMenu(2);
      }
      if (this.$aboutTop >= this.$aboutJudge.offset().top - this.$windowHeight * .35) {
        this.activeMenu(3);
      }
      if (this.$aboutTop >= this.$aboutEvents.offset().top - this.$windowHeight * .35) {
        this.activeMenu(4);
      }

      if (this.$aboutTop > this.$aboutIntroWrapper.innerHeight()) {
        this.$aboutLeft.addClass('active-left');
      } else {
        this.$aboutLeft.removeClass('active-left');
      }
    },
    animateMenu: function animateMenu(event) {
      var $self = $(event.target);

      if ($self.text() === 'NCRS') {
        $('html, body').animate({
          scrollTop: this.$aboutRight.offset().top - this.$windowHeight * .32
        }, 1200);
      } else if ($self.text() === 'MAGAZINE') {
        $('html, body').animate({
          scrollTop: this.$aboutRest.offset().top - this.$windowHeight * .30
        }, 1200);
      }
      if ($self.text() === 'NEWS LETTER') {
        $('html, body').animate({
          scrollTop: this.$aboutNews.offset().top - this.$windowHeight * .30
        }, 1200);
      }
      if ($self.text() === 'NCRS JUDGING') {
        $('html, body').animate({
          scrollTop: this.$aboutJudge.offset().top - this.$windowHeight * .30
        }, 1200);
      }
      if ($self.text() === 'NATIONWIDE EVENTS') {
        $('html, body').animate({
          scrollTop: this.$aboutEvents.offset().top - this.$windowHeight * .30
        }, 1200);
      }
    }
  };

  if (title === 'about') {
    AboutMenu.init();
  }
})();

(function () {

  var Future = {
    init: function init() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function cacheDOM() {
      this.$body = $('body');
      this.$window = $(window);
      this.$futureSlideContainer = $('.future-slide-container');
    },
    bindEvents: function bindEvents() {
      this.$window.on('load', this.pageLoad.bind(this));
      this.$window.on('scroll', this.addClasses.bind(this));
    },
    pageLoad: function pageLoad() {
      this.$futureSlideContainer[0].classList.add('active-future-slide');
    },
    addClasses: function addClasses() {
      var scrollHTML = $('html').scrollTop();
      var scrollBody = $('body').scrollTop();
      var w_height = this.$window.innerHeight();

      // Add a ID to the next event section in order to fire off event correctly
      //   if (scrollHTML > this.$nationalMem.offset().top - (w_height / 2) || scrollBody > this.$nationalMem.offset().top - (w_height / 2)) {
      //      this.$memSlideContainer[1].classList.add('active-member-slide');
      //   }
    }
  };

  if (title === 'future') {
    Future.init();
  }
})();