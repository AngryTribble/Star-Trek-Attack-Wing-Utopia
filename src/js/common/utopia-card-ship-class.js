var module = angular.module("utopia-card-ship-class", []);

module.directive( "cardShipClass", function() {

	return {

		scope: {
			shipClass: "=",
			ship: "=",
			fleet: "="
		},

		templateUrl: "card-ship-class.html",

		controller: [ "$scope", function($scope) {
			
			$scope.abs = Math.abs;
			
			$scope.speeds = [];
			
			var m = $scope.shipClass.maneuvers;
			
			for( var speed = m.max; speed >= m.min; speed-- ) {
				if( speed != 0 || m["0"] )
					$scope.speeds.push(speed);
			}
			
			if( $scope.speeds.length < 7 && m.min > -2 )
				$scope.speeds.push(9);
			if( $scope.speeds.length < 7 && m.min > -1 )
				$scope.speeds.push(9);
			
			while( $scope.speeds.length < 7 )
				$scope.speeds.unshift(9);
			
			$scope.getBaseTileName = function(ship) {
				return ship.unique ? ship.name : ship.class;
			}
		
		}]

	};

} );