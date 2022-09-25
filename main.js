const hamburger = document.querySelector('.hamburger-button');
const heroSection = document.querySelector('.hero');

hamburger.addEventListener('click', function() {
    heroSection.classList.toggle('active');
});