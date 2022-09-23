import { Config } from "./interfaces/Config";
import { querySelector, sleep } from "./utils";

type CallbackFn = (newConfig: Config) => void;

export class Command {
  public callback: CallbackFn = () => {};
  public isPlaying: boolean = false;

  constructor(public config: Config) {
    this.render();
    this.setActions();
  }

  public onUpdate(callback: CallbackFn) {
    this.callback = callback;
  }

  public render() {
    const keys: (keyof Config)[] = ["simples", "mutiplicationFactor"];
    for (const key of keys) {
      const elt = document.querySelector(`div.command label.${key} span`);
      elt!.innerHTML = this.config[key] + "";

      const inputElt = document.querySelector(
        `div.command label.${key} input`
      ) as HTMLInputElement;
      inputElt.value = this.config[key] + "";
    }
  }

  public setActions() {
    const keys: (keyof Config)[] = ["simples", "mutiplicationFactor"];
    for (const key of keys) {
      const inputElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      inputElt.addEventListener("input", () => {
        this.config[key] = +inputElt.value;
        this.render();
        this.callback(this.config);
      });
    }

    const button = querySelector("div.command button");
    button.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.play();
      }
    });
  }

  async play() {
    while (this.isPlaying) {
      const f = this.config.mutiplicationFactor + 0.01;
      this.config.mutiplicationFactor = (Math.round(f * 1e2) / 1e2) % 100;

      this.render();
      this.callback(this.config);
      await sleep(18);
    }
  }
}
