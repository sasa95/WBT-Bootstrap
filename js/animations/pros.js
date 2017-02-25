/*=============================
=            ABOUT            =
=============================*/

function animatePros() {
	$('.pros-section h1').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});

	$('.pros-section h2').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});

	$('.pros-section p').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});

	$('.pros-section .row:nth-of-type(odd) img').viewportChecker({
	    classToAdd: 'showMe animated slideInRight',
	    offset: 150
	});

	$('.pros-section .row:nth-of-type(even) img').viewportChecker({
	    classToAdd: 'showMe animated slideInLeft',
	    offset: 150
	});
}

$(function(){
	animatePros();
})

