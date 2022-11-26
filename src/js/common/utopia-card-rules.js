var module = angular.module("utopia-card-rules", ["utopia-valueof"]);

module.filter( "shipCardNamed", [ "$filter", function($filter) {

	var upgradeSlotsFilter = $filter("upgradeSlots");

	return function( ship, name ) {

		if( ship.name == name )
			return ship;

		if( ship.captain && ship.captain.name == name )
			return ship.captain;

		var match = false;
		$.each( upgradeSlotsFilter(ship), function(i, slot) {
			if( slot.occupant && slot.occupant.name == name ) {
				match = slot.occupant;
				return false;
			}
		});

		return match;

	}

}]);

module.filter( "fleetCardNamed", [ "$filter", function($filter) {

	var shipCardNamed = $filter("shipCardNamed");

	return function( fleet, name ) {

		if( !fleet ) {
			return false;
		}

		var match = false;
		$.each( fleet.ships, function(i, ship) {
			match = shipCardNamed(ship, name);
			if( match )
				return false;
		});

		return match;

	}

}]);


module.factory( "$factions", [ "$filter", function($filter) {
	var valueOf = $filter("valueOf");
	var factions = {
		hasFaction: function(card, faction, ship, fleet) {
			if( !card )
				return false;
			return $.inArray( faction, valueOf(card,"factions",ship,fleet) ) >= 0;
		},
		match: function(card, other, ship, fleet) {
			var match = false;
			$.each( valueOf(card,"factions",ship,fleet), function(i, cardFaction) {
				$.each( valueOf(other,"factions",ship,fleet), function(i, otherFaction) {
					if( cardFaction == otherFaction ) {
						match = true;
						return false;
					}
				});
				if( match )
					return false;
			});
			return match;
		},
		list: [ "Federation", "Klingon", "Vulcan", "Romulan", "Bajoran", "Dominion", "Independent", "Borg", "Ferengi", "Species 8472", "Kazon", "Mirror Universe", "Xindi", "Q Continuum" ],
	}
	factions.listCodified = $.map( factions.list, function(name) {
		return name.toLowerCase().replace(/ /g,"-");
	} );
	return factions;
}]);

module.factory( "cardRules", [ "$filter", "$factions", function($filter, $factions) {

	var valueOf = $filter("valueOf");

	var onePerShip = function(name) {
		return function(upgrade,ship,fleet) {

			var alreadyEquipped = false;
			var slots = $filter("upgradeSlots")(ship);
			$.each( slots, function(i,slot) {
				if( slot.occupant && slot.occupant != upgrade && slot.occupant.name == name ) {
					alreadyEquipped = true;
				}
			});
			return !alreadyEquipped;

		};
	};

	var upgradeTypes = ["crew","weapon","tech","talent","question","borg"];

	var isUpgrade = function(card) {
		return $.inArray( card.type, upgradeTypes ) >= 0;
	};

	var resolve = function(card,ship,fleet,value) {
		return value instanceof Function ? value(card,ship,fleet) : value;
	};

	var hasFaction = $factions.hasFaction;

	//Add a new var to serch for the value of the modifyer "Printed Value"
//	var printedValue = upgrade.printedValue;


	var cloneSlot = function(count, slot) {
		var slots = [slot];
		for( var i = 1; i < count; i++ )
			slots.push( angular.copy(slot) );
		return slots;
	};

	var createFirstMajeSlot = function() {
		return {
			type: ["talent"],
			rules: "First Maje Only",
			hide: function(slot,ship,fleet) {
				return !hasFaction(ship.captain,"kazon",ship,fleet);
			},
			intercept: {
				ship: {
					canEquip: function(card,ship,fleet,canEquip) {
						console.log(canEquip);
						if( card.name != "First Maje" )
							return false;
						return canEquip;
					}
				}
			}
		}
	}

	var getSlotType = function(upgrade,ship) {
		var type = ["weapon"];
		$.each( $filter("upgradeSlots")(ship), function(i, slot) {
			if( slot.occupant && slot.occupant.name == upgrade.source ) {
				//console.log(slot.type, i);
				type = slot.type;
				return false;
				}
			}
		);

		return type;
	}

	/**
	 * A function to check if assigned upgrade type matches or slot matches as appropriate
	 *
	 * @param {string} type Upgrade/Slot type to check against
	 * @param {Object} upgrade The upgrade who's assigned slot we want to check
	 * @param {Object} ship The current assigned ship
	 * @returns {boolean}
	 */
	var checkUpgrade = function(type, upgrade, ship){
		/** Default return value is false */
		var returnValue = false;

		if (upgrade.type == type)
			returnValue = true;

		/** Only check for question type upgrades with countsAsUpgrade set to true */
		else if (upgrade.type == "question" && upgrade.countsAsUpgrade) {
			/** List of slots on current ship */
			var slots = $filter("upgradeSlots")(ship);

			/** Loop over all of the slots on the ship */
			for ( var i = 0; i < slots.length; i++){

				/** See if the slot is occupied by the upgrade and is the right type */
				if (slots[i].occupant &&
					  slots[i].occupant.id == upgrade.id &&
					  $.inArray(type, slots[i].type) > -1){

						/** If so, set to return true and break out of the loop */
						returnValue = true;
						break;
				}
			}
		}
		return returnValue;
	}

	return {

	//Generic Captains
		//Federation
		"captain:Cap101":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Bajoran
		"captain:Cap112":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Vulcan
		"captain:Cap115":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}
		},
		//independent
		"captain:Cap111":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Ferengi
		"captain:Cap114":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Kazon
		"captain:Cap113":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Xindi
		"captain:Cap116":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}
		},
//Klingon Blood Oath Pack

//Dahar Master
	"talent:E208": {
		canEquipFaction: function(upgrade,ship,fleet) {
			return (ship.captain && (ship.captain.name == "Kor" || ship.captain.name == "Koloth" || ship.captain.name == "Kang"));
		},
    intercept: {
		fleet: {
			// Add Skill to Kor, Koloth and Kang
			skill: function(card,ship,fleet,skill) {
				if( card == ship.captain && ((card.name == "Kor") || (card.name == "Kang") || (card.name == "Koloth")))
					return resolve(card,ship,fleet,skill) + 1;
				return skill;
			}
		}
	}
},

//Kor
	"captain:Cap004": {
		upgradeSlots: [ {
			type: ["talent"],
			rules: "May equip Dahar Master Elite Talent for 0 SP",
			intercept: {
				ship: {
					// Dahar Master for free
					cost: function(upgrade, ship, fleet, cost) {
					if( upgrade.name == "Dahar Master" )
							return 0;
						return cost;
					},
				}
			}
		} ]
},

//I.K.S. K'Tanco
	"ship:S336": {
		upgradeSlots: [ {
			type: ["tech"],
			rules: "Klingon Upgrade, 4 SP cost or less",
			canEquip: function(upgrade) {
				return (upgrade.factions == "klingon" && upgrade.cost <= 4);
			},
			intercept: {
				ship: {
					cost: function() { return 0; }
				}
			}
		} ]
	},

//Waylay
"weapon:W217":{
	attack: 0,
	intercept: {
		self: {
			// Attack is same as ship primary + 1
			attack: function(upgrade,ship,fleet,attack) {
				if( ship )
					return valueOf(ship,"attack",ship,fleet);
				return attack;
			}
		}
	},
	canEquipFaction: function(upgrade,ship,fleet) {
		return ship.hull <= 3;
  },
},

//Concussive Charges
"weapon:W216":{
	attack: 0,
	intercept: {
		self: {
			// Attack is same as ship primary
			attack: function(upgrade,ship,fleet,attack) {
				if( ship )
					return valueOf(ship,"attack",ship,fleet);
				return attack;
			}
		}
	},
	canEquipFaction: function(upgrade,ship,fleet) {
		return hasFaction(ship,"klingon", ship, fleet);
   }
},

//A Death Worthy of Sto-Vo-Kor
"talent:E209":{
	canEquipFaction: function(upgrade,ship,fleet) {
		return hasFaction(ship.captain,"klingon", ship, fleet);
}},

//Science Station
"tech:T273":{
	upgradeSlots: [
		{
			type: ["tech"]
		}
	]
},

//Federation Boldly Go Pack

//Leyton
"admiral:A037":{
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
	}},

// Keogh
"ship:S342": {
intercept: {
	ship: {
		// Federation weapons are -1 SP
		cost: function(upgrade, ship, fleet, cost) {
		if( ( $factions.hasFaction(upgrade,"federation", ship, fleet) || $factions.hasFaction(upgrade,"bajoran", ship, fleet) || $factions.hasFaction(upgrade,"vulcan", ship, fleet) ) && upgrade.type == "weapon" )
				return resolve(upgrade, ship, fleet, cost) - 1;
			return cost;
		}
	}
}
},

// Keogh
"captain:Cap007": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},

// Worf
"captain:Cap009": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},

// Leyton
"captain:Cap010": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},

// Ben Sisko
"captain:Cap006": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},
// Jadzia Dax
"captain:Cap008": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	},
	// No faction penalty for Klingon Talent.
	upgradeSlots: cloneSlot( 1 ,
		{
			type: ["talent"],
			rules: "No Faction Penalty for Klingon Elite Talent",
			intercept: {
				ship: {
					factionPenalty: {
						priority: 100,
						fn: function(card,ship,fleet,factionPenalty) {
							if( card.factions == "klingon" )
								return 0;
							return factionPenalty;
						}
					}
				}
			}
		}
	)
},

// Experimental Torpedo Bay
"weapon:W215": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	},
	// Upgrade slot for torpedo only of printed cost 5 or less
	upgradeSlots: [ {
 	 type: ["weapon"],
 	 rules: "Torpedo Upgrade with Printed Cost 5 or less.",
	 faceDown: true,
 	 canEquip: function(upgrade) {
		 	return (upgrade.id == "W204" || upgrade.id == "W192" || upgrade.id == "W191" || upgrade.id == "W183" || upgrade.id == "W177" || upgrade.id == "W161" || upgrade.id == "W160" || upgrade.id == "W158" || upgrade.id == "W157"  || upgrade.id == "W008" || upgrade.id == "W004" || upgrade.id == "W003" || upgrade.id == "W002" || upgrade.id == "W009" || upgrade.id == "W154" || upgrade.id == "W152" || upgrade.id == "W145" || upgrade.id == "W142" || upgrade.id == "W141" || upgrade.id == "W137" || upgrade.id == "W128" || upgrade.id == "W122" || upgrade.id == "W120" || upgrade.id == "W119" || upgrade.id == "W118" || upgrade.id == "W117" || upgrade.id == "W116" || upgrade.id == "W114" || upgrade.id == "W112" || upgrade.id == "W105" || upgrade.id == "W100" || upgrade.id == "W088" || upgrade.id == "W082" || upgrade.id == "W081" || upgrade.id == "W079" || upgrade.id == "W078" || upgrade.id == "W074" || upgrade.id == "W072" || upgrade.id == "W067" || upgrade.id == "W059" || upgrade.id == "W050" || upgrade.id == "W039" || upgrade.id == "W038" || upgrade.id == "W031" || upgrade.id == "W195" || upgrade.id == "W016" || upgrade.id == "W119");
			},
			intercept: {
				ship: {
					cost: function() { return 0; }
				}
			}
 	} ]
},

// Metaphasic Sweep
"tech:T272": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},
// Ablative Armor
"tech:T271": {
	canEquip: function(upgrade,ship,fleet) {
		return ship.class.indexOf( "Defiant Class" ) >= 0;
	},
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},
// Experimental Torpedo Bay
"weapon:W215": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	},
	upgradeSlots: [
		{
			type: ["weapon"],
			rules: "Torpedo, 5 SP of less",
			faceDown: true,
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet) {
						// TODO Prevent use of upgrades without a defined cost (e.g. Dorsal Phaser Array)
						var cost = valueOf(upgrade,"cost",ship,fleet);
						return cost <= 5;
					return canEquip;
					},
					free: function() {
						return true;
					}
				}
			}
		}
	]
},
// Advanced Shields
"tech:T270": {
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	},
	canEquipFaction: function(upgrade,ship,fleet) {
		return hasFaction(ship,"federation", ship, fleet) && ship.hull >= 5;
  },
	intercept: {
		ship: {
			shields: function(card,ship,fleet,shields) {
				if( card == ship )
					return resolve(card,ship,fleet,shields) + 2;
				return shields;
			}
		}
	}
},
// Dorsal Torpedo Pod
"weapon:W214": {
	canEquip: function(upgrade,ship,fleet) {
		return ship.class.indexOf( "Akira Class" ) >= 0;
	},
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},
// Phaser Cannons
"weapon:W213": {
	canEquip: function(upgrade,ship,fleet) {
		return ship.class.indexOf( "Defiant Class" ) >= 0;
	},
	factionPenalty: function(upgrade, ship, fleet) {
		return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
	}
},
	//Enrique Muniz
	"crew:C374":{
		factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
		}
	},
	//Sarita Carson
	"crew:C373":{
		factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
		}
	},
	//Ezri Dax
	"crew:C372":{
		factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
		},
		upgradeSlots: [	{ type: ["crew"] } ]
	},
	//Julian Bashir
	"crew:C371":{
		factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
		}
	},
	//Kira Nerys
	"crew:C370":{
		factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
		}
	},

//Alliance
		//Photon Torpedoes
		"weapon:W204":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary + 1
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet) + 1;
						return attack;
					}
				}
			}
		},

    //Battle-Hardened
		"talent:E202":{
			canEquip: onePerShip("Battle-Hardened")},

		//Calculating
	   "talent:E200":{
			canEquip: onePerShip("Calculating")},

		//Full Spread
	   "weapon:W201":{
			canEquip: onePerShip("Full Spread")},

		//Enhanced Targeting
		 "weapon:W207":{
			canEquip: onePerShip("Enhanced Targeting")},

		//Overcharged Phasers
		 "weapon:W205":{
			canEquip: onePerShip("Overcharged Phasers")},

	  //Dorsal Phaser Array
		 "weapon:W203":{
			canEquip: onePerShip("Dorsal Phaser Array")},

		//Detection Grid
		 "tech:T255":{
			canEquip: onePerShip("Detection Grid")},

		//Reinforced Shielding
		 "tech:T253":{
			canEquip: onePerShip("Reinforced Shielding")},

		//Commander
		 "crew:C362":{
			canEquip: onePerShip("Commander")},

		//Tactical Officer
		 "crew:C360":{
			canEquip: onePerShip("Tactical Officer")},

		//Helmsman
		 "crew:C361":{
			canEquip: onePerShip("Helmsman")},

		//Science Officer
		 "crew:C358":{
			canEquip: onePerShip("Science Officer")},

	  //Operations Officer
		 "crew:C359":{
			canEquip: onePerShip("Operations Officer")},

		//Generic Captain 0 XP
			"captain:Cap118": {
				intercept: {
					ship: {
						/**
						 * Cost function for 0 XP Star Trek Alliance Captain
						 *
						 * Removes Ship cost.
						 */
						cost: function(card,ship,fleet,cost) {
							var modifier = 0;

							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
							if ( card.type == "ship" )
								modifier = 30
								return resolve(card, ship, fleet, cost) - modifier;
							}
						}
					}
				},

			//Generic Captain 1 XP
					"captain:Cap119": {
						intercept: {
							ship: {
								/**
								 * Cost function for 1 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;

									// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 3 XP
					"captain:Cap121": {
						upgradeSlots: [
							{},{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 3 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 4 or 5 XP
					"captain:Cap122": {
						upgradeSlots: [
							{},{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 4 or 5 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
								// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 6 or 7 XP
					"captain:Cap123": {
						upgradeSlots: [
							{},{},{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 6 or 7 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 8 or 9 XP
					"captain:Cap124": {
					upgradeSlots: [
							{},{},{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 8 or 9 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 10 or 11 XP
					"captain:Cap125": {
						upgradeSlots: [
							{},{},{
								type: ["tech","weapon","crew"]
							},
							{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 10 or 11 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 12 XP
					"captain:Cap126": {
						upgradeSlots: [
							{},{},{
								type: ["tech","weapon","crew"]
							},
							{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 12 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
			//Generic Captain 13 XP
					"captain:Cap127": {
						upgradeSlots: [
							{},{},{},{
								type: ["tech","weapon","crew"]
							},
							{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
							ship: {
								/**
								 * Cost function for 13 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
		//Generic Captain 14 XP
					"captain:Cap128": {
						upgradeSlots: [
							{},{},{},{
								type: ["tech","weapon","crew"]
							},
							{
								type: ["tech","weapon","crew"]
							}
						],
						intercept: {
						ship: {
								/**
								 * Cost function for 14 XP Star Trek Alliance Captain
								 *
								 * Removes Ship cost.
								 */
								cost: function(card,ship,fleet,cost) {
									var modifier = 0;
							// If we have intercepted the ship card, factor in the discount, if over 30 it won't work.
									if ( card.type == "ship" )
										modifier = 30
										return resolve(card, ship, fleet, cost) - modifier;
									}
								}
							}
						},
						//Reinforced Shielding
						"tech:T253":{
							canEquip: onePerShip("Reinforced Shielding"),
							intercept: {
								ship: {
									shields: function(card,ship,fleet,shields) {
										if( card == ship )
											return resolve(card,ship,fleet,shields) + 2;
										return shields;
									}
								}
							}
						},
	//Core Starter Set :71120
		//Will Riker 6
		"captain:Cap646":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Jean-Luc Picard 9
		"captain:Cap906":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Engage
		"talent:E132":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Worf
		"crew:3002":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Miles O'Brien
		"crew:3003":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Geordi La Forge
		"crew:3004":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Data
		"crew:3005":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Photon Torpedoes
		"weapon:W122":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Antimatter Mines
		"weapon:W121":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		// Photon Torpedoes (Vor'cha Bonus)
		"weapon:W120": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Vor'cha Class" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},

	//Gor Portas : 71128
		// Thot Gor
		"captain:Cap641": {
			// Reduce cost of all weapons by 1 SP
			intercept: {
				ship: {
					cost: function(upgrade, ship, fleet, cost) {
						var calculatedCost = cost;
						if( checkUpgrade("weapon", upgrade, ship) )
							calculatedCost = resolve(upgrade, ship, fleet, cost) - 1;
						return calculatedCost;
					}
				}
			}
		},
		//Energy Dissipator
		"weapon:W111": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Breen") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//Kraxon :71127

	//IKS Negh'var :71126
		// Photon Torpedoes (Negh'var Bonus)
		"weapon:W114": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Negh'var Class" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},

	//IKS Gr'oth :71125
		"crew:C191":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
	//RIS Apnex :71124
		// Varel
		"crew:C193": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Romulan Science Vessel" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Muon Feedback Wave
		"tech:T247": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Science Vessel";
			}
		},


	//IRW Valdore :71123

	//USS Enterprise :71122
		// Christopher Pike
		"captain:Cap644": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			// Reduce cost of all crew by 1 SP
			intercept: {
				ship: {
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("crew", upgrade, ship) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					}
				}
			}
		},
		// James T. Kirk
		"captain:Cap905": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			// Two talent slots. Cost is overridden to be 3.
			upgradeSlots: cloneSlot( 2 ,
				{
					type: ["talent"],
					rules: "Fed Talents Cost Exactly 3 SP",
					faceDown: true,
					intercept: {
						ship: {
							cost: function(upgrade,ship,fleet,cost) {
							if( hasFaction(upgrade,"federation",ship,fleet) || hasFaction(upgrade,"bajoran",ship,fleet) || hasFaction(upgrade,"vulcan",ship,fleet) )
								return 3;
							return cost;
							}
						}
					}
				}
			)
		},

		//Cheat Death
		"talent:E128":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Cochrane Deceleration Maneuver
		"talent:E127":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Corbomite Maneuver
		"talent:E126":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Leonard McCoy
		"crew:C200":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Hikaru Sulu
		"crew:C199":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Mr. Spock
		"crew:C198":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Nyota Uhura
		"crew:C197":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Montgomery Scott
		"crew:C196":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Photon Torpedoes
		"weapon:W118":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},


	//USS Reliant :71121
		//Clark Terell 2010
		"captain:Cap217":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		// Khan Singh
		"captain:Cap814": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// No faction penalty for upgrades
					factionPenalty: function(card, ship, fleet, factionPenalty) {
						if( isUpgrade(card) )
							return 0;
						return factionPenalty;
					}
				}
			}
		},
		//I Stab at Thee
		"talent:E130":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Superior Intellect
		"talent:E129":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Kyle
		"crew:C204":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Pavel Chekov
		"crew:C203":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Follower of Khan
		"crew:C202":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Joachim
		"crew:C201":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},


	//GenCon 2013 Promo
		//Khan Singh
		"captain:Cap645":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// No faction penalty for Khan or Talents
					factionPenalty: function(upgrade, ship, fleet, factionPenalty) {
						return upgrade.type == "captain" || upgrade.type == "talent" ? 0 : factionPenalty;
					}
				}
			}
		},


	//Krayton : OP1Prize
	"captain:Cap531":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
	"talent:E122":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
	"crew:C186":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
	"weapon:W110":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
	"tech:T243":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},


	//5th Wing Patrol Ship :71271
		// Luaran
		"captain:Cap325": {
			// One Dominion upgrade is -2 SP. Argh.
			// This is a messy implementation. It requires recalculation of the candidate for each upgrade on the ship.
			intercept: {
				ship: {
					cost: function(upgrade,ship,fleet,cost) {

						var candidate = false;
						var candCost = 0;

						// Find the upgrade with the highest cost
						$.each( $filter("upgradeSlots")(ship), function(i, slot) {
							if( slot.occupant && $factions.hasFaction(slot.occupant,"dominion", ship, fleet) ) {
								// Note: This doesn't account for other cost modifiers. Can't use valueOf without huge recursion.
								var occCost = resolve(slot.occupant,ship,fleet,slot.occupant.cost);
								if( occCost > candCost ) {
									candidate = slot.occupant;
									candCost = occCost;
								}
							}
						});

						// Modify cost only if this is the candidate upgrade
						if( upgrade == candidate )
							cost = candCost - 2;

						return cost;

					}
				}
			}
		},
		// Suicide Attack
		"tech:T236": {
			canEquip: function(upgrade,ship,fleet) {
				return ship && ship.class.indexOf("Jem'Hadar") >= 0;
			}
		},
		// Phased Polaron Beam
		"weapon:W103": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Jem'Hadar") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Omet'Iklan
		"crew:C178": {
			canEquip: function(upgrade,ship,fleet) {
				return ship && ship.class.indexOf("Jem'Hadar") >= 0;
			}
		},
		// Virak'Kara
		"crew:C177": {
			canEquip: function(upgrade,ship,fleet) {
				return ship && ship.class.indexOf("Jem'Hadar") >= 0;
			}
		},
		// Toman'Torax
		"crew:C176": {
			canEquip: function(upgrade,ship,fleet) {
				return ship && ship.class.indexOf("Jem'Hadar") >= 0;
			}
		},


	//I.R.W. Praetus :71270

	//I.K.S. Kronos One :71269

	//U.S.S. Defiant :71268
		//Kira Nerys
		"captain:Cap326":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Benjamin Sisko
		"captain:Cap639":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Quantum Torpedoes
		"weapon:W107":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Cloaking Device (Defiant)
		"tech:T240": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.name != "U.S.S. Defiant" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Worf
		"crew:C183":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Attack Pattern Delta
		"talent:E119":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Attack Pattern Omega
		"talent:E118":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Jadzia Dax
		"crew:C182":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Miles O'Brien
		"crew:C181":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},


	//Red Shirt Crew
		"crew:C175":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},


	//IKS Ch'tang :OP2Prize

	//P.W.B. Aj'Rmr :OP3Prize

	//Koranak :71275
		// Enhanced Weaponry
		"weapon:W102": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class.indexOf("Keldon Class") >= 0 )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},
		// Cloaking Device (Keldon)
		"tech:T233": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Keldon Class") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//R.I.S. Vo :71274

	//I.K.S. Koraga :71273

	//U.S.S. Excelsior :71272
		// Styles
		"captain:Cap323": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			]
		},
		//Hikaru Sulu
		"captain:Cap636":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Feint
		"talent:E115":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Dmitri Valtane
		"crew:C171":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Janice Rand
		"crew:C170":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Lojur
		"crew:C169":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Positron Beam
		"tech:T232":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Transwarp Drive
		"tech:T231":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},


	//U.S.S. Sutherland :OP4Prize
		//Data
		"captain:Cap430":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Disobey Orders
		"talent:E113":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Christopher Hobson
		"crew:C167":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Secondary Torpedo Launcher
		"weapon:W100":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//High Energy Sensor Sweep
		"tech:T229":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},


	//I.K.S. Somraw :71448
		// Klingon Honor
		"talent:E111": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"klingon", ship, fleet);
			}
		},
		// Shockwave
		"tech:T225": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Raptor Class";
			}
		},
		// Tactical Sensors
		"tech:T224": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Raptor Class";
			}
		},


	//4th Division Battleship :71279
		"captain:Cap717": {
			// Two crew slots, each with -1 SP if equipped with Dominion crew
			upgradeSlots: [{/* Existing Talent Slot */} ].concat( cloneSlot( 2 ,
				{
					type: ["crew"],
					rules: "-1 SP if Dominion",
					intercept: {
						ship: {
							cost: function(upgrade, ship, fleet, cost) {
								if( $factions.hasFaction(upgrade,"dominion", ship, fleet) )
									return resolve(upgrade, ship, fleet, cost) - 1;
								return cost;
							}
						}
					}
				}
			))
		},
		// Kudak'Etan
		"crew:C159": {
			canEquip: function(upgrade,ship,fleet) {
				return ship && ship.class.indexOf("Jem'Hadar") >= 0;
			}
		},
		// Ikat'Ika
		"crew:C157": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Jem'Hadar") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Photon Torpedoes (Jem'Hadar Battleship Bonus)
		"weapon:W097": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Jem'Hadar Battleship" )
							return resolve(upgrade,ship,fleet,attack) + 2;
						return attack;
					}
				}
			}
		},
		// Phased Polaron Beam
		"weapon:W096": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Jem'Hadar") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//I.R.W. Gal Gath'thong :71278

	//U.S.S. Equinox :71276
		//Maxwell Burke
		"captain:Cap215":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Rudolph Ransom
		"captain:Cap429":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Marla Gilmore
		"crew:C165":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Noah Lessing
		"crew:C164":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Emergency Medical Hologram
		"crew:C163":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		"tech:T227":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Navigational Deflector
		"tech:T226":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},


	//Rav Laerst :OP5Prize
		// Cold Storage Unit
		"tech:T228": {
			upgradeSlots: [
				{
					type: ["weapon"]
				},
				{
					type: ["weapon"]
				}
			]
		},


	//Akorem :OP6Prize
		//Kira Nerys
		"captain:Cap525":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Tahna Los
		"captain:Cap524": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			// Add a Tech slot. Cost = 3. Can't have a ship/class specific restriction
			// TODO Add check for ship/class restriction. Woe is me.
			upgradeSlots: [
				{/* Existing Talent Slot */},
				{
					type: ["tech"],
					rules: "Costs exactly 3 SP",
					intercept: {
						ship: {
							//Upgrades cost 3 SP
							cost: function(card,ship,fleet,cost) {
							if( !$factions.match( card, ship, ship, fleet ) )
								return 4;
							else if( $factions.match( card, ship, ship, fleet ) )
								return 3;
							return cost;
							}
						}
					}
				}
			]
		},

		//Blockade
		"talent:E107":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// I Am Kohn-Ma
		"talent:E106": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"bajoran", ship, fleet);
			}
		},
		//Li Nalas
		"crew:C156":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Day Kannu
		"crew:C155":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Borg Sphere 4270 :71283
		// Cutting Beam
		"weapon:W094": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"borg", ship, fleet);
			}
		},


		//Rettik
		"captain:Cap214":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Culluh
		"captain:Cap427":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Kazon Raiding Party
		"crew:C152": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"kazon", ship, fleet);
			}
		},
		// Masking Circuitry
		"tech:T217": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"kazon", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Seska
		"crew:C150":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Tierna
		"crew:C146":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Photonic Charges
		"weapon:W091":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Bioship Alpha :71281
		// Bio-Electric Interference
		"tech:T221": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"species-8472", ship, fleet);
			}
		},
		// Extraordinary Immune Response
		"tech:T219": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"species-8472", ship, fleet);
			}
		},
		// Quantum Singularity
		"tech:T216": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"species-8472", ship, fleet);
			}
		},
		// The Weak Will Perish
		"talent:E104": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"species-8472", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Biological Attack
		"weapon:W095": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"species-8472", ship, fleet);
			}
		},
		// Energy Blast
		"weapon:W093": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Species 8472 Bioship" )
							return resolve(upgrade,ship,fleet,attack) + 2;
						return attack;
					}
				}
			}
		},
		// Energy Focusing Ship
		"weapon:W092": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"species-8472", ship, fleet);
			}
		},


	//U.S.S. Voyager :71280
		//Chakotay
		"captain:Cap523":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Kathryn Janeway
		"captain:Cap812":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Ablative Generator
		"tech:T222": {
			// Equip only on Voyager
			canEquip: function(upgrade,ship,fleet) {
				return ship.name == "U.S.S. Voyager";
			}
		},
		// B'elanna Torres
		"crew:C154": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			name: "B'Elanna Torres",
			upgradeSlots: [ { type: ["weapon"] }, { type: ["tech"] } ]
		},
		//Bio-Neural Circuitry
		"tech:T220":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Harry Kim
		"crew:C153":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Sacrifice
		"talent:E105":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Seven of Nine
		"crew:C148":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//The Doctor
		"crew:C147":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Tuvok
		"crew:C144":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//The Doctor (Tech)
		"tech:T215":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Transphasic Torpedoes
		"weapon:W090": {
			// Equip only on Voyager
			canEquip: function(upgrade,ship,fleet) {
				return ship.name == "U.S.S. Voyager";
			}
		},
		//Tom Paris
		"crew:C145": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Red Alert Talent
		"talent:E102":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Tholia One :OPWebPrize
		//Loskene
		"captain:Cap426":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Tholian Punctuality
		"talent:E103": {
			canEquipFaction: function(upgrade,ship,fleet) {
				// TODO Tholians are Independent so can't easily tell their race
				return ship.captain && ( ship.captain.name == "Loskene" || ship.captain.name.indexOf("Tholian") >= 0 );
			}
		},
		// Energy Web
		"weapon:W089": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Tholian Vessel";
			}
		},
		//Plasma Torpedoes
		"weapon:W088":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Full Alert Talent
		"talent:E097":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//S'Gorn :OPArenaPrize
		//Gorn Commander
		"captain:Cap425":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Jammed Communications
		"tech:T209":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Gorn Pilot
		"crew:C138":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Impulse Overload
		"tech:T208":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Faked Messages
		"talent:E098":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//D'Kyr :71446
		// Tavek
		"captain:Cap322": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			},
			// Add one crew slot
			upgradeSlots: [
				{
					type: ["crew"]
				}
			]
		},
		//Soval
		"captain:Cap715":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Muroc
		"crew:C143":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//T'Pol
		"crew:C142":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Auxiliary Control Room
		"tech:T214":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Sensor Grid
		"tech:T213":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		// Vulcan High Command
		"talent:E101": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain &&  $factions.hasFaction(ship,"vulcan", ship, fleet) &&  $factions.hasFaction(ship.captain,"vulcan", ship, fleet);
			},
			upgradeSlots: cloneSlot( 2 , { type: ["tech","crew"] } )
		},
		//Photonic Weapon
		"weapon:W087":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Aft Particle Beam
		"weapon:W086":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},


	//Interceptor 5 :71445
		//Lenaris Holem"
		"captain:Cap321":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Hazar
		"captain:Cap714":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Neela
		"crew:C141":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Anara
		"crew:C140":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Warp Drive Refit
		"tech:T212": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				if ( ship && ship.classData && ship.classData.maneuvers && ship.classData.maneuvers.max )
					return ( ship.classData.maneuvers.max < 4 );
				return false;
			}
		},
		// Maneuverability
		"tech:T211": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Bajoran Interceptor" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Militia
		"talent:E100":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Phaser Strike
		"weapon:W085": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 3;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Bajoran Interceptor" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//Tactical Cube :71444
		"ship:S139": {
			intercept: {
				ship: {
					// Reduce cost of Borg Ablative Hull Armor
					cost: function(upgrade, ship, fleet, cost) {
						if( upgrade.name == "Borg Ablative Hull Armor" )
							return resolve(upgrade, ship, fleet, cost) - 3;
						return cost;
					}
				}
			}
		},
		// Assimilated Access Codes
		"talent:E099": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"borg", ship, fleet);
			}
		},
		// Full Assault
		"weapon:W084": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Borg Tactical Cube" )
							return resolve(upgrade,ship,fleet,attack) + 3;
						return attack;
					}
				}
			}
		},
		// Borg Missile
		"weapon:W083": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"borg", ship, fleet);
			}
		},


	//3rd Wing Attack Ship :3rd_wing_attack_ship
		// First Strike
		"talent:E093": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 3;
			}
		},
		// Ion Thrusters
		"tech:T204": {
			// Only one per ship
			canEquip: onePerShip("Ion Thrusters")
		},


	//Gavroche :gavroche
		//Michael Eddington
		"captain:Cap633":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Lon Suder
		"crew:C135":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Sakonna
		"crew:C134": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["weapon"]
				}
			],
			intercept: {
				ship: {
					cost: {
						// Run this interceptor after all other penalties and discounts
						priority: 100,
						fn: function(upgrade,ship,fleet,cost) {
							if( checkUpgrade("weapon", upgrade, ship)
							     && upgrade.name != "Torpedo Fusillade" && upgrade.id != "W057" && upgrade.name != "Aft Phaser Emitters" && upgrade.id != "W156" && upgrade.id != "W199") {
								cost = resolve(upgrade,ship,fleet,cost);
								if( cost <= 5 )
									cost -= 2;
							}
							return cost;
						}
					}
				}
			}
		},
		//Hijack
		"talent:E094":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Focused Particle Beam
		"weapon:W080":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//I.K.S. B'Moth :i_k_s_b_moth

	//I.R.W. Vorta Vor :i_r_w_vorta_vor

	//U.S.S. Yeager :u_s_s_yaeger
		//Benjamin Maxwell
		"captain:Cap712":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Preemptive Strike
		"talent:E092":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Elizabeth Shelby
		"crew:C132":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Reginald Barclay
		"crew:C131":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes - Yeager
		"weapon:W078":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Ti'Mur :71508
		// Vanik
		"captain:Cap522": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// All Vulcan/Federation tech is -2 SP
					cost: function(upgrade, ship, fleet, cost) {
					if( ( $factions.hasFaction(upgrade,"federation", ship, fleet) || $factions.hasFaction(upgrade,"bajoran", ship, fleet) || $factions.hasFaction(upgrade,"vulcan", ship, fleet) ) && upgrade.type == "tech" )
							return resolve(upgrade, ship, fleet, cost) - 2;
						return cost;
					},
				}
			}
		},
		// Combat Vessel Variant
		"tech:T201": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Suurok Class";
			},
			intercept: {
				ship: {
					attack: function(card,ship,fleet,attack) {
						if( card == ship )
							return resolve(card,ship,fleet,attack) + 1;
						return attack;
					},
					hull: function(card,ship,fleet,hull) {
						if( card == ship )
							return resolve(card,ship,fleet,hull) + 1;
						return hull;
					}
				}
			}
		},
		//Tractor Beam
		"tech:T200":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Diplomacy
		"talent:E086":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Koss
		"crew:C116":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},


	//2nd Division Cruiser :71524
		// Unnecessary Bloodshed
		"talent:E087": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"dominion", ship, fleet);
			}
		},
		// Volley of Torpedoes
		"weapon:W075": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Jem'Hadar Battleship" || ship.class == "Jem'Hadar Battleship " || ship.class == "Jem'Hadar Battle Cruiser";
			}
		},


	//U.S.S. Enterprise (Refit) :71523
		//Will Decker
		"captain:Cap320":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Mr. Spock
		"captain:Cap631":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//James T. Kirk
		"captain:Cap809":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A026":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		//The Needs of the Many...
		"talent:E091":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Leonard McCoy
		"crew:C130":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Saavik
		"crew:C129":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Ilia
		"crew:C128":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Hikaru Sulu
		"crew:C127":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Self-Destruct Sequence
		"talent:E090": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "federation", ship, fleet ) || $factions.hasFaction(ship,"bajoran",ship,fleet) || $factions.hasFaction(ship,"vulcan",ship,fleet);
			}
		},
		//Montgomery Scott
		"crew:C126":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Pavel Chekov
		"crew:C125":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Nyota Uhura
		"crew:C124":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Soong :71522
		// Hugh
		"captain:Cap424": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// All crew cost -1 SP
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("crew", upgrade, ship) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					},
					// No faction penalty for borg upgrades
					factionPenalty: function(upgrade, ship, fleet, factionPenalty) {
						if( isUpgrade(upgrade) && $factions.hasFaction(upgrade,"borg", ship, fleet) )
							return 0;
						return factionPenalty;
					}
				}
			}
		},
		// Lore
		"captain:Cap711": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				// Existing talent slot
				{},
				// Add one crew slot
				{
					type: ["crew"]
				}
			],
			intercept: {
				ship: {
					canEquipFaction: {
						priority: 100,
						fn: function(card,ship,fleet,canEquipFaction) {
							if( card.type == "talent" )
								return true;
							return canEquipFaction;
						}
					},
					factionPenalty: {
						priority: 100,
						fn: function(card,ship,fleet,factionPenalty) {
							if( card.type == "talent" )
								return 0;
							return factionPenalty;
						}
					}
				}
			}
		},
		//Goval
		"crew:C123":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Bosus
		"crew:C122":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Crosis
		"crew:C121":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Torsus
		"crew:C120":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Diversionary Tactics
		"talent:E089":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Experimental Link
		"talent:E088": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"borg", ship, fleet);
			}
		},
		// Transwarp Conduit
		"borg:B012": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"borg", ship, fleet);
			}
		},
		// Photon Torpedoes (Borg)
		"weapon:W077": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && $factions.hasFaction(ship,"borg", ship, fleet) )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},
		// Forward Weapons Array
		"weapon:W076": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"borg", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//U.S.S. Raven :71509
		// Magnus Hansen
		"captain:Cap319": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		// Multi-Adaptive Shields
		"tech:T099": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			name: "Multi-Adaptive Shields",
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"federation", ship, fleet) || $factions.hasFaction(ship,"bajoran", ship, fleet) || $factions.hasFaction(ship,"vulcan", ship, fleet);
			}
		},
		// Reinforced Structural Integrity
		"tech:T098": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.name != "U.S.S. Raven" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Research Mission
		"talent:E085":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Erin Hansen
		"crew:C115":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//DS9 GenCon Promo 71786
		//Benjamin Sisko
		"captain:Cap710":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		// T'Rul
		"crew:C110": {
			upgradeSlots: [
				{
					type: ["tech"],
				}
			]
		},
		//Quark
		"crew:C114":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			text: "At the start of the game, place 1 non-Borg [tech] or [weapon] Upgrade with a cost of 5 or less face down beneath this card. At any time, you may discard Quark to flip the Upgrade that is beneath this card face up and deploy it to your ship, even if it exceeds your ship's restrictions.",
			upgradeSlots: [
				{
					type: ["weapon","tech"],
					rules: "Non-Borg, 5SP or less",
					faceDown: true,
					intercept: {
						ship: {
							canEquip: function(upgrade,ship,fleet) {
								// TODO Prevent use of upgrades without a defined cost (e.g. Dorsal Phaser Array)
								var cost = valueOf(upgrade,"cost",ship,fleet);
								return cost <= 5;

							return canEquip;
							},
							canEquipFaction: function(upgrade,ship,fleet) {
								return !$factions.hasFaction(upgrade,"borg", ship, fleet);
							},
							free: function() {
								return true;
							}
						}
					}
				}
			]
		},
		//Odo
		"crew:C113":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Vic Fontaine
		"crew:C112":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		"tech:T097":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction(ship,"federation", ship, fleet) ? 0 : 1 && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Julian Bashir
		"crew:C108":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		// Elim Garak
		"crew:C109": {
			//talents: 1,
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "No Faction Penalty",
					intercept: {
						ship: {
							factionPenalty: function() { return 0; }
						}
					}
				}
			],
			factionPenalty: 0
		},


	//Assimilation Target Prime : 71510b
		"ship:S106": {
			// Restore class on card text
			class: "Galaxy Class",
			// TODO use this field to pick the correct maneuver card
			classId: "galaxy__class_mu",
		},
		"ship:S107": {
			// Restore class on card text
			class: "Galaxy Class",
			// TODO use this field to pick the correct maneuver card
			classId: "galaxy__class_mu",
		},
		"ship:S108": {
			// Restore class on card text
			class: "Galaxy Class",
			// TODO use this field to pick the correct maneuver card
			classId: "galaxy__class_mu",
		},
		"ship:S105": {
			// Restore class on card text
			class: "Galaxy Class",
			// TODO use this field to pick the correct maneuver card
			classId: "galaxy__class_mu",
		},
		// Fire All Weapons
		"weapon:W070": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !(ship.class == "Galaxy Class" || ship.class == "Intrepid Class" || ship.class == "Sovereign Class") )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//U.S.S. Stargazer :71510
		// Jean-Luc Picard 6
		"captain:Cap629": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				// existing talent slot
				{},
				// Add one crew slot
				{
					type: ["crew"]
				}
			]
		},
		//Secondary Impulse Reactor
		"tech:T091":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Jack Crusher
		"crew:C097":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Picard Maneuver
		"talent:E082":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Tactical Station
		"weapon:W170": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["weapon"]
				}
			]
		},


	//Ni'Var :71527
		//Kuvak
		"captain:Cap421":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//V'Las
		"captain:Cap520":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A023":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 3;
			}},
		// Sopek
		"captain:Cap630": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				// existing talent slot
				{},
				// Add one crew slot
				{
					type: ["crew"]
				}
			]
		},
		// Vulcan Commandos
		"crew:C101": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "vulcan", ship, fleet );
			}},
		// Combat Vessel Variant
		"tech:T095": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["weapon"],
				}
			],
			canEquip: function(upgrade,ship,fleet) {

				if( ship.class != "Suurok Class" )
					return false;

				// Only one per ship
				return onePerShip("Combat Vessel Variant")(upgrade,ship,fleet);

			},
			intercept: {
				ship: {
					attack: function(card,ship,fleet,attack) {
						if( card == ship )
							return resolve(card,ship,fleet,attack) + 1;
						return attack;
					},
					hull: function(card,ship,fleet,hull) {
						if( card == ship )
							return resolve(card,ship,fleet,hull) + 1;
						return hull;
					},
					// Prevent other CVV while this one equipped
					canEquip: function(upgrade,ship,fleet) {
						return upgrade.name != "Combat Vessel Variant";
					}
				}
			}
		},
		//Tractor Beam
		"tech:T094":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Decisive Action
		"talent:E083":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},


	//Enterprise NX-01 :71526
		"ship:S115": {
			upgradeSlots: [ {
				type: ["tech"],
				rules: "Free EHP Only",
				canEquip: function(upgrade) {
					return upgrade.name == "Enhanced Hull Plating";
				},
				intercept: {
					ship: {
						cost: function() { return 0; }
					}
				}
			} ]
		},
		//J. Hayes
		"captain:Cap318":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Maxwell Forrest
		"captain:Cap422":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A024":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		// Jonathan Archer
		"captain:Cap521": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				// existing talent slot
				{},
				// Add one crew slot
				{
					type: ["crew"]
				}
			]
		},
		// Enhanced Hull Plating
		"tech:T096": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			// Only one per ship
			canEquip: onePerShip("Enhanced Hull Plating"),
			canEquipFaction: function(card,ship,fleet) {
				return $factions.hasFaction(ship,"federation",ship,fleet) || $factions.hasFaction(ship,"bajoran",ship,fleet) || $factions.hasFaction(ship,"vulcan",ship,fleet);
			}
		},
		// T'Pol
		"crew:C107": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech"],
				}
			]
		},
		//Malcolm Reed
		"crew:C106":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Hoshi Sato
		"crew:C105":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Charles Tucker III
		"crew:C104":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Travis Mayweather
		"crew:C103":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Phlox
		"crew:C102":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Tactical Alert
		"talent:E084":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Scout Cube 608 :71525
		"ship:S113": {
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet,canEquip) {
						if( checkUpgrade("borg", upgrade, ship) && valueOf(upgrade,"cost",ship,fleet) > 5 )
							return false;
						return canEquip;
					}
				}
			}
		},
		"ship:S111": {
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet,canEquip) {
						if ( checkUpgrade("borg", upgrade, ship) && valueOf(upgrade,"cost",ship,fleet) > 5 )
							return false;
						return canEquip;
					}
				}
			}
		},
		"captain:Cap317": {
			// Can't equip if fleet contains Hugh
			canEquip: function(upgrade, ship, fleet) {
				return !$filter("fleetCardNamed")(fleet, "Hugh");
			},
			// While equipped, can't equip a card named Hugh on any ship
			intercept: {
				fleet: {
					canEquip: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Hugh" )
							return false;
						return canEquip;
					},
					canEquipCaptain: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Hugh" )
							return false;
						return canEquip;
					}
				}
			}
		},
		// Third of Five
		"crew:C100": {
			// Can't equip if fleet contains Hugh
			canEquip: function(upgrade, ship, fleet) {
				return !$filter("fleetCardNamed")(fleet, "Hugh");
			},
			// While equipped, can't equip a card named Hugh on any ship
			intercept: {
				fleet: {
					canEquip: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Hugh" )
							return false;
						return canEquip;
					},
					canEquipCaptain: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Hugh" )
							return false;
						return canEquip;
					}
				}
			}
		},
		// Scavenged Parts
		"borg:B011": {
			// Only one per ship
			canEquip: onePerShip("Scavenged Parts")
		},
		// Magnetometric Guided Charge
		"weapon:W071": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"borg");
			}
		},


	//Bok's Marauder : 71646a
		//Bok
		"captain:Cap628":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Thought Maker
		"tech:T090": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"ferengi", ship, fleet);
			}
		},
		// Vengeance
		"talen:E080": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"ferengi", ship, fleet) && $factions.hasFaction(ship,"ferengi", ship, fleet);
			}
		},
		//Kazago
		"crew:C095":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes Ferengi
		"weapon:W067":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Prakesh :71646b
		// Cloaking Device (Mirror)
		"tech:T089": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"mirror-universe", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


			// Haron
		"captain:Cap315": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				// Add one weapon slot
				{
					type: ["weapon"]
				}
			],
			intercept: {
				ship: {
					// All Kazon weapons are -1 SP
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("weapon", upgrade, ship) && $factions.hasFaction(upgrade,"kazon", ship, fleet) ) {
							return resolve(upgrade, ship, fleet, cost) - 1;
						}
						return cost;
					},
				}
			}
		},
		//Tersa
		"crew:C093":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Tractor Beam
		"tech:T088": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			// Only one per ship
			canEquip: onePerShip("Tractor Beam")
		},
		// Photonic Charges
		"weapon:W064": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship.class != "Predator Class" )
							return resolve(upgrade,ship,fleet,cost) + 4;
						return cost;
					}
				}
			}
		},
		//Particle Beam Weapon
		"weapon:W063":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Scout 255 :71646d
		"ship:S099": {
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet,canEquip) {
						if( checkUpgrade("borg", upgrade, ship) && valueOf(upgrade,"cost",ship,fleet) > 5 )
							return false;
						return canEquip;
					}
				}
			}
		},
		// Proton beam
		"weapon:W062": {
			name: "Proton Beam",
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"borg", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//Tal'Kir :71646e
		//Solok
		"captain:Cap627":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		// Vulcan Logic
		"talent:E079": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"vulcan", ship, fleet) && $factions.hasFaction(ship,"vulcan", ship, fleet);
			}
		},
		//Kov
		"crew:C091":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Power Grid
		"tech:T086":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Photonic Weapon
		"weapon:W061":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},


	//Avatar of Tomed :71511
		// Hive Mind
		"borg:B007": {
			// Only one per ship
			canEquip: onePerShip("Hive Mind")
		},
		// Borg Alliance
		"talent:E078": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && !$factions.hasFaction(ship.captain,"borg", ship, fleet) && !$factions.hasFaction(ship,"borg", ship, fleet);
			},
			upgradeSlots: [
				{
					type: ["borg"]
				}
			]
		},


	//U.S.S. Enterprise-E :71531
		//Matthew Dougherty
		"captain:Cap420":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A021":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		// Picard 8
		"captain:Cap807": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{/* Existing Talent Slot */},
				{
					type: ["crew","tech","weapon","talent"]
				}
			]
		},
		// Advanced Shields
		"tech:T085": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			// Only one per ship
			canEquip: onePerShip("Advanced Shields")
		},
		//Fire At Will!
		"talent:E077":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Make It So
		"talent:E076":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Data
		"crew:C080":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// William T. Riker (Ent-E)
		"crew:C089": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["crew"]
				}
			]
		},
		// Geordi LaForge
		"crew:C088": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			]
		},
		//Beverly Crusher
		"crew:C084":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Deanna Troi
		"crew:C083":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Photon Torpedoes (Sovereign)
		"weapon:W058": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Sovereign Class" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},
		// Dorsal Phaser Array
		"weapon:W057": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			attack: 0,
			// Equip only on a Federation ship with hull 4 or more
			canEquip: function(upgrade,ship,fleet) {
				return ship && ( $factions.hasFaction(ship,"federation", ship, fleet) || $factions.hasFaction(ship,"bajoran", ship, fleet) || $factions.hasFaction(ship,"vulcan", ship, fleet) ) && ship.hull >= 4;
			},
			intercept: {
				self: {
					// Attack is same as ship primary
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					},
					// Cost is primary weapon + 1
					cost: function(upgrade,ship,fleet,cost) {
						if( ship )
							return resolve(upgrade,ship,fleet,cost) + valueOf(ship,"attack",ship,fleet) + 1;
						return cost;
					}
				}
			}
		},


	//Queen Vessel Prime :71530
		// Transwarp Signal
		"borg:B006": {
			// Only one per ship
			canEquip: onePerShip("Transwarp Signal"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"borg", ship, fleet);
			}
		},
		// Borg Shield Matrix
		"borg:B005": {
			// Only one per ship
			canEquip: onePerShip("Borg Shield Matrix")
		},
		// Multi Kinetic Neutronic Mines
		"weapon:W056": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"borg", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//Val Jean :71528
		// Calvin Hudson
		"captain:Cap518": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech","weapon","crew"]
				}
			],
			// Reduce cost of all Upgrades by 1 SP if on Independent ship
			intercept: {
				ship: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ($factions.hasFaction(ship,"independent", ship, fleet) || $factions.hasFaction(ship,"ferengi", ship, fleet) || $factions.hasFaction(ship,"kazon", ship, fleet) || $factions.hasFaction(ship,"xindi", ship, fleet) )&& isUpgrade(upgrade) )
							return resolve(upgrade,ship,fleet,cost) - 1;
						return cost;
					}
				}
			}
		},
		//Chakotay
		"captain:Cap626":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{/* Existing Talent Slot */},
				{
					type: ["weapon","crew"]
				}
			]
		},
		//Tuvok
		"crew:C087":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//B'Elanna Torres
		"crew:C086":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Kenneth Dalby
		"crew:C082":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Seska
		"crew:C081":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Evasive Pattern Omega
		"talent:E073":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Be Creative
		"talent:E072":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Ramming Attack
		"weapon:W060":{
			// Equip only on a ship with hull 3 or less
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 3;
			},
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes Independent
		"weapon:W059":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Assimilated Vessel 80279 :71512
		"ship:S087": {
			// Can't join fleet with AV80279 in it
			canJoinFleet: function(ship, ship2, fleet) {
				var canJoin = true;
				$.each( fleet.ships, function(i, other) {
					if( other.name == "Assimilated Vessel 80279" ) {
						canJoin = false;
						return false;
					}
				});
				return canJoin;
			},
			// If in fleet, don't allow AV80279 to join
			intercept: {
				fleet: {
					canJoinFleet: function(ship, ship2, fleet) {
						return ship.name != "Assimilated Vessel 80279";
					}
				}
			}
		},
		// Data Node
		"borg:T083": {
			// Only one per ship
			canEquip: onePerShip("Data Node")
		},
		// Warrior Spirit
		"talent:E071": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"klingon", ship, fleet);
			}
		},


	//Scimitar :71533
		// Shinzon Romulan Talents
		"talent:E063": {
			upgradeSlots: cloneSlot( 4 ,
				{
					type: ["talent"],
					rules: "Romulan Talent Only",
					faceDown: true,
					intercept: {
						ship: {
							cost: function() { return 0; },
							factionPenalty: function() { return 0; },
							canEquip: function(card,ship,fleet,canEquip) {
								if( !$factions.hasFaction( card, "romulan", ship, fleet ) )
									return false;
								return canEquip;
							}
						}
					}
				}
			),
			canEquip: function(upgrade,ship,fleet) {
				return ship.captain && ship.captain.name == "Shinzon";
			},
			factionPenalty: 0
		},
		// Secondary Shields
		"tech:T080": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Reman Warbird";
			}
		},
		// Improved Cloaking Device
		"tech:T079": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Reman Warbird" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Thalaron Weapon
		"weapon:W054": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Reman Warbird";
			}
		},
		// Photon Torpedoes (Reman Warbird)
		"weapon:W053": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Reman Warbird" )
							return resolve(upgrade,ship,fleet,attack) + 2;
						return attack;
					}
				}
			}
		},


	//Chang's Bird of Prey : 71532
		// Prototype Cloaking Device
		"tech:T081": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Klingon Bird-of-Prey";
			}
		},
		// Cry Havoc
		"talent:E068": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"klingon", ship, fleet);
			}
		},


	//I.S.S. Defiant :71529
		"ship:S084": {
			class: "Defiant Class",
			classId: "defiant_class_mirror"
		},
		"ship:S080": {
			class: "Defiant Class",
			classId: "defiant_class_mirror"
		},
		// Miles O'Brien MU
		"captain:Cap516": {
			upgradeSlots: [
				{}, // Existing talent slot
				{
					type: ["tech"]
				}
			]
		},
		// Jennifer Sisko
		"crew:C078": {
			upgradeSlots: [
				{
					type: ["tech"]
				}
			]
		},


	//Tactical Cube 001 :71513a
		// Borg Queen
		"captain:Cap902": {
			upgradeSlots: [
				{}, // Existing talent slot
				{
					type: ["borg"]
				}
			]
		},
		// Command Interface
		"borg:E070": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"borg", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Interplexing Beacon
		"borg:B002": {
			// Only one per ship
			canEquip: onePerShip("Interplexing Beacon")
		},


	//Assimilated Vessel 64758 :71513b
		"ship:S070": {
			// Can't join fleet with AV64758 in it
			canJoinFleet: function(ship, ship2, fleet) {
				var canJoin = true;
				$.each( fleet.ships, function(i, other) {
					if( other.name == "Assimilated Vessel 64758" ) {
						canJoin = false;
						return false;
					}
				});
				return canJoin;
			},
			// If in fleet, don't allow AV64758 to join
			intercept: {
				fleet: {
					canJoinFleet: function(ship, ship2, fleet) {
						return ship.name != "Assimilated Vessel 64758";
					}
				}
			}
		},
		// Truce
		"talent:E060": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.captain && ship.captain.skill > 5 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//Cube 112 :71792
		// Locutus
		"captain:Cap901": {
			// Can't equip if fleet contains Jean-Luc Picard
			canEquipCaptain: function(upgrade, ship, fleet) {
				return !$filter("fleetCardNamed")(fleet, "Jean-Luc Picard");
			},
			// While equipped, can't equip a card named Jean-Luc Picard on any ship
			intercept: {
				fleet: {
					canEquip: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Jean-Luc Picard" )
							return false;
						return canEquip;
					},
					canEquipCaptain: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Jean-Luc Picard" )
							return false;
						return canEquip;
					}
				}
			}
		},


	// 1st Wave Attack Fighters :71754
		// Cover Fire
		"squadron:D016": {
			// Only one per ship
			canEquip: onePerShip("Cover Fire")
		},
		// Flanking Attack
		"squadron:D015": {
			// Only one per ship
			canEquip: onePerShip("Flanking Attack")
		},
		// Support Ship
		"squadron:D013": {
			// Only one per ship
			canEquip: onePerShip("Support Ship")
		},
		// Aft Disruptor Wave Cannons
		"squadron:D011": {
			// Only one per ship
			canEquip: onePerShip("Aft Disruptor Wave Cannons")
		},
		// Galor Class Phaser Banks
		"squadron:D010": {
			// Only one per ship
			canEquip: onePerShip("Galor Class Phaser Banks")
		},


	//Regent's Flagship :71535
		"ship:S067": {
			class: "Negh'var Class",
			classId: "negh_var_class_mirror"
		},
		"ship:S066": {
			class: "Negh'var Class",
			classId: "negh_var_class_mirror"
		},
		// Elim Garak (Mirror)
		"crew:C067": {
			intercept: {
				ship: {
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain && $factions.hasFaction(ship,"mirror-universe", ship, fleet) )
							skill = resolve(upgrade,ship,fleet,skill) + 2;
						return skill;
					}
				}
			}
		},
		// Cloaking Device (Regent's Flagship)
		"tech:T078": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.name != "Regent's Flagship" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Photon Torpedoes (Negh'var Bonus) (Mirror)
		"weapon:W050": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Negh'var Class" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},


	//Fina Prime :71534
		//Vidiian Commander
		"captain:Cap706":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Vidiian Boarding Party
		"crew:C072":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Dereth
		"crew:C071":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Denara Pel
		"crew:C070":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Sulan
		"crew:C069":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Hypothermic Charge
		"weapon:W052": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class.indexOf( "Vidiian" ) >= 0;
			}
		},
		//Grappler
		"weapon:W051":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Decisive Orders
		"talent:E061":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//I.K.S. Pagh :71996
		// William T. Riker (Pagh)
		"crew:C063": {
			talents: 1,
			factionPenalty: function(upgrade,ship,fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1 && $factions.hasFaction(ship,"klingon", ship, fleet) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"]
				}
			]
		},
		// Tunneling Neutrino Beam
		"tech:T069": {
			factionPenalty: function(upgrade,ship,fleet) {
				return ship && $factions.hasFaction(ship,"klingon", ship, fleet) ? 0 : 1;
			}
		},
		// Phaser Array Retrofit
		"weapon:W047": {
			// Only one per ship
			canEquip: onePerShip("Phaser Array Retrofit")
		},


	//Alpha Hunter :71808
		//Alpha Hirogen
		"captain:Cap622":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Karr
		"captain:Cap806":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Monotanium Armor Plating
		"tech:T076": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			// Only one per ship
			canEquip: onePerShip("Monotanium Armor Plating")
		},
		// Sensor Network
		"tech:T075": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class.indexOf( "Hirogen" ) >= 0;
			}
		},
		// Intercept Course
		"talent:E056": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return ship.class.indexOf( "Hirogen" ) >= 0;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.captain && ship.captain.name != "Karr" && ship.captain.name.indexOf("Hirogen") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Stalking Mode
		"talent:E055":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Full Reverse
		"talent:E054":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Subnucleonic Beam
		"weapon:W049": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf( "Hirogen" ) < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Turanj
		"crew:C062": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["weapon"]
				}
			]
		},


	//Fighter Squadron 6 :71753
		// Defensive Maneuvers
		"squadron:D009": {
			// Only one per ship
			canEquip: onePerShip("Defensive Maneuvers")
		},
		// Support Ship
		"squadron:D008": {
			// Only one per ship
			canEquip: onePerShip("Support Ship")
		},
		// Attack Wave
		"squadron:D006": {
			// Only one per ship
			canEquip: onePerShip("Attack Wave")
		},
		// Attack Formation
		"squadron:D004": {
			// Only one per ship
			canEquip: onePerShip("Attack Formation")
		},
		// Cover Fire
		"squadron:D002": {
			// Only one per ship
			canEquip: onePerShip("Cover Fire")
		},
		// Coordinated Attack
		"squadron:D001": {
			// Only one per ship
			canEquip: onePerShip("Coordinated Attack")
		},


	//Prototype 01 :71536
		// Only Gareb or Romulan Drone Pilot as Captain
		"ship:S061": {
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.name == "Gareb" ||  captain.name == "Jhamel" || captain.name == "Romulan Drone Pilot";
					}
				}
			}
		},
		"ship:S266": {
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.name == "Gareb" ||  captain.name == "Jhamel" || captain.name == "Romulan Drone Pilot";
					}
				}
			}
		},
		// Gareb
		"captain:Cap105": {
			// Add a slot for another Captain
			upgradeSlots: [
				{
					type: ["captain"],
					rules: "Captain to place under Gareb",
					intercept: {
						ship: {
							// No cost for this card
							cost: function() {
								return 0;
							},
							// Add talent slots for each talent on the chosen Captain
							onEquip: function(upgrade, ship, fleet) {
								upgrade.upgradeSlots = [];
								for( var i = 0; i < upgrade.talents; i++ )
									upgrade.upgradeSlots.push({
										type: ["talent"],
										source: "Gareb"
									});
								// TODO Check if this is correct
								upgrade.unique = false;
								upgrade.text = "(Place underneath Gareb)";
								upgrade.name = upgrade.name + " (Gareb)";
							},
							// Avoid any restrictions
							canEquip: function() {
								return true;
							},
							canEquipFaction: function() {
								return true;
							},
							factionPenalty: function() {
								return 0;
							}
						}
					}
				}
			],
			// Set skill to chosen Captain's skill
			skill: function(captain,ship,fleet) {
				if( captain.upgradeSlots[0].occupant )
					return captain.upgradeSlots[0].occupant.skill;
				return 0;
			},

			// Set cost to chosen Captain's cost minus 3 SP
			// TODO This should be a self intercept. Also should take into account faction penalty etc?
			cost: function(captain,ship,fleet) {
				var cost = 0;
				if( captain.upgradeSlots[0].occupant ) {
					cost = captain.upgradeSlots[0].occupant.cost - 3;
				}
				return cost;
			},

			// Equip only on a Romulan Drone Ship
			canEquipCaptain: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			}

		},
		// Romulan Drone Pilot
		"captain:Cap104": {
			// Equip only on a Romulan Drone Ship
			canEquipCaptain: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			}
		},
		// Valdore
		"captain:Cap621": {
			upgradeSlots: [
				{/* Talent */},
				{
					type: ["tech"]
				}
			]
		},
		// Maneuvering Thrusters
		"tech:T074": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Romulan Drone Ship" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Multi-Spectral Emitters
		"tech:T073": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			}
		},
		// Backup Sequencer
		"tech:T072": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			}
		},
		// Triphasic Emitter
		"weapon:T071": {
			name: "Triphasic Emitters",
			range: false,
			upgradeSlots: [
				{
					type: ["weapon"],
					rules: "Non-Borg, 5SP or less",
					intercept: {
						ship: {
							free: function() { return true; },
							canEquip: function(upgrade, ship, fleet, canEquip) {
								if( upgrade.printedValue == 0 || hasFaction(upgrade,"borg", ship, fleet) || valueOf(upgrade,"cost",ship,fleet) > 5 )
									return false;
								return canEquip;
							}
						}

					}
				}
			]
		},


	//Tholia One (Retail) :71795
		// Tholian Assembly
		"talent:E051": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.class.indexOf("Tholian") >= 0 &&
						ship.captain && ( ship.captain.name == "Loskene" || ship.captain.name.indexOf("Tholian") >= 0 );
			}
		},
		// Tricobalt Warhead
		"weapon:W045": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Tholian") < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


	//I.R.W. Haakona :71794
		// Mendak
		"captain:Cap618": {
			canEquipCaptain: function(card,ship,fleet) {
				return $factions.hasFaction(ship,"romulan",ship,fleet);
			},
		},
		"admiral:A017": {
			canEquipAdmiral: function(card,ship,fleet) {
				return $factions.hasFaction(ship,"romulan",ship,fleet);
			},
		},
		// Romulan Helmsman
		"crew:C059": {
			// Only one per ship
			canEquip: onePerShip("Romulan Helmsman")
		},
		// Make Them See Us!
		"talent:E049": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"romulan", ship, fleet) && ship.captain && $factions.hasFaction(ship.captain,"romulan", ship, fleet);
			}
		},
		// Romulan Sub Lieutenant
		"crew:C057": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "romulan", ship, fleet );
			}
		},
		// Romulan Security Officer
		// TODO Limit to max +3
		"crew:C058": {
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + 1;
						return skill;
					}
				}
			}
		},
		// Disruptor Pulse
		"weapon:W044": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction( ship, "romulan", ship, fleet ) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},


		//Jabin
		"captain:Cap513":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Razik
		"captain:Cap619":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Karden
		"crew:C061": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"kazon", ship, fleet);
			}
		},
		// Haliz
		"crew:C060": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"kazon", ship, fleet);
			}
		},
		//Particle Beam Weapon
		"weapon:W046":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//U.S.S. Hood :71998p
		//Robert DeSoto
		"captain:Cap412":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Tachyon Detection Grid
		"talent:T058":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(card,ship,fleet) {
				return $factions.hasFaction(ship,"federation",ship,fleet) || $factions.hasFaction(ship,"bajoran",ship,fleet) || $factions.hasFaction(ship,"vulcan",ship,fleet);
			}
		},
		//William T. Riker
		"crew:C047":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Systems Upgrade
		"tech:T057": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			type: "question",
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			],
			intercept: {
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					}
				}
			},
			canEquip: onePerShip("Systems Upgrade"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return ($factions.hasFaction(ship,"federation", ship, fleet) || $factions.hasFaction(ship,"bajoran", ship, fleet) || $factions.hasFaction(ship,"vulcan", ship, fleet));
			}
		},
		//Type 8 Phaser Array
		"weapon:W034": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				if( ship.attack <= 3 )
					return onePerShip("Type 8 Phaser Array")(upgrade,ship,fleet);
				return false;
			}
		},


	//Reklar :71798
		// Coded Messages
		"talent:E046": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "dominion", ship, fleet );
			}
		},
		// Aft Weapons Array
		"weapon:W041": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull >= 4;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "dominion", ship, fleet );
			}
		},


	//Gornarus :71797
		// Slar
		"captain:Cap312": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Salvage Only",
					canEquip: function(upgrade) {
						return upgrade.name == "Salvage";
					}
				}
			]
		},
		//S'Sesslak
		"captain:Cap511":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Impulse Overload
		"tech:T207":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Salvage
		"talent:E048":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Gorn Raiding Party
		"crew:C056":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Improved Deflector Screens
		"tech:T068": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			// Only one per ship and hull <= 3
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 3 && onePerShip("Improved Deflector Screens")(upgrade,ship,fleet);
			}
		},
		// Targeted Phaser Strike
		"weapon:W042": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Gorn Raider" )
							return resolve(upgrade,ship,fleet,cost) + 4;
						return cost;
					}
				}
			}
		},


	//I.S.S. Enterprise :71796
		// Marlena Moreau
		"crew:C051": {
			// One Talent is -1 SP.
			// Like Luaran, this reduces the cost of Marlena rather than the talent.
			// TODO Find a better way?
			cost: function(upgrade,ship,fleet) {
				if( !ship )
					return 3;
				var candidate = false;
				var candCost = 0;
				// Find a talent on the ship
				$.each( $filter("upgradeSlots")(ship), function(i, slot) {
					if( slot.occupant && slot.occupant != upgrade && slot.occupant.type == "talent" ) {
						var occCost = valueOf(slot.occupant,"cost",ship,fleet);
						// Stop as soon as we have a Talent with cost > 0
						if( occCost > 0 ) {
							candidate = slot.occupant;
							candCost = occCost;
							return false;
						}
					}
				});
				// Subtract 1 from Marlena's cost
				return candCost > 0 ? 2 : 3;
			}
		},
		// Agony Booth - one per ship only
		"tech:T066": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Agony Booth")(upgrade,ship,fleet);
			}
		},
		// Tantalus Field
		"talent:E045": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.name == "I.S.S. Enterprise";
			}
		},


	//Sakharov :71997p
		"ship:S051": {
			upgradeSlots: [
				{
					type: ["crew","tech"],
					rules: "This Upgrade costs -2 SP",
					intercept: {
						ship: {
							cost: function(upgrade, ship, fleet, cost) {
								return resolve(upgrade, ship, fleet, cost) - 2;
							}
						}
					}
				}
			]
		},
		//Data
		"captain:Cap310":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Sirna Kolrami
		"crew:C050":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Computer Analysis
		"talent:E044":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Escape Transporter
		"tech:T065": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class.indexOf("Shuttlecraft") >= 0;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "federation", ship, fleet );
			}
		},
		// Warp Drive
		"tech:T064": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class.indexOf("Shuttlecraft") >= 0 && onePerShip("Warp Drive")(upgrade,ship,fleet);
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "federation", ship, fleet );
			}
		},


	//U.S.S. Pegasus :71801
		"ship:S047": {
			intercept: {
				ship: {
					cost: function(upgrade,ship,fleet,cost) {
						if( checkUpgrade("tech", upgrade, ship) )
							return resolve(upgrade,ship,fleet,cost) - 1;
						return cost;
					}
				}
			}
		},
		//Ronald Moore
		"captain:Cap208":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Erik Pressman
		"captain:Cap308":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A013":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		// William T. Riker
		"crew:C273": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain )
							return resolve(upgrade,ship,fleet,skill) + 3;
						return skill;
					}
				}
			}
		},
		// Specialized Shields
		"tech:T056": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 3;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "federation", ship, fleet ) || $factions.hasFaction( ship, "bajoran", ship, fleet ) || $factions.hasFaction( ship, "vulcan", ship, fleet );
			}
		},
				// Phasing Cloaking Device
		"tech:T055": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Oberth Class" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Escape Pod
		"tech:T054":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Andy Simonson
		"crew:C046":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Phil Wallace
		"crew:C045":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Dawn Velazquez
		"crew:C044":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction (ship,"federation",ship,fleet) || hasFaction(ship,"bajoran",ship,fleet) || hasFaction(ship,"vulcan",ship,fleet);
			},
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 3;
			}},
		// Eric Motz
		"crew:C043": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			]
		},


	//I.S.S. Avenger :71800
		"captain:Cap415": {
			intercept: {
				ship: {
					factionPenalty: function(upgrade,ship,fleet,factionPenalty) {
						if( isUpgrade(upgrade) )
							return 0;
						return factionPenalty;
					}
				}
			}
		},
		"crew:C049": {
			canEquip: onePerShip("Orion Tactical Officer")
		},
		"crew:C048": {
			canEquip: onePerShip("Andorian Helmsman")
		},
		// Enhanced Hull Plating
		"tech:T062": {
			canEquip: onePerShip("Enhanced Hull Plating"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "mirror-universe", ship, fleet ) && ship.hull <= 4;
			}
		},


	//Kyana Prime :71799
		//Obrist
		"captain:Cap413":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Annorax
		"captain:Cap805": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{}, // Existing talent slot
				{
					type: ["tech"]
				}
			]
		},
		// Causality Paradox
		"talent:E042": {
			// Only equip on krenim weapon ship with Annorax or other Krenim captain.
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.class == "Krenim Weapon Ship" && ship.captain && (ship.captain.name == "Annorax" || ship.captain.name == "Obrist" || ship.captain.name.indexOf("Krenim") >= 0 );
			}
		},
		// Temporal Wave Front
		"tech:T061": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Krenim Weapon Ship";
			}
		},
		// Temporal Core
		"tech:T060": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Krenim Weapon Ship";
			}
		},
		// Spatial Distortion
		"tech:T059": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Krenim Weapon Ship";
			}
		},
		// Chroniton Torpedoes
		"weapon:W036": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Krenim Weapon Ship" )
							return resolve(upgrade,ship,fleet,cost) + 6;
						return cost;
					}
				}
			}
		},
		// Temporal Incursion
		"weapon:W035": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Krenim Weapon Ship";
			}
		},


	//IKS Korinar :71999p
		// TODO It's not clear whether Mauk-to'Vor should get a faction penalty or cost=3 avoids this
		"captain:Cap410": {
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Mauk-to'Vor Only at 3SP",
					canEquip: function(upgrade,ship,fleet) {
						return upgrade.name == "Mauk-to'Vor";
					},
					intercept: {
						ship: {
							cost: function() { return 3; }
						}
					}
				}
			],
			factionPenalty: function() { return 0; }
		},
		// Klingon Stealth Team
		"crew:C041": {
			canEquip: onePerShip("Klingon Stealth Team"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "klingon", ship, fleet);
			}
		},
		// Mauk-to'Vor
		"talent:E039": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "klingon", ship, fleet) && $factions.hasFaction(ship.captain, "klingon", ship, fleet);
			}
		},
		// Ambush Attack
		"weapon:W033": {
			canEquip: onePerShip("Ambush Attack")
		},


	//IKS Ning'tao :71804
		"captain:Cap804": {
			upgradeSlots: [
				{/* Talent */},
				{
					type: ["crew"]
				}
			]
		},
		// Darok
		"crew:C038": {
			canEquipFaction: function(card,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet);
			},
		},
		// Inverse Graviton Burst
		"tech:T049": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"klingon", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Long Live the Empire!
		"talent:E038": {
			// Only equip if ship and captain matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "klingon", ship, fleet) && ( !ship.captain || $factions.hasFaction(ship.captain, "klingon", ship, fleet) );
			},
			// Prevent non-faction-matching captain
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return $factions.hasFaction(captain, "klingon", ship, fleet);
					}
				}
			}
		},


	//Ratosha :71803
		// Jaro Essa
		"captain:Cap207": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "bajoran", ship, fleet);
			}
		},
		"admiral:A012": {
			canEquipAdmiral: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "bajoran", ship, fleet);
			}
		},
		//Day Kannu
		"captain:Cap411":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Krim
		"captain:Cap616": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{}, // Talent
				{
					type: ["crew"]
				}
			]
		},
		//Provisional Government
		"talent:E041":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Assault Vessel Upgrade
		"tech:T053": {
			type: "question",
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			canEquip: function(upgrade,ship,fleet) {
				if( ship.class == "Bajoran Scout Ship" ) {
					return onePerShip("Assault Vessel Upgrade")(upgrade,ship,fleet);
				}
				return false;
			},
			intercept: {
				ship: {
					attack: function(card,ship,fleet,attack) {
						if( card == ship )
							return resolve(card,ship,fleet,attack) + 1;
						return attack;
					},
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					}
				}
			}
		},
		// Bajoran Militia
		"crew:C042": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "bajoran", ship, fleet);
			}
		},
		//More Than Meets the Eye
		"talent:E040":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//USS Prometheus :71802
		//The Doctor
		"captain:Cap206":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//EMH Mark II
		"crew:C040":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"tech:T051":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Tactical Prototype
		"tech:T050":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Romulan Hijackers
		"crew:C039": {
			// Cannot equip if non-Romulan captain or crew
			canEquip: function(card,ship,fleet){

				if( ship.captain && !$factions.hasFaction(ship.captain,"romulan", ship, fleet) )
					return false;

				var canEquip = true;
				$.each( $filter("upgradeSlots")(ship), function(i,slot) {
					if( slot.occupant && slot.occupant.type == "crew" && !$factions.hasFaction(slot.occupant,"romulan", ship, fleet) )
						canEquip = false;
				});

				return canEquip;

			},
			intercept: {
				ship: {
					// Can only equip Romulan crew
					canEquip: function(card,ship,fleet,canEquip) {
						if( card.type == "crew" && !$factions.hasFaction(card,"romulan", ship, fleet) )
							return false;
						return canEquip;
					},
					// Can only equip Romulan captain
					canEquipCaptain: function(card,ship,fleet,canEquipCaptain) {
						if( !$factions.hasFaction(card,"romulan", ship, fleet) )
							return false;
						return canEquipCaptain;
					},
					// All non-borg tech and weapon upgrades cost -1 SP
					cost: function(card,ship,fleet,cost) {
						if( (card.type == "tech" || card.type == "weapon") && !$factions.hasFaction(card,"borg", ship, fleet) )
							cost = resolve(card, ship, fleet, cost) - 1;
						return cost;
					},
					// No faction penalty for romulan upgrades
					factionPenalty: function(card,ship,fleet,factionPenalty) {
						if( card.type == "captain" || isUpgrade(card) && $factions.hasFaction(card,"romulan", ship, fleet) )
							return 0;
						return factionPenalty;
					}
				},
			}
		},
		// Regenerative Shielding
		"tech:T048": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.name != "U.S.S. Prometheus" )
							return resolve(upgrade,ship,fleet,cost) + 4;
						return cost;
					}
				}
			},
			canEquip: onePerShip("Regenerative Shielding")
		},
		// Ablative Hull Armor
		"tech:T047": {
			canEquip: function(card,ship,fleet) {
				return ship.class == "Prometheus Class";
			},
		},
		//Photon Torpedoes -Prometheus
		"weapon:W031":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Prometheus Class" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}},
		// Multi-Vector Assault Mode
		"weapon:W030": {
			canEquip: function(card,ship,fleet) {
				return ship.class == "Prometheus Class";
			},
		},


	//U.S.S. Pasteur :71807
		// Inverse Tachyon Pulse
		"tech:T015": {
			canEquip: onePerShip("Inverse Tachyon Pulse")
		},


	//Kreechta :71806
		//Tarr
		"captain:Cap305":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Bractor
		"captain:Cap406":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Marauder
		"talent:E025": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "ferengi", ship, fleet) && $factions.hasFaction(ship.captain, "ferengi", ship, fleet);
			}
		},
		// Acquisition
		"talent:E024": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "ferengi", ship, fleet) && $factions.hasFaction(ship.captain, "ferengi", ship, fleet);
			}
		},
		//Photon Torpedoes -Ferengi
		"weapon:W016":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Missile Launchers
		"weapon:W015":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Tactical Officer
		"crew:C025": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Tactical Officer")
		},
		//EM Pulse
		"tech:T022":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Maximum Shields
		"tech:T021":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Ferengi Probe
		"tech:T020": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Ferengi Probe")
		},


	//U.S.S. Dauntless :71805
		//Arturis
		"captain:Cap306": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					skill: function(upgrade,ship,fleet,skill) {
						if( ship && ship.class == "Dauntless Class" )
							return resolve(upgrade,ship,fleet,skill) + 5;
						return skill;
					}
				}
			}
		},
		//Auto-Navigation
		"tech:T033": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			skill: 0,
			upgradeSlots: [
				{
					type: ["tech"]
				}
			],
			intercept: {
				self: {
					skill: function(upgrade,ship,fleet,skill) {
						if( ship && !ship.captain )
							return 2;
						return skill;
					}
				}
			}
		},
		//Quantum Slipstream Drive
		"tech:T032":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Power Distribution Grid
		"tech:T031":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Force Field
		"tech:T030": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Dauntless Class" )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Navigational Deflector
		"tech:T029": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Navigational Deflector")
		},
		//Particle Synthesis
		"tech:T028": {
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Dauntless Class";
			}
		},
		//Emergency Shutdown
		"tech:E030":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Lure
		"talent:E029":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Q Continuum Cards :72000b
		// Q2
		"question:Q001":{
			type: "question",
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 ||
				       $.inArray( "weapon", slotTypes ) >= 0 ||
							 $.inArray( "crew", slotTypes ) >= 0 ||
							 $.inArray( "talent", slotTypes ) >= 0;
			}
		},

	//I.R.W. Terix :72000p
		// Additional Phaser Array
		"weapon:W010": {
			canEquip: function(upgrade,ship,fleet) {
				if( ship.class == "D'deridex Class" )
					return onePerShip("Additional Phaser Array")(upgrade,ship,fleet);
				return false;
			}
		},
		// Long Range Scanners
		"tech:T004": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "D'deridex Class" )
							return resolve(upgrade,ship,fleet,cost) + 3;
						return cost;
					}
				}
			}
		},


	//I.R.W. Vrax :72010
		// Coordinated Attack
		"talent:E001": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "romulan", ship, fleet) && ship.captain && $factions.hasFaction(ship.captain, "romulan", ship, fleet);
			}
		},
		// Bridge Officer
		"crew:C002": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"romulan",ship,fleet) )
							return resolve(upgrade,ship,fleet,cost) + 2;
						return cost;
					}
				}
			},
			canEquip: onePerShip("Bridge Officer")
		},


	//I.K.S. T'Ong :72009
		// K'Temoc
		"captain:Cap504": {
			// Klingon talent
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Klingon Talents Only",
					canEquip: function(card,ship,fleet) {
						return hasFaction(card,"klingon",ship,fleet);
					}
				}
			],
			intercept: {
				ship: {
					// Klingon upgrades cost -1 SP
					cost: function(card,ship,fleet,cost) {
						if( isUpgrade(card) && hasFaction(card,"klingon",ship,fleet) )
							cost = resolve(card,ship,fleet,cost) - 1;
						return cost;
					},
					// Double faction penalty for non-klingon upgrades
					factionPenalty: function(card,ship,fleet,factionPenalty) {
						if( isUpgrade(card) && !hasFaction(card,"klingon",ship,fleet) )
							factionPenalty = resolve(card,ship,fleet,factionPenalty) * 2;
						return factionPenalty;
					}
				}
			}
		},
		"talent:E002": {
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction(ship,"klingon",ship,fleet) && hasFaction(ship.captain,"klingon",ship,fleet);
			},
		},
		// Tactical Officer
		"crew:C004": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"klingon",ship,fleet) )
							return resolve(upgrade,ship,fleet,cost) + 3;
						return cost;
					}
				}
			},
			canEquip: onePerShip("Tactical Officer")
		},
		// Cryogenic Stasis
		"tech:T001": {
			upgradeSlots: cloneSlot( 2 ,
				{
					type: ["crew"],
					rules: "Non-Borg, Combined cost 5 or less",
					faceDown: true,
					canEquip: function(card,ship,fleet,upgradeSlot) {
						// Non-Borg
						if( hasFaction(card,"borg",ship,fleet) )
							return false;
						// Combined cost of 5 SP or less
						var otherSlotCost = 0;
						$.each( $filter("upgradeSlots")(ship), function(i, slot) {
							if( upgradeSlot != slot && slot.occupant && slot.source == "Cryogenic Stasis" )
								otherSlotCost = valueOf(slot.occupant,"cost",ship,fleet)
						});
						return otherSlotCost + valueOf(card,"cost",ship,fleet) <= 5;
					},
					intercept: {
						ship: {
							free: function() { return true; },
						}
					}
				}
			),
		},


	//U.S.S. Thunderchild :72008
		//Shanthi
		"captain:Cap401":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A002":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		//Hayes
		"captain:Cap505":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A003":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		//Persistence
		"talent:E006":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Federation Task Force
		"talent:E005": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship, "federation", ship, fleet) && ship.captain && hasFaction(ship.captain, "federation", ship, fleet);
			},
			canEquipFaction: function(card,ship,fleet) {
				return $factions.hasFaction(ship,"federation",ship,fleet) && $factions.hasFaction(ship.captain,"federation",ship,fleet) || $factions.hasFaction(ship,"bajoran",ship,fleet) && $factions.hasFaction(ship.captain,"bajoran",ship,fleet) || $factions.hasFaction(ship,"vulcan",ship,fleet) && $factions.hasFaction(ship.captain,"vulcan",ship,fleet);
			}
		},
		//Intercept
		"talent:E004":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Torpedoes
		"weapon:W009":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"weapon:W008":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Rapid Reload
		"crew:C006":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"weapon:W007":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"tech:T003":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//U.S.S. Bellerophon :72001p
		//William Ross
		"captain:Cap614":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A010":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		//Section 31
		"talent:E033":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Luther Sloan
		"crew:C033": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Tricobalt Device
		"weapon:W025": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class != "Intrepid Class" )
							return resolve(upgrade,ship,fleet,cost) + 4;
						return cost;
					}
				}
			}
		},
		// Variable Geometry Pylons
		"tech:T042": {
			canEquip: function(card,ship,fleet) {
				if( ship.class != "Intrepid Class" )
					return false;
				return onePerShip("Variable Geometry Pylons")(card,ship,fleet);
			}
		},


	//Quark's Treasure :72013
		"ship:S013": {
			intercept: {
				ship: {
					factionPenalty: function(card,ship,fleet,factionPenalty) {
						if( card.type == "crew" || card.type == "tech")
							return 0;
						return factionPenalty;
					}
				}
			}
		},
		//Zek
		"captain:Cap201": {
			canEquipCaptain: function(card,ship,fleet) {
				return hasFaction(ship,"ferengi",ship,fleet);
			},
		},
		"admiral:A005": {
			canEquipAdmiral: function(card,ship,fleet) {
				return hasFaction(ship,"ferengi",ship,fleet);
			},
		},
		//Quark
		"captain:Cap304":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Brunt
		"captain:Cap404": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Grand Nagus Only",
					canEquip: function(card) {
						return card.name == "Grand Nagus";
					},
				}
			]
		},
		//Grand Nagus
		"talent:E016":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		"talent:E015": {
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction(ship, "ferengi", ship, fleet) && hasFaction(ship.captain, "ferengi", ship, fleet);
			}
		},
		//Odo
		"crew:C016":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Nog
		"crew:C015":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Rom
		"crew:C014":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Cargo Hold
		"tech:T013": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: cloneSlot( 2,
				{
					type: ["crew","tech"],
					rules: "Combined cost 4SP or less",
					canEquip: function(card,ship,fleet,upgradeSlot) {
						// Combined cost of 4 SP or less
						var otherSlotCost = 0;
						$.each( $filter("upgradeSlots")(ship), function(i, slot) {
							if( upgradeSlot != slot && slot.occupant && slot.source == "Cargo Hold" )
								otherSlotCost = valueOf(slot.occupant,"cost",ship,fleet)
						});
						return otherSlotCost + valueOf(card,"cost",ship,fleet) <= 4;
					},
				}
			),
			canEquip: function(card,ship,fleet) {
				if( !hasFaction(ship, "ferengi", ship, fleet) )
					return false;
				return onePerShip("Cargo Hold")(card,ship,fleet);
			},
		},
		//Inversion Wave
		"tech:T012": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Inversion Wave")
		},


	//Bioship Beta :72012
		// Biological Weapon
		"weapon:W024": {
			canEquip: function(card,ship,fleet) {
				return ship.class == "Species 8472 Bioship";
			}
		},
		// Energy Blast
		"weapon:W023": {
			canEquip: function(card,ship,fleet) {
				return ship.class == "Species 8472 Bioship";
			}
		},
		// Biological Technology
		"tech:T041": {
			canEquip: function(card,ship,fleet) {
				if( ship.class != "Species 8472 Bioship" )
					return false;
				return onePerShip("Biological Technology")(card,ship,fleet);
			}
		},
		// Biogenic Field
		"tech:T040": {
			canEquip: function(card,ship,fleet) {
				if( ship.class != "Species 8472 Bioship" )
					return false;
				return onePerShip("Biogenic Field")(card,ship,fleet);
			}
		},
		// Electrodynamic Fluid
		"tech:T039": {
			canEquip: function(card,ship,fleet) {
				return ship.class == "Species 8472 Bioship";
			}
		},
		// Fluidic Space
		"tech:T038": {
			canEquip: onePerShip("Fluidic Space"),
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"species-8472",ship,fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},


	//U.S.S. Phoenix :72011
		//Haden
		"captain:Cap203":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A007":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		//Benjamin Maxwell
		"captain:Cap605":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Prefix Code
		"talent:E018":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Elizabeth Lense
		"crew:C019":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Terry
		"crew:C018":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//High Energy Sensor Sweep
		"tech:T014":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("High Energy Sensor Sweep")
		},
		//Arsenal
		"weapon:W012": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: cloneSlot( 2, { type: ["weapon"] } ),
			canEquip: onePerShip("Arsenal")
		},
		//Aft Torpedo Launcher
		"question:Q002": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && (!hasFaction(ship,"federation", ship, fleet) && !hasFaction(ship,"bajoran", ship, fleet) && !hasFaction(ship,"vulcan", ship, fleet) ) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
			canEquip: function(upgrade,ship,fleet) {
				if( ship.classData && ship.classData.rearArc )
					return false;
				return ship.hull >= 4;
			},
		},


	//U.S.S. Intrepid :72002p
		//Matt Decker
		"captain:Cap204":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A009":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			}},
		//Flag Officer
		"talent:E026":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Vulcan Engineer
		"crew:C026":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Dual Phaser Banks
		"weapon:W017": {
			canEquip: function(card,ship,fleet) {
				if( ship && (!hasFaction(ship,"federation", ship, fleet) && !hasFaction(ship,"bajoran", ship, fleet) && !hasFaction(ship,"vulcan", ship, fleet) ) )
					return false;
				return onePerShip("Dual Phaser Banks")(card,ship,fleet);
			},
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ship.class != "Constitution Class" && ship.class != "Constitution Refit Class" )
							return resolve(card,ship,fleet,cost) + 3;
						return cost;
					}
				}
			},
		},
		// Astrogator
		"question:Q003": {
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"federation",ship,fleet) )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
			canEquip: function(card,ship,fleet) {
				if( ship.class != "Constitution Class" && ship.class != "Constitution Refit Class" )
					return false;
				return onePerShip("Astrogator")(card,ship,fleet);
			},
		},


	//R.I.S. Talvath :72016
		"captain:Cap303": {
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Secret Research Only",
					canEquip: function(card,ship,fleet) {
						return card.name == "Secret Research";
					}
				}
			]
		},
		"talent:E009": {
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ship.class != "Romulan Science Vessel" )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},
		"tech:T008": {
			canEquip: function(card,ship,fleet) {
				return ship && ship.class == "Romulan Science Vessel";
			}
		},
		"tech:T007": {
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ship.class != "Romulan Science Vessel" )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},
		"tech:T006": {
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ship.class != "Romulan Science Vessel" )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
			canEquip: onePerShip("Signal Amplifier")
		},
		"tech:T010": {
			canEquip: onePerShip("Warp Core Ejection System")
		},
		"tech:T009": {
			canEquip: function(card,ship,fleet) {
				return ship && ship.class == "Romulan Science Vessel";
			}
		},


	//I.K.S. Rotarran :72015
		"captain:Cap701": {
			intercept: {
				ship: {
					cost: function(card,ship,fleet,cost) {
						if( isUpgrade(card) && hasFaction(card,"klingon",ship,fleet) )
							return resolve(card,ship,fleet,cost) - 1;
						return cost;
					}
				}
			},
		},
		//The Day is Ours!
		"talent:E013": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"klingon", ship, fleet) && hasFaction(ship.captain,"klingon", ship, fleet);
			}
		},
		//Jadzia Dax
		"crew:C012": {
			intercept: {
				self: {
					factionPenalty: function(card,ship,fleet,factionPenalty) {
						if( hasFaction(ship,"klingon",ship,fleet) )
							return 0;
						return factionPenalty;
					}
				}
			}
		},
		//Worf
		"crew:C013": {
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + ( hasFaction(card,"klingon",ship,fleet) ? 3 : 1 );
						return skill;
					}
				}
			}
		},


	//Delta Flyer :72014
		//Tom Paris
		"captain:Cap407":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Tuvok
		"captain:Cap507": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech"],
					rules: "Costs -1 SP",
					intercept: {
						ship: {
							cost: function(card,ship,fleet,cost) {
								return resolve(card,ship,fleet,cost) - 1;
							}
						}
					}
				}
			]
		},
		//B'Elanna Torres
		"crew:C031":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Harry Kim
		"crew:C030":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Seven of Nine
		"crew:C029":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Parametallic Hull Plating
		"tech:T027": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Parametallic Hull Plating"),
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && (!hasFaction(ship,"federation", ship, fleet) && !hasFaction(ship,"bajoran", ship, fleet) && !hasFaction(ship,"vulcan", ship, fleet) ) )
							return resolve(card,ship,fleet,cost) + 3;
						return cost;
					}
				}
			},
		},
		// Immersion Shielding
		"tech:T026": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Immersion Shielding"),
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ( !hasFaction(ship,"federation", ship, fleet) && !hasFaction(ship,"bajoran", ship, fleet) && !hasFaction(ship,"vulcan", ship, fleet)) )
							return resolve(card,ship,fleet,cost) + 3;
						return cost;
					}
				},
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					}
				}
			},
		},
		// Unimatrix Shielding
		"tech:T025": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Unimatrix Shielding"),
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && (!hasFaction(ship,"federation", ship, fleet) && !hasFaction(ship,"bajoran", ship, fleet) && !hasFaction(ship,"vulcan", ship, fleet) ) )
							return resolve(card,ship,fleet,cost) + 4;
						return cost;
					}
				},
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 2;
						return shields;
					}
				}
			},
		},
		//Photonic Missiles
		"weapon:W020":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes -Delta Flyer
		"weapon:W019": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					range: function(card,ship,fleet,range) {
						if( ship && ship.class.indexOf("Shuttlecraft") >= 0 )
							return "1 - 2";
						return range;
					}
				}
			}
		},


	//U.S.S. Hathaway :71201
		//William T. Riker
		"captain:Cap724":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Improvise
		"talent:E134":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Wesley Crusher
		"crew:C217": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			//text: "place up to 3 federation tech Upgrades, each 4 SP or less, face down under this card",
			upgradeSlots: cloneSlot( 3 ,
				{
					type: ["tech"],
					rules: "FEDERATION TECH UPGRADES, 4SP OR LESS",
					faceDown: true,
					intercept: {
						ship: {
							cost: function() { return 0; },
							factionPenalty: function() { return 0; },
							canEquip: function(card,ship,fleet,canEquip) {
								console.log(!$factions.hasFaction( card, "federation", ship, fleet ), valueOf(card,"cost",ship,fleet) > 4 )
								if( $factions.hasFaction( card, "federation", ship, fleet ) && (valueOf(card,"cost",ship,fleet) < 5) )
									return canEquip;
								return false;
							}
						}
					}
				}
			),
			//factionPenalty: 0
		},
		//Worf
		"crew:C216":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Geordi La Forge
		"crew:C215": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					cost: {
						// Run this interceptor after all other penalties and discounts
						priority: 100,
						fn: function(upgrade,ship,fleet,cost) {
							if( checkUpgrade("tech", upgrade, ship) ) {
								cost = resolve(upgrade,ship,fleet,cost);
								cost -= 1;
							}
							return cost;
						}
					}
				}
			}
		},
		// Navigational Station - one per ship only
		"tech:T104": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Navigational Station")(upgrade,ship,fleet);
			}
		},
		//Warp Jump
		"tech:T104":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes
		"weapon:W123":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


		//Surat
		"captain:Cap535":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Lorrum
		"crew:C228":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		// Kazon Gurad
		"crew:C228": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Kazon Gurad")(upgrade,ship,fleet);
			}},
		//Photonic Charges
		"weapon:W129":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Aft Torpedo Launcher
		"weapon:W128":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Variale Yield Charges
		"weapon:W127":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Unremarkable Species
		"question:Q004": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			type: "question",
			isSlotCompatible: function(slotTypes) {
				//console.log($.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0);
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				console.log(ship)
				return !$factions.hasFaction(ship, "borg", ship, fleet);
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Unremarkable Species")(upgrade,ship,fleet);
			 },
			 intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"kazon",ship,fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
			upgradeSlots: [
				{
					type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				}
			],
		},


	//Scorpion 4 :71203
		// Cover Fire - one per ship only
		"squadron:D023": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Cover Fire")(upgrade,ship,fleet);
			}
		},
		// Torpedo Attack - one per ship only
		"squadron:D021": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Torpedo Attack")(upgrade,ship,fleet);
			}
		},
		// Support Ship - one per ship only
		"squadron:D018": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Support Ship")(upgrade,ship,fleet);
			}
		},


	//I.R.W. Belak :blind_belak
		// Lovok
		"captain:Cap307": {
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Tal Shiar Only",
					canEquip: function(card) {
						return card.name == "Tal Shiar";
					}
				}
			]
		},
		// Tal Shiar
		"talent:E034": {
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction(ship.captain,"romulan", ship, fleet);
			}
		},


	// BIOSHIP OMEGA :blind_bioship
		"captain:Cap205": {
			canEquipCaptain: function(card,ship,fleet) {
				return hasFaction(ship,"species-8472", ship, fleet);
			}
		},
		"weapon:W022": {
			canEquip: function(card,ship,fleet) {
				if( !hasFaction(ship,"species-8472", ship, fleet) )
					return false;
				return onePerShip("Energy Weapon")(card,ship,fleet);
			}
		},
		"tech:T037": {
			canEquip: function(card,ship,fleet) {
				if( !hasFaction(ship,"species-8472", ship, fleet) )
					return false;
				return onePerShip("Neuro Peptides")(card,ship,fleet);
			}
		},
		"tech:T036": {
			canEquip: function(card,ship,fleet) {
				return hasFaction(ship,"species-8472", ship, fleet);
			}
		},
		"tech:T035": {
			canEquip: function(card,ship,fleet) {
				if( !hasFaction(ship,"species-8472", ship, fleet) )
					return false;
				return onePerShip("Resistant Hull")(card,ship,fleet);
			}
		},


		//ALDARA :blind_aldara
		"weapon:W029": {
			canEquip: onePerShip("Aft Weapons Array"),
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ship.class != "Cardassian Galor Class" )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},
		"tech:T046": {
			canEquip: onePerShip("High Energy Subspace Field"),
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"dominion",ship,fleet) )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},


	//U.S.S. Lakota :blind_lakota
		//Erika Benteen
		"captain:Cap405":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Defy Orders
		"talent:E023":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Tuvok
		"crew:C024":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Micro Power Relays
		"tech:T019":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Upgraded Phasers
		"weapon:W014": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(card,ship,fleet) {
				if( valueOf(ship,"attack",ship,fleet) > 3 )
					return false;
				return onePerShip("Upgraded Phasers")(card,ship,fleet);
			},
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"federation",ship,fleet) && !hasFaction(ship,"bajoran",ship,fleet) && !hasFaction(ship,"vulcan",ship,fleet))
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},


	//I.K.S. Toh'Kaht :blind_tohkaht
		// Reactor Core
		"tech:T002": {
			canEquip: onePerShip("Reactor Core")
		},

	//I.K.S. Buruk :blind_buruk
		// Reactor Core
		"tech:T034": {
			canEquip: onePerShip("Targeting Systems")
		},
		// Kurak
		"crew:C032": {
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"klingon",ship,fleet) )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},


	//Interceptor 8 :blind_interceptor8
		//Shakaar Edon
		"captain:Cap611":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Pursuit
		"talent:E027": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(card,ship,fleet) {
				return valueOf(ship,"hull",ship,fleet) <= 3;
			},
		},
		//Ro Laren
		"crew:C027": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(card,ship,fleet) {
				return hasFaction(ship,"federation",ship,fleet) || hasFaction(ship,"bajoran",ship,fleet) || hasFaction(ship,"vulcan",ship,fleet);
			},
		},
		//Phaser Strike
		"weapon:W018": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(card,ship,fleet) {
				return valueOf(ship,"hull",ship,fleet) <= 3;
			},
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && ship.class != "Bajoran Interceptor" )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},
		//Navigational Sensors
		"tech:T023": {
			canEquip: function(card,ship,fleet) {
				if( ship.class != "Bajoran Interceptor" )
					return false;
				return onePerShip("Navigational Sensors")(card,ship,fleet);
			},
		},


		//Culluh
		"captain:Cap610":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Photonic Charges
		"weapon:W064":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Ambition
		"talent:E022": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"kazon", ship, fleet) && hasFaction(ship.captain,"kazon", ship, fleet);
			}
		},
		//Rulat
		"crew:C023":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Stolen Technology
		"tech:T018": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"kazon", ship, fleet);
			}
		},


	//Seleya :blind_seleya
		//Tavin
		"captain:Cap403":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//V'Tosh Ka'Tur
		"talent:E010": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"vulcan", ship, fleet) && hasFaction(ship.captain,"vulcan", ship, fleet);
			}
		},
		//Solin
		"crew:C008": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"vulcan", ship, fleet) )
							return resolve(card,ship,fleet,cost) + 4;
						return cost;
					}
				}
			},
		},
		//Aft Particle Beam
		"weapon:W011":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},
		//Power Distribution Net
		"tech:T011": {
			canEquip: function(card,ship,fleet) {
				if( !hasFaction(ship,"vulcan",ship,fleet) )
					return false;
				return onePerShip("Power Distribution Net")(card,ship,fleet);
			},
		},


	//Nunk's Marauder :blind_nunks_marauder
		//Nunk
		"captain:Cap608":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Kidnap
		"talent:E021": {
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"ferengi", ship, fleet) && hasFaction(ship.captain,"ferengi", ship, fleet);
			}
		},
		//Omag
		"crew:C022":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Weapon Ports
		"weapon:W013":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Geodesic Pulse
		"tech:T017":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Robinson :71213
		//Benjamin Sisko
		"captain:Cap815":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Infiltration
		"talent:E137":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Miles O'Brien
		"crew:C227":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Jadzia Dax
		"crew:C226":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Julian Bashir
		"crew:C225":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Nog
		"crew:C224":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Elim Garak
		"crew:C223":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Dreadnought(old) :71212
		// Counter Measures - one per ship only, +5 SP on any ship except ATR-4107
		"tech:T112": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Counter Measures")(upgrade,ship,fleet);
			},
		intercept: {
			self: {
			cost: function(upgrade,ship,fleet,cost) {
				if( ship && ship.class != "Cardassian ATR-4107" )
					return resolve(upgrade,ship,fleet,cost) + 5;
				return cost;
			}}
		}},
		// Maintenance Crew
		"question:Q005": {
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [
				{
					type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				},
				{
					type: ["crew"]
				}
			],
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Maintenance Crew")(upgrade,ship,fleet);
			}
		},
		// First Maje
		"question:Q021": {
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction(ship,"kazon",ship,fleet) && hasFaction(ship.captain,"kazon",ship,fleet);
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [
				{	type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				 },
					{type: ["tech"]
				}
			],
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + 2;
						return skill;
					}
				}
			}
		},

	//Denorious :71211
		//AKOREM LAAN
		"captain:Cap219":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			//text: "place up to 3 federation tech Upgrades, each 4 SP or less, face down under this card",
			upgradeSlots: cloneSlot( 2 ,
				{
					type: ["talent"],
					rules: "Bajoran upgrades",
					faceDown: true,
					intercept: {
						ship: {


							canEquip: function(card,ship,fleet,canEquip) {
								//console.log(!$factions.hasFaction( card, "federation", ship, fleet ), valueOf(card,"cost",ship,fleet) > 4 )
								if( $factions.hasFaction( card, "bajoran", ship, fleet ) )
									return canEquip;
								return false;
							}
						}
					}
				}
			),
			//factionPenalty: 0
		},
		//EMISSARY
		"talent:E140":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//LEGENDARY HERO
		"talent:E139": {
			canEquipFaction: function(upgrade,ship,fleet) {
				//console.log(factions.hasFaction(ship,"bajoran", ship, fleet))
				return (ship.captain && $factions.hasFaction(ship.captain,"bajoran", ship, fleet)) && $factions.hasFaction(ship,"bajoran", ship, fleet);
			}
		},
		//D'Jarras
		"talent:E138": {
			canEquipFaction: function(upgrade,ship,fleet) {
				//console.log(factions.hasFaction(ship,"bajoran", ship, fleet))
				return (ship.captain && $factions.hasFaction(ship.captain,"bajoran", ship, fleet)) && $factions.hasFaction(ship,"bajoran", ship, fleet);
			}
		},
		//TACHYON EDDIES
		"tech:T110": {
			canEquip: function(upgrade,ship,fleet) {
				//console.log(onePerShip("TACHYON EDDIES")(upgrade,ship,fleet), ship.class)
				return onePerShip("TACHYON EDDIES")(upgrade,ship,fleet);
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				//console.log(onePerShip("TACHYON EDDIES")(upgrade,ship,fleet), ship.class)
				//console.log(factions.hasFaction(ship,"bajoran", ship, fleet))
				return ( ship && ship.class == "BAJORAN SOLAR SAILOR" );
			}
		},
		//MAINSAILS
		"tech:T109": {
			canEquip: function(upgrade,ship,fleet) {
				//console.log(onePerShip("TACHYON EDDIES")(upgrade,ship,fleet), ship.class)
				return onePerShip("MAINSAILS")(upgrade,ship,fleet);
			},
			canEquipFaction: function(upgrade,ship,fleet) {

				return ( ship && ship.class == "BAJORAN SOLAR SAILOR" );
			}
		},
		//SOLAR SAIL POWERED
		"tech:T108": {
			canEquipFaction: function(upgrade,ship,fleet) {

				return ( ship && ship.class == "BAJORAN SOLAR SAILOR" );
			}
		},


	//Diaspora :72003p
		//Insectoid Commander
		"captain:Cap612":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Neuro Toxin
		"talent:E028":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Insectoid Riflemen
		"crew:C028":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Pulse-Firing Particle Cannon
		"weapon:W019": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(card,ship,fleet,cost) {
						if( ship && !hasFaction(ship,"xindi",ship,fleet) )
							return resolve(card,ship,fleet,cost) + 5;
						return cost;
					}
				}
			},
		},
		//Phase Deflector Pulse
		"tech:T024": {
			canEquip: function(card,ship,fleet) {
				if( !hasFaction(ship,"xindi",ship,fleet) )
					return false;
				return onePerShip("Phase Deflector Pulse")(card,ship,fleet);
			},
		},

	//Azati Prime :72004p
		//Kiaphet Amman'sor
		"captain:Cap508":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		// Ibix Dynasty
		"talent:E036": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: cloneSlot( 2, { type: ["weapon"] } )
		},
		//Aquatic Councilor
		"crew:C036":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Prototype Weapon
		"weapon:W028": {
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction(ship,"xindi",ship,fleet);
			}
		},
		//Escape Pod
		"tech:T045":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},


	//Xindus :72224p
		//Kolo
		"captain:Cap537":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Dominant Species
		"talent:E144":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Damron
		"crew:C237":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		// Photon Torpedoes - +1 attack die if fielded on a Xindi Reptilian Warship
		"weapon:W141": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			attack: function(upgrade,ship,fleet,attack) {
				if( ship && ship.class == "Xindi Reptilian Warship" )
					return resolve(upgrade,ship,fleet,attack) + 1;
				return attack;
			}
		},
		//Sensor Encoders
		"tech:T122":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},


	// Temporal Cold War Cards : 72224gp
		// Vosk - talents have no faction penalty
		"captain:temporal_cold_war_vosk": {
			factionPenalty: function(card,ship,fleet,factionPenalty) {
				if( card.type == "talent" )
					return 0;
				return factionPenalty;
			}
		},

		// Temporal Conduit - +5 SP if fielded on a non-Mirror Universe ship
		"tech:T126": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"mirror-universe", ship, fleet) )
							// Note, only add 4 since the existing faction penalty will also
							// be in play.
							// TODO Fix this logic to not apply the normal penalty, only 5 here
							return resolve(upgrade,ship,fleet,cost) + 4;
						return cost;
					}
				}
			}
		},


	//R.I.S. Pi :71222
		// Distress Signal - one per ship only
		"tech:T103": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Distress Signal")(upgrade,ship,fleet);
			}
		},
		// Gravition Field Generator - one per ship only
		"tech:T102": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Gravition Field Generator")(upgrade,ship,fleet);
			}
		},
		// Self Destruct Sequence - one per ship only
		"tech:T101": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Self Destruct Sequence")(upgrade,ship,fleet);
			}
		},


	//U.S.S. Valiant :71221
		//Tim Watters
		"captain:Cap434" : {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots : [{}, {
				type : ["crew"]
			}],
		},
		//Red Squad
		"talent:E136":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(card,ship,fleet) {
				return hasFaction(ship,"federation",ship,fleet) && hasFaction(ship.captain,"federation",ship,fleet) || hasFaction(ship,"bajoran",ship,fleet) && hasFaction(ship.captain,"bajoran",ship,fleet) || hasFaction(ship,"vulcan",ship,fleet) && hasFaction(ship.captain,"vulcan",ship,fleet) || hasFaction(ship,"federation",ship,fleet) && hasFaction(ship.captain,"bajoran",ship,fleet) || hasFaction(ship,"federation",ship,fleet) && hasFaction(ship.captain,"vulcan",ship,fleet) || hasFaction(ship,"vulcan",ship,fleet) && hasFaction(ship.captain,"federation",ship,fleet) || hasFaction(ship,"vulcan",ship,fleet) && hasFaction(ship.captain,"bajoran",ship,fleet) || hasFaction(ship,"bajoran",ship,fleet) && hasFaction(ship.captain,"federation",ship,fleet) || hasFaction(ship,"bajoran",ship,fleet) && hasFaction(ship.captain,"vulcan",ship,fleet);
			}},
		//Riley Aldrin Shepard
		"crew:C222":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Karen Ferris
		"crew:C221":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//"Dorian Collins
		"crew:C220":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Nog
		"crew:C219":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes
		"weapon:W126":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Kumari :71223
		//THY'LEK SHRAN
		"captain:Cap647:":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//DIVERSION
		"talent:E135":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//TALAS
		"crew:C218":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//ADVANCED WEAPONRY
		"weapon:W125":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//PARTICLE CANNON ARRAY
		"weapon:W124":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//TRACTOR BEAM
		"tech:T107":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//LONG RANGE SENSORS
		"tech:T106":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Weapon Zero :71225
		//Dolim
		"captain:Cap816":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		// Arming Sequence - only on Xindi Weapon
		"talent:E142": {
			canEquip: function(upgrade,ship,fleet) {
				return ( ship && ship.class == "Xindi Weapon" );
			}
		},
		// Degra
		"crew:C230": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("weapon", upgrade, ship) && $factions.hasFaction(upgrade,"xindi", ship, fleet) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					},
				}
			}
		},
		// Destructive Blast - only on Xindi Weapon
		"weapon:W136": {
			canEquip: function(upgrade,ship,fleet) {
				return ( ship && ship.class == "Xindi Weapon" );
			}
		},
		// Rotating Emitters - only on Xindi Weapon
		"weapon:W135": {
			canEquip: function(upgrade,ship,fleet) {
				return ( ship && ship.class == "Xindi Weapon" );
			}
		},
		// Subspace Vortext - only on Xindi ship
		"tech:T117": {
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"xindi", ship, fleet);
			}
		},
		// Self-Destruct - only on Xindi Weapon
		"tech:T116": {
			canEquip: function(upgrade,ship,fleet) {
				return ( ship && ship.class == "Xindi Weapon" );
			}
		},


	//I.R.W. T'Met :72221p
		// TODO add a talent slot somehow or a way to add a talent card without the slot
		"captain:Cap329": {
			// ... if there is at least one other Romulan Ship in your starting fleet, Tebok my field 1 Romulan [talent] at a cost of -1 SP.
			// This is a messy implementation. It requires recalculation of the candidate for each upgrade on the ship.
			intercept: {
				ship: {
					cost: function(upgrade,ship,fleet,cost) {

						var candidate = false;
						var candCost = 0;
						var romulanCount = 0;

						// Find if there are two romulan ships in the fleet
						$.each( fleet.ships, function(i, ship) {
							if ( $factions.hasFaction(ship,"romulan",ship,fleet) )
								romulanCount += 1;
						});

						if (romulanCount < 2)
							return cost;

						// Find a talent on the ship
						$.each( $filter("upgradeSlots")(ship), function(i, slot) {
							if( slot.occupant && slot.occupant != upgrade && slot.occupant.type == "talent" && $factions.hasFaction(slot.occupant,"romulan",ship,fleet) ) {
								var occCost = valueOf(slot.occupant,"cost",ship,fleet);
								// Stop as soon as we have a Talent with cost > 0
								if( occCost > 0 ) {
									candidate = slot.occupant;
									candCost = occCost;
									return false;
								}
							}
						});

						// Subtract 1 from Tebok's cost
						return candCost > 0 ? cost - 1 : cost;

					}
				}
			}
		},
		// Charing Weapons - one per ship only
		"weapon:W134": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("CHARGING WEAPONS")(upgrade,ship,fleet);
			}
		},
		// Self Repair Technology - one per ship only
		"tech:T115": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("SELF REPAIR TECHNOLOGY")(upgrade,ship,fleet);
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "romulan", ship, fleet );
			}
		},


	//I.K.S. Amar :72232
		// Stand By Torpedoes - one per ship only
		"weapon:W139": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Stand By Torpedoes")(upgrade,ship,fleet);
			}
		},
		// Klingon Helmsman - +5 SP if fielded on a non-Klingon ship
		"crew:C234": {
			intercept: {
				self: {
					canEquip: function(upgrade,ship,fleet) {
						if ( ship && ship.classData && ship.classData.maneuvers )
							for (i = 1; i < ship.classData.maneuvers.max; i++ )
							{
								if ( ship.classData.maneuvers[i].about !== undefined )
									return true;
							}
						return false;
					}
				},
				ship: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"klingon", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		// Klingon Navigator - one per ship only
		"crew:C233": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Klingon Navigator")(upgrade,ship,fleet);
			}
		},


	// I.R.W. Jazkal :72233
	// Prototype Cloaking Device - +5 SP for any non-Romulan ship, one per ship only
		"tech:T121": {
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"romulan", ship, fleet))
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					},
					canEquip: function(upgrade,ship,fleet) {
						return onePerShip("Prototype Cloaking Device")(upgrade,ship,fleet);
					}
				}
			}
		},
		// Nijil
		"crew:C235": {
			//text: "Add 1 [tech] Upgrade to your Upgrade Bar. That Upgrade costs -1 SP (min 1) and must be a Romulan [tech] Upgrade.",
			upgradeSlots: cloneSlot( 1 ,
				{
					type: ["tech"],
					intercept: {
						ship: {
							cost: function(upgrade,ship,fleet,cost) {
								cost = resolve(upgrade,ship,fleet,cost) - 1;
								if (cost < 1)
									cost = 1;
								return cost;
							},
							canEquip: function(card,ship,fleet,canEquip) {
								if( !$factions.hasFaction( card, "romulan", ship, fleet ) )
									return false;
								return canEquip;
							}
						}
					}
				}
			),
		},
		// Reman Bodyguards - one per ship only, if on ship with Vrax as captain -2 SP
		"crew:C236": {
				intercept: {
				self: {
					canEquip: function(upgrade,ship,fleet) {
						if ( onePerShip("Reman Bodyguards")(upgrade,ship,fleet) )
							return true;
						if ( onePerShip("Reman Bodyguards")(upgrade,ship,fleet) && ship.captain && ( ship.captain.name == "Vrax" ) )
							return true;
						return false;
					},
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.captain && ship.captain.name == "Vrax" )
							return resolve(upgrade,ship,fleet,cost) - 2;
						return cost;
					}
			}
			},
		},
		// Disruptor Banks - one per ship only
		"weapon:W140": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Disruptor Banks")(upgrade,ship,fleet);
			}
		},


	//U.S.S. Montgolfier :72231
		//Orfil Quinteros
		"captain:Cap536":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Wesley Crusher
		"crew:C231":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Heavy Gravition Beam
		"weapon:W138":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Photon Torpedoes
		"weapon:W137":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Thruster Array
		"tech:T118":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Subspace Transmitter
		"tech:T119":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//U.S.S. Constellation :72234p
		//Matt Decker
		"captain:Cap332":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Standby Battle Stations - check for battlestations icon in action bar of assigned ship
		"talent:E145": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return (ship && !!~ship.actions.indexOf("battlestations"));
			}
		},
		//Damage Control Party
		"crew:C238":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Auxiliary Control Room
		"question:Q007":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Auxiliary Control Room")(upgrade,ship,fleet);
			}},
		//Automated Distress Beacon
		"question:Q006":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Automated Distress Beacon")(upgrade,ship,fleet);
			}},


	//U.S.S. Reliant :72235p
		//Khan Singh
		"captain:Cap725":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// No faction penalty for upgrades
					factionPenalty: function(card, ship, fleet, factionPenalty) {
						if( isUpgrade(card) )
							return 0;
						return factionPenalty;
					},
					//text: "Up to 3 of the Upgrades you purchase for your ship cost exactly 4 SP each and are placed face down beside your Ship Card, the printed cost on those Upgrades cannot be greater than 6",
					// Discounting up to 3 Upgrades that cost 5 or 6 sp
					cost: function(card,ship,fleet,cost) {
					  var replacement_cost = false;

					  // Skip ship cards, save a little processing time
					  if (card.type != "ship") {

					    //Otherwise, grab all of the upgrade assigned to the ship
					    var candidates = [];
					    var occupied_slots = $filter("upgradeSlots")(ship);
					    $.each(occupied_slots, function(i, slot) {
							if (slot.occupant && (slot.occupant.cost == 5 || slot.occupant.cost == 6))
					        candidates.push(slot);
					    });

					    // Only process if we have candidate cards
					    if (candidates.length){

								// Only worry about sorting if we have more than three candidates
					      if (candidates.length > 3){
					        candidates.sort(function(a,b){
					          return b.occupant.cost - a.occupant.cost;
					        });
									candidates = candidates.slice(0, 3);
					      }

								// Now that we know the candidate cards for discount, apply the
								// discount if the current card is one of the candidates
								for (var i = 0; i < candidates.length; i++){
									if (card.id == candidates[i].occupant.id){
										replacement_cost = true;
										break;
									}
								}
					    }
					  }

						var return_value = 0;
						if (replacement_cost) return_value = 4;
					  else return_value = resolve(card, ship, fleet, cost);

						return return_value;
					}
				}
			}
		},
		//Ceti Eel
		"talent:E148":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Fire!
		"talent:E147":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Joachim
		"crew:C240":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//All Power To Phasers
		"weapon:W143":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//.K.S. Drovana :72241
		// Kurn
		"captain:Cap539": {
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Klingon only",
					canEquip: function(card,ship,fleet,canEquip) {
						return $factions.hasFaction( card, "klingon", ship, fleet );
					}
				}
			]
		},
		// Emergency Power
		"tech:T124": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Emergency Power")(upgrade,ship,fleet);
			}
		},
		// Photon Torpedoes (Vor'cha Bonus)
		"weapon:W142": {
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Vor'cha Class" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}
		},


	//.R.W. Algeron :72242
		// Command Pod
		"talent:E151": {
			canEquip: function(upgrade,ship,fleet) {
				return ( ship && ship.class == "D7 Class" );
			}
		},
		// Romulan Technical Officer
		"crew:C243": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Romulan Technical Officer")(upgrade,ship,fleet);
			}
		},
		// Impulse Drive
		"tech:T127": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Impulse Drive")(upgrade,ship,fleet);
			}
		},


	// Borg Cube with Sphere Port 72255
		// I Am The Borg
		"talent:E153": {
			rules: "Borg Queen only",
			canEquip: function(upgrade,ship,fleet) {
				return ship.captain && ship.captain.name == "Borg Queen";
			}
		},
		// Borg Support Vehicle Dock
		"borg:B017": {
			rules: "Borg Cube only",
			canEquip: function(upgrade,ship,fleet) {
				return ( ship && ship.class == "Borg Cube" );
			}
		},
		// Borg Support Vehicle Token
		"question:Q008":{
			canEquip: onePerShip("Borg Support Vehicle Token"),
			factionPenalty: function(upgrade, ship, fleet) {
				return upgrade && upgrade.name == "Borg Support Vehicle Token" ? 0 : 1 ;
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0 || $.inArray( "borg", slotTypes ) >= 0;
			},
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull <= 7;
			},
			upgradeSlots: [
				{
					type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				}
			],
			intercept: {
				ship: {
					cost: function(card, ship, fleet, cost) {
						var modifier = 0;
						if (card.type == "ship" && ship.class == "Borg Sphere")
							modifier = 15;
						else if (card.type == "ship")
							modifier = 10;
						return cost - modifier;
					}
				}
			}
		},
		// Temporal Vortex
		"tech:T128": {
			rules: "Borg ship only",
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "borg", ship, fleet );
			}
		},


	//Kruge's Bird-of-Prey :72236p
		// Kruge
		"captain:Cap727" : {
					upgradeSlots : [{}, {
							type : ["crew"]
						}
					],

				},

	//H.M.S. Bounty :72260p
		//James T. Kirk
		"captain:Cap821": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// All federation (Vulcan & Bajoren) crew cost -1 SP
					cost: function(upgrade, ship, fleet, cost) {
					if( checkUpgrade("crew", upgrade, ship) && $factions.hasFaction(upgrade,"federation", ship, fleet) || $factions.hasFaction(upgrade,"bajoran", ship, fleet) || $factions.hasFaction(upgrade,"vulcan", ship, fleet) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					},
				}
			}
		},
		//Hikaru Sulu
		"crew:C252":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Pavel Chekov
		"crew:C249":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Montgomery Scott
		"crew:C248": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech", "weapon"]
				}
			]
		},
		//Nyota Uhura
		"crew:C247":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//U.S.S. Enterprise-A :72260gp
		//James T. Kirk
		"captain:Cap907":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Leonard McCoy
		"crew:C251":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Valeris
		"crew:C250":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Torpedo Bay
		"weapon:W146": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["weapon"],
					rules: "Photon Torpedoes Only",
					canEquip: function(upgrade) {
						return upgrade.name.indexOf("Photon Torpedoes") >= 0;
					},
				}
			]
		},
		//Isolation Door
		"tech:T129":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//U.S.S. Venture :72253
		//Donald Varley
		"captain:Cap436":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Galaxy Wing Squadron
		"talent:E155":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Additional Phaser Arrays
		"weapon:W149": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Additional Phaser Arrays")(upgrade,ship,fleet);
			}
		},
		//Photon Torpedoes
		"weapon:W148":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Maximum Warp
		"tech:T132":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//High-Capacty Deflector Shield Grid
		"tech:T131": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("High-Capacty Deflector Shield Grid")(upgrade,ship,fleet);
			}
		},
		//Computer Core
		"question:Q017": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			isSlotCompatible: function(slotTypes) {
				//console.log($.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0);
				return $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			]
		},


	//U.S.S. Cairo :72261p
		//Edward Jellico
		"captain:Cap649":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Task Force
		"talent:E154":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//High Yield Photon Torpedoes
		"weapon:W147":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Deuterium Tank
		"tech:T130":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Delta Shift
		"question:Q009": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			isSlotCompatible: function(slotTypes) {
				//console.log($.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0);
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [
				{
					type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				}
			],
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Delta Shift")(upgrade,ship,fleet);
			}
		},


	//U.S.S Enterprise-B :72263
		//John Harriman
		"captain:Cap220":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Demora Sulu
		"crew:C257":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Holo-Communicator
		"tech:T137": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			rules: "Only one per ship",
			canEquip: onePerShip("Holo-Communicator")
		},
		//Full Reverse
		"tech:T136": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			rules: "Only one per ship",
			canEquip: onePerShip("Full Reverse")
		},
		//Deflector Control
		"tech:T135": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			rules: "Only one per ship",
			canEquip: onePerShip("Deflector Control")
		},
		//Resonance Burst
		"tech:T134": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			rules: "Only one per ship",
			canEquip: onePerShip("Resonance Burst")
		},
		//Improved Phasers
		"weapon:W151":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//I.R.W. Rateg :72262p
		// Control Central
		"tech:T133": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Control Central")(upgrade,ship,fleet);
			}
		},
		// Main Batteries
		"weapon:W150": {
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Main Batteries")(upgrade,ship,fleet);
			},
			upgradeSlots: [
				{
					type: ["weapon"]
				}
			]
		},


	//Kohlar’s Battle Cruiser :72270p
		//Kohlar
		"captain:Cap333":{
			canEquip: function(upgrade,ship,fleet) {
				return upgrade.name == "Kuvah'Magh";
			},
			intercept: {
				ship: {
					//Kuvah'Magh costs -2
					cost: function(upgrade, ship, fleet, cost) {
					if( upgrade.name == "Kuvah'Magh" )
							return resolve(upgrade, ship, fleet, cost) - 2;
						return cost;
					},
				}
			}
		},

	//Orassin :72273
		//Insectoid Councilor
		"captain:Cap728":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Thalen
		"talent:E161":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			// -2 SP if equipped with Xindi weapon
			upgradeSlots: [{/* Existing Talent Slot */} ].concat( cloneSlot( 1 ,
				{
					type: ["weapon"],
					rules: "-2 SP if Xindi",
					intercept: {
						ship: {
							cost: function(upgrade, ship, fleet, cost) {
								if( $factions.hasFaction(upgrade,"xindi", ship, fleet) )
									return resolve(upgrade, ship, fleet, cost) - 2;
								return cost;
							}
						}
					}
				}
			))},
		//Xindi Council
		"talent:E160":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"xindi", ship, fleet) && hasFaction(ship.captain,"xindi", ship, fleet);
			}},
		//Insecetoid Raiding Party
		"crew:C259":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Xindi") < 0)
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					},
					canEquip: function(upgrade,ship,fleet) {
						return onePerShip("Insecetoid Raiding Party")(upgrade,ship,fleet);
					}
				}
			}},
		//Pulse-Firing Particle Cannon
		"weapon:W153":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Xindi") < 0)
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Xindi Torpedoes
		"weapon:W152":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		// Hatchery - Orassin
		"tech:T139": {
			// Equip only on a Xindi ship
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"xindi", ship, fleet) && onePerShip("Hatchery");
			},
			upgradeSlots: [
				{
					type: ["crew"],
					source: "Face-down Xindi (free)",
					intercept: {
						ship: {
							cost: function(upgrade,ship,fleet,cost) {
								cost = 0;
								return cost;
							},
							canEquip: function(card,ship,fleet,canEquip) {
								if( !$factions.hasFaction( card, "xindi", ship, fleet ) )
									return false;
								return canEquip;
							}
						}
					}
				},
				{
					type: ["crew"]
				}
			]},


	//I.K.S. Bortas :72280p

	//I.K.S. Hegh'ta :72281p
		// Auxiliary Power to Shields - I.K.S. Hegh'ta
		"tech:T140": {
			rules: "Only one per ship",
			canEquip: onePerShip("Auxiliary Power to Shields")
		},
		// Course Change - I.K.S. Hegh'ta
		"question:Q016": {
			isSlotCompatible: function(slotTypes) {
				//console.log($.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0);
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0 || $.inArray( "talent", slotTypes ) >= 0;
			},
			rules: "Only one per ship",
			canEquip: onePerShip("Course Change")
		},

	//I.K.S. Toral :72282p
		//Lursa and B'Etor crew
		"crew:C262": {
			upgradeSlots: [
				{
					type: ["talent"]
				}
			],
			canEquip: function(upgrade,ship,fleet) {
				return ship.captain && ship.captain.id == "Cap439";
			},
			intercept: {
				ship: {
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain )
							return resolve(upgrade,ship,fleet,skill) + 4;
						return skill;
					}
				}
			}
		},
		"crew:C261": {
			upgradeSlots: [
				{
					type: ["talent"]
				}
			],
			canEquip: function(upgrade,ship,fleet) {
				return ship.captain && ship.captain.id == "Cap438";
			},
			intercept: {
				ship: {
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain )
							return resolve(upgrade,ship,fleet,skill) + 4;
						return skill;
					}
				}
			}
		},
		//Aft Shields
		"tech:T141":{
			rules: "Only one per ship",
			canEquip: onePerShip("Aft Shields")
		},

	//Sela's Warbird :72282gp
		//Movar
		"captain:Cap542":{
			intercept: {
				ship: {
					type: function(card,ship,fleet,type) {
						if( $.inArray("tech",type) >= 0 || $.inArray("weapon",type) >= 0 || $.inArray("crew",type) >= 0 )
							return type.concat(["ship-resource"]);
						return type;
					}
				}
			}
		},
		//Movar's Ability
		"ship-resource:Rs01":{
			upgradeSlots: [
				{ type: ["talent", "tech", "weapon", "crew"] }
			],
			//How do you remove a slot type?
		},
		//Klingon-Romulan Alliance
		"talent:E166":{
		canEquipFaction: function(upgrade,ship,fleet) {
			return ( hasFaction(ship,"romulan", ship, fleet) || hasFaction(ship,"klingon", ship, fleet) ) && ( hasFaction(ship.captain,"romulan", ship, fleet) || hasFaction(ship.captain,"klingon", ship, fleet ));
		}},
		//Tachyon Pulse
		"tech:T142":{
			rules: "Only one per ship",
			canEquip: onePerShip("Tachyon Pulse")},


	//Calindra :72281
		//Aquatic Councilor
		"captain:Cap221":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Kiaphet Amman'Sor
		"captain:Cap440":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		"admiral:A029":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 3;
			}},
		//Xindi Torpedoes
		"weapon:W154":{intercept: {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship && ship.class == "Xindi Aquatic Cruiser" )
							return resolve(upgrade,ship,fleet,attack) + 1;
						return attack;
					}
				}
			}},
		//Biometric Hologram
		"tech:T145":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			// Only one per ship
			canEquip: onePerShip("Biometric Hologram"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain &&  $factions.hasFaction(ship,"xindi", ship, fleet) &&  $factions.hasFaction(ship.captain,"xindi", ship, fleet);
		}},
		//Subspace Vortex
		"tech:T144":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Xindi") < 0)
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		//Trellium-D
		"tech:T143":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf("Xindi") < 0)
							return resolve(upgrade,ship,fleet,cost) + 4;
						return cost;
					}
				}
			}},
		//Raijin
		"crew:C265":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Retaliation
		"talent:E167":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain &&  $factions.hasFaction(ship,"xindi", ship, fleet) &&  $factions.hasFaction(ship.captain,"xindi", ship, fleet);
		}},

	/**
	//Yesterdays U.S.S. Enterprise-D
		// Jean-Luc Picard - Enterprise-D
		"captain:Cap803": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					cost: function(card,ship,fleet,cost) {
						if( (card.type == "tech" || card.type == "weapon") && !$factions.hasFaction(card,"borg", ship, fleet) )
							cost = resolve(card, ship, fleet, cost) - 1;
						return cost;
					}
				}
			}
		},
	*/
	//72284p
		"captain:Cap803": {
			intercept: {
				ship: {
					/**
					 * Cost function for Diet Picard
					 *
					 * This Picard takes 2 SP off of the cost of the ship he is assigned
					 * to and 1 SP off up to three upgrades for a total of 5 SP max.
					 *
					 * In this implementation, the extra points are taken off the 3 most
					 * expensive cards in the current ship configuration that are assigned
					 * to the ship itself.
					 * TODO Upgrade values only sort on base card value, fix this at some point
					 */
					cost:{
					priority: 100,
					fn:	function(card,ship,fleet,cost) {
						var modifier = 0;

						// If we have intercepted the ship card, factor in the discount
						if ( card.type == "ship" )
							modifier = 2;

						// Otherwise
						else {
							var candidates = [];

							// Grab all of the upgrades assigned to the ship
							var occupied_slots = $filter("upgradeSlots")(ship);
							$.each(occupied_slots, function(i, slot) {
								if (slot.occupant)
									candidates.push(slot);
							});

							// If there are no candidates, save some time and skip out
							if (candidates.length) {

								// If there are more than three, sort them by cost and grab the
								// three most valuable
								if (candidates.length > 3) {
									candidates.sort(function(a, b) {
										return b.occupant.cost - a.occupant.cost;
									});

									candidates = candidates.slice(0, 3);
								}

								// Now that we know the candidate cards for discount, apply the
								// discount if the current card is one of the candidates
								for (var i = 0; i < candidates.length; i++) {
									if (card.id == candidates[i].occupant.id){
										modifier = 1;
										break;
									}
								}
							}
						}
						return resolve(card, ship, fleet, cost) - modifier;
					}
				}
			}
			}
		},


		//Dispersal Pattern Sierra
		"talent:E168":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		// Transporter - U.S.S. Enterprise-D
		"tech:T146": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			rules: "Only one per ship",
			canEquip: onePerShip("Transporter")
		},
		// Aft Phaser Emitters - U.S.S. Enterprise-D
		"weapon:W155": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			attack: 0,
			// Equip only on a Federation ship with hull 4 or more
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"federation", ship, fleet) || $factions.hasFaction(ship,"bajoran", ship, fleet) || ship.hull >= 4;
			},
			intercept: {
				self: {
					// Attack is same as ship primary - 1
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet) - 1;
						return attack;
					},
					// Cost is primary weapon
					cost: function(upgrade,ship,fleet,cost) {
						if( ship )
							return resolve(upgrade,ship,fleet,cost) + valueOf(ship,"attack",ship,fleet);
						return cost;
					}
				}
			}
		},
		// Natasha Yar - U.S.S. Enterprise-D
		"crew:C266": {
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["weapon"]
				},
				{
					type: ["weapon"]
				}
			]
		},


	//Muratas :72293
		//Degra
		"captain:Cap441":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Dolim
		"captain:Cap801":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					// Add the "weapon" type to all Tech and Crew slots
					type: function(card,ship,fleet,type) {
						if( $.inArray("tech",type) >= 0 || $.inArray("crew",type) >= 0 )
							return type.concat(["weapon"]);
						return type;
					},
					// All Weapon type Upgrades cost -1 SP
					cost: function(upgrade, ship, fleet, cost) {
						if ( checkUpgrade("weapon", upgrade, ship) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					}
				}
			}
		},
		//Patience is for the Dead
		"talent:E169":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}},
		//Xindi Torpedoes - Reptilian
		"weapon:W157":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			self: {
				attack: function(upgrade,ship,fleet,attack) {
				if( ship && ship.class == "Xindi Reptilian Warship" )
					return resolve(upgrade,ship,fleet,attack) + 1;
				return attack;
				}
			}
		},
		// Particle Beam Weapon - Muratas
		"weapon:W156": {
			attack: 0,
			// Equip only on a Xindi
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"xindi", ship, fleet);
			},
			intercept: {
				self: {
					// Attack is same as ship primary + 1
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet) + 1;
						return attack;
					},
					// Cost is primary weapon
					cost: function(upgrade,ship,fleet,cost) {
						if( ship )
							return resolve(upgrade,ship,fleet,cost) + valueOf(ship,"attack",ship,fleet);
						return cost;
					}
				}
			}
		},
		//Reptilian Analysis Team
		"crew:C267":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			],
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "xindi", ship, fleet );
			},
			// Only one per ship
			canEquip: onePerShip("Reptilian Analysis Team")
		},
		//Thermal Chamber
		"tech:T148":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Xindi Reptilian Warship";
			}
		},
		//Sensor Encoders
		"tech:T147":{
			// Only one per ship
			canEquip: onePerShip("Sensor Encoders"),
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Xindi Reptilian Warship";
			}
		},


	//U.S.S. Defiant NCC-1764 :72290p
		//Aft Photon Torpedoes
		"weapon:W158":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//Delta Flyer II :72300p
		//Tom Paris
		"captain:Cap408":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Quick Thinking
		"talent:E170":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Impulse Thrusters
		"tech:T149":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Impulse Thrusters")
		},
		//Pulse Phased Weapons
		"weapon:W159":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//B'Elanna Torres
		"crew:C271":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},


	//U.S.S. Grissom :72011wp
		//J.T. Esteban
		"captain:Cap335":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Captain's Discretion",
					canEquip: function(card,ship,fleet,canEquip) {
						if( card.name != "Captain's Discretion" )
							return false;
						return canEquip;
					}
				}
			]
			},
		//Captain's Discretion
		"talent:E171":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//David Marcus
		"crew:C276":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Saavik
		"crew:C275":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Federation Helmsman
		"crew:C274":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Comm Station
		"tech:T152":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["crew"]
				}
			],
			canEquip: onePerShip("Comm Station")
		},
		//Close-Range Scan
		"tech:T1511":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Close-Range Scan")
		},
		//Genesis Effect
		"tech:T150":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			name: "Genesis Effect",
			range: false,
			upgradeSlots: [
				{
					type: ["crew"],
					rules: "Crew, 5SP or less",
					intercept: {
						ship: {
							free: function() { return true; },
							canEquip: function(upgrade, ship, fleet, canEquip) {
								if( valueOf(upgrade,"cost",ship,fleet) > 5 )
									return false;
								return canEquip;
							}
						}

					}
				}
			]
		},
		//William T. Riker
		"crew:C273":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + 3;
						return skill;
					}
				}
			}
		},


	//I.K.S. Ves Batlh :72012wp
		//DNA Encoded Message
		"talent:E172":{
			upgradeSlots: cloneSlot( 3 ,
				{
					type: ["talent"],
					rules: "Klingon Talent Only",
					faceDown: true,
					intercept: {
						ship: {
							cost: function() { return 0; },
							factionPenalty: function() { return 0; },
							canEquip: function(card,ship,fleet,canEquip) {
								if( !$factions.hasFaction( card, "klingon", ship, fleet ) )
									return false;
								return canEquip;
							}
						}
					}
				}
			)
		},
		//Goroth
		"crew:C278":{
			upgradeSlots: [
				{
					type: ["crew"]
				}
			]
		},
		//Dispersive Armor
		"tech:T154":{
			canEquip: onePerShip("Dispersive Armor")
		},
		//Photon Detonation
		"question:Q010":{
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0;
			}
		},
		//Tellarite Bounty Hunter
		"crew:C280":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},


	//Dreadnought :72013wp
		//Captured
		"question:Q011": {
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			canEquip: onePerShip("Captured"),
			upgradeSlots: [
				{
					type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				}
			],
			intercept: {
				ship: {
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						if( card == ship && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					}
				}
			}
		},
		//Plasma Pulse
		"weapon:W162":{
			canEquip: onePerShip("Plasma Pulse")
		},
		//B'Elanna Torres
		"crew:C279":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Shield Adaption
		"tech:T155":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.hull >= 4;
			}
		},
		//B'Elanna's codes
		"tech:T157":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},

	//Prototype 02 :72014wp
		"ship:S267": {
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.name == "Gareb" ||  captain.name == "Jhamel" || captain.name == "Romulan Drone Pilot";
					}
				}
			}
		},
		"ship:S266": {
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.name == "Gareb" || captain.name == "Jhamel" || captain.name == "Romulan Drone Pilot";
					}
				}
			}
		},
		//Jhamel
		"captain:Cap336":{
			// Equip only on a Romulan Drone Ship
			canEquipCaptain: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			}
		},
		//Triphasic Emitters
		"weapon:W166": {
			name: "Triphasic Emitters",
			range: false,
			upgradeSlots: [
				{
					type: ["weapon"],
					rules: "Non-Borg, 5SP or less",
					intercept: {
						ship: {
							free: function() { return true; },
							canEquip: function(upgrade, ship, fleet, canEquip) {
								if( upgrade.printedValue == 0 || hasFaction(upgrade,"borg", ship, fleet) || valueOf(upgrade,"cost",ship,fleet) > 5 )
									return false;
								return canEquip;
							}
						}

					}
				}
			]
		},
		//Repair Protocol
		"tech:T160":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			},
			canEquip: onePerShip("Repair Protocol")
		},
		//Tellarite Disruptor Banks
		"weapon:W165":{
			canEquip: onePerShip("Tellarite Disruptor Banks"),
			factionPenalty: function(upgrade, ship, fleet) {
					return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
				},
		},
		//Evasive Protocol
		"tech:T159":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			},
			canEquip: onePerShip("Evasive Protocol")
		},
		//Disguise Protocol
		"tech:T158":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			},
			canEquip: onePerShip("Disguise Protocol")
		},


	//2017 Core Set
		//Picard
		"captain:Cap818":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Will Riker
		"captain:Cap655":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Duras
		"captain:Cap656":{
			upgradeSlots: cloneSlot( 1 ,
				{
					type: ["talent"],
					rules: "Klingon And Romulan Talents Cost Exactly 3 SP",
					faceDown: true,
					intercept: {
						ship: {
							cost: {
								priority: 100,
								fn: function(upgrade, ship, fleet, cost) {
									if( hasFaction(upgrade,"klingon",ship,fleet) || hasFaction(upgrade,"romulan",ship,fleet) )
										return 3;
									return cost;
								}
							},
							// TODO Check if faction penalty should be applied
							factionPenalty: function(upgrade, ship, fleet, factionPenalty) {
								if( hasFaction(upgrade,"klingon",ship,fleet) || hasFaction(upgrade,"romulan",ship,fleet) )
									return 0;
								return factionPenalty;
							}
						}
					}
				}
			)
		},
		//Data
		"captain:Cap443":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Make It So
		"talent:E175":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Riker Maneuver
		"talent:E176":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Blood Oath
		"talent:E174":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"klingon", ship, fleet);
			}},
		//Exocomp
		"tech:T163":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Tactical Station | One Per Ship
		"weapon:W170":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Tactical Station"),
			upgradeSlots: [
				{
					type: ["weapon"]
				}
			]
		},
		//Photon Torpedo 2017Core
		"weapon:W169":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary + 1
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet) + 1;
						return attack;
					}
				}
			}
		},
		//Torpedo Fusillade
		"weapon:W167":{
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary weapon
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					},
					// Cost is primary weapon
					cost: function(upgrade,ship,fleet,cost) {
						if( ship )
							return resolve(upgrade,ship,fleet,cost) + valueOf(ship,"attack",ship,fleet);
						return cost;
					}
				}
			}
		},
		"crew:C283":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C282":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C281":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C290":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet);
			}},
		"crew:C285":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C284":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},

	//2017 Romulan Faction Ser  : 75001
		//Tomalak
		"captain:Cap817":{
			upgradeSlots: [
				{/* Talent */},
				{
					type: ["tech"]
				}
			]
		},
		//Tal Shiar
		"talent:E177":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"romulan", ship, fleet);
			}
		},
		//Interphase Generator
		"tech:T248":{
			canEquip: onePerShip("Interphase Generator")
		},
		//Reinforced Shields
		"tech:T165":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Reinforced Shields") && ship.hull >= 5;
			}
		},
		//Auxiliary Power Core
		"tech:T166":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Auxiliary Power Core") && ship.hull >= 4;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && !$factions.hasFaction(ship,"romulan", ship, fleet) )
							return resolve(upgrade,ship,fleet,cost) + 2;
						return cost;
					}
				}
			}
		},
		//Additional Weapons Array
		"weapon:W171":{
			canEquip: function(upgrade,ship,fleet) {
				return (onePerShip("Additional Weapons Array") && ship.class == "D'deridex Class");
			}},


	//2017 Dominion Faction Set  : 75002
		//All Power to Weapons
		"talent:E180":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"dominion", ship, fleet) && ship.hull >= 5;
			}
		},
		//Talak'Talan
		"crew:C297":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"dominion", ship, fleet);
			}
		},
		//Duran'Adar
		"crew:C298":{
			upgradeSlots: [
				{
					type: ["tech"]
				}
			]
		},
		"weapon:W178":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Jem'Hadar Battleship ";
			}
		},
		"weapon:W176":{
			canEquip: function(upgrade,ship,fleet) {
				return (onePerShip("Phased Polaron Beams") && ship.class == "Jem'Hadar Attack Ship");
		}},
		"weapon:W174":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Jem'Hadar Attack Ship";
		}},
		"weapon:W175":{
			canEquip: onePerShip("Minesweeper")
		},
		"tech:T169":{canEquip: function(upgrade,ship,fleet) {
				return (onePerShip("Suicide Attack") && ship.class == "Jem'Hadar Attack Ship");
		}},
		"tech:T168":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"dominion", ship, fleet);
			}
		},

	//D'Kora Card Pack : 73001
		//Lurin
		"captain:Cap730":{
			intercept: {
				ship: {
					// No faction Lurin or Ferengi upgrades
					factionPenalty: function(card,ship,fleet,factionPenalty) {
						if( $factions.hasFaction(card,"ferengi", ship, fleet) )
							return 0;
						return factionPenalty;
					},
					// Ferengi upgrades are -1
					cost: function(card,ship,fleet,cost) {
						if( isUpgrade(card) && hasFaction(card,"ferengi",ship,fleet) )
							cost = resolve(card,ship,fleet,cost) - 1;
						return cost;
					}
				}
			}
		},
		"captain:Cap532":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Rules of Acquisition : 71806
		"talent:E181":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"ferengi", ship, fleet);
			}},
		//Arridor
		"crew:C303":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Doctor Reyga
		"crew:C302":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Kol
		"crew:C301":{canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"ferengi", ship, fleet);
			}},
		//Missile Launchers
		"weapon:W180":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Metaphasic Shields
		"tech:T170":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Metaphasic Shields"),
			intercept: {
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					}
				}
			}
		},
	//Borg Octahedron : 73001
		//Neural Transponder
		"talent:E182":{
			canEquip: onePerShip("Neural Transponder"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"borg", ship, fleet);
			}},
		//Neonatal Borg
		"crew:C305":{
			upgradeSlots: [
				{
					type: ["crew"]
				}
			],
			canEquip: onePerShip("Neonatal Borg"),
			intercept: {
				ship: {
					// Add the "crew" type to all Tech and Borg slots
					type: function(card,ship,fleet,type) {
					if( $.inArray("tech",type) >= 0 || $.inArray("borg",type) >= 0 && ( ship.hasFaction == "borg" ))
							return type.concat(["crew"]);
						return type;
					}
				}
			}
		},
		//Tractor Beam
		"weapon:W181":{
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary weapon
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					}
				}
			}
		},
	//Trap Travesty
		"weapon:W179":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},

	//Ferengi Faction Pack: 75003

		//Birta
		"captain:Cap819":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Prak
		"captain:Cap657":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Daimon Solok
		"captain:Cap446":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"]
				}, {
					type: ["crew"],
					faceDown: true,
					rules: "Cost of 3sp or less",
					intercept: {
						ship: {
							cost: function() { return 0; },
							canEquip: function(card,ship,fleet,canEquip) {
								if( (valueOf(card,"cost",ship,fleet) <= 4) && $factions.hasFaction( ship, "federation", ship, fleet ) || $factions.hasFaction( ship, "klingon", ship, fleet ) || $factions.hasFaction( ship, "romulan", ship, fleet ) || $factions.hasFaction( ship, "dominion", ship, fleet ) || $factions.hasFaction( ship, "borg", ship, fleet ) || $factions.hasFaction( ship, "bajoran", ship, fleet ) || $factions.hasFaction( ship, "vulcan", ship, fleet ) || $factions.hasFaction( ship, "mirror-universe", ship, fleet ) )
									return canEquip;
								else if ( (valueOf(card,"cost",ship,fleet) <= 3) || $factions.hasFaction( ship, "independent", ship, fleet ) || $factions.hasFaction( ship, "ferengi", ship, fleet ) || $factions.hasFaction( ship, "kazon", ship, fleet ) || $factions.hasFaction( ship, "xindi", ship, fleet ))
									return canEquip;
								return false;
				}}}},
				{
					type: ["crew"],
					faceDown: true,
					rules: "Cost of 3sp or less",
					intercept: {
						ship: {
							cost: function() { return 0; },
							canEquip: function(card,ship,fleet,canEquip) {
								if( (valueOf(card,"cost",ship,fleet) <= 4) && $factions.hasFaction( ship, "federation", ship, fleet ) || $factions.hasFaction( ship, "klingon", ship, fleet ) || $factions.hasFaction( ship, "romulan", ship, fleet ) || $factions.hasFaction( ship, "dominion", ship, fleet ) || $factions.hasFaction( ship, "borg", ship, fleet ) || $factions.hasFaction( ship, "bajoran", ship, fleet ) || $factions.hasFaction( ship, "vulcan", ship, fleet ) || $factions.hasFaction( ship, "mirror-universe", ship, fleet ) )
									return canEquip;
								else if ( (valueOf(card,"cost",ship,fleet) <= 3) || $factions.hasFaction( ship, "independent", ship, fleet ) || $factions.hasFaction( ship, "ferengi", ship, fleet ) || $factions.hasFaction( ship, "kazon", ship, fleet ) || $factions.hasFaction( ship, "xindi", ship, fleet ))
									return canEquip;
								return false;
				}}}}
			]
		},
		//Gint - Captain
		"captain:Cap223":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Grand Nagus Only",
					canEquip: function(upgrade) {
						return upgrade.name == "Grand Nagus";
					}
				},{
					type: ["talent"],
					rules: "The Rules of Acquisition Only",
					canEquip: function(upgrade) {
						return upgrade.name == "The Rules Of Acquisition";
					}
				}
			]
		},
		//Gint - Admiral
		"admiral:A033":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 3;
			},
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "Grand Nagus Only",
					canEquip: function(upgrade) {
						return upgrade.name == "Grand Nagus";
					}
				},{
					type: ["talent"],
					rules: "The Rules of Acquisition Only",
					canEquip: function(upgrade) {
						return upgrade.name == "The Rules Of Acquisition";
					}
				}
			]
		},
		//Grand Nagus
		"talent:E183":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"ferengi", ship, fleet);
			}},
		//Kemocite
		"tech:T172":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Kemocite")
		},
		//T9 Energy Converter
		"tech:T171":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Weapon Ports
		"weapon:W184":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Verteron Pulse
		"weapon:W182":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		"weapon:W183":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					}
				}
			}
		},
		//Gral
		"crew:C310":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"ferengi", ship, fleet);
			}},
		//Nava
		"crew:C309":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"ferengi", ship, fleet);
			}},
		//Letek
		"crew:C311":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Gegis
		"crew:C313":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Grilka
		"crew:C308":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1;
			}},
		//Vic Fontaine
		"question:Q019":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			type: "question",
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
		}},
		//Temporal Observatory
		"question:Q020":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "mirror", ship, fleet ) ? 0 : 1;
			},
			type: "question",
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0;
			}},
		//Bio-Mimetic Gel
		"question:Q012":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			type: "question",
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0;
			}},
	//Gorn Raider Card Package
		//Lahr
		"captain:Cap732":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		"captain:Cap447":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Gorn Hegemony
		"talent:E184":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				// TODO Tholians are Independent so can't easily tell their race
				return ship.captain && ( ship.captain.name == "S'Sesslak" || ship.captain.name == "Lahr" ||ship.captain.name.indexOf("Gorn") >= 0 );
			},
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Gorn Raider";
			}
		},
		//Slar
		"crew:C316":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Gorn Trooper
		"crew:C314":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + 1;
						return skill;
					}
				}
			}
		},
		//Gorn Pilot
		"crew:C315":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		"question:Q013":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Meridor - Gorn Ale")(upgrade,ship,fleet) && $factions.hasFaction( ship, "independent", ship, fleet ) || onePerShip("Meridor - Gorn Ale")(upgrade,ship,fleet) && $factions.hasFaction( ship, "ferengi", ship, fleet ) || onePerShip("Meridor - Gorn Ale")(upgrade,ship,fleet) && $factions.hasFaction( ship, "kazon", ship, fleet ) || onePerShip("Meridor - Gorn Ale")(upgrade,ship,fleet) && $factions.hasFaction( ship, "xindi", ship, fleet );
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [
				{
					type: function(upgrade,ship) {
						return getSlotType(upgrade,ship);
					}
				}
			],
		},
		//Hidden Explosives
		"weapon:W186":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		//Disruptor Bombardment
		"weapon:W185":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Gorn Raider" && onePerShip("Disruptor Bombardment");
			}
		},
		//Gorn Sensors
		"tech:T173":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Gorn Raider" && onePerShip("Gorn Sensors");
			}},
		//Enhanced Durability
		"tech:T174":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Gorn Raider" && onePerShip("Enhanced Durability");
			},
			upgradeSlots: [
				{
					type: ["tech"]
				}
			],
			intercept: {
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					},
					agility: function(card,ship,fleet,agility) {
						if( card == ship )
							return resolve(card,ship,fleet,agility) + 1;
						return agility;
					}
				}
			}
		},
		//Kal-if-fee
		"talent:E186":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}
		},
		//4th wing patrol ship
		"weapon:W187":{
			canEquip: onePerShip("Tactical Command Reticle"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "dominion", ship, fleet )
			},
			upgradeSlots: [
				{
					type: ["weapon"]
				}
			]
		},


	//Fighter Squadron 3
		//Lead Squadron
		"squadron:D032":{
			upgradeSlots: [
				{
					type: ["squadron"]
				}
			]
		},
		"squadron:D029":{
			canEquip: onePerShip("Defensive Maneuver Beta"),
		},
		"squadron:D028":{
			canEquip: onePerShip("Defensive Maneuver Theta"),
		},
		"squadron:D027":{
			canEquip: onePerShip("Flanking Maneuver Delta"),
		},
		"squadron:D031":{
			canEquip: onePerShip("Flanking Maneuver Epsilon"),
		},
		"squadron:D026":{
			canEquip: onePerShip("Flanking Attack Omega"),
		},
	//Hirogen Hunting Vessel
		"captain:Cap545":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		"captain:Cap339":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		"talent:E187":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				// TODO Tholians are Independent so can't easily tell their race
				return ship.captain && ( ship.captain.name == "Idrin" || ship.captain.name == "Karr" ||ship.captain.name.indexOf("Hirogen") >= 0 );
			}},
		"talent:E188":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}},
		"crew:C320":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Beta Hirogen"),
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + 1;
						return skill;
					}
				}
			}
		},

		"crew:C321":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Hirogen Warship";
			}},
		"weapon:W188":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					cost: function(upgrade,ship,fleet,cost) {
						if( ship && ship.class.indexOf( "Hirogen" ) < 0 )
							return resolve(upgrade,ship,fleet,cost) + 5;
						return cost;
					}
				}
			}
		},
		"tech:T178":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: onePerShip("Tractor Beam"),
		},
		"tech:T177":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Stealth Mode") && ship.class == "Hirogen Warship";
			}
		},
		"question:Q014":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0;
			}},

	//A Motley Fleet
		//Gurngouin
		"ship:S313":{
			upgradeSlots: [ {
					type: ["tech"],
					rules: "Free Inertial Compensators Only",
					canEquip: function(upgrade) {
						return upgrade.name == "Inertial Compensators";
					},
					intercept: {
						ship: {
							cost: function() { return 0; }
						}
					}
				} ]
		},
		//USS Dauntless
		"ship:S316":{
			intercept: {
				ship: {
					// Add the "crew" type to all Tech and Borg slots
					type: function(card,ship,fleet,type) {
						if( ship.captain && $.inArray(type, ship.captain) >= 0 )
							return type.concat(["crew"]);
						return type;
					}
				}
			},
			upgradeSlots: [ {
				type: ["crew"],
				rules: "Replace's Captain",
				intercept: {
					ship: {
						skill: function(upgrade,ship,fleet,skill) {
							return upgrade.cost + 3;
						return skill;
						}
					}
				}

			} ]
		},
		//Thomas Riker
		"captain:Cap658":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Arturis
		"captain:Cap609":{
			canEquipCaptain: function(upgrade,ship,fleet) {
				return ship.class == "Dauntless Class";
			}
		},
		//Jhamel
		"captain:Cap336":{
			// Equip only on a Romulan Drone Ship
			canEquipCaptain: function(upgrade,ship,fleet) {
				return ship.class == "Romulan Drone Ship";
			}
		},
		//Vidiian Captain
		"captain:Cap448":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
		}},
		//Telev
		"captain:Cap501":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
		}},
		//Maquis Tactics
		"talent:E192":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.captain && ( $factions.hasFaction(ship.captain,"independent", ship, fleet) || $factions.hasFaction(ship.captain,"ferengi", ship, fleet) || $factions.hasFaction(ship.captain,"kazon", ship, fleet) || $factions.hasFaction(ship.captain,"xindi", ship, fleet) ) && ship.class == "Maquis Raider";
			}
		},
		//Andorian Imperial Guard
		"talent:E191":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				// TODO Tholians are Independent so can't easily tell their race
				return ship.captain && ( ship.captain.name == "Telev" || ship.captain.name == "Thy'Lek Shran" ||ship.captain.name.indexOf("Andorian") >= 0 );
			}},
		//Vidiian Sodality
		"talent:E190":{
			canEquipFaction: function(upgrade,ship,fleet) {
				// TODO Tholians are Independent so can't easily tell their race
				return ship.captain && ship.captain.name.indexOf("Vidiian") >= 0 ;
			},
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Vidiian Battle Cruiser";
			}
		},
		//Tarah
		"crew:C340":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Andorian Battle Cruiser";
			}
		},
		//Teero Anaydis
		"crew:C338":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
		}},
		//Michael Jonas
		"crew:C339":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
		}},
		//Motura
		"crew:C337":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
		}},
		//Hypothermic Charges
		"weapon:W193":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Vidiian Battle Cruiser";
			}
		},
		//Enhanced Phasers
		"weapon:W194":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				if( ship.attack <= 2 )
					return true;
				return false;
			}
		},
		//Enhanced Shield Emitters
		"tech:T184":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Enhanced Shield Emitters") && ship.class == "Andorian Battle Cruiser";
			},
			intercept: {
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 2;
						return shields;
					}
				}
			}
		},
		//Particle Synthesis
		"tech:T251":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Particle Synthesis") && ship.class == "Dauntless Class";
			}},
		//Inertial Compensators
		"tech:T182":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					canEquip: function(upgrade,ship,fleet) {
						if ( ship && ship.hull <= 3 && ship.classData && ship.classData.maneuvers )
							for (i = 1; i < ship.classData.maneuvers.max; i++ )
							{
								if ( ship.classData.maneuvers[i].about !== undefined )
									return true;
							}
						return false;
					}
				}
			}
		},
		//Class 4 Cloaking Device
		"tech:T183":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Class 4 Cloaking Device") && ship.class == "Maquis Raider";
			}},
		//Repurposed Cargo Hold
		"question:Q015":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			},
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Repurposed Cargo Hold")(upgrade,ship,fleet) && $factions.hasFaction( ship, "independent", ship, fleet ) || onePerShip("Repurposed Cargo Hold")(upgrade,ship,fleet) && $factions.hasFaction( ship, "ferengi", ship, fleet ) || onePerShip("Repurposed Cargo Hold")(upgrade,ship,fleet) && $factions.hasFaction( ship, "kazon", ship, fleet ) || onePerShip("Repurposed Cargo Hold")(upgrade,ship,fleet) && $factions.hasFaction( ship, "xindi", ship, fleet );
			},
			isSlotCompatible: function(slotTypes) {
				return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
			},
			upgradeSlots: [ { type: ["tech", "weapon"] } ]
		},


	//Kelvin Timeline  75005
		"captain:Cap820":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
		upgradeSlots: [	{}, { type: ["crew"] } ]
		},
		//Chrisopher Pike
		"admiral:A034":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 3 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 3;
			},
		upgradeSlots: [	{}, { type: ["crew"] } ]
		},
		"captain:Cap733":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"captain:Cap502":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"captain:Cap601":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},

		"talent:E189":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"klingon", ship, fleet);
		}},
		"crew:C336":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"]
				}
			]
		},
		"crew:C335":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["talent"]
				}
			]},
		"crew:C334":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C333":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C332":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C331":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C330":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			upgradeSlots: [
				{
					type: ["crew"],
					faceDown: true,
					intercept: {
						ship: {
							canEquip: function(upgrade,ship,fleet) {
								// TODO Prevent use of upgrades without a defined cost (e.g. Dorsal Phaser Array)
								var cost = valueOf(upgrade,"cost",ship,fleet);
								return cost <= 4;

							return canEquip;
							},
							free: function() {
								return true;
							}
						}
					}
				}
			]},
		"crew:C329":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C328":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C327":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C326":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		"crew:C322":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet);
			}},
		"crew:C323":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet) && onePerShip("Klingon First Officer");
			}},
		"crew:C324":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet) ;
			}},
		"crew:C325":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet) ;
			}},
		"weapon:W189":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Constitution Class (Kelvin)" && onePerShip("Full Spread Phasers");
			}},
		"weapon:W192":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Constitution Class (Kelvin)" ;
			},
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary + 1
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet) + 1;
						return attack;
					}
				}
			}
		},
		"weapon:W191":{
			attack: 0,
			intercept: {
				self: {
					// Attack is same as ship primary + 1
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet) + 1;
						return attack;
					}
				}
			}
		},
		"weapon:W190":{
			canEquip: function(upgrade,ship,fleet) {
				return ship.class == "Warbird Class" ;
			}
		},
		"tech:T179":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet) && onePerShip("Klingon Cloaking Device");
			}},
		"tech:T180":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Future Technology");
			},
			upgradeSlots: [
				{
					type: ["tech"],
					faceDown: true,
					intercept: {
						ship: {
							canEquip: function(upgrade,ship,fleet) {
								// TODO Prevent use of upgrades without a defined cost (e.g. Dorsal Phaser Array)
								var cost = valueOf(upgrade,"cost",ship,fleet);
								return cost <= 4;

							return canEquip;
							},
							free: function() {
								return true;
							}
						}
					}
				}
			],
			intercept: {
				ship: {
					// No faction penalty for romulan or borg upgrades
					factionPenalty: function(card,ship,fleet,factionPenalty) {
						if( (card.type == "tech" && $factions.hasFaction(card,"romulan", ship, fleet)) || (card.type == "weapon" && $factions.hasFaction(card,"romulan", ship, fleet)) || (card.type == "tech" && $factions.hasFaction(card,"borg", ship, fleet)) || (card.type == "weapon" && $factions.hasFaction(card,"borg", ship, fleet)) )
							return 0;
						return factionPenalty;
					}
				}
			}
		},

		// The Animated Series : 75006

		// The USS Enterprise

		// James T. Kirk
		"captain:Cap822":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Robert April
		"captain:Cap825":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					// Skill is +1 on a Connie
					skill: function(upgrade,ship,fleet,skill) {
						if( ship.class == "Constitution Class" )
							return resolve(upgrade,ship,fleet,skill) + 1;
						return skill;
					}
				}
			}},
		//Worty Oponet
		"talent:E197":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"klingon", ship, fleet);
			}},
		//Legacy Of the Name
		"talent:E196":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			canEquipFaction: function(upgrade,ship,fleet) {
				return ship.captain && $factions.hasFaction(ship.captain,"federation", ship, fleet);
			}},
		//Kali
		"crew:C345":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet) ;
		}},
		//Kaz
		"crew:C356":{
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship,"klingon", ship, fleet) ;
		}},
		//Mr. Spock
		"crew:C348":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//M'ress
		"crew:C347":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Montgomery Scott
		"crew:C353":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Arex
		"crew:C354":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Harcourt Fenton Mudd
		"crew:C349":{
			intercept: {
				ship: {
					// No faction penalty for Khan or Talents
					factionPenalty: function(upgrade, ship, fleet, factionPenalty) {
						return upgrade.id == "C349" ? 0 : factionPenalty;
					}
				}
			}
		},
		//Full Power Phaser Barrage
		"weapon:W197":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			},
			intercept: {
				self: {
					// Attack is same as ship primary except on Constution Class
					attack: function(upgrade,ship,fleet,attack) {
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					}
				}
			}},

		//Magnetic Pulse
		"weapon:W196":{
			canEquip: onePerShip("Magnetic Pulse"),
			intercept: {
				self: {
					// Attack is same as ship primary + 1
					attack: function(upgrade,ship,fleet,attack) {
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					}
				}
			}
		},

		// Resistance is Futile : 75007

		//Assimilation Target Prime : 71510b
		"ship:S318": {
			// Restore class on card text
			class: "Galaxy Class",
			// TODO use this field to pick the correct maneuver card
			classId: "galaxy__class_mu",


			intercept: {
				ship: {
					// No faction penalty for upgrades
					factionPenalty: function(card, ship, fleet, factionPenalty) {
						if( card )
							return 0;
						return factionPenalty;
					},
					// Add mirror-universe faction to captain
					factions: function(card,ship,fleet,factions) {
						if( card == ship && factions.indexOf("mirror-universe") < 0 )
							return factions.concat(["mirror-universe"]);
						return factions;
					},
					cost: function(upgrade,ship,fleet,cost) {
						if( checkUpgrade("tech", upgrade, ship) )
							return resolve(upgrade,ship,fleet,cost) - 1;
						return cost;
					}
				}
			}
		},
		//Borg Queen
		"captain:Cap911":{
			canEquipFaction: function(card,ship,fleet) {
				return $factions.hasFaction( card, "borg", ship, fleet )
			}},
		// Locutus
		"captain:Cap910":{
			// Can't equip if fleet contains Jean-Luc Picard
			canEquipCaptain: function(upgrade, ship, fleet) {
				return !$filter("fleetCardNamed")(fleet, "Jean-Luc Picard");
			},
			canEquipFaction: function(card,ship,fleet) {
				return $factions.hasFaction( card, "borg", ship, fleet )
			},
			upgradeSlots: [
				{
					type: ["talent"]
				},
				{
					type: ["crew"]
				},
				{
					type: ["crew"]
				}
			],
			// While equipped, can't equip a card named Jean-Luc Picard on any ship
			intercept: {
				fleet: {
					canEquip: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Jean-Luc Picard" )
							return false;
						return canEquip;
					},
					canEquipCaptain: function(upgrade, ship, fleet, canEquip) {
						if( upgrade.name == "Jean-Luc Picard" )
							return false;
						return canEquip;
					}
				},
				ship:{
					factionPenalty: {
						priority: 100,
						fn: function(card,ship,fleet,factionPenalty) {
							if( card.type == "crew" )
								return 0;
							return factionPenalty;
						}
					}
				}
			}
		},
		//Kathryn Janeway
		"captain:Cap824":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Tuvok
		"crew:C350":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}},
		//Three of Nine
		"crew:C352":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"borg", ship, fleet);
			}},
		//Crosis
		"crew:C345":{
			intercept: {
				ship: {
					skill: function(card,ship,fleet,skill) {
						if( card == ship.captain )
							return resolve(card,ship,fleet,skill) + ( hasFaction(card,"borg",ship,fleet) ? 3 : 1 );
						return skill;
					}
				}
			}
		},
		//Seven of Nine
		"crew:C351":{
			upgradeSlots: [
				{
					type: ["borg"]
				}
			],
			intercept: {
				ship: {
					cost: {
						// Run this interceptor after all other penalties and discounts
						priority: 100,
						fn: function(upgrade,ship,fleet,cost) {
							if( checkUpgrade("borg", upgrade, ship) ) {
								cost = resolve(upgrade,ship,fleet,cost);
								cost -= 1;
							}
							return cost;
						}
					}
				}
			}
		},
		//Blanna Torres
		"crew:C357":{
			upgradeSlots: [
				{
					type: ["borg"],
					rules: "-1SP for each Empty Slot",
				intercept: {
						ship: {
							cost: function(upgrade,ship,fleet,cost) {
								var candidates = 0;
								var UpgradeBarSlots = $.inArray( ship.upgrades )
						// Count the number of empty upgrade slots
						$.each( $filter("upgradeSlots")(ship), function(i, slot) {
							if( slot.occupant == null && slot.type !== "talent" ) {
								// For Each count suptract form cost.
								candidates = candidates + 1;
								}
							});

						cost = cost - candidates;
						if (cost < 0) {
							cost = 0;
						};
						return cost;
							}
						}
				}}]
		},
		//Intergrated Borg Technology
		"tech:T252":{
			intercept: {
				ship: {
					// No faction penalty for this card
					factionPenalty: function(upgrade, ship, fleet, factionPenalty) {
						return upgrade.id == "T252" ? 0 : factionPenalty;
					}
				}
			},
			upgradeSlots: [
				{
					type: ["borg"]
				}
			]
		},
		//Advanced Proton Beam
		"weapon:W200":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "borg", ship, fleet )
			},
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					}
				}
			}},
		//Bio-Molecular Torpedo
		"weapon:W199":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "borg", ship, fleet )
			},
			intercept: {
				self: {
					attack: function(upgrade,ship,fleet,attack) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return attack;
					},
					cost: function(upgrade,ship,fleet,cost) {
						if( ship )
							return valueOf(ship,"attack",ship,fleet);
						return cost;
					}
				}
			}
		},
		//Borg Multi Adaptive Shields
		"borg:B020":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "borg", ship, fleet )
			},
			canEquip: onePerShip("Borg Multi-Adaptive Shields")
		},
		//Technological Distinctivness
		"borg:B022":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return $factions.hasFaction( ship, "borg", ship, fleet )
			}},
		//Collective Consciousness
		"talent:E195":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship.captain,"borg", ship, fleet);
			}
		},
		//Root Command
		"talent:E194":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"borg", ship, fleet);
			}},
		//Ocular Implants
		"talent:E193":{
			canEquip: onePerShip("Ocular Implants"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"borg", ship, fleet) && hasFaction(ship.captain,"borg", ship, fleet);
			}},

	//Vulcan Faction Pack 75008

//U.S.S. T'Kumbra
"ship:S335":{
	intercept: {
		ship: {
			cost: function(card, ship, fleet, cost) {
			if($factions.hasFaction(card,"vulcan", ship, fleet) && card.type == "captain")
					return resolve(card, ship, fleet, cost) - 1;
		  if($factions.hasFaction(card,"vulcan", ship, fleet) && card.type == "admiral")
		  		return resolve(card, ship, fleet, cost) - 1;
			if($factions.hasFaction(card,"vulcan", ship, fleet) && card.type == "crew")
			 		return resolve(card, ship, fleet, cost) - 1;
				return cost;
		  	},
			}
		}
	},

	//T'Pol Captain
		"captain:Cap662":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},

	//T'Pau Captain
		"captain:Cap832":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},

	//Solok Captain
		"captain:Cap831":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1;
			}},

	//Muroc Captain
		"captain:Cap830":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},

	//Translinear Sensors
		"tech:T268":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},

	//Graviton Telescope
		"tech:T269":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}},

	//T'Paal
		"crew:C369":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
		},
				upgradeSlots: [ {
					type: ["tech"],
					rules: "Free Stone of Gol Only",
					canEquip: function(upgrade) {
						return upgrade.name == "Stone of Gol";
					},
					intercept: {
						ship: {
							cost: function() { return 0; }
						}
					}
				} ]
	},

	//Vorik
		"crew:C368":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1;
			}},

	//Chu'Lak
		"crew:C367":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1;
			}},

	//Stone of Gol
		"tech:T267":{
			factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
		},
		intercept: {
			self: {
				cost: function(upgrade,ship,fleet,cost) {
					if( ship && !$factions.hasFaction(ship,"vulcan", ship, fleet) )
						return resolve(upgrade,ship,fleet,cost) + 5;
					return cost;
				}
			}
		}
		},

		//Live Long And Prosper
		"talent:E198":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"vulcan", ship, fleet) && hasFaction(ship.captain,"vulcan", ship, fleet);
		}},

		//Logic is the beginning of wisdom
		"talent:E207":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"vulcan", ship, fleet) && hasFaction(ship.captain,"vulcan", ship, fleet);
		}},

		//Photonic Auto-Cannon
		"weapon:W212":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"vulcan", ship, fleet);
		}},

		//Aft Particle Beam
		"weapon:W211":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"vulcan", ship, fleet);
		}},

		//Katric Ark
		"tech:T264":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"vulcan", ship, fleet);
		}},

		//Science Vessel Variant
		"tech:T266":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Science Vessel Variant") && (ship.class == "D'Kyr Class" || ship.class == "Suurok Class");
			},
			intercept: {
				ship: {
					agility: function(card,ship,fleet,agility) {
						if( card == ship )
							return resolve(card,ship,fleet,agility) + 1;
						return agility;
					},
					hull: function(card,ship,fleet,hull) {
							if( card == ship )
								return resolve(card,ship,fleet,hull) + 1;
							return hull;
						}
				}
			}
		},

		//Combat Vessel Variant
		"tech:T265":{
			canEquip: function(upgrade,ship,fleet) {
				return onePerShip("Combat Vessel Variant") && (ship.class == "D'Kyr Class" || ship.class == "Suurok Class");
			},
				intercept: {
					ship: {
						attack: function(card,ship,fleet,attack) {
							if( card == ship )
								return resolve(card,ship,fleet,attack) + 1;
							return attack;
						}
					}
				}
		},

	//Dominion Cardassian Faction Pack
		//Gul Dukat
		"captain:Cap826":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"dominion", ship, fleet);
			}},
		//Kanar
		"question:Q018":{
			canEquip: onePerShip("Kanar"),
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"dominion", ship, fleet);
			},	isSlotCompatible: function(slotTypes) {
					//console.log($.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0);
					return $.inArray( "tech", slotTypes ) >= 0 || $.inArray( "weapon", slotTypes ) >= 0 || $.inArray( "crew", slotTypes ) >= 0;
				},
				upgradeSlots: [
					{
						type: function(upgrade,ship) {
							return getSlotType(upgrade,ship);
						}
					}
				]
		},

		//Gul Broca
		"crew:C363":{
			canEquipFaction: function(upgrade,ship,fleet) {
				return hasFaction(ship,"dominion", ship, fleet);
			}
		},

		//Enabran Tain Captain
		"captain:Cap827":{
			intercept: {
			self: {
				factionPenalty: function(card,ship,fleet,factionPenalty) {
					if( hasFaction(ship,"romulan",ship,fleet) )
						return 0;
					return factionPenalty;
		  		}
	  		}
	  	}
	  },
		//Enabran Tain Admiral
		"admiral:A036":{
			intercept: {
			self: {
				factionPenalty: function(card,ship,fleet,factionPenalty) {
					if( hasFaction(ship,"romulan",ship,fleet) )
						return 0;
					return factionPenalty;
		  		}
	  		}
	  	}
	  },

		//Gul Damar
		"crew:C364":{
		intercept: {
			ship: {
				skill: function(upgrade,ship,fleet,skill) {
					if( upgrade == ship.captain )
						return resolve(upgrade,ship,fleet,skill) + 2;
					return skill;
				}
			}
		}
	},

	//Tora Ziyal
	"crew:C365":{
		factionPenalty: function(upgrade, ship, fleet) {
			return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
		}
},

	//Obsidian Order
	"talent:E204":{
		canEquipFaction: function(upgrade,ship,fleet) {
			return hasFaction(ship,"dominion", ship, fleet);
		},
		canEquip: onePerShip("Obsidian Order"),
	},

	//Multiple Dorsal Arrays
	"weapon:W208":{
		canEquip: onePerShip("Multiple Dorsal Arrays"),
		canEquip: function(upgrade,ship,fleet) {
			return ship.class == "Cardassian Galor Class";
		}
	},

	//Enhanced Resonance Field Grid
	"weapon:W209":{
		canEquip: onePerShip("Enhanced Resonance Field Grid")
	},

	//Phase Disruptor Array
	"weapon:W210":{
		canEquip: function(upgrade,ship,fleet) {
			return onePerShip("Phase Disruptor Array") && (ship.class == "Cardassian Galor Class" || ship.class == "Cardassian Keldon Class");
		}
	},

	//Sensor Ghost
	"tech:T260":{
		canEquip: onePerShip("Sensor Ghost")
	},

	//Uridium Alloy
	"tech:T261":{
		canEquip: function(upgrade,ship,fleet) {
			return onePerShip("Uridium Alloy") && (ship.class == "Cardassian Galor Class" || ship.class == "Cardassian Keldon Class");
		}

	},

	//Type-3 Galor Class
	"tech:T262":{
		canEquip: function(upgrade,ship,fleet) {
			return onePerShip("Type-3 Galor Class") && ship.class == "Cardassian Galor Class";
		},
		intercept: {
			ship: {
				shields: function(card,ship,fleet,shields) {
					if( card == ship )
						return resolve(card,ship,fleet,shields) + 2;
					return shields;
				}
			}
		}
	},

	//Legion Crew Module
	"tech:T263":{
		canEquipFaction: function(upgrade,ship,fleet) {
			return hasFaction(ship,"dominion", ship, fleet);
		},
		upgradeSlots: cloneSlot( 2, { type: ["crew"] } )
	},

//Faction Penalty For Subfactions
		//Federation
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Bajoran
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "vulcan", ship, fleet ) ? 0 : 1;
			}
		},
		//Vulcan
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "bajoran", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "federation", ship, fleet ) ? 0 : 1;
			}
		},
		//independent
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Ferengi
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Kazon
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "xindi", ship, fleet ) ? 0 : 1;
			}
		},
		//Xindi
		":":{
			factionPenalty: function(upgrade, ship, fleet) {
				return ship && $factions.hasFaction( ship, "ferengi", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "kazon", ship, fleet ) ? 0 : 1 && $factions.hasFaction( ship, "independent", ship, fleet ) ? 0 : 1;
			}
		},





	// RESOURCES

	//Sickbay
		"resource:R042": {
			slotType: "ship-resource",
			cost: 0,
			hideCost: true,
			showShipResourceSlot: function(card,ship,fleet) {
				if( ship.resource && ship.resource.type == "ship-resource" )
					return true;

				var show = true;
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						show = false;
				} );
				return show;
			},
			onRemove: function(resource,ship,fleet) {
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						delete ship.resource;
				} );
			}
		},
		"ship-resource:R042a":{
			canEquip: function(card,ship,fleet) {
				return valueOf(ship,"hull",ship,fleet) >= 4;
			}
		},


	 //Front Line Retrofit
		"resource:R040": {
			slotType: "ship-resource",
			cost: 0,
			hideCost: true,
			showShipResourceSlot: function(card,ship,fleet) {
				if( ship.resource && ship.resource.type == "ship-resource" )
					return true;

				var show = true;
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						show = false;
				} );
				return show;
			},
			onRemove: function(resource,ship,fleet) {
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						delete ship.resource;
				} );
			}
		},
		"ship-resource:Rs40":{
			intercept: {
				ship: {
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					},
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain )
							return resolve(upgrade,ship,fleet,skill) + 1;
						return skill;
					}
				}
			},
		},

		//Captains Chair
		//"ship-resource:R039a":{
		//	canEquip: function(upgrade,ship,fleet) {
		//		return ship.captain.skill >= 5;
		//	}
		//},

		"resource:R039":{
			slotType: "ship-resource",
			cost: 0,
			hideCost: true,
			showShipResourceSlot: function(card,ship,fleet) {
				if( ship.resource && ship.resource.type == "ship-resource" )
					return true;

				var show = true;
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						show = false;
				} );
				return show;
			},
			onRemove: function(resource,ship,fleet) {
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						delete ship.resource;
				} );
			}
		},


		"resource:R033": {
			slotType: "ship-resource",
			cost: 0,
			hideCost: true,
			showShipResourceSlot: function(card,ship,fleet) {
				if( ship.resource && ship.resource.type == "ship-resource" )
					return true;

				var show = true;
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						show = false;
				} );
				return show;
			},
			onRemove: function(resource,ship,fleet) {
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						delete ship.resource;
				} );
			}
		},

		//Fleet Commander (ship)
		"ship-resource:R033a": {
			upgradeSlots: [
				{
					type: ["captain"],
					rules: "Fleet Commander"
				}
			],
			intercept: {
				ship: {
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain )
							return resolve(upgrade,ship,fleet,skill) + 1;
						return skill;
					},
					shields: function(card,ship,fleet,shields) {
						if( card == ship )
							return resolve(card,ship,fleet,shields) + 1;
						return shields;
					}
				}
			}
		},
		"ship-resource:R033b": {
			upgradeSlots: [
				{
					type: ["captain"],
					rules: "Fleet Commander"
				}
			],
			intercept: {
				ship: {
					skill: function(upgrade,ship,fleet,skill) {
						if( upgrade == ship.captain )
							return resolve(upgrade,ship,fleet,skill) + 1;
						return skill;
					},
					hull: function(card,ship,fleet,hull) {
						if( card == ship )
							return resolve(card,ship,fleet,hull) + 1;
						return hull;
					},
					canEquip: function(upgrade,ship,fleet) {
			  	if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) || (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2))
						return true;
					}
				}
			}
		},
		"resource:R010": {
			slotType: "fleet-captain",
			cost: 0,
			hideCost: true,
			showShipResourceSlot: function(card,ship,fleet) {
				if( ship.resource && ship.resource.type == "fleet-captain" )
					return true;

				var show = true;
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						show = false;
				} );
				return show;
			},
			onRemove: function(resource,ship,fleet) {
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						delete ship.resource;
				} );
			}
		},

		"fleet-captain:R010a": {
			// Only equip if captain matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "federation", ship, fleet) && ( !ship.captain || ship.captain.unique && $factions.hasFaction(ship.captain, "federation", ship, fleet) );
			},
			// Prevent non-faction-matching captain
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique && $factions.hasFaction(captain, "federation", ship, fleet);
					}
				}
			}
		},

		"fleet-captain:R010b": {
			// Only equip if ship and captain matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "dominion", ship, fleet) && ( !ship.captain || ship.captain.unique && $factions.hasFaction(ship.captain, "dominion", ship, fleet) );
			},
			// Prevent non-faction-matching captain
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique && $factions.hasFaction(captain, "dominion", ship, fleet);
					}
				}
			}
		},

		"fleet-captain:R010c": {
			// Only equip if ship and captain matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "romulan", ship, fleet) && ( !ship.captain || ship.captain.unique && $factions.hasFaction(ship.captain, "romulan", ship, fleet) );
			},
			// Prevent non-faction-matching captain
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique && $factions.hasFaction(captain, "romulan", ship, fleet);
					}
				}
			}
		},

		"fleet-captain:R010d": {
			// Only equip if ship and captain matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "klingon", ship, fleet) && ( !ship.captain || ship.captain.unique && $factions.hasFaction(ship.captain, "klingon", ship, fleet) );
			},
			// Prevent non-faction-matching captain
			intercept: {
				ship: {
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique && $factions.hasFaction(captain, "klingon", ship, fleet);
					}
				}
			}
		},

		"fleet-captain:R010e": {
			// Only equip if captain unique
			canEquip: function(upgrade,ship,fleet) {
				return !ship.captain || ship.captain.unique;
			},
			intercept: {
				ship: {
					// Only allow unique captain
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique;
					},
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						factions = factions || card.factions;
						if( card == ship.captain && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					},
				},
				fleet: {
					// All crew cost -1 SP
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("crew", upgrade, ship) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					},
				}
			}
		},

		"fleet-captain:R010f": {
			// Only equip if captain unique
			canEquip: function(upgrade,ship,fleet) {
				return !ship.captain || ship.captain.unique;
			},
			intercept: {
				ship: {
					// Only allow unique captain
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique;
					},
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						factions = factions || card.factions;
						if( card == ship.captain && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					},
				},
				fleet: {

				}
			}
		},

		"fleet-captain:R010g": {
			//  Only equip if captain unique
			canEquip: function(upgrade,ship,fleet) {
				return !ship.captain || ship.captain.unique;
			},
			intercept: {
				ship: {
					// Only allow unique captain
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique;
					},
					// Add independent faction to captain
					factions: function(card,ship,fleet) {
						var factions = card.factions;
						if( card == ship.captain && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					}
				},
				fleet: {
					// All weapon cost -1 SP
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("weapon", upgrade, ship) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					},
				}
			}
		},

		"fleet-captain:R010h": {
			// Only equip if captain unique
			canEquip: function(upgrade,ship,fleet) {
				return !ship.captain || ship.captain.unique;
			},
			intercept: {
				ship: {
					// Only allow unique captain
					canEquipCaptain: function(captain,ship,fleet) {
						return captain.unique;
					},
					// Add independent faction to captain
					factions: function(card,ship,fleet) {
						var factions = card.factions;
						if( card == ship.captain && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					}
				},
				fleet: {
					// All tech cost -1 SP
					cost: function(upgrade, ship, fleet, cost) {
						if( checkUpgrade("tech", upgrade, ship) )
							return resolve(upgrade, ship, fleet, cost) - 1;
						return cost;
					},
				}
			}
		},

		"resource:R015": {

			upgradeSlots: [
				{
					type: ["faction"],
					source: "Select Factions for Officer Exchange Program",
				},
				{
					type: ["faction"],
					source: "Select Factions for Officer Exchange Program",
				}
			],

			intercept: {
				fleet: {
					// Zero faction penalty for captains, admirals and crew
					factionPenalty: function(card,ship,fleet,factionPenalty) {

						var factionA = fleet.resource.upgradeSlots[0].occupant;
						var factionB = fleet.resource.upgradeSlots[1].occupant;

						// Fail if user hasn't assigned two faction cards yet
						if( !factionA || !factionB )
							return factionPenalty;

						// Only apply to captains, admirals and crew
						if( card.type != "captain" && card.type != "admiral" && card.type != "crew" )
							return factionPenalty;

						// Check that the card and ship are of the chosen factions
						if( $factions.match( card, factionA ) && $factions.match( ship, factionB ) || $factions.match( card, factionB ) && $factions.match( ship, factionA ) )
							return 0;

						return factionPenalty;

					},

					// Cost -1 SP for captains and admirals
					cost: function(card, ship, fleet, cost) {

						var factionA = fleet.resource.upgradeSlots[0].occupant;
						var factionB = fleet.resource.upgradeSlots[1].occupant;

						// Fail if user hasn't assigned two faction cards yet
						if( !factionA || !factionB )
							return cost;

						// Only apply to captains and admirals
						if( card.type != "captain" && card.type != "admiral" )
							return cost;

						// Check that the card and ship are of the chosen factions
						if( $factions.match( card, factionA ) && $factions.match( ship, factionB ) || $factions.match( card, factionB ) && $factions.match( ship, factionA ) )
							return resolve(card, ship, fleet, cost) - 1;

						return cost;

					},
				}
			}

		},

		"resource:R011": {

			hideCost: true,

			intercept: {
				fleet: {
					// Add the "officer" type to all crew slots
					type: function(card,ship,fleet,type) {
						if( $.inArray("crew",type) >= 0 )
							return type.concat(["officer"]);
						return type;
					}
				}
			}

		},

		"officer:R011a": {
			skill: 4,
			talents: 1,
			upgradeSlots: [
				{/* Crew slot added by loader */},
				{
					type: ["talent"],
					source: "First Officer",
				}
			]
		},

		"officer:R011b": {
			upgradeSlots: [
				{/* Crew slot added by loader */},
				{
					type: ["weapon"],
					source: "Tactical Officer",
				}
			]
		},

		"officer:R011c": {
			upgradeSlots: [
				{/* Crew slot added by loader */},
				{
					type: ["crew"],
					source: "Operations Officer",
				}
			]
		},

		"officer:R011d": {
			upgradeSlots: [
				{/* Crew slot added by loader */},
				{
					type: ["tech"],
					source: "Science Officer",
				}
			]
		},

		// Sideboard
		"resource:R003": {
			class: "Sideboard",
			factions: $factions.listCodified,
			upgradeSlots: [
				{
					type: ["captain"],
					source: "Sideboard",
					rules: "Combined cost 20 SP or less",
					canEquip: function(card,ship,fleet,upgradeSlot) {

						var total = 0;
						$.each( fleet.resource.upgradeSlots, function(i,slot) {
							if( slot.occupant && slot != upgradeSlot )
								total += valueOf(slot.occupant,"cost",ship,fleet);
						} );

						var cost = valueOf(card,"cost",ship,fleet);
						return total + cost <= 20;

					},
					intercept: {
						ship: {
							// Remove all restrictions
							canEquip: {
								priority: 100,
								fn: function() { return true; }
							},
							canEquipFaction: {
								priority: 100,
								fn: function() { return true; }
							},
							factionPenalty: function() { return 0; }
						}
					},
				},
				{
					type: ["talent"],
					source: "Sideboard",
					rules: "Combined cost 20 SP or less",
					canEquip: function(card,ship,fleet,upgradeSlot) {

						var total = 0;
						$.each( fleet.resource.upgradeSlots, function(i,slot) {
							if( slot.occupant && slot != upgradeSlot )
								total += valueOf(slot.occupant,"cost",ship,fleet);
						} );

						var cost = valueOf(card,"cost",ship,fleet);
						return total + cost <= 20;

					},
					intercept: {
						ship: {
							// Remove all restrictions
							canEquip: {
								priority: 100,
								fn: function() { return true; }
							},
							canEquipFaction: {
								priority: 100,
								fn: function() { return true; }
							},
							factionPenalty: function() { return 0; }
						}
					},
				},
				{
					type: ["crew"],
					source: "Sideboard",
					rules: "Combined cost 20 SP or less",
					canEquip: function(card,ship,fleet,upgradeSlot) {

						var total = 0;
						$.each( fleet.resource.upgradeSlots, function(i,slot) {
							if( slot.occupant && slot != upgradeSlot )
								total += valueOf(slot.occupant,"cost",ship,fleet);
						} );

						var cost = valueOf(card,"cost",ship,fleet);
						return total + cost <= 20;

					},
					intercept: {
						ship: {
							// Remove all restrictions
							canEquip: {
								priority: 100,
								fn: function() { return true; }
							},
							canEquipFaction: {
								priority: 100,
								fn: function() { return true; }
							},
							factionPenalty: function() { return 0; }
						}
					},
				},
				{
					type: ["tech"],
					source: "Sideboard",
					rules: "Combined cost 20 SP or less",
					canEquip: function(card,ship,fleet,upgradeSlot) {

						var total = 0;
						$.each( fleet.resource.upgradeSlots, function(i,slot) {
							if( slot.occupant && slot != upgradeSlot )
								total += valueOf(slot.occupant,"cost",ship,fleet);
						} );

						var cost = valueOf(card,"cost",ship,fleet);
						return total + cost <= 20;

					},
					intercept: {
						ship: {
							// Remove all restrictions
							canEquip: {
								priority: 100,
								fn: function() { return true; }
							},
							canEquipFaction: {
								priority: 100,
								fn: function() { return true; }
							},
							factionPenalty: function() { return 0; }
						}
					},
				},
				{
					type: ["weapon"],
					source: "Sideboard",
					rules: "Combined cost 20 SP or less",
					canEquip: function(card,ship,fleet,upgradeSlot) {

						var total = 0;
						$.each( fleet.resource.upgradeSlots, function(i,slot) {
							if( slot.occupant && slot != upgradeSlot )
								total += valueOf(slot.occupant,"cost",ship,fleet);
						} );

						var cost = valueOf(card,"cost",ship,fleet);
						return total + cost <= 20;

					},
					intercept: {
						ship: {
							// Remove all restrictions
							canEquip: {
								priority: 100,
								fn: function() { return true; }
							},
							canEquipFaction: {
								priority: 100,
								fn: function() { return true; }
							},
							factionPenalty: function() { return 0; }
						}
					},
				},
			]
		},

		// Flagship
		"resource:R004": {
			slotType: "flagship",
			cost: 0,
			hideCost: true,
			showShipResourceSlot: function(card,ship,fleet) {
				if( ship.resource && ship.resource.type == "flagship" )
					return true;

				var show = true;
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						show = false;
				} );
				return show;
			},
			onRemove: function(resource,ship,fleet) {
				$.each( fleet.ships, function(i,ship) {
					if( ship.resource )
						delete ship.resource;
				} );
			}
		},

		// Romulan
		"flagship:R004a": {
			// Only equip if ship matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "romulan", ship, fleet);
			}
		},

		// Klingon
		"flagship:R004b": {
			// Only equip if ship matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "klingon", ship, fleet);
			},
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet) {
				if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) ||  (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2))
						return true;
					}
				}
			}
		},

		// Dominion
		"flagship:R004c": {
			// Only equip if ship matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "dominion", ship, fleet);
			},
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet) {
				if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) ||  (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2))
						return true;
					}
				}
			}
		},

		// Federation
		"flagship:R004e": {
			// Only equip if ship matches faction
			canEquip: function(upgrade,ship,fleet) {
				return $factions.hasFaction(ship, "federation", ship, fleet);
			},
			intercept: {
				ship: {
					canEquip: function(upgrade,ship,fleet) {
				if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) ||  (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2) )
						return true;
					}
				}
			}
		},

		// Independent (Rom)
		"flagship:R004f": {
			intercept: {
				ship: {
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						if( card == ship && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					}
				}
			}
		},

		// Independent (Klingon)
		"flagship:R004g": {
			intercept: {
				ship: {
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						if( card == ship && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					},
					canEquip: function(upgrade,ship,fleet) {
						if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) || (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2) )
						return true;
					}
				}
			}
		},

		// Independent (Dominion)
		"flagship:R004h": {
			intercept: {
				ship: {
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						if( card == ship && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					},
					canEquip: function(upgrade,ship,fleet) {
						if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) || (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2) )
						return true;
					}
				}
			}
		},

		// Independent (Federation)
		"flagship:R004i": {
			intercept: {
				ship: {
					// Add independent faction to captain
					factions: function(card,ship,fleet,factions) {
						if( card == ship && factions.indexOf("independent") < 0 )
							return factions.concat(["independent"]);
						return factions;
					},
					canEquip: function(upgrade,ship,fleet) {
						if( upgrade || (upgrade && upgrade.hullconstraint == "4+" && ship.hull >= 3) || (upgrade && upgrade.hullconstraint == "5+" && ship.hull >= 4) || (upgrade && upgrade.hullconstraint == "3-" && ship.hull <= 2) )
						return true;
					}
				}
			}
		},

		// EMERGENCY FORCE FIELD RESOURCE
		"resource:R020": {
			cost: function(card,ship,fleet) {
				if( !fleet )
					return 0;
				var shields = 0;
				$.each( fleet.ships || [], function(i,ship) {
					shields += valueOf(ship,"shields",ship,fleet);
				} );
				return Math.ceil( shields/2 );
			}
		},


		//Improved Hull
		"resource:R029":{

		},




		// BALANCE OF TERROR
		"talent:E035": {
			upgradeSlots: [
				{
					type: ["talent"],
					rules: "",
					faceDown: true,
					canEquip: function(card,ship,fleet) {
						return $factions.match(card,ship) && valueOf(card,"cost",ship,fleet) <= 5;
					},
					intercept: {
						ship: {
							free: function() { return true; },
						}
					}
				}
			],
			canEquip: onePerShip("Balance of Terror"),
			intercept: {
				self: {
					cost: {
						priority: 1000,
						fn: function() { return 3; }
					}
				}
			}
		},

		"crew:C035": {
			upgradeSlots: [
				{
					type: ["crew"],
					rules: "",
					faceDown: true,
					canEquip: function(card,ship,fleet) {
						return $factions.match(card,ship) && valueOf(card,"cost",ship,fleet) <= 5;
					},
					intercept: {
						ship: {
							free: function() { return true; },
						}
					}
				}
			],
			canEquip: onePerShip("Balance of Terror"),
			intercept: {
				self: {
					cost: {
						priority: 1000,
						fn: function() { return 3; }
					}
				}
			}
		},

		"tech:T044": {
			upgradeSlots: [
				{
					type: ["tech"],
					rules: "",
					faceDown: true,
					canEquip: function(card,ship,fleet) {
						return $factions.match(card,ship) && valueOf(card,"cost",ship,fleet) <= 5;
					},
					intercept: {
						ship: {
							free: function() { return true; },
						}
					}
				}
			],
			canEquip: onePerShip("Balance of Terror"),
			intercept: {
				self: {
					cost: {
						priority: 1000,
						fn: function() { return 3; }
					}
				}
			}
		},

		"weapon:W027": {
			upgradeSlots: [
				{
					type: ["weapon"],
					rules: "",
					faceDown: true,
					canEquip: function(card,ship,fleet) {
						return $factions.match(card,ship) && valueOf(card,"cost",ship,fleet) <= 5;
					},
					intercept: {
						ship: {
							free: function() { return true; },
						}
					}
				}
			],
			canEquip: onePerShip("Balance of Terror"),
			intercept: {
				self: {
					cost: {
						priority: 1000,
						fn: function() { return 3; }
					}
				}
			}
		},

	//Senior Staff
		"resource:R036":{
			//Add Ship Resource to all crew
			intercept: {
				fleet: {
					type: function(card,ship,fleet,type) {
						if( $.inArray("crew",type) >= 0 )
							return type.concat(["ship-resource"]);
						return type;
					}
				}
			}
		},
		"ship-resource:R036a":{
			upgradeSlots: [
				{ type: ["crew"] },
				{ type: ["talent"],
				intercept: {
					ship: {
						// Reduce cost of Borg Ablative Hull Armor
						cost: function(upgrade, ship, fleet, cost) {
								return resolve(upgrade, ship, fleet, cost) + 1;
							return cost;
						}
					}
				}
			} ]
		}
	};
}]);
