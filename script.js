$(document).ready(function() {
 
  // side btn
 $(".side-btn").click(function(){
   $(".side-nav-links").slideToggle(1000);
   $(".side-btn").toggleClass("change");
 }) 
  
  // nav btn
  $(".nav-btn").click(function() {
    $(".side-nav").toggleClass("margin");
    $(".nav-btn").toggleClass("change");
    $("main").toggleClass("max-width");
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})