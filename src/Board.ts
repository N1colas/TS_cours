import { r, svgns } from "./consts";
import { Config } from "./interfaces/Config";
import {
  drawLine,
  drawText,
  getAngle,
  getCirclePoint,
  querySelector,
} from "./utils";

export class Board {
  public config: Config = {
    simples: 50,
    mutiplicationFactor: 3,
  };

  clean() {
    querySelector("svg g.simples").innerHTML = "";
    querySelector("svg g.lines").innerHTML = "";
  }

  public draw(): void {
    this.clean();
    this.drawConfigs();
    this.drawSimplePoints();
    this.drawLines();
  }
  drawConfigs() {
    drawText({ x: 0, y: 15 }, "config");
  }

  drawLines() {
    const samples = this.config.simples;
    for (let i = 0; i < samples; i++) {
      const angle1 = getAngle(i, samples);
      const p1 = getCirclePoint(angle1);

      const angle2 = getAngle(i * this.config.mutiplicationFactor, samples);
      const p2 = getCirclePoint(angle2);

      drawLine(p1, p2);
    }
  }

  public drawSimplePoints() {
    const simples = this.config.simples;
    const container = document.querySelector("g.simples");

    for (var i = 0; i < simples; i++) {
      const angle = getAngle(i, simples);

      const { x, y } = getCirclePoint(angle);

      var circle = document.createElementNS(svgns, "circle");
      circle.setAttributeNS(null, "cx", x + "");
      circle.setAttributeNS(null, "cy", y + "");
      circle.setAttributeNS(null, "r", r + "");
      container?.appendChild(circle);
    }
  }

  public setConfig(config: Config): void {
    this.config = config;
  }
}
