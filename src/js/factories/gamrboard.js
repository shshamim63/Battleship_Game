const Ship = require('./ship');

const Gameboard = () => {
  const boardRow = 10;
  const board = new Array(boardRow ** 2).fill('O');
  const shipContainer = [];
  const shipOrientation = () => Math.random() >= 0.5;
  const getRandomPosition = (position) => Math.floor(Math.random() * position);
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
  const defineRow = (position) => Math.floor(position / boardRow);
  const hasShip = (position) => typeof board[position] === 'object';
  const containsHorizontalEdge = (start, current, isVertical) => {
    if (isVertical) {
      return false;
    }
    return !(defineRow(start) === defineRow(current));
  };
  const containsVerticalEdge = (position) => board[position] === undefined;
  const positionIsvalid = (randomPosition, len, isVertical) => {
    for (let i = 0; i < len; i += 1) {
      if (hasShip(randomPosition + positionFactor(isVertical, i))
      || containsHorizontalEdge(randomPosition,
        randomPosition + positionFactor(isVertical, i), isVertical)
      || containsVerticalEdge(randomPosition + positionFactor(isVertical, i))
      ) {
        return false;
      }
    }
    return true;
  };
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
  const genaratePosition = (cordX, CordY) => cordX * boardRow + CordY;
  return {
    boardRow,
    board,
    placeShips,
    positionFactor,
    containsHorizontalEdge,
    containsVerticalEdge,
  };
};
module.exports = Gameboard;
