var module = angular.module("utopia-card-loader", ["utopia-card-rules","utopia-card-ship","utopia-card-upgrade","utopia-card-resource","utopia-card-faction","utopia-card-token"]);

module.factory( "cardLoader", [ "$http", "$filter", "cardRules", "$factions", function($http, $filter, cardRules, $factions) {

	var valueOf = $filter("valueOf");

	return function(cards, sets, shipClasses, token, callback) {

		function isDuplicate(card, cards) {
			var dupe = false;
			$.each( cards, function(i,other) {
				if( card.id == other.id && card.type == other.type ) {
					dupe = true;
					return false;
				}
			});
			return dupe;
		}

		var shipDefaults = {
			canJoinFleet: true,
			intercept: { ship:{}, fleet: {} }
		};

		function loadShip(ship) {

			if( isDuplicate(ship, cards) ) {
				console.log( "Duplicate card definition ignored", ship.id );
				return;
			}

			// Set mirror flag
			ship.mirror = $factions.hasFaction(ship, "mirror-universe");

			// Expand shorthand upgrade slots
			for( var i = 0; i < ship.upgrades.length; i++ )
				if( typeof ship.upgrades[i] == "string" )
					ship.upgrades[i] = { type: [ ship.upgrades[i] ], source: "ship" };

			$.extend(true, ship, shipDefaults);

			// Add squadron equip rule
			// TODO Player can remove ship with hull > 3 after this check
			if( ship.squadron ) {
				ship.canJoinFleet = function(ship,ship2,fleet) {
					var numShipsHull4Plus = 0;
					var numSquadrons = 0;
					$.each(fleet.ships,function(i,ship) {
						if( ship.squadron )
							numSquadrons++;
						else if( ship.hull >= 4 )
							numShipsHull4Plus++;
					});
					return numShipsHull4Plus > numSquadrons;
				};
			}

			// Apply specific card rules
			if( cardRules[ship.type+":"+ship.id] )
				$.extend( true, ship, cardRules[ship.type+":"+ship.id] );

			$.each( ship.upgradeSlots || [], function(i,slot) {
				if( !slot.source )
					slot.source = ship.name;
			} );

			// Add faction penalties to cost calculation
			if( ship.intercept.ship.cost )
				ship.intercept.ship.cost = [ship.intercept.ship.cost];
			else
				ship.intercept.ship.cost = [];

			ship.intercept.ship.cost.push( {
				source: "Faction Penalty",
				priority: 1,
				fn: function(upgrade, ship, fleet, cost) {
					if( !$factions.match( upgrade, ship, ship, fleet ) ) {
						var penalty = valueOf(upgrade,"factionPenalty",ship,fleet);
						return (cost instanceof Function ? cost(upgrade, ship, fleet, 0) : cost ) + penalty;
					}
					return cost;
				}
			});


			cards.push(ship);

		}

		var captainDefaults = {
			intercept: { ship: {}, fleet: {} },
			canEquip: true,
			canEquipCaptain: true,
			canEquipFaction: true,
			showType: true,
		};

		function loadCaptain(captain) {

			if( isDuplicate(captain, cards) ) {
				console.log( "Duplicate card definition ignored", captain.id );
				return;
			}

			$.extend(true, captain, captainDefaults);

			if( captain.factionPenalty == undefined )
				captain.factionPenalty = 1;

			// Set mirror flag
			captain.mirror = $factions.hasFaction(captain, "mirror-universe");

			// Add talent slots
			captain.upgradeSlots = [];
			for( var i = 0; i < captain.talents || 0; i++ )
				captain.upgradeSlots.push( { type: ["talent"], source: captain.name } );

			// Apply specific card rules
			if( cardRules[captain.type+":"+captain.id] )
				$.extend( true, captain, cardRules[captain.type+":"+captain.id] );

			// Set the source of any special upgrade slots
			$.each( captain.upgradeSlots || [], function(i,slot) {
				if( !slot.source )
					slot.source = captain.name;
			} );

			cards.push( captain );

		}

		var admiralDefaults = {
			intercept: { ship: {}, fleet: {} },
			canEquip: true,
			canEquipAdmiral: true,
			canEquipFaction: true,
			isSkillModifier: true,
			showType: true
		};

		function loadAdmiral(admiral) {

			if( isDuplicate(admiral, cards) ) {
				console.log( "Duplicate card definition ignored", admiral.id );
				return;
			}

			$.extend(true, admiral, admiralDefaults);

			if( admiral.factionPenalty == undefined )
				admiral.factionPenalty = 3;

			// Set mirror flag
			admiral.mirror = $factions.hasFaction(admiral, "mirror-universe");

			// Add talent slots
			admiral.upgradeSlots = [];
			for( var i = 0; i < admiral.talents || 0; i++ )
				admiral.upgradeSlots.push( { type: ["talent"], source: admiral.name } );

			// Add skill modifier to Captain skill evaluation
			admiral.intercept.ship.skill = function(upgrade,ship,fleet,skill) {
				if( upgrade == ship.captain ) {
					skill = (skill instanceof Function ? skill(upgrade,ship,fleet,0) : skill) + admiral.skill;
				}
				return skill;
			};

			// Apply specific card rules
			if( cardRules[admiral.type+":"+admiral.id] )
				$.extend( true, admiral, cardRules[admiral.type+":"+admiral.id] );

			// Set the source of any special upgrade slots
			$.each( admiral.upgradeSlots || [], function(i,slot) {
				if( !slot.source )
					slot.source = admiral.name;
			} );

			cards.push( admiral );

		}

		var ambassadorDefaults = {
			intercept: { ship: {}, fleet: {} },
			canEquip: true,
			canEquipAmbassador: true,
			canEquipFaction: true,
			isSkillModifier: true,
			showType: true
		};

		function loadAmbassador(ambassador) {

			if( isDuplicate(ambassador, cards) ) {
				console.log( "Duplicate card definition ignored", ambassador.id );
				return;
			}

			$.extend(true, ambassador, ambassadorDefaults);

			if( ambassador.factionPenalty == undefined )
				ambassador.factionPenalty = 0;

			// Set mirror flag
			ambassador.mirror = $factions.hasFaction(ambassador, "mirror-universe");

			// Apply specific card rules
			if( cardRules[ambassador.type+":"+ambassador.id] )
				$.extend( true, ambassador, cardRules[ambassador.type+":"+ambassador.id] );

			// Set the source of any special upgrade slots
			$.each( ambassador.upgradeSlots || [], function(i,slot) {
				if( !slot.source )
					slot.source = ambassador.name;
			} );

			cards.push( ambassador );

		}

		var constructionDefaults = {
			intercept: { ship: {}, fleet: {} },
			canEquipConstruction: true,
		};

		function loadConstruction(construction) {
      console.log(`Load construction card: ${construction.type}:${construction.id}`);
			console.dir(construction);
			$.extend(true, construction, constructionDefaults);

			if(construction.factionPenalty == undefined )
				construction.factionPenalty = 0;

			// Set mirror flag
			construction.mirror = $factions.hasFaction(construction, "mirror-universe");

			construction.upgradeSlots = [];

			// Apply specific card rules
			if( cardRules[construction.type+":"+construction.id] )
				$.extend( true, construction, cardRules[construction.type+":"+construction.id] );

			// Set the source of any special upgrade slots
			$.each( construction.upgradeSlots || [], function(i,slot) {
				if( !slot.source )
					slot.source = construction.name;
			} );

			cards.push( construction );

		}

		var upgradeDefaults = {
			intercept: { ship: {}, fleet: {} },
			canEquip: true,
			canEquipFaction: true
		};

		function loadUpgrade(upgrade) {

			if( isDuplicate(upgrade, cards) ) {
				console.log( "Duplicate card definition ignored", upgrade.id );
				return;
			}

			$.extend(true, upgrade, upgradeDefaults);

			if( upgrade.factionPenalty == undefined )
				upgrade.factionPenalty = 1;

			// Set mirror flag
			upgrade.mirror = $factions.hasFaction(upgrade, "mirror-universe");

			// Apply specific card rules
			if( cardRules[upgrade.type+":"+upgrade.id] ) 
				$.extend( true, upgrade, cardRules[upgrade.type+":"+upgrade.id] );
			
			// Set the source of any special upgrade slots
			$.each( upgrade.upgradeSlots || [], function(i,slot) {
				if( !slot.source )
					slot.source = upgrade.name;
			} );

			cards.push( upgrade );

		}

		// TODO Lots of extra logic for specific resources
		// Flagship, Fleet Captain, Officer Cards, Attack Fighters, Officer Exchange Program, Sideboard, High Yield Photons
		// The rest should just be a card with a fixed cost.

		var resourceDefaults = {
			intercept: { ship: {}, fleet: {} },
			canEquip: true,
			canEquipFaction: true
		};

		function loadResource(resource) {

			$.extend(true, resource, resourceDefaults);

			// Apply specific card rules
			if( cardRules[resource.type+":"+resource.id] )
				$.extend( true, resource, cardRules[resource.type+":"+resource.id] );

			cards.push(resource);
		}

		// For resource special cards or anything else that doesn't need any special handling
		function loadOther(card) {

			// TODO Find a better home for this. Should strictly be in rules, but would be too verbose.
			if( card.type == "fleet-captain" ) {

				for( var i = 0; i < card.talentAdd; i++ )
					// Special talent slot, which allows a free talent if captain already has an empty talent slot
					card.upgradeSlots.push( {
						type: ["talent"],
						source: "Fleet Captain",
						rules: "Free talent if Captain has an empty talent slot",
						showOnCard: true,
						intercept: {
							ship: {
								cost: {
									priority: -1,
									fn: function(upgrade, ship, fleet, cost) {
										if( !ship.captain )
											return cost;
										var slots = $filter("upgradeSlots")(ship.captain);
										var emptyTalentSlot = false;
										$.each(slots, function(i,slot) {
											if( slot.type.indexOf("talent") >= 0 && !slot.occupant )
												emptyTalentSlot = true;
										});
										return emptyTalentSlot ? 0 : cost;
									}
								}
							}
						}
					} );
				for( var i = 0; i < card.techAdd; i++ )
					card.upgradeSlots.push( { type: ["tech"], source: "Fleet Captain", showOnCard: true } );
				for( var i = 0; i < card.weaponAdd; i++ )
					card.upgradeSlots.push( { type: ["weapon"], source: "Fleet Captain", showOnCard: true } );
				for( var i = 0; i < card.crewAdd; i++ )
					card.upgradeSlots.push( { type: ["crew"], source: "Fleet Captain", showOnCard: true } );

				// Add skill modifier to Captain skill evaluation
				card.intercept.ship.skill = function(upgrade,ship,fleet,skill) {
					if( upgrade == ship.captain ) {
						skill = (skill instanceof Function ? skill(upgrade,ship,fleet,0) : skill) + card.skill;
					}
					return skill;
				};

			}

			// TODO Same as above
			if( card.type == "flagship" ) {
				var flagship = card;
				flagship.intercept.ship = {
					attack: function(card,ship,fleet,attack) {
						if( card == ship && ship.type != "flagship" )
							return (attack instanceof Function ? attack(card,ship,fleet,0) : attack) + flagship.attack;
						return attack;
					},
					agility: function(card,ship,fleet,agility) {
						if( card == ship && ship.type != "flagship" )
							return (agility instanceof Function ? agility(card,ship,fleet,0) : agility) + flagship.agility;
						return agility;
					},
					hull: function(card,ship,fleet,hull) {
						if( card == ship && ship.type != "flagship" )
							return (hull instanceof Function ? hull(card,ship,fleet,0) : hull) + flagship.hull;
						return hull;
					},
					shields: function(card,ship,fleet,shields) {
						if( card == ship && ship.type != "flagship" )
							return (shields instanceof Function ? shields(card,ship,fleet,0) : shields) + flagship.shields;
						return shields;
					},
				};
			}

			if( card.type == "token") {
				if( token[card.id] ) {
					console.log("Duplicate token",card.id,card.name);
					return;
				}

				token[card.id] = card;
			}

			// Apply specific card rules
			if( cardRules[card.type+":"+card.id] )
				$.extend( true, card, cardRules[card.type+":"+card.id] );

			cards.push(card);

		}

		function loadSet(set) {

			if( sets[set.id] ) {
				console.log("Duplicate set",set.id,set.name);
				return;
			}

			sets[set.id] = set;

		}

		function loadShipClass(shipClass) {

			if( shipClasses[shipClass.id] ) {
				console.log("Duplicate ship class",shipClass.id,shipClass.name,shipClasses[shipClass.id].name);
				return;
			}

			shipClasses[shipClass.id] = shipClass;

		}

		function loadCopies( copies ) {

			$.each( copies || [], function(i,copy) {
				$.each( cards, function(i,card) {
					if( card.id == copy.of ) {
						card.set = card.set.concat(copy.set);
						return false;
					}
				} );
			} );

		}

		$http.get( "data/data.json" ).success( function(data) {

			var copies = [];

			$.each( data.sets || [], function(i,set) {
				if( set.type == "copy" )
					copies.push(set);
				else
					loadSet(set);
			});

			$.each( data.ships || [], function(i,ship) {
				if( ship.type == "copy" )
					copies.push(ship);
				else
					loadShip(ship);
			});

			$.each( data.shipClasses || [], function(i,shipClass) {
				if( shipClass.type == "copy" )
					copies.push(shipClass);
				else
					loadShipClass(shipClass);
			});

			$.each( data.captains || [], function(i,captain) {
				if( captain.type == "copy" )
					copies.push(captain);
				else
					loadCaptain(captain);
			});

			$.each( data.admirals || [], function(i,admiral) {
				if( admiral.type == "copy" )
					copies.push(admiral);
				else
					loadAdmiral(admiral);
			});

			$.each( data.ambassadors || [], function(i,ambassador) {
				if( ambassador.type == "copy" )
					copies.push(ambassador);
				else
					loadAmbassador(ambassador);
			});

			$.each( data.starship_construction || [], function(i, construction) {
				if( construction.type == "copy" )
					copies.push(construction);
				else
					loadConstruction(construction);
			});

			$.each( data.upgrades || [], function(i,upgrade) {
				if( upgrade.type == "copy" )
					copies.push(upgrade);
				else
					loadUpgrade(upgrade);
			});

			$.each( data.resources || [], function(i,resource) {
				if( resource.type == "copy" )
					copies.push(resource);
				else
					loadResource(resource);
			});

			$.each( data.others || [], function(i,card) {
				if( card.type == "copy" )
					copies.push(card);
				else
					loadOther(card);
			});

			loadCopies(copies);

			// Assign classes to ships
			$.each( cards, function(i,card) {
				if( card.type == "ship" ) {
					if( card.classId && shipClasses[card.classId] ) {
						card.classData = shipClasses[card.classId];
					} else {
						$.each( shipClasses, function(id,shipClass) {
							if( shipClass.name == card.class ) {
								card.classId = id;
								card.classData = shipClass;
								return false;
							}
						} );
					}
					if( !card.classId || !card.classData || !shipClasses[card.classId] )
						console.log( "No class for ship", card.id, card.name, card.class, card.classId );
				}
				if( card.hasTokenInfo && token[card.tokenId] ) {
					card.tokenData = token[card.tokenId];
				}
			});

			if( callback )
				callback();

		});

	};

}]);
