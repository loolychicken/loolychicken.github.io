$(document).ready(function(){
	
	 $("#Trigger").click(function () {
          $("#Slider").toggleClass("slidedown slideup");
          //  if ($("#Slider").hasClass("slideup"))
          //    $("#Slider").removeClass("slideup").addClass("slidedown");
          //  else
          //      $("#Slider").removeClass("slidedown").addClass("slideup");
        });
	
	
	 $(".home").click(function() {

        $("body, html").animate({ "scrollTop":$("#0").offset().top }, 1500);
		
    });
	
	
	 $(".about").click(function() {

        $("body, html").animate({ "scrollTop":$("#1").offset().top }, 1500);
		
    });
	
	$(".team").click(function() {

        $("body, html").animate({ "scrollTop":$("#2").offset().top }, 1500);
		
    });
	
	$(".service").click(function() {

        $("body, html").animate({ "scrollTop":$("#3").offset().top }, 1500);
		
    });
	
	$(".portfolio").click(function() {

        $("body, html").animate({ "scrollTop":$("#4").offset().top }, 1500);
		
    });
	
	$(".contact").click(function() {

        $("body, html").animate({ "scrollTop":$("#5").offset().top }, 1500);
		
    });
	
	
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});

});	