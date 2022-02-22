
/**
 * @jest-environment jsdom
 */

import Grid from '../src/Grid.js'

test('check if exists already will return true', () => {
  const player1 = new Grid('player', 'player');
  player1.player.gameboard.placeShip(2, [[1, 1], [1, 2]]);
  player1.player.gameboard.placeShip(1, [[5, 5]]);
  player1.player.gameboard.placeShip(3, [[6, 4], [6, 5]]);

  const allShipCoordinates = [[1,1], [1,2]];
  const coordinates = [[1,1], [2,1]];
  const existsAlready = player1.checkIfExistsAlready(coordinates, allShipCoordinates)

  expect(existsAlready).toEqual(true);
});


test('check if exists already will return undefined', () => {
  const player1 = new Grid('player', 'player');
  player1.player.gameboard.placeShip(2, [[1, 1], [1, 2]]);
  player1.player.gameboard.placeShip(1, [[5, 5]]);
  player1.player.gameboard.placeShip(3, [[6, 4], [6, 5]]);

  const allShipCoordinates = [[1,1], [1,2]];
  const coordinates = [[5,5], [5,6]];
  const existsAlready = player1.checkIfExistsAlready(coordinates, allShipCoordinates);

  expect(existsAlready).toEqual(undefined);
});
