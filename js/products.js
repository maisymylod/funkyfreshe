/* ============================================================
   PRODUCTS — edit this file to manage what's for sale.
   No coding tools needed, just edit the values below.

   Each purse is one { } block. To add a new one, copy a whole
   block (from { to },) and paste it before the closing ];

   FIELDS
   - id          unique text, no spaces (e.g. "purse-004")
   - name        shows as the title on the card and product page
   - price       a plain number, no $ sign (e.g. 48 or 48.50)
   - description short description shown on the card and product page
   - image       path to the main photo, e.g. "images/products/purse-001.jpg"
                 leave as "" (empty quotes) to show a blank
                 placeholder square until you have a photo
   - gallery     EXTRA photos for the product page, as a list, e.g.:
                 gallery: ["images/products/purse-001-b.jpg", "images/products/purse-001-c.jpg"]
                 leave as [] if you only have the one main photo
   - inStock     true  = shows normally with "Add to cart"
                 false = since every purse is one-of-a-kind, this marks it
                         "Sold" on the shop page and sinks it to the bottom
                         of the grid instead of removing it — so visitors
                         can still see it (and see that you have real
                         customers), they just can't buy it. Its product
                         page still works too, showing "Sold".
   - squareCheckoutUrl
                 the Square-hosted payment link for this exact purse —
                 its own dedicated checkout page (square.link/u/...) with
                 real shipping and tax calculated by Square. When you send
                 me photos + details for a new purse, I'll create it in
                 your Square catalog and generate this link for you.
   ============================================================ */

window.FF_PRODUCTS = [
  {
    id: "purse-001",
    name: "Paisley Tapestry Watch Purse",
    price: 110,
    description: "Vintage paisley tapestry fabric purse with brown leather. The strap has eight watch faces trimmed with rhinestones.",
    image: "images/products/purse-001-paisley-main.jpg",
    gallery: ["images/products/purse-001-paisley-side.jpg", "images/products/purse-001-paisley-worn.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/Xnh75w4i"
  },
  {
    id: "purse-002",
    name: "Taupe Leather Watch Purse",
    price: 90,
    description: "Taupe leather flap purse with a playful strap. Made from an array of eight colorful watch faces.",
    image: "images/products/purse-002-taupe-main.jpg",
    gallery: ["images/products/purse-002-taupe-side.jpg", "images/products/purse-002-taupe-worn.jpg", "images/products/purse-002-taupe-worn-back.jpg"],
    inStock: true,
    squareCheckoutUrl: "https://square.link/u/cwhcMip1"
  },
  {
    id: "purse-003",
    name: "Silver Mesh Clutch Watch Purse",
    price: 85,
    description: "Shimmery silver metal-mesh envelope clutch with eight red and pink watch faces.",
    image: "images/products/purse-003-silver-mesh-stand.jpg",
    gallery: ["images/products/purse-003-silver-mesh-worn-front.jpg", "images/products/purse-003-silver-mesh-worn-back.jpg"],
    inStock: false
  },
  {
    id: "belt-001",
    name: "Rainbow Watch Belt",
    price: 65,
    description: "Denim-ready chain belt from an unbroken row of twelve colorful watch faces.",
    image: "images/products/belt-001-rainbow-front.jpg",
    gallery: ["images/products/belt-001-rainbow-side.jpg", "images/products/belt-001-rainbow-close.jpg"],
    inStock: false
  },
  {
    id: "purse-004",
    name: "Turquoise Watch Crossbody",
    price: 95,
    description: "Black thrifted purse with a strap of thirteen turquoise and white watches.",
    image: "images/products/purse-004-ck-crossbody-stand.jpg",
    gallery: ["images/products/purse-004-ck-crossbody-worn.jpg", "images/products/purse-004-ck-crossbody-stand-close.jpg"],
    inStock: false
  },
  {
    id: "purse-005",
    name: "Red Patent Watch Bag",
    price: 100,
    description: "Glossy red patent leather bag with a mixed strap of eight watch faces.",
    image: "images/products/purse-005-red-patent-stand.jpg",
    gallery: ["images/products/purse-005-red-patent-worn.jpg", "images/products/purse-005-red-patent-stand-close.jpg"],
    inStock: false
  },
  {
    id: "purse-006",
    name: "Burgundy Watch Pouch",
    price: 85,
    description: "Burgundy leather zip pouch with a strap of five vintage watch faces.",
    image: "images/products/purse-006-burgundy-stand.jpg",
    gallery: ["images/products/purse-006-burgundy-worn-1.jpg", "images/products/purse-006-burgundy-worn-2.jpg", "images/products/purse-006-burgundy-worn-3.jpg"],
    inStock: true
  },
  {
    id: "purse-007",
    name: "Cognac Croc Tote",
    price: 80,
    description: "Cognac croc-embossed tote with a strap of yellow, green rhinestone, and blue watch faces.",
    image: "images/products/purse-007-cognac-croc-stand.jpg",
    gallery: ["images/products/purse-007-cognac-croc-worn-1.jpg", "images/products/purse-007-cognac-croc-worn-2.jpg", "images/products/purse-007-cognac-croc-worn-3.jpg"],
    inStock: true
  },
  {
    id: "purse-008",
    name: "Silver Metallic Croc Bag",
    price: 90,
    description: "Silver metallic croc-embossed bag with a strap of black, gray, and silver watch faces.",
    image: "images/products/purse-008-silver-croc-stand.jpg",
    gallery: ["images/products/purse-008-silver-croc-worn-1.jpg", "images/products/purse-008-silver-croc-worn-2.jpg"],
    inStock: true
  },
  {
    id: "purse-009",
    name: "Black Leather Flower-Charm Bag",
    price: 75,
    description: "Black leather bag finished with a strap of rhinestone watch faces and flower-shaped charms.",
    image: "images/products/purse-009-black-flower-stand.jpg",
    gallery: ["images/products/purse-009-black-flower-worn-1.jpg", "images/products/purse-009-black-flower-worn-2.jpg"],
    inStock: true
  },
  {
    id: "purse-010",
    name: "XOXO Monogram Shoulder Bag",
    price: 80,
    description: "XOXO monogram shoulder bag with a strap of blue oval and black watch faces.",
    image: "images/products/purse-010-xoxo-stand.jpg",
    gallery: ["images/products/purse-010-xoxo-worn-1.jpg", "images/products/purse-010-xoxo-worn-2.jpg", "images/products/purse-010-xoxo-worn-3.jpg"],
    inStock: true
  },
  {
    id: "purse-011",
    name: "Orange Croc Flap Satchel",
    price: 70,
    description: "Orange croc-embossed flap satchel with a strap of orange and white watch faces.",
    image: "images/products/purse-011-orange-croc-stand.jpg",
    gallery: ["images/products/purse-011-orange-croc-worn-1.jpg", "images/products/purse-011-orange-croc-worn-2.jpg"],
    inStock: true
  },
  {
    id: "purse-012",
    name: "Black Leather Buckle-Flap Bag",
    price: 75,
    description: "Black leather flap bag with a D-ring buckle, finished with a strap of black and white rhinestone watch faces.",
    image: "images/products/purse-012-black-buckle-stand.jpg",
    gallery: ["images/products/purse-012-black-buckle-worn-1.jpg", "images/products/purse-012-black-buckle-worn-2.jpg"],
    inStock: true
  },
  /* Add new purses here as you send me photos — copy the pattern
     from purse-001 through purse-005 above (id, name, price,
     description, image, gallery, inStock: true). */
];
