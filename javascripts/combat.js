'use strict';

var makePatrick = function(){
	gauntlet.Federation.prototype = new gauntlet.Combatant();
	gauntlet.Destroyer.prototype = new gauntlet.Federation();
	gauntlet.Laser.prototype = new gauntlet.Destroyer();
	gauntlet.Player.prototype = new gauntlet.Laser();
	return new gauntlet.Player("Patrick");	
};

var makeKatherine = function(){
	gauntlet.Federation.prototype = new gauntlet.Combatant();
	gauntlet.Cruiser.prototype = new gauntlet.Federation();
	gauntlet.Pulse.prototype = new gauntlet.Cruiser();
	gauntlet.Player.prototype = new gauntlet.Pulse();
	return new gauntlet.Player("Katherine");	
};

gauntlet.Klingon.prototype = new gauntlet.Combatant();
gauntlet.Cruiser.prototype = new gauntlet.Klingon();
gauntlet.Photon.prototype = new gauntlet.Cruiser();
gauntlet.Player.prototype = new gauntlet.Photon();
var andrew = new gauntlet.Player("Andrew");

gauntlet.Klingon.prototype = new gauntlet.Combatant();
gauntlet.Destroyer.prototype = new gauntlet.Klingon();
gauntlet.Laser.prototype = new gauntlet.Destroyer();
gauntlet.Player.prototype = new gauntlet.Laser();
var neal = new gauntlet.Player("Neal");


var combat = function(){

	var attackButton = document.getElementById('attackButton')

	function randomDamageMultiplier(min,max){
		return Math.random() * (max-min) + min;
	}

	var patrick = makePatrick();
	var katherine = makeKatherine();
	katherine.applyModifiers();
	patrick.applyModifiers();

	attackButton.addEventListener("click", ()=>{
	 	patrick.health -= randomDamageMultiplier(.75,1.1)*katherine.damage;
		console.log("patrick's health", patrick.health);
		if(patrick.health <=0){
			alert("Katherine Wins!");
			return;
		}
		katherine.health -= randomDamageMultiplier(.75,1.1)*patrick.damage;
		console.log("Katherine's Health", katherine.health);
		if(katherine.health <=0){
			alert("Patrick Wins!");
			return;
		}
	})
};
