//*****ENEMY GENERATOR*****//
/*global gauntlet: true */
'use strict';

var gauntlet = (function(obj){
	// ARRAYS OF POSSIBLE ENEMY RACES, CLASSES, AND WEAPONS //
	var allowedRaces = ["Federation", "Klingon", "Vulcan", "Romulan"];
	var allowedClasses = ["Cruiser", "Destroyer"];
	var allowedWeapons = ["Laser", "Photon", "Pulse"];

	// FUNCTION TO GET A RANDOM INDEX FROM EACH OF THE ABOVE ARRAYS //
	var generateConstructorIndexes = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	// FUNCTION TO CALL RANDOM NUMBER FUNCTION ABOVE //
	// CHAIN THE RESULTS TO GAUNTLET.ENEMY //
	obj.randomEnemy = function(){
	  var randomRace = allowedRaces[generateConstructorIndexes(0, allowedRaces.length)];
	  var randomClass = allowedClasses[generateConstructorIndexes(0, allowedClasses.length)];
	  var randomWeapon = allowedWeapons[generateConstructorIndexes(0, allowedWeapons.length)];

	  gauntlet[randomRace].prototype = new obj.Combatant();
	  gauntlet[randomClass].prototype = new gauntlet[randomRace]();
	  gauntlet[randomWeapon].prototype = new gauntlet[randomClass]();
	  gauntlet.Enemy.prototype = new gauntlet[randomWeapon]();

	  // RETURN NEW ENEMY //
	  return new obj.Enemy();
	};
	// RETURN NEW ENEMY //
	return obj;

})(gauntlet || {});
