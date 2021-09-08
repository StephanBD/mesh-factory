function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}
// *****************************
// console.log(window.localStorage.constructor === Storage); // true
// console.log(window.sessionStorage.constructor === Storage); // true
// console.log(typeof Storage === "function"); // true

// const ss = sessionStorage;
// const ls = localStorage;

// ls.setItem("cookies", true);
// console.log(ls.getItem("cookies") === "true");

// --------------------
// require(".local.js");
import { storage } from "./local.js";
// -----------
const ls = storage("local");
const ss = storage("session");
// ---------

// setValue("cookies", { name: true });
// const choice = getValue("cookies");
// removeItem("cookies");
// empty("cookies");
// console.log(choice);

// ------------------------

// -----------------------

if (ls.isSuported && ss.isSuported) {
  const cookie = query(".cookie");
  const accept = query("[data-cookie-accept]");
  const reject = query("[data-cookie-reject]");
  // --------
  accept.addEventListener("click", () => {
    hideCookie();
    ls.set("cookies", true);
  });
  reject.addEventListener("click", () => {
    hideCookie();
    ss.set("cookies", false);
  });

  // -------------
  const showCookie = () => {
    cookie.classList.remove("hide");
  };
  const hideCookie = () => {
    cookie.classList.add("hide");
    // cookie.style.display = "none";
  };
  // -------------
  if (!cookie || ls.get("cookie") || ss.get("cookies") === false) {
    return;
  }
  // ------
  setTimeout(showCookie, 1000);
}
