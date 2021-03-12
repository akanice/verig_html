$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 10)
			$('#navbar_main').addClass('sticky');
		else
		$('#navbar_main').removeClass('sticky');
	});
	
	// Sidebar navigation
	$("[data-trigger]").on("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		var offcanvas_id = $(this).attr("data-trigger");
		$(offcanvas_id).toggleClass("show");
		$("body").toggleClass("offcanvas-active");
		$(".screen-overlay").toggleClass("show");
	  });

	  // Close menu when pressing ESC
	  $(document).on("keydown", function (event) {
		if (event.keyCode === 27) {
		  $(".mobile-offcanvas").removeClass("show");
		  $("body").removeClass("overlay-active");
		}
	  });

	  $(".btn-close, .screen-overlay").click(function (e) {
		$(".screen-overlay").removeClass("show");
		$(".mobile-offcanvas").removeClass("show");
		$("body").removeClass("offcanvas-active");
	  });
	
	// Full page scroll
	new fullScroll({
		container : 'main',
		sections : 'section',
		animateTime : 0.7,
		animateFunction : 'ease',
		currentPosition: 0,
		displayDots: true,
		dotsPosition: 'left',
	});
	
	// Owl Carousel
	// $(".home_testimonial_carousel").owlCarousel({
		// loop:false,
		// margin:15,
		// nav:false,
		// autoplay: false,
		// responsiveClass:true,
		// dots:false,
		// responsive:{
			// 0:{
				// items:1,
				// nav:false,
				// dots:false,
				// margin: 5,
				// stagePadding: 30,
			// },
			// 600:{
				// items:3,
				// nav:false
			// },
			// 1000:{
				// items:3,
			// }
		// }
	// });
	
	// $(".home_blog_carousel").owlCarousel({
		// loop:false,
		// margin:15,
		// nav:false,
		// autoplay: false,
		// responsiveClass:true,
		// dots:false,
		// responsive:{
			// 0:{
				// items:1,
				// nav:false,
				// dots:false,
				// margin: 5,
				// stagePadding: 30,
			// },
			// 600:{
				// items:3,
				// nav:false
			// },
			// 1000:{
				// items:3,
			// }
		// }
	// });
	
	// $(".products-slider").owlCarousel({
		// loop:false,
		// margin:25,
		// center: true,
		// nav:false,
		// autoplay: false,
		// responsiveClass:true,
		// dots:false,
		// responsive:{
			// 0:{
				// items:1,
				// nav:false,
				// dots:false,
				// margin: 5,
				// stagePadding: 30,
			// },
			// 600:{
				// items:3,
				// nav:false
			// },
			// 1000:{
				// items:3,
			// }
		// }
	// });	
	
	// $(".auth_slide").owlCarousel({
		// loop:false,
		// margin:25,
		// center: true,
		// nav:true,
		// autoplay: true,
		// responsiveClass:true,
		// dots:false,
		// items:1,
		// responsive:{
			// 0:{
				// items:1,
				// margin: 5,
			// },
			// 600:{
				// items:1,
				// nav:false
			// },
			// 1000:{
				// items:1,
			// }
		// }
	// });
	
	// Slick - Achievement Slider
	$('.ac-slider').slick({
		dots: false,
        infinite: false,
		arrows: true,
        centerMode: true,
		centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1008,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	// Slick - Products Slider
	
	
	// Slick - [Why choose us - section] Slider
	$('.wcu-slider').slick({
		dots: false,
        infinite: false,
		arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
	});
	

	// Range Money
	$(".slider").on("input", function(){
		slider_val 	= $(this).val();
		cid = $(this).attr('id');	
		$('*[data-'+cid+']').html(slider_val);
		
		var minValue= $(this).prop('min');
		var maxValue = $(this).prop('max');
		var valueRange = (slider_val-minValue)/(maxValue-minValue)*100;
		$(this).css('background','linear-gradient(to right, #ffcc01 0%, #ffcc01 ' + valueRange + '%, #ffffff24 ' + valueRange + '%, #ffffff24 100%)');

	});
	
	

});

