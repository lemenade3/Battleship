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

To DO:

1. give dropped ship info to placeship --- DONE
   1a. allow orientatiom of ship to be changed by double clicking --- DONE
2. revise namings of boards to make it simpler to read -- DONE
3. separate out player board rendering and enemy board rendering --- DONE
4. move decision making logic for endgame out of domManipulation and back into game module --- DONE
5. fix classes on gameboard, should be using classlist.add --- DONE
6. create logic to allow computer to randomly place ships, NEEDS PLACING SHIP CORRECTED FIRST -- PLACING SHIPS DONE - Fully DONE
7. revise styling
8. create pass and play mode
   nine. improve ai targeting logic
