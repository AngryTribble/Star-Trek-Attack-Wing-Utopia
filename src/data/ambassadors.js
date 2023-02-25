module.exports = [
	{
		type: "ambassador",
		id: "M008",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Kimara Cretak",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED:</b> \n This ship and the target ship gain the following <b>'FREE ACTION:</b> If this ship is within Range 1 of an Obstacle. Repair either 1 Hull or Shield on this Ship.' \n----------------------------------------\n <b>NEGOTIATIONS DENIED:</b> All <img src='img/text/faction-romulan.png' width='20' height='20'> ships (Friendly and opposing) gain the following for the rest of the game <b>'END PHASE:</b> If within Range 1 of an Obstacle: Remove 1 [time] Token from each [weapon_text] Upgrade equipped to this ship.'",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "ambassador",
		id: "M007",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Vreenak",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED:</b> Discard an Upgrade of the opponent's choice equipped to this ship, and an Upgrade of your choice equipped to the target ship. \n----------------------------------------\n <b>NEGOTIATIONS DENIED:</b> All <img src='img/text/faction-romulan.png' width='20' height='20'> ships (Friendly and opposing) gain +1 attack die <b>WHEN ATTACKING</b> with <img src='img/text/faction-romulan.png' width='20' height='20'> [weapon_text] Upgradess and their Primary Weapon for the rest of the game.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "ambassador",
		id: "M001",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Soval",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED</b>: For the rest of the game, if this ship moves within Range 1 of the target ship or the target ship moves within Range 1 of this ship, Place an [aux] Tokan beside the ship that moved.\n\n<b>NEGOTIATIONS DENIED</b>: Make an attack against the target ship with 3 attack dice that cannot be modified or re-rolled.",
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "ambassador",
		id: "M002",
		gameId: 1,
		set: [
			"75008"
		],
		name: "V'Lar",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED</b>: Disable an Upgrade of the opponent's choice equipped to this ship with a printed SP cost of 3 or less and an Upgrade of your choice equipped to the target ship with a printed SP cost of 3 or less.  Both ships must have an Upgrade with a printed SP cost of 3 or less for negotiations to be accepted.\n<b>NEGOTIATIONS DENIED</b>: Discard a [crew_text] Upgrade equipped to the target ship.",
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "ambassador",
		id: "M003",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Lwaxana Troi",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED</b>: At the start of the game target a Captain or [crew_text] Upgrade equipped to the target ship. Whenever this ship moves within Range 1 of target ship, disable the Captain equipped to this ship and the target Captain or [crew_text] Upgrade.\n----------------------------------------\n<b>NEGOTIATIONS DENIED</b>: Place 3 [time] Tokens and a Disable Token on the target Captain or [crew_text] Upgrade.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "ambassador",
		id: "M004",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Sarek",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED</b>: When this ship and the target ship are within Range 1-3 of each other, neither ship may target the other with an attack unless there are no other targets.\n----------------------------------------\n<b>NEGOTIATIONS DENIED</b>: Place 3 [time] Tokens on all [weapon_text] Upgrades equipped to the target ship.",
		unique: true,
		factions: [
			"federation",
			"vulcan"
		]
	},
	{
		type: "ambassador",
		id: "M005",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Korrd",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED</b>: The target ship must plan its maneuver face up during the Planning Phase.  When the target ship sustains damage to its Shields or Hull, this effect ends.\n<b>NEGOTIATIONS DENIED</b>: You may plan the target ship's maneuver during the next Planning Phase. The chosen maneuver must be on the target ship's maneuver dial and be a green or white maneuver.  The chosen maneuver may not cause the target ship to go outside of the play area.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "ambassador",
		id: "M006",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Kamarag",
		cost: 3,
		text: "<b>NEGOTIATIONS ACCEPTED</b>: \nDuring the Combat Phase, this ship and the target ship must attack each other, if able. \n\n<b>NEGOTIATIONS DENIED</b>: \nThe next time the target ship attacks, it rolls -3 attack dice.",
		unique: true,
		factions: [
			"klingon"
		]
	}
];
