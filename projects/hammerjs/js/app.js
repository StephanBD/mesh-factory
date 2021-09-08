// require("./hammer.js");
import { gsap } from "gsap";

import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
// --------------------------
function query(node, from = document) {
  return from.querySelector(node);
}
function queryAll(node, from = document) {
  return from.querySelectorAll(node);
}
// --------------------------
const elemento = query("#elemento");
// --------------
// const hammerjs = new Hammer.Manager(elemento, {
//   recognizers: [
//     [
//       Hammer.Press,
//       {
//         enable: true
//       }
//     ],
//     [
//       Hammer.Tap,
//       {
//         enable: true
//       }
//     ]
//   ]
// });

// // const press= hammerjs.get("press")

// // press.set({
// //   enable: true,
// //   time: 3000
// // })

// // hammerjs.remove("press")

// // console.log(hammerjs);

// hammerjs.on("tap", (e)=>{
//   console.log(e);
// })

// hammerjs.on("press", e => {
//   console.log(e);
//   // elemento.style.transform = `translateX(${e.distance}px)`
// });

//====================================================//
// {
//     "pointers": [],
//     "changedPointers": [
//         {
//             "isTrusted": true
//         }
//     ],
//     "pointerType": "touch",
//     "srcEvent": {
//         "isTrusted": true
//     },
//     "isFirst": false,
//     "isFinal": true,
//     "eventType": 8,
//     "center": {
//         "x": 0,
//         "y": 0
//     },
//     "timeStamp": 1626962826658,
//     "deltaTime": 226,
//     "angle": -112.2034785320574,
//     "distance": 105.84894897919393,
//     "deltaX": -40,
//     "deltaY": -98,
//     "offsetDirection": 8,
//     "overallVelocityX": -0.17699115044247787,
//     "overallVelocityY": -0.4336283185840708,
//     "overallVelocity": -0.4336283185840708,
//     "scale": 1,
//     "rotation": 0,
//     "maxPointers": 1,
//     "velocity": 0.20588235294117646,
//     "velocityX": 0,
//     "velocityY": 0.20588235294117646,
//     "direction": 16,
//     "target": {},
//     "additionalEvent": "pandown",
//     "type": "pan"
// }

// -------
// {
//   "pointers": [],
//   "changedPointers": [
//       {
//           "isTrusted": true
//       }
//   ],
//   "pointerType": "touch",
//   "srcEvent": {
//       "isTrusted": true
//   },
//   "isFirst": false,
//   "isFinal": true,
//   "eventType": 4,
//   "center": {
//       "x": 30,
//       "y": 82
//   },
//   "timeStamp": 1626965589830,
//   "deltaTime": 240,
//   "angle": 0,
//   "distance": 0,
//   "deltaX": 0,
//   "deltaY": 0,
//   "offsetDirection": 1,
//   "overallVelocityX": 0,
//   "overallVelocityY": 0,
//   "overallVelocity": 0,
//   "scale": 1,
//   "rotation": 0,
//   "maxPointers": 1,
//   "velocity": 0,
//   "velocityX": 0,
//   "velocityY": 0,
//   "direction": 1,
//   "target": {},
//   "tapCount": 1,
//   "type": "tap"
// }

//====================================================//
// var tl = gsap.timeline();

// let num = 0;

Draggable.create("#carousel", {
  type: "x",
  edgeResistance: 0.99,
  bounds: "#container",
  // inertia: true,
  allowContextMenu: true,
  allowEventDefault: true,
  // autoScroll: 1
  // dragResistance: 0,

  onDrag: function(e) {
    // console.log(this.target.querySelectorAll(".item"));
    gsap.to(this.target.querySelectorAll(".item"), {
      duration: 0.5,
      rotationY: Math.floor(e.movementX)
    });
    // console.log(this.target);
    // e.movementX > num ? (num = e.movementX) : (num = num);
  },
  onDragEnd: function(e) {
    gsap.to(this.target.querySelectorAll(".item"), {
      duration: 0.5,
      rotationY: 0
    });
    // console.log("final: " + num);
  }
});

// gsap.to(".item", {
//   duration: 1,
//   rotationY: 20
// });

// var gridWidth = 172;
// var gridHeight = 100;
// Draggable.create(elemento, {
//     type:"x,y",
//     edgeResistance:0.65,
//     bounds:"#container",
//     inertia:true,
//     snap: {
//         x: function(endValue) {
//             return Math.round(endValue / gridWidth) * gridWidth;
//         },
//         y: function(endValue) {
//             return Math.round(endValue / gridHeight) * gridHeight;
//         }
//     }
// });

// Draggable.create(elemento, {type: "rotation", inertia: true});

//====================================================//
// altKey: false
// altitudeAngle: 1.5707963267948966
// azimuthAngle: 0
// bubbles: true
// button: -1
// buttons: 1
// cancelBubble: false
// cancelable: true
// clientX: 1023
// clientY: 175.5
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 0
// eventPhase: 0
// fromElement: null
// height: 1
// isPrimary: true
// isTrusted: true
// layerX: 1023
// layerY: 175
// metaKey: false
// movementX: 27
// movementY: 0
// offsetX: 1023
// offsetY: 175.5
// pageX: 1023
// pageY: 175.5
// path: (3) [html, document, Window]
// pointerId: 1
// pointerType: "mouse"
// pressure: 0.5
// relatedTarget: null
// returnValue: true
// screenX: 1643
// screenY: 233
// shiftKey: false
// sourceCapabilities: null
// srcElement: html
// tangentialPressure: 0
// target: html
// tiltX: 0
// tiltY: 0
// timeStamp: 4526.5
// toElement: null
// twist: 0
// type: "pointermove"
// view: Window {window: Window, self: Window, document: document, name: "", location: Location, …}
// which: 0
// width: 1
// x: 1023
// y: 175.5
