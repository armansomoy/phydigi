$(function () {

    //  Fixed Header
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".header").addClass("header--fixed");
        } else {
            $(".header").removeClass("header--fixed");
        }
    });

    //  Banner slider
    $(".banner__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        speed: 500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
    });


    //  Banner slider
    $(".pharmacy__app__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        cssEase: 'linear',
        speed: 500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
    });

    // veno box
    $('.venobox').venobox({
        bgcolor    : '#53bfb4',
        spinner    : 'cube-grid',
        border     : '10px',
        frameheight: '82vh',
    });

    // scroll top
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 50);
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $(".scroll-top").fadeIn();
        } else {
            $(".scroll-top").fadeOut();
        }
    });

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

});

// Form Validation JS
(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})();