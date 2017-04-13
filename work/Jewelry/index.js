$(document).ready(function(){
	
	var content = $('.sitecontent');

	var backgrounds = new Array(
		'url(slike/b1.jpg)'
	  , 'url(slike/b2.jpg)'
	  , 'url(slike/b3.jpg)'
	 
	);

	var current = 0;

	function nextBackground() {
		current++;
		current = current % backgrounds.length;
		content.css('background-image', backgrounds[current]);
	}
	setInterval(nextBackground, 3000);

	content.css('background-image', backgrounds[0]);
});

$(document).ready(function(){

    console.log('jav');

    $(".current").click(function(){
        $(".sitecontent").fadeIn(1000);
        $(".collectioncontent").hide();
		$(".locationcontent").hide();
        $(".aboutcontent").hide();
		$(".contactcontent").hide();
    });

    $(".gallery").click(function(){
        $(".sitecontent").hide();
        $(".collectioncontent").fadeIn(1000);
		$(".locationcontent").hide();
        $(".aboutcontent").hide();
		$(".contactcontent").hide();
    });

    $(".place").click(function(){
        $(".sitecontent").hide();
        $(".collectioncontent").hide();
		$(".locationcontent").fadeIn(1000);
        $(".aboutcontent").hide();
		$(".contactcontent").hide();

    });

	$(".description").click(function(){
        $(".sitecontent").hide();
        $(".collectioncontent").hide();
		$(".locationcontent").hide();
        $(".aboutcontent").fadeIn(1000);
		$(".contactcontent").hide();

    });
	
	
	$(".message").click(function(){
        $(".sitecontent").hide();
        $(".collectioncontent").hide();
		$(".locationcontent").hide();
        $(".aboutcontent").hide();
		$(".contactcontent").fadeIn(1000);

    });
		
		
		var ww = document.body.clientWidth;

			//to be there on page load(without resizing the browser, to get the responsive view)
			$(function () {
				if (ww < 970) {
					//alert("size" + ww);
					console.log(ww);
					$("*").removeClass("row");
			}
	});
	
	
	$('.icon').click(function(){
		  $('nav').toggleClass('down');
		  $('nav li a').removeClass('down');
	});
	
			
	
});
