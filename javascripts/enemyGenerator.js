"use strict";

var gauntlet = (function(obj){
	var allowedRaces = ["Federation", "Klingon"];
	var allowedClasses = ["Cruiser", "Destroyer"];
	var allowedWeapons = ["Laser", "Photon", "Pulse"];

	var generateConstructorIndexes = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	obj.randomEnemy = function(){

	  var randomRace = allowedRaces[generateConstructorIndexes(0, allowedRaces.length)];
	  var randomClass = allowedClasses[generateConstructorIndexes(0, allowedClasses.length)];
	  var randomWeapon = allowedWeapons[generateConstructorIndexes(0, allowedWeapons.length)];
	  gauntlet[randomRace].prototype = new obj.Combatant();
	  gauntlet[randomClass].prototype = new gauntlet[randomRace]();
	  gauntlet[randomWeapon].prototype = new gauntlet[randomClass]();
	  gauntlet.Enemy.prototype = new gauntlet[randomWeapon]();

	  return new obj.Enemy();
	};

	return obj;

})(gauntlet || {});
