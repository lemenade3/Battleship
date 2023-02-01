# Battleship

A Battleship Game to help demonstrate unit testing knowledge

All dependencies now installed

ships factory function should be in own ships.js file
gameboard factory should be in gameboard.js
players should be created in players.js
gamelogic.js
domManipulation.js
pageload.js
ai.js

ship object info should be length: 3, hitsReceived: 2, sunk: false

gameboard should be an object with multi dimensional array to form grid.
each value in array should be object that tracks if shot fired and if ship located there, shipname should be stored there and hit should be assigned to corresponding ship object. if all ships sunk, gameboard should call end game

player should allow user to make a move and then pass that coordinate to the gameboard.

ai should extend player but should be capable of assigning random legal moves at first and then should maybe use an algorithm to calculate next best possible move.
