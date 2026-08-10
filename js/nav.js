/* ============================================================
   NAV TOGGLE — mobile hamburger menu. Shared across every page.
   You shouldn't need to edit this file.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Closing the menu when a link is tapped isn't strictly necessary since
  // every link navigates to a new page, but it avoids a flash of the open
  // menu on the next page if the browser restores scroll/DOM state.
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
