$(document).ready(function() {
  $('.tree-container').scrollTop(0);
  $("#tree").on('load', function() {
    setTimeout(animateTree, 100);
  }).each(function() {
    if (this.complete) $(this).trigger('load');
  });
})
var animateTree = function() {
  $('.tree-container').animate({
    'scrollTop': '950px'
  }, 3000, 'easeInQuint', function() {

  })
}
