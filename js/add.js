// start page on top when refreshed
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


// smooth scrolling
$('a.nav').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1100);
    return false;
});
