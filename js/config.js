/* ============================================================
   STORE CONFIG — edit these values, then save the file.

   Payment, shipping cost, and sales tax are no longer configured
   here. Buying now happens on your actual Square Online storefront
   (STOREFRONT_URL below) — this site's cart is just a browsing aid;
   the "checkout" step sends people there, where Square calculates
   real shipping and tax and handles the payment. Two things to set
   up on Square's side, once, in your Square Dashboard (not here):
     - Sales tax: Account & Settings > Business > Sales Taxes —
       add a tax rate for your state and Square applies it
       automatically at checkout.
     - Shipping: Settings > Shipping — add a shipping profile
       (flat rate, free-over-threshold, or real carrier rates)
       and Square calculates it automatically at checkout.

   STOREFRONT_URL
     Your published Square Online store link. Buyers land here to
     actually pick their item, pay, and get real shipping/tax
     calculated. Make sure the site is Published in Square
     Dashboard (Online > Site) or this link won't work yet.

   CUSTOM_BANNER_FORM_URL
     Your Google Form link for custom celebration banner requests
     (the same one in your Instagram bio). Shown as a short button
     labeled "Request a Custom Banner" on the Contact and Home
     pages, instead of a long raw link.
   ============================================================ */

window.FF_CONFIG = {
  CONTACT_EMAIL: "ssn56@cornell.edu",
  STOREFRONT_URL: "https://766537007196373798.square.site",
  CUSTOM_BANNER_FORM_URL: "https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSc-mb5h9KUOGc60zbBMqKslyfhuMbBGh_rwQEqvD4qNu9AZ5Q%2Fviewform%3Fusp%3Dheader%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDhbEtawt3jCnewOmIfxvAiW9sJCBL5QJ6lKVJWCpgZRD_7BDCbGXzfmOG9zUSLBsDjs9Er83P0qc67JDhVwgPN-pgD_NcfK9urh58fwPyTq79D7wQx8LWp0VBuu7HB_YUsNX1vu-YbQ9_FNBqaOHu9Sb1b"
};
