const Player = () => {
  const makeAttack = (x, y, enemyBoard) => {
    if (enemyBoard.board[3][4].hit) {
      return false;
    }
    enemyBoard.receiveAttack(x, y);
    return true;
  };

  return { makeAttack };
};

const Computer = () => {
  const prototype = Player();

  const randomMove = (enemyBoard) => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);

    if (prototype.makeAttack(x, y, enemyBoard)) {
      return true;
    }
    return randomMove(enemyBoard);
  };

  return { randomMove };
};

export { Player, Computer };
