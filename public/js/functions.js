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
    },
    closeMenu: function closeMenu() {
      this.$headerWrapper.removeClass('active-menu');
    }
  };

  Menu.init();
})();