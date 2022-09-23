import { Board } from "./Board";
import { Command } from "./Command";
import { Config } from "./interfaces/Config";
import "./style.scss";

const board = new Board();
const config: Config = {
  simples: 30,
  mutiplicationFactor: 150,
};
board.setConfig(config);
board.draw();

const command = new Command(config);
command.onUpdate((newConfig) => {
  board.setConfig(newConfig);
  board.draw();
});
