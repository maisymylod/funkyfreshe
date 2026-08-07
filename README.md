# Funky Freshe — shop, cart & checkout

New pages built to match your existing site, in pink + red, with the timeline
kept intact.

## What's in here

- `index.html` — home page (rebuilt with a live 3-item shop preview + timeline)
- `shop.html` — the purse grid, in blank/editable "price tag" cards
- `cart.html` — shopping cart
- `checkout.html` — shipping form + PayPal-based checkout
- `css/main.css` — all styling (colors, fonts, layout)
- `js/products.js` — **this is your product list.** Edit this to add purses.
- `js/config.js` — **your PayPal username + contact email.** Edit this once.
- `js/cart.js` — cart logic, you shouldn't need to touch this

## 1. Add your products (the "backend")

Open `js/products.js` in any text editor (even GitHub's web editor). Each
purse is one block like this:

```js
{
  id: "purse-001",
  name: "Vintage Seiko Crossbody",
  price: 48,
  description: "One-of-a-kind, made from a 1970s Seiko watch face.",
  image: "images/products/purse-001.jpg",
  inStock: true
}
```

- **name / price / description**: edit freely, any time.
- **image**: leave as `""` to show a blank placeholder square. Once you have
  a photo, drop the file in `images/products/` and put its filename here.
- **inStock**: set to `false` to show a "Sold" tag and disable the cart
  button — good for one-of-a-kind pieces once they sell.
- To add a 7th purse, copy a whole `{ ... },` block and paste it before the
  closing `];`. To remove one, delete its block.

No other file needs to change when you update products.

## 2. Set up payment

Open `js/config.js`:

```js
window.FF_CONFIG = {
  PAYPAL_USERNAME: "your-paypal-username",   // from paypal.me/yourusername
  CONTACT_EMAIL: "hello@funkyfreshe.com"
};
```

Put in your real PayPal.me username and the email you want order details
sent to.

**How checkout actually works:** this is a GitHub Pages site, which means
there's no server to securely process card payments directly. So checkout
works like this instead:
1. Customer fills in their shipping info and hits "Place order."
2. They get a PayPal button pre-filled with the exact total, and an
   "Email order details" button that opens their email app with an itemized
   summary addressed to you.
3. You match the PayPal payment against the emailed order and ship it out.

This is the same pattern a lot of small handmade shops use without a full
e-commerce backend. If you outgrow it later, upgrading to something like
Shopify or a Stripe-based checkout is a reasonable next step — happy to help
with that when the time comes.

## 3. Add these files to your GitHub repo

1. Go to your `funkyfreshe` repo on GitHub.
2. Upload/replace: `index.html`, `shop.html`, `cart.html`, `checkout.html`,
   and the `css/` and `js/` folders (drag the whole folders into GitHub's
   "Add file → Upload files").
3. Your existing `images/` folder is already referenced by the new pages —
   no changes needed there.
4. Commit. GitHub Pages will redeploy automatically in a minute or two.

## Notes

- The cart is stored in each visitor's own browser (not shared between
  people), so it's just for holding items on the way to checkout.
- "Our Story," "Meet the maker," and "Contact" content on the home page
  carries over from your current site.
- Colors and fonts all live at the top of `css/main.css` under `:root` if
  you ever want to adjust the pink/red palette.
