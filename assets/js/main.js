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
        ico.textContent = '+';
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
    faqIcon.textContent = '-';
  }
});
