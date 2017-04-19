$(document).ready(function(){
  
	 $(window).bind('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.menuWrapper').addClass('fixedWrapper');
		} else {
			$('.menuWrapper').removeClass('fixedWrapper');
		}
		
	});
	
	
	$(".home").click(function() {

        $("body, html").animate({ "scrollTop":$("#0").offset().top }, 1500);
		
    });
	
	
	 $(".gallery").click(function() {

        $("body, html").animate({ "scrollTop":$("#1").offset().top }, 1500);
		
    });
	
	$(".categories").click(function() {

        $("body, html").animate({ "scrollTop":$("#2").offset().top }, 1500);
		
    });
	
	$(".pages").click(function() {

        $("body, html").animate({ "scrollTop":$("#3").offset().top }, 1500);
		
    });
	
	
});	