// Header turns solid once you scroll
var hdr = document.getElementById('hdr');
function onScroll() { hdr.classList.toggle('solid', window.scrollY > 40); }
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
var menuBtn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
menuBtn.addEventListener('click', function () {
  var open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  hdr.classList.toggle('menu-open', open);
});

// Fade sections in as they scroll into view
var revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(function (el) { io.observe(el); });
} else {
  revealEls.forEach(function (el) { el.classList.add('in'); });
}
