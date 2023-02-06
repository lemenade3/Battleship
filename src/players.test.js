import Player from "./players";
import Gameboard from "./gameboard";

test("Player is an object", () => {
  const player = Player();
  expect(typeof player).toBe("object");
});

test("makeAttack calls recieveAttack on enemy's gameboard", () => {
  const player = Player();
  const enemyBoard = Gameboard();
  enemyBoard.placeShip(3, 4);
  player.makeAttack(3, 4, enemyBoard);
  expect(enemyBoard.board[3][4].hit).toBe(true);
});

test("makeAttack returns false if cell already hit", () => {
  const player = Player();
  const enemyBoard = Gameboard();
  enemyBoard.placeShip(3, 4);
  player.makeAttack(3, 4, enemyBoard);
  expect(player.makeAttack(3, 4, enemyBoard)).toBe(false);
});
