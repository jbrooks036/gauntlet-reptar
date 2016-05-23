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
		var enemy = gauntlet.randomEnemy();
		var player = gauntlet.createPlayer(playerName, playerClass, playerRace, playerWeapon);

		//APPLIES MODIFIERS TO PLAYER AND ENEMY OBJECTS//
		enemy.applyModifiers();
		player.applyModifiers();

    //ADDS CORRECT SHIP IMAGE//
    gauntlet.playerPickShip(player);
    gauntlet.enemyPickShip(enemy);


    //HANDLES FOR STAT DISPLAYS
    var playerName = player.name;
    $('#player-name').html(playerName);
    var enemyRace = enemy.race;
    var enemyDesc = enemyRace.concat(" ", enemy.class);
    $('#enemy-desc').html(enemyDesc);
    $('#attack-header').html("Attack Results");

		//LOGS INITIAL STATS//
		console.log("START NEW MATCH!");
		console.log(`${enemyDesc}'s health`, enemy.health);
		console.log(`${playerName}'s health`, player.health);

		//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
		var attackSequence = function(){

			//MAIN ATTACK/DAMAGE SEQUENCE//
			if(player.health >=0 && enemy.health >=0){

        // player damage to enemy health
        var playerDamage2Enemy = randomDamageMultiplier(0.75,1.1)*player.damage;
				enemy.health -= playerDamage2Enemy;
        $('#player-damage-to-enemy').html(Math.round(playerDamage2Enemy));
        $('#enemy-health-value').html(Math.round(enemy.health));
				console.log(`${enemyDesc}'s health`, enemy.health);

        // enemy damage to player health
				var enemyDamage2Player = randomDamageMultiplier(0.75,1.1)*enemy.damage;
				player.health -= enemyDamage2Player;
        $('#enemy-damage-to-player').html(Math.round(enemyDamage2Player));
        $('#player-health-value').html(Math.round(player.health));
				console.log(`${playerName}'s health`, player.health);
			}

			//CHECKS FOR LOSERS//
			if(enemy.health <=0){
				mainDiv.removeEventListener("click", attackSequence);
        $('#attack-header').html("Game Over");
        $('#winner-id').html(`${playerName} Wins!`);
        $('#line-2').html(" ");
				console.log(`${playerName} Wins!`);
				continueChecker();
				return null;

			} else if(player.health <=0){
				mainDiv.removeEventListener("click", attackSequence);
        $('#attack-header').html("Game Over");
        $('#winner-id').html(`${enemyDesc} Wins!`);
        $('#line-2').html(" ");
				console.log(`${enemyDesc} Wins!`);
				continueChecker();
				return null;
			}
		};

		//ADDS EVENT LISTENER TO ATTACK BUTTON//
		mainDiv.addEventListener("click", attackSequence);
	};

	return gauntlet;
})(gauntlet || {});
