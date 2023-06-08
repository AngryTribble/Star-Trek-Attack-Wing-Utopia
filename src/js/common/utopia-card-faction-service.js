
module.factory( "$factions", [ "$filter", function($filter) {
	var valueOf = $filter("valueOf");

	    // "Game elements(implied any) of a sub-faction also count as their corresponding prime faction. This means that a Vulcan ship also counts
	    //  as a Federation ship, but a Federation ship does not count as a Vulcan ship."

	    // each faction paired with either itself or it's prime faction as a lookup solves this particular check
			// and continues to check all 'factions' as they should
			// because if they have a prime faction they are considered as that prime by the game rules
			// and if they are not they are their own 'prime faction'

			// this also has huge savings on code and complexity by handling the game's rule here as the $factions.hasFaction() func
			// is called less frequently and leaving the exceptional situations more to the indvidual card rules instead of implementing
			// a global game rule one card at a time
	    let primeFactionLookup = {
	            'federation': 'federation',
	                'vulcan': "federation",
	                'bajoran': "federation",
	                'klingon': 'klingon',
	                'romulan': 'romulan',
	                'dominion': 'dominion',
	                'independent': 'independent',
	                'ferengi': 'independent',
	                'kazon': 'independent',
	                'xindi': 'independent',
	                'borg' :'borg',
	                'mirror-universe': 'mirror-universe',
	                'species-8472': 'species-8472',
	                'q-continuum': 'q-continuum'
	            };

	    // get an array of the prime factions for the set of cardFactions as an array of strings
	    let getPrimeFactions = (cardFactions) => cardFactions.reduce(
	                (primeFactions, cardFaction) => {
	                    let primeFaction = primeFactionLookup[cardFaction];
	                    if (!primeFactions.includes(primeFaction))
	                        primeFactions.push(primeFaction);

	                    return primeFactions;
	              }, []);

	    // returns true when Card A's prime factions and Card B's prime factions intersect and therefore have the same 'prime faction' for card rules
	    let primeFactionMatch = (cardFaction, otherFaction) => {
	        return getPrimeFactions([cardFaction]).some(cardPrimeFaction => getPrimeFactions([otherFaction]).includes(cardPrimeFaction) );
	    }

	    var factions = {
	        hasFaction: function(card, faction, ship, fleet) {
	            if( !card )
	                return false;
	            let factions =  valueOf(card,"factions",ship,fleet) || [];
	            let primeFactions = getPrimeFactions(factions);

	            // true if it's the faction of the card OR any of the card's faction's 'prime faction'
	            let isConsideredInFaction = factions.includes(faction) || primeFactions.includes(faction);
	            return isConsideredInFaction;
	        },
			hasAnyFaction: function(card, factions, ship, fleet) {
				return factions.some(f => this.hasFaction(card, f, ship, fleet));
			},
	        match: function(card, other, ship, fleet) {
	            var match = false;
	            $.each( valueOf(card,"factions",ship,fleet), function(i, cardFaction) {
	                $.each( valueOf(other,"factions",ship,fleet), function(i, otherFaction) {
	                    //console.debug(`${card.id}:${card.name}:${cardFaction} -- ${other.id}:${other.name}:${otherFaction} ${card.name} prime factions match(${primeFactionMatch(cardFaction,  otherFaction)}): ${getPrimeFactions([cardFaction])}; ${other.id}:${other.name} prime factions: ${getPrimeFactions([otherFaction])}`);
	                    if( cardFaction == otherFaction || primeFactionMatch(cardFaction,  otherFaction) ) {
	                        match = true;
	                        return false;
	                    }
	                });
	                if( match )
	                    return false;
	            });
	            return match;
	        },
	        matchByPrimeFaction: function(card, other, ship, fleet) {
	            var match = false;
	            $.each( valueOf(card,"factions",ship,fleet), function(i, cardFaction) {
	                $.each( valueOf(other,"factions",ship,fleet), function(i, otherFaction) {
	                    if( primeFactionMatch(cardFaction,  otherFaction) ) {
	                        match = true;
	                        return false;
	                    }
	                });
	                if( match )
	                    return false;
	            });
	            return match;
	        },
	        list: [ "Federation", "Klingon", "Vulcan", "Romulan", "Bajoran", "Dominion", "Independent", "Borg", "Ferengi", "Species 8472", "Kazon", "Mirror Universe", "Xindi", "Q Continuum" ],
	    }
	    factions.listCodified = $.map( factions.list, function(name) {
	        return name.toLowerCase().replace(/ /g,"-");
	    } );
	    return factions;
}]);