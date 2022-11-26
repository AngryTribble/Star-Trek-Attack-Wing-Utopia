var module = angular.module("utopia-set-viewer", ["utopia"]);

module.controller( "UtopiaSetCtrl", [ "$scope", "$filter", "cardLoader", "$factions", function($scope, $filter, cardLoader, $factions) {

	$scope.cards = [];
	$scope.sets = {};
	$scope.setList = [];
	$scope.shipClasses = {};
	$scope.token = {};

	$scope.viewer = {};
	$scope.activeSet = false;
	$scope.setCards = [];
	
	cardLoader( $scope.cards, $scope.sets, $scope.shipClasses, $scope.token, function() {

		var setId = location.hash ? location.hash.substring(1) : false;
		
		$.each( Object.keys( $scope.sets ), function(i, id) {
			var set = $scope.sets[id];
			if( set.id == setId || set.name == setId )
				$scope.viewer.set = set;
			$scope.setList.push(set);
		});
		
	});
	
	$scope.$watch( "viewer.set", function(set) {
		
		$scope.setCards = [];
		if( set ) {
			location.hash = set.id;
			$.each( $scope.cards, function(i, card) {
				if( $.inArray( set.id, card.set ) >= 0 )
					$scope.setCards.push( card );
			});
			$scope.setCards.sort(displaySort);
		}
		
	} );
	
	function typeSort(a,b) {
		if( a.cost > b.cost )
			return -1;
		if( b.cost > a.cost )
			return 1;
		return 0;
	}
	
	function displaySort(a,b) {
		if( a.type == "ship" && a.unique )
			return -1;
		if( b.type == "ship" && b.unique )
			return 1;
		if( a.type == b.type )
			return typeSort(a,b);
		if( a.type == "ship" )
			return -1;
		if( b.type == "ship" )
			return 1;
		if( a.type == "captain" )
			return -1;
		if( b.type == "captain" )
			return 1;
		if( a.type == "admiral" )
			return -1;
		if( b.type == "admiral" )
			return 1;
		if( a.type == "talent" )
			return -1;
		if( b.type == "talent" )
			return 1;
		if( a.type == "weapon" )
			return -1;
		if( b.type == "weapon" )
			return 1;
		if( a.type == "tech" )
			return -1;
		if( b.type == "tech" )
			return 1;
		if( a.type == "crew" )
			return -1;
		if( b.type == "crew" )
			return 1;
		return 0;
	}
	
}] );