// functions needed for domManipulation

const body = document.querySelector("body");
const board = document.createElement("div");

body.append(board);

function renderBoard(gameboard, player) {
  board.innerHTML = "";

  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.textContent = "";
      cell.addEventListener("click", () => {
        player.makeAttack(i, j, gameboard);
        renderBoard(gameboard, player);
        // function to call player.makeAttack
      });
      if (gameboard.board[i][j].occupied) {
        cell.textContent = "S";
      }
      if (gameboard.board[i][j].hit) {
        cell.setAttribute("class", "hit");
      }
      row.append(cell);
    }
    board.append(row);
  }
}

export default renderBoard;

// renderBoard, imports gameboard object from game and loops through
// each cell and renders info on occupancy and hit status

// moveShips, later implementation for allowing drag and drop

// logic to make onclick of cell call player.makeAttack
