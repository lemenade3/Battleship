const body = document.querySelector("body");

function pageLoad() {
  const title = document.createElement("div");
  title.textContent = "Battleship";

  const game = document.createElement("div");
  game.setAttribute("id", "game");

  const radar = document.createElement("div");
  radar.setAttribute("class", "radar");

  const pointer = document.createElement("div");
  pointer.setAttribute("class", "pointer");

  const targetingBoard = document.createElement("div");
  targetingBoard.setAttribute("id", "board");

  const playerGrid = document.createElement("div");
  playerGrid.setAttribute("id", "grid");

  const gridPointer = document.createElement("div");
  gridPointer.setAttribute("class", "pointer");

  const gridRadar = document.createElement("div");
  gridRadar.setAttribute("class", "radar");

  gridRadar.append(gridPointer, playerGrid);

  radar.append(pointer, targetingBoard);

  game.append(gridRadar, radar);

  body.append(title, game);
}

export default pageLoad;
