$(document).ready(function(){

	$('.scroll').click(function(e){
		e.preventDefault();
		var linkHref = $(this).attr('href');
		var headerHeight = $('#body-header').outerHeight();
		console.log(headerHeight);
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight -13
		}, 1000);

	});

	$('#scroll-top').click(function(e){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
});