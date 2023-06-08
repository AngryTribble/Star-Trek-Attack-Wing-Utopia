var module = angular.module("utopia-card-faction", []);

module.directive( "cardFaction", function() {

	return {

		scope: {
			faction: "=",
			dragStore: "=",
			dragSource: "="
		},

		templateUrl: "card-faction.html",

		controller: [ "$scope", function($scope) {

		}]

	};

} );