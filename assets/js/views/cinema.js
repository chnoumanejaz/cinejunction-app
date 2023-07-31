'use strict';

import {
  api_key,
  fetchDataFromServer,
  imageBaseURL,
} from '../../js/views/config.js';
import { loadPage } from '../main.js';

export const showCinema = function (main) {
  loadPage();
  main.innerHTML = `
        <section class="section">
            <h2 class="section__heading" style="display:flex; justify-content: center; align-items: center; gap: 1.5rem">
            Book Your Tickets Now
                <svg class="svg">
                    <use xlink:href="./assets/img/sprite.svg#icon-ticket"></use>
                </svg>
            </h2>  
        </section>
        <!-- Now Playing Movies section -->
        <section class="section section-nowPlayingMovies">
            <h2 class="section__heading">Movies Playing Now</h2>
            <div class="section__cards" id="Now-PlayingMovies"></div>
        </section>

        <!-- Now Airing Seasons Section -->
        <section class="section section-nowPlayingSeries">
            <h2 class="section__heading">Web Series Airing Today</h2>
            <div class="section__cards" id="Now-PlayingSeries"></div>
        </section>

        <!-- Upcoming Movies Section -->
        <section class="section section-upcoming">
            <h2 class="section__heading">Upcoming Movies</h2>
            <div class="section__cards" id="upcoming-movies2"></div>
        </section>
        `;

  const loadBtnParent = document.querySelector('.loadBtnParent');
  loadBtnParent.innerHTML = '';

  // Function For Changing the header
  const header = document.querySelector('header');
  const banner = document.querySelector('.banner');
  let headerChange = false;
  const changeHeaderBanner = function (obj) {
    if (headerChange === false) {
      const headerHTML = `
         <div class="banner">
           <div class="banner__img">
             <img
               src="${imageBaseURL}original${obj.poster_path}"
               alt="${obj.title ? obj.title : obj.name} Image"
               class="banner__image" />
           </div>
           <div class="banner__right">
             <div class="banner__heading">Now Playing</div>
             <div class="banner__plot">
                ${
                  obj.overview.length > 450
                    ? obj.overview.slice(0, 450)
                    : obj.overview
                }
                ${obj.overview.length > 450 ? '...' : ''}
             </div>
             <div class="banner__date">
               <div class="one">
                 <b>${obj.title ? 'Movie: ' : 'Web Series'}</b>
                 ${obj.title ? obj.title : obj.name}
               </div>
               <div class="two">
                 <b>Release Date:</b>
                 <p>${
                   obj.release_date ? obj.release_date : obj.first_air_date
                 }</p>
               </div>
             </div>
             <div class="banner__buttons">
               <button class="btn banner__btn svg-btn">
                 Play
                 <svg class="svg svg-btnset">
                   <use xlink:href="./assets/img/sprite.svg#icon-play2"></use>
                 </svg>
               </button>
               <button class="btn banner__btn svg-btn">
                 Details
                 <svg class="svg svg-btnset">
                   <use xlink:href="./assets/img/sprite.svg#icon-info"></use>
                 </svg>
               </button>
               <button class="btn banner__btn svg-btn no-wrap">
                 Add to Watch List
                 <svg class="svg svg-btnset svg-plus">
                   <use xlink:href="./assets/img/sprite.svg#icon-plus"></use>
                 </svg>
               </button>
             </div>
           </div>
         </div>
               `;
      banner.innerHTML = headerHTML;
      //   header.insertAdjacentHTML('beforeend', headerHTML);
      const gradientString = `linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7))`;
      header.style.backgroundImage = `${gradientString}, url(${imageBaseURL}original${
        obj.backdrop_path ? obj.backdrop_path : obj.poster_path
      })`;
      headerChange = true;
    }
  };

  // Get data of All the Trendings movies of present Week
  const upcomingSectionMovies = document.getElementById('upcoming-movies2');
  const upcomingSectionMoviesCall = function ({ results: movieList }) {
    for (const [index, movie] of movieList.entries()) {
      const {
        backdrop_path,
        title,
        release_date,
        poster_path,
        vote_average,
        id,
      } = movie;

      const card = `
        <div class="card">
            <div>
              <img
                src="${imageBaseURL}original${poster_path}"
                alt="${title} Upcoming movie in Cinema"
                loading = "lazy"
                class="card__img card__imgtrending" />
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
              <h4 class="card__title">${title}</h4>
                <div class="card__details-bottom">
                      <p class="card__date"><i>Release: </i>${
                        release_date.split('-')[0]
                      }</p>
                      <p class="card__date card-icon">
                        <i>
                          <svg class="svg svg-star">
                            <use
                              xlink:href="./assets/img/spriteStar.svg#icon-star-full"></use>
                          </svg>
                        </i>
                        ${vote_average.toFixed(1)}
                      </p>
                </div>
                <button class="btn btn-bookticket">Book Ticket</button>
            </div>
          </div> 
          `;
      upcomingSectionMovies.insertAdjacentHTML('beforeend', card);
    }
  };
  fetchDataFromServer(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`,
    upcomingSectionMoviesCall
  );

  // Get data of All the Trendings Web Series of present Week
  const nowPlayingSectionSeries = document.getElementById('Now-PlayingSeries');
  const nowPlayingSectionSeriesCall = function ({ results: allList }) {
    for (const [index, all] of allList.entries()) {
      const {
        backdrop_path,
        name,
        first_air_date,
        poster_path,
        vote_average,
        id,
      } = all;

      const card = `
        <div class="card">
            <div>
              <img
                src="${imageBaseURL}original${poster_path}"
                alt="Trending Web Series ${name}"
                loading = "lazy"
                class="card__img card__imgtrending" />
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
              <h4 class="card__title">${name}</h4>
                <div class="card__details-bottom">
                      <p class="card__date"><i>Release: </i>${
                        first_air_date.split('-')[0]
                      }</p>
                      <p class="card__date card-icon">
                        <i>
                          <svg class="svg svg-star">
                            <use
                              xlink:href="./assets/img/spriteStar.svg#icon-star-full"></use>
                          </svg>
                        </i>
                        ${vote_average.toFixed(1)}
                      </p>
                </div>
                <button class="btn btn-bookticket">Book Ticket</button>
            </div>
          </div> 
          `;
      nowPlayingSectionSeries.insertAdjacentHTML('afterbegin', card);
    }
  };
  fetchDataFromServer(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}`,
    nowPlayingSectionSeriesCall
  );

  // Get data of All the Trendings movies of present Week
  const nowPlayingSectionMovies = document.getElementById('Now-PlayingMovies');
  const nowPlayingSectionMoviesCall = function ({ results: movieList }) {
    for (const [index, movie] of movieList.entries()) {
      const {
        backdrop_path,
        title,
        release_date,
        poster_path,
        vote_average,
        id,
      } = movie;

      const card = `
        <div class="card">
            <div>
              <img
                src="${imageBaseURL}original${poster_path}"
                alt="Trending Movie ${title}"
                loading = "lazy"
                class="card__img card__imgtrending" />
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
              <h4 class="card__title">${title}</h4>
                <div class="card__details-bottom">
                      <p class="card__date"><i>Release: </i>${
                        release_date.split('-')[0]
                      }</p>
                      <p class="card__date card-icon">
                        <i>
                          <svg class="svg svg-star">
                            <use
                              xlink:href="./assets/img/spriteStar.svg#icon-star-full"></use>
                          </svg>
                        </i>
                        ${vote_average.toFixed(1)}
                      </p>
                </div>
                <button class="btn btn-bookticket">Book Ticket</button>
            </div>
          </div> 
          `;
      const randomIndex = Math.floor(Math.random() * 8 + 1);
      if (index === randomIndex) changeHeaderBanner(movie);
      nowPlayingSectionMovies.insertAdjacentHTML('beforeend', card);
    }
  };
  fetchDataFromServer(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,
    nowPlayingSectionMoviesCall
  );
};
