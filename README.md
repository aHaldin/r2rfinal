# Road2Resolve Digital

Google Business Profile and reviews management service for local businesses. Monthly service with launch offer pricing.

## Run locally

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173.

## Site structure

Static HTML/CSS/JS site in `dist/`:
- `index.html` - Main page with service details and pricing
- `privacy-policy.html` - Privacy policy
- `thanks.html` - Form submission confirmation
- `example/` - Website demo example
- `assets/` - Styles, scripts, images, and icons

## Deploy

Netlify publishes `dist/` directly with no build step. The site includes:
- Currency switcher (GBP, USD, EUR, AUD, CAD, NZD) via JavaScript
- Netlify form (`profile-check`) for free profile checks
- Redirects in `dist/_redirects` for legacy paths and old site URLs

## Contact form

The `profile-check` form uses Netlify's built-in form handling with honeypot protection. The form is detected automatically from the static HTML and submits to `/thanks.html`.
