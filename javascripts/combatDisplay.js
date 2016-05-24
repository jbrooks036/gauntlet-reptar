//*****COMBAT DISPLAY*****//
/*global gauntlet: true */
'use strict';

var gauntlet = (function(object){

	//MAIN COMBAT FUNCTION//
	object.combatDisplay = function(player, enemy, playerDamage2Enemy, enemyDamage2Player){

		//MAIN DOM ELEMENT//
		var mainDiv = document.getElementById('main');

    //HANDLES FOR STAT DISPLAYS
    $('#attack-header').html("Attack Results");
    var playerName = player.name;
    $('#player-name').html(playerName);
    $('#player-as-damager').html(playerName);
    $('#player-as-damaged').html(playerName);
    var enemyRace = enemy.race;
    var enemyDesc = enemyRace.concat(" ", enemy.class);
    $('#enemy-desc').html(enemyDesc);
    $('#enemy-as-damaged').html(enemyDesc);
    $('#enemy-as-damager').html(enemyDesc);

    //BRAND-NEW GAME?
    if ((playerDamage2Enemy === 0) && (enemyDamage2Player === 0)) {
      $('#attack-card').hide();
      $('#cards').show();
      $('#enemy-health-value').html(Math.round(enemy.health));
      $('#player-health-value').html(Math.round(player.health));
    } else {
      //NOT A BRAND-NEW GAME, SO THEN SHOW AND //
      //UPDATE ATTACK/DAMAGE STATS//
      $('#attack-card').show();
      $('#line-1').show();
      $('#line-2').show();

      // player damage to enemy health
      $('#player-damage-to-enemy').html(Math.round(playerDamage2Enemy));
      $('#enemy-health-value').html(Math.round(enemy.health));

      // enemy damage to player health
      $('#enemy-damage-to-player').html(Math.round(enemyDamage2Player));
      $('#player-health-value').html(Math.round(player.health));

      //CHECKS FOR LOSERS//
      if(enemy.health <=0){
        mainDiv.removeEventListener("click", gauntlet.attackSequence);
        $('#line-1').hide();
        $('#line-2').hide();
        $('#attack-header').html("Game Over");
        $('#winner-id').html(`${playerName} Wins!`);
        
        gauntlet.continueChecker();
        return null;

      } else if(player.health <=0){
        mainDiv.removeEventListener("click", gauntlet.attackSequence);
        $('#line-1').hide();
        $('#line-2').hide();
        $('#attack-header').html("Game Over");
        $('#winner-id').html(`${enemyDesc} Wins!`);
        gauntlet.continueChecker();
        return null;
      }
    }

	};

	return object;
})(gauntlet || {});
