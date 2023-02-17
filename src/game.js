import { Player } from "./players";
import Gameboard from "./gameboard";

// game loop needs to set up new game and create 2 players and gameboards
// players should place ships (or coords used to predetermine placement)
// player should be able to click enemy gameboard coord and that should call attack.
// once player makes move, it is other player's turn

const newGame = () => {
  const player1 = Player();
  const player2 = Player();

  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();

  return {
    player1,
    player2,
    gameboard1,
    gameboard2,
  };
};

// functions needed for game

// new game
// end game
// change turn

export default newGame;
