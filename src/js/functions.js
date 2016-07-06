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
    },
    closeMenu: function() {
      this.$headerWrapper.removeClass('active-menu');
    }
  }

  Menu.init();

})()
