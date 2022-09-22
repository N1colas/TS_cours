console.log("start");
const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.simples");
const simples = 10;
const r = 1;
const x0 = 50;
const y0 = 50;
const r0 = 45;
for (var i = 0; i < simples; i++) {
  const angle = (i * 2 * Math.PI) / simples;
  const x = x0 + r0 * Math.cos(angle);
  const y = x0 + r0 * Math.sin(angle);

  var circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r);
  container.appendChild(circle);
}
