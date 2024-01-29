const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const slides = document.querySelectorAll(".slide");

let index = -1; // Start with index -1 to initially show no slide
display(index);

function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  if (index >= 0) {
    slides[index].style.display = "flex";
  }
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

(function ($) {
  "use strict";

  // Testimonial Carousel
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      animateOut: "slideOutDown",
      animateIn: "zoomIn",
      loop: true,
      margin: 0,
      nav: true,
      smartSpeed: 300,
      autoplay: 7000,
      navText: [
        '<span class="arrow-left"></span>',
        '<span class="arrow-right"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
      },
    });
  }
})(window.jQuery);

// Nav

$(".js-menu").on("click", () => {
  $(".js-menu").toggleClass("active");
  $(".js-nav").toggleClass("open");
  $(".js-nav__list").toggleClass("show");
});

//  OWL

$(".cardss").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    100: {
      items: 1,
    },
  },
});
$(".owl-prev").html('<i class="bi bi-arrow-left-square-fill icon arrow"></i>');
$(".owl-next").html(
  '<i class="bi bi-arrow-right-square-fill icon arrow2"></i>'
);

$(".cardd").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    100: {
      items: 1,
    },
  },
});

//  Products

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      $(".filter").show("1000");
    } else {
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".filter-button").removeClass("active");
      $(this).addClass("active");
    }
  });
});
