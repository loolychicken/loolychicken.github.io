$(document).ready(function() {

    // BACK TO TOP BUTTON
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 800) {        // If page is scrolled more than 50px
                $('#return-to-top').fadeIn(500);    // Fade in the arrow
            } else {
                $('#return-to-top').fadeOut(500);   // Else fade out the arrow
            }
        });
        $('#return-to-top').click(function() {      // When arrow is clicked
            $('body,html').animate({
                scrollTop : 0                       // Scroll to top of body
            }, 1000);
        });

	// carousel
	$('#carousel_work').owlCarousel({
        loop: false,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    });

    // menu scroll to section
    $(".section_1").click(function() {

        $("body, html").animate({ "scrollTop":$("#one").offset().top - 50 }, 1000);
        
    });
    $(".section_2").click(function() {

        $("body, html").animate({ "scrollTop":$("#two").offset().top - 50 }, 1000);
        
    });
    $(".section_3").click(function() {

        $("body, html").animate({ "scrollTop":$("#three").offset().top - 50 }, 1000);
        
    });
    $(".section_4").click(function() {

        $("body, html").animate({ "scrollTop":$("#four").offset().top - 50 }, 1000);
        
    });
    $(".section_5").click(function() {

        $("body, html").animate({ "scrollTop":$("#five").offset().top - 50 }, 1000);
        
    });


    // paralax scroll
     $(window).scroll(function(){
	  	var $windowScroll = $(this).scrollTop();
	  
	  	$('.top').each(function() {

	  		var $currentSectionTop = $(this).offset().top;

			if ( $windowScroll > $currentSectionTop ) {
				$(this).addClass('active').siblings().removeClass('active');
			}
	  	});

	  	var $activeSectionTop = $('.active').offset().top;

        
		$(".active .picture_block").css({
		  "transform" : "translate(0px, -"+ ($windowScroll - $activeSectionTop) / 15 + "%)"
		});
       
		$(".active .empty_color").css({
			"transform" : "translate(0px, -"+ ($windowScroll - $activeSectionTop) / 20 + "%)"
		});

        $(".hi.active .content").css({
            "transform" : "translate(0px, -"+ ($windowScroll - $activeSectionTop) / 15 + "%)"
        });

	});

     // header on scroll
    if (window.innerWidth > 480) {
         $(window).scroll(function(){
            var $onScroll = $(this).scrollTop();

            if ($onScroll > 0){
                $('header').addClass('innactive');
            }
            else {
                $('header').removeClass('innactive');
            }

        });
     }

     // menu show_menuon btn
     $('.show_menu').click(function(e){
        e.preventDefault();

        $('.menu').toggleClass('show');

     });


    if (window.innerWidth < 480) { 
         $('header').addClass('innactive');
    }


});