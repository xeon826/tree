$(document).ready(function() {
  // $('html').scrollTop(4400);
  treeEvents();
  hamburger();
  parallax();
  skillBar();
  minimizeHeader();
})
var minimizeHeader = () => {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      $('header:not(.minimized)').addClass('minimized');
    } else {
      $('header.minimized').removeClass('minimized');
    }
  })
}

var treeEvents = () => {
  $('.tree-container').imagesLoaded(animateTree);
  $('#tree').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", fadeBoxesIn)
    .on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart", hideBoxes);
  $(window).focus(animateTree);
}

var parallax = () => {
  var initScrollTop = $(window).scrollTop();
  $('.section__quote').css({
    'background-position-y': (initScrollTop / 65) + '%'
  });
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.section__quote').css({
      'background-position-y': (scrollTop / 65) + '%'
    });
  });
}

var hamburger = () => {
  $('body').on('click', '.hamburger, header.is-active .navigation__link', function() {
    $('.hamburger').toggleClass('is-active');
    $('header').toggleClass('is-active');
  })
}

var hideBoxes = () => {
  $('.tree-container .box').addClass('hidden').removeClass('box--opaque');
  $(window).on('scroll', getBoxes).trigger('scroll');
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

var animateTree = () => {
  $('.tree-container *').removeClass('animation-paused');
}

var fadeBoxesIn = () => {
  $('.tree-container .box').removeClass('hidden');
  $(window).trigger('scroll');
  $('.navigation__link[href="#works"]').click(getBoxes);
}

var getBoxes = () => {
  var time = 300;
  $('.box').not('.box--opaque').not('.hidden').each((index, obj) => {
    $(obj).removeClass('hidden');
    if ($(obj).offset().top < $(window).scrollTop() + $(window).innerHeight())
      setTimeout(() => $(obj).addClass('box--opaque'), time * index);
  })
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}

var skillBar = () => {
  $(window).scroll(function() {
    if ($('.skills').offset().top < $(window).scrollTop() + $(window).innerHeight()) {
      animateSkillBar();
    }
  })
  $('.navigation__link[href="#skills"]').click(animateSkillBar);
}
var animateSkillBar = () => {
  $('.skillbar').each(function() {
    $(this).children('.skill').text($(this).data('percent'));
    $(this).find('.skill').animate({
      width: $(this).attr('data-percent')
    }, 3000);
  });
}
