jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 640) {
      $('.footer-left').addClass('text-center');
      $('.footer-right').addClass('text-center');
    } else if (ww >= 640) {
      $('.footer-left').removeClass('text-center');
      $('.footer-right').removeClass('text-center');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
