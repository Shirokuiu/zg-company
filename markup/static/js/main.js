'use strict';

(function () {
  var preloader = document.querySelector('.preloader');
  
  if (preloader !== null) {
    document.body.onload = function () {
      setTimeout(function () {
        if (!preloader.classList.contains('preloader--hidden')) {
          preloader.classList.add('preloader--hidden');
        }
      });
    };
  } else {
    return false
  }
})();

(function () {
  var slider = document.querySelector('.slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".slider").owlCarousel({
        loop: true,
        items: 1,
        animateOut: 'fadeOut',
        slideTransition: 'ease',
        smartSpeed: 350,
        autoplay: true
      });
    });
  }
})();

$(document).ready(function(){
  var $page = $('html, body');
    $('.home__scroll-top').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});

(function () {
  var calendar = document.querySelector('.blog__calendar-wrap');
  
  if (calendar !== null) {
    $(function() {
      $(".blog__calendar-wrap").datepicker();
    });
  }
})();

(function () {
  var headerTop = document.querySelector('.page-header__row-top');
  var scrollLink = document.querySelector('.home__scroll-top');
  
  var waypoint = new Waypoint({
    element: document.querySelector('.page-header__row-top'),
    handler: function() {
      scrollLink.classList.toggle('home__scroll-top--hidden');
    },
    offset: -200
  })
})();

(function () {
  var search = document.querySelector('.search');
  
  if (search !== null) {
    var searchItem = search.querySelector('.search__button');
    var searchForm = search.querySelector('.search__form');
    var searchExit = search.querySelector('.search__form-exit');
    var searchInput = search.querySelector('.search__form-input');
    
    var closeEsc = function (e) {
      if (e.keyCode === 27) {
        searchForm.classList.add('search__form--hidden');
      }
    }
    
    searchItem.addEventListener('click', function () {
      searchForm.classList.remove('search__form--hidden');
      searchInput.focus();
      
      document.addEventListener('keydown', closeEsc);
    });
    
    searchExit.addEventListener('click', function () {
      searchForm.classList.add('search__form--hidden');
      
      document.removeEventListener('keydown', closeEsc);
    });
  }
})();

(function () {
  var page = document.querySelector('.page');
  var hamburger = document.querySelector('.hamburger');
  var navList = page.querySelector('.main-nav__list');
  
  hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    navList.classList.toggle('main-nav__list--mobileHidden');
    page.classList.toggle('page--navOpen');
  });
})()

/*
    This file can be used as entry point for webpack!
 */
