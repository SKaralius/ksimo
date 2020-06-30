import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./styles/main.scss";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const number = () => Math.floor(Math.random() * 255);
const circle = `
<div
style="left:1rem; top:1rem; box-shadow: inset 0 0 10px rgb(${number()}, ${number()}, ${number()});"
class="circle"
></div>
`;

let body = document.getElementsByTagName("body")[0];
body.innerHTML += circle;

const circleNode = document.getElementsByClassName("circle")[0];
gsap.to(circleNode, {
  motionPath: {
    path: [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 30, y: 50 },
      { x: 50, y: 50 },
    ],
    type: "cubic",
  },
  scrollTrigger: {
    trigger: ".p-5",
    start: "20px 80%",
    end: "top 100px",
    scrub: 1,
  },
  y: 500,
  ease: "none",
  duration: 3,
});
