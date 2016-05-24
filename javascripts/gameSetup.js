//*****GAME SETUP*****//
'use strict';

var gauntlet = (function(gauntlet){

	//MAIN DOM ELEMENT//
	var mainDiv = document.getElementById('main');

	//VARAIBLE DECLARATIONS FOR PLAYER CREATION PARAMETERS//
	var playerName;
	var playerRace;
	var playerClass;
	var playerWeapon;

	//CALLBACK FOR WEAPON SELECT EVENT LISTENER//
	var weaponSelect = function(event){
		playerWeapon = event.target.getAttribute('id');
		console.log(playerWeapon);
		mainDiv.removeEventListener('click', weaponSelect);
		mainDiv.innerHTML = `<button id="attackButton">ATTACK!</button>`;
		gauntlet.combat(playerName, playerClass, playerRace, playerWeapon);
	};

	//CALLBACK FOR CLASS SELECT EVENT LISTENER//
	var classSelect = function(event){
		playerClass = event.target.getAttribute('id');
		console.log(playerClass);
		mainDiv.removeEventListener('click', classSelect);
		mainDiv.innerHTML = (
			`<div class='selectorCard' id='Photon'>Photon</div>`+
			`<div class='selectorCard' id='Pulse'>Pulse</div>`+
			`<div class='selectorCard' id='Laser'>Laser</div>`
			);
		mainDiv.addEventListener('click', weaponSelect);
	};

	//CALLBACK FOR RACE SELECT EVENT LISTENER//
	var raceSelect = function(event){
		playerRace = event.target.getAttribute('id');
		console.log(playerRace);
		mainDiv.removeEventListener('click', raceSelect);
		mainDiv.innerHTML = (
			`<div class='selectorCard' id='Cruiser'>Cruiser</div>`+
			`<div class='selectorCard' id='Destroyer'>Destroyer</div>`
			);
		mainDiv.addEventListener('click', classSelect);
	};

	//CALLBACK FOR NAME SELECTEVENT LISTENER//
	var nameSelect = function(event){
		if(event.which === 13){
			playerName = event.target.value;
			mainDiv.removeEventListener('click', nameSelect);
			mainDiv.innerHTML = (
				`<div class='selectorCard' id='Federation'>Federation</div>`+
				`<div class='selectorCard' id='Klingon'>Klingon</div>`+
				`<div class='selectorCard' id='Vulcan'>Vulcan</div>`+
				`<div class='selectorCard' id='Romulan'>Romulan</div>`
				);
			mainDiv.addEventListener('click', raceSelect);
		}
	};

	//STARTS NEW GAME//
	gauntlet.newGame = function(){
		mainDiv.innerHTML = (`<input type='text' id='nameSelectInput'/>`);
		document.getElementById('nameSelectInput').addEventListener('keyup', nameSelect);
    $('#attack-card').hide();
    $('#cards').hide();
	};

	return gauntlet;
})(gauntlet || {});
