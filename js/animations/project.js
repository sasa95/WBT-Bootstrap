/*=============================
=            ABOUT            =
=============================*/


function animateHeaderH() {
	$('.hero-wrapper>h1').viewportChecker({
	    classToAdd: 'showMe animated fadeIn'
	});
}

function animateAboutSection() {
	$('.about-section h1').viewportChecker({
		classToAdd: 'showMe animated fadeIn'
	});

	$('.about-section p').viewportChecker({
		classToAdd: 'showMe animated fadeIn'
	});

	$('.about-icon').viewportChecker({
		classToAdd: 'showMe animated zoomIn'
	});

	$('.student-card').viewportChecker({
		classToAdd: 'showMe animated flipInY'
	});
}

$(function(){
	animateAboutSection();
	setTimeout(animateHeaderH,800);
});