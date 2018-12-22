$(document).ready(function() {
  // $('html').scrollTop(4400);
  hamburger();
  parallax();
  skillBar();
  minimizeHeader();
  lazyLoad();
})

var lazyLoad = () => {
  $('.tree-container').imagesLoaded({
    background: '*'
  }).progress(function(instance, image) {
    var i = instance['progressedCount'];
    $('.percent-loaded').text(i * 33 + '%');
    $('.loading-bar').css('width', i * 33 + '%');
    if (i == 3) {
      fadeBoxesIn();
      $('.tree-m').addClass('tree-m--reveal');
      $('.splash-screen').remove();
      $('.section__quote').each(function() {
        $(this).css('background', $(this).data('background'));
      })
    }
  })
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
  // $('.tree-container .box').addClass('box--opaque');
  $('.tree-container .box').each(function(i, obj) {
    var time = i * 500;
    // setTimeout(time, () => {
    //   $(this).addClass('box--opaque');
    // })
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
