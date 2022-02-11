import Ship from './Ship.js'

const GameboardFactory = (name) => {
  const board = [];
  const coordinatesArray = [];
  const placeShip = (size, coordinates) => {
    const element = {};
    element.shipObject = Ship(size, coordinates);
    obj.board.push(element);
    obj.coordinatesArray.push(coordinates);
  };
  // translateCoords takes a set of coordinates, and return the index in coordinatesArray,
  // which can then be used by receive attack to find the correct ship object in the board array.
  const translateCoords = (coords) => {
    for (let i = 0; i < obj.coordinatesArray.length; i++) {
      for (let j = 0; j < obj.coordinatesArray[i].length; j++) {
        if (obj.coordinatesArray[i][j].toString() == coords.toString()) {
          return i;
        }
      }
    }
  };
  const missedAttacks = [];
  const addToMissedAttacks = (coords) => {
    obj.missedAttacks.push(coords);
  };
  const checkIfAllShipsSunk = () => {
    const arr = obj.board.map(element => element.shipObject.sunk);
    if (arr.every(element => element === true)) {
      obj.allShipsSunk = true;
      console.log('All ships sunk!')
    }
  }
  const receiveAttack = (coordinates) => {
    const index = translateCoords(coordinates);
    if (index == undefined) {
      addToMissedAttacks(coordinates);
    } else {
      obj.board[index].shipObject.hit(coordinates);
      checkIfAllShipsSunk()
    }
  };
  const allShipsSunk = false;

  const obj = { name, board, placeShip, receiveAttack, translateCoords, missedAttacks, coordinatesArray, allShipsSunk };
  return obj;
}

export default GameboardFactory;
