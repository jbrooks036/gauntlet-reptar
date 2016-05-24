//*****COMBAT*****//
/*global gauntlet: true */
'use strict';

var gauntlet = (function(gauntlet){

	//MAIN DOM ELEMENT//
	var mainDiv = document.getElementById('main');

	//MAIN COMBAT FUNCTION//
	gauntlet.combat = function(playerName, playerClass, playerRace, playerWeapon){

		//GENERATES RANDOM NUMBER FOR DAMAGE MULTIPLIER//
		var randomDamageMultiplier = function (min,max){
			return Math.random() * (max-min) + min;
		};

		//CALLBACK FOR CONTINUE CHECKER EVENT LISTENER//
		var continueCheckerCallback = function(event){
			if(event.target.getAttribute('id') === 'continue'){
				$('#winner-id').html('');
				mainDiv.removeEventListener('click', continueCheckerCallback);
				mainDiv.innerHTML = `<button id="attackButton">ATTACK!</button>`;
				gauntlet.combat(playerName, playerClass, playerRace, playerWeapon);
			} else if(event.target.getAttribute('id') === 'newGame'){
				$('#winner-id').html('');
				mainDiv.removeEventListener('click', continueCheckerCallback);
				gauntlet.newGame();
			}
		};

		//ADD EVENT LISTENER FOR SELECT CONTINUE/NEW GAME//
		gauntlet.continueChecker = function(){
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

		gauntlet.enemyPickShip(enemy);
		gauntlet.playerPickShip(player);

    //HANDLES FOR STAT DISPLAYS
    $('#player-name').html(playerName);
    var enemyRace = enemy.race;
    var enemyDesc = enemyRace.concat(" ", enemy.class);
    $('#enemy-desc').html(enemyDesc);

    // display the combatant health details with zero attack info
    gauntlet.combatDisplay(player, enemy, 0, 0);

		//CALLBACK FOR ATTACK BUTTON EVENT LISTENER//
		//MAIN ATTACK/DAMAGE SEQUENCE//
		gauntlet.attackSequence = function(){

      // player damage to enemy health
      var playerDamage2Enemy = randomDamageMultiplier(0.75,1.1)*player.damage;
			enemy.health -= playerDamage2Enemy;

      // enemy damage to player health
			var enemyDamage2Player = randomDamageMultiplier(0.75,1.1)*enemy.damage;
			player.health -= enemyDamage2Player;

      // display the combatant and attack details
      gauntlet.combatDisplay(player, enemy, playerDamage2Enemy, enemyDamage2Player);
		};

			//ADDS EVENT LISTENER TO ATTACK BUTTON//
			mainDiv.addEventListener("click", gauntlet.attackSequence);
		};

	return gauntlet;
})(gauntlet || {});
