$(document).ready(function() {
  $("#tree").on('load', animateTree).each(function() {
    if (this.complete) $(this).trigger('load');
  });
  $("#tree").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", fadeBoxesIn);
  boxOpacity();
})

var boxOpacity = function() {
  var mX, mY, distance;
  $(document).mousemove(function(e) {
    mX = e.pageX;
    mY = e.pageY;
    $('.box').each(function() {
      distance = calculateDistance($(this), mX, mY);
      $(this).css('opacity', 1 - distance / $(window).innerWidth());
    })
  });
}

var animateTree = function() {
  $('.tree-container *').removeClass('animation-paused');
}

var fadeBoxesIn = function() {
  var time = 500;
  $('.box').each(function(index, obj) {
    setTimeout(() => $(this).addClass('loaded'), time * index);
  })
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}
