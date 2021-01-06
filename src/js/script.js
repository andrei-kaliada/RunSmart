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

  function toggleClassItem(link){
    $(link).each( function(i){

      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  
      })
    })
  }


//   const catalogTabs = document.querySelectorAll(".catalog__tab");
// console.log(catalogTabs)
//   catalogTabs.forEach( el => {
//     el.addEventListener('click', function(e){
//       el.classList.add("catalog__tab_active");
//   });
//   })
   
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  toggleClassItem('.catalog-item__link');
  toggleClassItem('.catalog-item__back');


  // $('.catalog-item__link').each( function(i){

  //   $(this).on('click', function(e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

  //   })
  // })


  // $('.catalog-item__back').each( function(i){
  //   $(this).on('click', function(e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

  //   })
  // })


  //Modal

  $("[data-modal=consultation").on('click', function(){
    $(".overlay, #consultation").fadeIn();
  
  });

  $(".modal__close").on("click", function(){
    $(".overlay,#consultation, #order, #thanks").fadeOut();
 
  })

  $(".button_tab").on('click', function(){
    $(".overlay, #order").fadeIn();
  
  });

  $('.button_tab').each( function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      
    })
  })

});
