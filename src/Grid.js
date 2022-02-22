import Player from './Player.js';
import Box from './Box.js';

class Grid {
  constructor(id, name) {
    this.element = document.createElement('div');
    this.element.classList.add('grid-container');
    this.element.setAttribute('id', id);

    this.addBoxes();
    this.type = name;
    this.player = Player(name);

    this.children = Array.from(this.element.children);
    this.missedAttacks = this.player.gameboard.missedAttacks;
  }

  createArrayOfAllShipCoordinates() {
    const allCoordinates = [];
    for (let i = 0; i < this.player.gameboard.coordinatesArray.length; i++) {
      for (let j = 0; j < this.player.gameboard.coordinatesArray[i].length; j++) {
        allCoordinates.push(this.player.gameboard.coordinatesArray[i][j]);
      }
    }
    return allCoordinates;
  }

  checkIfCoordinateInAllShipCoordinates(allCoordinates, k, l) {
    if (this.element.children[k].dataset.coordinates === allCoordinates[l].toString()) {
      return true;
    }
  }

  loadShips() {
    const allCoordinates = this.createArrayOfAllShipCoordinates();
    for (let k = 0; k < this.element.children.length; k++) {
      for (let l = 0; l < allCoordinates.length; l++) {
        if (this.checkIfCoordinateInAllShipCoordinates(allCoordinates, k, l)) {
          this.element.children[k].classList.add('shipIsPresent');
        }
      }
    }
  }

  updateDisplay(coordinate) {
    /// check if in all coordinates array
    const allCoordinates = this.createArrayOfAllShipCoordinates();
    for (let i = 0; i < this.missedAttacks.length; i++) {
      if (coordinate === this.missedAttacks[i]) {
        const box = this.children.find((x) => x.dataset.coordinates === coordinate.toString());
        box.classList.add('missedAttack');
        return;
      }
    }
    const box = this.children.find((x) => x.dataset.coordinates === coordinate.toString());
    box.classList.add('successfulAttack');
  }

  addBoxes() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const box = new Box(i, j);
        this.element.appendChild(box.element);
      }
    }
  }

  handleShipPlacement(size, startcoordinates) {
    console.log(Number(startcoordinates[1]) + Number(size));
    if (Number(startcoordinates[1]) + Number(size < 9)) {
      const coordinates = [];
      for (let i = 0; i < size; i++) {
        coordinates.push([startcoordinates[0], startcoordinates[1] + i]);
      }
      this.player.gameboard.placeShip(size, coordinates);
      this.loadShips();
    } else console.log("Won't fit!");
  }

  checkIfExceedsBoundaries(size, startcoordinates) {
    if (startcoordinates[1] + size > 9) {
      handleError();
      return false;
    }
    return true;
  }
}

export default Grid;
