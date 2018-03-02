# vhSwitcher #

## Unifies the handling of vh .css units across all browsers and devices ##

For elements styled using vh units, add a .vh-switcher class to them.

The script sets those elements' heights using jQuery.

Conditionals are in place to ignore "toolbar hiding" .resize() events that fire upon scrolling in mobile browsers.

### Dependencies ###
jQuery 1.7
