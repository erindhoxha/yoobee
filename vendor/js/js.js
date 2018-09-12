
$("#button-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#skill-images").offset().top},
        'slow');
});


$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      var $img = $("#imagelogo");
      $img.toggleClass('invert', $(this).scrollTop() > $img.height());
      var $navLink = $(".nav-link");
      $navLink.toggleClass('invert', $(this).scrollTop() > $navLink.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".light-navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
$(".all-button").on('click',function() {
  $(".web").show(500);
  $(".mobile").show(500);
  $(".design").show(500);

})
  $(".mobile-button").on('click' ,function() {
    $(".web").css("display","none");
    $(".design").css("display","none");
    $(".mobile").css("display","block");
  });

  $(".web-button").on('click' ,function() {
    $(".mobile").css("display","none");    
    $(".web").css("display","block");
    $(".design").css("display","none");
  });

  $(".design-button").on('click' ,function() {
    $(".mobile").css("display","none");
    $(".design").css("display","block");
    $(".web").css("display","none");
  });

  $(".arrow-down").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio-work").offset().top},
        'slow');
});