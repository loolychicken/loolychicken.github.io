$(document).ready(function(){	
	
	// tweaking of the fullpage.js plugin
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		
		scrollOverflow: true,
		scrollingSpeed: 1000,
		
		afterLoad: function(anchorLink){
			var loadedSection = $(this);

			//using anchorLink
			if(anchorLink == '3rdPage'){
				$(".menuWrapper").addClass("centered");
			}
			
			//remove inactive
			if(loadedSection.hasClass("inactive")){
				loadedSection.removeClass("inactive");
			}
		},
	
		onLeave: function(index, nextIndex, direction){
			var leavingSection = $(this);

			//after leaving section 2
			if(index == 2 && nextIndex == 3){
				$(".menuWrapper").addClass("centered");
			}else if(index == 4 && nextIndex == 3){
				$(".menuWrapper").addClass("centered");
			} else {
				$(".menuWrapper").removeClass("centered");
			}
			
			//inactive toggle
			if(leavingSection.hasClass("active") && direction =='down'){
				leavingSection.addClass("inactive");
			}
		},
	});
  
	
	// play or pause video on mouse hover
		$('.homeImg').mouseenter(function() {
			$("#myVideo").addClass("display");
			var myVideo = document.getElementById("myVideo"); 
			myVideo.play(); 
		});
		$('.homeImg').mouseleave(function() {
			$("#myVideo").removeClass("display");
			var myVideo = document.getElementById("myVideo"); 
			myVideo.pause(); 
		});

		
	
	// about me section change picture on every 3 sec
		var content = $('.aboutImg');
		var backgrounds = new Array(
			'url(images/8.jpg)'
		  , 'url(images/1.jpg)'
		  , 'url(images/17.jpg)'
		 
		);
		var current = 0;
		function nextBackground() {
			current++;
			current = current % backgrounds.length;
			content.css('background-image', backgrounds[current]);
		}
		setInterval(nextBackground, 3000);
		content.css('background-image', backgrounds[0]);
		

	// work box hover stuff
		$('.workBox').mouseenter(function() {
			$(this).addClass("active"); 
		});
		
		
});	