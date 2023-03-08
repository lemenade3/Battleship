import "./style.scss";
import { renderBoard } from "./domManipulation";
import newGame from "./game";
import pageLoad from "./pageLoad";

const game = newGame(true);

game.gameboard2.placeShip(3, 4, 3, 1, "Cruiser"); // temporary
game.gameboard1.placeShip(5, 6, 5, 1); // temporary
game.gameboard1.placeShip(2, 8, 6); // temporary
game.gameboard1.placeShip(1, 1, 2); // temporary
game.gameboard2.placeShip(5, 7, 5, 1, "Battleship");

pageLoad();

renderBoard(game);
