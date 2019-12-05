const Gameboard = require('../js/factories/gamrboard');

describe('Gameboard', () => {
  const gameboard = Gameboard();
  test('has each row size', () => {
    expect(gameboard.boardRow).toBe(10);
  });
  test('has a board of row^2 length', () => {
    expect(gameboard.board.length).toBe(10 ** 2);
  });
  test('positionFactor provides addition ten if it is vertical', () => {
    expect(gameboard.positionFactor(false, 1)).toBe(1);
  });
  test('returns true if contains horizontal edge based on vertical placement', () => {
    expect(gameboard.containsHorizontalEdge(29, 30, false)).toBe(true);
  });
  test('returns true if contains vertical edge based on vertical placement', () => {
    expect(gameboard.containsVerticalEdge(29 + gameboard.positionFactor(1, true))).toBe(false);
  });
  test('places ship on the gameboard', () => {
    gameboard.placeShips([4, 3, 2]);
    expect(gameboard.board.filter((grid) => typeof grid === 'object').length).toBe(9);
  });
});
