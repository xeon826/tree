$(document).ready(function() {
  // $('html').scrollTop(4400);
  navigationTriggerScroll();
  hamburger();
  parallax();
  skillBar();
  minimizeHeader();
  lazyLoad();
  fadeServicessIn();
})
var navigationTriggerScroll = () => {
  $('#services').click(() => {
    $(window).trigger('scroll');
  });
}

var lazyLoad = () => {
  $('.tree-container').imagesLoaded({
    background: '*'
  }).done(function() {
    $('.tree-m').addClass('tree-m--full')
      .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        // $('.tree-container .box').addClass('box--opaque');
        $('.tree-container .box').each(function(i, obj) {
          setTimeout(() => {
            $(this).addClass('box--opaque');
          }, 500 * i)
        })
      });
    $('.section__quote').each(function() {
      $(this).css('background', $(this).data('background'));
    })
  });
}
var fadeServicessIn = () => {
  $(window).scroll(function() {
    $('.services .box').each(function() {
      if ($(this).offset().top < $(window).scrollTop() + $(window).innerHeight()) {
        $(this).addClass('box--opaque');
      }
    })
  }).trigger('scroll');
}
var minimizeHeader = () => {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('header:not(.minimized)').addClass('minimized');
    } else {
      $('header.minimized').removeClass('minimized');
    }
  })
}

var parallax = () => {
  // alert($(document).height());
  var initScrollTop = $(window).scrollTop();
  $('.section__quote').css({
    'background-position-y': (initScrollTop / 65) + '%'
  });
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.section__quote').each(function() {
    var distance = scrollTop - $(this).offset().top + $(this).height()*2;
      $(this).css('background-position-y', (distance/65)+'%')
    })
  });
}

var hamburger = () => {
  $('body').on('click', '.hamburger, header.is-active .navigation__link', function() {
    $('.hamburger').toggleClass('is-active');
    $('header').toggleClass('is-active');
  })
}

var boxOpacity = () => {
  var mX, mY, distance;
  $(document).on('mousemove', (e) => {
    mX = e.pageX;
    mY = e.pageY;
    $('.box').each((i, obj) => {
      distance = calculateDistance($(obj), mX, mY);
      $(obj).css('opacity', 1 - distance / $(window).innerWidth());
    })
  });
}

var fadeBoxesIn = () => {
  $('.tree-container .box').each(function(i, obj) {
    setTimeout(() => {
      $(this).addClass('box--opaque')
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

var skillBar = () => {
  $(window).scroll(function() {
    if ($('.skills').offset().top < $(window).scrollTop() + $(window).innerHeight()) {
      animateSkillBar();
    }
  }).trigger('scroll');
  $('.navigation__link[href="#skills"]').click(animateSkillBar);
}
var animateSkillBar = () => {
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
