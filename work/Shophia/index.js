$(document).ready(function(){
  
 $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menuWrapper').addClass('fixedWrapper');
    } else {
        $('.menuWrapper').removeClass('fixedWrapper');
    }
	
});

});	