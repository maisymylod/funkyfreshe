# Funky Freshe — full site guide

## Pages

- `index.html` — home: hero photo, shop preview, full timeline, maker bio, contact teaser
- `story.html` — "Our Story" timeline + maker bio, as its own page
- `shop.html` — the purse grid (3 rows of 4). Sold purses automatically sink
  to the bottom, marked "Sold," instead of disappearing.
- `product.html` — a full product page for each purse (photo gallery,
  description, quantity, add to cart). Reached by clicking any purse.
- `cart.html` — shopping cart
- `checkout.html` — shipping form, then payment (shipping + tax included)
- `customers.html` — past customer photo gallery, arrow/dot navigation
- `contact.html` — inquiry form (emails you) + Instagram link

## The "backend" files you'll edit

- `js/products.js` — your purse listings: name, price, description, `image`
  (main photo), `gallery` (extra photos for the product page — a list,
  can be empty), and `inStock`. Set `inStock: false` once a purse sells —
  it'll show "Sold" and move to the bottom of the shop automatically.
- `js/customers.js` — the past-customer gallery photos + captions.
- `js/config.js` — PayPal, contact email, shipping rate, tax rate. Details below.

## How you'll know about an order, and how you get paid

**Email:** the moment someone clicks through checkout, their email app
opens with the full order (items, address, total) addressed to
`CONTACT_EMAIL` in `js/config.js` — currently `ssn56@cornell.edu`. They still
have to hit send on their end; the site can't force that.

**Payment — two modes, depending on what you set up in `js/config.js`:**

1. **Basic (default, works right now):** buyers get a PayPal.me link
   pre-filled with the total, and pay manually. You'll get a PayPal email
   the moment money lands in your account — that part's automatic and
   reliable. Uses `PAYPAL_USERNAME`.

2. **Secure card + PayPal checkout (recommended, takes ~10 minutes to set
   up once):** real "Pay with card or PayPal" buttons appear right on the
   checkout page. Buyers can pay by debit or credit card *without* needing
   a PayPal account — PayPal handles the card processing, so no card
   numbers ever touch this site. To turn this on:
   1. Go to [developer.paypal.com](https://developer.paypal.com) and log in
      with your PayPal account (or create a free Business account first at
      [paypal.com](https://paypal.com) if you don't have one).
   2. Under **Apps & Credentials**, click **Create App**, name it anything
      (e.g. "Funky Freshe").
   3. Copy the **Client ID** it gives you.
   4. Paste it into `js/config.js` as `PAYPAL_CLIENT_ID`.
   5. Commit. The checkout page will now show real payment buttons.

   Either way, money lands in your PayPal balance, and from there you tap
   **Transfer to bank** in the PayPal app whenever you want it in your bank
   account (usually 1 business day). PayPal takes a small standard fee per
   transaction (roughly 2.9% + $0.30) — that's taken automatically before
   the rest hits your balance.

**Marking something sold:** since this is a static site with no database,
there's no way for the site to automatically know a sale happened — you
still update `inStock: false` yourself in `js/products.js` once you've
confirmed payment for a piece. That part stays manual.

## Shipping & tax

In `js/config.js`:
- `SHIPPING_FLAT_RATE` — a flat dollar amount added at checkout (e.g. `6`)
- `TAX_RATE` — a decimal, e.g. `0.07` for 7% sales tax, applied to the
  subtotal (not shipping)

Both show as their own line items on the checkout page, adding up to the
total the buyer pays.

## Adding a customer photo

1. Add the image file to `images/customers/`
2. In `js/customers.js`, copy one `{ image: ..., caption: ... }` block,
   paste it before the closing `]`, point it at your new file
3. Commit — it shows up in the carousel automatically, landscape or
   portrait, sized to fit

## Adding extra photos to a purse's product page

In `js/products.js`, set `gallery` to a list of extra photo paths, e.g.:

```js
gallery: ["images/products/purse-001-b.jpg", "images/products/purse-001-c.jpg"]
```

They'll show as clickable thumbnails under the main photo on that purse's
product page.

## Getting it live

Upload/replace the changed files and folders in your GitHub repo
(`index.html`, `story.html`, `shop.html`, `product.html`, `customers.html`,
`contact.html`, `cart.html`, `checkout.html`, and the `css/`, `js/`,
`images/` folders) and commit. GitHub Pages redeploys automatically.

## Link preview image (what shows up when you share the link)

Every page now has proper social-share tags pointing at
`images/og-image.jpg` — a branded card with "Funkyfreshe" on the striped
background, sized correctly (1200×630) so phones and apps show it cleanly
instead of grabbing a random, oddly-cropped photo from the page.

If you ever want to change this image:
1. Replace `images/og-image.jpg` with a new one (same 1200×630 size works best)
2. Keep the same filename, or update the `og:image` / `twitter:image` lines
   near the top of each page if you rename it

Note: these preview images can be cached by Facebook/Instagram/iMessage for
a while after you change them — if an old version still shows up, that's
just caching on their end, not a problem with the file.
