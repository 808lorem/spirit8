;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	
	$('.header__btn-menu').click(function() {
		$('.header__nav').toggleClass('active');
	});

	// Определяю оптимальную высоту top-banner
	var headerMarginTop = parseFloat($('#header').css('margin-top')),
		headerMarginBottom = parseFloat($('#header').css('margin-bottom'));
	
	var headerHeightSum = $('#header').height() + headerMarginTop + headerMarginBottom;
	
	// установим обработчик события resize
	$(window).resize(function(){
		var h_w = $(window).height();
		var topBannerHeight = h_w - headerHeightSum;
		$('#top-banner').css('height', topBannerHeight);
	});

	// вызовем событие resize
	$(window).resize();
	
	
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
		prevArrow: '.team__arrow-prev',
		nextArrow: '.team__arrow-next',
		speed: 900,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	
	
	$('.js-slider__services').slick({
		infinite: false,
		speed: 900,
		arrows: false,
		prevArrow: '.services__arrow-prev',
		nextArrow: '.services__arrow-next',
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	
	$('.js-slider__clients').slick({
		dots: true,
		speed: 900,
		arrows: false,
		prevArrow: '.clients__arrow-prev',
		nextArrow: '.clients__arrow-next',
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				dots: false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	
	$('.js-slider__testimonials').slick({
		dots: true,
		speed: 900,
		arrows: false,
		prevArrow: '.testimonials__arrow-prev',
		nextArrow: '.testimonials__arrow-next',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 480,
			settings: {
				arrows: true,
				dots: false,
			}
		}]
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
	
	
	$('.popup-link').magnificPopup({
		type: 'inline',
	});
	
	
	jQuery(function($) {
		$(window).scroll(function(){
			var h_win = $(window).height() - $('#header-fixed').height();

			if($(this).scrollTop()>h_win){
				$('#header-fixed').addClass('fixed');
			}
			else if ($(this).scrollTop()<h_win){
				$('#header-fixed').removeClass('fixed');
			}
		});
	});
	
	var menu_selector = ".header__nav"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
 
function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top + 1 && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
 
$(document).ready(function () {
 
    $(document).on("scroll", onScroll);
 
    $("a[href^=#]").click(function(e){
        e.preventDefault();
 
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
 
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
 
    });
 
});
});