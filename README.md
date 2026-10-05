# Narrow Gates Design

Website for **Narrow Gates Design**: web design for small businesses.

Live site (once hosting is connected): https://narrowgatesdesign.com

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | Home page |
| `services.html` | Services, packages, and FAQ |
| `work.html` | "Our Work": links to 8 sample sites |
| `about.html` | About page and the meaning behind the name |
| `reviews.html` | Reviews page (Google reviews go here; see the note inside the file) |
| `contact.html` | Contact form (sends to narrowgatesdesign@gmail.com via FormSubmit) |
| `thank-you.html` | Page shown after someone sends the contact form |
| `examples/` | 8 sample websites for made-up businesses, each with a different layout |
| `styles.css` | Colors, fonts, and layout for the main site |
| `script.js` | Header, mobile menu, and scroll fade-in effects |
| `images/` | Logo (`logo-full.jpg`, `logo-icon.png`, `favicon.png`), sample-site screenshots, and photo fallbacks |

The header and footer are repeated on each page, so a menu change needs making in every page.

The design uses the door logo's colors (night navy, gold, ivory) with Cinzel headings and Jost body text.
The skyline and laptop photos load from Pexels (free license); if they fail to load, `images/skyline-placeholder.svg` and `images/photo-placeholder.svg` are shown instead.

This is a plain HTML/CSS site with no build step, so it can be hosted anywhere.

## Hosting

The site is hosted free on **GitHub Pages** from the `main` branch.
Any change pushed to `main` goes live automatically within a few minutes.

- GitHub Pages settings: repo **Settings → Pages** (custom domain `narrowgatesdesign.com`).
- The domain is registered at Domain.com. Its DNS records point to GitHub:
  `A @ 185.199.108.153` and `A www 185.199.108.153`.
- Once GitHub has issued a certificate, tick **Enforce HTTPS** in Settings → Pages.

## Previewing locally

Open `index.html` in any web browser.
