/*=============================
=            PREUZIMANJE            =
=============================*/

function animateDownload() {
	$('.download-section h1').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 100
	});

	$('.download-section h2').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 100
	});

	$('.download-section p').viewportChecker({
	    classToAdd: 'showMe animated fadeIn',
	    offset: 100
	});

	$('.download-section .btn').viewportChecker({
	    classToAdd: 'showMe animated slideInUp',
	    offset: 170
	});

	$('.download-section .whiteboard').viewportChecker({
	    classToAdd: 'showMe animated slideInLeft',
	    offset: 100
	});

}

$(function(){
	animateDownload();
})

