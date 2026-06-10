# Funky Freshe

Official site for [@funkyfreshe](https://www.instagram.com/funkyfreshe) on Instagram.

Single static page (`index.html`), no build step. Deployed via GitHub Pages.

To point a custom domain (e.g. funkyfreshe.com) at this site:
1. Buy the domain at any registrar.
2. Add a `CNAME` file to this repo containing the domain.
3. At the registrar, add a CNAME record pointing `www` to `maisymylod.github.io`, and A records for the apex to GitHub Pages IPs (185.199.108.153, .109, .110, .111).
4. Set the custom domain in the repo Settings → Pages and enable Enforce HTTPS.
