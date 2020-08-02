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
  
  ymaps.ready(init);
  
  function init () {
      var myMap = new ymaps.Map("map", {
              center: [7.991452, 98.303244],
              zoom: 7
          }),
  
          // Создаем геообъект с типом геометрии "Точка".
          myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [7.991452, 98.303244]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Grand Hilton Hotel',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#nightStretchyIcon',
        });
  
      // Добавляем  метку на карту.
    myMap.geoObjects
      .add(myGeoObject);
  }
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
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
});

