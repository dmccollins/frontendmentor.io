function disableClicks() {
  document.addEventListener('click', function(e) {
    e.preventDefault();
  });
}

disableClicks();