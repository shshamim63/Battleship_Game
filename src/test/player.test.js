const Player = require('../js/factories/player');

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = Player();
  });
  test('stores player valid moves', () => {
    expect(typeof player.validMoves).toBe('array');
  });
});
