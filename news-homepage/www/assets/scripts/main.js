// Enable JS-only styles

let body = document.querySelector('#page-body');

window.addEventListener('load', function(e) {
  body.classList.add('js-on');
});

// Menu functionality

let navOpen = document.querySelector('#navOpen')
let navLinks = document.querySelector('.js-on #navLinks');

navOpen.addEventListener('click', function(e) {
  navLinks.classList.toggle('visible');
});
