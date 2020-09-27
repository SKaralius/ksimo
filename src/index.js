import { listenForEvents } from "./eventListeners";
import "./styles/main.scss";

// Controls what shapes are initialized. "circle" or "square"
const colorPalette = ["#cacacc", "cyan", "#201EE1", "#821EE1", "#1E7DE1"];
let coloredShapes = [];
let shapeColors = colorPalette;

const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

class ColoredShape {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    // Draws a cricle
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    ctx.strokeStyle = this.color;
    ctx.stroke();
  }

  update() {
    // Different coords inversion threshold depending if circle or square
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    // Velocity of shape added to its position
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Sets canvas to fullscreen, does a black background and initializes shapes.
function setUpContext() {
  coloredShapes = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  InitializeShapes();
}
function InitializeShapes() {
  // Circle radius depends on screen size.
  let radius = (window.innerWidth + window.innerHeight) / 50;

  // For each shape
  for (let i = 0; i < 10; i++) {
    // Random starting Position
    let x = Math.random() * (canvas.width - radius * 2) + radius;
    let y = Math.random() * (canvas.height - radius * 2) + radius;

    // Random speed in x and y direction
    let dx = (Math.random() + 0.5) * 1;
    let dy = (Math.random() + 0.5) * 1;
    let color = "black";
    // Color
    if (i < 5) {
      color = shapeColors[i];
    }

    coloredShapes.push(new ColoredShape(x, y, dx, dy, radius, color));
  }
}

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

listenForEvents(setUpContext, draw);
