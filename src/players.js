import { alertSunkShip } from "./domAlerts";

const Player = (enemyBoard, name) => {
  const makeAttack = (x, y) => {
    if (enemyBoard.board[x][y].hit !== true) {
      enemyBoard.receiveAttack(x, y);
      if (enemyBoard.board[x][y].occupied) {
        if (enemyBoard.board[x][y].occupied.isSunk())
          alertSunkShip(enemyBoard.board[x][y].occupied.name);
      }
      return true;
    }
    return false;
  };

  return { makeAttack, name };
};

const Computer = (enemyBoard) => {
  const name = "Computer";

  // This works for now but need to research using extends method to use the Player object as a prototype
  const makeAttack = (x, y) => {
    if (enemyBoard.board[x][y].hit !== true) {
      enemyBoard.receiveAttack(x, y);
      if (enemyBoard.board[x][y].occupied) {
        if (enemyBoard.board[x][y].occupied.isSunk())
          alertSunkShip(enemyBoard.board[x][y].occupied.name);
      }
      return true;
    }
    return false;
  };

  const randomMove = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    if (!makeAttack(x, y)) {
      randomMove();
    }
  };

  return { randomMove, name };
};

export { Player, Computer };
