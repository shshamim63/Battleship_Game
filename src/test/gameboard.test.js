import Gameboard from '../js/factories/gamrboard';

describe('Gameboard', () => {
  const gameboard = Gameboard();
  const gameboard1 = Gameboard();
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
  test('receives cordinate and mark place as hit', () => {
    expect(gameboard1.board[5]).toBe('O');
    gameboard1.receiveAttack(0, 5);
    expect(gameboard1.board[5]).toBe('X');
  });
  test('checks if  all of their ships have been sunk', () => {
    gameboard.placeShips([4, 3, 2]);
    expect(gameboard.AllShipsHaveSunk()).toBe(false);
    for (let i = 0; i < gameboard.boardRow; i += 1) {
      for (let j = 0; j < gameboard.boardRow; j += 1) {
        gameboard.receiveAttack(i, j);
      }
    }
    expect(gameboard.AllShipsHaveSunk()).toBe(true);
  });
});
