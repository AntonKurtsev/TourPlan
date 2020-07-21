var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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
                // iconContent: 'islands#blueHotelIcon',
                // balloonContent: 'Меня можно перемещать',
            },
        },);

    // Добавляем  метку на карту.
    myMap.geoObjects
        .add(myGeoObject);
}
