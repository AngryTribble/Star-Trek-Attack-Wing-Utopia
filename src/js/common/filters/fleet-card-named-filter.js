module.filter( "fleetCardNamed", [ "$filter", function($filter) {

	var shipCardNamed = $filter("shipCardNamed");

	return function( fleet, name ) {

		if( !fleet ) {
			return false;
		}

		var match = false;
		$.each( fleet.ships, function(i, ship) {
			match = shipCardNamed(ship, name);
			if( match )
				return false;
		});

		return match;

	}

}]);