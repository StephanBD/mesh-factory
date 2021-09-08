function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
function property(node, property) {
  return window.getComputedStyle(node, null).getPropertyValue(property);
}
// ========================================

const input = document.querySelector("#copy");
const btns = document.querySelectorAll("#btn-copy");
// const input = document.createElement("textarea");

// ----

btns.forEach(btn => {
  btn.addEventListener("click", e => {
    copyToClipboard(e.target.nextSibling);
  });
});
// --
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

// ========================================

const menuCtx = query(".menu-context");
// ---------
queryAll(".select-me").forEach(el => {
  el.addEventListener("click", contextMenu);
});

// ---------
function contextMenu(e) {
  // console.log(e.target.textContent);
  // console.log(
  //   property(e.target, "border-radius")
  // );
  query("#menu-classes", menuCtx).textContent = "";

  query("#border-radius", menuCtx).value = parseFloat(
    property(e.target, "border-radius")
  );

  e.target.className.split(" ").forEach(className => {
    console.log(className);
  });
  // ----------------------------

  query("#menu-classes", menuCtx).textContent = e.target.className;
  menuCtx.style.top = e.y + "px";
  menuCtx.style.left = e.x + "px";
}

// ========================================
const properties = [];

const units = ["px", "%", "rem", "em"];

// const unitsObj = { px: "px", }
const classes = {
  bg: "bg-",
  t: "t-"
};
if (Object.values(obj).indexOf("test") > -1) {
  console.log(classes["bg-green".split("-", 1)]);
}

const colors = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "pink",
  "red",
  "orange",
  "yellow",
  "brown",
  "green",
  "cyan",
  "blue",
  "purple",
  "success",
  "info",
  "warning",
  "danger",
  "primary-light",
  "primary-dark",
  "secondary-light",
  "secondary-dark",
  "tertiary-light",
  "tertiary-dark",
  "quaternary-light",
  "quaternary-dark",
  "pink-light",
  "pink-dark",
  "red-light",
  "red-dark",
  "orange-light",
  "orange-dark",
  "yellow-light",
  "yellow-dark",
  "brown-light",
  "brown-dark",
  "green-light",
  "green-dark",
  "cyan-light",
  "cyan-dark",
  "blue-light",
  "blue-dark",
  "purple-light",
  "purple-dark",
  "success-light",
  "success-dark",
  "info-light",
  "info-dark",
  "warning-light",
  "warning-dark",
  "danger-light",
  "danger-dark",
  "light",
  "dark",
  "link",
  "white",
  "gray-light",
  "gray",
  "gray-dark",
  "black"
];

// let yourBigString = "";

// console.log();

// // if (units.some(substring => yourBigString.includes(substring))) {
// //   yourBigString.split("")
// // }

// function hasNumber(myString) {
//   return /\d/.test(myString);
// }

// console.log(hasNumber(yourBigString));
