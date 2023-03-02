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

  const isOccupied = (x, y) => {
    if (board[x][y].occupied) {
      return true;
    }
    return false;
  };

  const placeShip = (x, y, length = 1, axis = 0, name = "") => {
    const ship = Ship(length, name);
    if (axis === 0) {
      for (let i = 0; i < length; i += 1) {
        if (isOccupied(x + i, y)) {
          // may cause issues when ship is placed, the ship might be lost if incorrect
          return false;
        }
        board[x + i][y].occupied = ship;
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        if (isOccupied(x, y - i)) {
          return false; // returning false may need to be changed when game is more complex
        }
        board[x][y - i].occupied = ship;
      }
    }
    return ship;
  };

  const receiveAttack = (x, y) => {
    if (board[x][y].hit) {
      return false;
    }
    if (board[x][y].occupied) {
      board[x][y].occupied.hit();
    }
    board[x][y].hit = true;
    return board[x][y].hit;
  };

  const allSunk = () => {
    let result;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (board[i][j].occupied === true) {
          if (board[i][j].occupied.isSunk() === false) {
            result = false;
            return result;
          }
        }
        result = true;
      }
    }
    return result;
  };

  return {
    board,
    placeShip,
    receiveAttack,
    allSunk,
  };
};

export default Gameboard;
