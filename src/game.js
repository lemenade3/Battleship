import { Player, Computer } from "./players";
import Gameboard from "./gameboard";
import { alertEndGame } from "./domAlerts";

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

  const endGame = () => {
    if (gameboard1.allSunk()) {
      alertEndGame(player2.name);
    }
    if (gameboard2.allSunk()) {
      alertEndGame(player1.name);
    }
  };

  // Player 2 moves need to be removed at later date, this function should only change turns
  const changeTurn = () => {
    endGame();
    if (activePlayer === player1) {
      activePlayer = player2;
      player2.randomMove();
      changeTurn();
    } else {
      activePlayer = player1;
    }
  };

  return {
    activePlayer,
    changeTurn,
    gameboard1,
    gameboard2,
  };
};

// functions needed for game

// new game
// end game
// change turn

export default newGame;
