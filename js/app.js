





/*!
 * FML : FULL
 * Fredie J. May.24.16 v2
 */


var FML = (function ($) {
  // Variables - Variables available throughout the scope of this object
  // -------------------------------------------------------------------
  var windowW,
  DialogW = 500,
  DialogH = 600,
  winTop = 0,
  sectRect = $(".section").get(0).getBoundingClientRect(),
  winLeft = (screen.width / 2) - (DialogH / 2),
  navAnchors = $('.nav ul li a'),
  siteSections = $('.fml-section'),
  siteSectOffset = [];

    

  // Init - Anything you want to happen onLoad (usually event bindings)
  // -------------------------------------------------------------------
  var init = function () {
    
    


  	$('.nav').css({left:sectRect.left});
 
     var owlGal = $('.owl-carousel.gallery');
     var owlBio = $('.owl-carousel.gallery-bio');
     var owlProd = $('.owl-carousel.prods');

     owlGal.owlCarousel({
        items:1,
         dots:true,
         loop:true,
         autoplay:true,
         autoplayTimeout:5000,
         mouseDrag:true,
        
    });
    
    owlBio.owlCarousel({
        items:1,
         dots:true,
         loop:false,
         responsive:{
              0:{
                  items:1,
                

              },
              900:{
                  items:2,
                  

              }
          }

        
    });
  

     owlProd.owlCarousel({
          loop:false,
          margin:15,
          mouseDrag:false,
          dots:false,
          responsiveClass:true,
          
          responsive:{
              0:{
                  items:1,
                  nav:false,

              },
              1000:{
                  items:3,
                  nav:false,

              }
          }
      });




     owlProd.on('changed.owl.carousel,next.owl.carousel,.owl.carousel', function(event) {
       var currItem = event.item.index;
       var itemTotal = event.item.count-1;
       
       if(currItem > 0 && currItem < itemTotal){
          $('.arrow-left.prod-gal-btn,.arrow-right.prod-gal-btn').removeClass('hide-me');
       }else if( currItem === 0){
          $('.arrow-left.prod-gal-btn').addClass('hide-me');
       }else if( currItem === itemTotal){
          $('.arrow-right.prod-gal-btn').addClass('hide-me');
       }
       
    });

    $('.arrow-left.prod-gal-btn').on('click',function(){
      owlProd.trigger('prev.owl.carousel');
    //  console.log(owl.item.index);
    });

    $('.arrow-right.prod-gal-btn').on('click',function(){
      //console.log(owl.item.index);
      owlProd.trigger('next.owl.carousel');
    });
   
   $('.arrow-left.gallery-btn').on('click',function(){
      owlGal.trigger('prev.owl.carousel');
    });

    $('.arrow-right.gallery-btn').on('click',function(){
      owlGal.trigger('next.owl.carousel');
    });
   

      var client = ShopifyBuy.buildClient({
            apiKey: '37a49cc2f108d476bdf4af5eb479827a',
            myShopifyDomain: 'fmlmovie',
            appId: '6'
      });

      
     client.fetchAllProducts().then(function (product) {
        
        for (var i = product.length - 1; i >= 0; i--) {

          var buyBtn = "#btn-"+i;
          var bigBuyBtn = "#big-btn-"+i;
          var checkOutLink = product[i].selectedVariant.checkoutUrl(1);
         
          $(buyBtn).attr( 'href' , checkOutLink );
          $(bigBuyBtn).attr( 'href' , checkOutLink );
        }

      }).catch(function () {
       // console.log('Request failed');
      });

 

  $(".prod-btn,.prod-btn-full").on('click',function(e){
    e.preventDefault();
    windowW = $(window).width();

      if( windowW > 900){
        DialogW = 500;
      }else{
        DialogW = windowW;
      }


    var checkingOut = $(this).attr('href');
    popitup(checkingOut);


  });

  navAnchors.on('click',function(){
    movingToSection($(this));
  });

$('.hero .section .pre-order-dialog .dialog-content .header a').on('click',function(e){
  e.preventDefault();
  $('.nav ul li').eq(1).find('a').click();
  
});

$('.nav .site-logo').on('click',function(){
  
  TweenMax.to('body, html',1,{scrollTop:0,ease:Power2.easeInOut});
  
});



};
  
  $( window ).resize(function(){
  	
  	sectRect = $(".section").get(0).getBoundingClientRect();
  	$('.nav').css({left:sectRect.left});

  });

////////////////----------/////////////////

var movingToSection = function(sect){
  siteSectOffset.length = 0;
  
  siteSections.each(function(){
    siteSectOffset.push($(this).offset().top);
  }); 
  
  scrollingTo(siteSectOffset[sect.parent().index()]);
  
}

 var scrollingTo = function(spot){
   TweenMax.to('body, html',1,{scrollTop:spot,ease:Power2.easeInOut});
 }

var popitup = function(url) {
  newwindow=window.open(url,'name','width='+DialogW+',height='+DialogH+',menubar=no,location=no,scrollbars=no,toolbar=no,left='+winLeft+',top='+winTop);
  if (window.focus) {newwindow.focus()}
  return false;
}






  return {
    init              : init
  };
})(jQuery);


$(document).ready(function () {FML.init();});
$(document).foundation();

var twFeeds = function(){

}









