function init() {
  

  let width = window.innerWidth;

  if (width < 700) {
    console.log(width);
   
    $('.test-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000
    });


    $('.brand-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000
    });

  } else {
    
    $('.test-slider').slick({
      dots: true,

      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000
    });

    $('.brand-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000
    });
    

  }

  $(".mobile").css("display", "none");

}

init();

$(".menu-res").click(function () {
  $(".mobile").fadeIn()
});

$(".close").click(function () {
  $(".mobile").fadeOut()
});