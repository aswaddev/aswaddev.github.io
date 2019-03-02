window.onload = function () {
	var rootContainer = document.getElementById('root-container');
	var navButton = document.getElementById('nav-icon');
	var overlayMenu = document.getElementById('overlay-menu');
	var navLinks = document.querySelectorAll('#overlay-menu ul li a');

	for (var link of navLinks) {
		link.addEventListener('click', openNavbar);
	}
	navButton.addEventListener('click', openNavbar);

	function openNavbar() {
		if (navButton.classList.contains('open')) {
			navButton.classList.remove('open');
			rootContainer.style.left = "0%";
			overlayMenu.style.left = "-50%";
		} else {
			navButton.classList.add('open');
			rootContainer.style.left = "50%";
			overlayMenu.style.left = "50%";
		}
	}
}
