/* tells brackets that $ and jQuery will exist globally even though they do not exist in this script 
jslink browser: true
global $, jQuery
*/

$(document).ready(function() {

    /* For sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky'); /* when user scrolls down past features section show sticky nav class */
        } else {
            $('nav').removeClass('sticky'); /* when user scrolls up past features section remove sticky nav class */
        }
    }, {
        offset: '60px;' /* not sure why ; is inside quotes and also works without ; */
    });
    
    
    /* scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });

    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500); 
    });
    
    /* Navigation Scroll */
  /*  $('a[href*=#]').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        event.preventDefault();
        });
    */
    
    /* Navigation SMOOTH Scroll */
    $("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUpBig'); 
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn'); 
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse'); 
    }, {
        offset: '50%'
    });
    
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
       
        nav.slideToggle(200);
    });
    
    
    
});


