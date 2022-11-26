var module = angular.module("utopia-card-resource", []);

module.directive( "cardResource", function() {

	return {

		scope: {
			resource: "=",
			ship: "=",
			fleet: "=",
			dragStore: "=",
			dragSource: "="
		},

		templateUrl: "card-resource.html",

		controller: [ "$scope", function($scope) {

		}]

	};

} );
