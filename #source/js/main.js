//@prepros-append script.js
//@prepros-append slick.min.js
var lastId,
topMenu = jQuery("#header__list"),
topMenuHeight = topMenu.outerHeight()+45,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
	var item = jQuery(jQuery(this).attr("href"));
	if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
var href = jQuery(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	jQuery('html, body').stop().animate({ 
	scrollTop: offsetTop
}, 1500);
e.preventDefault();
});
// Bind to scroll
jQuery(window).scroll(function(){
// Get container scroll position
var fromTop = jQuery(this).scrollTop()+topMenuHeight;

// Get id of current scroll item
var cur = scrollItems.map(function(){
if (jQuery(this).offset().top < fromTop)
	return this;
});
// Get the id of the current element
cur = cur[cur.length-1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
	lastId = id;
	 // Set/remove active class
	menuItems
		.parent().removeClass("activee")
		.end().filter("[href='#"+id+"']").parent().addClass("activee");
}                   
});