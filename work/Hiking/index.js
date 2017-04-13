$(document).ready(function(){
	
  $(window).scroll(function(){
	  
	  var wScroll = $(this).scrollTop();
	  
	   $(".secondm").css({
		  "transform" : "translate(0px, "+ wScroll / 12 + "%)"
	  });
	  $(".thirdf").css({
		  "transform" : "translate(0px, -"+ wScroll / 60 + "%)"
	  });
  });
  
  	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none',
		nextEffect	: 'show'
	});
	
	$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding : 0
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
	
	
		 var amountScrolled = 300;

	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.back-to-top').fadeIn('slow');
		} else {
			$('a.back-to-top').fadeOut('slow');
		}
	});
	$('a.back-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if(wScroll > $('.posts').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('.posts').offset().top +$(window).height() - 400);

    $('.postRowL').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.postRowR').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
	});
	
	$(document).ready(function () {
		$('.abutton').on('click', function (event) {
			$('.moreContent').fadeIn();
		});
	});
	
	
});	