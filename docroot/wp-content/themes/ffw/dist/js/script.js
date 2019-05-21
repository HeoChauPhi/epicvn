/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire, audiojs*/

(function($) {
  var iScrollPos = 0;

  // Swich when web loading on mobile or small device
  function mobileMenu() {
    if( $(this).hasClass('menu-responsive') ) {
      $('.block-user-login-mobile').hide();
      $('.block-navigation .main-menu').slideToggle();
      $('.block-user-menu').removeClass('active');
      $(this).toggleClass('active');
    }
    if( $(this).hasClass('block-user-menu') ) {
      $('.block-navigation .main-menu').hide();
      $('.block-user-login-mobile').slideToggle();
      $('.menu-responsive').removeClass('active');
      $(this).toggleClass('active');
    }
  }

  function mobileMenuExpand() {
    $(this).next('.nav-drop, .mega-menu').slideToggle();
    $(this).find('> .fas').toggleClass('fa-angle-down fa-angle-up');
  }

  // Back to Top
  function backToTopShow() {
    var height_show = $('.header').outerHeight(true) + $('.feature').outerHeight(true);

    if ($(this).scrollTop() > height_show) {
      $('.js-back-top').addClass('btn-show');
    } else {
      $('.js-back-top').removeClass('btn-show');
    }
  }

  function backToTop() {
    $("html, body").animate({ scrollTop: 0 }, 600);
  }

  // Scroll Down
  function scrollDown() {
    var height_scroll = $('.header-full').outerHeight(true);

    $("html, body").animate({ scrollTop: height_scroll }, 600);
  }

  // Counter up
  function counterUp() {
    $('.js-count-up').counterUp({
      delay: 5,
      time: 500
    });
  }

  /* ==================================================================
   *
   * Loading Jquery
   *
   ================================================================== */
  $(document).ready(function() {
    // Call to function
    $('.js-toogle--menu').on('click', mobileMenu);
    $('.js-toggle-menu-expanded').on('click', mobileMenuExpand);
    //$('select').selectmenu();
    $('.js-back-top').on('click', backToTop);
    $('.js-scroll-down').on('click', scrollDown);
    $('.block-products .product-item-inner').matchHeight();
    $('.js-quicktab').tabs();
    $( ".js-accordion" ).accordion({
      heightStyle: "content",
      header: '> .accordion-item > .accordion-title'
    });
    /*$('.woocommerce-product-gallery__image > a').on('click', function() {
      $.fancybox.open( $('.woocommerce-product-gallery__image > a'), {
        touch: false,
        infobar: false
      });
      return false;
    });*/
  });

  $( document ).ajaxComplete(function() {
    // Call to function
  });

  $(window).scroll(function() {
    backToTopShow();
  });

  $(window).load(function() {
    // Call to function

    $('.single-product-details .entry-images .thumbnails').clone().appendTo('.single-product-details .entry-images').addClass('thumbnails-clone');

    $('.single-product-details .entry-images .thumbnails-clone .yith_magnifier_thumbnail a').mouseenter(function() {
      var index_thumb = $('.thumbnails-clone .yith_magnifier_thumbnail a').index( this );

      $('.single-product-details .entry-images .thumbnails:not(.thumbnails-clone) .yith_magnifier_thumbnail a:eq('+index_thumb+')').trigger('click');
      return false;
    });
  });

  $(window).resize(function() {
    // Call to function
  });

})(jQuery);