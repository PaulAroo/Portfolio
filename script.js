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


const form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      let status = document.getElementById("my-form-status");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        setTimeout(() => {
          status.innerHTML = " "
        }, 2000);
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)