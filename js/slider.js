$(document).ready(function(){
	$('.header__slider').slick({
		fade: true,
		autoplay: true, 
		autoplaySpeed: 2500,
		dots: false,
		easing: 'ease',
		responsive:[
			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false,
				}
			}
		]
	});
	$('.suggest_slider').slick({
		autoplay: true, 
		autoplaySpeed: 900,
		dots: false,
		easing: 'ease',
		variableWidth: false,
		slidesToShow: 5,
		// adaptiveHeight: true,
		pauseOnHover: false,
		responsive:[
			{
				breakpoint: 1265,
				settings: {
					dots: false,
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					arrows: false,
					slidesToShow: 1,
					centerMode: true,
					autoplaySpeed: 550,
				}
			}
		]
	});
	$('.rates_f').slick({
		// fade: true,
		autoplay: false, 
		// autoplaySpeed: 2500,
		dots: false,
		arrows: false,
		// easing: 'ease',
		slidesToShow: 3,
		variableWidth: false,
		centerMode: false,
		responsive:[
			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1,
					touchTreshold: 10,
					swipeToSlide: true,
					waitForAnimate: false,
				}
			}
		]
	});
});
