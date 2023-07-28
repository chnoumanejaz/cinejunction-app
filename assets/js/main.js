'use strict';

// import { api_key, fetchDataFromServer, imageBaseURL } from "./views/config";

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
  const searchBtn = e.target.closest('.navigation__searchbtn');

  if (link) {
    allLinks.forEach(link => {
      link.classList.remove('navigation__link--active');
    });
    link.classList.add('navigation__link--active');
  }
  if (logo) window.open('index.html', '_self');
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
    faqIcon.style.transform = 'rotate(180deg) translateY(1rem)';
  }
});

// Added to watch List
const addBtn = document.querySelectorAll('.addbtn');

addBtn.forEach(btn => {
  btn.addEventListener('click', function () {
    if (btn.innerHTML.trim() === 'Added to Watch List') {
      btn.innerHTML = 'Removed from Watch List';
      setTimeout(() => {
        btn.innerHTML = `<svg class="svg svg-btnset">
                                <use xlink:href="./assets/img/sprite.svg#icon-plus"></use>
                           </svg>`;
        btn.style.borderRadius = '50%';
      }, 1500);
    } else {
      btn.innerHTML = 'Added to Watch List';
      btn.style.width = 'fit-content';
      btn.style.padding = '.5rem 1rem';
      btn.style.borderRadius = '5px';
      btn.style.color = '#fff';
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
