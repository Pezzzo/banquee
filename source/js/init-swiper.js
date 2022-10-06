'use strict';

const swiperNojs = document.querySelectorAll('.swiper-button');

try {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      clickable: true,
    },
  });

  swiperNojs.forEach((el) => {
    el.classList.remove('swiper-button--nojs');
  });
}
catch (err) {
  console.error(err);
}
