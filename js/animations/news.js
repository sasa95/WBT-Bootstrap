/*==================================
=            NOVOSTI            =
==================================*/

function animateNews() {
	$('.news-section h1').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 100
	});

	$('.news-section h2').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 100
	});

	$('.news-section p').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 100
	});

	$('.news-section .row:nth-of-type(odd) .col-lg-6:nth-of-type(2n)').viewportChecker({
	    classToAdd: 'showMe animated slideInRight',
	    offset: 100
	});

	$('.news-section .row:nth-of-type(even) .col-lg-6:nth-of-type(2n)').viewportChecker({
	    classToAdd: 'showMe animated slideInLeft',
	    offset: 100
	});

}

$(function(){
	animateNews();
})