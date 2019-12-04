const Gameboard = () => {
  const boardRow = 10;
  const board = new Array(boardRow ** 2).fill('O');
  return {
    boardRow,
    board,
  };
};
module.exports = Gameboard;
