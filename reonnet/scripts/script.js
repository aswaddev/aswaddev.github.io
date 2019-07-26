$(document).ready(function() {
  $(this).scrollTop(0);

  $('ul#menu-wrapper').click(function() {
    $('ul').toggleClass('active');
    $('.menu-content').toggleClass('active');
  });

  // parallax_height();
  $(window).scroll(function() {
    parallax_height();
  });

  $(window).resize(function() {
    parallax_height();
  });

  function parallax_height() {
    var scroll_top = $(this).scrollTop();
    if ($(window).scrollTop() >= $('.sample-section').offset().top - 265) {
      $('.sample-header').css({
        transition: 'height 500ms ease-out'
      });
      $('.sample-header').css({
        height: '50px'
      });
      $('.sample-header-section').css('display', 'none');
      $('nav .top').addClass('shrink');
      $('nav').addClass('bg-visible');
      $('nav').removeClass('bg-hidden');
    } else {
      $('.sample-header').css({
        transition: 'none'
      });
      $('.sample-header-section').css('display', 'flex');
      $('nav .top').removeClass('shrink');
      $('nav').removeClass('bg-visible');
      $('nav').addClass('bg-hidden');
      var sample_section_top = $('.sample-section').offset().top;
      var header_height = $('.sample-header-section').outerHeight();
      $('.sample-section').css({
        'margin-top': header_height
      });
      $('.sample-header').css({
        height: header_height - scroll_top
      });
      $('.blur-bg').css('opacity', $(window).scrollTop() * 0.005);
      $('.sample-header-section h1').css(
        'top',
        50 + $(window).scrollTop() * 0.1 + '%'
      );
      $('.sample-header-section h1').css(
        'opacity',
        1 - $(window).scrollTop() * 0.003
      );
      $('.sample-header-section h1').css(
        'filter',
        'blur(' + (0.003 + parseInt($(window).scrollTop() / 20)) + 'px)'
      );
      // $("nav .top").removeClass("disappear");
      // $("nav .bottom").css("padding-top", "10px");
    }
  }
});

var loader = document.getElementById('loader');
loader.addEventListener('animationend', function(e) {
  if (e.animationName == 'scale-out') {
    this.style.display = 'none';
  }
});

var heading = document.getElementById('header-text');
heading.addEventListener('animationend', function(e) {
  if (e.animationName == 'slide-up') {
    this.classList.remove('header-slide-up');
  }
});

var callToAction = document.getElementById('call-to-action');
callToAction.addEventListener('click', function(e) {
  $('html, body').animate(
    {
      scrollTop: window.innerHeight
    },
    {
      duration: 0,
      specialEasing: {
        width: 'linear',
        height: 'easeOutBounce'
      }
    }
  );
});

// build scenes
var revealElements = document.getElementsByClassName('paragraph');
for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    triggerHook: 0.9
  })
    .setClassToggle(revealElements[i], 'visible') // add class toggle
    .addTo(controller);
}
