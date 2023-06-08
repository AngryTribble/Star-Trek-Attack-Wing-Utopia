var module = angular.module("utopia-card", ["utopia-tooltip", "utopia-card-ship", "utopia-card-ship-class", "utopia-card-upgrade", "utopia-card-resource", "utopia-dragdrop", "utopia-valueof"]);

module.directive( "card", function() {
	
	return  {
		
		scope: {
			card: "=",
			ship: "=",
			fleet: "=",
			dragStore: "=",
			dragSource: "@",
		},
		
		restrict: "E",
		
		templateUrl: "card.html",
		
	};
	
} );

module.filter( "icons", function() {

	return function( text ) {
		return text.replace( /\[([^\]]*)\]/g, "<i class='fs fs-$1'></i>" ).replace( /\n/g, "<br/>" );
	};

});