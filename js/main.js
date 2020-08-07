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

  $(iframe).mouseover(function () { 
    $(iframe).attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.5414446132645!2d98.29703101534042!3d7.838257708655583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305025650c33dbab%3A0xa67a542329d011e1!2z0J_RhdGD0LrQtdGCLCDQmtCw0YDQvtC9LCDQntGC0LXQu9GMINCl0LjQu9GC0L7QvQ!5e0!3m2!1sru!2sru!4v1596808272663!5m2!1sru!2sru');
  });
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

