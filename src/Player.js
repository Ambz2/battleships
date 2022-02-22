import Gameboard from './Gameboard.js';

const Player = (name) => {
  const gameboard = Gameboard(name);

  const receiveAttack = (coordinates) => {
    obj.gameboard.receiveAttack(coordinates);
  };

  // need to work on random attacks


  
  const roll = () => {
    const move = Math.floor(Math.random() * (obj.gameboard.notDoneCoords.length - 1));
    const coordinates = obj.gameboard.notDoneCoords[move];
    return { coordinates, move };
  };
  const receiveRandomAttack = () => {
    const roll = obj.roll();
    console.log(roll.coordinates)
    obj.gameboard.receiveAttack(roll.coordinates);
    const playedMove = obj.gameboard.notDoneCoords.splice(roll.move, 0);
    obj.gameboard.doneCoords.push(playedMove);
    return roll.coordinates;
  };
  const obj = {
    gameboard, receiveAttack, roll, receiveRandomAttack,
  };
  return obj;
};

export default Player;
