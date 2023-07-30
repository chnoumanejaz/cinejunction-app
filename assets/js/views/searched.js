'use strict';

import {
  api_key,
  fetchDataFromServer,
  imageBaseURL,
} from '../../js/views/config.js';

export function onSearchORClick(main, type) {
  main.innerHTML = `
            <section class="section">
                <h2 class="section__heading">All ${
                  type === 'Series' ? 'Web Series' : 'Movies'
                }</h2>  
                <div class="section__cards section-movies-onsearch">
                </div>
            </section>
    `;

  const displaySection = document.querySelector('.section-movies-onsearch');
  const changeHtml = function (obj) {
    return `
            <div class="card">
                <div>
                    <img
                    src="${imageBaseURL}original${obj.poster_path}"
                    alt="trending ${
                      obj.original_name ? obj.original_name : obj.title
                    }"
                    class="card__img" />
                    <div class="btnstack">
                    <button class="addbtn svg-btn-mini">
                        <svg class="svg svg-btnset">
                        <use xlink:href="./assets/img/sprite.svg#icon-plus"></use>
                        </svg>
                    </button>
                    <button class="detailbtn svg-btn-mini">
                        <svg class="svg svg-btnset">
                        <use xlink:href="./assets/img/sprite.svg#icon-info"></use>
                        </svg>
                    </button>
                    <button class="playbtn svg-btn-mini">
                        <svg class="svg svg-btnset">
                        <use xlink:href="./assets/img/sprite.svg#icon-play2"></use>
                        </svg>
                    </button>
                    </div>
                </div>
                <div class="card__details">
                    <h4 class="card__title">${
                      obj.original_name ? obj.original_name : obj.title
                    }</h4>
                    <div class="card__details-bottom">
                      <p class="card__date"><i>Release: </i>${
                        obj.release_date
                          ? obj.release_date.split('-')[0]
                          : obj.first_air_date.split('-')[0]
                      }</p>
                      <p class="card__date card-icon">
                        <i>
                          <svg class="svg svg-star">
                            <use
                              xlink:href="./assets/img/spriteStar.svg#icon-star-full"></use>
                          </svg>
                        </i>
                        ${obj.vote_average.toFixed(1)}
                      </p>
                </div>
                </div>
            </div>
        `;
  };

  if (type === 'Series') {
    const SectionSeriesCall = function ({ results: allList }) {
      for (const [index, all] of allList.entries()) {
        const {
          backdrop_path,
          original_name,
          first_air_date,
          poster_path,
          vote_average,
          id,
        } = all;

        const html = changeHtml(all);
        displaySection.insertAdjacentHTML('beforeend', html);
      }
    };
    fetchDataFromServer(
      `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`,
      SectionSeriesCall
    );
  } else {
    const SectionMoviesCall = function ({ results: allList }) {
      for (const [index, all] of allList.entries()) {
        const {
          backdrop_path,
          title,
          release_date,
          poster_path,
          vote_average,
          id,
        } = all;

        const html = changeHtml(all);
        displaySection.insertAdjacentHTML('beforeend', html);
      }
    };
    fetchDataFromServer(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
      SectionMoviesCall
    );
  }
}
