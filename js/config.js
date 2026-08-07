/* ============================================================
   STORE CONFIG — edit these values, then save the file.

   PAYPAL_USERNAME
     From your PayPal.me link. If your link is
     paypal.me/funkyfreshe, put "funkyfreshe" below (no slashes).
     Used as a fallback if PAYPAL_CLIENT_ID (below) isn't set.

   PAYPAL_CLIENT_ID
     Optional, but recommended. This turns on real "Pay with card
     or PayPal" buttons at checkout, so buyers can pay with a
     credit or debit card without needing a PayPal account —
     PayPal handles the card processing securely, you never see
     or store card numbers. Leave as "" until you've set this up.
     See README.md for the (one-time, free) steps to get one.

   CONTACT_EMAIL
     Where order details + contact form messages get sent.

   SHIPPING_FLAT_RATE
     A flat shipping fee in dollars, added at checkout. Set for a
     roughly 5 lb package — adjust if your actual box weight changes.

   TAX_RATE
     Sales tax as a decimal, e.g. 0.07 for 7%. Applied to the
     subtotal (not shipping) at checkout.
   ============================================================ */

window.FF_CONFIG = {
  PAYPAL_USERNAME: "your-paypal-username",
  PAYPAL_CLIENT_ID: "",
  CONTACT_EMAIL: "ssn56@cornell.edu",
  SHIPPING_FLAT_RATE: 15,
  TAX_RATE: 0.07
};
