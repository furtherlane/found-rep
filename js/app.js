// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

/* menu icon toggle */
$(".tab-bar .menu-icon").click(function() {
	$(this).toggleClass( "open" );
	$("#menu-icon-section").toggleClass("open");
});


/* search icon toggle */
$("#search-button").click(function(){
	
	if($(".search-section.noshow")) {
		$(".search-section").toggleClass("noshow");		
	}
	else {
		$(".search-section").toggleClass("noshow");		
	}
	
	$("a#search-button").toggleClass("triangle");
	$("a#search-button").toggleClass("no-triangle");
	$("input[type='text'].search-bar").focus();
});

/* call superfish 1.7.4 menu function */
jQuery('ul#nav-list.sf-menu').superfish();
