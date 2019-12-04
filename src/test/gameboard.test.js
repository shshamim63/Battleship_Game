const Gameboard = require('../js/factories/gamrboard');

describe('Gameboard', () => {
  const gameboard = Gameboard();
  test('has each row size', () => {
    expect(gameboard.boardRow).toBe(10);
  });
  test('has a board of row^2 length', () => {
    expect(gameboard.board.length).toBe(10 ** 2);
  });
  test('places ship on the gameboard', () => {
    gameboard.placeShips([4, 3, 2]);
    expect(gameboard.board.filter((grid) => typeof grid === 'object').length).toBe(6);
  });
});
