# Narrow Gates Design

Website for **Narrow Gates Design**: web design for small businesses.

Live site (once hosting is connected): https://narrowgatesdesign.com

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | The main (home) page |
| `styles.css` | Colors, fonts, and layout |
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
