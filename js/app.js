// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(".tab-bar .menu-icon").click(function() {
	$(this).toggleClass( "open" );
	$("#menu-icon-section").toggleClass("open");
});

$("#search-button").click(function(){
//	$(this).toggleClass("open");
//	$(".search-section").toggleClass("open");
//	$(".search-section").slideToggle("fast", "linear");
	$(".search-section").toggle();
	$("input[type='text'].search-bar").focus();
})