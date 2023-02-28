import newGame from "./game";

test("newGame creates two players and two gameboards", () => {
  const game = newGame();
  game.gameboard1.placeShip(3, 4, 3, 1); // temporary
  game.gameboard2.placeShip(2, 6, 4); // temporary
  expect(game.activePlayer.makeAttack(2, 6, game.gameboard2)).toBe(true);
  expect(game.gameboard2.board[2][6].hit).toBe(true);
  expect(game.activePlayer.makeAttack(2, 6, game.gameboard1)).toBe(true);
  expect(game.gameboard1.board[2][6].hit).toBe(true);
});

test("changeTurn changes activePlayer from one, to another", () => {
  const game = newGame();
  expect(game.changeTurn()).toBe(game.player2);
});
