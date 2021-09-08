// require("./xxx/main.js");
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(ScrollTrigger);
// -------------------------------

function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}

// --------------------------------
// 👁️
query("#revealer").addEventListener("click", e => {
  e.preventDefault();
  const i = query("i", query("#revealer"));

  i.classList.toggle("fa-eye");
  i.classList.toggle("fa-eye-slash");

  query("body").classList.toggle("_reveal");
});

// 🌞
query("#dark-theme").addEventListener("click", e => {
  e.preventDefault();
  const i = query("i", query("#dark-theme"));
  // <i class="far fa-sun"></i>
  i.classList.toggle("fa-moon");
  i.classList.toggle("fa-sun");

  query("body").classList.toggle("dark-theme");
});

// --------------------------------
const btn = query("#btn-menu");
const menubar = query(".menubar");

// -------------------------------
btn.addEventListener("click", e => {
  e.preventDefault();
  // console.log("click menu", query(".menubar"));
  query(".menubar").classList.toggle("active");
});

// -------------------------------
menubar.addEventListener(
  "click",
  e => {
    // console.log(e.target);

    let childDropdown;
    if (
      e.target.classList.contains("menubar-dropdown") &&
      e.target.children[0]
    ) {
      childDropdown = query(".menubar-dropdown-item", e.target);
      // console.log("father");
    } else if (e.target.parentElement.classList.contains("menubar-dropdown")) {
      childDropdown = query(".menubar-dropdown-item", e.target.parentElement);
    }
    // console.log(e.target.parentElement);
    if (childDropdown) {
      if (
        !menubar.classList.contains("active") ||
        childDropdown.classList.contains("hide")
      ) {
        menubar.classList.add("active");
        childDropdown.classList.remove("hide");
      } else {
        toggleClass(childDropdown);
      }
    }
    // childDropdown = query(".menubar-dropdown-item", e.target);
    // console.log(childDropdown);
    // if (childDropdown) {
    //   toggleBlock(childDropdown);
    // }
  },
  false
);
// -----------------
function toggleClass(node) {
  node.classList.toggle("hide");
}
function toggleBlock(node) {
  let $display =
    document.defaultView
      .getComputedStyle(node, null)
      .getPropertyValue("display") === "block"
      ? "none"
      : "block";
  // console.log($display);
  node.style.display = $display;
}

// ------------
// menubar.addEventListener(
//   "click",
//   e => {
//     // console.log(e.target.classList.contains("menubar-dropdown"));

//     if (
//       e.target.classList.contains("menubar-dropdown") &&
//       e.target.children[0]
//     ) {
//       toggleBlock(e.target.children[0]);
//     }
//   },
//   false
// );
//  ------------
// menubar.addEventListener(
//   "click",
//   e => {
//     console.log(e.target.classList.contains("menubar-dropdown"));
//     // query(".menubar").classList.toggle("active");

//     if (e.target.classList.contains("menubar-dropdown")) {
//       let $display =
//         document.defaultView
//           .getComputedStyle(query(".menubar-dropdown-item", e.target), null)
//           .getPropertyValue("display") === "block"
//           ? "none"
//           : "block";
//       console.log($display);

//       query(".menubar-dropdown-item", e.target).style.display = $display;
//       // query(".menubar-dropdown-item", e.target).classList.toggle("show")
//       //
//       // e.target.children.style.display = "block";
//     }
//   },
//   false
// );
