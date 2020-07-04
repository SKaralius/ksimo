import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { listenForEvents } from "./eventListeners";
import "./styles/main.scss";
import { contactAnimation } from "./contactAnimation";
import { contact } from "./contact";

// Register ScrollTrigger so it wouldn't get tree shaken.
gsap.registerPlugin(ScrollTrigger);

// Controls what shapes are initialized. "circle" or "square"
let currentShape = "circle";
let coloredShapes = [];
let shapeColors = ["#1f0e47", "#300317", "#160e6b", "#23042e", "#2B072A"];

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

// Sets canvas to fullscreen, does a black background and initializes shapes.
function setUpContext() {
  coloredShapes = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  InitializeShapes();
}

// Listens for resize and load events.

listenForEvents(setUpContext, currentShape);

class ColoredShape {
  constructor(x, y, dx, dy, radius, color, shape) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.radius = radius;
    this.color = color;
    this.shape = shape;
  }

  draw() {
    ctx.beginPath();
    // Draws either a square or circle
    if (this.shape === "circle") {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    } else if (this.shape === "square") {
      ctx.rect(this.x, this.y, this.radius, this.radius);
    }

    ctx.strokeStyle = this.color;
    ctx.stroke();
  }

  update() {
    // Different coords inversion threshold depending if circle or square
    if (this.shape === "circle") {
      if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
    } else if (this.shape === "square") {
      if (this.x + this.radius > canvas.width || this.x < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }
    }
    // Velocity of shape added to its position
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

function InitializeShapes() {
  let radius = (window.innerWidth + window.innerHeight) / 50;
  for (let i = 0; i < 5; i++) {
    // Starting Position
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;

    // Speed in x and y direction
    let dx = (Math.random() + 0.5) * 7;
    let dy = (Math.random() + 0.5) * 7;

    // Color
    let color = shapeColors[i];

    coloredShapes.push(
      new ColoredShape(x, y, dx, dy, radius, color, currentShape)
    );
  }
}

setUpContext();

function draw() {
  // requestAnimationFrame passes a time value to draw() which can be used to get
  // canculate time delta, which can be used to normalize animations
  // on different refresh rate screens
  // Tested it as is on 25hz-75hz and didn't see anything wrong with it though.
  requestAnimationFrame(draw);
  for (let r = 0; r < coloredShapes.length; r++) {
    // How many times update is called for next frame.
    for (let i = 0; i < 2; i++) {
      coloredShapes[r].update();
    }
  }
}
// If deltaTime is ever necessary, pass an initial value here or animation doesn't start.
draw();

// Chnages animation to squares when about is reached.
ScrollTrigger.create({
  trigger: ".about",
  start: "top center",
  end: "center+=200px center",
  onToggle: () => {
    coloredShapes = [];
    if (currentShape === "square") {
      currentShape = "circle";
    } else {
      currentShape = "square";
    }
    InitializeShapes();
  },
  onUpdate: (self) => {
    // Fades shapes out when changing between circles and squares.
    ctx.fillStyle = `rgba(0, 0, 0, ${self.progress.toFixed(1) * 0.3})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  },
});

// Starts letter animation and stops it on exit.
ScrollTrigger.create({
  trigger: ".what-section",
  start: "top center",
  end: "center bottom",
  onEnter: () => {
    contactAnimation.start(ctx, canvas);
  },
  onEnterBack: () => {
    contactAnimation.stop(ctx, canvas);
  },
});

const video = document.getElementsByTagName("video")[0];
// if (window.screen.width < 352) {
//   video.width = window.screen.width;
// }
if (window.screen.height < 812) {
  video.height = window.screen.height - 80;
}

contact();
