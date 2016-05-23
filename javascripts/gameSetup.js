

var gauntlet = (function(gauntlet){

	var mainDiv = document.getElementById('main');
	var playerName;
	var playerRace;
	var playerClass;
	var playerWeapon;

	var weaponSelect = function(event){
		playerWeapon = event.target.getAttribute('id');
		console.log(playerWeapon);
		mainDiv.removeEventListener('click', weaponSelect);
		mainDiv.innerHTML = `<button id="attackButton">ATTACK!</button>`;
		gauntlet.combat(playerName, playerClass, playerRace, playerWeapon);
	};

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

	var nameSelect = function(event){
		if(event.which === 13){
			playerName = event.target.value;
			mainDiv.removeEventListener('click', nameSelect);
			mainDiv.innerHTML = (
				`<div class='selectorCard' id='Federation'>Federation</div>`+
				`<div class='selectorCard' id='Klingon'>Klingon</div>`
				);
			mainDiv.addEventListener('click', raceSelect);
		}
	};

	gauntlet.newGame = function(){
		// mainDiv.innerHTML = (`<div>Start New Game</div>`);
		mainDiv.innerHTML = (`<input type='text' id='nameSelectInput'/>`);
		document.getElementById('nameSelectInput').addEventListener('keyup', nameSelect);
	};

	return gauntlet;
})(gauntlet || {});
