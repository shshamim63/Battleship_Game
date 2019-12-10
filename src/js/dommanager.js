import { newgame } from './index.js';

const board1 = document.querySelector('.player');
const board2 = document.querySelector('.computer');
const reset = document.querySelector('.reset');
const messages = document.querySelector('.message');
let isOn = true;
const reloader = () => {
  reset.addEventListener('click', () => location.reload());
};
const renderBoard = (board, rowSize, boardId) => {
  function callback(e) {
    const { id } = e.target.dataset;
    const getXCoord = (i) => Math.floor(i / 10);
    const getYCoord = (i) => i % 10;
    if (!e.target.textContent && !e.target.classList.contains('hit') && isOn) {
      newgame.playerTurn(getXCoord(id), getYCoord(id));
    }
  }
  const currentBoard = boardId === 0 ? board1 : board2;
  [...currentBoard.children].forEach((el) => el.remove());
  for (let i = 0; i < rowSize; i += 1) {
    const boardRowContainer = document.createElement('div');
    boardRowContainer.classList.add('row');
    for (let j = 0; j < rowSize; j += 1) {
      const boardPartContainer = document.createElement('div');
      boardPartContainer.classList.add('col', 'box');
      const boardIndex = (i * rowSize) + j;
      boardPartContainer.dataset.id = boardIndex;
      if (boardId === 1) {
        boardPartContainer.addEventListener('click', callback);
      }
      if (boardId === 0 && board[boardIndex] !== 'O' && board[boardIndex].currentShip) {
        boardPartContainer.classList.add('ship');
      }
      if (board[boardIndex] === 'X') {
        boardPartContainer.classList.add('x-marker');
        boardPartContainer.innerText = '*';
      }
      if (board[boardIndex].targetHit) {
        boardPartContainer.classList.add('hit');
      }
      if (board[boardIndex] !== 'O' && board[boardIndex].currentShip && board[boardIndex].currentShip.isSunk()) {
        boardPartContainer.classList.add('sunk');
      }
      boardRowContainer.appendChild(boardPartContainer);
    }
    currentBoard.appendChild(boardRowContainer);
  }
};
const renderMessage = (message) => {
  messages.classList.add('message');
  messages.innerText = message;
};

const off = () => {
  isOn = false;
};

export {
  renderBoard, renderMessage, off, reloader,
};
