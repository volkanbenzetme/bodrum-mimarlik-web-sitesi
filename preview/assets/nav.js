(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  function updateNav() {
    if (window.scrollY > 40) { nav.classList.add('nav--solid'); }
    else { nav.classList.remove('nav--solid'); }
  }
  updateNav();
  document.addEventListener('scroll', updateNav, { passive: true });
})();
