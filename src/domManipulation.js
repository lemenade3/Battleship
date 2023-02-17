// functions needed for domManipulation

const body = document.querySelector("body");

const gameboard = document.createElement("div");

for (let i = 0; i < 10; i += 1) {
  const row = document.createElement("div");
  for (let j = 0; j < 10; j += 1) {
    const cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    row.append(cell);
  }
  gameboard.append(row);
}

body.append(gameboard);

// renderBoard, imports gameboard object from game and loops through
// each cell and renders info on occupancy and hit status
// moveShips, later implementation for allowing drag and drop
// logic to make onclick of cell call player.makeAttack
