'use strict';

const moviesContainer = document.querySelector('.post');

const createSeasonsNumber = () => {

  moviesContainer.insertAdjacentHTML('beforebegin', `
  <div class="section-hero__text-wrapper">
  <p class="section-hero__subtitle title title--small">Support</p>
  <h2 class="section-hero__title title title--big">How can we help you?</h2>
</div>
  `);
};

createSeasonsNumber();


// const createMovieItem = (data) => {
//   cleansingElement(moviesContainer);

//   moviesContainer.insertAdjacentHTML('beforeend', `
//   <div class="movies-catalog__item-selected">
//     <img class="movies-catalog__item-img-selected" src="${data.posterUrl}" width="280" height="420" alt="movie" data-movies-id="${data.kinopoiskId}">
//     <div class="movies-catalog__item-text-wrapper">
//       <h2 class="movies-catalog__item-title">${data.nameRu ? data.nameRu : data.nameEn}</h2>
//       <p><span class="movies-catalog__item-text">Год:</span> ${data.year}</p>
//       <p><span class="movies-catalog__item-text">Страна:</span> ${data.countries.map(({ country }) => country).join(', ')}</p>
//       <p><span class="movies-catalog__item-text">Жанр:</span> ${data.genres.map(({ genre }) => genre).join(', ')}</p>
//       <p><span class="movies-catalog__item-text">Продолжительность:</span> ${data.filmLength ? data.filmLength + ' мин.' : '...'}</p>
//       <p><span class="movies-catalog__item-text">Кинопоиск:</span> ${data.ratingKinopoisk ? data.ratingKinopoisk : '...'}</p>
//       <p><span class="movies-catalog__item-text">IMDb:</span> ${data.ratingImdb ? data.ratingImdb : '...'}</p>
//       <p>${data.description ? data.description : ''}</p>
//       <a class="movies-catalog__item-kinopoisk-link" href="${data.webUrl}" target="_blank"><span>подробнее на </span>Кинопоиск</a>
//     </div>
//   </div>
//   `);
// };
