import { gsap } from "gsap";
import "./styles/main.scss";

let body = document.getElementsByTagName("body")[0];
console.log(body);

const number = () => Math.floor(Math.random() * 255);

const circle = `
 <div
      style="left:1rem; top:1rem; box-shadow: inset 0 0 10px rgb(${number()}, ${number()}, ${number()});"
      class="circle"
    ></div>
`;

body.innerHTML += circle;
const circleNode = document.getElementsByClassName("circle")[0];
gsap.to(circleNode, { y: 500, duration: 1 });
