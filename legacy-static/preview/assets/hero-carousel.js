(function () {
  var root = document.getElementById('hero-carousel');
  if (!root) return;
  var slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
  var dots = Array.prototype.slice.call(root.querySelectorAll('.hero-dot'));
  if (slides.length < 2) return;

  var current = 0;
  var intervalMs = 6500;
  var timer = null;

  function show(index) {
    slides[current].classList.remove('is-active');
    if (dots[current]) dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    if (dots[current]) dots[current].classList.add('is-active');
  }

  function next() { show(current + 1); }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  function start() {
    stop();
    timer = setInterval(next, intervalMs);
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      show(i);
      start();
    });
  });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { stop(); } else { start(); }
  });

  start();
})();
