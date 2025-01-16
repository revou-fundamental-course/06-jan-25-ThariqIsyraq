document.addEventListener("DOMContentLoaded", function () {
  // Welcoming Speech with Name
  const welcomeMessage = document.getElementById('welcome-message');
  const nameButton = document.getElementById('btn-nama');

  let userName = prompt("Please enter your name:");
  welcomeMessage.textContent = userName ? userName : "Guest";

  nameButton.addEventListener("click", function () {
      userName = prompt("Please enter your name:");
      welcomeMessage.textContent = userName ? userName : "Guest";
  });

  // Popup Modal About
  const aboutPopup = document.getElementById('about-popup');
  const aboutBtn = document.getElementById('about-btn');
  const closeAboutPopup = document.getElementById('close-about-popup');

  aboutBtn.addEventListener('click', function () {
      aboutPopup.style.display = 'flex';
  });

  closeAboutPopup.addEventListener('click', function () {
      aboutPopup.style.display = 'none';
  });

  // Popup Modal Portfolio
  const portfolioPopup = document.getElementById('portfolio-popup');
  const portfolioBtn = document.getElementById('portfolio-btn');
  const closePortfolioPopup = document.getElementById('close-portfolio-popup');

  portfolioBtn.addEventListener('click', function () {
      portfolioPopup.style.display = 'flex';
  });

  closePortfolioPopup.addEventListener('click', function () {
      portfolioPopup.style.display = 'none';
  });

  // Form Submission and Validation
  const contactForm = document.getElementById('contact-form');
  const formResult = document.getElementById('form-result');

  contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = contactForm.querySelector('#name').value;
      const email = contactForm.querySelector('#email').value;
      const dob = contactForm.querySelector('#dob').value;
      const message = contactForm.querySelector('#message').value;

      if (name && email && dob && message) {
          formResult.innerHTML = `
              <h3>Form Submitted Successfully!</h3>
              <p>Name: ${name}</p>
              <p>Email: ${email}</p>
              <p>Date of Birth: ${dob}</p>
              <p>Message: ${message}</p>
          `;
          contactForm.reset();
      } else {
          formResult.innerHTML = "<p style='color: red;'>Please fill out all fields.</p>";
      }
  });

  // Navbar hide/show on scroll
  let lastScrollTop = 0;
  const navbar = document.getElementById('main-header');

  window.addEventListener('scroll', function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScroll > lastScrollTop) {
          // Scroll Down
          navbar.classList.add('hidden');
      } else {
          // Scroll Up
          navbar.classList.remove('hidden');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Banner Auto Slide
  const banners = document.querySelectorAll('.banner');
  let currentBannerIndex = 0;

  function showBanner(index) {
      banners.forEach((banner, i) => {
          banner.classList.remove('active');
          if (i === index) {
              banner.classList.add('active');
          }
      });
  }

  function nextBanner() {
      currentBannerIndex = (currentBannerIndex + 1) % banners.length;
      showBanner(currentBannerIndex);
  }

  setInterval(nextBanner, 5000);
});
