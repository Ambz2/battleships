import Ship from './Ship.js';
import Gameboard from './Gameboard.js';
import Player from './Player.js';
import * as manageDOM from './manageDOM.js';
import Grid from './Grid.js';
import css from './style.css';
import GameOverScreen from './gameOver.js'
import shipcontainer from './ship-container.js'
let turn = 1;

const content = document.querySelector('.content');
const shipContainer = new shipcontainer()
document.querySelector('body').appendChild(shipContainer.element);


const playerGrid = new Grid('player', 'player', takeFire);
const computerGrid = new Grid('computer', 'computer', takeFire);
computerGrid.children.forEach((child) => child.addEventListener('click', (event) => { takeFire(event); }));
manageDOM.handleDrag(playerGrid)


content.appendChild(playerGrid.element);
content.appendChild(computerGrid.element);
playerGrid.loadShips();


function takeFire(event) {
  if (event.target.dataset.valid === 'true') {
    turn += 1;
    event.target.dataset.valid = 'false';
    let coordinates = event.target.dataset.coordinates
    computerGrid.player.receiveAttack(coordinates);
    computerGrid.updateDisplay(coordinates);
    checkIfGameOver(computerGrid)
    takeComputerTurn();
  }
}

function takeComputerTurn() {
  const coordinates = playerGrid.player.receiveRandomAttack();
  playerGrid.updateDisplay(coordinates);
  checkIfGameOver(playerGrid);
}

function checkIfGameOver(player) {
  let allShipsSunk = player.player.gameboard.allShipsSunk;
  if (allShipsSunk) {
    gameOver();
  }
}

function gameOver() {
  const modal = document.querySelector('.modal')
  modal.style.display = 'block';
}

function restart() {

}