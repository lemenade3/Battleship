import Gameboard from "./gameboard";

test("Gameboard is an object", () => {
  const gameboard = Gameboard();
  expect(typeof gameboard).toBe("object");
});

test("Gameboard returns an empty board", () => {
  const gameboard = Gameboard();
  const emptyBoard = () => {
    let result;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (gameboard.board[i][j].occupied === true) {
          result = false;
          return result;
        }
        result = true;
      }
    }
    return result;
  };
  /* loop through each column and then loop through each cell in the column,
  if any cell is not empty, return false, else return true */
  expect(emptyBoard()).toBe(true);
});

test("placeShip places points at correct coordinates ", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(3, 4);
  gameboard.placeShip(10, 10);
  const isOccupied = (x, y) => {
    if (gameboard.board[x][y].occupied) {
      return true;
    }
    return false;
  };
  expect(isOccupied(3, 4)).toBe(true);
  expect(isOccupied(10, 10)).toBe(true);
});

test("placeShip works for ships longer than 1", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(3, 4, 4);
  const isOccupied = (x, y) => {
    if (gameboard.board[x][y].occupied) {
      return true;
    }
    return false;
  };
  expect(isOccupied(3, 4)).toBe(true);
  expect(isOccupied(4, 4)).toBe(true);
  expect(isOccupied(5, 4)).toBe(true);
  expect(isOccupied(6, 4)).toBe(true);
});

test("placeShip works in the Y axis", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(3, 4, 4, 1);
  const isOccupied = (x, y) => {
    if (gameboard.board[x][y].occupied) {
      return true;
    }
    return false;
  };
  expect(isOccupied(3, 4)).toBe(true);
  expect(isOccupied(3, 3)).toBe(true);
  expect(isOccupied(3, 2)).toBe(true);
  expect(isOccupied(3, 1)).toBe(true);
});

test("placeShip rejects if cell already occupied", () => {
  const gameboard = Gameboard();
  gameboard.placeShip(3, 4, 4, 1);
  expect(gameboard.placeShip(1, 3, 3)).toBe(false);
});
