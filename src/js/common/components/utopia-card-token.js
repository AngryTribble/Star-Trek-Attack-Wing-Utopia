var module = angular.module("utopia-card-token", []);

module.directive( "cardToken", function() {

	return {

		scope: {
			token: "=",
			ship: "=",
			fleet: "=",
			dragStore: "=",
			dragSource: "="
		},

		templateUrl: "card-token.html",

		controller: [ "$scope", function($scope) {

		}]

	};

} );