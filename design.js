/* Narrow Gates Design: "Design Your Website" builder.
   Everything runs in the visitor's browser. An uploaded logo is read locally
   and never leaves their device. */
(function () {
  'use strict';

  /* ---------- Industry categories: shared nav, copy and icon ---------- */
  var CATS = {
    food: { nav: ['Menu', 'About', 'Visit', 'Order'], icon: '<path d="M5 3v7a3 3 0 0 0 6 0V3M8 3v18M18 3c-2.5 2-3.5 5-3.5 8H18v10"/>',
      descs: ['Made fresh every day with quality ingredients.', 'Quick, easy, and always delicious.', 'Perfect for gatherings big and small.'],
      about: '{n} started with a simple idea: great food, made with care, shared with our neighbors.',
      review: 'The best in town. Friendly people and everything tastes homemade.' },
    trades: { nav: ['Services', 'Areas', 'Reviews', 'Contact'], icon: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
      descs: ['Fast, reliable work done right the first time.', 'Upfront pricing with no surprises.', 'Licensed, insured, and fully guaranteed.'],
      about: 'Locally owned and trusted, {n} shows up on time and treats every home like our own.',
      review: 'On time, fair price, and spotless work. We will be calling again.' },
    health: { nav: ['Services', 'Our Team', 'Patients', 'Contact'], icon: '<path d="M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"/><path d="M7 12h2.5l1.5-2.5 2 4 1.5-2.5H17"/>',
      descs: ['Gentle, modern care for every age.', 'Personal plans built around your needs.', 'Same-week appointments available.'],
      about: 'At {n}, you are never just a number. We take time to listen and care for the whole person.',
      review: 'Caring, professional, and they truly listen. Highly recommend.' },
    beauty: { nav: ['Services', 'Team', 'Gallery', 'Book'], icon: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
      descs: ['Personalized to your look and style.', 'Premium products and beautiful results.', 'Relax and leave feeling your best.'],
      about: '{n} is a calm, welcoming space where every appointment begins with a real conversation.',
      review: 'I always leave feeling amazing. Truly the best in town.' },
    fitness: { nav: ['Classes', 'Schedule', 'Coaches', 'Join'], icon: '<path d="M6 7v10M3 9.5v5M18 7v10M21 9.5v5M6 12h12"/>',
      descs: ['Train with purpose, at your level.', 'Energizing sessions led by expert coaches.', 'Plans that fit your goals and schedule.'],
      about: '{n} is a no-ego community that shows up for each other and celebrates every win.',
      review: 'Supportive coaches and a community that keeps me coming back.' },
    pro: { nav: ['Services', 'About', 'Insights', 'Contact'], icon: '<rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V4h8v3M3 13h18"/>',
      descs: ['Clear guidance from experienced professionals.', 'Tailored solutions for your situation.', 'Responsive, personal service at every step.'],
      about: 'For years, {n} has helped clients make confident decisions with clear, honest advice.',
      review: 'Professional, responsive, and so easy to work with.' },
    creative: { nav: ['Portfolio', 'Services', 'About', 'Contact'], icon: '<path d="M3 7h4l2-3h6l2 3h4v13H3z"/><circle cx="12" cy="13" r="4"/>',
      descs: ['Thoughtful work with a personal touch.', 'Every detail designed around you.', 'Memorable results you will treasure.'],
      about: '{n} brings creativity and care to every project, big or small.',
      review: 'Beyond our expectations. Every single detail was perfect.' },
    auto: { nav: ['Services', 'Pricing', 'Reviews', 'Book'], icon: '<path d="M3 13l2-6h14l2 6v5H3zM3 13h18M7 18v2M17 18v2"/><circle cx="7.5" cy="15.5" r=".8"/><circle cx="16.5" cy="15.5" r=".8"/>',
      descs: ['Done right by certified technicians.', 'Honest quotes before any work starts.', 'Quick turnaround to get you back on the road.'],
      about: '{n} keeps our neighbors safely on the road with honest work and fair prices.',
      review: 'Honest, quick, and fair. Finally a shop I trust.' },
    community: { nav: ['About', 'Programs', 'Events', 'Contact'], icon: '<path d="M3 11l9-7 9 7v10H3z"/><path d="M12 18s-3-2-3-4a1.5 1.5 0 0 1 3-.6 1.5 1.5 0 0 1 3 .6c0 2-3 4-3 4z"/>',
      descs: ['Welcoming to everyone, wherever you are.', 'Programs that make a real difference.', 'Get involved and connect with others.'],
      about: '{n} exists to serve, connect, and support our community.',
      review: 'A true blessing to our family and our whole town.' },
    retail: { nav: ['Shop', 'New', 'About', 'Visit'], icon: '<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
      descs: ['Fresh styles arriving every week.', 'Thoughtful gifts for everyone on your list.', 'Supporting local makers and brands.'],
      about: '{n} is a locally owned shop full of carefully chosen favorites.',
      review: 'Such a great shop. I always find something special.' },
    pets: { nav: ['Services', 'Pricing', 'About', 'Book'], icon: '<ellipse cx="12" cy="16" rx="4.5" ry="3.5"/><circle cx="6" cy="10" r="1.6"/><circle cx="18" cy="10" r="1.6"/><circle cx="9.5" cy="6.5" r="1.6"/><circle cx="14.5" cy="6.5" r="1.6"/>',
      descs: ['Gentle care in a calm environment.', "Tailored to your pet's needs.", 'Trusted by pet parents across town.'],
      about: '{n} treats every pet like family.',
      review: 'My dog actually loves going. Wonderful, caring people.' },
    education: { nav: ['Programs', 'About', 'Enroll', 'Contact'], icon: '<path d="M4 19V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2zM8 7h8"/>',
      descs: ['Caring teachers who know every child.', 'Engaging lessons that build confidence.', 'Flexible schedules for busy families.'],
      about: '{n} creates a safe, encouraging place to learn and grow.',
      review: 'Our kids have thrived. We could not be happier.' }
  };

  /* ---------- Industries: [id, label, group, category, headline, subline, button, services] ---------- */
  var IND = [
    ['restaurant', 'Restaurant', 'Food & Drink', 'food', 'Great food. Good company. Every night.', '{n} serves fresh, made-from-scratch dishes in a warm, welcoming space.', 'Reserve a Table', ['Dine In', 'Takeout', 'Private Events']],
    ['cafe', 'Café & Coffee Shop', 'Food & Drink', 'food', 'Your new favorite morning ritual.', 'Small-batch roasts, fresh pastries, and a cozy corner seat at {n}.', 'See Our Menu', ['Fresh Roasted', 'Order Ahead', 'Cozy Space']],
    ['bakery', 'Bakery', 'Food & Drink', 'food', 'Baked fresh every single morning.', 'Bread, pastries, and celebration cakes made from scratch at {n}.', 'Order a Cake', ['Artisan Bread', 'Pastries', 'Custom Cakes']],
    ['foodtruck', 'Food Truck', 'Food & Drink', 'food', 'Street food worth chasing down.', 'Find {n} around town serving bold flavors, fast.', 'See Where We Are', ['Weekly Stops', 'Catering', 'Private Parties']],
    ['catering', 'Catering', 'Food & Drink', 'food', 'Unforgettable food for every occasion.', '{n} handles the menu so you can enjoy the moment.', 'Get a Quote', ['Weddings', 'Corporate Events', 'Family Gatherings']],
    ['pizzeria', 'Pizzeria', 'Food & Drink', 'food', 'Hand-tossed. Stone-baked. Always hot.', '{n} makes pizza the way it is meant to be.', 'Order Online', ['Classic Pies', 'Wings & Sides', 'Family Deals']],
    ['brewery', 'Bar & Brewery', 'Food & Drink', 'food', 'Raise a glass with the neighborhood.', 'Craft drinks, good food, and great company at {n}.', "See What's On Tap", ['On Tap', 'Kitchen', 'Live Events']],
    ['plumbing', 'Plumbing', 'Home & Trades', 'trades', 'Leaks fixed fast. Done right the first time.', '{n} offers honest, on-time plumbing for homes and businesses.', 'Get a Free Quote', ['Leak Repair', 'Water Heaters', 'Drain Cleaning']],
    ['electric', 'Electrician', 'Home & Trades', 'trades', 'Safe, reliable power for your home.', 'Licensed electricians at {n} handle everything from outlets to panels.', 'Book a Service', ['Panel Upgrades', 'Lighting', 'EV Chargers']],
    ['hvac', 'Heating & Air (HVAC)', 'Home & Trades', 'trades', 'Stay comfortable in every season.', '{n} keeps your heating and cooling running smoothly.', 'Schedule Service', ['AC Repair', 'Furnace Service', 'Maintenance Plans']],
    ['roofing', 'Roofing', 'Home & Trades', 'trades', 'A roof you never have to worry about.', '{n} installs and repairs roofs built to last.', 'Free Roof Inspection', ['Roof Replacement', 'Storm Repair', 'Gutters']],
    ['landscaping', 'Landscaping', 'Home & Trades', 'trades', "Outdoor spaces you'll actually use.", '{n} designs, builds, and maintains beautiful yards.', 'Free Estimate', ['Lawn Care', 'Hardscapes', 'Garden Design']],
    ['cleaning', 'Cleaning Service', 'Home & Trades', 'trades', 'Come home to a spotless space.', '{n} provides reliable, detail-focused cleaning you can trust.', 'Book a Cleaning', ['Home Cleaning', 'Deep Cleans', 'Office Cleaning']],
    ['construction', 'Construction & Remodeling', 'Home & Trades', 'trades', 'Building better spaces, start to finish.', '{n} brings quality craftsmanship to every project.', 'Start Your Project', ['Remodels', 'Additions', 'Custom Builds']],
    ['painting', 'Painting', 'Home & Trades', 'trades', 'A fresh coat makes all the difference.', '{n} delivers clean lines and lasting finishes, inside and out.', 'Get a Quote', ['Interior', 'Exterior', 'Cabinets']],
    ['pest', 'Pest Control', 'Home & Trades', 'trades', 'Pest-free living, guaranteed.', '{n} protects your home and family with safe, effective treatments.', 'Book an Inspection', ['Insects', 'Rodents', 'Prevention Plans']],
    ['handyman', 'Handyman', 'Home & Trades', 'trades', 'No job too small.', '{n} handles the repairs and projects on your to-do list.', 'Request a Visit', ['Repairs', 'Installations', 'Odd Jobs']],
    ['moving', 'Moving Company', 'Home & Trades', 'trades', 'Moving made simple.', '{n} packs, moves, and delivers with care.', 'Get a Moving Quote', ['Local Moves', 'Long Distance', 'Packing']],
    ['dentist', 'Dentist', 'Health & Wellness', 'health', 'Healthy smiles for the whole family.', 'Gentle, modern dental care at {n}.', 'Book an Appointment', ['Cleanings', 'Cosmetic Care', 'Emergencies']],
    ['chiro', 'Chiropractor', 'Health & Wellness', 'health', 'Move better. Feel better.', '{n} helps you find lasting relief from pain.', 'Book a Visit', ['Adjustments', 'Sports Injuries', 'Wellness Plans']],
    ['clinic', 'Medical Clinic', 'Health & Wellness', 'health', "Caring for our community's health.", '{n} offers compassionate care for all ages.', 'Request an Appointment', ['Primary Care', 'Urgent Care', 'Preventive Care']],
    ['pt', 'Physical Therapy', 'Health & Wellness', 'health', 'Get back to doing what you love.', '{n} builds personalized recovery plans that work.', 'Start Your Recovery', ['Injury Recovery', 'Post-Surgery Rehab', 'Mobility Training']],
    ['counseling', 'Counseling & Therapy', 'Health & Wellness', 'health', 'A safe place to talk, heal, and grow.', '{n} offers caring, confidential support.', 'Schedule a Consultation', ['Individual Therapy', 'Couples', 'Family']],
    ['salon', 'Hair Salon', 'Beauty', 'beauty', 'Hair that feels like you, only brighter.', 'Thoughtful cuts and lived-in color at {n}.', 'Book Now', ['Cuts & Styling', 'Color', 'Treatments']],
    ['barber', 'Barbershop', 'Beauty', 'beauty', 'Sharp cuts. Good conversation.', 'Classic and modern cuts at {n}.', 'Book a Chair', ['Haircuts', 'Beard Trims', 'Hot Towel Shaves']],
    ['nails', 'Nail Salon', 'Beauty', 'beauty', 'Polished, pretty, and pampered.', 'Manicures, pedicures, and nail art at {n}.', 'Book an Appointment', ['Manicures', 'Pedicures', 'Nail Art']],
    ['spa', 'Spa & Massage', 'Beauty', 'beauty', 'Relax. Restore. Renew.', 'Escape the everyday at {n}.', 'Book a Treatment', ['Massage', 'Facials', 'Body Treatments']],
    ['tattoo', 'Tattoo Studio', 'Beauty', 'beauty', 'Custom art that lasts a lifetime.', 'One-of-a-kind custom tattoos at {n}.', 'Book a Consultation', ['Custom Designs', 'Cover-Ups', 'Walk-Ins']],
    ['gym', 'Gym', 'Fitness', 'fitness', 'Stronger every day.', 'Equipment, classes, and coaching for every level at {n}.', 'Claim a Free Week', ['Open Gym', 'Group Classes', 'Personal Training']],
    ['yoga', 'Yoga Studio', 'Fitness', 'fitness', 'Breathe deeper. Live lighter.', 'Classes for every body at {n}.', 'Try a Class', ['Vinyasa Flow', 'Beginner Yoga', 'Meditation']],
    ['trainer', 'Personal Trainer', 'Fitness', 'fitness', 'Your goals. Your plan. Real results.', 'One-on-one coaching with {n}.', 'Book a Free Session', ['1-on-1 Training', 'Nutrition Coaching', 'Online Programs']],
    ['martial', 'Martial Arts', 'Fitness', 'fitness', 'Confidence, discipline, and strength.', 'Classes for kids and adults at {n}.', 'Try a Free Class', ['Kids Classes', 'Adult Programs', 'Self-Defense']],
    ['law', 'Law Firm', 'Professional Services', 'pro', "Steady counsel for life's important decisions.", '{n} provides trusted, personal legal guidance.', 'Schedule a Consultation', ['Estate Planning', 'Business Law', 'Family Law']],
    ['accounting', 'Accounting & Tax', 'Professional Services', 'pro', 'Numbers made simple.', '{n} handles your taxes and books so you can focus on business.', 'Book a Consultation', ['Tax Preparation', 'Bookkeeping', 'Payroll']],
    ['insurance', 'Insurance Agency', 'Professional Services', 'pro', 'Protection for what matters most.', '{n} finds the right coverage at the right price.', 'Get a Quote', ['Home & Auto', 'Life', 'Business']],
    ['realestate', 'Real Estate', 'Professional Services', 'pro', "Find the place you'll love to call home.", '{n} helps you buy and sell with confidence.', 'Search Homes', ['Buying', 'Selling', 'Home Valuation']],
    ['consulting', 'Consulting', 'Professional Services', 'pro', 'Clear strategy. Measurable growth.', '{n} helps businesses solve problems and grow.', 'Book a Call', ['Strategy', 'Operations', 'Growth']],
    ['finance', 'Financial Advisor', 'Professional Services', 'pro', 'Plan today for the life you want tomorrow.', '{n} provides personal, trustworthy financial guidance.', 'Schedule a Review', ['Retirement', 'Investments', 'Planning']],
    ['photo', 'Photography', 'Creative & Events', 'creative', 'Honest, light-filled photographs.', '{n} captures weddings, families, and the moments in between.', 'Check Your Date', ['Weddings', 'Families', 'Portraits']],
    ['events', 'Wedding & Event Planning', 'Creative & Events', 'creative', 'Beautiful days, beautifully planned.', '{n} takes care of every detail.', 'Start Planning', ['Weddings', 'Corporate Events', 'Celebrations']],
    ['florist', 'Florist', 'Creative & Events', 'creative', 'Fresh flowers for every moment.', 'Handcrafted arrangements from {n}.', 'Order Flowers', ['Bouquets', 'Weddings', 'Same-Day Delivery']],
    ['interior', 'Interior Design', 'Creative & Events', 'creative', 'Spaces that feel like you.', '{n} designs thoughtful, beautiful interiors.', 'Book a Consultation', ['Full Design', 'Room Refresh', 'Styling']],
    ['music', 'Music Lessons', 'Creative & Events', 'creative', 'Find your sound.', 'Lessons for all ages and levels at {n}.', 'Book a Lesson', ['Piano', 'Guitar', 'Voice']],
    ['autorepair', 'Auto Repair', 'Automotive', 'auto', 'Honest repairs. Fair prices.', '{n} keeps your car running safely.', 'Book Service', ['Diagnostics', 'Brakes', 'Oil Changes']],
    ['detailing', 'Car Detailing', 'Automotive', 'auto', 'Showroom shine, every time.', '{n} brings your car back to like-new.', 'Book a Detail', ['Interior Detail', 'Exterior Detail', 'Ceramic Coating']],
    ['church', 'Church / Ministry', 'Community', 'community', 'A place to belong, grow, and serve.', "Wherever you are on your journey, you're welcome at {n}.", 'Plan Your Visit', ['Sunday Services', 'Small Groups', 'Kids Ministry']],
    ['nonprofit', 'Nonprofit', 'Community', 'community', 'Together, we make a difference.', '{n} serves our community with compassion.', 'Donate Today', ['Our Programs', 'Volunteer', 'Events']],
    ['daycare', 'Daycare & Preschool', 'Community', 'education', 'Where little ones learn and grow.', 'Safe, loving care at {n}.', 'Schedule a Tour', ['Infant Care', 'Preschool', 'After School']],
    ['tutoring', 'Tutoring', 'Community', 'education', 'Confidence starts with understanding.', '{n} helps students reach their goals.', 'Book a Session', ['Math', 'Reading & Writing', 'Test Prep']],
    ['petgroom', 'Pet Grooming', 'Pets', 'pets', 'Happy pets, fresh looks.', 'Gentle, stress-free grooming at {n}.', 'Book a Groom', ['Bath & Brush', 'Full Groom', 'Nail Trims']],
    ['vet', 'Veterinarian', 'Pets', 'pets', 'Caring for the pets you love.', '{n} offers compassionate care for every pet.', 'Book a Visit', ['Wellness Exams', 'Vaccines', 'Surgery']],
    ['boutique', 'Retail Boutique', 'Retail', 'retail', "Curated finds you'll love.", 'Shop the latest arrivals at {n}.', 'Shop Now', ['New Arrivals', 'Gifts', 'Local Favorites']],
    ['other', 'Other / Small Business', 'Other', 'pro', 'Quality service you can count on.', '{n} is proud to serve our community.', 'Contact Us', ['Our Services', 'Our Team', 'Our Promise']]
  ];

  /* ---------- Color themes: primary (dark), accent, light background ---------- */
  var PALETTES = [
    { id: 'midnight', name: 'Midnight Gold', p: '#0B1A30', a: '#D9AE55', l: '#F7F4EE' },
    { id: 'sunset', name: 'Sunset', p: '#3B1F2B', a: '#E76F51', l: '#FFF6EE' },
    { id: 'ocean', name: 'Ocean', p: '#0F3B57', a: '#2A9D8F', l: '#F1F8F8' },
    { id: 'forest', name: 'Forest', p: '#1E3B2B', a: '#8DBF6E', l: '#F3F1E7' },
    { id: 'royal', name: 'Royal', p: '#24104F', a: '#9B6BF2', l: '#F6F2FF' },
    { id: 'rose', name: 'Rose', p: '#4A2333', a: '#D88C9A', l: '#FFF5F6' },
    { id: 'volt', name: 'Charcoal & Lime', p: '#121214', a: '#C6F432', l: '#F4F4F2' },
    { id: 'terracotta', name: 'Terracotta', p: '#4A2E1F', a: '#D98E2B', l: '#FBF4E9' },
    { id: 'classic', name: 'Classic Blue', p: '#0E2A5C', a: '#2E6BF0', l: '#F4F7FC' },
    { id: 'crimson', name: 'Crimson', p: '#2B0F12', a: '#C8102E', l: '#FBF6F4' },
    { id: 'sage', name: 'Sage', p: '#2F3E36', a: '#A3B18A', l: '#F5F5EF' },
    { id: 'mono', name: 'Black & White', p: '#111111', a: '#8A8A8A', l: '#FAFAFA' }
  ];

  /* ---------- Shared pieces used by every layout ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function logo(d, size) {
    return d.logo
      ? '<img class="lg" src="' + d.logo + '" alt="" style="height:' + size + 'px">'
      : '<span class="mono" style="width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.48) + 'px">' + esc(d.initial) + '</span>';
  }
  function icon(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d.cat.icon + '</svg>'; }
  function ph(d, cls) { return '<div class="ph ' + (cls || '') + '">' + icon(d) + '</div>'; }
  function nav(d) { return d.cat.nav.map(function (x) { return '<a>' + esc(x) + '</a>'; }).join(''); }
  function svcs(d, wrap) {
    return d.services.map(function (s, i) { return wrap(esc(s[0]), esc(s[1]), i); }).join('');
  }

  var BASE = '*{box-sizing:border-box}html,body{margin:0}body{-webkit-font-smoothing:antialiased;line-height:1.6}a{color:inherit;text-decoration:none;cursor:default}' +
    'h1,h2,h3{margin:0 0 .45em;line-height:1.12}p{margin:0 0 1em}' +
    '.lg{display:block;max-width:180px;object-fit:contain}' +
    '.mono{display:inline-grid;place-items:center;border-radius:12px;background:var(--a);color:var(--p);font-weight:700;flex:none;font-family:inherit}' +
    '.ph{position:relative;overflow:hidden;background:radial-gradient(circle at 24% 30%,color-mix(in srgb,var(--a) 50%,#fff) 0 15%,transparent 16%),radial-gradient(circle at 74% 70%,color-mix(in srgb,var(--a) 85%,#000) 0 25%,transparent 26%),linear-gradient(135deg,var(--p),color-mix(in srgb,var(--p) 55%,var(--a)))}' +
    '.ph svg{position:absolute;right:9%;bottom:10%;width:30%;max-width:160px;height:auto;fill:none;stroke:#fff;stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round;opacity:.4}';

  /* ---------- The 15 layouts ---------- */
  var T = [];
  function add(id, name, fonts, css, html) { T.push({ id: id, name: name, fonts: fonts, css: css, html: html }); }

  // 1. Classic Centered
  add('classic', 'Classic Centered', 'Playfair+Display:wght@600;700&family=Lato:wght@400;700',
    'body{font-family:Lato,sans-serif;color:var(--p);background:var(--l)}h1,h2,h3{font-family:"Playfair Display",serif}' +
    'header{text-align:center;padding:26px 20px 16px;border-bottom:1px solid color-mix(in srgb,var(--p) 12%,transparent)}header .b{display:flex;flex-direction:column;align-items:center;gap:8px;font:700 1.6rem "Playfair Display",serif}' +
    'nav{display:flex;justify-content:center;gap:30px;margin-top:12px;font-size:.8rem;letter-spacing:.16em;text-transform:uppercase;font-weight:700}' +
    '.hero{text-align:center;padding:80px 20px 90px}.hero h1{font-size:clamp(2.3rem,6vw,4rem);max-width:760px;margin:0 auto .3em}.hero p{max-width:560px;margin:0 auto 30px;opacity:.75;font-size:1.1rem}' +
    '.btn{display:inline-block;background:var(--p);color:var(--l);padding:14px 34px;border-radius:999px;font-weight:700;letter-spacing:.05em}' +
    '.circle{width:120px;height:120px;border-radius:50%;margin:0 auto 26px}' +
    '.svc{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1040px;margin:0 auto;padding:0 24px 80px}.card{background:#fff;border-radius:18px;padding:30px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.05)}.card h3{font-size:1.25rem}.card p{opacity:.7;margin:0}' +
    '.about{background:var(--p);color:var(--l)}.about .in{max-width:1040px;margin:0 auto;padding:70px 24px;display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}.about .ph{aspect-ratio:4/3;border-radius:18px}' +
    '.rv{text-align:center;padding:70px 24px;font:italic 600 1.5rem "Playfair Display",serif;max-width:760px;margin:0 auto}.rv span{display:block;font:700 .75rem Lato;letter-spacing:.2em;text-transform:uppercase;color:var(--a);margin-top:14px;font-style:normal}' +
    'footer{text-align:center;padding:30px;border-top:1px solid color-mix(in srgb,var(--p) 12%,transparent);font-size:.85rem;opacity:.7}' +
    '@media(max-width:760px){.svc,.about .in{grid-template-columns:1fr}nav{gap:16px;flex-wrap:wrap}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 54) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="hero">' + ph(d, 'circle') + '<h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></section>' +
        '<section class="svc">' + svcs(d, function (t, x) { return '<div class="card"><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<section class="about"><div class="in">' + ph(d) + '<div><h2>About ' + d.n + '</h2><p>' + d.about + '</p></div></div></section>' +
        '<div class="rv">&ldquo;' + d.review + '&rdquo;<span>Happy customer</span></div><footer>&copy; ' + d.n + '</footer>';
    });

  // 2. Split Hero
  add('split', 'Split Hero', 'Poppins:wght@400;500;600;700',
    'body{font-family:Poppins,sans-serif;color:#1b2230;background:#fff}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:18px 40px;gap:20px}.b{display:flex;align-items:center;gap:12px;font-weight:700;font-size:1.15rem;color:var(--p)}' +
    'nav{display:flex;gap:26px;font-size:.92rem;font-weight:500}.call{background:var(--a);color:#fff;padding:10px 20px;border-radius:10px;font-weight:600;font-size:.9rem}' +
    '.hero{display:grid;grid-template-columns:1.1fr 1fr;gap:50px;align-items:center;padding:50px 40px 70px;background:linear-gradient(180deg,var(--l),#fff)}.pill{display:inline-block;background:color-mix(in srgb,var(--a) 15%,#fff);color:var(--a);padding:6px 14px;border-radius:999px;font-size:.8rem;font-weight:600;margin-bottom:16px}' +
    '.hero h1{font-size:clamp(2.2rem,5vw,3.6rem);color:var(--p)}.hero p{color:#5b6475;font-size:1.08rem;max-width:480px}.btn{display:inline-block;background:var(--p);color:#fff;padding:14px 28px;border-radius:12px;font-weight:600;margin-top:8px}' +
    '.hero .ph{aspect-ratio:4/3.4;border-radius:28px}' +
    '.svc{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;padding:60px 40px}.card{border:1px solid #e8ebf1;border-radius:18px;padding:28px}.ic{width:46px;height:46px;border-radius:12px;background:color-mix(in srgb,var(--a) 15%,#fff);color:var(--a);display:grid;place-items:center;font-weight:700;margin-bottom:16px}.card h3{font-size:1.1rem;color:var(--p)}.card p{color:#5b6475;margin:0;font-size:.95rem}' +
    '.band{margin:0 40px 60px;background:var(--p);color:#fff;border-radius:24px;padding:40px;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}.band h2{margin:0;font-size:1.6rem}.band a{background:var(--a);padding:14px 26px;border-radius:12px;font-weight:600}' +
    'footer{padding:24px 40px;color:#8a92a3;font-size:.85rem;border-top:1px solid #eef0f4}' +
    '@media(max-width:760px){nav{display:none}header,.hero,.svc{padding-left:20px;padding-right:20px}.hero,.svc{grid-template-columns:1fr}.band{margin:0 20px 40px}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav><a class="call">' + d.c + '</a></header>' +
        '<section class="hero"><div><span class="pill">' + d.label + '</span><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + ' &rarr;</a></div>' + ph(d) + '</section>' +
        '<section class="svc">' + svcs(d, function (t, x, i) { return '<div class="card"><div class="ic">0' + (i + 1) + '</div><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<div class="band"><h2>Ready when you are.</h2><a>' + d.c + '</a></div><footer>&copy; ' + d.n + '. All rights reserved.</footer>';
    });

  // 3. Sidebar
  add('sidebar', 'Fixed Sidebar', 'Cormorant+Garamond:wght@500;600;700&family=Source+Sans+3:wght@400;600',
    'body{font-family:"Source Sans 3",sans-serif;color:var(--p);background:var(--l)}h1,h2,h3{font-family:"Cormorant Garamond",serif;font-weight:600}' +
    'aside{position:fixed;top:0;left:0;bottom:0;width:250px;background:var(--p);color:color-mix(in srgb,var(--l) 85%,transparent);padding:36px 30px;display:flex;flex-direction:column;gap:40px}.b{font:600 1.5rem "Cormorant Garamond",serif;color:#fff;display:flex;flex-direction:column;gap:12px}' +
    'aside nav{display:flex;flex-direction:column}aside nav a{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.1);font-weight:600;letter-spacing:.04em}aside .ct{margin-top:auto;font-size:.88rem}aside .ct b{display:block;color:var(--a);font-size:1rem}' +
    'main{margin-left:250px}.hero{padding:110px 7vw 90px;border-bottom:1px solid color-mix(in srgb,var(--p) 12%,transparent)}.k{color:var(--a);letter-spacing:.24em;text-transform:uppercase;font-size:.78rem;font-weight:600;margin-bottom:18px}' +
    '.hero h1{font-size:clamp(2.4rem,5vw,4.2rem);max-width:700px}.hero p{max-width:520px;opacity:.75;font-size:1.1rem}.btn{display:inline-block;background:var(--a);color:#fff;padding:14px 30px;font-weight:600;letter-spacing:.05em}' +
    '.areas{display:grid;grid-template-columns:repeat(3,1fr);padding:0 7vw}.areas div{padding:40px 26px 40px 0;border-bottom:1px solid color-mix(in srgb,var(--p) 12%,transparent)}.areas div+div{padding-left:26px;border-left:1px solid color-mix(in srgb,var(--p) 12%,transparent)}.areas h3{font-size:1.6rem}.areas p{opacity:.7;margin:0}' +
    '.q{padding:70px 7vw;font:500 1.9rem/1.35 "Cormorant Garamond",serif;max-width:900px}.q span{display:block;font:600 .8rem "Source Sans 3";letter-spacing:.2em;text-transform:uppercase;color:var(--a);margin-top:14px}' +
    'footer{padding:26px 7vw;font-size:.85rem;opacity:.6}' +
    '@media(max-width:760px){aside{position:static;width:auto;padding:24px}aside nav{flex-direction:row;flex-wrap:wrap;gap:14px}aside nav a{border:0;padding:0}main{margin:0}.hero{padding:50px 22px}.areas{grid-template-columns:1fr;padding:0 22px}.areas div+div{padding-left:0;border-left:0}.q{padding:50px 22px}}',
    function (d) {
      return '<aside><div class="b">' + logo(d, 50) + d.n + '</div><nav>' + nav(d) + '</nav><div class="ct"><b>(555) 010-0000</b>Mon&ndash;Fri, 9am&ndash;5pm</div></aside><main>' +
        '<section class="hero"><p class="k">' + d.label + '</p><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></section>' +
        '<section class="areas">' + svcs(d, function (t, x) { return '<div><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<div class="q">&ldquo;' + d.review + '&rdquo;<span>Client review</span></div><footer>&copy; ' + d.n + '</footer></main>';
    });

  // 4. Bold Dark
  add('bold', 'Bold Dark', 'Oswald:wght@500;700&family=Inter:wght@400;600',
    'body{font-family:Inter,sans-serif;background:color-mix(in srgb,var(--p) 70%,#000);color:#f2f2f2}h1,h2,h3{font-family:Oswald,sans-serif;text-transform:uppercase;line-height:.95}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:22px 40px}.b{display:flex;align-items:center;gap:12px;font:700 1.4rem Oswald;letter-spacing:.06em;text-transform:uppercase}nav{display:flex;gap:26px;font-weight:600;font-size:.82rem;text-transform:uppercase;letter-spacing:.1em}' +
    '.j{background:var(--a);color:var(--p);padding:10px 20px;font-weight:700;text-transform:uppercase;font-size:.82rem}' +
    '.hero{padding:70px 40px 60px;background:repeating-linear-gradient(115deg,transparent 0 60px,color-mix(in srgb,var(--a) 6%,transparent) 60px 62px)}.hero h1{font-size:clamp(3.2rem,10vw,7.5rem);margin:0}.hero h1 em{font-style:normal;color:var(--a)}' +
    '.row{display:flex;justify-content:space-between;align-items:flex-end;gap:30px;flex-wrap:wrap;margin-top:26px}.row p{max-width:440px;color:#c7c7ce;margin:0}.btn{background:var(--a);color:var(--p);padding:16px 30px;font-weight:700;text-transform:uppercase;letter-spacing:.08em}' +
    '.tick{background:var(--a);color:var(--p);font:700 1.3rem Oswald;text-transform:uppercase;white-space:nowrap;overflow:hidden;padding:12px 0}' +
    '.list{padding:60px 40px}.it{display:grid;grid-template-columns:90px 1fr 1.2fr;gap:20px;padding:26px 0;border-top:1px solid rgba(255,255,255,.12);align-items:baseline}.it b{font:700 2.2rem Oswald;color:var(--a)}.it h3{font-size:1.8rem;margin:0}.it p{color:#a9a9b3;margin:0}' +
    'footer{padding:26px 40px;color:#8a8a93;font-size:.85rem;border-top:1px solid rgba(255,255,255,.1)}' +
    '@media(max-width:760px){nav{display:none}header,.hero,.list{padding-left:20px;padding-right:20px}.it{grid-template-columns:60px 1fr}.it p{grid-column:2}}',
    function (d) {
      var words = d.hRaw.split(' '), last = words.pop();
      return '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav><a class="j">' + d.c + '</a></header>' +
        '<section class="hero"><h1>' + esc(words.join(' ')) + ' <em>' + esc(last) + '</em></h1><div class="row"><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div></section>' +
        '<div class="tick">' + (d.services.map(function (s) { return esc(s[0]); }).join(' &#9670; ') + ' &#9670; ').repeat(4) + '</div>' +
        '<section class="list">' + svcs(d, function (t, x, i) { return '<div class="it"><b>0' + (i + 1) + '</b><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section><footer>&copy; ' + d.n + '</footer>';
    });

  // 5. Bento Grid
  add('bento', 'Bento Grid', 'DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700',
    'body{font-family:"DM Sans",sans-serif;background:var(--l);color:var(--p)}h1,h2,h3{letter-spacing:-.02em}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:20px 30px}.b{display:flex;align-items:center;gap:10px;font-weight:700;font-size:1.2rem}nav{display:flex;gap:6px}nav a{padding:8px 14px;border-radius:999px;font-weight:500}nav a:last-child{background:var(--p);color:var(--l)}' +
    '.g{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:170px;gap:12px;padding:0 30px 40px}.t{border-radius:24px;padding:24px;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;position:relative}' +
    '.hero{grid-column:span 2;grid-row:span 2;background:var(--p);color:var(--l);justify-content:space-between}.hero h1{font-size:clamp(1.9rem,3.6vw,3rem)}.hero p{opacity:.75;margin:0 0 16px}.btn{align-self:flex-start;background:var(--a);color:var(--p);padding:11px 20px;border-radius:999px;font-weight:700}' +
    '.big{grid-column:span 2;grid-row:span 2;padding:0}.big .ph{position:absolute;inset:0}.stat{background:var(--a);color:var(--p)}.stat b{font-size:2.6rem;line-height:1}.w{background:#fff}.w h3{font-size:1.15rem}.w p{margin:0;font-size:.9rem;opacity:.7}.w small{position:absolute;top:20px;left:24px;font-weight:700;color:var(--a)}' +
    '.wide{grid-column:span 2;background:color-mix(in srgb,var(--p) 85%,var(--a));color:var(--l)}.wide p{margin:0;opacity:.8}' +
    'footer{text-align:center;padding:0 0 30px;font-size:.85rem;opacity:.6}' +
    '@media(max-width:760px){nav a:not(:last-child){display:none}.g{grid-template-columns:1fr 1fr;padding:0 16px 30px}.hero,.big,.wide{grid-column:span 2}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 36) + d.n + '</div><nav>' + nav(d) + '</nav></header><main class="g">' +
        '<div class="t hero"><span>' + d.label + '</span><div><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div></div>' +
        '<div class="t big">' + ph(d) + '</div><div class="t stat"><b>5&#9733;</b>Customer rated</div>' +
        svcs(d, function (t, x, i) { return '<div class="t w"><small>0' + (i + 1) + '</small><h3>' + t + '</h3><p>' + x + '</p></div>'; }) +
        '<div class="t wide"><h3>About us</h3><p>' + d.about + '</p></div><div class="t stat" style="background:#fff"><b style="font-size:1.4rem">&ldquo;' + d.review + '&rdquo;</b></div><div class="t w" style="background:var(--a)"><h3>' + d.c + ' &rarr;</h3></div>' +
        '</main><footer>&copy; ' + d.n + '</footer>';
    });

  // 6. Minimal Editorial
  add('minimal', 'Minimal Editorial', 'Space+Grotesk:wght@300;400;500;700',
    'body{font-family:"Space Grotesk",sans-serif;background:#fff;color:#111}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:26px 48px;font-size:.9rem}.b{display:flex;align-items:center;gap:12px;font-weight:700;letter-spacing:-.01em;font-size:1.1rem}nav{display:flex;gap:30px;color:#666}' +
    '.hero{padding:90px 48px 70px}.hero h1{font-size:clamp(2.8rem,8vw,6.4rem);font-weight:300;letter-spacing:-.04em;line-height:.98;max-width:1000px}.hero h1 span{color:var(--a)}' +
    '.meta{display:flex;justify-content:space-between;gap:30px;flex-wrap:wrap;border-top:1px solid #111;padding-top:22px;margin-top:40px}.meta p{max-width:420px;margin:0;color:#555}.btn{border-bottom:2px solid var(--a);font-weight:500;padding-bottom:3px;align-self:flex-start}' +
    '.ph{height:340px;margin:0 48px}.rows{padding:60px 48px}.r{display:grid;grid-template-columns:80px 1fr 1fr;gap:30px;padding:28px 0;border-top:1px solid #ddd}.r:last-child{border-bottom:1px solid #ddd}.r span{color:var(--a);font-weight:500}.r h3{font-size:1.6rem;font-weight:400;margin:0}.r p{margin:0;color:#666}' +
    'footer{padding:30px 48px;color:#999;font-size:.85rem;display:flex;justify-content:space-between}' +
    '@media(max-width:760px){nav{display:none}header,.hero,.rows,footer{padding-left:20px;padding-right:20px}.ph{margin:0 20px;height:220px}.r{grid-template-columns:40px 1fr}.r p{grid-column:2}}',
    function (d) {
      var w = d.hRaw.split(' '), half = Math.ceil(w.length / 2);
      return '<header><div class="b">' + logo(d, 34) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="hero"><h1>' + esc(w.slice(0, half).join(' ')) + ' <span>' + esc(w.slice(half).join(' ')) + '</span></h1><div class="meta"><p>' + d.s + '</p><a class="btn">' + d.c + ' &rarr;</a></div></section>' + ph(d) +
        '<section class="rows">' + svcs(d, function (t, x, i) { return '<div class="r"><span>(0' + (i + 1) + ')</span><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<footer><span>&copy; ' + d.n + '</span><span>' + d.label + '</span></footer>';
    });

  // 7. Full-Bleed Banner
  add('banner', 'Full-Width Banner', 'Montserrat:wght@400;500;600;800',
    'body{font-family:Montserrat,sans-serif;color:#1d2330;background:#fff}' +
    '.hero{position:relative;min-height:560px;display:flex;flex-direction:column;color:#fff}.hero .ph{position:absolute;inset:0}.hero:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.55))}' +
    'header{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:22px 40px}.b{display:flex;align-items:center;gap:12px;font-weight:800;font-size:1.15rem}nav{display:flex;gap:28px;font-weight:500;font-size:.9rem}' +
    '.hc{position:relative;z-index:1;margin:auto;text-align:center;padding:40px 24px 120px;max-width:820px}.hc h1{font-size:clamp(2.3rem,6vw,4.4rem);font-weight:800}.hc p{font-size:1.15rem;opacity:.9}.btn{display:inline-block;background:var(--a);color:#fff;padding:15px 34px;border-radius:6px;font-weight:600;margin-top:10px}' +
    '.cards{position:relative;z-index:2;display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1080px;margin:-80px auto 0;padding:0 24px}.c{background:#fff;border-radius:10px;padding:30px;box-shadow:0 20px 50px rgba(0,0,0,.12);border-top:4px solid var(--a)}.c h3{color:var(--p)}.c p{margin:0;color:#667}' +
    '.ab{max-width:760px;margin:0 auto;text-align:center;padding:80px 24px}.ab h2{color:var(--p);font-size:2rem}.ab p{color:#667}' +
    'footer{background:var(--p);color:rgba(255,255,255,.7);text-align:center;padding:26px;font-size:.85rem}' +
    '@media(max-width:760px){nav{display:none}header{padding:18px 20px}.cards{grid-template-columns:1fr;margin-top:-60px}}',
    function (d) {
      return '<section class="hero">' + ph(d) + '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<div class="hc"><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div></section>' +
        '<section class="cards">' + svcs(d, function (t, x) { return '<div class="c"><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<section class="ab"><h2>Why choose ' + d.n + '?</h2><p>' + d.about + '</p></section><footer>&copy; ' + d.n + '</footer>';
    });

  // 8. Magazine
  add('magazine', 'Magazine', 'Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Karla:wght@400;600',
    'body{font-family:Karla,sans-serif;background:#fdfcf9;color:#222}h1,h2,h3{font-family:"Libre Baskerville",serif;font-weight:400}' +
    '.top{display:flex;justify-content:space-between;padding:12px 40px;font-size:.8rem;border-bottom:1px solid #222;letter-spacing:.08em;text-transform:uppercase}' +
    '.mast{text-align:center;padding:26px 20px 18px;border-bottom:3px double #222}.mast .b{display:inline-flex;align-items:center;gap:16px;font:700 clamp(2rem,6vw,4rem) "Libre Baskerville",serif;letter-spacing:-.02em;color:var(--p)}' +
    'nav{display:flex;justify-content:center;gap:34px;padding:12px;border-bottom:1px solid #222;font-weight:600;font-size:.85rem;text-transform:uppercase;letter-spacing:.14em}' +
    '.feat{display:grid;grid-template-columns:1.5fr 1fr;gap:40px;padding:44px 40px;border-bottom:1px solid #ccc}.feat .ph{aspect-ratio:16/10}.feat h1{font-size:clamp(2rem,4vw,3.2rem);line-height:1.15}.feat p{color:#555;font-size:1.05rem}.k{color:var(--a);font-weight:600;letter-spacing:.2em;text-transform:uppercase;font-size:.75rem}' +
    '.btn{display:inline-block;background:var(--p);color:#fff;padding:12px 24px;font-weight:600}' +
    '.cols{display:grid;grid-template-columns:repeat(3,1fr);padding:30px 40px}.cols div{padding:0 24px}.cols div+div{border-left:1px solid #ccc}.cols h3{font-size:1.3rem}.cols p{color:#555}' +
    '.pull{margin:10px 40px 40px;padding:30px 0;border-top:1px solid #222;border-bottom:1px solid #222;text-align:center;font:italic 1.6rem "Libre Baskerville",serif;color:var(--p)}' +
    'footer{text-align:center;padding:20px;font-size:.8rem;color:#777}' +
    '@media(max-width:760px){.top{padding:10px 16px}nav{gap:14px;flex-wrap:wrap}.feat,.cols{grid-template-columns:1fr;padding:24px 16px}.cols div{padding:16px 0}.cols div+div{border-left:0;border-top:1px solid #ccc}.pull{margin:10px 16px 30px}}',
    function (d) {
      return '<div class="top"><span>' + d.label + '</span><span>Est. ' + (new Date().getFullYear() - 8) + '</span></div><div class="mast"><div class="b">' + logo(d, 56) + d.n + '</div></div><nav>' + nav(d) + '</nav>' +
        '<section class="feat">' + ph(d) + '<div><p class="k">Featured</p><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div></section>' +
        '<section class="cols">' + svcs(d, function (t, x) { return '<div><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<div class="pull">&ldquo;' + d.review + '&rdquo;</div><footer>&copy; ' + d.n + '</footer>';
    });

  // 9. Friendly Cards
  add('cards', 'Friendly & Rounded', 'Nunito:wght@400;600;800',
    'body{font-family:Nunito,sans-serif;background:var(--l);color:var(--p)}h1,h2,h3{font-weight:800}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:20px 36px}.b{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.25rem}nav{display:flex;gap:8px;background:#fff;padding:6px;border-radius:999px;box-shadow:0 6px 20px rgba(0,0,0,.05)}nav a{padding:8px 16px;border-radius:999px;font-weight:600}nav a:first-child{background:var(--a);color:#fff}' +
    '.hero{text-align:center;padding:60px 24px 40px;position:relative}.hero h1{font-size:clamp(2.2rem,5.5vw,3.8rem);max-width:760px;margin:0 auto .3em}.hero p{max-width:540px;margin:0 auto 28px;opacity:.75;font-size:1.1rem}' +
    '.blob{position:absolute;border-radius:50%;background:var(--a);opacity:.18}.b1{width:180px;height:180px;left:6%;top:30px}.b2{width:120px;height:120px;right:8%;top:120px;background:var(--p)}' +
    '.btn{display:inline-block;background:var(--p);color:#fff;padding:15px 32px;border-radius:999px;font-weight:800;box-shadow:0 10px 24px color-mix(in srgb,var(--p) 30%,transparent)}' +
    '.ph{height:300px;border-radius:40px;margin:20px 36px}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:30px 36px 60px}.c{background:#fff;border-radius:30px;padding:30px;box-shadow:0 10px 30px rgba(0,0,0,.05)}' +
    '.e{width:54px;height:54px;border-radius:18px;background:color-mix(in srgb,var(--a) 22%,#fff);display:grid;place-items:center;font-weight:800;color:var(--a);margin-bottom:14px;font-size:1.2rem}.c p{margin:0;opacity:.7}' +
    'footer{text-align:center;padding:24px;opacity:.6;font-size:.9rem}' +
    '@media(max-width:760px){nav{display:none}.cards{grid-template-columns:1fr;padding:20px}.ph{margin:20px;height:200px}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 42) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="hero"><span class="blob b1"></span><span class="blob b2"></span><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></section>' + ph(d) +
        '<section class="cards">' + svcs(d, function (t, x, i) { return '<div class="c"><div class="e">' + (i + 1) + '</div><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section><footer>Made with care &middot; &copy; ' + d.n + '</footer>';
    });

  // 10. Corporate
  add('corporate', 'Corporate', 'IBM+Plex+Sans:wght@400;500;600;700',
    'body{font-family:"IBM Plex Sans",sans-serif;color:#1c2533;background:#fff}' +
    '.util{background:var(--p);color:rgba(255,255,255,.8);font-size:.8rem;display:flex;justify-content:space-between;padding:8px 40px}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:18px 40px;border-bottom:1px solid #e6e9ef}.b{display:flex;align-items:center;gap:12px;font-weight:700;font-size:1.15rem;color:var(--p)}nav{display:flex;gap:30px;font-weight:500;font-size:.92rem}.q{border:2px solid var(--p);color:var(--p);padding:9px 18px;font-weight:600;font-size:.9rem}' +
    '.hero{display:grid;grid-template-columns:1.2fr 1fr;gap:50px;padding:60px 40px;align-items:center;background:var(--l)}.hero h1{font-size:clamp(2rem,4.5vw,3.2rem);color:var(--p);font-weight:700}.hero p{color:#566175}.btn{display:inline-block;background:var(--a);color:#fff;padding:14px 26px;font-weight:600}' +
    '.hero .ph{aspect-ratio:4/3}.stats{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid #e6e9ef}.stats div{padding:28px 40px;border-right:1px solid #e6e9ef}.stats b{display:block;font-size:2rem;color:var(--p)}.stats span{color:#6b7588;font-size:.9rem}' +
    '.svc{padding:60px 40px}.svc h2{color:var(--p)}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:24px}.grid div{border-left:3px solid var(--a);padding:6px 0 6px 20px}.grid h3{color:var(--p);font-size:1.1rem}.grid p{margin:0;color:#566175;font-size:.95rem}' +
    'footer{background:#0f1622;color:#8b95a7;padding:26px 40px;font-size:.85rem}' +
    '@media(max-width:760px){nav,.util span:last-child{display:none}.util,header,.hero,.svc{padding-left:20px;padding-right:20px}.hero,.grid{grid-template-columns:1fr}.stats{grid-template-columns:1fr 1fr}.stats div{padding:20px}}',
    function (d) {
      return '<div class="util"><span>Serving our community with pride</span><span>(555) 010-0000 &middot; Mon&ndash;Fri 8&ndash;6</span></div>' +
        '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav><a class="q">' + d.c + '</a></header>' +
        '<section class="hero"><div><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div>' + ph(d) + '</section>' +
        '<div class="stats"><div><b>15+</b><span>Years of experience</span></div><div><b>2,000+</b><span>Happy customers</span></div><div><b>5.0</b><span>Average rating</span></div><div><b>24h</b><span>Response time</span></div></div>' +
        '<section class="svc"><h2>What we offer</h2><div class="grid">' + svcs(d, function (t, x) { return '<div><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</div></section><footer>&copy; ' + d.n + '. All rights reserved.</footer>';
    });

  // 11. Elegant Luxury
  add('luxury', 'Elegant Luxury', 'Cinzel:wght@400;600&family=Jost:wght@300;400;500',
    'body{font-family:Jost,sans-serif;font-weight:300;background:color-mix(in srgb,var(--p) 80%,#000);color:#eee}h1,h2,h3{font-family:Cinzel,serif;font-weight:400;letter-spacing:.03em}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:26px 50px}.b{display:flex;align-items:center;gap:12px;font:600 1.1rem Cinzel;letter-spacing:.08em;color:var(--a)}nav{display:flex;gap:34px;font-size:.75rem;letter-spacing:.24em;text-transform:uppercase}' +
    '.hero{text-align:center;padding:80px 24px 90px;background:radial-gradient(ellipse 50% 60% at 50% 40%,color-mix(in srgb,var(--a) 18%,transparent),transparent 70%)}.rule{display:flex;align-items:center;justify-content:center;gap:16px;color:var(--a);letter-spacing:.4em;font-size:.72rem;text-transform:uppercase;margin-bottom:20px}.rule:before,.rule:after{content:"";width:60px;height:1px;background:var(--a)}' +
    '.hero h1{font-size:clamp(2.2rem,5.5vw,4rem);max-width:820px;margin:0 auto .4em;color:#fff}.hero p{max-width:540px;margin:0 auto 34px;color:#bbb}.btn{border:1px solid var(--a);color:var(--a);padding:15px 34px;letter-spacing:.24em;text-transform:uppercase;font-size:.75rem}' +
    '.svc{display:grid;grid-template-columns:repeat(3,1fr);margin:0 50px;border:1px solid color-mix(in srgb,var(--a) 35%,transparent)}.svc div{padding:40px 30px;text-align:center}.svc div+div{border-left:1px solid color-mix(in srgb,var(--a) 35%,transparent)}.svc b{font:400 1.8rem Cinzel;color:var(--a)}.svc h3{font-size:1rem;margin:12px 0 8px;color:#fff}.svc p{margin:0;color:#aaa;font-size:.92rem}' +
    '.split{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;padding:80px 50px}.split .ph{aspect-ratio:4/5;max-height:420px}.split p{color:#bbb}' +
    'footer{text-align:center;padding:26px;border-top:1px solid color-mix(in srgb,var(--a) 25%,transparent);font-size:.8rem;color:#888;letter-spacing:.1em}' +
    '@media(max-width:760px){nav{display:none}header{padding:20px}.svc{grid-template-columns:1fr;margin:0 20px}.svc div+div{border-left:0;border-top:1px solid color-mix(in srgb,var(--a) 35%,transparent)}.split{grid-template-columns:1fr;padding:50px 20px}}',
    function (d) {
      var R = ['I', 'II', 'III'];
      return '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="hero"><div class="rule">' + d.label + '</div><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></section>' +
        '<section class="svc">' + svcs(d, function (t, x, i) { return '<div><b>' + R[i] + '</b><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<section class="split">' + ph(d) + '<div><div class="rule" style="justify-content:flex-start">Our story</div><h2>' + d.n + '</h2><p>' + d.about + '</p></div></section><footer>&copy; ' + d.n + '</footer>';
    });

  // 12. Angled
  add('diagonal', 'Angled Sections', 'Raleway:wght@400;600;800',
    'body{font-family:Raleway,sans-serif;color:#222;background:#fff}h1,h2,h3{font-weight:800}' +
    '.hero{background:linear-gradient(120deg,var(--p) 0%,color-mix(in srgb,var(--p) 70%,var(--a)) 100%);color:#fff;clip-path:polygon(0 0,100% 0,100% 85%,0 100%);padding-bottom:110px}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:22px 40px}.b{display:flex;align-items:center;gap:12px;font-weight:800;font-size:1.2rem}nav{display:flex;gap:26px;font-weight:600;font-size:.9rem}' +
    '.hc{display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center;padding:40px 40px 0}.hc h1{font-size:clamp(2.2rem,5vw,3.8rem)}.hc p{opacity:.85;font-size:1.08rem}.btn{display:inline-block;background:var(--a);color:#fff;padding:14px 30px;font-weight:700;transform:skew(-8deg)}.btn span{display:inline-block;transform:skew(8deg)}' +
    '.hc .ph{aspect-ratio:1;clip-path:polygon(20% 0,100% 0,80% 100%,0 100%)}' +
    '.svc{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding:20px 40px 70px}.c{padding:28px;border-bottom:4px solid var(--a);box-shadow:0 10px 30px rgba(0,0,0,.06)}.c h3{color:var(--p)}.c p{margin:0;color:#666}' +
    '.cta{background:var(--a);color:#fff;clip-path:polygon(0 15%,100% 0,100% 100%,0 100%);padding:80px 40px 50px;text-align:center}.cta h2{font-size:2rem}' +
    'footer{background:#111;color:#999;text-align:center;padding:20px;font-size:.85rem}' +
    '@media(max-width:760px){nav{display:none}header,.hc,.svc{padding-left:20px;padding-right:20px}.hc,.svc{grid-template-columns:1fr}}',
    function (d) {
      return '<section class="hero"><header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav></header><div class="hc"><div><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn"><span>' + d.c + '</span></a></div>' + ph(d) + '</div></section>' +
        '<section class="svc">' + svcs(d, function (t, x) { return '<div class="c"><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section>' +
        '<section class="cta"><h2>' + d.c + '</h2><p>' + d.about + '</p></section><footer>&copy; ' + d.n + '</footer>';
    });

  // 13. Arch
  add('arch', 'Soft Arches', 'Italiana&family=Jost:wght@300;400;500',
    'body{font-family:Jost,sans-serif;font-weight:300;background:var(--l);color:var(--p)}h1,h2,h3{font-family:Italiana,serif;font-weight:400}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:24px 48px}.b{display:flex;align-items:center;gap:12px;font:400 1.6rem Italiana,serif;letter-spacing:.06em}nav{display:flex;gap:28px;font-size:.78rem;letter-spacing:.18em;text-transform:uppercase;font-weight:400}' +
    '.hero{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;padding:40px 48px 80px}.hero h1{font-size:clamp(2.6rem,6vw,4.8rem);line-height:1.02}.hero p{font-size:1.1rem;opacity:.75;max-width:440px}.k{letter-spacing:.3em;text-transform:uppercase;font-size:.72rem;color:var(--a);font-weight:500}' +
    '.btn{display:inline-block;background:var(--p);color:var(--l);padding:14px 32px;letter-spacing:.18em;text-transform:uppercase;font-size:.75rem;font-weight:500}' +
    '.hero .ph{aspect-ratio:3/4;border-radius:999px 999px 0 0;max-height:520px}' +
    '.svc{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;padding:20px 48px 80px}.svc .ph{aspect-ratio:3/3.6;border-radius:999px 999px 0 0;margin-bottom:18px}.svc h3{font-size:1.6rem;margin:0 0 6px}.svc p{margin:0;opacity:.7}' +
    'footer{padding:26px 48px;font-size:.85rem;opacity:.6;border-top:1px solid color-mix(in srgb,var(--p) 15%,transparent)}' +
    '@media(max-width:760px){nav{display:none}header,.hero,.svc{padding-left:20px;padding-right:20px}.hero,.svc{grid-template-columns:1fr}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="hero"><div><p class="k">' + d.label + '</p><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div>' + ph(d) + '</section>' +
        '<section class="svc">' + svcs(d, function (t, x) { return '<div>' + ph(d) + '<h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section><footer>&copy; ' + d.n + '</footer>';
    });

  // 14. Color Blocks
  add('blocks', 'Color Blocks', 'Archivo:wght@400;600;800;900',
    'body{font-family:Archivo,sans-serif;background:#fff;color:var(--p)}h1,h2,h3{font-weight:900;letter-spacing:-.02em}' +
    'header{display:flex;justify-content:space-between;align-items:center;padding:18px 30px;border-bottom:3px solid var(--p)}.b{display:flex;align-items:center;gap:10px;font-weight:900;font-size:1.3rem;text-transform:uppercase}nav{display:flex;gap:22px;font-weight:800;text-transform:uppercase;font-size:.85rem}' +
    '.g{display:grid;grid-template-columns:1.3fr 1fr;border-bottom:3px solid var(--p)}.a1{background:var(--a);padding:50px 40px;border-right:3px solid var(--p)}.a1 h1{font-size:clamp(2.4rem,6vw,4.6rem);line-height:.95;color:var(--p)}.a1 p{font-size:1.1rem;font-weight:600;max-width:440px}' +
    '.btn{display:inline-block;background:var(--p);color:#fff;padding:14px 26px;font-weight:800;text-transform:uppercase;box-shadow:6px 6px 0 #fff}.a2{display:grid;grid-template-rows:1fr auto}.a2 .ph{min-height:260px}.a2 div.s{background:var(--p);color:#fff;padding:26px 30px;font-weight:800;font-size:1.3rem;text-transform:uppercase}' +
    '.svc{display:grid;grid-template-columns:repeat(3,1fr)}.svc div{padding:34px 30px;border-right:3px solid var(--p);border-bottom:3px solid var(--p)}.svc div:last-child{border-right:0}.svc div:nth-child(2){background:var(--l)}.svc b{font-size:3rem;font-weight:900;color:var(--a);line-height:1}.svc h3{font-size:1.4rem;margin:8px 0}.svc p{margin:0;font-weight:500}' +
    'footer{padding:20px 30px;font-weight:800;text-transform:uppercase;font-size:.8rem}' +
    '@media(max-width:760px){nav{display:none}.g,.svc{grid-template-columns:1fr}.a1{border-right:0;border-bottom:3px solid var(--p);padding:36px 20px}.svc div{border-right:0}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 40) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="g"><div class="a1"><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></div><div class="a2">' + ph(d) + '<div class="s">' + d.label + ' &rarr;</div></div></section>' +
        '<section class="svc">' + svcs(d, function (t, x, i) { return '<div><b>0' + (i + 1) + '</b><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '</section><footer>&copy; ' + d.n + '</footer>';
    });

  // 15. Timeline
  add('timeline', 'Story Timeline', 'Merriweather:wght@700;900&family=Open+Sans:wght@400;600',
    'body{font-family:"Open Sans",sans-serif;color:#23302e;background:#fff}h1,h2,h3{font-family:Merriweather,serif}' +
    'header{background:var(--p);color:#fff;display:flex;justify-content:space-between;align-items:center;padding:18px 40px}.b{display:flex;align-items:center;gap:12px;font:900 1.1rem Merriweather,serif}nav{display:flex;gap:24px;font-weight:600;font-size:.92rem;opacity:.9}' +
    '.hero{background:var(--p);color:#fff;text-align:center;padding:50px 24px 110px}.hero h1{font-size:clamp(2rem,5vw,3.4rem);max-width:760px;margin:0 auto .4em}.hero p{opacity:.85;max-width:540px;margin:0 auto 26px}.btn{display:inline-block;background:var(--a);color:#fff;padding:13px 28px;border-radius:6px;font-weight:600}' +
    '.box{max-width:880px;margin:-70px auto 0;background:#fff;border-radius:14px;box-shadow:0 20px 50px rgba(0,0,0,.12);display:grid;grid-template-columns:repeat(3,1fr);overflow:hidden;position:relative}.box div{padding:26px;text-align:center}.box div+div{border-left:1px solid #eee}.box b{display:block;font:900 1.2rem Merriweather;color:var(--p)}.box span{font-size:.88rem;color:#667}' +
    '.tl{max-width:720px;margin:60px auto;padding:0 24px 0 60px;position:relative}.tl:before{content:"";position:absolute;left:35px;top:6px;bottom:6px;width:2px;background:color-mix(in srgb,var(--a) 40%,#ddd)}' +
    '.ev{position:relative;background:var(--l);border-radius:12px;padding:22px 24px;margin-bottom:16px}.ev:before{content:"";position:absolute;left:-33px;top:26px;width:14px;height:14px;border-radius:50%;background:var(--a);border:4px solid #fff;box-shadow:0 0 0 1px #ddd}.ev small{color:var(--a);font-weight:600}.ev h3{margin:2px 0 4px;color:var(--p)}.ev p{margin:0;color:#556}' +
    'footer{background:var(--p);color:rgba(255,255,255,.75);text-align:center;padding:24px;font-size:.85rem}' +
    '@media(max-width:760px){nav{display:none}.box{grid-template-columns:1fr;margin:-70px 20px 0}.box div+div{border-left:0;border-top:1px solid #eee}}',
    function (d) {
      return '<header><div class="b">' + logo(d, 38) + d.n + '</div><nav>' + nav(d) + '</nav></header>' +
        '<section class="hero"><h1>' + d.h + '</h1><p>' + d.s + '</p><a class="btn">' + d.c + '</a></section>' +
        '<div class="box">' + svcs(d, function (t) { return '<div><b>' + t + '</b><span>Learn more</span></div>'; }) + '</div>' +
        '<section class="tl">' + svcs(d, function (t, x, i) { return '<div class="ev"><small>Step ' + (i + 1) + '</small><h3>' + t + '</h3><p>' + x + '</p></div>'; }) + '<div class="ev"><small>Our promise</small><h3>' + d.n + '</h3><p>' + d.about + '</p></div></section><footer>&copy; ' + d.n + '</footer>';
    });

  /* ---------- Build a full preview document ---------- */
  function lighten(hex, amt) {
    var n = parseInt(hex.slice(1), 16), r = n >> 16, g = (n >> 8) & 255, b = n & 255;
    function m(c) { return Math.round(c + (255 - c) * amt); }
    return '#' + [m(r), m(g), m(b)].map(function (c) { return c.toString(16).padStart(2, '0'); }).join('');
  }

  function render(state) {
    var ind = IND.find(function (x) { return x[0] === state.industry; }) || IND[0];
    var cat = CATS[ind[3]];
    var rawName = (state.name || '').trim() || 'Your Business';
    var n = esc(rawName);
    var d = {
      n: n, initial: rawName.charAt(0).toUpperCase(), logo: state.logo, cat: cat, label: esc(ind[1]),
      hRaw: ind[4], h: esc(ind[4]), s: esc(ind[5]).replace(/\{n\}/g, n), c: esc(ind[6]),
      services: ind[7].map(function (t, i) { return [t, cat.descs[i]]; }),
      about: esc(cat.about).replace(/\{n\}/g, n), review: esc(cat.review)
    };
    // Avoid "Co.." when the business name already ends with a period
    d.s = d.s.replace(/\.\./g, '.'); d.about = d.about.replace(/\.\./g, '.');
    var t = T.find(function (x) { return x.id === state.layout; }) || T[0];
    var pal = state.palette;
    var vars = ':root{--p:' + pal.p + ';--a:' + pal.a + ';--l:' + pal.l + '}';
    return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=' + t.fonts + '&display=swap">' +
      '<style>' + vars + BASE + t.css + '</style></head><body>' + t.html(d) + '</body></html>';
  }

  /* ---------- Builder UI ---------- */
  var $ = function (s) { return document.querySelector(s); };
  var state = { name: '', industry: 'cafe', layout: 'split', palette: PALETTES[1], paletteId: 'sunset', logo: null, device: 'desktop' };

  // Industry dropdown, grouped
  var sel = $('#b-industry'), groups = {};
  IND.forEach(function (x) {
    if (!groups[x[2]]) { groups[x[2]] = document.createElement('optgroup'); groups[x[2]].label = x[2]; sel.appendChild(groups[x[2]]); }
    var o = document.createElement('option'); o.value = x[0]; o.textContent = x[1]; groups[x[2]].appendChild(o);
  });
  sel.value = state.industry;
  $('#b-count').textContent = IND.length;

  // Layout buttons with mini schematic thumbnails
  var SCHEMA = {
    classic: '<rect x="30" y="6" width="40" height="4" rx="1"/><circle cx="50" cy="24" r="6"/><rect x="25" y="34" width="50" height="5" rx="1"/><rect x="10" y="48" width="24" height="14" rx="2"/><rect x="38" y="48" width="24" height="14" rx="2"/><rect x="66" y="48" width="24" height="14" rx="2"/>',
    split: '<rect x="8" y="6" width="20" height="4" rx="1"/><rect x="8" y="18" width="38" height="6" rx="1"/><rect x="8" y="28" width="30" height="3" rx="1"/><rect x="8" y="36" width="16" height="5" rx="2"/><rect x="54" y="16" width="38" height="28" rx="5"/><rect x="8" y="50" width="26" height="12" rx="2"/><rect x="38" y="50" width="26" height="12" rx="2"/><rect x="68" y="50" width="24" height="12" rx="2"/>',
    sidebar: '<rect x="0" y="0" width="26" height="70"/><rect x="34" y="12" width="50" height="7" rx="1"/><rect x="34" y="24" width="38" height="3" rx="1"/><rect x="34" y="32" width="16" height="5"/><rect x="34" y="46" width="56" height="1"/><rect x="34" y="52" width="17" height="10"/><rect x="54" y="52" width="17" height="10"/><rect x="74" y="52" width="17" height="10"/>',
    bold: '<rect x="0" y="0" width="100" height="70" fill-opacity=".25"/><rect x="8" y="12" width="70" height="12"/><rect x="8" y="28" width="50" height="12"/><rect x="0" y="46" width="100" height="6" fill-opacity=".7"/><rect x="8" y="58" width="84" height="2"/>',
    bento: '<rect x="6" y="6" width="42" height="34" rx="4"/><rect x="52" y="6" width="42" height="34" rx="4" fill-opacity=".5"/><rect x="6" y="44" width="20" height="20" rx="4" fill-opacity=".5"/><rect x="30" y="44" width="20" height="20" rx="4"/><rect x="54" y="44" width="40" height="20" rx="4" fill-opacity=".7"/>',
    minimal: '<rect x="8" y="10" width="80" height="9"/><rect x="8" y="22" width="56" height="9"/><rect x="8" y="38" width="84" height="1"/><rect x="8" y="44" width="84" height="20" fill-opacity=".4"/>',
    banner: '<rect x="0" y="0" width="100" height="44" fill-opacity=".55"/><rect x="25" y="16" width="50" height="6" rx="1"/><rect x="38" y="26" width="24" height="4" rx="1"/><rect x="8" y="38" width="26" height="22" rx="2"/><rect x="37" y="38" width="26" height="22" rx="2"/><rect x="66" y="38" width="26" height="22" rx="2"/>',
    magazine: '<rect x="20" y="4" width="60" height="8"/><rect x="0" y="15" width="100" height="1"/><rect x="6" y="20" width="52" height="28" fill-opacity=".5"/><rect x="62" y="22" width="32" height="6"/><rect x="62" y="31" width="26" height="3"/><rect x="6" y="54" width="26" height="10"/><rect x="37" y="54" width="26" height="10"/><rect x="68" y="54" width="26" height="10"/>',
    cards: '<circle cx="14" cy="18" r="9" fill-opacity=".4"/><rect x="25" y="12" width="50" height="7" rx="3"/><rect x="38" y="23" width="24" height="5" rx="3"/><rect x="8" y="34" width="84" height="12" rx="6" fill-opacity=".5"/><rect x="8" y="50" width="26" height="14" rx="6"/><rect x="37" y="50" width="26" height="14" rx="6"/><rect x="66" y="50" width="26" height="14" rx="6"/>',
    corporate: '<rect x="0" y="0" width="100" height="4"/><rect x="8" y="12" width="40" height="6"/><rect x="8" y="22" width="32" height="3"/><rect x="56" y="10" width="36" height="22" fill-opacity=".5"/><rect x="0" y="38" width="100" height="10" fill-opacity=".3"/><rect x="8" y="54" width="2" height="10"/><rect x="38" y="54" width="2" height="10"/><rect x="68" y="54" width="2" height="10"/>',
    luxury: '<rect x="0" y="0" width="100" height="70" fill-opacity=".2"/><rect x="38" y="10" width="24" height="1"/><rect x="22" y="16" width="56" height="6"/><rect x="40" y="28" width="20" height="5" fill="none" stroke="currentColor"/><rect x="8" y="42" width="84" height="22" fill="none" stroke="currentColor"/><rect x="36" y="42" width=".8" height="22"/><rect x="64" y="42" width=".8" height="22"/>',
    diagonal: '<path d="M0 0h100v30L0 42z" fill-opacity=".6"/><rect x="8" y="10" width="36" height="6"/><path d="M60 8h30l-6 24H54z"/><rect x="8" y="48" width="26" height="14"/><rect x="37" y="48" width="26" height="14"/><rect x="66" y="48" width="26" height="14"/>',
    arch: '<rect x="8" y="14" width="34" height="7"/><rect x="8" y="24" width="28" height="3"/><rect x="8" y="31" width="16" height="5"/><path d="M58 40V22a16 16 0 0 1 32 0v18z" fill-opacity=".6"/><path d="M8 66V54a8 8 0 0 1 16 0v12zM40 66V54a8 8 0 0 1 16 0v12zM72 66V54a8 8 0 0 1 16 0v12z"/>',
    blocks: '<rect x="0" y="0" width="58" height="44" fill-opacity=".5"/><rect x="6" y="10" width="40" height="8"/><rect x="6" y="22" width="30" height="8"/><rect x="58" y="0" width="42" height="34" fill-opacity=".3"/><rect x="58" y="34" width="42" height="10"/><rect x="0" y="44" width="100" height="26" fill="none" stroke="currentColor" stroke-width="2"/><rect x="33" y="44" width="2" height="26"/><rect x="66" y="44" width="2" height="26"/>',
    timeline: '<rect x="0" y="0" width="100" height="26" fill-opacity=".6"/><rect x="28" y="8" width="44" height="5"/><rect x="16" y="22" width="68" height="10" rx="2"/><rect x="20" y="38" width="2" height="30"/><circle cx="21" cy="42" r="3"/><rect x="28" y="38" width="60" height="8" rx="2"/><circle cx="21" cy="56" r="3"/><rect x="28" y="52" width="60" height="8" rx="2"/>'
  };
  var lw = $('#b-layouts');
  T.forEach(function (t, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'layout-btn'; b.dataset.id = t.id; b.setAttribute('aria-pressed', 'false');
    b.innerHTML = '<svg viewBox="0 0 100 70" aria-hidden="true">' + SCHEMA[t.id] + '</svg><span>' + (i + 1) + '. ' + t.name + '</span>';
    b.addEventListener('click', function () { state.layout = t.id; update(); });
    lw.appendChild(b);
  });

  // Color swatches
  var sw = $('#b-palettes');
  PALETTES.forEach(function (p) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'swatch'; b.dataset.id = p.id; b.title = p.name; b.setAttribute('aria-label', p.name);
    b.style.background = 'linear-gradient(135deg,' + p.p + ' 0 50%,' + p.a + ' 50% 100%)';
    b.addEventListener('click', function () { state.palette = p; state.paletteId = p.id; update(); });
    sw.appendChild(b);
  });
  var cp = $('#b-custom-p'), ca = $('#b-custom-a');
  function custom() {
    state.palette = { id: 'custom', name: 'Custom (' + cp.value + ' / ' + ca.value + ')', p: cp.value, a: ca.value, l: lighten(cp.value, 0.95) };
    state.paletteId = 'custom'; update();
  }
  cp.addEventListener('input', custom); ca.addEventListener('input', custom);

  // Name and industry
  var nameIn = $('#b-name');
  nameIn.addEventListener('input', function () { state.name = nameIn.value; schedule(); });
  sel.addEventListener('change', function () { state.industry = sel.value; update(); });

  // Logo upload (stays on the visitor's device)
  var logoIn = $('#b-logo'), logoName = $('#b-logo-name'), logoClear = $('#b-logo-clear');
  logoIn.addEventListener('change', function () {
    var f = logoIn.files && logoIn.files[0];
    if (!f) return;
    if (!/^image\//.test(f.type)) { logoName.textContent = 'Please choose an image file'; return; }
    var r = new FileReader();
    r.onload = function () { state.logo = r.result; logoName.textContent = f.name; logoClear.hidden = false; update(); };
    r.readAsDataURL(f);
  });
  logoClear.addEventListener('click', function () { state.logo = null; logoIn.value = ''; logoName.textContent = 'PNG, JPG or SVG'; logoClear.hidden = true; update(); });

  // Device toggle
  document.querySelectorAll('.device-btn').forEach(function (b) {
    b.addEventListener('click', function () { state.device = b.dataset.device; update(); });
  });

  // Surprise me
  $('#b-shuffle').addEventListener('click', function () {
    state.layout = T[Math.floor(Math.random() * T.length)].id;
    state.palette = PALETTES[Math.floor(Math.random() * PALETTES.length)]; state.paletteId = state.palette.id;
    update();
  });

  // Preview frame
  var frame = $('#b-frame'), stage = $('#b-stage'), shell = $('#b-shell');
  var WIDTHS = { desktop: 1280, tablet: 820, phone: 390 }, HEIGHTS = { desktop: 820, tablet: 1060, phone: 760 };
  function fit() {
    var w = WIDTHS[state.device], h = HEIGHTS[state.device];
    var cs = getComputedStyle(stage);
    var avail = stage.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var scale = Math.min(1, avail / w);
    if (state.device === 'phone') scale = Math.min(1, avail / w, 640 / h);
    frame.style.width = w + 'px'; frame.style.height = h + 'px';
    frame.style.transform = 'scale(' + scale + ')';
    shell.style.width = (w * scale) + 'px';
    shell.style.height = (h * scale + 34) + 'px';
    shell.className = 'shell shell-' + state.device;
  }
  window.addEventListener('resize', fit);

  var timer;
  function schedule() { clearTimeout(timer); timer = setTimeout(update, 160); }

  function update() {
    frame.srcdoc = render(state);
    document.querySelectorAll('.layout-btn').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.id === state.layout); });
    document.querySelectorAll('.swatch').forEach(function (b) { b.classList.toggle('on', b.dataset.id === state.paletteId); });
    $('#b-custom').classList.toggle('on', state.paletteId === 'custom');
    document.querySelectorAll('.device-btn').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.device === state.device); });
    var t = T.find(function (x) { return x.id === state.layout; });
    var ind = IND.find(function (x) { return x[0] === state.industry; });
    $('#b-url').textContent = ((state.name || 'yourbusiness').toLowerCase().replace(/[^a-z0-9]+/g, '') || 'yourbusiness') + '.com';
    $('#b-summary').textContent = t.name + ' · ' + state.palette.name + ' · ' + ind[1];
    fit();

    // "Let's build it" carries the choices to the contact form
    var q = new URLSearchParams({
      from: 'builder', business: (state.name || '').trim(), industry: ind[1], layout: t.name,
      colors: state.palette.name, logo: state.logo ? 'yes' : 'no'
    });
    $('#b-go').href = 'contact.html?' + q.toString();
  }

  update();
})();
