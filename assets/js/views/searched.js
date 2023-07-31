'use strict';

import {
  api_key,
  fetchDataFromServer,
  imageBaseURL,
} from '../../js/views/config.js';
import { loadPage } from '../main.js';

// For the pagination of movies and seasons
let mPageNo = 1;
let sPageNo = 1;

// Function to call from the main.js
export function onSearchORClick(main, type) {
  loadPage();
  // changing the inner html of main element of body
  main.innerHTML = `
          <section class="section">
              <h2 class="section__heading">All ${
                type === 'Series' ? 'Web Series' : 'Movies'
              }</h2>  
              <div class="section__cards section-movies-onsearch">
              </div>
          </section>
`;
  // selection of load button to load for more movies and seasonss
  const loadBtnParent = document.querySelector('.loadBtnParent');
  const loadBtn = `
          <button class="btn btn-loadmore">
              Show More ${type === 'Movies' ? 'Movies' : 'Web Series'}
          </button>
`;
  loadBtnParent.innerHTML = loadBtn;

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
        <div class="banner__heading">All ${
          obj.title ? 'Movies ' : 'Web Series'
        }</div>
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
              <b>${obj.title ? 'Movie: ' : 'Web Series:'}</b>
              ${obj.title ? obj.title : obj.name}
            </div>
            <div class="two">
              <b>Release Date:</b>
              <p>${obj.release_date ? obj.release_date : obj.first_air_date}</p>
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

  // function to change the html inside the main element
  //   to show to movie and seasons
  const displaySection = document.querySelector('.section-movies-onsearch');
  const changeHtml = function (obj) {
    return `
 <div class="card">
     <div>
         <img
         src="${imageBaseURL}original${obj.poster_path}"
         alt=" ${obj.name ? obj.name : obj.title}"
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
         <h4 class="card__title">${obj.name ? obj.name : obj.title}</h4>
         <div class="card__details-bottom card__details-bottom-display">
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

  //   A random no to generate different header every time
  const randomIndex = Math.floor(Math.random() * 15) + 2;

  //  this function is to load all the web series on the page
  //   this function is to fetch data and store it in the object to render it on the page
  const loadSeries = function () {
    const SectionSeriesCall = function ({ results: allList }) {
      for (const [index, all] of allList.entries()) {
        const {
          backdrop_path,
          name,
          first_air_date,
          poster_path,
          vote_average,
          id,
        } = all;

        if (index === randomIndex) changeHeaderBanner(all);
        const html = changeHtml(all);
        displaySection.insertAdjacentHTML('beforeend', html);
      }
    };
    fetchDataFromServer(
      `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&page=${sPageNo}`,
      SectionSeriesCall
    );
  };

  // this has the same working like series but this to fetch the movies
  const loadMovies = function () {
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

        if (index === randomIndex) changeHeaderBanner(all);
        const html = changeHtml(all);
        displaySection.insertAdjacentHTML('beforeend', html);
      }
    };
    fetchDataFromServer(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${mPageNo}`,
      SectionMoviesCall
    );
  };

  //  this will run at the initial state when user click on the movies or series link
  // from the navigation link
  if (type === 'Series') {
    loadSeries();
  } else {
    loadMovies();
  }

  // This will run when user click on the button to show more movies or web series
  loadBtnParent.addEventListener('click', function () {
    // Small loader for the lading of new movies and seasons
    const loaderSmallHtml = `
         <div class="loader-small loader-small--active"></div>
         `;
    const btnLoadMore = document.querySelector('.btn-loadmore');

    if (type === 'Series') {
      sPageNo++;
      btnLoadMore.innerHTML = loaderSmallHtml;
      setTimeout(() => {
        loadSeries();
        loadBtnParent.innerHTML = loadBtn;
      }, 800);
    } else {
      mPageNo++;
      btnLoadMore.innerHTML = loaderSmallHtml;
      setTimeout(() => {
        loadMovies();
        loadBtnParent.innerHTML = loadBtn;
      }, 800);
    }
  });
}

export const onSearchQuery = function (main) {
  // Error and Success Messages
  const error = document.querySelector('.error-sec');
  const errorMsg = document.querySelector('.error');
  // Error to render on page for 2.5s

  const showError = function (msg) {
    errorMsg.textContent = msg;
    error.style.transform = 'translateY(3rem)';
    setTimeout(function () {
      error.style.transform = 'translateY(-20rem)';
    }, 2500);
  };

  // Handling search
  const searchBtn = document.querySelector('.navigation__searchbtn');
  const searchInput = document.querySelector('.navigation__search');
  const searchFilter = document.querySelector('.navigation__filter');

  searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (searchInput.value.trim() === '') {
      showError('Please Enter a valid Search Query');
      return;
    }
    loadPage();
    main.innerHTML = `
      <section class="section">
          <h2 class="section__heading">Search Results:</h2>  
          <div class="section__cards section-movies-onsearch">
          </div>
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
        <div class="banner__heading no-wrap">Searched ${
          obj.title ? 'Movies ' : 'Web Series'
        }</div>
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
              <b>${obj.title ? 'Movie: ' : 'Web Series:'}</b>
              ${obj.title ? obj.title : obj.name}
            </div>
            <div class="two">
              <b>Release Date:</b>
              <p>${obj.release_date ? obj.release_date : obj.first_air_date}</p>
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
        const gradientString = `linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7))`;
        header.style.backgroundImage = `${gradientString}, url(${imageBaseURL}original${
          obj.backdrop_path ? obj.backdrop_path : obj.poster_path
        })`;
        headerChange = true;
      }
    };

    const checkReleaseDate = function (movieDate, seriesDate) {
      if (seriesDate) {
        if (seriesDate === '') {
          return 'Not know';
        } else {
          return seriesDate.split('-')[0];
        }
      } else {
        if (movieDate === '') {
          return 'Not know';
        } else {
          return movieDate.split('-')[0];
        }
      }
    };
    // function to change the html inside the main element
    //   to show to movie and seasons
    const displaySection = document.querySelector('.section-movies-onsearch');
    const changeHtml = function (obj) {
      return `
          <div class="card">
              <div>
                  <img
                  src="${imageBaseURL}original${obj.poster_path}"
                  alt=" ${obj.name ? obj.name : obj.title}"
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
                    obj.name ? obj.name : obj.title
                  }</h4>
                  <div class="card__details-bottom card__details-bottom-display">
                    <p class="card__date"><i>Release: </i>${checkReleaseDate(
                      obj.release_date,
                      obj.first_air_date
                    )}</p>
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

    // Search Query Api Call
    const SectionMoviesCall = function ({ results: allList }) {
      for (const [index, all] of allList.entries()) {
        const {
          backdrop_path,
          title,
          release_date,
          poster_path,
          vote_average,
          name,
          first_air_date,
          id,
        } = all;

        // console.log(index === null)
        changeHeaderBanner(all);
        const html = changeHtml(all);
        displaySection.insertAdjacentHTML('beforeend', html);
        searchInput.value = '';
      }
    };
    fetchDataFromServer(
      `https://api.themoviedb.org/3/search/${searchFilter.value.trim()}?query=${searchInput.value.trim()}&api_key=${api_key}`,
      SectionMoviesCall
    );
  });
};
