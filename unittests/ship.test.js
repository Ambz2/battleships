import { TestWatcher } from 'jest';
import Ship from '../src/Ship.js';


test('hit function works', () => {
  let ship = Ship(2, [[1, 1], [1, 2]]);
  ship.hit([1, 2]);
  expect(ship.shipArray).toMatchObject([0, 1]);
});

test('is sunk function works', () => {
  let ship = Ship(2, [[1, 1], [1, 2]]);
  ship.hit([1, 1]);
  ship.hit([1, 2]);
  expect(ship.sunk).toEqual(true);
});