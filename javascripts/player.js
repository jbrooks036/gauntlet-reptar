/*
  TODO: Modularize this code with IIFE or Browserify
 */
// var Gauntlet = Gauntlet || {};
// gauntlet.Combatants = {};

// PLAYER CONSTRUCTOR FUNCTION
var createPlayer = function (playerName, playerClass, playerRace, weapon) {

  window[playerRace].prototype = new Combatant();
  window[playerClass].prototype = new window[playerRace]();
  window[weapon].prototype = new window[playerClass]();
  Player.prototype = new window[weapon]();

  return new Player(playerName);

};


