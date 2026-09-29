// Mobile menu toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

// Scale the live previews on the examples page to fit their cards
(function () {
  var previews = document.querySelectorAll('.example-preview');
  if (!previews.length) return;
  function fit() {
    previews.forEach(function (p) {
      p.style.setProperty('--s', p.clientWidth / 1280);
    });
  }
  fit();
  window.addEventListener('resize', fit);
})();
