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

  const placeShip = (x, y, length = 1, axis = 0) => {
    const ship = Ship(length);
    if (axis === 0) {
      for (let i = 0; i < length; i += 1) {
        board[x + i][y].occupied = ship;
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        board[x][y - i].occupied = ship;
      }
    }
  };

  return {
    board,
    placeShip,
  };
};

export default Gameboard;
