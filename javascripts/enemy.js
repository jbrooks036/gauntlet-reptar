//*****ENEMY*****//
"use strict";

var gauntlet = (function(gauntlet){

  function generateRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  gauntlet.createRandomEnemy = function() {

    var enemy = new gauntlet.Enemy();

    var randomRace = enemy.allowedRaces[generateRandomIndex(0, enemy.allowedRaces.length)];
    var randomClass = enemy.allowedClasses[generateRandomIndex(0, enemy.allowedClasses.length)];
    var randomWeapon = enemy.allowedWeapons[generateRandomIndex(0, enemy.allowedWeapons.length)];

    gauntlet[randomRace].prototype = new gauntlet.Combatant();
    gauntlet[randomClass].prototype = new gauntlet[randomRace]();
    gauntlet[randomWeapon].prototype = new gauntlet[randomClass]();
    gauntlet.Enemy.prototype = new gauntlet[randomWeapon]();

    return new gauntlet.Enemy();
  };
  
return gauntlet;
})(gauntlet || {});
