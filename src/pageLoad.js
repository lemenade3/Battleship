import {
  renderPlayerBoard,
  makePlayerShipsAndBoard,
  renderEnemyBoard,
  makeEnemyBoard,
} from "./boardRendering";
import newGame from "./game";

const body = document.querySelector("body");

function pageLoad() {
  body.innerHTML = "";
  const title = document.createElement("div");
  title.textContent = "BATTLESHIP";
  title.setAttribute("id", "title");

  const gameHolder = document.createElement("div");
  gameHolder.setAttribute("id", "game");

  const onePlayer = document.createElement("button");
  onePlayer.textContent = "Single Player";
  onePlayer.setAttribute("class", "button");
  onePlayer.addEventListener("click", () => {
    const game = newGame(true);
    gameHolder.innerHTML = "";
    makePlayerShipsAndBoard();
    renderPlayerBoard(game);
    makeEnemyBoard(game);
    renderEnemyBoard(game);
  });

  const twoPlayer = document.createElement("button");
  twoPlayer.textContent = "Multiplayer";
  twoPlayer.setAttribute("class", "button");

  gameHolder.append(onePlayer, twoPlayer);

  body.append(title, gameHolder);
}

export default pageLoad;
