// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(".tab-bar .menu-icon").click(function() {
	$(this).toggleClass( "open" );
	$("#menu-icon-section").toggleClass("open");
});
