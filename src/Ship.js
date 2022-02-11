const ShipFactory = (size, coordinates) => {
  let shipArray = new Array(size).fill(0);
  let sunk = false;
  const isSunk = () => {
    if (shipArray.reduce((p, c) => p + c, 0) === obj.shipArray.length) {
      obj.sunk = true;
    }
  };
  const searchCoordinatesPosition = (coords) => {
    for (let i = 0; i < coordinates.length; i++) {
      if (coordinates[i].toString() == coords.toString()) {
        return i;
      }
    }
  }
  const hit = (coords) => {
    let index = searchCoordinatesPosition(coords);
    obj.shipArray[index] = 1;
    isSunk();
  };

  const obj = { shipArray, hit, sunk };
  return obj;
};

export default ShipFactory;
