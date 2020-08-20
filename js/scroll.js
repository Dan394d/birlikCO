$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('.header_flex_top').addClass('scrolling') : $('.header_flex_top').removeClass('scrolling');
		windowTop > 100 ? $('ul').css('top','80px') : $('ul').css('top','130px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
});
$(document).ready(function() {
	$('.burger_menu').click(function(event) {
		$('.burger_menu, .burger_menu span, .boke__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.wrapper').toggleClass('swiping');
	});
	$('.benefit_subtitles').click(function(event) {
		if ($('.benefit_spoiler_body').hasClass('one')){
			$('.benefit_subtitles').not($(this)).removeClass('active');
			$('.benefit_text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});