// functions needed for domManipulation

function renderBoard(game) {
  const board = document.querySelector("#board");
  const grid = document.querySelector("#grid");

  board.innerHTML = "";
  grid.innerHTML = "";

  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.textContent = "";
      cell.addEventListener("click", () => {
        if (game.player1.activePlayer && !game.gameboard2.board[i][j].hit) {
          game.player1.makeAttack(i, j);
          game.changeTurn();
          renderBoard(game);
          // function to call player.makeAttack
        }
      });
      if (game.gameboard2.board[i][j].hit) {
        cell.setAttribute("class", "hit");
        if (game.gameboard2.board[i][j].occupied) {
          cell.textContent = "S";
          if (game.gameboard2.board[i][j].occupied.isSunk()) {
            console.log("Sunk!");
          }
        }
      }
      row.append(cell);
    }
    board.append(row);
  }

  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.textContent = "";
      if (game.gameboard1.board[i][j].occupied) {
        cell.textContent = "S";
      }
      if (game.gameboard1.board[i][j].hit) {
        cell.setAttribute("class", "hit");
      }
      row.append(cell);
    }
    grid.append(row);
  }
}

export default renderBoard;

// renderBoard, imports gameboard object from game and loops through
// each cell and renders info on occupancy and hit status

// moveShips, later implementation for allowing drag and drop

// logic to make onclick of cell call player.makeAttack
