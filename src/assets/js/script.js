$(document).on("click", ".js--nav-icon", function() {
	console.log("click");
	var nav = $('.js--main-nav');
		var icon = $('#menu-btn');

		nav.slideToggle(200); 
		if(icon.hasClass('show')){
			icon.removeClass('show');
			icon.addClass('close')
		} else {
			icon.removeClass('close')
			icon.addClass('show')
		}
});