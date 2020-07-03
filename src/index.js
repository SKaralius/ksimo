import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { getPositions } from "./getPositions";
import { placeItemsInPositions } from "./placeItemsInPositions";
import { listenForEvents } from "./eventListeners";
import "./styles/main.scss";
import { newAnimation } from "./newAnimation";

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

let coords = MotionPathPlugin.getRelativePosition(
  circleNode,
  squareNode,
  [0.5, 0.5],
  [0.5, 0.5]
);

gsap.to(circleNode, {
  scrollTrigger: {
    trigger: ".landing",
    start: "0%",
    end: "50%",
    scrub: true,
  },
  x: coords.x,
  y: coords.y,
  borderRadius: "0",
  width: "5rem",
  height: "5rem",
});

coords = MotionPathPlugin.getRelativePosition(
  circleNode,
  document.getElementsByClassName("projects-title")[0],
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

// const circleHTML = `
// <div
// style="opacity: 0; box-shadow: inset 0 0 10px rgb(${number()}, ${number()}, ${number()});"
// class="circle"
// ></div>
// `;

// const arrayOfPositions = [
//   { x: coords.x + 0, y: coords.y + 325 },
//   { x: 0, y: 350 },
//   { x: 50, y: 500 },
//   { x: 50, y: 400 },
//   { x: 50, y: 450 },
//   { x: 0, y: 500 },
//   { x: 0, y: 600 },
// ];

// arrayOfPositions.forEach((position, index) => {
//   console.log(index);
//   gsap.to(circleNodes[index], {
//     motionPath: [{ x: 50, y: 50 }, position],
//     scrollTrigger: {
//       trigger: ".what-section",
//       start: "top 70%",
//       end: "50% 70%",
//       scrub: true,
//     },
//     stagger: 0.5,
//   });
// });

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

// CANVAS

let currentShape = "circle";

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

function setUpContext(shape) {
  coloredCircles = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.innerWidth, canvas.innerHeight);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  InitializeCircles(canvas, radius, coloredCircles, shape);
}

// The Circle class
function ColoredShape(x, y, dx, dy, radius, color, shape) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    if (shape === "circle") {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    } else if (shape === "square") {
      ctx.rect(this.x, this.y, radius, radius);
    }

    ctx.strokeStyle = this.color;

    ctx.stroke();
  };

  this.update = function () {
    if (shape === "circle") {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
    } else if (shape === "square") {
      if (this.x + this.radius > canvas.width || this.x < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var coloredCircles = [];

var circleColors = ["#192841", "#192841", "blue", "#192841", "#2B072A"];

// Radius
var radius = 50;

function InitializeCircles(
  canvas,
  radius,
  coloredCircles,
  shape,
  uniformColor
) {
  for (var i = 0; i < 5; i++) {
    // Starting Position
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;

    // Speed in x and y direction
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;

    // Color
    var color = uniformColor || circleColors[i];

    coloredCircles.push(new ColoredShape(x, y, dx, dy, radius, color, shape));
  }
}

setUpContext(currentShape);

let animationActive = false;

function draw() {
  requestAnimationFrame(draw);
  if (!animationActive) {
    for (var r = 0; r < coloredCircles.length; r++) {
      for (let i = 0; i < 2; i++) {
        coloredCircles[r].update();
      }
    }
  }
}

draw();

// setTimeout(
//   () =>
//     coloredCircles.push(
//       new ColoredShape(
//         Math.random() * (canvas.width - radius * 2) + radius,
//         Math.random() * (canvas.width - radius * 2) + radius,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         radius,
//         "#FFF",
//         "square"
//       )
//     ),
//   5000
// );

listenForEvents(setUpContext, currentShape);

ScrollTrigger.create({
  trigger: ".about",
  start: "top center",
  end: "center+=200px center",
  onToggle: (self) => {
    console.log("toggled, isActive:", self.isActive);
    let color = 0;
    coloredCircles = [];
    if (currentShape === "square") {
      currentShape = "circle";
      InitializeCircles(canvas, radius, coloredCircles, "circle");
    } else {
      currentShape = "square";
      color = 0.5;
      InitializeCircles(canvas, radius, coloredCircles, "square");
    }
    // setUpContext(currentShape);
    // ctx.fillStyle = `rgb(${color * 255}, ${color * 255}, ${color * 255})`;
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
  },
  onUpdate: (self) => {
    ctx.fillStyle = `rgba(0, 0, 0, ${self.progress.toFixed(1) / 2})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  },
});

let animationID = "";

ScrollTrigger.create({
  trigger: ".what-section",
  start: "top center",
  end: "center+=200px center",
  onToggle: (self) => {
    if (animationActive) {
      animationActive = false;
      cancelAnimationFrame(animationID);
    } else {
      cancelAnimationFrame(animationID);
      animationActive = true;
      animationID = newAnimation(ctx, canvas);
    }
    console.log("toggled, isActive:", self.isActive);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  onUpdate: (self) => {
    console.log(
      "progress:",
      self.progress.toFixed(3),
      "direction:",
      self.direction,
      "velocity",
      self.getVelocity()
    );
  },
});
