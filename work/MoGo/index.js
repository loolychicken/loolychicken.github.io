$(document).ready(function(){
  
  $("#1").click(function() {

        $("body, html").animate({ "scrollTop":$(".area1").offset().top }, 1500);
		
    });
	
	 $("#2").click(function() {

        $("body, html").animate({ "scrollTop":$(".area4").offset().top }, 1500);
		
    });
	
	$("#3").click(function() {

        $("body, html").animate({ "scrollTop":$(".area10").offset().top }, 1500);
		
    });
	
	$("#4").click(function() {

        $("body, html").animate({ "scrollTop":$(".area14").offset().top }, 1500);
		
    });
	
	
	$("#5").click(function() {

        $("body, html").animate({ "scrollTop":$(".area16").offset().top }, 1500);
		
    });
	
		
	
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function(){
			this.classList.toggle("active");
			$(this).siblings().removeClass("active");
			this.nextElementSibling.classList.toggle("show");
			$(this).siblings().next().removeClass("show");
		}
	}
	
	$('.icon').click(function(){
		  $('nav').toggleClass('down');
		  $('nav li a').removeClass('down');
		});

	
});	