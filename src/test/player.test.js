const Player = require('../js/factories/player');

describe('Player', () => {
  let player;
  let gameboard;
  beforeEach(() => {
    player = Player();
    gameboard = { receiveAttack: jest.fn((x, y) => true) };
  });
  test('stores player valid moves', () => {
    expect(player.validMoves.length).toEqual(0);
  });
  test('attack method return true if cordinate is valid', () => {
    expect(player.attack(gameboard, 0, 0)).toBe(true);
  });
});
