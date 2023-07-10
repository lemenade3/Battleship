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
    if (typeof board[x][y] === "undefined") {
      return true;
    }
    if (board[x][y].occupied) {
      return true;
    }
    return false;
  };

  const placeShip = (x, y, length = 1, axis = 0, name = "") => {
    const ship = Ship(length, name);
    if (axis === 0) {
      for (let i = 0; i < length; i += 1) {
        // Checks if placement will go off edge of board
        if (!board[x + length]) {
          return false;
        }
        if (isOccupied(x + i, y)) {
          return false;
        }
        if (i === length - 1) {
          for (let j = 0; j < length; j += 1) {
            board[x + j][y].occupied = ship;
          }
        }
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        if (isOccupied(x, y - i)) {
          return false; // returning false may need to be changed when game is more complex
        }
        if (i === length - 1) {
          for (let j = 0; j < length; j += 1) {
            board[x][y - j].occupied = ship;
          }
        }
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
        if (board[i][j].occupied) {
          if (board[i][j].occupied.isSunk() === false) {
            result = false;
            return result;
          }
          result = true;
        }
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
