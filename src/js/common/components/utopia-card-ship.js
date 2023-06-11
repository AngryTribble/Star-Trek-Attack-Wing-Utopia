var module = angular.module("utopia-card-ship", []);

module.directive( "cardShip", function() {

	return {

		scope: {
			ship: "=",
			fleet: "=",
			dragStore: "=",
			dragSource: "="
		},

		templateUrl: "card-ship.html",

		controller: [ "$scope", function($scope) {

		}]

	};

} );