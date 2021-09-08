// require("./dat.gui.js");
// require("./script.js");
// --------------------
function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
// --------------------

// const cursor = query("#cursor");
// window.onmousemove = function(e) {
// 	cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";
// };

// --------------------
const side1 = query("#side1");
const side2 = query("#side2");

window.addEventListener("scroll", function() {
  side1.style.left = -+window.pageYOffset + "px";
  side2.style.left = +window.pageYOffset + "px";
});
