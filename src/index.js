import { gsap } from "gsap";
import "./styles/main.scss";

let body = document.getElementsByTagName("body")[0];
console.log(body);
body.innerHTML += "<h1>Hello world</h1>";
alert("conencted");
gsap.from(body, { duration: 1, x: 100 });
