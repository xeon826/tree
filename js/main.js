$(document).ready(function() {
  $('html').scrollTop(1700);
  $('body').imagesLoaded(animateTree);
  $('#tree').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", fadeBoxesIn)
    .on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart", hideBoxes);
  $(window).focus(animateTree);
  hamburger();
  parallax();
  detectBrowser();
  // magnifyingGlass();
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
      'transform': 'translate3d(0,0,0)',
      '-webkit-transform': 'translate3d(0,0,0)',
    })
  }
}

var magnifyingGlass = () => {
  var native_width = $('.box--seo > div').width();
  var native_height = $('.box--seo > div').height();
  $(".large").css("background", "url('../tree--white-blue.png') no-repeat");

  $(".box--seo").mousemove(function(e) {
    if (!native_width && !native_height) {
      var image_object = new Image();
      image_object.src = 'img/tree--white-blue.png';

      native_width: 500;
      native_height: 500;
    } else {
      var magnify_offset = $(this).offset();
      var mx = e.pageX - magnify_offset.left;
      var my = e.pageY - magnify_offset.top;

      if (mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0) {
        $(".large").fadeIn(100);
      } else {
        $(".large").fadeOut(100);
      }
      if ($(".large").is(":visible")) {
        var rx = Math.round(mx / $(".small").width() * native_width - $(".large").width() / 2) * -1;
        var ry = Math.round(my / $(".small").height() * native_height - $(".large").height() / 2) * -1;
        var bgp = rx + "px " + ry + "px";

        var px = mx - $(".large").width() / 2;
        var py = my - $(".large").height() / 3;
        $(".large").css({
          left: px,
          top: py,
          'background-position-y': py+'px',
          'background-position-x': px+'px'
        });
      }
    }
  })
}

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}
