$(document).ready(function () {
  $(".carousel__inner").slick({
    speed: 1500,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrowLeft.svg" alt="arrowLeft" /></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrowRight.svg" alt="arrowRight" /></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows:false
        },
      },
     
    ],
  });
});
