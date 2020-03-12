$('.font-weight-light').hover(
  function(){
    $(this).fadeTo('slow',0.3);
  },
  function(){
    $(this).fadeTo('normal',1);
  }
);

//появление блока при скролле
$(window).scroll(function() {
  if ($(this).scrollTop()>=80) {
    // длительность анимации - 'slow'
    // тип анимации -  'linear'
    $('.promenya').fadeIn('slow','linear');
  }
  else {
    // длительность анимации - 'fast'
    // тип анимации -  'swing'
    $('.promenya').fadeOut('fast','swing');
  }
});


//-- счетчик цифр
(function($) {
  $.fn.countTo = function(options) {
    return this.each(function() {
      //-- Arrange
      var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
      var $el = $(this);
      var countFrom = parseInt($el.attr('data-count-from'));
      var countTo = parseInt($el.attr('data-count-to'));
      var countSpeed = $el.attr('data-count-speed'); // Number increment per second

      //-- Action
      var rafId;
      var increment;
      var currentCount = countFrom;
      var countAction = function() {              // Self looping local function via requestAnimationFrame
        if(currentCount < countTo) {              // Perform number incremeant
          $el.text(Math.floor(currentCount));     // Update HTML display
          increment = countSpeed / FRAME_RATE;    // Calculate increment step
          currentCount += increment;              // Increment counter
          rafId = requestAnimationFrame(countAction);
        } else {                                  // Terminate animation once it reaches the target count number
          $el.text(countTo);                      // Set to the final value before everything stops
          //cancelAnimationFrame(rafId);
        }
      };
      rafId = requestAnimationFrame(countAction); // Initiates the looping function
    });
  };
}(jQuery));

//-- Executing
$('.number-counter').countTo();

//Галлерея гриды//
$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#gallery").fadeTo(100, 0.1);
$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#gallery").fadeTo(300, 1);
}, 300);
});
});