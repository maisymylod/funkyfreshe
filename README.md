# Funky Fresh Earrings Co.

Site for [@funkyfreshe](https://www.instagram.com/funkyfreshe) — handmade shrinky-dink & clay earrings and watch purses, made in Cincinnati, Ohio by Samantha Neeb.

Static site, no build step. Deployed via GitHub Pages.

## Pages
- `index.html` — home (hero, what we make, the maker, contact)
- `timeline.html` — Our Story, a visual timeline of the business from 2021 to today
- `images/` — photos (booth shots, products, founder)
- `logo.svg` — FF monogram / favicon

## Look & feel
Warm editorial palette: cream `#F4EDE1`, terracotta `#B66A4C`, tan `#B58A5C`. Fraunces (display serif), Jost (body), Caveat (script accents).

## Custom domain
To point a custom domain (e.g. funkyfresh.com) at this site:
1. Buy the domain at any registrar.
2. Add a `CNAME` file to this repo containing the domain.
3. At the registrar, add a CNAME record pointing `www` to `maisymylod.github.io`, and A records for the apex to GitHub Pages IPs (185.199.108.153, .109, .110, .111).
4. Set the custom domain in the repo Settings → Pages and enable Enforce HTTPS.
