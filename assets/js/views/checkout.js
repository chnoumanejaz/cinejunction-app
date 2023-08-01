'use strict';

import { loadPage } from '../main.js';

export const checkoutTickets = function (movieId) {
  loadPage();

  // Error and Success Messages
  const error = document.querySelector('.error-sec');
  const errorMsg = document.querySelector('.error');
  // Error to render on page for 2.5s
  const showError = function (msg) {
    error.style.transform = 'translateY(-20rem)';
    errorMsg.textContent = msg;
    error.style.transform = 'translateY(3rem)';
    setTimeout(function () {
      error.style.transform = 'translateY(-20rem)';
    }, 1500);
  };

  const success = document.querySelector('.success-sec');
  const successMsg = document.querySelector('.success');
  // Success to render on page for 2.5s
  const showSuccess = function (msg) {
    successMsg.textContent = msg;
    success.style.transform = 'translateY(3rem)';
    setTimeout(function () {
      success.style.transform = 'translateY(-20rem)';
    }, 1500);
  };

  const main = document.querySelector('main');
  const html = `
          <section class="section section-cinema">
              <h2 class="section__heading">Select your Seats</h2>
              <h4 class="section__heading section__heading-total"></h4>
              <div class="section__instructions">
                  <div class="reserved"><div></div> Reserved </div>
                  <div><div class="booked"></div> Booked </div>
                  <div><div class="available"></div> Available </div>
              </div>
              <div class="sides-both">
                  <div class="cinema-side">
                    <div class="screen">
                        <svg class="svg svg-screen">
                        <use xlink:href="./assets/img/sprite.svg#icon-display"></use>
                        </svg>
                    </div>
                    <div class="section__seats-layout">
                        <div class="seats top1">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                        </div>
                        <div class="seats top1.2">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                        </div>
                        <div class="seats top2">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            </div>
        
                            <div class="seats center1">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--reserved">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            </div>
                            <div class="seats center2">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            </div>
                            <div class="seats end1">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            </div>
                            <div class="seats end2">
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat svg-btnseat--booked">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                            <svg class="svg svg-btnseat">
                                <use xlink:href="./assets/img/sprite.svg#icon-event_seat"></use>
                            </svg>
                        </div>
                  </div>
                  </div>
                  <div class="checkout-side">
                  <h2 class="checkout-side__heading">Confirm Your Seats</h2>
                  <h4 class="checkout-side__heading-total"></h4>
                  <form action="">
                      <label for="uname">Enter Your Name</label>
                      <input
                      type="text"
                      id="uname"
                      class="uname"
                      placeholder="John Doe"/>
                      <label for="uphone">Enter Your Phone</label>
                      <input
                      type="text"
                      id="uphone"
                      class="uphone"
                      placeholder="+12 3456 7890"/>
                      <label for="uemail">Enter Your Email</label>
                      <input
                      type="email"
                      id="uemail"
                      class="uemail"
                      placeholder="JohnDoe@email.com"/>
                      <label for="ucardno">Enter Payment Details</label>
                      <input
                      type="number"
                      id="ucardno"
                      class="ucardno"
                      placeholder="Card No: ****56789785****"/>
                      <div class="inputsDetails">
                      <input
                          type="number"
                          placeholder="Month: 1-12"
                          class="umonth"/>
                      <input
                          type="number"
                          placeholder="Year: 2000"
                          class="uyear"/>
                      <input type="number" placeholder="CVV" class="ucvv" />
                      </div>
                      <div class="btn btn-checkout">Checkout</div>
                  </form>
                  </div>
              </div>
          </section>
  `;
  main.innerHTML = '';
  main.insertAdjacentHTML('afterbegin', html);

  const seats = document.querySelectorAll('.svg-btnseat');
  const headingTotal = document.querySelector('.section__heading-total');
  const checkoutSide = document.querySelector('.checkout-side');
  const formTotal = document.querySelector('.checkout-side__heading-total');
  const checkoutBtn = document.querySelector('.btn-checkout');

  let totalSelectedSeats = 0;
  seats.forEach(seat => {
    seat.addEventListener('click', function (e) {
      const reservations = e.target.closest('.svg-btnseat--reserved');
      const bookings = e.target.closest('.svg-btnseat--booked');
      if (seat.classList.contains('svg-btnseat--active')) {
        seat.classList.remove('svg-btnseat--active');
        totalSelectedSeats--;
        headingTotal.innerHTML = `Total Selected Seats: ${totalSelectedSeats}`;
      } else {
        if (totalSelectedSeats < 7) {
          if (reservations) {
            showError('Sorry! This seat is reserved');
          } else if (bookings) {
            showError('This seat is Already booked by someone else');
          } else {
            seat.classList.add('svg-btnseat--active');
            totalSelectedSeats++;
            headingTotal.innerHTML = `Total Selected Seats: ${totalSelectedSeats}`;
            if (totalSelectedSeats === 5) {
              showSuccess('You can select just 2 more seats.');
            }
          }
        } else {
          showError('Sorry! You cannot select more than 7 seats');
        }
      }
      
      formTotal.innerHTML = `Total Seats: ${totalSelectedSeats}`;
      if (totalSelectedSeats !== 0) {
        checkoutSide.classList.add('checkout-side--active');
      } else {
        checkoutSide.classList.remove('checkout-side--active');
      }
    });
  });

  //   Form Validations
  const name = document.querySelector('.uname');
  const email = document.querySelector('.uemail');
  const cardNo = document.querySelector('.ucardno');
  const cvv = document.querySelector('.ucvv');
  const month = document.querySelector('.umonth');
  const year = document.querySelector('.uyear');
  const phone = document.querySelector('.uphone');

  checkoutBtn.addEventListener('click', function () {
    if (name.value.trim() === '' || email.value.trim() === '') {
      showError('Enter Name and Email correctly!');
    } else if (phone.value.trim().length !== 11) {
      showError('Enter 11-Digits correct Phone No');
    } else if (cardNo.value.trim().length !== 14) {
      showError('Enter 14-Digits card no Correctly!');
    } else if (
      month.value.trim().length < 1 ||
      month.value.trim().length > 2 ||
      year.value.trim().length !== 4
    ) {
      showError('Enter Correct Month and Year');
    } else if (cvv.value.trim().length !== 3) {
      showError('Enter correct Cvv No');
    } else {
      showSuccess('Your Seats Booked! Be on Time ...');
      name.value = '';
      email.value = '';
      cardNo.value = '';
      phone.value = '';
      cvv.value = '';
      month.value = '';
      year.value = '';
      headingTotal.innerHTML = '';
      formTotal.innerHTML = '';
      seats.forEach(seat => {
        if (seat.classList.contains('svg-btnseat--active')) {
          seat.classList.remove('svg-btnseat--active');
          totalSelectedSeats = 0;
        }
      });
      checkoutSide.classList.remove('checkout-side--active');
    }
  });
};
