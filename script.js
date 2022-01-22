$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20)
      $('.navbar').addClass("sticky");
    else
      $('.navbar').removeClass("sticky");

    if(this.scrollY > 2000)
      $('.scroll-up-btn').addClass("show");
    else
      $('.scroll-up-btn').removeClass("show");
  });

  // slide up script
  $('.scroll-up-btn').click(() => {
    $('html').animate({scrollTop: 0});
  })

  // toggle menu/navbar script
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  // typing animation
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Data Scientist", "Technical Writer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })

  var typed2 = new Typed(".typing2", {
    strings: ["Web Developer", "Data Scientist", "Technical Writer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})