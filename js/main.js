$(document).ready(function() {
  setTimeout(bannerAnimation, 1000)
  $('body').mousemove(function() {
  })
});

var bannerAnimation = function() {
  $('.tree-container').animate({
    'height': '150vh'
  }, 2000, 'easeOutBounce')
}
