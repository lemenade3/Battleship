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

  const topSection = document.createElement("div");
  topSection.setAttribute("id", "topSection");
  const title = document.createElement("div");

  title.textContent = "BATTLESHIP";
  title.setAttribute("id", "title");

  const gameHolder = document.createElement("div");
  gameHolder.setAttribute("id", "game");

  const onePlayer = document.createElement("button");
  onePlayer.textContent = "Single Player";
  onePlayer.setAttribute("class", "button");
  onePlayer.addEventListener("click", () => {
    topSection.style.height = "0px";
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

  body.append(topSection, title, gameHolder);
}

export default pageLoad;
