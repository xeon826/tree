$(document).ready(function() {
  $("#tree").on('load', function() {
    animateTree();
  }).each(function() {
    if (this.complete) $(this).trigger('load');
  });
  // $(window).scroll(function () {
  //   $('.tree-container').css('margin-bottom', '-'+$('html').scrollTop()/30);
  // })
})
var animateTree = function() {
  $('.tree-container *').removeClass('animation-paused');
  // $('.tree-container__tree').animate('width','150vw');
}
