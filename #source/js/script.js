$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:5,
		slidesToScroll: 3,
		autoplay:true,
		speed:2000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1,
					slidesToScroll: 1
				}
			}
		]
	});

	
});

