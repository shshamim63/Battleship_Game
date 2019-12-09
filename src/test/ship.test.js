import Ship from '../js/factories/ship';

describe('Ship', () => {
  const ship = Ship(3);

  test('contains a ship length', () => {
    expect(ship.shipLength).toBe(3);
  });
  test('contains a hit function that takes a number and then marks that position', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBe(true);
  });
  test('returns an updated array if grid gets hit', () => {
    expect(ship.shipPosition).toEqual(['X', 'X', 'X']);
  });
});
