// Slide Menu
$(document).ready(function(){
	$('.menu-toggle').click(function(){
		$('nav').toggleClass('active');
	})
})

// Back to top
var btn = $('#return-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});