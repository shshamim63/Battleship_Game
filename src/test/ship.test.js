const Ship = require('../js/factories/ship');

describe('Ship', () => {
  const ship = Ship(3);

  test('contains a ship length', () => {
    expect(ship.shipLength).toBe(3);
  });
});
