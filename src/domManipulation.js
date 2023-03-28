import { endGame } from "./game";
import pageLoad from "./pageLoad";

// functions needed for domManipulation

function alertSunkShip(ship) {
  const body = document.querySelector("body");
  const alert = document.createElement("div");
  const message = document.createElement("div");
  message.textContent = `${ship} was Sunk!`;
  const button = document.createElement("button");
  button.textContent = "Ok!";
  button.addEventListener("click", () => {
    alert.remove();
  });
  const container = document.createElement("div");
  container.append(message, button);
  alert.append(container);

  alert.setAttribute("class", "alert");
  body.append(alert);
}

function renderBoard(game) {
  const board = document.querySelector("#board");
  const grid = document.querySelector("#grid");

  board.innerHTML = "";
  grid.innerHTML = "";

  function alertEndGame() {
    function writeAlert(player) {
      const body = document.querySelector("body");
      const alert = document.createElement("div");
      const message = document.createElement("div");
      message.textContent = `Game Over! ${player} is the winner!`;
      const button = document.createElement("button");
      button.textContent = "New Game";
      button.addEventListener("click", () => {
        body.innerHTML = "";
        const newGame = endGame();
        pageLoad();
        renderBoard(newGame);
      });
      const container = document.createElement("div");
      container.append(message, button);
      alert.append(container);

      alert.setAttribute("class", "alert");
      body.append(alert);
    }
    if (game.gameboard1.allSunk()) {
      writeAlert(game.player2.name);
    }
    if (game.gameboard2.allSunk()) {
      writeAlert(game.player1.name);
    }
  }

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
          if (game.gameboard2.board[i][j].occupied) {
            if (game.gameboard2.board[i][j].occupied.isSunk()) {
              alertSunkShip(game.gameboard2.board[i][j].occupied.name);
              alertEndGame();
            }
          }
          game.changeTurn();
          renderBoard(game);
          // function to call player.makeAttack
        }
      });
      if (game.gameboard2.board[i][j].hit) {
        cell.setAttribute("class", "hit");
        if (game.gameboard2.board[i][j].occupied) {
          cell.classList.add("occupied");
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
        cell.setAttribute("class", "occupied");
      }
      if (game.gameboard1.board[i][j].hit) {
        cell.classList.add("hit");
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
