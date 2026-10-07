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

// Contact form: fill in the visitor's choices when they come from the website builder
(function () {
  var form = document.querySelector('form.form');
  if (!form) return;
  var q = new URLSearchParams(location.search);
  if (q.get('from') !== 'builder') return;
  var business = q.get('business') || '';
  if (business && form.business) form.business.value = business;
  if (form.service) form.service.value = 'A new website';
  var lines = ['Hi! I designed a website in your builder and would love to have it built.', '',
    'Business: ' + (business || '(not entered)'),
    'Industry: ' + (q.get('industry') || ''),
    'Layout: ' + (q.get('layout') || ''),
    'Colors: ' + (q.get('colors') || '')];
  if (q.get('logo') === 'yes') lines.push('Logo: I have a logo and can email it to you.');
  lines.push('', 'A bit more about my business:', '');
  if (form.message && !form.message.value) form.message.value = lines.join('\n');
  var note = document.getElementById('builder-note');
  if (note) note.hidden = false;
})();

// Contact form: "Book a Call" button in the header
(function () {
  var form = document.querySelector('form.form');
  if (!form || new URLSearchParams(location.search).get('from') !== 'call') return;
  if (form.message && !form.message.value) {
    form.message.value = "Hi! I'd like to book a free call about a website for my business.\n\nBest days and times to reach me:\n\nA bit about my business:\n";
  }
  var note = document.getElementById('builder-note');
  if (note) {
    note.textContent = '✦ Booking a call: add your phone number and the best times to reach you, and we’ll call you within one business day.';
    note.hidden = false;
  }
  if (form.phone) { form.phone.parentNode.firstChild.textContent = 'Phone (for your call)'; form.phone.required = true; }
})();

// Contact form: "Free AI Audit" buttons on the AI Solutions page
(function () {
  var form = document.querySelector('form.form');
  if (!form || new URLSearchParams(location.search).get('from') !== 'audit') return;
  if (form.service) form.service.value = 'A free AI audit';
  if (form.message && !form.message.value) {
    form.message.value = "Hi! I'd like a free AI audit for my business.\n\nMy website (if I have one):\n\nWhat takes up most of my time each week:\n";
  }
  var note = document.getElementById('builder-note');
  if (note) {
    note.textContent = '✦ Free AI audit: tell us a little about your business and we’ll send your report within a few business days.';
    note.hidden = false;
  }
})();

