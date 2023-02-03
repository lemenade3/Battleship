import Ship from "./ships";

const Gameboard = () => {
  /* make an object that contains 10 objects each subobject should 
  have a value and then 10 sub objects, each sub object will then have 
  a value, a hit value and a occupied value */

  const board = [];

  for (let i = 0; i <= 10; i += 1) {
    const column = [];
    for (let j = 0; j <= 10; j += 1) {
      const cell = {
        value: j,
        hit: false,
        occupied: false,
      };
      column.push(cell);
    }
    board.push(column);
  }

  const placeShip = (x, y) => {
    board[x][y].occupied = Ship(1);
  };

  return {
    board,
    placeShip,
  };
};

export default Gameboard;
