
var gauntlet = (function(gauntlet){

  gauntlet.allowedRaces = ["Federation", "Klingon"];
  gauntlet.allowedClasses = ["Cruiser", "Destroyer"];
  gauntlet.allowedWeapons = ["Laser", "Photon", "Pulse"];

  function generateConstructorIndexes(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  gauntlet.createRandomEnemy = function() {

    gauntlet.randomRace = gauntlet.allowedRaces[generateConstructorIndexes(0, gauntlet.allowedRaces.length)];
    gauntlet.randomClass = gauntlet.allowedClasses[generateConstructorIndexes(0, gauntlet.allowedClasses.length)];
    gauntlet.randomWeapon = gauntlet.allowedWeapons[generateConstructorIndexes(0, gauntlet.allowedWeapons.length)];

    gauntlet[gauntlet.randomRace].prototype = new gauntlet.Combatant();
    gauntlet[gauntlet.randomClass].prototype = new gauntlet[gauntlet.randomRace]();
    gauntlet[gauntlet.randomWeapon].prototype = new gauntlet[gauntlet.randomClass]();
    gauntlet.Enemy.prototype = new gauntlet[gauntlet.randomWeapon]();

    return new gauntlet.Enemy();
  };
  
return gauntlet;
})(gauntlet || {});
