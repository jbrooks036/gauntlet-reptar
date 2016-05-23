//*****COMBAT*****//
'use strict';

var gauntlet = (function(gauntlet){

	//MAIN COMBAT FUNCTION//
	gauntlet.combat = function(playerName, playerClass, playerRace, playerWeapon){

		//MAIN DOM ELEMENT//
		var mainDiv = document.getElementById('main');

		//GENERATES RANDOM NUMBER FOR DAMAGE MULTIPLIER//
		var randomDamageMultiplier = function (min,max){
			return Math.random() * (max-min) + min;
		};

		//CALLBACK FOR CONTINUE CHECKER EVENT LISTENER//
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

		//ADD EVENT LISTENER FOR SELECT CONTINUE/NEW GAME//
		var continueChecker = function(){
			mainDiv.innerHTML = (
				`<div class='selectorCard' id='continue'>Continue</div>`+
				`<div class='selectorCard' id='newGame'>New Game</div>`
				);
			mainDiv.addEventListener('click', continueCheckerCallback);
		};

		//CREATES NEW PLAYER AND ENEMY OBJECTS//
		var enemy = gauntlet.createRandomEnemy();
		var player = gauntlet.createPlayer(playerName, playerClass, playerRace, playerWeapon);

		//APPLIES MODIFIERS TO PLAYER AND ENEMY OBJECTS//
		enemy.applyModifiers();
		player.applyModifiers();

		//LOGS INITIAL STATS//
		console.log("START NEW MATCH!");
		console.log(`${enemy.race} ${enemy.class}'s health`, enemy.health);
		console.log(`${player.name}'s health`, player.health);

		//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
		var attackSequence = function(){

			//MAIN ATTACK/DAMAGE SEQUENCE//
			if(player.health >=0 && enemy.health >=0){
				enemy.health -= randomDamageMultiplier(0.75,1.1)*player.damage;
				console.log(`${enemy.race} ${enemy.class}'s health`, enemy.health);
        $('#enemy-health-value').html(Math.round(enemy.health));
				player.health -= randomDamageMultiplier(0.75,1.1)*enemy.damage;
				console.log(`${player.name}'s health`, player.health);
        $('#player-health-value').html(Math.round(player.health));
			}

			//CHECKS FOR LOSERS//
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

		//ADDS EVENT LISTENER TO ATTACK BUTTON//
		mainDiv.addEventListener("click", attackSequence);
	};

	return gauntlet;
})(gauntlet || {});
