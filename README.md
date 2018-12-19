# vhSwitcher #

## Unifies the handling of vh .css units across all browsers and devices ##

For elements styled using vh units, add a .vh-switcher class to them.

The script sets those elements' heights using jQuery.

Conditionals are in place to ignore "toolbar hiding" .resize() events that fire upon scrolling in mobile browsers.

Additionally, use a .full-height class to set an element to the full available screen height.

Useful for when dealing with toolbar heights.

If you have a header with a set height, you can use .full-mobile to set an element to the remaining space
not taken up by the header. You will need to give the header a class of .header-adj so the plugin knows
which element to measure and calculate.
ONLY WORKS FOR MOBILE. Testing has shown that iOS will give unreliable heights for the header in iPads.

### Dependencies ###
jQuery 1.7
