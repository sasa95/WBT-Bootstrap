/*----------  HOME  ----------*/

function animateCards() {

  if(window.innerWidth >= 992) {
    $('.home-card:eq(0)').viewportChecker({
         classToAdd: 'showMe animated slideInLeft',
         offset: 200
    });

    $('.home-card:eq(1)').viewportChecker({
       classToAdd: 'showMe animated zoomIn',
       offset: 200
    });

    $('.home-card:eq(2)').viewportChecker({
       classToAdd: 'showMe animated slideInRight',
       offset: 200
    });

    $('.home-card:eq(3)').viewportChecker({
       classToAdd: 'showMe animated slideInLeft',
       offset: 200
    });

    $('.home-card:eq(4)').viewportChecker({
       classToAdd: 'showMe animated zoomIn',
       offset: 200
    });

    $('.home-card:eq(5)').viewportChecker({
       classToAdd: 'showMe animated slideInRight',
       offset: 200
    });        
  }

  else {
    $('.home-card').viewportChecker({
       classToAdd: 'showMe animated bounceInUp',
       offset: 170
    });       
  }
}

function animateHomeBtn() {
$('#hero-home .btn').viewportChecker({
  classToAdd: 'showMe animated slideInUp'
}); 
}

$(function(){
  animateCards();
  setTimeout(animateHomeBtn,700);
});