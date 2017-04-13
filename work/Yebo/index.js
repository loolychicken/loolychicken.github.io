$(document).ready(function(){
		
		
	 $(".about").click(function() {

        $("body, html").animate({ "scrollTop":$("#0").offset().top }, 1500);
		
    });
	
	
	 $(".work").click(function() {

        $("body, html").animate({ "scrollTop":$("#1").offset().top }, 1500);
		
    });
	
	$(".shop").click(function() {

        $("body, html").animate({ "scrollTop":$("#2").offset().top }, 1500);
		
    });
	
	$(".contact").click(function() {

        $("body, html").animate({ "scrollTop":$("#3").offset().top }, 1500);
		
    });
		
		$(window).scroll(function() {
			  if ($(document).scrollTop() > 50) {
				$('.menu').addClass('shrink');
			  } else {
				$('.menu').removeClass('shrink');
			  }
			});
					
		
		$('.icon').click(function(){
		  $('nav').toggleClass('down');
		  $('nav li a').removeClass('down');
		});
	
});	