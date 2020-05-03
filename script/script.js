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
    overlayMenu.style.left = '-100%';
    navBurger.classList.remove('fa-times');
    navBurger.classList.add('fa-bars');
  } else {
    overlayMenu.style.left = '0%';
    navBurger.classList.remove('fa-bars');
    navBurger.classList.add('fa-times');
  }
}

(function () {
  'use strict';

  var section = document.querySelectorAll('section');
  var sections = {};
  var i = 0;

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  window.onscroll = function () {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;

    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        if (document.getElementById(i + '-link')) {
          if (document.querySelector('.active')) {
            document.querySelector('.active').setAttribute('class', ' ');
          }
          document.getElementById(i + '-link').setAttribute('class', 'active');
        }
      }
    }
  };
})();
