import Player from './factories/player.js';
import Gameboard from './factories/gamrboard.js';

import Game from './maingame.js';

const player = Player();
const computer = Player();

const playerBoard = Gameboard();
const computerBoard = Gameboard();

const newgame = Game(player, computer, playerBoard, computerBoard);

newgame.gameStart();