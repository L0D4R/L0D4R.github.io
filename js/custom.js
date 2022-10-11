/*===============================================

Template Name: Ledge-Coming soon Template
Version: 1.0
 
================================================*/


(function ($) {
  'use strict';

  jQuery(document).ready(function () {

    // slideshow
    $('#vegaslideshow').vegas({
      delay: 5000,
      timer: false,
      shuffle: true,
      preloadImage: true,
      cover: true,
      animation: 'kenburns',
      transition: 'fade',
      transitionDuration: 3000,
      slides: [{
          src: 'img/slider/img-1.jpg'
        },
        {
          src: 'img/slider/img-2.jpg'
        },
        {
          src: 'img/slider/img-3.jpg'
        },
      ],
      overlay: 'img/slider/black_twill.png'
    });

    // preloder
    var loader = $(".loader");
    if (loader.length) {
      $('.fade-in').css({
        position: 'relative',
        opacity: 0,
        top: -14
      });
      setTimeout(function () {
        $('#preload-content').fadeOut(800, function () {
          $('.loader').fadeOut(1000);
          setTimeout(function () {
            $('.fade-in').each(function (index) {
              $(this).delay(800 * index).animate({
                top: 0,
                opacity: 1
              }, 800);
            });
          }, 800);
        });
      }, 400);
    }


    // countdown
    var launchDay = new Date(2021, 8 - 6, 10);
    $('#lg-countdown').countdown({
      until: launchDay
    });

    // firefly
    $.firefly({
      color: '#fff',
      minPixel: 1,
      maxPixel: 3,
      total: 65,
      on: '#lg-comming-firefly'
    });

    // player
    $('.player').YTPApplyFilters({
      grayscale: 8,
      opacity: 45,
      saturate: 497,
      contrast: 159
    })


  });

})(jQuery);