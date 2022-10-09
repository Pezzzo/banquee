'use strict';

const buttonList = document.querySelector('.account-selection__list');
const cards = document.querySelectorAll('.accounts__item');
const options = document.querySelectorAll('.section-compare__item');
const buttons = document.querySelectorAll('.section-compare__button');

buttonList.addEventListener('click', (evt) => {
  const button = evt.target.closest('.section-compare__button');

  if (button) {

    buttons.forEach((button) => {
      button.classList.remove('section-compare__button--active');
    });

    button.classList.add('section-compare__button--active');

    cards.forEach((card) => {
      if (card.dataset.accountSelection !== button.dataset.accountSelection) {
        card.classList.remove('accounts__item--active');
      }
      else {
        card.classList.add('accounts__item--active');
      }
    });

    options.forEach((option) => {
      if (option.dataset.accountSelection !== button.dataset.accountSelection) {
        option.classList.remove('section-compare__item--active');
      }
      else {
        option.classList.add('section-compare__item--active');
      }
    });
  }
});
