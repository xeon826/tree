$(document).ready(function() {
  // $('html').scrollTop(4400);
  console.log('document ready');
  navigationTriggerScroll();
  hamburger();
  parallax();
  skillBar();
  minimizeHeader();
  lazyLoad();
  fadeServicesIn();
})
function navigationTriggerScroll() {
  $('#services').click(function() {
    $(window).trigger('scroll');
  });
}

function lazyLoad() {
  $('.tree-container').imagesLoaded({
    background: '*'
  }).done(function() {
    $('.tree-m').animate({
      'background-size': '50%',
      'background-position-y': '10vh',
      '-webkit-background-position-y': '10vh',
    }, 1000, function() {
      $('.tree-container .box').each(function(i, obj) {
        setTimeout(function() {
          $(obj).addClass('box--opaque');
        }, 500 * i)
      });
      $('.section__quote').each(function() {
        if ($(window).innerWidth() > 600) {
          $(this).css('background', $(this).data('background'));
        } else {
          $(this).css('background', $(this).data('srcset-background'));
        }
      })
    })
  });
}

function fadeServicesIn() {
  $(window).scroll(function() {
    $('.services .box').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).innerHeight()) {
        $(this).addClass('box--opaque');
      }
    })
  }).trigger('scroll');
}

function minimizeHeader() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('header:not(.minimized)').addClass('minimized');
    } else {
      $('header.minimized').removeClass('minimized');
    }
  })
}

function parallax() {
  console.log('parallax');
  var initScrollTop = $(window).scrollTop();
  $('.section__quote').css({
    'background-position-y': (initScrollTop / 65) + '%'
  });
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.section__quote').each(function() {
      var distance = scrollTop - $(this).offset().top + $(this).height() * 5;
      $(this).css('background-position-y', (distance / 65) + '%')
    })
  });
}

function hamburger() {
  $('body').on('click', '.hamburger, header.is-active .navigation__link', function() {
    $('.hamburger').toggleClass('is-active');
    $('header').toggleClass('is-active');
  })
}

function boxOpacity() {
  var mX, mY, distance;
  $(document).on('mousemove', function(e) {
    mX = e.pageX;
    mY = e.pageY;
    $('.box').each(function(i, obj) {
      distance = calculateDistance($(obj), mX, mY);
      $(obj).css('opacity', 1 - distance / $(window).innerWidth());
    })
  });
}

function fadeBoxesIn() {
  $('.tree-container .box').each(function(i, obj) {
    setTimeout(function() {
      $(obj).addClass('box--opaque')
    }, i * 1000)
  })
  $(window).scroll(function() {
    $('.services .box').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).innerHeight()) {
        $(this).addClass('box--opaque');
      }
    })
  }).trigger('scroll');
}


function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}

function skillBar() {
  $(window).scroll(function() {
    if ($('.skills').offset().top < $(window).scrollTop() + $(window).innerHeight()) {
      animateSkillBar();
    }
  }).trigger('scroll');
  $('.navigation__link[href="#skills"]').click(animateSkillBar);
}

function animateSkillBar() {
  $('.skill-bar').each(function() {
    $(this).children('.skill').text($(this).data('percent'));
    $(this).find('.skill').animate({
      width: $(this).attr('data-percent')
    }, 3000);
  });
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  };
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
