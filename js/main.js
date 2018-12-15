$(document).ready(function() {
  $('body').imagesLoaded(animateTree);
  $('#tree').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", fadeBoxesIn)
    .on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart", hideBoxes);
  $(window).focus(animateTree);
  hamburger();
  parallax();
  detectBrowser();
})



var parallax = () => {
  var initScrollTop = $(window).scrollTop();
  $('.section__quote').css({
    'background-position-y': (initScrollTop / 45) + '%'
  });
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    $('.section__quote').css({
      'background-position-y': (scrollTop / 45) + '%'
    });
  });
}

var hamburger = () => {
  $('body').on('click', '.hamburger', function() {
    $(this).toggleClass('is-active');
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

function fadeInText(e) {
  var t = document.querySelector(e),
    i = t.dataset.split,
    s = new SplitText(t, {
      type: i
    }),
    n = new TimelineMax({
      paused: !1
    }),
    o = s[i],
    l = o.map(function(e) {
      return '<span style="display: inline-block">' + e.innerText + "</span>"
    });
  o.forEach(function(e, t) {
    e.style.overflow = "hidden", e.innerHTML = l[t]
  });
  var a = o.map(function(e) {
    return e.querySelector("span")
  });
  return n.staggerFrom(a, 1.25, {
    skewY: 4,
    y: "200%",
    ease: Expo.easeOut,
    delay: .5
  }, .1, "in"), e
}

var detectBrowser = () => {
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
    return p.toString() === "[object SafariRemoteNotification]";
  })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 68
  var isChrome = !!window.chrome && !!window.chrome.webstore;

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;

  if (isChrome) {
    $('.section__quote').css({
      'transform':'translate3d(0,0,0)',
      '-webkit-transform':'translate3d(0,0,0)',
    })
  }
}
