"use strict";

//COMBATANT CONSTRUCTOR FUNCTION
var Combatant = function(){
  this.health = 100;
  this.damage = 10;
};

// FEDERATION (RACE 1) CONSTRUCTOR FUNCTION
var Federation = function(){
  this.raceHealthModifier = 1.4;
  this.raceDamageModifier = 1.1;
};

// KLINGON (RACE 2) CONSTRUCTOR FUNCTION
var Klingon = function(){
  this.raceHealthModifier = 1.1;
  this.raceDamageModifier = 1.4;
};

// CRUISER (CLASS 1) CONSTRUCTOR FUNCTION
var Cruiser = function(){
  this.classHealthModifier = 1.2;
  this.classDamageModifier = 1.3;
};

// DESTROYER (CLASS 2) CONSTRUCTOR FUNCTION
var Destroyer = function(){
  this.classHealthModifier = 1;
  this.classDamageModifier = 1.5;
};

//LASER (WEAPON 1) CONSTRUCTOR FUNCTION
var Laser = function(){
  this.weaponDamageModifier = 1.2;
};

//PHOTON TORPEDO (WEAPON 2) CONSTRUCTOR FUNCTION
var Photon = function(){
  this.weaponDamageModifier = 1.2;
};

//PULSE CANNON (WEAPON 3) CONSTRUCTOR FUNCTION
var Pulse = function(){
  this.weaponDamageModifier = 1.2;
};

// PLAYER CONSTRUCTOR FUNCTION
var Player = function(name){
  this.name = name;
};

// ENEMEY CONSTRUCTOR FUNCTION
var Enemy = function(){
  this.enemyHealthPenalty = 0.9;
};

