/* ============================================================
   CART ENGINE — shared by shop.html, cart.html, checkout.html.
   You shouldn't need to edit this file. Edit products.js and
   config.js instead.
   ============================================================ */

(function () {
  const STORAGE_KEY = "ff_cart_v1";

  function readCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function writeCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    updateBadges();
  }

  function findProduct(id) {
    const list = window.FF_PRODUCTS || [];
    return list.find((p) => p.id === id) || null;
  }

  function addItem(id, qty) {
    qty = qty || 1;
    const cart = readCart();
    // Every purse is one-of-a-kind — only ever one to sell, so cap at 1
    // no matter how many times "Add to cart" gets clicked.
    cart[id] = 1;
    writeCart(cart);
  }

  function isInCart(id) {
    const cart = readCart();
    return !!cart[id];
  }

  function setQty(id, qty) {
    const cart = readCart();
    if (qty <= 0) {
      delete cart[id];
    } else {
      cart[id] = 1; // one-of-a-kind — quantity can only ever be 0 or 1
    }
    writeCart(cart);
  }

  function removeItem(id) {
    const cart = readCart();
    delete cart[id];
    writeCart(cart);
  }

  function clearCart() {
    localStorage.removeItem(STORAGE_KEY);
    updateBadges();
  }

  function getLineItems() {
    const cart = readCart();
    const items = [];
    Object.keys(cart).forEach((id) => {
      const product = findProduct(id);
      if (!product) return; // product removed from products.js since it was added
      items.push({
        id: product.id,
        name: product.name,
        price: Number(product.price) || 0,
        image: product.image,
        qty: cart[id],
        lineTotal: (Number(product.price) || 0) * cart[id]
      });
    });
    return items;
  }

  function getCount() {
    const cart = readCart();
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }

  function getSubtotal() {
    return getLineItems().reduce((sum, item) => sum + item.lineTotal, 0);
  }

  function formatMoney(n) {
    return Number(n).toFixed(2);
  }

  function updateBadges() {
    const count = getCount();
    document.querySelectorAll(".cart-badge").forEach((el) => {
      el.textContent = count;
      el.setAttribute("data-count", count);
    });
  }

  window.FFCart = {
    addItem,
    setQty,
    removeItem,
    clearCart,
    getLineItems,
    getCount,
    getSubtotal,
    formatMoney,
    updateBadges,
    isInCart
  };

  document.addEventListener("DOMContentLoaded", updateBadges);
})();
