//******************************************************
//                 JavaScript
//******************************************************


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

  Greeter.init()

})();


(function() {

  const IndexSlide = {
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$body         = $('body');
      this.$window       = $(window);
      this.$pageSlideBtn = this.$body.find('.page-slide-button');
      this.$aboutWrapper = this.$body.find('.about-wrapper');
    },
    bindEvents: function() {
      this.$pageSlideBtn.on('click', this.slidePage.bind(this));
      this.$window.on('scroll', this.listener.bind(this));
    },
    slidePage: function() {
        $('html, body').animate({
          scrollTop: this.$aboutWrapper.offset().top
        }, 1200);
    },
    listener: function() {
      this.$x = this.$body.scrollTop();
    }
  }

  IndexSlide.init();

})();

(function() {

  const Carousel = {
    images: [
      'photo-one',
      'photo-two',
      'photo-three'
   ],
  //   images: [
  //     'http://assets.blog.hemmings.com/wp-content/uploads//2013/04/DaytonaBeach1957_1500.jpg',
  //     '/imgs/56daytona.jpg',
  //     '/imgs/ncrs-back.jpg'
  //  ],
    init: function() {
      this.cacheDOM();
      this.bindEvents();
    },
    cacheDOM: function() {
      this.$body         = $('body');
      this.$window       = $(window);
      this.$indexWrapper = this.$body.find('#index-wrapper');
    },
    bindEvents: function() {
      this.$window.on('load', this.loopImages.bind(this));
    },
    slideImages: function(i) {
      setTimeout(() => {
        this.$indexWrapper.removeClass();
        this.$indexWrapper.addClass(this.images[i]);

            if (i === 2) {
              setTimeout(() => {
                this.loopImages();
              }, 5000)
            }

      }, 5000 * i);
    },
    loopImages: function() {
      for (var i = 0; i < 3; i++) {
        this.slideImages(i);
      }
    }
  }

  Carousel.init();

})();
