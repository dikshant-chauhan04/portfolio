$(document).ready(function(){
    
    $('.hamburger, .navLinks').click(function(){
        $('.navLinks').toggleClass('show');
        $('.hamburger').toggleClass('ham');
    });
    
    
    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0:{
            items:1,
            nav: false
          },
          600:{
            items:1,
            nav: false
          },
          1000:{
            items:3,
            nav: false
          }
        }
      });

      $(".js-tilt").tilt({
        glare: true,
        maxGlare: 0.5
    
    })
    
   $(".contactBtn").click(function(){
     window.open("https://www.linkedin.com/in/dikshantchauhan/");
   })
})

