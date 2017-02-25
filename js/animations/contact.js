/*=============================
=            KONTAKT            =
=============================*/

function animatePros() {
	$('.contact-main h1').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});

	$('.contact-main p').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});

	$('.contact-main .form-group').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});

	$('.submit-container .btn').viewportChecker({
	    classToAdd: 'showMe animated slideInUp'
	});

}

$(function(){
	animatePros();
})

