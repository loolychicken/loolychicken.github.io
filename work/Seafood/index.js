$(document).ready(function(){
	
    $(".current").click(function(){
        $(".bodywrapper").fadeIn(1000);
        $(".reservationWrapper").hide();
		$(".menuWrapper").hide();
    });

    $(".myButton, .footerButton, .resButton").click(function(){
        $(".bodywrapper").hide();
        $(".reservationWrapper").fadeIn(1000);
		$(".menuWrapper").hide();
       
    });
	
	$(".menuButton, .menuPageButton").click(function(){
        $(".bodywrapper").hide();
        $(".reservationWrapper").hide();
		$(".menuWrapper").fadeIn(1000);
       
    });
	

	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if(wScroll > $('.rightBox').offset().top - ($(window).height() / 1.2)) {
			$(".leftPlate").removeClass("hidden");
		}
		if(wScroll > $('.leftBox').offset().top - ($(window).height() / 1.2)) {
			$(".rightPlate").removeClass("hidden");
		}
	});
	
	
	
	
	
	
	
	
	




	
	
});	