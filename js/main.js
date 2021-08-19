$(document).ready(function () {
  var currentFloor = 2; // переменнаяб где зранится текущий этаж
  var floorPath = $('.home-image path'); // каждый отдельный этаж в SVG
  var counterUp = $('.counter-up'); // кнопка уверичения этажа
  var counterDown = $('.counter-down'); // кнопка уменьшения этажа

  // функция при наведении мышью на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor'); // удалаем активный класс у этажей
    currentFloor = $(this).attr('data-floor'); // получаем значение текущего эьажа
    $('.counter').text(currentFloor); // записываем значениеэтажа в счетчик справа
  });

  counterUp.on('click', function () { // отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { // проверяем значение этажа, оно не должной быть больше 18
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGroupping: false // форматируем переменную с этажем, чтобы было 01 а не 1
      });
      $('.counter').text(usCurrentFloor); // записываем значениеэтажа в счетчик справа
      floorPath.removeClass('current-floor'); // удалаем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGroupping: false
      });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
});