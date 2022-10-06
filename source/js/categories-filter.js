'use strict';

const buttonsList = document.querySelector('.section-posts__list');
const item = document.querySelectorAll('.blog__item');
const buttons = document.querySelectorAll('.section-posts__button');

buttonsList.addEventListener('click', (evt) => {
  const button = evt.target.closest('.section-posts__button');

  if (button.classList.contains('section-posts__button--active')) {
    return;
  }

  buttons.forEach((btn) => {
    btn.classList.remove('section-posts__button--active');
  });

  button.classList.add('section-posts__button--active');

  item.forEach((el) => {

    if (button.dataset.category === 'all') {
      el.classList.add('blog__item--show');
      el.classList.remove('blog__item--close');
      return;
    }

    if (!el.classList.contains(button.dataset.category)) {
      el.classList.remove('blog__item--show');
      el.classList.add('blog__item--close');
    } else {
      el.classList.add('blog__item--show');
      el.classList.remove('blog__item--close');
    }
  });

});
