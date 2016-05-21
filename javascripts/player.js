"use strict";

// create a player, composing player from multiple prototypes
var gauntlet = (function (object) {

  object.createPlayer = function (playerName, playerClass, playerRace, weapon) {
    gauntlet[playerRace].prototype = new Combatant();
    gauntlet[playerClass].prototype = new window[playerRace]();
    gauntlet[weapon].prototype = new window[playerClass]();
    Player.prototype = new window[weapon]();

    return new Player(playerName);
  };

  return object;

})(gauntlet || {});


