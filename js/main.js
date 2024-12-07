const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(function () {
 $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });


  
  $(".move-up span").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

 
  AOS.init();


});
