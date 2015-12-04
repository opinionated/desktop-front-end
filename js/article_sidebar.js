$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
	$("#sidebar_toggle_wrapper").toggleClass("toggled");
});
