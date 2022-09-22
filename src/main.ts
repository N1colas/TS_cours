import { r, r0, x0, y0 } from "./consts";
import "./style.scss";
console.log("start");
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.simples");
const simples = 10;

for (var i = 0; i < simples; i++) {
  const angle = (i * 2 * Math.PI) / simples;
  const x = x0 + r0 * Math.cos(angle);
  const y = x0 + r0 * Math.sin(angle);

  var circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x + "");
  circle.setAttributeNS(null, "cy", y + "");
  circle.setAttributeNS(null, "r", r + "");
  container.appendChild(circle);
}
