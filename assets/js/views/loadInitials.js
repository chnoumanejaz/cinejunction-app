'use strict';

export const renderInitialHtml = function () {
  const body = document.querySelector('body');
  const main = document.querySelector('main');

  const footerHtml = `
                <footer class="footer">
                    <div class="footer-left">
                        <ul class="footer__list">
                        <li class="footer__item">
                            <a href="#" class="footer__link">About Us</a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">Contact Us</a>
                        </li>
                        <li class="footer__item">Comapny</li>
                        <li class="footer__item">Partners</li>
                        <li class="footer__item">Market</li>
                        </ul>
                    </div>
                    <div class="footer-center">
                        <ul class="footer__list">
                        <li class="footer__item">Watch list</li>
                        <li class="footer__item">Movies</li>
                        <li class="footer__item">Web Series</li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">Cinema</a>
                        </li>
                        <li class="footer__item">
                            <a href="#" class="footer__link">Create Account</a>
                        </li>
                        </ul>
                    </div>
                    <div class="footer-right">
                        <img src="./assets/img/logo.png" alt="cinejunction Logo" />
                        <form action="">
                        <input type="email" placeholder="Write your Email here" required />
                        <button class="btn btn-footer">Join our news Letter</button>
                        </form>
                    </div>
                    <a href="#" class="footer__top-icon">
                        <svg class="svg svg-up">
                        <use
                            xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
                        </svg>
                    </a>
                    <div class="footer--copyright">
                        Copyright &copy; 2023 all rights reserved by <span id="linkedin">Nouman Ejaz</span>
                    </div>
                </footer>
                        `;
  body.insertAdjacentHTML('beforeend', footerHtml);

  const chatBotHtml = `
        <!-- Chatbot -->
        <div class="overlay-bot overlay-bot--hidden"></div>
        <div class="chatbot">
        <svg class="svg svg-bot">
            <use xlink:href="./assets/img/sprite.svg#icon-probot"></use>
        </svg>
        </div>
        <div class="chatbot-popup">
        <div class="chatbot-popup__heading">Your Virtual Assistant</div>
        <div class="chatbot-popup__msg-area">
            <div class="up">
            <div class="user-msg hiddenanim">
                <p class="msg">
                This is the message sent by the user to the chat bot
                </p>
                <svg class="svg">
                <use xlink:href="./assets/img/sprite.svg#icon-bubbles3"></use>
                </svg>
            </div>
            <div class="bot-msg hiddenanim">
                <p class="msg">That is the Response received by the chatBot.</p>
                <svg class="svg">
                <use xlink:href="./assets/img/sprite.svg#icon-bubbles2"></use>
                </svg>
            </div>
            </div>
            <div class="down">
            <input
                type="text"
                placeholder="Start Talking ..."
                class="user-input" />
            <button class="msg-area-sendbtn btn">
                <svg class="svg">
                <use xlink:href="./assets/img/sprite.svg#icon-send"></use>
                </svg>
            </button>
            </div>
        </div>
        </div>
    `;
  body.insertAdjacentHTML('beforeend', chatBotHtml);

  const accountModelsHtml = `
            <!-- Models -->

            <!-- Signup Model -->
            <div class="model model-signup">
                <div class="model__heading">
                <p>Create your Account</p>
                </div>
                <div class="model__content">
                <form action="">
                    <label for="uname">Enter Your Name:</label>
                    <input type="text" class="signup-uname" id="uname" required />
                    <label for="email">Enter Your Email:</label>
                    <input type="email" class="signup-email" id="email" required />
                    <label for="username">Enter Your UserName:</label>
                    <input type="text" class="signup-username" id="username" required />
                    <label for="password">Enter Your Password:</label>
                    <input type="text" class="signup-password" id="password" required />
                    <div class="message-bottom">
                    Already have an account? Then
                    <span class="login-link">Login</span>
                    </div>
                    <button type="submit" name="submit" class="signup-btn btn">
                    signup
                    <svg class="svg">
                        <use xlink:href="./assets/img/sprite.svg#icon-log-in"></use>
                    </svg>
                    </button>
                </form>
                </div>
            </div>

            <!-- Watch List Model -->
            <div class="model model-watch">
                <div class="model__heading">
                <p>Your Watch List</p>
                </div>
                <div class="model__content">
                <img src="./assets/img/season poster.jpg" alt="Season name here" />
                <div class="watch-details">
                    <p>Stranger Things</p>
                    <button class="btn btn-remove">Remove</button>
                </div>
                </div>
                <div class="model__content">
                <img src="./assets/img/movie poster.jpg" alt="Movie name here" />
                <div class="watch-details">
                    <p>Fast & furious X</p>
                    <button class="btn btn-remove">Remove</button>
                </div>
                </div>
            </div>
  `;
  body.insertAdjacentHTML('beforeend', accountModelsHtml);

  const faqHtml = `
        <!-- FAQ Section -->
      <section class="section section-faq">
        <h2 class="section__heading">FAQ's</h2>
        <div class="section__visible">
          <p class="question"><b>Q:</b> Do you have Premium Services?</p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> No, We don't have it yet. You can enjoy it totally free
            of cost. Maybe we add it after sometime.
          </p>
        </div>
        <div class="section__visible">
          <p class="question"><b>Q:</b> How can I watch movies on your site?</p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> As of now, we don't have the streaming service available
            on our site. However, you can still enjoy our movie content totally
            free of cost. We are continuously working to enhance your
            experience, and we may consider adding the streaming service in the
            future.
          </p>
        </div>
        <div class="section__visible">
          <p class="question">
            <b>Q:</b> Do I need to create an account for booking movies ticket?
          </p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> Yes, you have to create an account for booking movie
            tickets. Having an account will make the booking process more
            convenient and allow you to manage your reservations easily.
          </p>
        </div>
        <div class="section__visible">
          <p class="question">
            <b>Q:</b> Can I download movies for offline viewing?
          </p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> As of now, we don't offer the option to download movies
            for offline viewing on our platform.
          </p>
        </div>
        <div class="section__visible">
          <p class="question">
            <b>Q:</b> Are there any age restrictions for accessing certain
            movies?
          </p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> No, there are no age restrictions for accessing certain
            movies on our website. All our movie content is accessible to users
            of all ages.
          </p>
        </div>
        <div class="section__visible">
          <p class="question">
            <b>Q:</b> How frequently are new movies added to the site?
          </p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> New movies are added to our site in real-time, ensuring
            that you have access to the latest and most up-to-date content.
          </p>
        </div>
        <div class="section__visible">
          <p class="question">
            <b>Q:</b> Can I request a specific movie to be added to the
            collection?
          </p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> Absolutely! We value our users' preferences, and you can
            certainly request a specific movie to be added to our collection.
          </p>
        </div>
        <div class="section__visible">
          <p class="question">
            <b>Q:</b> Can I leave reviews or ratings for movies I've watched?
          </p>
          <p class="icon faq-icon">
            <svg class="svg svg-btnset">
              <use
                xlink:href="./assets/img/sprite.svg#icon-chevron-thin-down"></use>
            </svg>
          </p>
        </div>
        <div class="section__invisible">
          <p class="answer">
            <b>Ans:</b> As of now, since we don't have streaming available on
            our site, leaving reviews or ratings for movies you've watched is
            not yet possible. However, we are continuously working to enhance
            our services, and in the future, when we introduce streaming
            features, we may consider incorporating the option for users to
            leave reviews and ratings.
          </p>
        </div>
      </section>
    `;
  main.insertAdjacentHTML('beforeend', faqHtml);

  const sectionsHtml = `
            <!-- Trending section -->
            <section class="section section-trending">
                <h2 class="section__heading">This Week Top Trendings</h2>
                <div class="section__cards" id="trending-all"></div>
            </section>

            <!-- Seasons Section -->
            <section class="section section-seasons">
                <h2 class="section__heading">Trending Web Series</h2>
                <div class="section__cards" id="trending-series"></div>
            </section>

            <!-- Movies Section -->
            <section class="section section-movies">
                <h2 class="section__heading">Trending Movies</h2>
                <div class="section__cards" id="trending-movies"></div>
            </section>

            <!-- Upcoming Movies Section -->
            <section class="section section-upcoming">
                <h2 class="section__heading">Upcoming Movies in Cinema</h2>
                <div class="section__cards" id="upcoming-movies"></div>
            </section>
  `;
  main.insertAdjacentHTML('afterbegin', sectionsHtml);
};
