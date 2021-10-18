jQuery(document).ready(function(){

	//STICKY HEADER
	jQuery(window).scroll(function() {    
	    var scroll = jQuery(window).scrollTop();
	    if (scroll >= 1) {
	        jQuery(".site-header").addClass("scrolled");
	    } else {
	        jQuery(".site-header").removeClass("scrolled");
	    }
	});

}); //Script End
