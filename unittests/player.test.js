import { TestWatcher } from 'jest';
import Player from '../src/Player.js';
let player1;
let computer;

beforeEach(() => {
  player1 = Player('Player 1');
  player1.gameboard.placeShip(2, [[1, 1], [1, 2]]);
  player1.gameboard.placeShip(1, [[5, 5]]);
  player1.gameboard.placeShip(3, [[6, 4], [6, 5]]);

  computer = Player('Computer');
  computer.gameboard.placeShip(2, [[2, 2], [2, 3]]);
  computer.gameboard.placeShip(1, [[3, 3]]);
  computer.gameboard.placeShip(3, [[6, 6], [6, 7]]);
});

test('player can fire shot at computer', () => {
  player1.receiveAttack([2, 2]);
  expect(player1.gameboard.board[0].shipObject.shipArray)
    .toMatchObject([1, 0]);
});


