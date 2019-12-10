import { renderBoard, renderMessage, off } from './dommanager.js';

const game = (player, computer, playerBoard, computerBoard) => {
  const shipVariation = [4, 3, 3, 2, 1, 1];
  const gameStart = () => {
    playerBoard.placeShips(shipVariation);
    computerBoard.placeShips(shipVariation);
    renderBoard(playerBoard.board, playerBoard.boardRow, 0);
    renderBoard(computerBoard.board, playerBoard.boardRow, 1);
  };
  const end = (winner) => {
    renderMessage(`${winner} has won!`);
    off();
  };
  const playerTurn = (x, y) => {
    const res = player.attack(computerBoard, x, y);
    if (computerBoard.AllShipsHaveSunk()) end('Player');
    renderBoard(computerBoard.board, playerBoard.boardRow, 1);
    if (!res) compTurn();
  };

  const compTurn = () => {
    computer.computerAttack(playerBoard);
    if (playerBoard.AllShipsHaveSunk()) end('Computer');
    renderBoard(playerBoard.board, playerBoard.boardRow, 0);
  };
  return { gameStart, playerTurn };
};
export default game;
