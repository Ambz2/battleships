import Ship from './Ship.js';

const GameboardFactory = (name) => {
  const board = [];
  const coordinatesArray = [];
  const placeShip = (size, coordinates) => {
    const element = {};
    element.shipObject = Ship(size, coordinates);
    obj.board.push(element);
    obj.coordinatesArray.push(coordinates);
    console.log(obj.coordinatesArray)
  };
  // translateCoords takes a set of coordinates, and return the index in coordinatesArray,
  // which can then be used by receive attack to find the correct ship object in the board array.
  const translateCoords = (coords) => {
    for (let i = 0; i < obj.coordinatesArray.length; i++) {
      for (let j = 0; j < obj.coordinatesArray[i].length; j++) {
        if (obj.coordinatesArray[i][j].toString() === coords.toString()) {
          return i;
        }
      }
    }
  };
  const missedAttacks = [];
  const addToReceivedAttacks = (coords) => {
    obj.receivedAttacks.push(coords);
  };
  const addToMissedAttacks = (coords) => {
    obj.missedAttacks.push(coords);
  };
  const checkIfAllShipsSunk = () => {
    const arr = obj.board.map((element) => element.shipObject.sunk);
    if (arr.every((element) => element === true)) {
      obj.allShipsSunk = true;
      console.log('All ships sunk!');
    }
  };
  const addToDoneArray = (coords) => {
    obj.doneCoords.push(coords);
  }
  const deleteFromNotDoneArray = (coords) => {
    for (let i = 0; i < obj.notDoneCoords.length; i++) {
      if (coords.toString() === notDoneCoords[i].toString()) {
        notDoneCoords.splice(i, 1);
      }
    }
  }
  const receiveAttack = (coordinates) => {
    const index = translateCoords(coordinates);
    if (index === undefined) {
      addToMissedAttacks(coordinates);
    } else {
      obj.board[index].shipObject.hit(coordinates);
      checkIfAllShipsSunk();
    }
    addToDoneArray(coordinates);
    deleteFromNotDoneArray(coordinates);
  };
  const allShipsSunk = false;

  const notDoneCoords = [
    [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9],
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9],
    [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9],
    [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9],
    [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9],
    [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9],
    [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9],
  ];
  const doneCoords = [];

  const obj = {
    name,
    board,
    placeShip,
    receiveAttack,
    translateCoords,
    missedAttacks,
    coordinatesArray,
    allShipsSunk,
    notDoneCoords,
    doneCoords,
  };
  return obj;
};

export default GameboardFactory;
