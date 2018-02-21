/*
* vhSwitcher() 1.0.0
*
* Copyright 2018
*
* By Dave Carney https://vehiclemedia.com/
* Unifies the handling of vh .css units across all browsers and devices
* 
* 	For elements styled using vh units, add a .vh-switcher class to them
*	The script sets those elements' heights using javascript, with conditionals
* 	to ignore "toolbar hiding" .resize() events in mobile browsers
*
*/

jQuery(document).ready(function($) {

	var windowWidth = $(window).width();
	function vhSwitcher() {

		$('.vh-switcher').each(function() {
			$(this).css('height', '');
			var thisHeight = $(this).innerHeight();
			$(this).css('height', thisHeight);
		});

	}

	vhSwitcher();

	var resizeTimer;
	$(window).resize(function() {
		var posCache = $(window).scrollTop();
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			var newWindowWidth = $(window).width();
			if ((newWindowWidth !== windowWidth) ||
				($(window).scrollTop() === posCache)) {
				windowWidth = newWindowWidth;
				vhSwitcher();
			}
		}, 200);
	});

});