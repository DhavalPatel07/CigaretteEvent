var $=jQuery.noConflict();
$(document).ready(function(){


  
    $('.burn').show();
    $('.tobacco').animate({
      width: "0cm"
    }, 10000);
    /*$('.burn').animate({
      left: "0cm"
    }, 10000, function() {
      $(this).fadeOut();
    });*/


// Animation
    (function($) {
      $.fn.visible = function(partial) {var $t = $(this), $w = $(window), viewTop = $w.scrollTop(), viewBottom = viewTop + $w.height(), _top = $t.offset().top, _bottom = _top + $t.height(), compareTop = partial === true ? _bottom : _top, compareBottom = partial === true ? _top : _bottom; return ((compareBottom <= viewBottom) && (compareTop >= viewTop)); }; })(jQuery); var win = $(window); var allMods = $(".animation-effect"); allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {el.addClass("come-in"); }; }); win.scroll(function(event) {allMods.each(function(i, el) {var el = $(el); if (el.visible(true)) {setTimeout(function(){el.addClass("come-in"); }, 600); }; /*else {el.removeClass("come-in"); } */ });
    });
// Animation


/*Scroll Animation*/
var s = skrollr.init();
/*Scroll Animation*/
});


/*Banner Video*/

/*Banner Video*/

 
/* Form Video */
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);
function videoScroll() {
  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');
    for (var i = 0; i < videoEl.length; i++) {
      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;
      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
        
      } else {
        thisVideoEl.pause();
      }
    }
  }
}
/* // End Form Video */


