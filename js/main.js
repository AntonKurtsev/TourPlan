$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    speed: 700,
    effect: 'fade',
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
  
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    speed: 1000,
    effect: 'slide',
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  })
 
// Paralax
  $('.newsletter').parallax({
    imageSrc: 'img/newsletter-bg.jpg',
    speed: 0.6,
    androidFix: true,
  });
//Menu button
  var menuButton = $('.navbar-top__menu-btn')
  menuButton.on('click', function(){
    $('.navbar-bottom').toggleClass('navbar-bottom--visible');
  }) 


// Modals
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  var modalOverlayClose = $('.modal__overlay');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  modalOverlayClose.on('click', closeModal);


  function openModal() {
    var targetModal = $(this).attr('data-href');
    $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
    $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
  }

  $(document).keyup(function(event) { 
    if (event.keyCode == 27) { 
      closeModal(event);
    }
  });

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
   // Mask input
   $('.phone').mask('+7(999)999-99-99', {
    translation: {
      '9': {
        pattern: /[0-9]/,
        optional: true,
      },
    },
  });

  // Обработка формы
  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        booking__name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        booking__email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          minlength: 16,
        },
        booking__phone: {
          required: true,
          minlength: 16,
        },
      },
      messages: {
        name: {
          required: "Please specify your name",
          minlength: jQuery.validator.format("At least 2 characters required!"),
        },
        booking__name: {
          required: "Please specify your name",
          minlength: jQuery.validator.format("At least 2 characters required!"),
        },

        email: {
          required: "Please specify your email address",
          email: "Your email address must be in the format of name@domain.com"
        },
        booking__email: {
          required: "Please specify your email address",
          email: "Your email address must be in the format of name@domain.com"
        },

        phone: {
          required: "Please specify phone number",
          minlength: jQuery.validator.format("At least 10 figures required!"),
        },
        booking__phone: {
          required: "Please specify phone number",
          minlength: jQuery.validator.format("At least 10 figures required!"),
        }
      }
    });
  });
 
  // AOS animation
  AOS.init();
});

