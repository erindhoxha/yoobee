
$("#button-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio-work").offset().top},
        'slow');
});


$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".light-navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

