// require("./xxx/main.js");
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CSSRulePlugin } from "gsap/CSSRulePlugin";

// gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}

/**************************************************/
// function box(params) {
//   return ".cuadrado_" + params;
// }
// -------

// const { init } = require("browser-sync");

// let tl = gsap.timeline({
//   repeat: 0,
// });
// -------
// tl.from(box(1), {
//   duration: 3,
//   x: 600,
//   delay: 1,
//   borderRadius: 50,
// })
//   .to(
//     box(2),
//     {
//       duration: 3,
//       scale: 1.3,
//       x: 500,
//     },
//     "-=0"
//   )
//   .from(
//     box(3),
//     {
//       duration: 4,
//       scale: 1.3,
//       x: 500,
//     },
//     "-=0"
//   )
//   .to(
//     box(4),
//     {
//       duration: 4,
//       rotate: 360,
//       x: -500,
//     },
//     "-=4"
//   );

// --------------------------------------
// gsap.registerPlugin(ScrollTrigger);

// const nave = document.querySelector(".nave");
// const planeta1 = document.querySelector(".planeta1");
// const planeta2 = document.querySelector(".planeta2");
// const planeta3 = document.querySelector(".planeta3");
// const planeta4 = document.querySelector(".planeta4");
// const planeta5 = document.querySelector(".planeta5");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".contenedor__animacion",
//     markers: true,
//     start: "top top",
//     end: "100% 100%",
//     scrub: true,
//     pin: true,
//   },
// });

// tl.to(nave, {
//   scale: 0.5,
//   y: "30vh",
//   duration: 4,
// }).to(
//   planeta1,
//   {
//     opacity: 1,
//     y: "-50vh",
//     scale: 1.3,
//     duration: 3.5,
//   },
//   "-=3"
// );
// tl.to(
//   planeta2,
//   {
//     opacity: 1,
//     y: "-90vh",
//     scale: 1,
//     duration: 3.5,
//   },
//   "-=3"
// );
// tl.to(nave, {
//   rotate: 230,
//   duration: 3.5,
// });
// tl.to(nave, {
//   x: "-35vw",
//   duration: 4,
// });
// tl.to(
//   planeta2,
//   {
//     y: "-150vh",
//     duration: 4,
//   },
//   "-=3"
// );
// tl.to(nave, {
//   rotate: 115,
//   duration: 3.5,
// });
// tl.to(
//   planeta1,
//   {
//     y: "-150vh",
//     duration: 3.5,
//   },
//   "-=3"
// );
// tl.to(nave, {
//   // rotate: 115,
//   x: "75vh",
//   duration: 3.5,
// });
// tl.to(
//   planeta3,
//   {
//     opacity: 1,
//     x: "-120vw",
//     duration: 3.5,
//   },
//   "-=3"
// );
// tl.to(nave, {
//   rotate: 250,
//   // x: "75vh",
//   duration: 5,
// });
// tl.to(
//   nave,
//   {
//     // rotate: 115,
//     x: "-35vw",
//     y: 300,
//     duration: 8,
//   },
//   "-=3"
// );
// tl.to(
//   planeta3,
//   {
//     // opacity: 1,
//     x: "-100",
//     duration: 8,
//   },
//   "-=3"
// );
// tl.to(
//   planeta4,
//   {
//     opacity: 1,
//     x: "130vh",
//     duration: 8,
//   },
//   "-=3"
// );
// tl.to(nave, {
//   rotate: 360,
//   x: "30vh",
//   // y: 300,
//   duration: 3,
// });

// ---------------------
// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".carro1",
//     markers: true,
//     start: "top top",
//     end: "100% 100%",
//     scrub: 3,
//     pin: ".carro1",
//   },
// });

// tl.to(".carro1", { x: "1000", duration: 2 });

// new hoverEffect({
//   parent: document.querySelector(".distortion"),
//   intensity: 0.2,
//   image1: "./img/01.png",
//   image2: "./img/02.png",
//   displacementImage: "./img/diss.png",
//   imagesRatio: 380 / 300,
// });

// // TEXT
// TweenMax.from(".text h1 .hidetext", 1.5, {
//   // opacity: 0,
//   delay: 1,
//   x: "100%",
//   ease: Expo.easeInOut,
// });

// --------------------------------

// import { gsap } from "gsap";

// var tl = gsap.timeline({
//   defaults: {
//     duration: 2,
//     delay: 0.5,
//     repeat: -1,
//     stagger: 0.05,
//     ease: "elastic.inOut(3)",
//   },
// });

// tl.to(".ball", {
//   opacity: 0.3,
//   rotation: 360,
//   scale: 0.3,
//   borderRadius: "0",
//   y: 100,
//   yoyo: true,
// }).to(".ball", {
//   x: 10,
//   yoyo: true,
// });

// const play = document.querySelector(".play");

// play.addEventListener("click", () => {
//   tl.reverse();

//   tl.play();
// });

/**************************************************/

// -----------------------
// const enter = query(".enter-anim");
// console.log(enter);

// gsap.from(enter, {
//   x: 500,
//   duration: 3,
//   ease: "power2.inOut",
//   scrollTrigger: {
//     trigger: "#enter",
//     // scrub: true,
//     markers: true,
//     start: "top center",
//     end: "bottom center",
//     // scrub: 3,
//   },
// });
// -----------------------
// const btnModal = query("#btn-modal");
// const modal = query("#modal");

// // --------------------------
// var tl = gsap.timeline({ paused: true });

// let anim = tl.from(modal, {
//   scale: 0,
//   opacity: 0,
//   borderRadius: "100%",
//   ease: "power2.inOut",
//   duration: 1,
//   onStart: () => {
//     modal.classList.remove("hide");
//   },

//   onReverseComplete: () => {
//     modal.classList.add("hide");
//   },
// });

// // --------------------------
// btnModal.addEventListener("click", (e) => {
//   anim.play();
// });

// query("#close-modal").addEventListener("click", () => {
//   anim.reverse();
// });

// // --------------------------
// const btnModal2 = query("#btn-modal2");
// const modal2 = query("#modal2");
// // const modal2Cotnent = query("#modal2-cotnent");
// var rule = CSSRulePlugin.getRule(".new-modal::before");

// var tl2 = gsap.timeline({ paused: true });

// let anim2 = tl2
//   .to(rule, {
//     duration: 1,
//     cssRule: { opacity: 0.3 },
//     onStart: () => {
//       modal2.classList.remove("hide");
//     },
//     onReverseComplete: () => {
//       modal2.classList.add("hide");
//     },
//   })
//   .from(
//     modal2,
//     {
//       opacity: 0,
//       duration: 1,
//     },
//     "-=1"
//   )
//   .from(
//     "#modal-content",
//     {
//       opacity: 0,
//       duration: 1,
//       y: -300,
//     },
//     "-=1"
//   );

// btnModal2.addEventListener("click", () => {
//   // console.log("btnModal2");
//   anim2.play();
// });

// query("#close-modal2").addEventListener("click", () => {
//   // console.log("modal2");
//   // anim2.play();
//   anim2.reverse();
// });

// -----------------------------
// gsap.to("#bg", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   scale: 1.5,
// });
// gsap.to("#man", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   scale: 0.5,
// });
// gsap.to("#mountain_left", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   x: -500,
// });
// gsap.to("#mountain_right", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   x: 500,
// });
// gsap.to("#clouds_1", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   x: 200,
// });
// gsap.to("#clouds_2", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   x: -200,
// });
// gsap.to("#text", {
//   scrollTrigger: {
//     // trigger: ,
//     scrub: 1,
//   },
//   y: 150,
//   scale: 1.3,
// });

// -------------------------------
const btn = query("#btn-menu");

btn.addEventListener("click", () => {
  query(".menubar").classList.toggle("active");
});
