import Player from './factories/player.js';
import Gameboard from './factories/gamrboard.js';
import { reloader } from './dommanager.js';
import Game from './maingame.js';

const player = Player();
const computer = Player();

const playerBoard = Gameboard();
const computerBoard = Gameboard();

export const newgame = Game(player, computer, playerBoard, computerBoard);
reloader();
newgame.gameStart();