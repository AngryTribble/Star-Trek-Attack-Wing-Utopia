module.exports = [
	{
		type: "starship_construction",
		id: "Con002",
		gameId: 1,
		set: [
			"75014"
		],
		name: "Ablative Generator",
		cost: 0,
		text: "This card can only be equipped to a <img src='img/text/unique.png' width='20' height='20' title='Unique'>/<img src='img/text/unique_mirror.png' width='20' height='20' title='Mirror Unique'> ship and the SP cost of this card is equal to this ship's printed Hull Value +2. <hr> <b>COMBAT PHASE:</b> Disbale your remaining Shields an remove any [cloak] Token from beside your ship. \n\n This ship cannot attack with its Primary Weapon and may reduce damage dealt to it by up to 5 this game round. For each point of damage reduced this way, you must palce a [crit] Token on this card (Max 5). Discard this card once it has 5 [crit] Tokens on it.",
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
		cost: 1,
		text: "This card can only be equipped to a <img src='img/text/unique.png' width='18' height='18' title='Unique'> ship whose name (ignoring registry number) listed after 'U.S.S.' is the same as the ship class. \n<hr> Add 1 [tech_text], 1 [weapon_text], or [crew_text] to this ship's Upgrade Bar. \n\n <b>WHEN DEFENDING: MODIFY DEFENSE DICE STEP: \n\n </b> You may re-roll 1 [blank] or [battlestations].",
		OnePerShip: true,
		factions: [
			"federation"
		]
	}
];
