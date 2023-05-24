import { alertSunkShip } from "./domManipulation";

const Player = (enemyBoard, name) => {
  const activePlayer = null;

  const makeAttack = (x, y) => {
    if (!enemyBoard.board[x][y].hit) {
      enemyBoard.receiveAttack(x, y);
      if (enemyBoard.board[x][y].occupied) {
        if (enemyBoard.board[x][y].occupied.isSunk())
          alertSunkShip(enemyBoard.board[x][y].occupied.name); // import
      }
      // endGame()
    }
  };

  return { activePlayer, makeAttack, name };
};

const Computer = (enemyBoard) => {
  const name = "Computer";
  const activePlayer = null;

  const makeAttack = (x, y) => {
    if (enemyBoard.board[x][y].hit) {
      return false;
    }
    enemyBoard.receiveAttack(x, y);
    return true;
  };

  const randomMove = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    if (!makeAttack(x, y)) {
      randomMove();
    }
  };

  return { activePlayer, randomMove, name };
};

export { Player, Computer };
