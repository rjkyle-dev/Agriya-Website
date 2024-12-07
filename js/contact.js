

$(document).ready(function () {
  const $nav = $(".nav-items");
  const $navlink = $(".nav-link");
  const $social = $(".social");
  const $toggleCollapse = $(".toggle-collapse");

  // Toggle visibility of nav-items, nav-links, and social links on mobile
  $toggleCollapse.click(function () {
    if ($(window).width() <= 750) {
      // If nav-items, nav-links, and social are hidden, show them, else hide them
      if (
        $nav.css("display") === "none" &&
        $social.css("display") === "none" &&
        $navlink.css("display") === "none"
      ) {
        $nav.css("display", "block");
        $social.css("display", "block");
        $navlink.css("display", "block");
      } else {
        $nav.css("display", "none");
        $social.css("display", "none");
        $navlink.css("display", "none");
      }
    }
    if ($(window).width() > 1200) {
      $navlink.css("display", "block");
      $social.css("display", "block");
    }
  });

});
