// <!-- SLIDER -->
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:false,
	autoplayTimeout:2500,
	autoplayHoverPause:true,
    navText: [
    	"<img class='show-for-sr btn-pre' src='images/arrow-pre.png' />",
    	"<img class='show-for-sr btn-next' src='images/arrow-next.png' />"
    	],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})

// <!-- Smooth scrolling to div id -->
$(document).ready(function() {
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500 );
  });
})

// <!-- Menu smartphone -->
function toggleSidebar(ref) {
  ref.classList.toggle('open-nav');
  document.getElementById('sidebar').classList.toggle('open-nav');
}

// <!-- Sticky Nav Bar -->
$(window).scroll(function(){
	if($(this).scrollTop()>200){
		$('.top-menu').addClass("sticky");
		$('.top-menu').css("padding", "20px");
	}
	else {
		$('.top-menu').removeClass("sticky");
		$('.top-menu').css("padding", "45px");
	}
})