var module = angular.module("utopia-card-upgrade", []);

module.directive( "cardUpgrade", function() {

	return {

		scope: {
			upgrade: "=",
			ship: "=",
			fleet: "=",
			dragStore: "=",
			dragSource: "="
		},

		templateUrl: "card-upgrade.html",

		controller: [ "$scope", function($scope) {

			$scope.range = function(size) {
				return new Array(size);
			};
			
			$scope.isDefined = function(value) {
				return value !== undefined;
			};
		
		}]

	};

} );