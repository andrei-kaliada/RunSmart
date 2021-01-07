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




  function validateForms(form){
    $(form).validate({
      rules:{
        name: {
          required: true,
          minlength: 2
        },
        phone:"required",
        email:{
          required:true,
          email:true
        },
      },
      messages: {
        name: {
          required: "Пожалуйста введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа")
        },
        phone: "Пожалуйста введите свой номер телефона",
        email: {
          required: "Пожалуйста введите свою почту",
          email: "Нуправильно введен адрес почты"
        }
      }
    });
  }


  
  validateForms('#order form');
  validateForms('#consultation form');
  validateForms('#consultation-form');


  $('input[name=phone]').mask("+7(999) 999-9999");

  $('form').submit(function(e){
      e.preventDefault();
      $.ajax({
        type:"POST",
        url:"mailer/mailer/smart.php",
        data:$(this).serialize()
      }).done(function(){
        $(this).find("input").value("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeOut();

        $('form').trigger('reset');
      })

      return false;
  })

  //Smooth scroll

 $(window).scroll(function(){
   if($(this).scrollTop() > 1600 ){
    $('.pageUp').fadeIn();
   }else{
    $('.pageUp').fadeOut();
   }
 })

 new WOW().init();

});
