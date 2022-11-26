var module = angular.module("utopia-search", ["utopia-card", "utopia-dragdrop", "utopia-card-loader", "utopia-card-rules"]);

module.filter( "cardFilter", [ "$factions", "$filter", function($factions, $filter) {

	return function( cards, options ) {

		var valueOf = $filter("valueOf");

		return $.map( cards, function(card) {

			// Uniqueness options
			if( options.unique && !card.unique && !options.generic )
				return null;

			if( options.generic && card.unique && !options.unique)
				return null;

			// Filter by selected expansions
			if( card.set && !options.ignoreSetsFilter && options.sets ) {
				var setSelected = false;
				$.each( card.set, function(i,id) {
					if( options.sets[id].search )
						setSelected = true;
				});
				if( !setSelected )
					return null;
			}

			// Custom filter
			if( options.filterField && options.filterOperator && options.filterValue ) {
				var value = valueOf(card,options.filterField);
				if( !value )
					return null;
				switch( options.filterOperator ) {
					case "<": if( value >= options.filterValue ) return null; break;
					case "<=": if( value > options.filterValue ) return null; break;
					case "=": if( value != options.filterValue ) return null; break;
					case ">=": if( value < options.filterValue ) return null; break;
					case ">": if( value <= options.filterValue ) return null; break;
				}
			}

			// Text search
			if( options.query ) {
				if( card.name.toLowerCase().indexOf( options.query.toLowerCase() ) < 0 &&
					( !card.class || card.class.toLowerCase().indexOf( options.query.toLowerCase() ) < 0 ) &&
					( card.text.toLowerCase().indexOf( options.query.toLowerCase() ) < 0 ) )
					return null;
			}

			// Type selection
			var noneSelected = true;
			$.each( options.types, function(name, data) {
				if( data.search ) {
					noneSelected = false;
					return false;
				}
			});
			if( !(noneSelected || options.types[card.type].search) )
				return null;

			// Check if we are checking a ship card and we've filtered on a
			// type of maneuver, check and see if this is a valid maneuver.
			if (options.maneuverType){
				if (card.type == "ship"){
					var hasFilteredManeuver = false;
					var maneuvers = [];

					// Build a more useful maneuver object and define a reverse
					$.each(Object.keys(card.classData.maneuvers), function(i, speed){
						if ($.isNumeric(speed)){
							var direction_keys = Object.keys(card.classData.maneuvers[speed]);
							$.each(direction_keys, function(j, direction){
								maneuver_object = {};
								maneuver_object.direction = direction;
								maneuver_object.difficulty = card.classData.maneuvers[speed][direction];
								maneuver_object.speed = parseInt(speed, 10);
								if (maneuver_object.speed < 0){
									maneuver_object.direction = 'reverse';
									maneuver_object.speed = Math.abs(maneuver_object.speed);
								}
								maneuvers.push(maneuver_object);
							});
						}
					});

					// Check all of the maneuvers against the selected maneuver direction
					// and, if specified, the maneuver difficulty (color)
					$.each(maneuvers, function(i, maneuver){
						if (options.maneuverDifficulty){
							if (maneuver.direction == options.maneuverType &&
								  maneuver.difficulty == options.maneuverDifficulty)
								hasFilteredManeuver = true;
						} else {
							if (maneuver.direction == options.maneuverType){
								hasFilteredManeuver = true;
							}
						}
					});

					if (!hasFilteredManeuver) return null;

				} else {
					// If we got here, we are filtering on ship manuevers but the current
					// card isn't a ship, so skip it.
					return null;
				}

			}

			// Resources skip faction
			if( card.type == "resource" )
				return card;

			// Faction selection
			var noneSelected = true;
			var hasAFaction = false;
			$.each( options.factions, function(name, data) {
				if( data.search ) {
					noneSelected = false;
					hasAFaction |= $factions.hasFaction(card,name);
				}
			});
			if( !(noneSelected || hasAFaction) )
				return null;

			return card;
		});

	}

}]);

module.filter( "sortBy", [ "$filter", function($filter) {

	return function( cards, sortBy, ascending ) {
		ascending = ascending === true || ascending == "true";
		return $filter("orderBy")( cards, function(card) {
			var value = $filter("valueOf")(card,sortBy);
			return value || 0;
		}, !ascending );
	};

}]);

module.directive( "search", function() {

	return  {

		scope: {
			cards: "=",
			sets: "=",
			setList: "=",
			dragStore: "=",
			search: "=searchOptions",
			defaults: "=",
		},

		templateUrl: "search.html",

		controller: [ "$scope", "$factions", function($scope, $factions) {

			// Set initial search parameters
			$scope.search = {
				query: "",
				unique: false,
				generic: false,
				factions: {},
				types: { "ship": {}, "captain": {}, "admiral": {} },
				columns: 1,
				sortBy: "cost",
				ascending: "false",
				maneuverType: "",
				maneuverDifficulty: "",
				filterField: "",
				filterOperator: "<=",
				filterValue: "",
			};

			$scope.defaults = localStorage.defaults ? angular.fromJson( localStorage.defaults ) : {};

			// Load search defaults
			if( $scope.defaults.search )
				angular.copy( $scope.defaults.search, $scope.search );
			else
				$scope.defaults.search = angular.copy($scope.search);

			// Clears search parameters
			$scope.resetSearch = function() {
				$scope.search.query = "";
				$scope.search.unique = false;
				$scope.search.generic = false;
				$.each( $scope.search.factions, function(i,faction) {
					faction.search = false;
				} );
				$.each( $scope.search.types, function(i,types) {
					types.search = false;
				} );
				$scope.search.sortBy = $scope.defaults.search.sortBy || "name";
				$scope.search.ascending = $scope.defaults.search.ascending || "true";
				$scope.search.maneuverType = "";
				$scope.search.maneuverDifficulty = "";
				$scope.search.filterField = "";
				$scope.search.filterOperator = "<=";
				$scope.search.filterValue = "";
			};

			// Controls search results expand/collapse
			$scope.modifySearchColumns = function(amount) {

				$scope.search.columns += amount;

				if( $scope.search.columns < 0 )
					$scope.search.columns = 0;

				if( $scope.search.columns > 5 )
					$scope.search.columns = 5;

			};

			// Reset result display count when search changes
			$scope.$watch( "search", function() {
				$scope.resultLimit = 10;
			}, true);

			// Store changes to expansions filter
			$scope.$watch( "search.sets", function(sets) {
				if( sets )
					localStorage.sets = angular.toJson( sets );
			}, true);

			// Store changes to expansions filter
			$scope.$watch( "defaults", function(defaults) {
				if( defaults )
					localStorage.defaults = angular.toJson( defaults );
			}, true);

			// Construct faction list from hard-coded list
			$.each( $factions.list, function(i, faction) {
				$scope.search.factions[faction.toLowerCase().replace(/ /g,"-")] = {};
			});

			$scope.sortables = [
				{
					value: "name",
					name: "Name"
				},
				{
					value: "cost",
					name: "Cost"
				},
				{
					value: "attack",
					name: "Attack"
				},
				{
					value: "agility",
					name: "Agility"
				},
				{
					value: "hull",
					name: "Hull"
				},
				{
					value: "shields",
					name: "Shields"
				},
				{
					value: "skill",
					name: "Skill Value"
				}
			];

			$scope.maneuvers = [
				// TODO Un-comment straight when we add more maneuver filters
				// {
				// 	value: "straight",
				// 	name: "Straight"
				// },
				{
					value: "bank",
					name: "Bank"
				},
				{
					value: "turn",
					name: "Turn"
				},
				{
					value: "about",
					name: "Come About"
				},
				{
					value: "reverse",
					name: "Full Astern"
				},
				{
					value: "spin",
					name: "Spin"
				},
				{
					value: "stop",
					name: "Stop"
				},
				{
					value: "flank",
					name: "Flank"
				},
				{
					value: "45-degree-rotate",
					name: "Rotate 45 Degrees"
				},
				{
					value: "90-degree-rotate",
					name: "Rotate 90 Degrees"
				}
			]

			$scope.difficulty_list = [
				{
					value: "green",
					name: "Green"
				},
				{
					value: "white",
					name: "White"
				},
				{
					value: "red",
					name: "Red"
				}
			]

			$scope.$on( "cardsLoaded", function() {
				// Construct list of card types from those available
				$.each( $scope.cards, function(i, card) {
					if( !$scope.search.types[card.type] )
						$scope.search.types[card.type] = {};
				});

				// Load stored owned expansions
				try {
					$scope.search.sets = localStorage.sets ? angular.fromJson( localStorage.sets ) : {};
					$scope.defaults = localStorage.defaults ? angular.fromJson( localStorage.defaults ) : {};
				} catch(e) {
					$scope.search.sets = {};
					$scope.defaults = {};
				}

				// Add new sets to filter
				$.each( $scope.sets, function(i, set) {
					if( !$scope.search.sets[set.id] ) {
						console.log("New set: " + set.name);
						$scope.search.sets[set.id] = { search: true };
					}
					$scope.setList.push( set );
				});
			});

			// Uncheck all sets
			$scope.uncheckAllSets = function() {
				$.each( $scope.search.sets, function(i,set) {
					set.search = false;
				} );
			};

			/**
			 * Export owned sets for import into another browser session
			 */
			$scope.exportSets = function() {
				var filename = 'utopia_owned_sets.json';
				var ownedSets = JSON.stringify($scope.search.sets, null, 2);
				var encodedSets = encodeURIComponent(ownedSets);
				var encodingInfo = "data:application/json;charset=utf-8,"
				var element = document.createElement('a');
				console.log("Exporting owned sets to the file " + filename);

				// Generate a file download link and provide the encoded data
				// as the file source
				element.setAttribute('href', encodingInfo + encodedSets);
				element.setAttribute('download', filename);
				element.style.display = 'none';
				document.body.appendChild(element);

				// Autoclick the link and then remove the link
				element.click();
				document.body.removeChild(element);
			};

			/**
			 * Import an owned sets list from a json file
			 * @param  {Object} inputFile The file data from the HTML File input type
			 */
			$scope.importSets = function(inputFile) {
				// Multiselect should not have been on so grab the first file in the
				// array
				var importFile = inputFile.files[0];

				// Create a FileReader object and create a holding place for the data
				// in the file
				var reader = new FileReader();
				var rawSetData = "";

				// Override the FileReader onload function to read the file in and,
				// upon completion, set the data to the processImport function for
				// processing into the browser storage
				reader.onload = function(event) {
					rawSetData = event.target.result;
					$scope.processSetsImport(rawSetData);
				};

				console.info("Opening " + importFile.name + " saved set file...")

				// Read the file using the FileReader object with the overridden onload
				reader.readAsText(importFile);
			};

			/**
			 * Convert the read-in data to a JSON object and write to the browser
			 * storage
			 *
			 * @param  {String} importedData Raw text imported from a file
			 */
			$scope.processSetsImport = function(importedData) {
				// Parse the text to a JSON data object
				var importedSets = JSON.parse(importedData);
				var errorCount = 0;
				$.each(importedSets, function(i, set){
					if ("search" in set == false) errorCount++;
				});

				// If we found objects in the import file that didn't have the expected
				// keys, declare an error and return without loading the file into
				// the application.
				if (errorCount > 0){
					console.error("Owned set file import failed with " + errorCount + " errors found in file.")
				} else {
					// Write the imported data to the file store
					localStorage.sets = angular.toJson( importedSets );

					// Refresh the application to accept the imported data
					window.location.reload(true);
				}
			};

			// Check all sets
			$scope.checkAllSets = function() {
				$.each( $scope.search.sets, function(i,set) {
					set.search = true;
				} );
			};
		}]
	};

} );

module.directive( "searchFilterGroup", function() {

	return  {

		scope: {
			title: "@",
		},

		templateUrl: "search-filter-group.html",

		transclude: true,

		link: function(scope,element,attrs) {
			if( attrs.open != undefined )
				scope.showContent = true;
		},

	};

} );
