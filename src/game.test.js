import newGame from "./game";

test("newGame creates two players and two gameboards", () => {
  const game = newGame();
  game.gameboard1.placeShip(3, 4, 3, 1); // temporary
  game.gameboard2.placeShip(2, 6, 4); // temporary
  expect(game.player1.makeAttack(2, 6)).toBe(true);
  expect(game.gameboard2.board[2][6].hit).toBe(true);
  expect(game.player2.makeAttack(2, 6)).toBe(true);
  expect(game.gameboard1.board[2][6].hit).toBe(true);
});
