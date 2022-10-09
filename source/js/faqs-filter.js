'use strict';

const buttonsList = document.querySelector('.categories-filter__list');
const faqCategories = document.querySelectorAll('.section-faq__category');
const buttons = document.querySelectorAll('.categories-filter__category-button');

buttonsList.addEventListener('click', (evt) => {
  evt.preventDefault();
  const button = evt.target.closest('.categories-filter__category-button');

  if (button.classList.contains('categories-filter__category-button--active')) {
    return;
  }

  buttons.forEach((btn) => {
    btn.classList.remove('categories-filter__category-button--active');
  });

  button.classList.add('categories-filter__category-button--active');

  faqCategories.forEach((el) => {

    if (button.dataset.faq === 'all') {
      el.classList.remove('section-faq__category--close');
      el.classList.add('section-faq__category--show');
      return;
    }

    if (!el.classList.contains(button.dataset.faq)) {
      el.classList.remove('section-faq__category--show');
      el.classList.add('section-faq__category--close');
    } else {
      el.classList.add('section-faq__category--show');
      el.classList.remove('section-faq__category--close');
    }
  });
});
