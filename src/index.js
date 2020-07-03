import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { getPositions } from "./getPositions";
import { placeItemsInPositions } from "./placeItemsInPositions";
import "./styles/main.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const number = () => Math.floor(Math.random() * 255);
// const circle = `
// <div
// style="left:1rem; top:1rem; box-shadow: inset 0 0 10px rgb(${number()}, ${number()}, ${number()});"
// class="circle"
// ></div>
// `;

// let body = document.getElementsByTagName("body")[0];
// body.innerHTML = circle + body.innerHTML;

const circleNode = document.getElementsByClassName("circle")[0];
const squareNode = document.getElementsByClassName("square")[0];

console.log(squareNode.offsetTop);
console.log(squareNode.offsetLeft);
function draw() {
  console.log(circleNode.offsetLeft, circleNode.offsetTop);
}

draw();

let coords = MotionPathPlugin.getRelativePosition(
  circleNode,
  squareNode,
  [0.5, 0],
  [0.5, 1]
);

gsap.to(circleNode, {
  scrollTrigger: {
    trigger: ".landing",
    start: "0%",
    end: "50%",
    scrub: true,
  },
  x: "+=" + coords.x,
  y: "+=" + coords.y,
  borderRadius: "0",
  width: "5rem",
  height: "5rem",
  marginLeft: "5rem",
});

coords = MotionPathPlugin.getRelativePosition(
  circleNode,
  document.getElementsByClassName("projects")[0],
  [0.5, 0],
  [0.5, 1]
);

gsap.to(circleNode, {
  scrollTrigger: {
    trigger: ".about-text",
    start: "0%",
    end: "70%",
    scrub: true,
  },
  x: "+=" + coords.x,
  y: "+=" + (coords.y + 450),
  zIndex: "-1",
  borderRadius: "0",
  width: "100%",
  height: "20rem",
  marginLeft: "5rem",
});

const circleHTML = `
<div
style="opacity: 0; box-shadow: inset 0 0 10px rgb(${number()}, ${number()}, ${number()});"
class="circle"
></div>
`;

for (let i = 0; i < 6; i++) {
  document.getElementsByClassName("projects-text")[0].innerHTML += circleHTML;
}

const circleNodes = document.getElementsByClassName("circle");

gsap.to(circleNode, {
  scrollTrigger: {
    trigger: ".what-section",
    start: "0%",
    end: "70%",
    scrub: 3,
  },
  opacity: 0,
});

gsap.to(circleNodes, {
  scrollTrigger: {
    trigger: ".what-section",
    start: "top 70%",
    end: "50% 70%",
    scrub: true,
  },
  opacity: "1",
});
coords = MotionPathPlugin.getRelativePosition(
  circleNode,
  document.getElementsByClassName("what-section")[0],
  [0.5, 0],
  [0.5, 1]
);

const arrayOfPositions = [
  { x: coords.x + 0, y: coords.y + 325 },
  { x: 0, y: 350 },
  { x: 50, y: 500 },
  { x: 50, y: 400 },
  { x: 50, y: 450 },
  { x: 0, y: 500 },
  { x: 0, y: 600 },
];

arrayOfPositions.forEach((position, index) => {
  console.log(index);
  gsap.to(circleNodes[index], {
    motionPath: [{ x: 50, y: 50 }, position],
    scrollTrigger: {
      trigger: ".what-section",
      start: "top 70%",
      end: "50% 70%",
      scrub: true,
    },
    stagger: 0.5,
  });
});

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
// gsap.defaults({ ease: "none" });

// gsap.set(circleNode, { xPercent: -50, yPercent: -50 });

// var tl = gsap.timeline().to(
//   circleNode,
//   {
//     defaults: {
//       duration: 5,
//       autoAlpha: 1,

//       transformOrigin: "center",
//       ease: "elastic(2.5, 1)",
//     },
//   },
//   {
//     scale: 2,
//   }
//   0.2
// );

// gsap
//   .timeline({
//     defaults: { duration: 5 },
//     scrollTrigger: {
//       trigger: ".landing",
//       scrub: true,
//       start: "top center",
//       end: "bottom top",
//       markers: true,
//     },
//   })
//   .add(tl, 0);

// console.log(ScrollTrigger);

// gsap.to(circleNode, {
//   ScrollTrigger: {
//     trigger: ".landing",
//     scrub: true,
//     start: "top center",
//     end: "bottom top",
//     markers: true,
//   },
//   ...coords,
//   duration: 10,
// });

// gsap.to(document.getElementsByTagName("body")[0], {
//   backgroundColor: "red",
//   duration: 10,
// });
