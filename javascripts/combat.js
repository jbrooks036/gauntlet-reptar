'use strict';
var gauntlet = (function(gauntlet){

	var mainDiv = document.getElementById('main');

	var randomDamageMultiplier = function (min,max){
		return Math.random() * (max-min) + min;
	}


	gauntlet.combat = function(playerName, playerClass, playerRace, playerWeapon){

		var continueCheckerCallback = function(event){
			if(event.target.getAttribute('id') === 'continue'){
				mainDiv.removeEventListener('click', continueCheckerCallback);
				mainDiv.innerHTML = `<button id="attackButton">ATTACK!</button>`;
				gauntlet.combat(playerName, playerClass, playerRace, playerWeapon);
			} else if(event.target.getAttribute('id') === 'newGame'){
				mainDiv.removeEventListener('click', continueCheckerCallback);
				gauntlet.newGame();
			}
		};

		var continueChecker = function(){
			mainDiv.innerHTML = (
				`<div class='selectorCard' id='continue'>Continue</div>`+
				`<div class='selectorCard' id='newGame'>New Game</div>`
				);
			mainDiv.addEventListener('click', continueCheckerCallback);
		};


		var enemy = gauntlet.createRandomEnemy();
		var player = gauntlet.createPlayer(playerName, playerClass, playerRace, playerWeapon);

		enemy.applyModifiers();
		player.applyModifiers();

		console.log("START NEW MATCH!");
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
				mainDiv.removeEventListener("click", attackSequence);
				console.log(`${player.name} Wins!`);
				continueChecker();
				return null;

			} else if(player.health <=0){
				mainDiv.removeEventListener("click", attackSequence);
				console.log(`${enemy.race} ${enemy.class} Wins!`);
				continueChecker();
				return null;
			}
		};

		mainDiv.addEventListener("click", attackSequence);
	};

	return gauntlet;
})(gauntlet || {});
