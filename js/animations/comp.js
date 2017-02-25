/*==================================
=            KOMPONENTE            =
==================================*/

function animateComponents() {
	$('.components-section h1').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 200
	});

	$('.components-section h2').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 200
	});

	$('.components-section p').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 200
	});

	$('.components-section .row:nth-of-type(odd):not(:nth-of-type(3n)) .col-lg-6:nth-of-type(2n)').viewportChecker({
	    classToAdd: 'showMe animated slideInRight',
	    offset: 200
	});

	$('.components-section .row:nth-of-type(even) .col-lg-6:nth-of-type(2n)').viewportChecker({
	    classToAdd: 'showMe animated slideInLeft',
	    offset: 200
	});

}

$(function(){
	animateComponents();
})