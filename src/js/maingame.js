import { renderBoard } from './dommanager.js';

const game = (player, computer, playerBoard, computerBoard) => {
  const shipVariation = [4, 3, 3, 2, 1, 1];
  const gameStart = () => {
    playerBoard.placeShips(shipVariation);
    computerBoard.placeShips(shipVariation);
    renderBoard(playerBoard.board, playerBoard.boardRow, 0);
    renderBoard(computerBoard.board, playerBoard.boardRow, 1);
  };
  return { gameStart };
};
export default game;
