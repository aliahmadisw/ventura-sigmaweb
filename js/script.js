$(document).ready(function () {
  // افزودن کلاس به body
  $(".megamenu-parent").hover(
    function () {
      $("body").append('<div class="submenu-open"></div>');
      $(".submenu-open").css("z-index", "1");
      $(".header").css("z-index", "2");
    },
    function () {
      $(".submenu-open").remove();
      $(".header").css();
    }
  );

  // هیروسکشن
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $("#variety-of-products").css(
      "transform",
      `translateY(${-scrollTop * 0.3}px)`
    );
  });

  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $("#happy-customer").css("transform", `translateY(${scrollTop * 0.3}px)`);
  });

  // باکس سرچ
  $(".sigmaweb-search-icon").click(function () {
    $(".box-search").addClass("active");
  });

  $(".close-box-search").click(function () {
    $(".box-search").removeClass("active");
  });

  // تایمر
  let hours = 23;
  let minutes = 15;
  let seconds = 4;

  function timer_format(n) {
    return n < 10 ? "0" + n : n;
  }

  let timer = setInterval(function () {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      hours = 23;
      minutes = 15;
      seconds = 4;
      return;
    }

    if (seconds === 0) {
      seconds = 59;
      if (minutes === 0) {
        minutes = 59;
        if (hours > 0) {
          hours--;
        }
      } else {
        minutes--;
      }
    } else {
      seconds--;
    }

    $(".timer-hours").text(timer_format(hours));
    $(".timer-minutes").text(timer_format(minutes));
    $(".timer-seconds").text(timer_format(seconds));
  },1000);

  // منو موبایل
  $(".btn-menu-m").click(function () {
    $(".menu-m").toggleClass("active");
    if ($(".menu-m").hasClass("active")) {
      $("body").css("overflow", "hidden");
      $("body").append('<div class="submenu-open"></div>');
      $(".submenu-open").css("z-index", "1");
      $(this).css("z-index", "11");
      $(this).text("✖");
      $(this).addClass("active");
    } else {
      $("body").css("overflow", "auto");
      $(".submenu-open").remove();
      $(this).css("z-index", "");
      $(this).text("☰");
      $(this).removeClass("active");
    }
  });

  $(".category-menu-m").click(function () {
    $(this).toggleClass("active");
    $(this).find("ul").slideToggle();
  });

  $(".category-menu-m ul").click(function (event) {
    event.stopPropagation();
  });
});

// اسلایدر دسته ها
var swiperCategory = new Swiper(".ventura-category-products-slide", {
  loop: true,
  speed: 900,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".button-next-category-products",
    prevEl: ".button-prev-category-products",
  },
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 24,
      slidesPerView: 1,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 31,
      slidesPerView: 4,
    },
  },
});

// اسلایدر محصولات شگفت انگیز
var swiperDiscount = new Swiper(".ventura-discount-products-slide", {
  loop: true,
  speed: 900,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".button-next-discount-products",
    prevEl: ".button-prev-discount-products",
  },
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 10,
      slidesPerView: 1,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 15,
      slidesPerView: 3,
    },
  },
});

// اسلایدر محصولات پرفروش
var swiperDiscount = new Swiper(".ventura-bestseller-products-slide", {
  loop: true,
  speed: 900,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".button-next-bestseller-products",
    prevEl: ".button-prev-bestseller-products",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      // موبایل
      spaceBetween: 5,
      slidesPerView: 1,
    },
    768: {
      // تبلت
      spaceBetween: 10,
      slidesPerView: 2,
    },
    1024: {
      // دسکتاپ
      spaceBetween: 0,
      slidesPerView: 4,
    },
  },
});

/**************/
