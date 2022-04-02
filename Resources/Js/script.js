$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-destinations").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".sticky_selector").addClass("sticky");
      } else {
        $(".sticky_selector").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  $(".js--section-destinations").waypoint(
    function (direction) {
      if (direction == "down") {
        $(".mobile-nav-icon").addClass("sticky");
      } else {
        $(".mobile-nav-icon").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-destinations").offset().top },
      1000
    );
  });

  /* Navigation scroll */
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated animate__bounceInLeft");
    },
    {
      offset: "80%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated animate__bounceInRight");
    },
    {
      offset: "80%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated animate__bounceInLeft");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated animate__fadeIn");
    },
    {
      offset: "80%",
    }
  );

  $(".js--wp-5").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animated animate__heartBeat");
    },
    {
      offset: "50%",
    }
  );

  /* Mobile Navigation */

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    var mobnavicon = $(".mobile-nav-icon");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      mobnavicon.addClass("sticky-no-bg");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
      mobnavicon.removeClass("sticky-no-bg");
    }
  });
});
