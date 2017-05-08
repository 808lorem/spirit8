;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	$('.header__link').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	
	
	// Определяю оптимальную высоту top-banner
	var headerPaddingTop = parseFloat($('#header').css('padding-top')),
		headerPaddingBottom = parseFloat($('#header').css('padding-bottom')),
		headerMarginTop = parseFloat($('#header').css('margin-top')),
		headerMarginBottom = parseFloat($('#header').css('margin-bottom'));
	
	var headerHeightSum = $('#header').height() + headerPaddingTop + headerPaddingBottom + headerMarginTop + headerMarginBottom;
	
		// установим обработчик события resize
	$(window).resize(function(){
		var h_w = $(window).height();
		var topBannerHeight = h_w - headerHeightSum;
		$('#top-banner').css('height', topBannerHeight);
	});

	// вызовем событие resize
	$(window).resize();
	
	
	// Скрол
	$('.scroll-link').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000);
		return false;
		}
	  }
	});
	
	
	$('.scroll-down').click(function () {
		var win = $(window).height();
		$('body,html').animate({
			scrollTop: win
		}, 1000);
		return false;
	});

	
	$('.js-slider__team').slick({
		dots: true,
		arrows: false,
		speed: 900,
		slidesToShow: 4,
		slidesToScroll: 4,
//		responsive: [
//		{
//		  breakpoint: 1024,
//		  settings: {
//			slidesToShow: 3,
//			slidesToScroll: 3,
//			infinite: true,
//			dots: true
//		  }
//		}
//		]
	});
	
	$('.js-slider__clients').slick({
		dots: true,
		arrows: false,
		speed: 900,
		slidesToShow: 5,
		slidesToScroll: 5,
//		responsive: [
//		{
//		  breakpoint: 1024,
//		  settings: {
//			slidesToShow: 3,
//			slidesToScroll: 3,
//			infinite: true,
//			dots: true
//		  }
//		}
//		]
	});
	
	
	$(function() {

		var newSelection = "";

		$("#flavor-nav a").click(function(){

			$("#all-flavors").fadeTo(200, 0.10);

			$("#flavor-nav a").removeClass("current");
			$(this).addClass("current");

			newSelection = $(this).attr("rel");

			$(".flavor").not("."+newSelection).slideUp();
			$("."+newSelection).slideDown();

			$("#all-flavors").fadeTo(600, 1);

		});

	});
});