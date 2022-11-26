var module = angular.module("utopia-missions", ["utopia"]);

module.controller( "UtopiaSetCtrl", [ "$scope", "cardLoader",  function($scope, cardLoader) {

	$scope.missionSets = {};
	$scope.missionList = [];

	$scope.viewer = {};
	$scope.activeSet = false;
	$scope.setCards = [];
	
	cardLoader( $scope.missionSets, function() {

		var sourceID = location.hash ? location.hash.substring(1) : false;
		
		$.each( Object.keys( $scope.missionSets ), function(i, sourceID) {
			var missionSet = $scope.missionSets[sourceID];
			if( missionSet.sourceID == sourceID || missionSet.name == sourceID )
			{$scope.viewer.missionSets = missionSet;
			$scope.missionList.push(missionSet);
		};
		
	});
	
	$scope.$watch( "viewer.missionSets", function(missionSet) {
		
		$scope.missionSetCards = [];
		if( missionSet ) {
			location.hash = missionSet.sourceID;
			$.each( $scope.cards, function(i, card) {
				if( $.inArray( missionSet.sourceID, card.missionSet ) >= 0 )
					$scope.setCards.push( card );
			});
			$scope.setCards.sort(displaySort);
		}
		
	} );
	
} )

}]);