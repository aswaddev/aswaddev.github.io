if ('serviceWorker' in navigator) {
	// sw.js can literally be empty, but must exist
	navigator.serviceWorker.register('/sw.js');
}


self.addEventListener('fetch', (event) => {});

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
	if (navBurger.classList.contains('fa-times')) {
		overlayMenu.style.left = "-100%";
		navBurger.classList.remove('fa-times');
		navBurger.classList.add('fa-bars');
	} else {
		overlayMenu.style.left = "0%";
		navBurger.classList.remove('fa-bars');
		navBurger.classList.add('fa-times');
	}
}
