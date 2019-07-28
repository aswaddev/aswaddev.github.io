var elements = document.querySelectorAll('.text');

function adjustParagraphWidths() {
  elements.forEach(element => {
    element.style.width = element.parentNode.parentNode.clientWidth - 50 + 'px';
  });
}

adjustParagraphWidths();

window.addEventListener('resize', adjustParagraphWidths);

var isInViewport = function(e) {
  var element = e.getBoundingClientRect();
  var html = document.documentElement;
  var toleranceY = 150;
  return (
    element.top >= 0 - toleranceY &&
    element.left >= 0 &&
    element.bottom <=
      (window.innerHeight || html.clientHeight) + element.height - 100 &&
    element.right <= (window.innerWidth || html.clientWidth)
  );
};

window.addEventListener('scroll', e => {
  const scrolled = window.scrollY;
  elements.forEach(element => {
    if (isInViewport(element.parentNode)) {
      if (!element.classList.contains('revealed')) {
        element.parentNode.classList.add('scale');
        element.classList.add('revealed');
      }
    }
  });
});
