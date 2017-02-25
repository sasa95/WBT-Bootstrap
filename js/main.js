/*===========================
=            NAV            =
===========================*/

var drawerVisible = false;

$(window).resize(function() {
  var winWidth = window.innerWidth;
  setTimeout(function(){
    if (drawerVisible && winWidth < 992) {
        $('.nav-wrapper').css({
          right: '0',
          position: 'static'
      });
      $('header nav').css({
        'z-index':'100',
        'width':'100%',
        'backgroundColor': '#68407c'
      });
  }

  else if (drawerVisible && winWidth >= 992) {
      $('.nav-wrapper').animate({'right':'0px','opacity':'1'},'fast');
      $('header nav').css({
        'z-index':'100',
        'backgroundColor':'transparent',
        'width':'300px',
        'height':'100%'
      });     
      $('.nav-wrapper').css({'display':'block','position':'absolute'});
      $('#menu-btn').animate({'opacity':'1'},'fast');
  }

  else if(!drawerVisible && winWidth <992) {
    $('header nav').css({
      width: '100%'
    });
  }

  else if(!drawerVisible && winWidth >= 992) {
    $('header nav').css({
      width: '300px'
    });
  }

  },1);
});


$('#menu-btn').click(function() {
  var winWidth = window.innerWidth;

  // If drawer IS visible

  if (drawerVisible) {
    
    if (winWidth < 992) {
        $('.nav-wrapper').animate({'opacity':'0'},'fast').css('display','none');
        $('header nav').animate({'backgroundColor':'transparent'},'fast');
    }

    else {
      $('.nav-wrapper').animate({'right':'-500px','opacity':'0'},'fast');
    }

    $('#menu-btn').animate({'opacity':'.4'},'fast').removeClass('menu-close');
    $('header nav').animate({'height':'100px'},'fast');
    drawerVisible = false;

  }

  // If drawer is NOT visible
  
  else {
    
    if (winWidth < 992) {
      
      $('.nav-wrapper').css('position','static');      
      $('header nav').css('z-index','100');
      $('header nav').animate({'backgroundColor':'#68407c'},'fast');
    }

    else {  
      $('.nav-wrapper').css('position','absolute').animate({'right':'0px','opacity':'1'},'fast');
      $('header nav').css({'z-index':'100','width':'300px'});
    }
      $('header nav').height('100%');
      $('.nav-wrapper').css('display','block').animate({'opacity':'1'},'fast');
      $('#menu-btn').animate({'opacity':'1'},'fast').addClass('menu-close');
      drawerVisible = true;
  }

});



function menuOffset(){
  var menuBtn = $('#menu-btn');
  var offset = menuBtn.offset().top;
  if (offset >=600) {
    menuBtn.css('opacity', '1');
  }
  else {
    menuBtn.css('opacity', '.7');
  }
}

$(window).scroll(function() {
  menuOffset();
});


/*====================================
=            CONTACT FORM            =
====================================*/

$('#contact-form').submit(function(e){
  var ime = $('#imeInput').val();
  var email = $('#emailInput').val();

  if (!ime) {
    e.preventDefault();
    alertify.error('Molimo Vas, upišite Vaše ime.');
  }

  else
    if (!email) {
      e.preventDefault();
      alertify.error('Molimo Vas, upišite Vaš email!');
    }

    else {
      $.ajax({
          url: "https://formspree.io/24-2014@ftn.edu.rs", 
          method: "POST",
          data: $(this).serialize(),
          dataType: "json"
      });
      e.preventDefault();
      $(this).get(0).reset();
      alertify.success('Poruka poslata!');
    }

});

// Switch

$('.switch input').click(function(){
    if (this.checked) {
      $('div[class*="col"]').css('border','1px solid #68407c');
    }
    else {
      $('*').css('border','none');
    }
  });


/*----------  GENERAL ANIMATIONS  ----------*/
function hideGeneral() {
  $('.arrows').addClass('hideMe');
  $('footer .col-md-4').addClass('hideMe');
  $('.footer-logo').addClass('hideMe');
  $('.copyright').addClass('hideMe');
}

function animateFooterNames() {
  if (window.innerWidth >= 920) {
      $('footer .col-md-4').viewportChecker({
      classToAdd: 'showMe animated fadeIn'
    });
  }

  else {
     $('footer .col-md-4').viewportChecker({
      classToAdd: 'showMe animated fadeIn',
      offset: -30
    });
  }
}

function animateFooterLogo() {
    $('.footer-logo').viewportChecker({
    classToAdd: 'showMe animated fadeIn',
    offset: -30
  });
}

function animateCopyright() {
    $('.copyright').viewportChecker({
    classToAdd: 'showMe animated fadeIn',
    offset: -20
  });
}

function animateLogo() {
  $('.bootstrap-logo').viewportChecker({
      classToAdd: 'showMe animated fadeIn',
  });
}

function animateArrows() {
 $('.arrows').viewportChecker({
   classToAdd: 'showMe animated slideInUp',
   offset: -200
}); 
}

function animateHP() {
  $('.hero-wrapper p').viewportChecker({
  classToAdd: 'showMe animated slideInUp'
  }); 

   $('.hero-wrapper h1').viewportChecker({
  classToAdd: 'showMe animated fadeIn'
  });   
}

$(function(){
  
  hideGeneral();
  animateFooterNames();
  setTimeout(animateLogo,500);
  setTimeout(animateHP,800)
  setTimeout(animateArrows,1500);
  setTimeout(animateFooterLogo, 1000);
  setTimeout(animateCopyright, 2000);
});