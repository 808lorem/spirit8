;
// Начинать писать отсюда!!!!
$(document).ready(function(){
	$('.header__link').click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
	});
});