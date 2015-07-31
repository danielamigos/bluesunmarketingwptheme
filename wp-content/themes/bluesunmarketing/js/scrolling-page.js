jQuery(document).ready(function($) {
        
//jQuery to collapse the navbar on scroll   Available at all Sam’s Clubs
        $(window).scroll(function() {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
        });
        
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
                $('a.page-scroll').bind('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                });
        });
        
        $(window).scroll(function () {
          var s = $(window).scrollTop(),
                d = $(document).height(),
                c = $(window).height();
                var scrollPercent = (s / (d-c)) * 100;
                var position = scrollPercent;
           $(".progress-bar").css('width', position+'%');
		   
		   var sprite1Offset = 500;
		   var sprite1 = $('#chart-sprite'); 
		   var sprite1TriggerTop = $('#trigger1').offset().top;
		   var sprite1TriggerHeight = $('#trigger1').height();
		   var sprite1Width = $(sprite1).width();
		   var sprite1Frames = 20;
		   var offsettedPosition = s+sprite1Offset;
		   
		   if (sprite1TriggerTop <= offsettedPosition && offsettedPosition <= sprite1TriggerTop+sprite1TriggerHeight)
		   {
		   		var sprite1Position = offsettedPosition-sprite1TriggerTop; 
				var range = sprite1TriggerHeight/sprite1Frames;
				var index = Math.floor(sprite1Position/range); 
				if (index == sprite1Frames)
					index = index -1;
				$(sprite1).css('background-position-x',(-index*sprite1Width)+'px');	
		   }
		   else if(sprite1TriggerTop > offsettedPosition)
					$(sprite1).css('background-position-x','0px');
			else if( offsettedPosition > sprite1TriggerTop+sprite1TriggerHeight)
					$(sprite1).css('background-position-x',(-(sprite1Frames-1)*sprite1Width)+'px');	
		   
		   var sprite2Offset = 500;
		   var sprite2 = $('#light-bulb-sprite'); 
		   var sprite2TriggerTop = $('#trigger2').offset().top;
		   var sprite2TriggerHeight = $('#trigger2').height();
		   var sprite2Width = $(sprite2).width();
		   var sprite2Frames = 20;
		   offsettedPosition = s+sprite2Offset;
		   
		   if (sprite2TriggerTop <= offsettedPosition && offsettedPosition <= sprite2TriggerTop+sprite2TriggerHeight)
		   {
		   		var sprite2Position = offsettedPosition-sprite2TriggerTop; 
				var range = sprite2TriggerHeight/sprite2Frames;
				var index = Math.floor(sprite2Position/range); 
				if (index == sprite2Frames)
					index = index -1;
				$(sprite2).css('background-position-x',(-index*sprite2Width)+'px');	
		   }
		   else if(sprite2TriggerTop > offsettedPosition)
					$(sprite2).css('background-position-x','0px');
			else if( offsettedPosition > sprite2TriggerTop+sprite2TriggerHeight)
					$(sprite2).css('background-position-x',(-(sprite2Frames-1)*sprite2Width)+'px');	
        });
        
        $('.next-section-button a').click(function(event){
                event.preventDefault();
                var activeMenu = $('.scrolling-page-menu').find('li.active');
                if(activeMenu.next('li').length==1)
                {
                        var link = activeMenu.next('li').find('a');
                        var $anchor = $(link);
                        $('html, body').stop().animate({
                                scrollTop: $($anchor.attr('href')).offset().top
                                }, 1500, 'easeInOutExpo');
                        event.preventDefault();
                }
        });
        
        $('.plus-sign').click(function(event){
                event.preventDefault();
                var target = $(this).attr('data-expand-class');
                console.log(target);
                $('.'+target).toggle('slow');
        });      
        
        var slideshows = $('.catapult-slideshow');
		$.each(slideshows, function(index,slideshow){
			var $slideshow = $(slideshow);
			var $wrapper = $slideshow.find('.catapult-slideshow-wrapper');
    		$slideshow.find('.catapult-slide').first().clone().appendTo($wrapper);	
			var $slides = $slideshow.find('.catapult-slide');
			var numberOfSlides = $slides.length-1;
			
			var slideWidth = $slideshow.width();
			$slides.width(slideWidth);
			var inTransition = false;
			var slideShowInterval;
			var speed = $slideshow.attr('data-speed');
			var startPos = $slideshow.attr('data-start-position');
			if (!speed) speed = 4000;
			if (!startPos) startPos = 0;
			var currentPos = startPos;
			
			
			$slides.wrapAll('<div class="catapult-slides-holder"></div>');
			$slides.css({ 'float' : 'left' });
			$slideshow.find('.catapult-slides-holder').css('width', slideWidth * (numberOfSlides+1));
			$slideshow.find('.catapult-slides-holder').css('marginLeft', slideWidth*-currentPos);	
			$slideshow.find('.catapult-slide img').css('display', 'block');
			
			slideShowInterval = setInterval(function(){ NextSlide($wrapper); }, speed);
			$slideshow.attr('data-speed',speed);
			$slideshow.attr('data-slideshow-interval',slideShowInterval);
			$slideshow.attr('data-number-slides',numberOfSlides);
			$slideshow.attr('data-current-position',currentPos);
			$slideshow.attr('data-in-transition',inTransition);
			//$slideshow.find('.catapult-slides-holder').click(function(){ NextSlide(this); });
			
			ResizeSlides($slideshow);				
		});			
		
		$(window).resize(function(){	
	        var slideshows = $('.catapult-slideshow');
			$.each(slideshows, function(index,slideshow){
				var $slideshow = $(slideshow);
				ResizeSlides($slideshow);
			});
		});
		
		$(window).bind('orientationchange', function (e) { 
			setTimeout(function () {
		        var slideshows = $('catapult-slideshow');
				$.each(slideshows, function(index,slideshow){
					var $slideshow = $(slideshow);
					ResizeSlides($slideshow);
				});
			}, 500);
		});
		
		function ResizeSlides(slideshow)
		{		
			var $slideshow = $(slideshow);
			var slideWidth = $slideshow.width();				
			var numberOfSlides = $slideshow.attr('data-number-slides',numberOfSlides);	
			var currentPos = $slideshow.attr('data-current-position',currentPos);
			$slideshow.find('.catapult-slideshow-wrapper').width(slideWidth);
			$slideshow.find('.catapult-slide').width(slideWidth);	
			$slideshow.find('.catapult-slides-holder').css('width', slideWidth * (numberOfSlides+1));
			$slideshow.find('.catapult-slides-holder').css('marginLeft', slideWidth*-currentPos);		
		}

		function NextSlide(element)
		{		
			var $slideshow = $(element).closest('.catapult-slideshow');
		 	var inTransition = parseBool($slideshow.attr('data-in-transition'));
			if (inTransition == false)
			{
				
				$slideshow.attr('data-in-transition',true);
				var slideWidth = parseInt($slideshow.width());	
				var currentPos = parseInt($slideshow.attr('data-current-position'));
				var numberOfSlides = parseInt($slideshow.attr('data-number-slides'));
				
				$slideshow.find('.catapult-slides-holder').animate({'marginLeft' : slideWidth*-(currentPos+1)},function(){
					currentPos++;
					if (currentPos == numberOfSlides)
					{
						$slideshow.find('.catapult-slides-holder').css({'marginLeft':0});
						currentPos = 0;
					}				
					$slideshow.attr('data-current-position',currentPos);
					$slideshow.attr('data-in-transition',false);
				});
			}
		}
	
		function PreviousSlide(element)
		{						
			var $slideshow = $(element).closest('.catapult-slideshow');
		 	var inTransition = parseBool($slideshow.attr('data-in-transition'));
			if (inTransition == false)
			{
				$slideshow.attr('data-in-transition',true);
				var slideWidth = parseInt($slideshow.width());	
				var currentPos = parseInt($slideshow.attr('data-current-position',currentPos));
				var numberOfSlides = parseInt($slideshow.attr('data-number-slides'));
				currentPos--;
				if (currentPos == -1)
				{
					currentPos = numberOfSlides-1;
					$slideshow.find('.catapult-slides-holder').css({'marginLeft':slideWidth*-(currentPos+1)});
				}
				
				$('#catapultSlidesHolder').animate({'marginLeft' : slideWidth*-(currentPos)},function(){
					$slideshow.attr('data-current-position',currentPos);
					$slideshow.attr('data-in-transition',false);
				});
			}
		}
		
		function PauseSlide(element)
		{
			var $slideshow = $(element).closest('.catapult-slideshow');
			var slideShowInterval = parseInt($slideshow.attr('data-slideshow-interval'));
			if (slideShowInterval != -1)
			{
				clearInterval(slideShowInterval);
				$slideshow.attr('data-slideshow-interval',-1);
			}
			else	
			{
				var speed = parseInt($slideshow.attr('data-speed'));
				slideShowInterval = setInterval(function(){ NextSlide(element); }, speed); 
				$slideshow.attr('data-slideshow-interval',slideShowInterval);
			}
		}
		
		function GoToSlide(element,index)
		{
			index = parseInt(index);
			var $slideshow = $(element).closest('.catapult-slideshow');
		 	var inTransition = parseBool($slideshow.attr('data-in-transition'));
			if (inTransition == false)
			{
				var slideWidth = parseInt($slideshow.width());	
				var currentPos = parseInt($slideshow.attr('data-current-position'));
				if (index != currentPos)
				{
					$slideshow.attr('data-in-transition',true);
					$slideshow.find('.catapult-slides-holder').animate({'marginLeft' : slideWidth*-(index)},function(){
						$slideshow.attr('data-current-position',index);				
						$slideshow.attr('data-in-transition',false);
					});
				}
			}
		}
		
	
		$('.previous-slide').click(function(event)
		{							
			event.preventDefault();
			PreviousSlide(this)
		});
		
		$('.pause-slide').click(function(event)
		{
			event.preventDefault();
			PauseSlide(this);
		});
		
		$('.next-slide').click(function(event)
		{
			event.preventDefault();
			NextSlide(this);
		});
	
	//http://stackoverflow.com/questions/344615/scroll-position-of-div-with-overflow-auto
	//http://jsfiddle.net/cc5712/es5zW/
	
	/*
		if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;
		 
		function wheel(event) {
		    var delta = 0;
		    if (event.wheelDelta) delta = event.wheelDelta / 120;
		    else if (event.detail) delta = -event.detail / 3;
		 
		    handle(delta);
		    if (event.preventDefault) event.preventDefault();
		    event.returnValue = false;
		}
		 
		function handle(delta) {
		    var time = 1000; // delay time
		    var distance = 300; // delta point 
		    // Dom where it will apply 
		    $('html, body').stop().animate({
		        scrollTop: $(window).scrollTop() - (distance * delta)
		    }, time );
		}*/
	
});


function parseBool(string) {
    var temp = string.toLowerCase();
    return (temp == 'true');
}


