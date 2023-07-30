'use strict';

import { api_key, fetchDataFromServer, imageBaseURL } from './views/config.js';
import { onSearchORClick } from './views/searched.js';

// Selecting the elements from the index.html
const header = document.querySelector('.header');
const searchField = document.querySelector('.search-field');
const searchInput = document.querySelector('.search-input');

let searchOpen = false;

const toggleSearch = function () {
  if (searchOpen === false) {
    searchOpen = true;
    searchInput.classList.remove('hiddenanim');
  } else {
    searchOpen = false;
    searchInput.classList.add('hiddenanim');
  }
};

searchField.addEventListener('click', toggleSearch);
header.addEventListener('click', function (e) {
  const input = e.target.closest('input');
  const link = e.target.closest('.navigation__link');
  const allLinks = document.querySelectorAll('.navigation__link');
  const field = e.target.closest('.search-field');
  const logo = e.target.closest('.navigation__logo');
  const home = e.target.closest('.navigation__link');
  const searchBtn = e.target.closest('.navigation__searchbtn');

  if (link) {
    allLinks.forEach(link => {
      link.classList.remove('navigation__link--active');
    });
    link.classList.add('navigation__link--active');
  }
  if (logo || home?.textContent.trim() === 'Home')
    window.open('index.html', '_self');
  if (field || input || searchBtn) return;
  else {
    searchOpen = false;
    searchInput.classList.add('hiddenanim');
  }
});

// FAQ'S section Design
const faqSection = document.querySelector('.section-faq');
const resetQuestion = document.querySelectorAll('.section__visible');
const resetFaqIcon = document.querySelectorAll('.faq-icon');

const resetQuestions = function () {
  resetQuestion.forEach(q => {
    if (q.classList.contains('section__visible--active')) {
      q.classList.remove('section__visible--active');
      resetFaqIcon.forEach(ico => {
        ico.style.transform = 'rotate(0deg)';
      });
    }
  });
};

faqSection.addEventListener('click', function (e) {
  const question = e.target.closest('.section__visible');
  const faqIcon = question?.querySelector(':nth-child(2) .faq-icon');
  if (!question) resetQuestions();
  else {
    resetQuestions();
    question.classList.add('section__visible--active');
    faqIcon.style.transform = 'rotate(180deg) translateY(-3rem)';
  }
});

// Added to watch List
const addBtn = document.querySelectorAll('.addbtn');

addBtn?.forEach(btn => {
  btn.addEventListener('click', function () {
    if (btn.innerHTML.trim() === 'Added to Watch List') {
      btn.innerHTML = 'Removed from Watch list';
      btn.style.backgroundColor = '#CF4647';
      setTimeout(() => {
        btn.innerHTML = `<svg class="svg svg-btnset">
                                <use xlink:href="./assets/img/sprite.svg#icon-plus"></use>
                           </svg>`;
        btn.classList.remove('addbtn--added');
      }, 1500);
    } else {
      if (btn.innerHTML.trim() === 'Removed from Watch list') return;
      else {
        btn.innerHTML = 'Added to Watch List';
        btn.style.backgroundColor = '#0b7a32e8';
        btn.classList.add('addbtn--added');
      }
    }
  });
});

// Theme Management in the navbar
const themeBtn = document.querySelector('.nav-theme');
const body = document.querySelector('body');

const themeChanger = function (icon) {
  return `
        <svg class="svg">
            <use xlink:href="./assets/img/sprite.svg#icon-${icon}"></use>
        </svg>`;
};
themeBtn.addEventListener('click', function () {
  if (themeBtn.innerHTML === themeChanger('moon')) {
    body.classList.add('sun');
    themeBtn.innerHTML = themeChanger('sun');
  } else {
    themeBtn.innerHTML = themeChanger('moon');
    body.classList.remove('sun');
  }
});

//  Handling the opening closing and the other chatbot things

const botBtn = document.querySelector('.chatbot');
const chatBot = document.querySelector('.chatbot-popup');
const botOverlay = document.querySelector('.overlay-bot');

const toggleChatBot = function () {
  chatBot.classList.toggle('chatbot-popup--active');
  botOverlay.classList.toggle('overlay-bot--hidden');
};
botBtn.addEventListener('click', toggleChatBot);
botOverlay.addEventListener('click', toggleChatBot);

// Handling sending reciving
chatBot.addEventListener('click', function (e) {
  const input = document.querySelector('.user-input');
  const userAreaMsg = document.querySelector('.user-msg .msg');
  const userArea = document.querySelector('.user-msg');
  const botArea = document.querySelector('.bot-msg');
  if (e.target.closest('.msg-area-sendbtn')) {
    if (input.value.trim() === '') console.log('Oh write something here');
    else {
      userArea.classList.remove('hiddenanim');
      userAreaMsg.textContent = input.value;
      input.value = '';
      setTimeout(function () {
        botArea.classList.remove('hiddenanim');
      }, 600);
      // Chat will deleted after 2 mins
      // setTimeout(function () {
      //   userArea.classList.add('hiddenanim');
      //   botArea.classList.add('hiddenanim');
      // }, 120 * 1000);
    }
  }
});

//  movie click handling onn navigation
const main = document.querySelector('main');
const navigation = document.querySelector('nav');

navigation.addEventListener('click', function (e) {
  const click = e.target.textContent.trim();
  if (click === 'Movies' || click === 'Series') {
    onSearchORClick(main, click);
  }
});

// Signup login form handling

const loginModel = document.querySelector('.model-login');
const signupModel = document.querySelector('.model-signup');
const watchModel = document.querySelector('.model-watch');

const toggleAccountModels = function () {
  loginModel.classList.toggle('model--active');
  signupModel.classList.toggle('model--active');
};

navigation.addEventListener('click', function (e) {
  const loginBtnNav = e.target.closest('.navigation__link');
  if (loginBtnNav?.textContent.trim() === 'Watch List') {
    watchModel.classList.toggle('model--active');
    loginModel.classList.remove('model--active');
    signupModel.classList.remove('model--active');
  } else {
    watchModel.classList.remove('model--active');
    loginModel.classList.remove('model--active');
    signupModel.classList.remove('model--active');
  }
  if (loginBtnNav?.textContent.trim() === 'Login') {
    watchModel.classList.remove('model--active');
    signupModel.classList.remove('model--active');
    loginModel.classList.toggle('model--active');
  }
});

loginModel.addEventListener('click', function (e) {
  const signupLink = e.target.closest('.signup-link');
  if (!signupLink) return;
  else {
    toggleAccountModels();
  }
});

signupModel.addEventListener('click', function (e) {
  const loginLink = e.target.closest('.login-link');
  if (!loginLink) return;
  else {
    toggleAccountModels();
  }
});

// Function For Changing the header
let headerChange = false;
const changeHeaderBanner = function (obj) {
  if (headerChange === false) {
    const headerHTML = `
          <div class="banner">
            <div class="banner__img">
              <img
                src="${imageBaseURL}original${obj.poster_path}"
                alt="${obj.title} Image"
                class="banner__image" />
            </div>
            <div class="banner__right">
              <div class="banner__plot">
                ${obj.overview}
              </div>
              <div class="banner__date">
                <div class="one">
                  <b>${obj.media_type === 'movie' ? 'Movie' : 'Web Series'}</b>
                </div>
                <div class="two">
                  <b>Release Date:</b>
                  <p>${obj.release_date}</p>
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
                <button class="btn banner__btn svg-btn">
                  Add to Watch List
                  <svg class="svg svg-btnset svg-plus">
                    <use xlink:href="./assets/img/sprite.svg#icon-plus"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
                `;
    header.insertAdjacentHTML('beforeend', headerHTML);
    const gradientString = `linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7))`;
    header.style.backgroundImage = `${gradientString}, url(${imageBaseURL}original${obj.backdrop_path})`;
    headerChange = true;
  }
};

// Get data of All the Trendings movies of present Week
const trendingSectionMovies = document.getElementById('trending-movies');

const trendingSectionMoviesCall = function ({ results: movieList }) {
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
                alt="trending movie ${title}"
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
            </div>
          </div> 
          `;
    trendingSectionMovies.insertAdjacentHTML('beforeend', card);
    
  }
};
fetchDataFromServer(
  `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`,
  trendingSectionMoviesCall
);

// Get data of All the Trendings of present Week
const trendingSectionall = document.getElementById('trending-all');

const trendingSectionallCall = function ({ results: allList }) {
  for (const [index, all] of allList.entries()) {
    const {
      backdrop_path,
      title,
      overview,
      release_date,
      first_air_date,
      poster_path,
      media_type,
      vote_average,
      original_name,
      id,
    } = all;

    const card = `
        <div class="card">
            <div>
              <img
                src="${imageBaseURL}original${poster_path}"
                alt="trending movie ${title ? title : original_name}"
                loading = "lazy"
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
              <h4 class="card__title">${title ? title : original_name}</h4>
                <div class="card__details-bottom">
                      <p class="card__date"><i>Release: </i>${
                        release_date
                          ? release_date.split('-')[0]
                          : first_air_date.split('-')[0]
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
            </div>
          </div> 
          `;
    trendingSectionall.insertAdjacentHTML('afterbegin', card);

    // Changing then header to the top trending movie
    changeHeaderBanner(all);
  }
};
fetchDataFromServer(
  `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}`,
  trendingSectionallCall
);

// Get data of All the Trendings Web Series of present Week
const trendingSectionSeries = document.getElementById('trending-series');

const trendingSectionSeriesCall = function ({ results: allList }) {
  for (const [index, all] of allList.entries()) {
    const {
      backdrop_path,
      original_name,
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
                alt="trending movie ${original_name}"
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
              <h4 class="card__title">${original_name}</h4>
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
            </div>
          </div> 
          `;
    trendingSectionSeries.insertAdjacentHTML('beforeend', card);
  }
};
fetchDataFromServer(
  `https://api.themoviedb.org/3/trending/tv/week?api_key=${api_key}`,
  trendingSectionSeriesCall
);
