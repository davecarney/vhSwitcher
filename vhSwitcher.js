/*
* vhSwitcher() 1.2.2
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
*	Additionally, use a .full-height class to set an element to the full available screen height
*	Useful for when dealing with mobile browser toolbar heights
*
*	Also, if you have a header with a set height, you can use .full-mobile to set an element to the remaining space
*	not taken up by the header. You will need to give the header a class of .header-adj so the plugin
*	knows which element to measure and calculate.
*	ONLY WORKS FOR MOBILE. iOS gives unreliable header measurements for iPads.
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

		var availableScreen = $(window).height();
		$('.full-height').each(function() {
			$(this).css('height', '');
			$(this).css('height', availableScreen);
		});

		if ($(window).width() < 768) {
			var leftOver = availableScreen - $('.header-adj').outerHeight();
			$('.full-mobile').each(function() {
				$(this).css('height', '');
				$(this).css('height', leftOver);
			});
		}

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