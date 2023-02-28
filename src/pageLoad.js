const body = document.querySelector("body");

function pageLoad() {
  const targetingBoard = document.createElement("div");
  targetingBoard.setAttribute("id", "board");
  const playerGrid = document.createElement("div");
  playerGrid.setAttribute("id", "grid");

  body.append(playerGrid, targetingBoard);
}

export default pageLoad;
