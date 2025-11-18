$(function () {
  $(".top-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // явно включаем стрелки
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow" /></button>',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow" /></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {}, // здесь можно добавить настройки для 1024px
      },
      {
        breakpoint: 640,
        settings: {
          arrows: false, // отключаем стрелки
        },
      },
    ],
  });
});