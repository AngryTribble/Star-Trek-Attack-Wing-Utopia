module.exports = [
	{
		type: "starship_construction",
		id: "Con004",
		gameId: 1,
		set: [
			"75016"
		],
		name: "Dominion War Retrofit",
		image: "https://i.imgur.com/tAMM7Dh.png",
		cost: 3,
		text: "Add 1 [tech_text], [weapon_text], or [crew_text] to this ship's Upgrade Bar and increase this ship's Shield Value by 1. <hr> If equipped to 1 of the following non-<img src='img/text/faction-borg.png' width='20' height='20' title='Borg'> ships gain the listed effect: \n\n * <img src='img/text/kli-kvort.png' width='20' height='20' title='K`Vort Class'> or <img src='img/text/kli-vorcha.png' width='20' height='20' title='Vor`Cha Class'> - Add the [battlestations] Action to this ship's Action Bar. \n\n * <img src='img/text/rom-dderidex.png' width='20' height='20' title='D`Deridex Class'> - Replace this ship's Primary Weapon Value with its Printed Primary Weapon Value +1. \n\n * <img src='img/text/fed-miranda.png' width='20' height='20' title='Miranda Class'>, <img src='img/text/fed-excelsior.png' width='20' height='20' title='Excelsior Class'>, or <img src='img/text/fed-galaxy.png' width='20' height='20' title='Galaxy Class'> - Increase this ship's Hull Value by 1.",
		OnePerShip: true,
		shipFederation: true,
		shipRomulan: true,
		shipKlingon: true,
		factions: [
			"federation",
			"romulan",
			"klingon"
		]
	},
	{
		type: "starship_construction",
		id: "Con003",
		gameId: 1,
		set: [
			"75016"
		],
		name: "Enhanced Hull Plating",
		image: "https://i.imgur.com/LRqSu5V.png",
		cost: 3,
		text: "<b>WHEN DEFENDING: MODIFY DEFENSE DICE STEP:</b> If this ship has no Active Shields and is not Cloaked. \n\n You may add up to 2 [evade]. If you do so, place 1 <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship for each [evade] added.",
		OnePerShip: true,
		nxLimit: true,
		factions: [
			"federation"
		]
	},
	{
		type: "starship_construction",
		id: "Con002",
		gameId: 1,
		set: [
			"75014"
		],
		name: "Ablative Generator",
		image: "https://i.imgur.com/D5PZFZO.png",
		cost: "*",
		text: "This card can only be equipped to a <img src='img/text/unique.png' width='20' height='20' title='Unique'>/<img src='img/text/unique_mirror.png' width='20' height='20' title='Mirror Unique'> ship and the SP cost of this card is equal to this ship's printed Hull Value +2. <hr> <b>COMBAT PHASE:</b> Disbale your remaining Shields an remove any [cloak] Token from beside your ship. \n\n This ship cannot attack with its Primary Weapon and may reduce damage dealt to it by up to 5 this game round. For each point of damage reduced this way, you must place a [crit] Token on this card (Max 5). Discard this card once it has 5 [crit] Tokens on it.",
		OnePerShip: true,
		hullConstraint: "4+",
		shieldConstraint: "3+",
		factions: [
			"federation"
		]
	},

	{
		type: "starship_construction",
		id: "Con001",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Federation Prototype",
		image: "https://i.imgur.com/uzgViLt.png",
		cost: 1,
		text: "This card can only be equipped to a <img src='img/text/unique.png' width='18' height='18' title='Unique'> ship whose name (ignoring registry number) listed after 'U.S.S.' is the same as the ship class. \n<hr> Add 1 [tech_text], 1 [weapon_text], or [crew_text] to this ship's Upgrade Bar. \n\n <b>WHEN DEFENDING: MODIFY DEFENSE DICE STEP: \n\n </b> You may re-roll 1 [blank] or [battlestations].",
		OnePerShip: true,
		factions: [
			"federation"
		]
	}
];
