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
| `contact.html` | Contact form |
| `thank-you.html` | Page shown after someone sends the contact form |
| `examples/` | 8 sample websites for made-up businesses, each with a different layout |
| `styles.css` | Colors, fonts, and layout for the main site |
| `script.js` | Mobile menu and the live previews on the Our Work page |
| `favicon.svg` | Logo / browser tab icon |

The header and footer are repeated on each page, so a menu change needs making in every page.

Colors, fonts, and layout |
| `thank-you.html` | Page shown after someone sends the contact form |
| `favicon.svg` | Logo / browser tab icon |

Colors, fonts (Poppins), and the cross-and-gate logo follow the Narrow Gates Design brand concept.
`images/mark-on-dark.svg` is the logo version for dark backgrounds.

This is a plain HTML/CSS site with no build step, so it can be hosted anywhere.

## Hosting

Recommended: **Netlify** (free plan). It works with a private GitHub repo,
handles the contact form automatically, and gives free HTTPS for your domain.

1. Sign up at https://app.netlify.com using your GitHub account.
2. **Add new site → Import an existing project → GitHub** and pick `narrowgatesdesign`.
3. Leave the build settings blank and click **Deploy**.
4. **Domain management → Add a domain** and enter `narrowgatesdesign.com`, then follow
   Netlify's instructions to point your domain (at the company you bought it from) to Netlify.
5. Contact form messages appear under **Forms** in Netlify; turn on email notifications there.

## Previewing locally

Open `index.html` in any web browser.
