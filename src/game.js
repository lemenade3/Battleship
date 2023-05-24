import { Player, Computer } from "./players";
import Gameboard from "./gameboard";

const newGame = (comp) => {
  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();

  const player1 = Player(gameboard2, "Player 1");
  let player2;

  if (comp === true) {
    player2 = Computer(gameboard1);
  } else {
    player2 = Player(gameboard1);
  }

  let activePlayer = player1;

  const changeTurn = () => {
    if (activePlayer === player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  };

  // renderBoard should be called from within here and players and gameboards
  // should be made private

  return {
    activePlayer,
    changeTurn,
    gameboard1,
    gameboard2,
  };
};

const endGame = () => {
  const game = newGame(true);
  return game;
};

// functions needed for game

// new game
// end game
// change turn

export { newGame, endGame };
