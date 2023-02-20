import "./style.scss";
import renderBoard from "./domManipulation";
import newGame from "./game";

const game = newGame();

game.gameboard1.placeShip(3, 4, 3, 1); // temporary
game.gameboard1.placeShip(5, 6, 5, 1); // temporary
game.gameboard1.placeShip(2, 8, 6); // temporary
game.gameboard1.placeShip(1, 1, 2); // temporary

renderBoard(game.gameboard1, game.player2);

// when cell click event occurs, the player.makeAttack should be called
