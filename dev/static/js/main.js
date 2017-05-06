;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	$('.header__link').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
	
	
	// Определяю оптимальную высоту top-banner
	var headerPaddingTop = parseFloat($('.header').css('padding-top')),
		headerPaddingBottom = parseFloat($('.header').css('padding-bottom')),
		headerMarginTop = parseFloat($('.header').css('margin-top')),
		headerMarginBottom = parseFloat($('.header').css('margin-bottom'));
	
	var headerHeightSum = $('.header').height() + headerPaddingTop + headerPaddingBottom + headerMarginTop + headerMarginBottom;
	
		// установим обработчик события resize
	$(window).resize(function(){
		var h_w = $(window).height();
		var topBannerHeight = h_w - headerHeightSum;
		$('.top-banner').css('height', topBannerHeight);
	});

	// вызовем событие resize
	$(window).resize();
});