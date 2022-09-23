import { r0, svgns, x0 } from "./consts";
import { Point } from "./interfaces/Point";

export const getAngle = (i: number, simples: number) => {
  return (i * 2 * Math.PI) / simples;
};

export const getCirclePoint = (angle: number): Point => {
  const x = x0 + r0 * Math.cos(angle);
  const y = x0 + r0 * Math.sin(angle);

  return { x, y };
};

const lineContainer = document.querySelector("svg g.lines");

export const drawLine = (p1: Point, p2: Point): void => {
  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", p1.x + "");
  line.setAttributeNS(null, "y1", p1.y + "");
  line.setAttributeNS(null, "x2", p2.x + "");
  line.setAttributeNS(null, "y2", p2.y + "");

  lineContainer?.appendChild(line);
};

export const drawText = (p1: Point, texte: string): void => {
  const text = document.createElementNS(svgns, "text");
  text.setAttributeNS(null, "x", p1.x + "");
  text.setAttributeNS(null, "y", p1.y + "");
  text.setAttributeNS(null, "font-size", "0.2em");

  text.append(texte);

  document.querySelector("svg")?.appendChild(text);
};

export const querySelector = <T extends Element>(
  cssSelector: string,
  type?: new () => T
) => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error(`Cannot find element with selector: ${cssSelector}`);
  }
  if (type && !(elt instanceof type)) {
    throw new Error(
      `Cannot find element of type ${type} with selector: ${cssSelector}`
    );
  }
  return elt as T;
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
