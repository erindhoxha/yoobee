
$("#button-scroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio-work").offset().top},
        'slow');
});
