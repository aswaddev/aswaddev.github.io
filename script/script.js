var rootContainer = document.getElementById('root-container');
var navButton = document.getElementById('nav-icon');
var navBurger = document.getElementById('nav-burger');
var overlayMenu = document.getElementById('overlay-menu');
var navLinks = document.querySelectorAll('#overlay-menu ul li a');

for (var link of navLinks) {
	link.addEventListener('click', openNavbar);
}
navButton.addEventListener('click', openNavbar);

function openNavbar() {
	if (navBurger.classList.contains('mdi-backburger')) {
		overlayMenu.style.left = "-100%";
		navBurger.classList.remove('mdi-backburger');
		navBurger.classList.add('mdi-forwardburger');
	} else {
		overlayMenu.style.left = "0%";
		navBurger.classList.remove('mdi-forwardburger');
		navBurger.classList.add('mdi-backburger');
	}
}
