// require("./pixi.js");
// import { Application } from "./pixi.js";
import * as PIXI from "pixi.js";
import { Graphics } from "@pixi/graphics";
import "@pixi/graphics-extras";
// require("../../../node_modules/pixi.js/dist/browser/pixi.min.js");

// --------------------------------
function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node) {
  return document.querySelectorAll(node);
}

// --------------------------------
// const Aplication = PIXI.Aplication;

// let type = "WebGL";
// if (!PIXI.utils.isWebGLSupported()) {
//   type = "canvas";
// }

// PIXI.utils.sayHello(type);

// // Create a Pixi Application
// let app = new PIXI.Application({ width: 256, height: 256 });

// //Add the canvas that Pixi automatically created for you to the HTML document
// document.body.appendChild(app.view);

// --------------------------------
const app = new PIXI.Application({
  // height: 500,
  // with: 500,
  // transparent: false,
  antialias: true
});

app.renderer.backgroundColor = 0x23395d;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";

// ------------
document.body.appendChild(app.view);

// ------------
// const Graphic = PIXI.Graphics;

// const rectangle = new Graphic();
// rectangle
//   .beginFill(0xaa33bb)
//   .lineStyle(4, 0xffea00, 1)
//   .drawRect(200, 200, 100, 120)
//   .endFill();

// app.stage.addChild(rectangle);

// // ----------
// const poly = new Graphic();
// poly
//   .beginFill(0xff66ff)
//   .lineStyle(4, 0xffea00, 1)
//   .drawPolygon([600, 50, 800, 150, 900, 300, 400, 400])
//   .endFill();

// app.stage.addChild(poly);

// // ----------
// const circle = new Graphic();
// circle
//   .beginFill(0x22aacc)
//   .lineStyle(4, 0xffea00, 1)
//   .drawCircle(440, 200, 80)
//   .endFill();

// app.stage.addChild(circle);
// // ----------
// const line = new Graphic();
// line
//   // .beginFill(0x22aacc)
//   .lineStyle(4, 0xffea00, 1)
//   .moveTo(1500, 100)
//   .lineTo(1500, 800);
// // .endFill();

// app.stage.addChild(line);
// // ---------
// const torus = new Graphic();
// torus
//   .beginFill(0xfffddd)
//   .drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
//   .endFill();
// app.stage.addChild(torus);
// // ---------
// const star = new Graphic();
// star
//   .beginFill(0xadadad)
//   .drawStar(900, 700, 5, 80)
//   .endFill();
// app.stage.addChild(star);
// // ---------

// const style = new PIXI.TextStyle({
//   fontFamily: "Montserrat",
//   fontSize: 48,
//   fill: "deepskyblue",
//   stroke: "#fff",
//   strokeThickness: 4,
//   dropShadow: true,
//   dropShadowDistance: 10,
//   dropShadowAngle: Math.PI / 2,
//   dropShadowBlur: 4,
//   dropShadowColor: "#000"
// });

// const myText = new PIXI.Text("Hello world!", style);

// app.stage.addChild(myText);

// myText.text = "Text changed";
// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;
// myText.style.align = "center";

// // ----------------
// app.ticker.add(delta => loop(delta));

// function loop(delta) {
//   // const rect = new Graphic();
//   // rect
//   //   .beginFill(0xffffff)
//   //   // .lineStyle(4, 0xffea00, 1)
//   //   .drawRect(
//   //     Math.random() * app.screen.width,
//   //     Math.random() * app.screen.height,
//   //     10,
//   //     10
//   //   )
//   //   .endFill();
//   // app.stage.addChild(rect);
//   // -----------
//   // char1Sprite.x += 1;
//   // char1Sprite.rotation += 0.1;
// }

// // ----------------------

// import sprite from "../img/decoration1.png";
// import decoration2 from "../img/decoration2.png";
// import decoration3 from "../img/decoration3.png";
// import decoration4 from "../img/decoration4.png";
// import decoration5 from "../img/decoration5.png";
// // import { Loader } from "pixi.js";

// // const char1Texture = PIXI.Texture.from(sprite);
// // const char1Sprite = new PIXI.Sprite(char1Texture);

// const char1Sprite = PIXI.Sprite.from(sprite);
// app.stage.addChild(char1Sprite);

// // char1Sprite.width = 100;
// // char1Sprite.height = 100;

// // char1Sprite.scale.x = 1.5;
// // char1Sprite.scale.y = 2;
// // char1Sprite.scale.set(2, 2);

// // char1Sprite.x = 200;
// // char1Sprite.y = 200;

// char1Sprite.position.set(800, 400);

// // char1Sprite.rotation = 1;

// // char1Sprite.anchor.x = 0.5;
// // char1Sprite.anchor.y = 0.5;
// char1Sprite.anchor.set(0.5, 0.5);

// char1Sprite.interactive = true;
// char1Sprite.buttonMode = true;

// char1Sprite.on("pointerdown", function() {
//   char1Sprite.scale.x += 0.1;
//   char1Sprite.scale.y += 0.1;
// });

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowRight") {
//     char1Sprite.x += 10;
//   } else if (e.key === "ArrowLeft") {
//     char1Sprite.x -= 10;
//   } else {
//   }
// });

// // ---------------------------

// const container = new PIXI.Container();

// const char2Sprite = PIXI.Sprite.from(decoration3);
// container.addChild(char2Sprite);

// const char3Sprite = PIXI.Sprite.from(decoration2);
// container.addChild(char3Sprite);

// app.stage.addChild(container);

// char3Sprite.position.set(1000, 500);
// char3Sprite.x = 400;

// const particleContainer = new PIXI.ParticleContainer(1000, {
//   position: true,
//   rotation: true,
//   vertices: true,
//   tint: true,
//   usv: true
// });

const loader = PIXI.Loader.shared;

// loader
//   .add([decoration5, decoration4])
//   // .add("char4Sprite", decoration4)
//   // .add("char5Sprite", decoration5)
//   .load(setup);

// function setup(loader, resources) {
//   const char4Sprite = new PIXI.Sprite(resources[decoration5].texture);
//   char4Sprite.Y = 400;
//   app.stage.addChild(char4Sprite);
// }

// loader.onLoad.add(function() {
//   console.log("on load");
// });
// loader.onError.add(function() {
//   console.log("on error");
// });
// loader.onProgress.add(function() {
//   console.log("on progress");
// });

// ------------------------
// import sheet from "../img/sheet.png";

// loader
//   .add("tileset", sheet)
//   // .add("char4Sprite", decoration4)
//   // .add("char5Sprite", decoration5)
//   .load(setup);

// function setup(loader, resources) {
//   const texture1 = resources.tileset.texture;
//   const rect1 = new PIXI.Rectangle(176, 160, 76, 86);
//   texture1.frame = rect1;
//   const spr1 = new PIXI.Sprite(texture1);
//   spr1.scale.set(2, 2);
//   app.stage.addChild(spr1);
//   // -------
//   const texture2 = new PIXI.Texture(resources.tileset.texture);
//   const rect2 = new PIXI.Rectangle(190, 593, 77, 84);
//   texture2.frame = rect2;
//   const spr2 = new PIXI.Sprite(texture2);
//   spr2.scale.set(2, 2);
//   spr1.position.set(200, 200);
//   app.stage.addChild(spr2);
//   // ------
// }

// -------------------------------
import girl from "../img/spritesheet.png";
import girlJson from "../img/spritesheet.json";

loader
  .add("tileset", girlJson)
  // .add("char4Sprite", decoration4)
  // .add("char5Sprite", decoration5)
  .load(setup);

function setup(loader, resources) {
  // const girlTexture1 = PIXI.Texture.from();
  // const girlSprite1 = new PIXI.Sprite(girlTexture1);
  // girlSprite1.position.set(200, 100);
  // girlSprite1.scale.set(2, 2);
  // app.stage.addChild(girlSprite1);
  // -------------
  // const textures = [];
  // for (let i = 0; i < 4; i++) {
  //   const texture = PIXI.Texture.from(`RunRight0${i}.png`);
  //   textures.push(texture);
  // }
  // const girlSprite1 = new PIXI.AnimatedSprite(textures);
  // girlSprite1.position.set(200, 100);
  // girlSprite1.scale.set(2, 2);
  // app.stage.addChild(girlSprite1);
  // girlSprite1.play();
}
// -------------------------------
