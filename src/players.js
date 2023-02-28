const Player = (enemyBoard) => {
  const activePlayer = null;

  const makeAttack = (x, y) => {
    if (enemyBoard.board[x][y].hit) {
      return false;
    }
    enemyBoard.receiveAttack(x, y);
    return true;
  };

  return { activePlayer, makeAttack };
};

const Computer = (enemyBoard) => {
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

  return { activePlayer, randomMove };
};

export { Player, Computer };
