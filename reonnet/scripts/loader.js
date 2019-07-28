var loader = document.getElementById('loader');
loader.addEventListener('animationend', function(e) {
  if (e.animationName == 'scale-out') {
    this.style.display = 'none';
  }
});
