jQuery(document).ready(function($) {
        
//jQuery to collapse the navbar on scroll
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
});