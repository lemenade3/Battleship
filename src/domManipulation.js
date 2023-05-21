// import pageLoad from "./pageLoad";

// functions needed for domManipulation

// Called by game module when ship is sunk
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

// Called by game module when endgame conditions are met
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

// Creates the ships and the player's board (excluding the actual cells)
function makeShipsAndBoard() {
  const gameHolder = document.querySelector("#game");
  const board = document.createElement("div");
  board.setAttribute("id", "board");

  const grid = document.createElement("div");
  grid.setAttribute("id", "grid");

  // makes ship object that stores length, orientation and name
  // May make sense to create the ships separately and then use their info to create these elements, when dropped, info is passed to cells

  function makeShipElement(length, orientation, id) {
    const ship = document.createElement("div");
    for (let i = 0; i < length; i += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      ship.append(cell);
    }
    ship.setAttribute("class", "ship");
    ship.setAttribute("id", id);
    ship.draggable = true;
    const shipObject = {
      length,
      orientation,
      id,
    };

    // JSON is used to pass ship objects as text data to the dropzone
    const shipData = JSON.stringify(shipObject);
    ship.addEventListener("dragstart", (e) => {
      // once dragging is started the event JSON data is stored and .getData is called when the ship is dropped
      e.dataTransfer.setData("text/plain", shipData);
    });

    return ship;
  }

  // creates ships, may move this out of this function
  const carrier = makeShipElement(5, 1, "carrier");
  const battleship = makeShipElement(4, 1, "battleship");
  const cruiser = makeShipElement(3, 1, "cruiser");
  const submarine = makeShipElement(3, 1, "submarine");
  const destroyer = makeShipElement(2, 1, "destroyer");

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
      cell.addEventListener("click", () => {
        // if game.player1.makeAttack === true => endGamechangeTurn => renderBoard
        // need to move attack logic out of DOM module

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
        cell.classList.add("hit");
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

        const droppedShipData = e.dataTransfer.getData("text/plain");
        const droppedShip = JSON.parse(droppedShipData);
        const droppedShipId = document.getElementById(droppedShip.id);

        game.gameboard1.placeShip(
          i,
          j,
          droppedShip.length,
          droppedShip.orientation,
          droppedShip.id
        );
        renderBoard(game);
        droppedShipId.remove();
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
