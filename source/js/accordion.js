'use strict';

const faqsList = document.querySelector('.accordion');

faqsList.addEventListener('click', (evt) => {

  const faq = evt.target.closest('.accordion__question');

  if (!faq) {
    return;
  } else {

    let answer = faq.nextElementSibling;

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }

    faq.classList.toggle('accordion__question--active');
    answer.classList.toggle('accordion__answer--active');
  }
});
