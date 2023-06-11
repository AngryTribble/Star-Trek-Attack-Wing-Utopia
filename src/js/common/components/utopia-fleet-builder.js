var module = angular.module("utopia-fleet-builder", ["utopia-card-upgrade","utopia-dragdrop"]);

module.directive( "fleetBuilder", [ "$filter", function($filter) {

	return {

		scope: {
			fleet: "=",
			cards: "=",
			searchOptions: "=",
			dragStore: "="
		},

		templateUrl: "fleet-builder.html",

		controller: [ "$scope", "isMobile", function($scope, isMobile) {

			$scope.isMobile = isMobile;

			$scope.$watch( "fleet", function(fleet) {
				location.hash = btoa( angular.toJson( $scope.saveFleet(fleet) ) );
			}, true );

			$scope.$on( "removeFromFleet", function(ev, card) {

				$scope.removeFromFleet( card, $scope.fleet );

			} );

			$scope.$on( "zoom", function(ev, zoom) {
				$scope.zoom = zoom;
			});

			$scope.setSearchTypes = function(types) {

				$.each( $scope.searchOptions.types, function(typeName,typeOption) {
					typeOption.search = $.inArray(typeName, types) >= 0;
				});

				if( $scope.searchOptions.columns < 1 )
					$scope.searchOptions.columns = 1;

			};

			$scope.addFleetShip = function(fleet, ship) {

				// Check uniqueness
				var other = $scope.findOtherInFleet(ship, fleet);

				// Check interceptors
				var canJoinFleet = valueOf(ship,"canJoinFleet",ship,fleet);
				if( !canJoinFleet ) {
					console.log("joinFleet stopped by interceptor");
					return false;
				}

				// Fail if other
				if( other && other != ship ) {
					console.log("upgrade uniquenes check failed");
					return false;
				}

				// If other is this, user is moving card within fleet
				if( other ) {
					$scope.removeFromFleet( other, fleet );
				}

				// Clone ship
				//ship = $.extend(true,{},ship);
				ship = angular.copy(ship);

				fleet.ships.push( ship );

				return ship;

			};

			// TODO replace references
			$scope.getUpgradeSlots = $filter("upgradeSlots");

			$scope.isUpgradeCompatible = function(upgrade, upgradeSlot, ship, fleet) {

				// Ignore drop on self
				if( upgrade == upgradeSlot.occupant )
					return false;

				// Construct list of all slot types
				var slotTypes = valueOf(upgradeSlot,"type",ship,fleet);

				if( upgrade.type == "question" ) {
					// Invoke special logic for question type cards
					return upgrade.isSlotCompatible && upgrade.isSlotCompatible(slotTypes);
				} else {
					// Check normal types
					return $.inArray( upgrade.type, slotTypes ) >= 0;
				}

			};

			var valueOf = $filter("valueOf");

			$scope.setUpgrade = function(fleet, ship, upgradeSlot, upgrade) {

				// Check slot type
				if( !$scope.isUpgradeCompatible(upgrade, upgradeSlot, ship, fleet) ) {
					console.log("wrong slot type");
					return false;
				}

				// Check for drop onto self
				if( upgradeSlot.occupant == upgrade )
					return false;

				// Check interceptors
				var canEquip = valueOf(upgrade,"canEquip",ship,fleet,upgradeSlot);
				if( !canEquip ) {
					console.log("equip stopped by special card rule");
					return false;
				}

				// Check faction interceptors
				var canEquipFaction = valueOf(upgrade,"canEquipFaction",ship,fleet,upgradeSlot);
				if( !canEquipFaction ) {
					console.log("equip stopped by faction-specific special card rule");
					return false;
				}

				// Slot-specific restrictions
				if( upgradeSlot.canEquip && !upgradeSlot.canEquip(upgrade,ship,fleet,upgradeSlot) ) {
					console.log("upgrade rejected by slot");
					return false;
				}

				// Check uniqueness
				var other = $scope.findOtherInFleet(upgrade, fleet);

				// Fail if other
				if( other && other != upgrade && other != upgradeSlot.occupant ) {
					console.log("upgrade uniquenes check failed");
					return false;
				}

				// If other is this, and user is moving card within fleet
				if( other && other != upgradeSlot.occupant ) {
					$scope.removeFromFleet( other, fleet, upgradeSlot.occupant );
				}

				upgradeSlot.occupant = angular.copy(upgrade);

				// Trigger onEquip handlers
				valueOf(upgradeSlot.occupant,"onEquip",ship,fleet);

				return upgradeSlot.occupant;

			};

			$scope.setShipResource = function(fleet,ship,resource) {

				if( !fleet.resource || resource.type != fleet.resource.slotType ) {
					return false;
				}

				// Check interceptors
				var canEquip = valueOf(resource,"canEquip",ship,fleet);
				if( !canEquip ) {
					console.log("equip stopped by special card rule");
					return false;
				}

				// Check uniqueness
				var other = $scope.findOtherInFleet(resource, fleet);

				// Fail if other
				if( other && other != upgrade && other != ship.resource ) {
					console.log("upgrade uniquenes check failed");
					return false;
				}

				ship.resource = angular.copy(resource);

				return ship.resource;

			};

			$scope.setShipCaptain = function(fleet,ship,captain) {

				if( captain.type != "captain" ) {
					console.log("card is not a captain");
					return false;
				}

				// Check interceptors
				var canEquip = valueOf(captain,"canEquipCaptain",ship,fleet);
				if( !canEquip ) {
					console.log("equip stopped by interceptor");
					return false;
				}

				// Uniqueness
				var other = $scope.findOtherInFleet(captain, fleet);

				if( other && other != captain && other != ship.captain ) {
					console.log( "captain already in fleet" );
					return false;
				}

				// Move if already in fleet
				if( other && other != ship.captain ) {
					$scope.removeFromFleet( other, fleet, ship.captain );
				}

				//ship.captain = $.extend(true,{}, captain);
				ship.captain = angular.copy(captain);

				return ship.captain;

			};

			$scope.setShipConstruction = function(fleet, ship, construction) {
				if( construction.type != "starship_construction" ) {
					console.log("card is not a starship_construction");
					return false;
				}

				// Check interceptors
				var canEquip = valueOf(construction,"canEquipConstruction",ship,fleet);
				if( !canEquip ) {
					console.log("equip stopped by interceptor");
					return false;
				}

				ship.construction = angular.copy(construction);
				return ship.construction;
			};

			$scope.fleetHasAdmiral = function( fleet ) {

				var hasAdmiral = false;

				$.each( fleet.ships, function(i,ship) {
					if( ship.admiral ) {
						hasAdmiral = true;
						return false;
					}
				});

				return hasAdmiral;

			};

			$scope.fleetHasAmbassador = function( fleet ) {

				var hasAmbassador = false;

				$.each( fleet.ships, function(i,ship) {
					if( ship.ambassador ) {
						hasAmbassador = true;
						return false;
					}
				});

				return hasAmbassador;

			};

			$scope.setShipAdmiral = function(fleet,ship,admiral) {

				if( admiral.type != "admiral" )
					return false;

				// Check interceptors
				var canEquip = valueOf(admiral,"canEquipAdmiral",ship,fleet);
				if( !canEquip ) {
					console.log("equip stopped by interceptor");
					return false;
				}

				// Uniqueness
				var other = $scope.findOtherInFleet(admiral, fleet);

				if( other && other != admiral && other != ship.admiral ) {
					console.log( "admiral already in fleet" );
					return false;
				}

				// Move if already in fleet
				if( other && other != ship.admiral ) {
					$scope.removeFromFleet( other, fleet, ship.admiral );
				}

				//ship.admiral = $.extend(true,{}, admiral);
				ship.admiral = angular.copy(admiral);

				return ship.admiral;

	};

				$scope.setShipAmbassador = function(fleet,ship,ambassador) {

					if( ambassador.type != "ambassador" )
						return false;

				// Check interceptors
					var canEquip = valueOf(ambassador,"canEquipAmbassador",ship,fleet);
					if( !canEquip ) {
						console.log("equip stopped by interceptor");
						return false;
					}

				// Uniqueness
				var other = $scope.findOtherInFleet(ambassador, fleet);

				if( other && other != ambassador && other != ship.ambassador ) {
					console.log( "ambassador already in fleet" );
					return false;
				}

				// Move if already in fleet
				if( other && other != ship.ambassador ) {
					$scope.removeFromFleet( other, fleet, ship.ambassador );
				}

				//ship.ambassador = $.extend(true,{}, ambassador);
				ship.ambassador = angular.copy(ambassador);

				return ship.ambassador;

			};

			$scope.findOtherInFleet = function( card, fleet ) {

				var clash = false;

				$.each( fleet.ships, function(i, ship) {

					if( card == ship || isUniqueClash(card, ship) ) {
						clash = ship;
						return false;
					}

					if( card == ship.captain || isUniqueClash(card, ship.captain)) {
						clash = ship.captain;
						return false;
					}

					if( card == ship.admiral || isUniqueClash(card, ship.admiral)) {
						clash = ship.admiral;
						return false;
					}

					if( card == ship.ambassador || isUniqueClash(card, ship.ambassador)) {
						clash = ship.ambassador;
						return false;
					}

					$.each( $scope.getUpgradeSlots(ship), function(j, upgradeSlot) {
						if( card == upgradeSlot.occupant || isUniqueClash(card, upgradeSlot.occupant) ) {
							clash = upgradeSlot.occupant;
							return false;
						}
					} );

					if( clash )
						return false;

				} );

				if( fleet.resource )
					$.each( fleet.resource.upgradeSlots || [], function(i, upgradeSlot) {
						if( card == upgradeSlot.occupant || isUniqueClash(card, upgradeSlot.occupant) ) {
							clash = upgradeSlot.occupant;
							return false;
						}
					} );

				return clash;

			};

			function isUniqueClash( card, other ) {
				return other && card.unique && other.unique && card.name == other.name && card.mirror == other.mirror ? other : false;
			}

			$scope.removeFromFleet = function( card, fleet, replaceWith ) {

				if( !card )
					return false;

				if( card == fleet.resource )
					delete fleet.resource;

				if( fleet.resource )
					$.each( fleet.resource.upgradeSlots || [], function(j,slot) {
						if( card == slot.occupant ) {
							if( replaceWith && $scope.isUpgradeCompatible( replaceWith, slot ) )
								slot.occupant = replaceWith;
							else
								delete slot.occupant;
							found = true;
							return false;
						}
					} );

				$.each( fleet.ships, function(i, ship) {

					if( card == ship ) {
						if( replaceWith && replaceWith.type == "ship" )
							fleet.ships[i] = replaceWith;
						else
							fleet.ships.splice(i,1);
						return false;
					}

					if( card == ship.resource ) {
						delete ship.resource;
						return false;
					}

					if( card == ship.captain ) {
						if( replaceWith && replaceWith.type == "captain" )
							ship.captain = replaceWith;
						else
							delete ship.captain;
						return false;
					}

					if( card == ship.admiral ) {
						if( replaceWith && replaceWith.type == "admiral" )
							ship.admiral = replaceWith;
						else
							delete ship.admiral;
						return false;
					}

					if( card == ship.ambassador ) {
						if( replaceWith && replaceWith.type == "ambassador" )
							ship.ambassador = replaceWith;
						else
							delete ship.ambassador;
						return false;
					}

					if( card == ship.construction ) {
						if( replaceWith && replaceWith.type == "construction" )
							ship.construction = replaceWith;
						else
							delete ship.construction;
						return false;
					}

					var found = false;

					$.each( $scope.getUpgradeSlots(ship), function(j,slot) {
						if( card == slot.occupant ) {
							if( replaceWith && $scope.isUpgradeCompatible( replaceWith, slot ) )
								slot.occupant = replaceWith;
							else
								delete slot.occupant;
							found = true;
							return false;
						}
					} );

					return !found;
				});

				// Trigger onRemove handlers
				valueOf(card,"onRemove",{},fleet);

			};

			$scope.getTotalCost = function(ship, fleet) {

				var valueOf = $filter("valueOf");

				var cost = valueOf(ship, "cost", ship, fleet);

				if( ship.resource ) {
					if( !valueOf(ship.resource,"free",ship,fleet) )
						cost += valueOf(ship.resource,"cost",ship,fleet);
				}

				if( ship.captain )
					if( !valueOf(ship.captain,"free",ship,fleet) )
						cost += valueOf(ship.captain,"cost",ship,fleet);

				if( ship.admiral )
					if( !valueOf(ship.admiral,"free",ship,fleet) )
						cost += valueOf(ship.admiral,"cost",ship,fleet);

				if( ship.ambassador )
					if( !valueOf(ship.ambassador,"free",ship,fleet) )
						cost += valueOf(ship.ambassador,"cost",ship,fleet);
				
				if( ship.construction && !valueOf(ship.construction,"free",ship,fleet) )
						cost += valueOf(ship.construction,"cost",ship,fleet);

				$.each( $scope.getUpgradeSlots(ship), function(i,slot) {
					if( slot.occupant )
						if( !valueOf(slot.occupant,"free",ship,fleet) )
							cost += valueOf(slot.occupant,"cost",ship,fleet);
				});
				ship.totalCost = cost;
				return cost;
			};

			$scope.getFleetCost = function(fleet) {

				var cost = fleet.resource ? valueOf(fleet.resource,"cost",{},fleet) : 0;

				$.each( fleet.ships, function(i, ship) {
					cost += $scope.getTotalCost(ship,fleet);
				});
				fleet.totalCost = cost;
				return cost;

			};

			$scope.setFleetResource = function(fleet, resource) {

				if( fleet.resource )
					$scope.removeFromFleet(fleet.resource, fleet);

				fleet.resource = resource;

			};

			// TODO Move save/load to new module
			$scope.saveFleet = function(fleet) {

				var savedFleet = {
					ships: []
				};

				// TODO Might need to save more data for some resources
				if( fleet.resource )
					savedFleet.resource = saveCard(fleet.resource);

				$.each( fleet.ships, function(i, ship) {
					savedFleet.ships.push( saveCard(ship) );
				});

				return savedFleet;

			};

			function saveCard(card) {

				if( !card )
					return {};

				var saved = {
					id: card.type+":"+card.id
				};

				if( card.resource )
					saved.resource = saveCard(card.resource);

				if( card.captain )
					saved.captain = saveCard(card.captain);

				if( card.admiral )
					saved.admiral = saveCard(card.admiral);

				if( card.ambassador )
					saved.ambassador = saveCard(card.ambassador);
				
				if( card.construction )
					saved.construction = saveCard(card.construction);

				var upgrades = [];
				// TODO Consider switching ship.upgrades to .upgradeSlots
				$.each( card.upgrades || [], function(i, slot) {
					var savedSlot = {};
					if( slot.occupant ) {
						savedSlot = saveCard(slot.occupant);
					}
					upgrades.push(savedSlot);
				});
				if( upgrades.length > 0 )
					saved.upgrades = upgrades;

				var upgradeSlots = [];
				$.each( card.upgradeSlots || [], function(i, slot) {
					var savedSlot = {};
					if( slot.occupant ) {
						savedSlot = saveCard(slot.occupant);
					}
					upgradeSlots.push(savedSlot);
				});
				if( upgradeSlots.length > 0 )
					saved.upgradeSlots = upgradeSlots;

				return saved;

			}

			$scope.findCardById = function(cards, id) {

				var match = false;
				$.each( cards, function(i, card) {
					if( card.type+":"+card.id == id ) {
						match = card;
						return false;
					}
				} )
				return match;

			};

			function loadCard(fleet, cards, savedCard, ship) {

				var card = angular.copy( $scope.findCardById(cards, savedCard.id) );

				if( !card ) {
					console.log("unable to load card",savedCard.id);
					return false;
				}

				var promulgate = function(card) {

					if( savedCard.resource ) {
						var result = loadCard(fleet, cards, savedCard.resource, card);
						if( result ) {
							var resource = $scope.setShipResource( fleet, card, result.card );
							if( resource )
								result.promulgate(resource);
						}
					}

					if( savedCard.captain ) {
						var result = loadCard(fleet, cards, savedCard.captain, card);
						if( result ) {
							var captain = $scope.setShipCaptain( fleet, card, result.card );
							if( captain )
								result.promulgate(captain);
						}
					}

					if( savedCard.admiral ) {
						var result = loadCard(fleet, cards, savedCard.admiral, card);
						if( result ) {
							var admiral = $scope.setShipAdmiral( fleet, card, result.card );
							if( admiral )
								result.promulgate(admiral);
						}
					}

					if( savedCard.ambassador ) {
						var result = loadCard(fleet, cards, savedCard.ambassador, card);
						if( result ) {
							var ambassador = $scope.setShipAmbassador( fleet, card, result.card );
							if( ambassador )
								result.promulgate(ambassador);
						}
					}

					if( savedCard.construction ) {
						var result = loadCard(fleet, cards, savedCard.construction, card);
						if( result ) {
							var construction = $scope.setShipConstruction( fleet, card, result.card );
							if( construction )
								result.promulgate(construction);
						}
					}

					$.each( savedCard.upgrades || [], function(i, savedUpgrade) {

						if( savedUpgrade && savedUpgrade.id ) {
							var result = loadCard( fleet, cards, savedUpgrade, card );
							if( !result )
								return;
							var upgrade = $scope.setUpgrade( fleet, card, card.upgrades[i], result.card );
							if( !upgrade )
								return;
							result.promulgate(upgrade);
						}

					} );

					$.each( savedCard.upgradeSlots || [], function(i, savedUpgrade) {

						if( savedUpgrade && savedUpgrade.id ) {
							var result = loadCard( fleet, cards, savedUpgrade, ship || card );
							if( !result )
								return;
							var upgrade = $scope.setUpgrade( fleet, ship || card, card.upgradeSlots[i], result.card );
							if( !upgrade )
								return;
							result.promulgate(upgrade);
						}

					} );

				}

				return { card: card, promulgate: promulgate };

			}

			$scope.loadFleet = function(cards, savedFleet) {

				var fleet = { ships: [] };

				if( savedFleet.resource ) {
					result = loadCard( fleet, cards, savedFleet.resource );
					if( result ) {
						fleet.resource = result.card;
						result.promulgate(fleet.resource);
					}
				}

				$.each( savedFleet.ships, function(i, savedShip) {

					var result = loadCard( fleet, cards, savedShip );

					if( !result )
						return;

					var ship = $scope.addFleetShip( fleet, result.card )
					if( !ship )
						return;

					result.promulgate(ship);

				});

				return fleet;

			}

			var hashFleet = false;
			try {
				hashFleet = location.hash ? angular.fromJson( atob( location.hash.substring(1) ) ) : false;
			} catch(e) {}

			$scope.$on("cardsLoaded", function() {
				if( hashFleet ) {
					hashFleet = $scope.loadFleet( $scope.cards, hashFleet );
					if( hashFleet ) {

						$scope.fleet = hashFleet;

						if( $scope.fleet.ships.length > 0 ) {

							// Hide empty slots when loading a fleet.. so it looks nice.
							$.each( hashFleet.ships, function(i,ship) {
								ship.hideEmptySlots = true;
							} );

							// Also hide search
							$scope.searchOptions.columns = 0;

						}

					}
				}
			});

		}]

	};

}]);
