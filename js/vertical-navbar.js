jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 640) {
      $('.menu').addClass('vertical');
    } else if (ww >= 640) {
      $('.menu').removeClass('vertical');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});  
