var module = angular.module("utopia-valueof", []);

module.filter( "removeDashes", [ "$filter", function($filter) {

	return function( str ) {
		return str ? str.replace(/\-/g," ") : str;
	}

}]);

module.factory( "globalInterceptors", function() {
	return {
		// Prevent all cards from ever having a negative cost
		cost: {
			priority: 1000, // Must be last to run
			source: "Cost cannot be negative",
			hidden: true,
			fn: function(card,ship,fleet,cost) {
				cost = cost instanceof Function ? cost(card,ship,fleet) : cost;
				return cost < 0 ? 0 : cost;
			}
		}
	}
} );

module.filter( "upgradeSlots", function() {

	return function( ship ) {

		var toCheck = [];
		if( ship.resource && ship.resource.upgradeSlots )
			toCheck = toCheck.concat(ship.resource.upgradeSlots);
		if( ship.captain && ship.captain.upgradeSlots )
			toCheck = toCheck.concat(ship.captain.upgradeSlots);
		if( ship.admiral && ship.admiral.upgradeSlots )
			toCheck = toCheck.concat(ship.admiral.upgradeSlots);
		if( ship.ambassador && ship.ambassador.upgradeSlots )
			toCheck = toCheck.concat(ship.ambassador.upgradeSlots);
		if( ship.construction && ship.construction.upgradeSlots)
			toCheck = toCheck.concat(ship.construction.upgradeSlots);

		toCheck = toCheck.concat( ship.upgrades ).concat( ship.upgradeSlots );

		var slots = [];

		while( toCheck.length > 0 ) {
			var slot = toCheck.shift();
			if( slot ) {
				slots.push( slot );
				if( slot.occupant && slot.occupant.upgradeSlots && !slot.faceDown )
					toCheck = slot.occupant.upgradeSlots.concat( toCheck );
			}
		}

		return slots;

	}

} );

function wrapInterceptors( interceptors, source, destArr ) {

	var source = source.type ? "["+source.type+"] " + source.name : source;

	if( interceptors instanceof Function || !interceptors.length )
		interceptors = [interceptors];

	$.each( interceptors, function(i,interceptor) {
		if( interceptor instanceof Function )
			destArr.push( { fn: interceptor, priority: 50, source: source } );
		else if( interceptor.fn ) {
			interceptor.priority = interceptor.priority || 50;
			interceptor.source = interceptor.source || source;
			destArr.push( interceptor );
		} else {
			console.log( "Invalid interceptor", interceptor );
		}
	} );

}

module.filter( "shipInterceptors", [ "$filter", function($filter) {

	var upgradeSlots = $filter("upgradeSlots");

	return function( card, ship, type, field, upgradeSlot ) {

		var interceptors = [];

		var slots = upgradeSlots(ship);

		$.each( slots, function(i, slot) {
			if( slot.occupant && slot.occupant.intercept[type][field] && !slot.faceDown )
				wrapInterceptors( slot.occupant.intercept[type][field], slot.occupant, interceptors );
			if( (upgradeSlot && slot == upgradeSlot) || (card == slot.occupant) ) {
				if( slot.intercept && slot.intercept[type] && slot.intercept[type][field] ) {
					wrapInterceptors( slot.intercept[type][field], slot.source || "Unknown", interceptors );
				}
			}
		});

		if( ship.resource && ship.resource.intercept[type][field] )
			wrapInterceptors( ship.resource.intercept[type][field], ship.resource, interceptors );

		if( ship.captain && ship.captain.intercept[type][field] )
			wrapInterceptors( ship.captain.intercept[type][field], ship.captain, interceptors );

		if( ship.admiral && ship.admiral.intercept[type][field] )
			wrapInterceptors( ship.admiral.intercept[type][field], ship.admiral, interceptors );

		if( ship.ambassador && ship.ambassador.intercept[type][field] )
				wrapInterceptors( ship.ambassador.intercept[type][field], ship.ambassador, interceptors );

		if( ship.construction && ship.construction.intercept[type][field] )
				wrapInterceptors( ship.construction.intercept[type][field], ship.construction, interceptors );

		if( ship.intercept && ship.intercept[type][field] )
			wrapInterceptors( ship.intercept[type][field], ship, interceptors );

		return interceptors;

	}

}]);

module.filter( "interceptors", [ "$filter","globalInterceptors", function($filter, globalInterceptors) {

	var shipInterceptors = $filter("shipInterceptors");

	return function( card, ship, fleet, field, upgradeSlot ) {

		var interceptors = [];

		if( card.intercept && card.intercept.self && card.intercept.self[field] )
			wrapInterceptors(card.intercept.self[field], card, interceptors);

		if( ship )
			interceptors = interceptors.concat( shipInterceptors(card,ship,"ship",field,upgradeSlot) );

		if( fleet ) {

			$.each( fleet.ships || [], function(i, ship) {
				interceptors = interceptors.concat( shipInterceptors(card,ship,"fleet",field) );
			});

			if( fleet.resource ) {
				interceptors = interceptors.concat( shipInterceptors(card,fleet.resource,"fleet",field) );
			}

		}

		if( globalInterceptors[field] )
			interceptors = interceptors.concat( globalInterceptors[field] );

		return interceptors;

	}

}]);

module.filter( "valueOf", [ "$filter", function($filter) {

	var interceptorsFilter = $filter("interceptors");

	return function( card, field, ship, fleet, upgradeSlot, options ) {

		data = card[field];

		data = data instanceof Function ? data(card, ship, fleet) : data;

		var modifiers = [ { source: "Printed Value", value: data } ];

		if( ship ) {

			var interceptors = interceptorsFilter( card, ship, fleet, field, upgradeSlot );

			interceptors.sort( function(a,b) {
				return a.priority > b.priority ? 1 : -1;
			});

			$.each( interceptors, function(i, interceptor) {
				var dataBefore = data;
				data = interceptor.fn( card, ship, fleet, data );
				if( data != dataBefore && !interceptor.hidden ) {
					data = data instanceof Function ? data(card, ship, fleet) : data;
					dataBefore = dataBefore instanceof Function ? dataBefore(card, ship, fleet) : dataBefore;
					if( data != dataBefore ) {
						modifiers.push( { source: interceptor.source, value: (data - dataBefore) } );
					}
				}
			});

		}

		if( data instanceof Function )
			data = data(card, ship, fleet);

		if( options && options.modifiers )
			return modifiers;

		return data;

	}

}]);
