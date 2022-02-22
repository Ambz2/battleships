
import Gameboard from '../src/Gameboard.js';
import Ship from '../src/Ship.js';

test('Place ship works', () => {
  let player1 = Gameboard('Player 1');
  player1.placeShip(2, [[1, 2], [1, 3]]);
  let expected = Ship(2, [[1, 2], [1, 3]]);
  expect(JSON.stringify(player1.board[0].shipObject)).toEqual(JSON.stringify(expected));
});

test('translate coordinates', () => {
  let player1 = Gameboard('Player 1');
  player1.placeShip(2, [[1, 2], [1, 3]]);
  player1.placeShip(1, [[1, 5]]);
  player1.placeShip(1, [[1, 6]]);
  expect(player1.translateCoords([1, 6])).toEqual(2);
});

test('translate coordinates will return undefined if no coordinates exist', () => {
  let player1 = Gameboard('Player 1');
  player1.placeShip(2, [[1, 2], [1, 3]]);
  player1.placeShip(1, [[1, 5]]);
  player1.placeShip(1, [[1, 6]]);
  expect(player1.translateCoords([7, 8])).toEqual(undefined);
})

test('receive attack', () => {
  let player1 = Gameboard('Player 1');
  player1.placeShip(2, [[1, 2], [1, 3]]);
  player1.placeShip(2, [[1, 5], [1, 4]]);
  player1.placeShip(1, [[1, 6]]);
  player1.receiveAttack([1, 2]);
  expect(player1.board[0].shipObject.shipArray).toMatchObject([1, 0]);
});

test('Receive missed attack', () => {
  let player1 = Gameboard('Player 1');
  player1.placeShip(2, [[1, 2], [1, 3]]);
  player1.placeShip(1, [[1, 5]]);
  player1.placeShip(1, [[1, 6]]);
  player1.receiveAttack([7, 8]);
  expect(player1.missedAttacks[0]).toMatchObject([7, 8]);
});

test('Gameboard reports if all ships are sunk', () => {
  let player1 = Gameboard('Player 1');
  player1.placeShip(2, [[1, 2], [1, 3]]);
  player1.placeShip(1, [[1, 5]]);
  player1.receiveAttack([1, 2]);
  player1.receiveAttack([1, 3]);
  player1.receiveAttack([1, 5]);
  expect(player1.allShipsSunk).toEqual(true);
});

test('received attack added to doneMoves array', () => {
  let player1 = Gameboard('player 1');
  player1.receiveAttack([1, 2]);
  expect(player1.doneCoords[0]).toMatchObject([1, 2]);
});

test('move is deleted from notDoneMoves Array', () => {
  let player1 = Gameboard('player1');
  player1.receiveAttack([0, 6]);
  expect(player1.notDoneCoords[6]).toMatchObject([0, 7]);
})