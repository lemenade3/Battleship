// import pageLoad from "./pageLoad";

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

function alertEndGame(player) {
  const body = document.querySelector("body");
  const alert = document.createElement("div");
  const message = document.createElement("div");
  message.textContent = `Game Over! ${player} is the winner!`;
  const button = document.createElement("button");
  button.textContent = "New Game";
  button.addEventListener("click", () => {
    body.innerHTML = "";
    // pageLoad();
  });
  const container = document.createElement("div");
  container.append(message, button);
  alert.append(container);

  alert.setAttribute("class", "alert");
  body.append(alert);
}

function makeShipsAndBoard() {
  // needs to be exported
  const gameHolder = document.querySelector("#game");
  const board = document.createElement("div");
  board.setAttribute("id", "board");

  const grid = document.createElement("div");
  grid.setAttribute("id", "grid");

  function makeShipElement(length, id) {
    const ship = document.createElement("div");
    for (let i = 0; i < length; i += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      ship.append(cell);
    }
    ship.setAttribute("class", "ship");
    ship.setAttribute("id", id);
    ship.draggable = true;
    ship.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });

    return ship;
  }

  const carrier = makeShipElement(5, "carrier");
  const battleship = makeShipElement(4, "battleship");
  const cruiser = makeShipElement(3, "cruiser");
  const submarine = makeShipElement(3, "submarine");
  const destroyer = makeShipElement(2, "destroyer");

  const shipsHolder = document.createElement("div");

  shipsHolder.append(carrier, battleship, cruiser, submarine, destroyer);

  gameHolder.append(board, shipsHolder, grid);
}

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
        // if game.player1.makeAttack === true => endGamechangeTurn => renderBoard

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
        cell.classList.add("occupied");
      }
      if (game.gameboard1.board[i][j].hit) {
        cell.classList.add("hit");
      }
      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      cell.addEventListener("drop", (e) => {
        e.preventDefault();

        const droppedShipId = e.dataTransfer.getData("text/plain");
        const droppedShip = document.getElementById(droppedShipId);

        game.gameboard1.placeShip(i, j, 2, 1, "test");
        renderBoard(game);
        droppedShip.remove();
      });
      row.append(cell);
    }
    grid.append(row);
  }
}

export { renderBoard, makeShipsAndBoard };

// renderBoard, imports gameboard object from game and loops through
// each cell and renders info on occupancy and hit status

// moveShips, later implementation for allowing drag and drop

// logic to make onclick of cell call player.makeAttack
