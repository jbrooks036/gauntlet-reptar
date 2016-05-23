//*****COMBAT DISPLAY*****//
'use strict';

var gauntlet = (function(object){

	//MAIN COMBAT FUNCTION//
	object.combatDisplay = function(player, enemy, playerDamage2Enemy, enemyDamage2Player){

		//MAIN DOM ELEMENT//
		var mainDiv = document.getElementById('main');

    //HANDLES FOR STAT DISPLAYS
    var playerName = player.name;
    $('#player-name').html(playerName);
    var enemyRace = enemy.race;
    var enemyDesc = enemyRace.concat(" ", enemy.class);
    $('#enemy-desc').html(enemyDesc);
    $('#attack-header').html("Attack Results");

		//UPDATE ATTACK/DAMAGE STATS//

    // player damage to enemy health
    $('#player-damage-to-enemy').html(playerDamage2Enemy);
    $('#enemy-health-value').html(Math.round(enemy.health));
    console.log(`${enemyDesc}'s health`, enemy.health);

    // enemy damage to player health
    $('#enemy-damage-to-player').html(Math.round(enemyDamage2Player));
    $('#player-health-value').html(Math.round(player.health));
    console.log(`${playerName}'s health`, player.health);

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

		//ADDS EVENT LISTENER TO ATTACK BUTTON//
		mainDiv.addEventListener("click", attackSequence);
	};

	return object;
})(gauntlet || {});
