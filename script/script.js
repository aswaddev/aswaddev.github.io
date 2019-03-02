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
	if (navButton.classList.contains('open')) {
		navButton.classList.remove('open');
		rootContainer.style.left = "0%";
		overlayMenu.style.left = "-50%";
		navBurger.classList.add('mdi-forwardburger');
		navBurger.classList.remove('mdi-backburger');
	} else {
		navButton.classList.add('open');
		rootContainer.style.left = "50%";
		overlayMenu.style.left = "50%";
		navBurger.classList.remove('mdi-forwardburger');
		navBurger.classList.add('mdi-backburger');
	}
}
