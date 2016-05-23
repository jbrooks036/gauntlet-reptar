//*****CONSTRUCTORS*****//
"use strict";

var gauntlet = (function(object){

    //COMBATANT CONSTRUCTOR FUNCTION
    object.Combatant = function(){
      this.health = 100;
      this.damage = 10;
      this.applyModifiers = function() {
        this.health *= this.raceHealthModifier;
        this.damage *= this.raceDamageModifier;
        this.health *= this.classHealthModifier;
        this.damage *= this.classDamageModifier;
        this.health *= this.weaponHealthModifier;
        this.damage *= this.weaponDamageModifier;
        if (this.hasOwnProperty("enemyHealthPenalty")) {
            this.health *= this.enemyHealthPenalty;
        }
      };
    };

    // FEDERATION (RACE 1) CONSTRUCTOR FUNCTION
    object.Federation = function(){
      this.race = 'Federation';
      this.raceHealthModifier = 1.4;
      this.raceDamageModifier = 1.1;
    };

    // KLINGON (RACE 2) CONSTRUCTOR FUNCTION
    object.Klingon = function(){
      this.race = 'Klingon';
      this.raceHealthModifier = 1.1;
      this.raceDamageModifier = 1.4;
    };

    // VULCAN (RACE 3) CONSTRUCTOR FUNCTION
    object.Vulcan = function(){
      this.race = 'Vulcan';
      this.raceHealthModifier = 1.5;
      this.raceDamageModifier = 1.0;
    };

    // ROMULAN (RACE 4) CONSTRUCTOR FUNCTION
    object.Romulan = function(){
      this.race = 'Romulan';
      this.raceHealthModifier = 1.2;
      this.raceDamageModifier = 1.3;
    };

    // CRUISER (CLASS 1) CONSTRUCTOR FUNCTION
    object.Cruiser = function(){
      this.class = 'Cruiser';
      this.classHealthModifier = 1.2;
      this.classDamageModifier = 1.3;
    };

    // DESTROYER (CLASS 2) CONSTRUCTOR FUNCTION
    object.Destroyer = function(){
      this.class = 'Destroyer';
      this.classHealthModifier = 1;
      this.classDamageModifier = 1.5;
    };

    //LASER (WEAPON 1) CONSTRUCTOR FUNCTION
    object.Laser = function(){
      this.weaponHealthModifier = 1.2;
      this.weaponDamageModifier = 1.2;
    };

    //PHOTON TORPEDO (WEAPON 2) CONSTRUCTOR FUNCTION
    object.Photon = function(){
      this.weaponHealthModifier = 1.2;
      this.weaponDamageModifier = 1.2;
    };

    //PULSE CANNON (WEAPON 3) CONSTRUCTOR FUNCTION
    object.Pulse = function(){
      this.weaponHealthModifier = 1.2;
      this.weaponDamageModifier = 1.2;
    };

    // PLAYER CONSTRUCTOR FUNCTION
    object.Player = function(name){
      this.name = name;
    };

    // ENEMEY CONSTRUCTOR FUNCTION
    object.Enemy = function(){
      this.enemyHealthPenalty = 0.9;
      this.allowedRaces = ["Federation", "Klingon"];
      this.allowedClasses = ["Cruiser", "Destroyer"];
      this.allowedWeapons = ["Laser", "Photon", "Pulse"];
    };

    return object;
})(gauntlet || {});
