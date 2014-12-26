(function() {
	var button = $("button.menu__handle");
	var close = true;
	var menu = $("#menu");
	button.click(function () {
		if (close === false) {
			close = true;
			menu.removeClass('menu--anim');
			setTimeout(function () {
				menu.removeClass('menu--open');
			}, 250);
		}
		else {
			close = false;
			menu.addClass('menu--anim');
			setTimeout(function () {
				menu.addClass('menu--open');
			}, 250);
		}
	});
})();
