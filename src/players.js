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
  const placeholder = "a";
  return { placeholder };
};

export { Player, Computer };
