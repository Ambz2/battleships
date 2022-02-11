import Ship from './Ship.js';
import Gameboard from './Gameboard.js'

let player1 = Gameboard('Player 1');
player1.placeShip(2, [[1, 2], [1, 3]]);
player1.placeShip(2, [[1, 5], [1, 4]]);
player1.placeShip(1, [[1, 6]]);
player1.receiveAttack([1, 3]);
console.log(player1);