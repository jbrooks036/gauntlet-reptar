'use strict';

var enemy;
var player;
var attackButton = document.getElementById('attackButton')

var randomDamageMultiplier = function (min,max){
	return Math.random() * (max-min) + min;
}

var combat = function(playerName, playerClass, playerRace, playerWeapon){

	console.log("START NEW MATCH!");

	enemy = gauntlet.createRandomEnemy();
	player = gauntlet.createPlayer(playerName, playerClass, playerRace, playerWeapon);

	player.applyModifiers();
	enemy.applyModifiers();

	console.log(`${enemy.race} ${enemy.class}'s health`, enemy.health);
	console.log(`${player.name}'s health`, player.health);

	var attackSequence = function(){

		if(player.health >=0 && enemy.health >=0){

			enemy.health -= randomDamageMultiplier(.75,1.1)*player.damage;
			console.log(`${enemy.race} ${enemy.class}'s health`, enemy.health);
			player.health -= randomDamageMultiplier(.75,1.1)*enemy.damage;
			console.log(`${player.name}'s health`, player.health);
		} 

		if(enemy.health <=0){
			attackButton.removeEventListener("click", attackSequence);
			console.log(`${player.name} Wins`);
			// combat(playerName, playerClass, playerRace, playerWeapon);

		} else if(player.health <=0){
			attackButton.removeEventListener("click", attackSequence);
			console.log("enemy Wins!");
			// combat(playerName, playerClass, playerRace, playerWeapon);
		}
	}

	attackButton.addEventListener("click", attackSequence);
};
