//******************************************************
//                 JavaScript
//******************************************************

"use strict";

const article = document.getElementById('article');
const title = article.dataset.title;


(function() {

  const Menu = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$body          = $('body');
      this.$menuButton    = this.$body.find('.menu-button');
      this.$closeButton   = this.$body.find('.menu-close');
      this.$headerWrapper = this.$body.find('.header-wrapper');
    },
    bindEvents: function() {
      this.$menuButton.on('click', this.openMenu.bind(this));
      this.$closeButton.on('click', this.closeMenu.bind(this));
    },
    openMenu: function() {
      this.$headerWrapper.addClass('active-menu');
      this.$body.addClass('active-menu');
    },
    closeMenu: function() {
      this.$headerWrapper.removeClass('active-menu');
      this.$body.removeClass('active-menu');
    }
  }

  Menu.init();

})();



(function() {

  const Greeter = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$window         = $(window);
      this.$greeterWrapper = $('.greeter-wrapper');
      this.$greeter        = this.$greeterWrapper.find('.greeter');
    },
    bindEvents: function() {
      this.$window.on('load', this.activateGreeter.bind(this));
    },
    activateGreeter: function() {
      for(var i = 0; i < this.$greeter.length; i++) {
        this.doSetTimeout(i);
      }
    },
    doSetTimeout: function(i) {
      setTimeout(() => {
        this.$greeter[i].classList.add('active-greeter');
      }, 500 * i)
    },

  }

  if (title === 'index') {
      Greeter.init()
  }

})();



(function() {

  const indexAboutText = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$window          = $(window);
      this.$body            = $('body');
      this.$aboutWrapper    = $('.about-wrapper');
      this.$windowHeight    = this.$window.innerHeight() - 100;
      this.$galText         = this.$aboutWrapper.find('.gallery-text');
      this.$aboutColFigure  = this.$aboutWrapper.find('.about-column-wrapper figure');
    },
    bindEvents: function() {
      this.$window.on('scroll', this.scrollEvents.bind(this));
    },
    scrollEvents: function() {
      this.$galTop = Math.floor(this.$galText.offset().top - (this.$windowHeight));


      if (this.$window.scrollTop() >= this.$galTop) {
        this.$galText.addClass('active-text');
      }

      for (var i = 0; i < this.$aboutColFigure.length; i++) {
        if (this.$window.scrollTop() >= (this.$aboutColFigure[i].offsetTop - this.$windowHeight)) {
          this.$aboutColFigure[i].classList.add('active-text');
        }
      }
    }
  }

  if (title === 'index') {
    indexAboutText.init();
  }

})();



(function() {

  const Carousel = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$body          = $('body');
      this.$window        = $(window);
      this.$indexWrapper  = this.$body.find('#index-wrapper');
      this.$carousel      = this.$body.find('.index-carousel');
    },
    bindEvents: function() {
      this.$window.on('load', this.loopImages.bind(this));
    },
    slideImages: function(i) {
      setTimeout(() => {
        this.$carousel[i].classList.add('active-slide');

            if (i === 12) {
              setTimeout(() => {
                this.loopImages();
              }, 5000)
            }

      }, 5000 * i);
    },
    loopImages: function() {
      for (var i = 0; i < 13; i++) {
        this.slideImages(i);
      }
      this.$carousel.removeClass('active-slide');
    }
  }

  if (title === 'index') {
    Carousel.init();
  }

})();


(function() {

  const AboutPage = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$body               = $('body');
      this.$window             = $(window);
      this.$aboutLeft          = this.$body.find('.about-left-col');
      this.$aboutRight         = this.$body.find('.about-right-col');
      this.$aboutLeftLi        = this.$aboutLeft.find('li');
      this.$aboutRest          = this.$body.find('.about-right-restorer');
      this.$aboutNews          = this.$body.find('.about-right-news');
      this.$aboutJudge         = this.$body.find('.about-right-judge');
      this.$aboutEvents        = this.$body.find('.about-right-events');
      this.$aboutIntroWrapper  = this.$body.find('.about-intro-wrapper');
      this.$aboutGreeting      = this.$body.find('.about-intro-display h2');
      this.$windowHeight       = this.$window.innerHeight();
    },
    bindEvents: function() {
      this.$window.on('scroll', this.listen.bind(this));
      this.$aboutLeftLi.on('click', this.animateMenu.bind(this));
      this.$window.on('load', this.aboutGreeting.bind(this));
    },
    activeMenu: function(i) {
      this.$aboutLeftLi.removeClass();
      this.$aboutLeftLi[i].classList.add('active-li');
    },
    listen: function() {
      this.$x = this.$body.scrollTop();
      this.$aboutTop = Math.floor(this.$aboutLeft.offset().top);

        if (this.$aboutTop <= this.$aboutRest.offset().top) {
          this.activeMenu(0);
        }
        if (this.$aboutTop >= this.$aboutRest.offset().top - (this.$windowHeight * .30)) {
          this.activeMenu(1);
        }
        if (this.$aboutTop >= this.$aboutNews.offset().top - (this.$windowHeight * .35)) {
          this.activeMenu(2);
        }
        if (this.$aboutTop >= this.$aboutJudge.offset().top - (this.$windowHeight * .35)) {
          this.activeMenu(3);
        }
        if (this.$aboutTop >= this.$aboutEvents.offset().top - (this.$windowHeight * .35)) {
          this.activeMenu(4);
        }

        if (this.$aboutTop > this.$aboutIntroWrapper.innerHeight()) {
          this.$aboutLeft.addClass('active-left');
        } else {
          this.$aboutLeft.removeClass('active-left');
        }

    },
    animateMenu: function(event) {
        let $self = $(event.target);

        let myObj = {
            textArray: [
                'NCRS',
                'MAGAZINE',
                'NEWS LETTER',
                'NCRS JUDGING',
                'NATIONWIDE EVENTS'
          ],
          elemArray: [
              this.$aboutRight.offset().top,
              this.$aboutRest.offset().top,
              this.$aboutNews.offset().top,
              this.$aboutJudge.offset().top,
              this.$aboutEvents.offset().top
          ]
        }

        for (var i = 0; i < myObj.elemArray.length; i++) {
          if ($self.text() === myObj.textArray[i]) {
            $('html, body').animate({
              scrollTop: myObj.elemArray[i] - (this.$windowHeight * .32)
            }, 1200);
          }
        }

    },
    aboutGreeting: function() {
        this.$aboutGreeting.addClass('active-greet');
    }
  }


  if (title === 'about') {
    AboutPage.init();
  }

})();


(function() {

  const Future = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$body                    = $('body');
      this.$window                  = $(window);
      this.$w_height                = this.$window.innerHeight() - 300;
      this.$futureSlideContainer    = $('.future-slide-container');
      this.$hotel                   = this.$body.find('.hotel');
      this.$hotelInfoContainer      = this.$body.find('.hotel-info-container');
      this.$hotelClose              = this.$body.find('.hotel-close');
    },
    bindEvents: function() {
      this.$window.on('load', this.pageLoad.bind(this));
      this.$window.on('scroll', this.activeSlider.bind(this));
      this.$hotel.on('click', this.openHotelDetails.bind(this));
      this.$hotelClose.on('click', this.closeHotelDetails.bind(this));
    },
    pageLoad: function() {
            this.$futureSlideContainer[0].classList.add('active-future-slide');
    
    },
    activeSlider: function() {
        if (this.$window.scrollTop() >= (this.$futureSlideContainer[1].offsetTop - this.$w_height )) {
            this.$futureSlideContainer[1].classList.add('active-future-slide');
        }
    },
    openHotelDetails: function(event) {
        var selectedHotel = event.target.closest('.hotel');
        var position = selectedHotel.dataset.position;
        console.log(selectedHotel);
        console.log(this.$hotelInfoContainer);
        this.$hotelInfoContainer[position].classList.add('active-hotel');
    },
    closeHotelDetails: function () {
        this.$hotelInfoContainer.removeClass('active-hotel');
    }
  }

  if (title === 'future') {
    Future.init();
  }

})();
