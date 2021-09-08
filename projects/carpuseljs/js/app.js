// require("./xxx/main.js");
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";
// import { Draggable } from "gsap/Draggable";

// gsap.registerPlugin(Draggable);
// gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(ScrollTrigger);

// -----------------------------
function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
// function on(event, fn) {
//   return document.addEventListener(event,fn);
// }

// -----------------------------

// const input = document.querySelector("#copy");
// // const input = document.createElement("textarea");
// const btns = document.querySelectorAll("#btn-copy");

// // -----

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     copyToClipboard(e.target.nextSibling);
//   });
// });
// // ----
// function copyToClipboard(node) {
//   // const copyThis = document.querySelector(node);
//   // const copyThis = document.querySelector(node).childNodes[0];
//   // const copyThis = document.querySelector(node).nextSibling;
//   // console.log(node);

//   const string = node.outerHTML || new XMLSerializer().serializeToString(node);

//   input.value = string;
//   input.focus();
//   input.select();
//   input.setSelectionRange(0, 99999); /* For mobile devices */
//   document.execCommand("copy");
// }
// ----------------------------- slider

let slider = query(".slide");
let innerSlider = query(".slide-inner");

let pressed = false;
let startx;
let x;

// --------------------

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing";
  // console.log(startx);
});

slider.addEventListener("mouseenter", (e) => {
  slider.style.cursor = "grab";
});
// slider.addEventListener("mouseenter", (e) => {
//   slider.style.cursor = "default";
// });
slider.addEventListener("mouseup", (e) => {
  slider.style.cursor = "grab";
});
window.addEventListener("mouseup", (e) => {
  pressed = false;
  isPressedDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  innerSlider.style.left = `${x - startx}px`;
  checkboundary();
});

function checkboundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }

  // console.log(outer, inner);
}

// ----------

// const sliderWrap = query(".slide_bg");
// const slider = query(".slide_cards");

// let isPressedDown = false;
// let cursorXSpace;
// let clonesWidth;
// let sliderWidth;
// let clones = [];
// let disableScroll = false;
// let scrollPos;
// // ---------------

// sliderWrap.addEventListener("mousedown", (e) => {
//   isPressedDown = true;
//   cursorXSpace = e.offsetX - slider.offsetLeft;
//   // console.log(e.offsetX, slider.offsetLeft, cursorXSpace);
// });

// sliderWrap.addEventListener("mousemove", (e) => {
//   if (!isPressedDown) return;
//   e.preventDefault();
//   slider.style.left = `${e.offsetX - cursorXSpace}px`;
//   boundslider();
// });

// function boundslider() {
//   let outer = sliderWrap.getBoundingClientRect();
//   let inner = slider.getBoundingClientRect();

//   if (parseInt(slider.style.left) > 0) {
//     slider.style.left = 0;
//   } else if (inner.right < outer.right) {
//     slider.style.left = `-${inner.width - outer.width}px`;
//   }
// }
