$(document).ready(function () {
	$('#navToggleBtn').click(function () {
		$('.body-wrapper').toggleClass('nav-collapse');
	});

	// roadmap slider
	$('.roadmap-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: ".btn-prev",
		nextArrow: ".btn-next",
		speed: 600,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},

		]
	});
	// roadmap slider ends
});