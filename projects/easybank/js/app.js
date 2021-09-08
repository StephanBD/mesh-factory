function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}

// ---------------------

const togglerBtn = query(".navbar-toggle");
const navMenu = query(".navbar-list");

togglerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("md:show");
});
