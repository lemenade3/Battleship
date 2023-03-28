import { Player, Computer } from "./players";
import Gameboard from "./gameboard";

// game loop needs to set up new game and create 2 players and gameboards
// players should place ships (or coords used to predetermine placement) (later)
// player should be able to click enemy gameboard coord and that should call attack.
// once player makes move, it is other player's turn

// player should be shown a smaller version of their gameboard and a
// larger targeting grid to make attacks on. (pageload)
// when player clicks on grid, makeAttack should be called. (domManip)
// once makeAttack is called, activePlayer switches to computer (game)
// computer calls randomMove and results should be logged on smaller board (domManip)
// activePlayer then reverts to player and player can take turn (game)
// if ship is sunk then message should be displayed (alert is fine for now) (domManip)
// if all ships sunk, end game is called (game)

const newGame = (comp) => {
  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();

  const player1 = Player(gameboard2, "Player 1");
  player1.activePlayer = true;
  let player2;

  const changeTurn = () => {
    if (player1.activePlayer) {
      player1.activePlayer = false;
      player2.activePlayer = true;
      player2.randomMove(); // if statement needed here to allow multiplayer in future
      changeTurn();
    } else {
      player1.activePlayer = true;
      player2.activePlayer = false;
    }
  };

  if (comp === true) {
    player2 = Computer(gameboard1);
  } else {
    player2 = Player(gameboard1);
  }

  // renderBoard should be called from within here and players and gameboards
  // should be made private

  return {
    player1,
    player2,
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
