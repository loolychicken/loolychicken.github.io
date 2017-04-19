
  $(document).ready(function(){
   
	 $(".hp").click(function() {

        $("body, html").animate({ "scrollTop":$("#1").offset().top }, 1500);
		
    });
	
	
	 $(".sp").click(function() {

        $("body, html").animate({ "scrollTop":$("#2").offset().top }, 1500);
		
    });
	
	$(".port").click(function() {

        $("body, html").animate({ "scrollTop":$("#3").offset().top }, 1500);
		
    });
	
	$(".tp").click(function() {

        $("body, html").animate({ "scrollTop":$("#4").offset().top }, 1500);
		
    });
	
	
	$(".cp").click(function() {

        $("body, html").animate({ "scrollTop":$("#5").offset().top }, 1500);
		
    });
	var activeLink;

	$(document).ready(function(){
		var $listItems = $('.pagination li a');

		  $listItems.click(function(){
		  $listItems.removeClass('active');
		  $(this).addClass('active');  
		  var activeLink=$(this);////  store in variable and do work on pev next btn
	  });
	});
	
	$('.icon').click(function(){
		  $('nav').toggleClass('down');
		  $('nav li a').removeClass('down');
	});

});	