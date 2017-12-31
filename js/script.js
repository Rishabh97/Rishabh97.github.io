$(document).ready(function(){

	$('.scroll').click(function(e){
		e.preventDefault();
		var linkHref = $(this).attr('href');
		var headerHeight = $('#body-header').outerHeight();
		console.log(headerHeight);
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight -5
		}, 1000);

	});

	$('#scroll-top').click(function(e){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	var homeOffset = $('#first').offset().top
	var aboutOffset = $('#second').offset().top
	var qualificationOffset = $('#qualification-section').offset().top
	var trainingOffset = $('#training-section').offset().top
	var workOffset = $('#work-section').offset().top
	var contactOffset = $('#contact').offset().top

	$(document).on('scroll', function(){
		var scrollTop = $(document).scrollTop() +100;
		var activeLi;

		if (scrollTop < aboutOffset) {
			activeLi = $('.menu-items>li:nth-child(1)');
		}else if(scrollTop < qualificationOffset){
			activeLi = $('.menu-items>li:nth-child(2)');

		}else if(scrollTop < trainingOffset){
			activeLi = $('.menu-items>li:nth-child(3)');

		}else if(scrollTop < workOffset){
			activeLi = $('.menu-items>li:nth-child(4)');

		}else if(scrollTop < contactOffset){
			activeLi = $('.menu-items>li:nth-child(5)');

		}else{
			activeLi = $('.menu-items>li:nth-child(6)');

		}

		activeLi.addClass('active');
		
		$('.menu-items>li').not(activeLi).removeClass('active');
		
	});

});