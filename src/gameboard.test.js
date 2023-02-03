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
