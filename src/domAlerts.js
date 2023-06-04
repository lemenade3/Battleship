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
    window.location.reload();
  });
  const container = document.createElement("div");
  container.append(message, button);
  alert.append(container);

  alert.setAttribute("class", "alert");
  body.append(alert);
}

export { alertSunkShip, alertEndGame };
