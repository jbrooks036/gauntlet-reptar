//*****GAME SETUP*****//
/*global gauntlet: true */
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
			`<div class='selectorCard col-lg-12' id='Photon'>Photon</div>`+
			`<div class='selectorCard col-lg-12' id='Pulse'>Pulse</div>`+
			`<div class='selectorCard col-lg-12' id='Laser'>Laser</div>`
			);
		mainDiv.addEventListener('click', weaponSelect);
	};

	//CALLBACK FOR RACE SELECT EVENT LISTENER//
	var raceSelect = function(event){
		playerRace = event.target.getAttribute('id');
		console.log(playerRace);
		mainDiv.removeEventListener('click', raceSelect);
		mainDiv.innerHTML = (
			`<div class='selectorCard col-lg-12' id='Cruiser'>Cruiser</div>`+
			`<div class='selectorCard col-lg-12' id='Destroyer'>Destroyer</div>`
			);
		mainDiv.addEventListener('click', classSelect);
	};

	//CALLBACK FOR NAME SELECTEVENT LISTENER//
	var nameSelect = function(event){
		if(event.which === 13){
			playerName = event.target.value;
			mainDiv.removeEventListener('click', nameSelect);
			mainDiv.innerHTML = (
					`<div class='selectorCard col-lg-12' id='Federation'>Federation</div>`+
					`<div class='selectorCard col-lg-12' id='Klingon'>Klingon</div>`+
					`<div class='selectorCard col-lg-12' id='Vulcan'>Vulcan</div>`+
					`<div class='selectorCard col-lg-12' id='Romulan'>Romulan</div>`
				);
			mainDiv.addEventListener('click', raceSelect);
		}
	};

	//STARTS NEW GAME//
	gauntlet.newGame = function(){
		mainDiv.innerHTML = (`<input type='text' id='nameSelectInput' placeholder='Vessel Name'/>`);
		document.getElementById('nameSelectInput').addEventListener('keyup', nameSelect);
    $('#attack-card').hide();
    $('#cards').hide();
	};

	return gauntlet;
})(gauntlet || {});
