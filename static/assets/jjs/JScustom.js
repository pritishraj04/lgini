// Custom JavaScript
document.addEventListener("DOMContentLoaded", function (event) {
  "use strict";

  // sticky header
  function headerSticky() {
    var windowPos = window.scrollTop;
    if (windowPos > 20) {
      document.querySelector(".fixed-top").classList.add("on-scroll");
      document
        .querySelector(".light-nav-on-scroll")
        .classList.add("dtr-menu-light")
        .removeClass("dtr-menu-dark");
      document
        .querySelector(".dark-nav-on-scroll")
        .classList.add("dtr-menu-dark")
        .removeClass("dtr-menu-light");
    } else {
      document.querySelector(".fixed-top").classList.removeClass("on-scroll");
      document
        .querySelector(".light-nav-on-load")
        .classList.add("dtr-menu-light")
        .removeClass("dtr-menu-dark");
      document
        .querySelector(".dark-nav-on-load")
        .classList.add("dtr-menu-dark")
        .removeClass("dtr-menu-light");
    }
  }
  headerSticky();
  document.querySelector(window).scroll(headerSticky);

  // main menu
  document.querySelector(".main-navigation .sf-menu").superfish({
    delay: 100,
    animation: { opacity: "show", height: "show" },
    speed: 300,
  });

  // menudropdown auto align
  var wapoMainWindowWidth = document.querySelector(window).width();
  document.querySelector(".sf-menu ul li").mouseover(function () {
    // checks if third level menu exist
    var subMenuExist = document
      .querySelector(this)
      .querySelector(".sub-menu").length;
    if (subMenuExist > 0) {
      var subMenuWidth = document
        .querySelector(this)
        .querySelector(".sub-menu")
        .width();
      var subMenuOffset =
        document
          .querySelector(this)
          .querySelector(".sub-menu")
          .parent()
          .offset().left + subMenuWidth;

      // if sub menu is off screen, give new position
      if (subMenuOffset + subMenuWidth > wapoMainWindowWidth) {
        var newSubMenuPosition = subMenuWidth;
        document.querySelector(this).querySelector(".sub-menu").css({
          left: -newSubMenuPosition,
          top: "0",
        });
      }
    }
  }); // menu ends

  // scrollspy
  document.querySelector("body").scrollspy({
    offset: 120,
    target: ".dtr-scrollspy",
  });

  // nav scroll
  if (document.querySelector("#dtr-header-global").length) {
    var navoffset = document.querySelector("#dtr-header-global").height();
    document
      .querySelector('.dtr-nav a[href^="#"], .dtr-scroll-link')
      .addEventListener("click", function (e) {
        event.preventDefault();
        document.querySelector("html, body").animate(
          {
            scrollTop:
              document
                .querySelector(document.querySelector(this).attr("href"))
                .offset().top -
              navoffset -
              37,
          },
          "slow",
          "easeInSine"
        );
      });
  } else {
    document
      .querySelector(".dtr-scroll-link")
      .addEventListener("click", function (e) {
        event.preventDefault();
        document.querySelector("html, body").animate(
          {
            scrollTop: document
              .querySelector(document.querySelector(this).attr("href"))
              .offset().top,
          },
          "slow",
          "easeInSine"
        );
      });
  }

  // responsive header nav scroll
  var mnavoffset = document.querySelector(".dtr-responsive-header").height();
  var scroll = new SmoothScroll(".dtr-responsive-header-menu a", {
    speed: 500,
    speedAsDuration: true,
    offset: mnavoffset + 15,
  });

  // responsive menu
  document.querySelector(".main-navigation .dtr-nav").slicknav({
    label: "",
    prependTo: ".dtr-responsive-header-menu",
    closedSymbol: "",
    openedSymbol: "",
    allowParentLinks: "true",
    menuButton: "#dtr-menu-button",
    closeOnClick: true,
  });
  // responsive scrollspy
  document.querySelector(".slicknav_nav").classList.add("dtr-scrollspy");

  // responsive menu button
  document
    .querySelector("#dtr-menu-button")
    .addEventListener("click", function (e) {
      document.querySelector(".slicknav_nav").slideToggle();
    });

  // responsive menu hamburger
  var $hamburger = document.querySelector("#dtr-menu-button");
  $hamburger.addEventListener("click", function (e) {
    $hamburger.classList.toggle("is-active");
  });

  // testimonial
  document.querySelector(".dtr-testimonial-slider").slick({
    centerMode: true,
    centerPadding: "150px",
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          centerPadding: "90px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // img slider 3col
  document.querySelector(".dtr-img-slider-3col").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // img slider 6col
  document.querySelector(".dtr-img-slider-6col").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // img slider 1col
  document.querySelector(".dtr-img-slider-1col").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // wow animations
  if (document.querySelector(window).outerWidth() >= 767) {
    new WOW().init({
      mobile: false,
    });
  }

  // parallax
  if (document.querySelector(window).outerWidth() >= 767) {
    document.querySelector(".parallax").parallaxie({
      speed: 0.6,
      size: "auto",
    });
    document.querySelector(".parallax.parallax-slow").parallaxie({
      speed: 0.3,
    });
  }

  // video popup
  document.querySelector(".dtr-video-popup").venobox();

  // Popup video
  document.querySelector(".popup-video").magnificPopup({
    disableOn: 320,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 150,
    preloader: false,
    fixedContentPos: false,
  });

  // Popup image
  document.querySelector(".popup-image").magnificPopup({
    type: "image",
  });

  // Popup gallery
  document.querySelector(".popup-gallery").magnificPopup({
    type: "image",
    mainClass: "mfp-fade",
    removalDelay: 150,
    gallery: {
      enabled: true,
    },
  });

  // Custom Selects
  document.querySelector(".dtr-select").select2({
    minimumResultsForSearch: -1,
    dropdownAutoWidth: false,
  });

  //Contact form
  document.querySelector(function () {
    var v = document.querySelector("#contactform").validate({
      submitHandler: function (form) {
        document.querySelector(form).ajaxSubmit({
          target: "#result",
          clearForm: true,
        });
      },
    });
  });
  //To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
  document.querySelector("#contactform #message").val("");
}); // document ready

// on load
window.addEventListener("load", function () {
  // preloader
  document.querySelector(".dtr-preloader").delay(400).fadeOut(500);
}); // close on load
