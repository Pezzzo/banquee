'use strict';
const navList = document.querySelector('.page-nav__list');
const navToggle = document.querySelector('.page-header__burger');
// бургер

navToggle.classList.remove('page-header__burger--nojs');
navList.classList.remove('page-nav__list--nojs');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('page-nav__list--closed');
  navToggle.classList.toggle('page-header__burger--opened');
  navToggle.classList.toggle('page-header__burger--closed');
});
