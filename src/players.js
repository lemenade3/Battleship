const Player = () => {
  const makeAttack = (x, y, enemyBoard) => {
    if (enemyBoard.board[x][y].hit) {
      return false;
    }
    enemyBoard.receiveAttack(x, y);
    return true;
  };

  return { makeAttack };
};

const Computer = () => {
  const makeAttack = (x, y, enemyBoard) => {
    if (enemyBoard.board[x][y].hit) {
      return false;
    }
    enemyBoard.receiveAttack(x, y);
    return true;
  };

  const randomMove = (enemyBoard) => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);

    if (makeAttack(x, y, enemyBoard)) {
      return true;
    }
    return randomMove(enemyBoard);
  };

  return { randomMove };
};

export { Player, Computer };
