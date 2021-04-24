$(document).ready(function() {

    $("nav .bar-menu").click(function(){
        $("nav ul").toggleClass("active");
        $("nav .bar-menu i").toggleClass("active");
    })
     

    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('nav').addClass('fixed');
        }else{
          $('nav').removeClass('fixed');
        }
    });

    $('#owl-demo').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        items:1,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        mouseDrag:false,
        touchDrag:false
    })
   
});
  
  