
module.filter( "shipCardNamed", [ "$filter", function($filter) {

	var upgradeSlotsFilter = $filter("upgradeSlots");

	return function( ship, name ) {
		if( ship.name == name )
			return ship;

		if( ship.captain && ship.captain.name == name )
			return ship.captain;

		var match = false;
		$.each( upgradeSlotsFilter(ship), function(i, slot) {
			if( slot.occupant && slot.occupant.name == name ) {
				match = slot.occupant;
				return false;
			}
		});

		return match;

	}

}]);