'use strict';
const URL = 'https://jsonplaceholder.typicode.com/posts';

const page = document.querySelector('.page');
const modal = document.querySelector('.modal');
const postList = document.querySelector('.blog__list');
const post = document.querySelector('.single-post__content');
const titles = document.querySelectorAll('.blog__subtitle');
const descriptions = document.querySelectorAll('.blog__text');
const closeModalButton = document.querySelector('.modal-button');

// отключение скролла
const disableScrolling = () => {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = () => {
    window.scrollTo(x, y);
  };
};

// включение скролла
const enableScrolling = () => {
  window.onscroll = () => { };
};

// закрытие модального окна
const closeModalMouseHandler = () => {
  closeModalButton.classList.add('modal-button--closed');
  modal.classList.remove('modal--show-modal');
  page.classList.remove('page--modal-open');
  enableScrolling();
};

const closeModalKeyHandler = (evt) => {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    closeModalButton.classList.add('modal-button--closed');
    modal.classList.remove('modal--show-modal');
    page.classList.remove('page--modal-open');
    enableScrolling();
  }
};

// получение данных с сервера
const getData = async (URL) => {
  return await fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Could not find data');
      }
    })
    .catch((error) => error);
};

// шаблон поста
const createPost = (data, title, description, dataset) => {
  post.innerHTML = '';
  post.insertAdjacentHTML('beforeend', `
  <h2 class="single-post__title title title--medium">${title}</h2>
  <div class="single-post__content-wrapper">
    <p class="single-post__description">${description}</p>
      <source type="image/webp"
        srcset="img/blog-images/blog-image-${dataset}.webp 1x, img/blog-images/blog-image-${dataset}@2x.webp 2x">
        <img class="single-post__img" src="img/blog-images/blog-image-${dataset}.jpg"
        srcset="img/blog-images/blog-image-${dataset}@2x.jpg 2x" width="600" height="600" alt="изображение поста">
      </picture>
      <h3 class="single-post__subtitle title">${data[dataset].title}</h3>
    <p class="single-post__text">${data[dataset].body}</p>
    <p class="single-post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio.
    Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a.
    Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra. </p>
  </div>
  `);
};

// рендер поста
const renderPost = (title, description, dataset) => {
  getData(URL).then(data => {
    createPost(data, title, description, dataset);
  });
};

const postListHandler = (evt) => {
  evt.preventDefault();
  const link = evt.target.closest('.blog__link');
  let title;
  let description;

  if (link) {

    disableScrolling();
    page.classList.add('page--modal-open');
    modal.classList.add('modal--show-modal');
    closeModalButton.classList.remove('modal-button--closed');
    post.innerHTML = '';

    titles.forEach((el) => {
      if (el.dataset.blog === link.dataset.blog) {
        return title = el.textContent;
      }
    });
    descriptions.forEach((el) => {
      if (el.dataset.blog === link.dataset.blog) {
        return description = el.textContent;
      }
    });
    renderPost(title, description, link.dataset.blog);
  }
};

const init = () => {
  closeModalButton.addEventListener('click', closeModalMouseHandler);
  window.addEventListener('keydown', closeModalKeyHandler);
  postList.addEventListener('click', postListHandler);
};

init();
