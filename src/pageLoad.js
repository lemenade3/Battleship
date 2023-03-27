const body = document.querySelector("body");

function pageLoad() {
  const title = document.createElement("div");
  title.textContent = "Battleship";
  title.setAttribute("id", "title");

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
  gridRadar.setAttribute("class", "gridRadar");

  gridRadar.append(gridPointer, playerGrid);

  radar.append(pointer, targetingBoard);

  const gridContainer = document.createElement("div");
  const gridTitle = document.createElement("div");
  gridTitle.setAttribute("class", "radarText");
  gridTitle.textContent = "YOUR SHIPS";

  gridContainer.append(gridRadar, gridTitle);

  const radarContainer = document.createElement("div");
  const radarTitle = document.createElement("div");
  radarTitle.setAttribute("class", "radarText");
  radarTitle.textContent = "ENEMY SHIPS";

  radarContainer.append(radar, radarTitle);

  game.append(gridContainer, radarContainer);

  body.append(title, game);
}

export default pageLoad;
