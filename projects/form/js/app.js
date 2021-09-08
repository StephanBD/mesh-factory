function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
// --------------------------------

const input = document.querySelector("#copy");
// const input = document.createElement("textarea");
const btns = document.querySelectorAll("#btn-copy");

// --------------------------------

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    copyToClipboard(e.target.nextSibling);
  });
});
// --------------------------------
function copyToClipboard(node) {
  // const copyThis = document.querySelector(node);
  // const copyThis = document.querySelector(node).childNodes[0];
  // const copyThis = document.querySelector(node).nextSibling;
  // console.log(node);

  const string = node.outerHTML || new XMLSerializer().serializeToString(node);

  input.value = string;
  input.focus();
  input.select();
  input.setSelectionRange(0, 99999); /* For mobile devices */
  document.execCommand("copy");
}
