"use strict";

// create a player, composing player from multiple prototypes
var gauntlet = (function(object) {

  object.createPlayer = function (playerName, playerClass, playerRace, playerWeapon) {
    gauntlet[playerRace].prototype = new gauntlet.Combatant();
    gauntlet[playerClass].prototype = new gauntlet[playerRace]();
    gauntlet[playerWeapon].prototype = new gauntlet[playerClass]();
    gauntlet.Player.prototype = new gauntlet[playerWeapon]();
    return new gauntlet.Player(playerName);
  };

  return object;

})(gauntlet || {});
