/*
  TODO: Modularize this code with IIFE or Browserify
 */
// var Gauntlet = Gauntlet || {};
// gauntlet.Combatants = {};

// PLAYER CONSTRUCTOR FUNCTION
var Player = function (playerName, playerRace, playerClass, weapon) {
  console.log("this = ", this);
  this.playerName = playerName;
  this.health = 100;

  console.log("this = ", this);
  console.log("window = ", window);

  window[weapon].prototype = new window[playerClass]();
  window[playerClass].prototype = new window[playerRace]();
  window[playerRace].prototype = new Combatant();

  /*
  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.playerRace,
      " ",
      this.playerClass,
      " with ",
      this.health,
      " health. ",
      " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
 */
};


