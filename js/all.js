$(document).ready(function() {
  $(".read-more").click(function () {
     $(".sidebar-box").toggleClass("active");
     $(".read-more").hide();
   });
  $(".projects__more-span").click(function () {
     $(".projects__table-wrapper").css("height","auto");
     $(".projects__more-span").css("display","none");
   });
     $(".owl-carousel").owlCarousel({
      autoplaySpeed: 1000,
      autoplay: true,
      autoplayTimeout: 2000, 
   		margin: 10,
    	nav: true,
    	dots:false,
    	items: 1,
    	responsiveClass: true,
    	navContainer:".container_slider",
    	loop:true,
    	navText: ["<img src='images/prev.svg'>","<img src='images/next.svg'>"]
   });
   $(".owl-carousel1").owlCarousel({
      margin: 10,
      nav: true,
      dots:false,
      items: 1,
      responsiveClass: true,
      navContainer:".container_slider1",
      loop:true,
      navText: ["<img src='images/prev-1.svg'>","<img src='images/next-1.svg'>"]
   });
   // $(".popup__container-scroll").mCustomScrollbar();
   var $hamburger = $(".hamburger");
   $hamburger.on("click", function(e) {
     $hamburger.toggleClass("is-active");
     $(".header__nav").toggleClass("nav_active");
     // $(".header").toggleClass("header_active");
   });
    $(".types-work__design").on("click", function(e) {
     $(".popup1").toggleClass("active");
     $("html,body").css("position","fixed");
   });
    $(".popup__close1").on("click", function(e) {
     $(".popup1").toggleClass("active");
     $("html,body").css("position","static");
     var top1 = $("#yak4").offset().top;
     $("html,body").scrollTop(top1);

   });
    $(".types-work__building-reconstruction").on("click", function(e) {
     $(".popup2").toggleClass("active");
     $("html,body").css("position","fixed");
   });
    $(".popup__close2").on("click", function(e) {
     $(".popup2").toggleClass("active");
      $("html,body").css("position","static");
     let top1 = $("#yak4").offset().top;
     $("html,body").scrollTop(top1);
   });
    $(".types-work__installation").on("click", function(e) {
     $(".popup3").toggleClass("active");
     $("html,body").css("position","fixed");
   });
    $(".popup__close3").on("click", function(e) {
     $(".popup3").toggleClass("active");
     $("html,body").css("position","static");
     let top1 = $("#yak4").offset().top;
     $("html,body").scrollTop(top1);
   });
    $(".an").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
           top1 = top - $("div.header").height();
           console.log(id);
       $('body,html').animate({scrollTop: top1}, 1500);
       $hamburger.removeClass("is-active");
       $(".header__nav").removeClass("nav_active");
   });
    var nav = $('.header');
  var banner = $("div.banner").height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > banner - $("div.header").height()) {
      nav.addClass("f-nav");
    } else {
      nav.removeClass("f-nav");
    }
  });
  $(".header__link_language").click(function () {
     $(".header__drop").toggleClass("active");
     $(".header__link_language").toggleClass("active");
   });
  setTimeout(function() { $('.a1').addClass('animated fadeInRightBig block'); }, 100);
  
})



