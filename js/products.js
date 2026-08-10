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
                 false = since every purse is one-of-a-kind, this removes
                         it from the shop page and home preview entirely
                         once it's sold (its product page still exists if
                         someone has the direct link, showing "Sold")
   ============================================================ */

window.FF_PRODUCTS = [
  {
    id: "purse-001",
    name: "Paisley Tapestry Watch Purse",
    price: 110,
    description: "A one-of-a-kind crossbody made from a vintage paisley tapestry fabric with a brown leather trim and top zip closure. The strap is eight vintage watch faces linked together, several trimmed in rhinestones, so the whole thing doubles as a wearable timepiece.",
    image: "images/products/purse-001-paisley-main.jpg",
    gallery: ["images/products/purse-001-paisley-side.jpg", "images/products/purse-001-paisley-worn.jpg"],
    inStock: true
  },
  {
    id: "purse-002",
    name: "Taupe Leather Watch Purse",
    price: 90,
    description: "A taupe leather flap purse carried on a playful strap made from an array of colorful vintage watch faces — turquoise, blush pink, lime, and cherry red dials, linked with rhinestone accents.",
    image: "images/products/purse-002-taupe-main.jpg",
    gallery: ["images/products/purse-002-taupe-side.jpg", "images/products/purse-002-taupe-worn.jpg", "images/products/purse-002-taupe-worn-back.jpg"],
    inStock: true
  },
  {
    id: "purse-003",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-004",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-005",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-006",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-007",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-008",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-009",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-010",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-011",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  },
  {
    id: "purse-012",
    name: "Edit me: purse name",
    price: 0,
    description: "Edit me: a short description of this purse.",
    image: "",
    gallery: [],
    inStock: true
  }
];
