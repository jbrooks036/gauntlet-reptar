//*****SHIP IMAGE*****//
"use strict";
/*global gauntlet: true */

var gauntlet = (function(object){

  //DOM ELEMENT VARIABLE DECLARATIONS//
  var playerImage = document.getElementById("playerImg");
  var enemyImage = document.getElementById("enemyImg");


  //SETS IMAGE FOR PLAYER SHIP//
  object.playerPickShip = function(player){
    if (player.race === 'Federation' && player.class === 'Cruiser') {
      playerImage.setAttribute('src', "images/starfleet_cruiser.jpg");
    } else if (player.race === 'Federation' && player.class === 'Destroyer') {
      playerImage.setAttribute('src', "images/starfleet_destroyer.jpg");
    } else if (player.race === 'Klingon' && player.class === 'Cruiser') {
      playerImage.setAttribute('src', "images/klingon_cruiser.jpg");
    } else if (player.race === 'Klingon' && player.class === 'Destroyer') {
      playerImage.setAttribute('src', "images/klingon_destroyer.jpg");
    } else if (player.race === 'Vulcan' && player.class === 'Cruiser') {
      playerImage.setAttribute('src', "images/vulcan_cruiser.jpg");
    } else if (player.race === 'Vulcan' && player.class === 'Destroyer') {
      playerImage.setAttribute('src', "images/vulcan_destroyer.jpg");
    } else if (player.race === 'Romulan' && player.class === 'Cruiser') {
      playerImage.setAttribute('src', "images/romulan_cruiser.jpg");
    } else if (player.race === 'Romulan' && player.class === 'Destroyer') {
      playerImage.setAttribute('src', "images/romulan_destroyer.jpg");
    }
  };

  //SETS IMAGE FOR ENEMY SHIP//
  object.enemyPickShip = function(enemy){
    if (enemy.race === 'Federation' && enemy.class === 'Cruiser') {
      enemyImage.setAttribute('src', "images/starfleet_cruiser.jpg");
    } else if (enemy.race === 'Federation' && enemy.class === 'Destroyer') {
      enemyImage.setAttribute('src', "images/starfleet_destroyer.jpg");
    } else if (enemy.race === 'Klingon' && enemy.class === 'Cruiser') {
      enemyImage.setAttribute('src', "images/klingon_cruiser.jpg");
    } else if (enemy.race === 'Klingon' && enemy.class === 'Destroyer') {
      enemyImage.setAttribute('src', "images/klingon_destroyer.jpg");
    } else if (enemy.race === 'Vulcan' && enemy.class === 'Cruiser') {
      enemyImage.setAttribute('src', "images/vulcan_cruiser.jpg");
    } else if (enemy.race === 'Vulcan' && enemy.class === 'Destroyer') {
      enemyImage.setAttribute('src', "images/vulcan_destroyer.jpg");
    } else if (enemy.race === 'Romulan' && enemy.class === 'Cruiser') {
      enemyImage.setAttribute('src', "images/romulan_cruiser.jpg");
    } else if (enemy.race === 'Romulan' && enemy.class === 'Destroyer') {
      enemyImage.setAttribute('src', "images/romulan_destroyer.jpg");
    }
  };

  return object;
})(gauntlet || {});
