//*****ENEMY*****//
"use strict";

var gauntlet = (function(gauntlet){

  function generateRandomIndex(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  gauntlet.createRandomEnemy = function() {

    var enemy = new gauntlet.Enemy();
    gauntlet.randomRace = enemy.allowedRaces[generateRandomIndex(0, enemy.allowedRaces.length)];
    gauntlet.randomClass = enemy.allowedClasses[generateRandomIndex(0, enemy.allowedClasses.length)];
    gauntlet.randomWeapon = enemy.allowedWeapons[generateRandomIndex(0, enemy.allowedWeapons.length)];

    gauntlet[gauntlet.randomRace].prototype = new gauntlet.Combatant();
    gauntlet[gauntlet.randomClass].prototype = new gauntlet[gauntlet.randomRace]();
    gauntlet[gauntlet.randomWeapon].prototype = new gauntlet[gauntlet.randomClass]();
    gauntlet.Enemy.prototype = new gauntlet[gauntlet.randomWeapon]();

    return new gauntlet.Enemy;
  };
  
return gauntlet;
})(gauntlet || {});
