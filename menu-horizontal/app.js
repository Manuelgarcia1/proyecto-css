const navbarHamburger = document.querySelector('.navbar-hamburger');
const navbarLinks = document.querySelector('.navbar-links');

navbarHamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});