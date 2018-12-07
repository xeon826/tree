$(document).ready(function() {
  $("#tree").on('load', function() {
    animateTree();
  }).each(function() {
    if (this.complete) $(this).trigger('load');
  });
})
var animateTree = function() {
  $('.tree-container *').removeClass('animation-paused');
  // $('.tree-container__tree').animate('width','150vw');
}
