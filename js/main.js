$(document).ready(function() {
  $('#tree').on('load', animateTree);
  $("#tree").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", fadeBoxesIn);
  $("#tree").on("animationstart webkitAnimationStart oAnimationStart MSAnimationStart", hideBoxes);
  boxOpacity();
})

var hideBoxes = () => {
  $('.box').addClass('opaque-zero');
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
  $('.box').removeClass('opaque-zero');
  var time = 300;
  $('.box').each((index, obj) => {
    setTimeout(() => $(obj).addClass('loaded'), time * index);
  })
}

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}
