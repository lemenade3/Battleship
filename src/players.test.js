import { Player, Computer } from "./players";
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

test("Computer can make random move on enemyBoad", () => {
  const computer = Computer();
  const enemyBoard = Gameboard();
  enemyBoard.placeShip(3, 4);
  computer.randomMove(enemyBoard);
  const checkRandom = () => {
    let result;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (enemyBoard.board[i][j].hit === true) {
          result = true;
          return result;
        }
        result = false;
      }
    }
    return result;
  };
  expect(checkRandom()).toBe(true);
});
