# Funky Freshe — shop, cart, checkout, story, customers & contact

## Pages

- `index.html` — home page: hero photo, shop preview, full timeline, maker bio, contact teaser
- `story.html` — the full "Our Story" timeline + maker bio, as its own page
- `shop.html` — the purse grid (3 rows of 4), editable "price tag" cards
- `cart.html` — shopping cart
- `checkout.html` — shipping form + PayPal-based checkout
- `customers.html` — past customer photo gallery with arrow/dot navigation
- `contact.html` — inquiry form (opens an email) + Instagram link

## The "backend" files you'll edit

- `js/products.js` — your purse listings. Edit name, price, description, image, inStock.
- `js/customers.js` — the past-customer gallery photos + captions.
- `js/config.js` — your PayPal username + the email inquiries/orders get sent to.

Same editing method as before: open the file on GitHub, click the pencil icon,
edit, commit.

## Adding a customer photo

1. Add the image file to `images/customers/`
2. In `js/customers.js`, copy one `{ image: ..., caption: ... }` block, paste
   it before the closing `]`, and point it at your new file
3. Commit — it now shows up in the carousel automatically

## What changed in this pass

- **Font**: headings and body text now use Times New Roman (system serif),
  in place of the earlier sans-serif fonts.
- **Background**: page background is now pink, with a subtle scattered dot
  texture in red (CSS only, not an image) across the whole site.
- **Shop page**: fixed at 4 columns × 3 rows (12 purse slots) on desktop,
  narrowing to 2 columns then 1 on smaller screens.
- **Home page**: now also includes the full timeline and "Meet the maker"
  section (previously only on `story.html` — both pages carry it now), and
  the hero photo up top was swapped to your photo in the white skirt.
- **Contact**: split out to its own page with a real inquiry form. Submitting
  opens the visitor's email app with their message pre-filled, addressed to
  the `CONTACT_EMAIL` in `js/config.js`. There's no backend on GitHub Pages,
  so this "opens an email" pattern is the practical substitute for a live
  form submission — same idea as the checkout flow.
- **Past Customers**: new gallery page. Pre-loaded with photos you uploaded —
  a couple of them happen to show your watch purses in action (the winery
  photo and the two-women photo), plus several of your custom banners.
- **Maker bio**: updated to rising Cornell senior, Animal Science major,
  double minor in Business and Communication (was previously listed as a
  junior with a different minor combo).

## Getting it live

Same as before — upload/replace the changed files and folders in your GitHub
repo (`index.html`, `story.html`, `shop.html`, `customers.html`,
`contact.html`, `cart.html`, `checkout.html`, and the `css/`, `js/`,
`images/` folders) and commit. GitHub Pages redeploys automatically.
