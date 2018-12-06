$(document).ready(function() {
  $("#tree").on('load', function() {
    animateTree();
    // setTimeout(animateTree, 2000);
  }).each(function() {
    if (this.complete) $(this).trigger('load');
  });
})
var animateTree = function() {
  $('.tree-container__tree, #tree--motion-blur').removeClass('animation-paused');
  // $('.tree-container__tree').animate('width','150vw');
}
