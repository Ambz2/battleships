import Gameboard from './Gameboard.js';
import compare from './helper.js'
const Player = (name) => {
  const gameboard = Gameboard(name);

  const receiveAttack = (coordinates) => {
    return obj.gameboard.receiveAttack(coordinates).coords;
  };

  // need to work on random attacks


  
  const roll = () => {
    const move = Math.floor(Math.random() * (obj.gameboard.notDoneCoords.length - 1));
    const coordinates = obj.gameboard.notDoneCoords[move];
    return { coordinates, move };
  };
  const receiveRandomAttack = () => {
    const roll = obj.roll();
    const attack = obj.gameboard.receiveAttack(roll.coordinates);
    const playedMove = obj.gameboard.notDoneCoords.splice(roll.move, 0);
    obj.gameboard.doneCoords.push(playedMove);
    obj.firedAttacks.push(attack);
    return roll.coordinates;
  };

  const targetedAttack = () => {
    const lastAttack = obj.firedAttacks[firedAttacks.length - 1].coords;
    const leftSideOfLastAttack = [lastAttack[0], lastAttack[1] - 1];
    const rightSideOfLastAttack = [lastAttack[0], lastAttack[1] + 1];
    if (checkIfInDoneMoves(leftSideOfLastAttack)) {
      receiveAttack(leftSideOfLastAttack);
      return leftSideOfLastAttack
    } else if (checkIfInDoneMoves(rightSideOfLastAttack)) {
      receiveAttack(rightSideOfLastAttack);
      return rightSideOfLastAttack
    } else {
      let coords = receiveRandomAttack()
      return coords
    }
   
  }

  const checkIfInDoneMoves = (coordinates) =>  {
    for (let c of gameboard.notDoneCoords) {
      if (compare(c, coordinates)) {
        return true
      }
    }
  }
  const firedAttacks = [];

  const obj = {
    name, gameboard, receiveAttack, roll, receiveRandomAttack, firedAttacks, targetedAttack,
  };
  return obj;
};

export default Player;
