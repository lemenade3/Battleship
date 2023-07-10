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
  ship.addEventListener("dblclick", () => {
    if (shipObject.orientation === 0) {
      shipObject.orientation = 1;
      ship.style.flexDirection = "column";
    } else {
      shipObject.orientation = 0;
      ship.style.flexDirection = "row";
    }
  });

  ship.addEventListener("dragstart", (e) => {
    // JSON is used to pass ship objects as text data to the dropzone
    const shipData = JSON.stringify(shipObject);
    // once dragging is started the event JSON data is stored and .getData is called when the ship is dropped
    e.dataTransfer.setData("text/plain", shipData);
  });

  return ship;
}

// Creates the ships and the player's board (excluding the actual cells)
function makePlayerShipsAndBoard() {
  const gameHolder = document.querySelector("#game");

  const playerBoard = document.createElement("div");
  playerBoard.setAttribute("id", "playerBoard");
  playerBoard.setAttribute("class", "board");

  // creates ships, may move this out of this function
  const carrier = makeShipElement(5, 0, "carrier");
  const battleship = makeShipElement(4, 0, "battleship");
  const cruiser = makeShipElement(3, 0, "cruiser");
  const submarine = makeShipElement(3, 0, "submarine");
  const destroyer = makeShipElement(2, 0, "destroyer");

  const shipsHolder = document.createElement("div");

  shipsHolder.append(carrier, battleship, cruiser, submarine, destroyer);

  gameHolder.append(shipsHolder, playerBoard);
}

// Renders Player board information
function renderPlayerBoard(game) {
  const playerBoard = document.querySelector("#playerBoard");

  playerBoard.innerHTML = "";

  for (let i = 0; i < 10; i += 1) {
    const column = document.createElement("div");
    column.setAttribute("class", "column");
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      if (game.gameboard1.board[i][j].occupied) {
        cell.classList.add("occupied");
      }
      if (game.gameboard1.board[i][j].hit) {
        cell.classList.add("hit");
      }

      // dropzone logic

      cell.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      cell.addEventListener("drop", (e) => {
        e.preventDefault();

        // JSON data is recieved and parsed from dropped ship
        const droppedShipData = e.dataTransfer.getData("text/plain");
        const droppedShip = JSON.parse(droppedShipData);
        const droppedShipId = document.getElementById(droppedShip.id);

        if (
          game.gameboard1.placeShip(
            i,
            j,
            droppedShip.length,
            droppedShip.orientation,
            droppedShip.id
          )
        ) {
          renderPlayerBoard(game);
          droppedShipId.remove();
        }
      });
      column.append(cell);
    }
    playerBoard.append(column);
  }
}

// Creates holder for Enemy Board
function makeEnemyBoard() {
  const gameHolder = document.querySelector("#game");

  const enemyBoard = document.createElement("div");
  enemyBoard.setAttribute("id", "enemyBoard");
  enemyBoard.setAttribute("class", "board");

  gameHolder.append(enemyBoard);
}

// Renders Enemy board information
function renderEnemyBoard(game) {
  const enemyBoard = document.querySelector("#enemyBoard");

  enemyBoard.innerHTML = "";

  for (let i = 0; i < 10; i += 1) {
    const column = document.createElement("div");
    column.setAttribute("class", "column");
    for (let j = 0; j < 10; j += 1) {
      const cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.addEventListener("click", () => {
        // need to remove this decision making from the DOM module
        if (game.activePlayer.makeAttack(i, j)) {
          game.changeTurn();
          renderPlayerBoard(game);
        }
        if (game.gameboard2.board[i][j].hit) {
          cell.classList.add("hit");
          if (game.gameboard2.board[i][j].occupied) {
            cell.classList.add("occupied");
          }
        }
      });

      column.append(cell);
    }
    enemyBoard.append(column);
  }
}

export {
  renderPlayerBoard,
  renderEnemyBoard,
  makePlayerShipsAndBoard,
  makeEnemyBoard,
};
