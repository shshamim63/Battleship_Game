const Ship = require('./ship');

const Gameboard = () => {
  const boardRow = 10;
  const board = new Array(boardRow ** 2).fill('O');
  const shipContainer = [];
  const shipOrientation = () => Math.random() >= 0.5;
  const getRandomPosition = (position) => Math.random * position;
  const positionFactor = (verticalOrientation, pos) => (verticalOrientation ? pos * boardRow : pos);
  const shipPlacement = (position, shipLength, isVertical) => {
    const currentShip = Ship(shipLength);
    shipContainer.push(currentShip);
    currentShip.shipPosition.forEach((element, idx) => {
      board[position + positionFactor(isVertical, idx)] = {
        currentShip,
        shipPositionIndex: idx,
        targetHit: false,
      };
    });
  };
  // const positionIsvalid = () => {

  // };
  const placeShips = (shipDiversity) => {
    shipDiversity.forEach((element) => {
      const isVertical = shipOrientation();
      let randomPosition;
      do {
        randomPosition = getRandomPosition(board.length);
      } while (!positionIsvalid(randomPosition, element, isVertical));
      shipPlacement(randomPosition, element, isVertical);
    });
  };
  return {
    boardRow,
    board,
    placeShips,
  };
};
module.exports = Gameboard;
