module.exports = [
	{
		type: "question",
		id: "Q023",
		gameId: 1,
		set: [
			"75013"
		],
		name: "EMH Mark I",
		cost: 3,
		text: "This card counts as a [crew_text] Upgrade or a [tech_text] Upgrade. \n<hr> <b>ACTION:</b> Disable this card. \n\n Remove all [time] Tokens from each [crew_text] Upgrade equipped to this ship.",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T280",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Multi-Spectrum Shielding",
		cost: 3,
		text: "Increase this ship's Shield Value by 1. \n<hr> As long as this ship has Active Shields, opposing [tech_text] Upgrades cannot target this ship.",
		OnePerShip: true,
		costFederation: "+1",
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T279",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Multiphasic Shielding",
		cost: 3,
		text: "Increase this ship's Shield Value by 1. \n<hr> As long as this ship has Active Shields, [crew_text] Upgrades and the Captain equipped to this ship cannot be affected by opposing Upgrades.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T278",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Regenerative Shields",
		cost: 4,
		text: "Increase this ship's Shield Value by 1. \n<hr> <b>END PHASE</b>: \n\n Repair 1 Shield on this ship. If there are no [aux] Tokens beside this ship, you may repair 2 Shields on this ship instead.",
		OnePerShip: true,
		prometheusLimit: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T277",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Ablative Hull Armor",
		cost: 6,
		text: "<b>WHEN DEFENDING: MODIFY ATTACK DICE STEP:</b> \n\n Convert all [crit] to [hit] . \n<hr> <b>WHEN DEFENDING: DEAL DAMAGE STEP:</b> \n\n Place damage cards this ship would receive under this card (Max 3) instead of beside this ship.",
		OnePerShip: true,
		prometheusLimit: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W227",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Multi-Vector Assault Mode",
		cost: 6,
		text: "<b>ATTACK (BATTLESTATIONS):</b> Disable this card and target an opposing ship. \n<hr> <b>AFTER ATTACKING:</b> Place 2 <img src='img/text/mission-token.png' width='18' height='18';'> Tokens within range. You may make an additional attack with this weapon from each <img src='img/text/mission-token.png' width='18' height='18';'> Token placed by this card in any direction. Remove all <img src='img/text/mission-token.png' width='18' height='18';'> Tokens placed by this card from play after attacking.",
		attack: "4",
		range: "1",
		OnePerShip: true,
		prometheusLimit: true,
		FrontArc: true,
		RearArc: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W226",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Quantum Torpedoes",
		cost: 3,
		text: "The Attack Value of this [weapon_text] is this ship's Primary Weapon Value +1. \n<hr> <b>ATTACK:</b> Spend this ship's [target-lock] Token, disable this card, and target an opposing ship. \n\n <b>DECLARE TARGET STEP:</b> Place an [aux] Token beside the defending ship. \n\n <b>ROLL ATTACK DICE STEP:</b> For each [crit] rolled. Add 1 [hit] . \n<hr> This Upgrade costs +2 SP if not equipped to a <img src='img/text/fed-sovereign.png' width='18' height='18'>, <img src='img/text/fed-defiant.png' width='18' height='18'>, <img src='img/text/fed-luna.png' width='18' height='18'>, or <img src='img/text/fed-akira.png' width='18' height='18'> ship.",
		attack: "*",
		range: "2 - 3",
		OnePerShip: true,
		FrontArc: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W225",
		gameId: 1,
		set: [
			"75013",
			"75011"
		],
		name: "Dorsal Torpedo Pod",
		cost: 3,
		text: "<b>WHEN ATTACKING WITH A <img src='/img/text/faction-federation.png' width='20' height='20'> TORPEDOES UPGRADE:</b> \n\n You may target an opposing ship with that Torpedoes Upgrade ignoring any Firing Arcs.",
		OnePerShip: true,
		akiraLimit: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W224",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Photon Torpedoes",
		cost: 2,
		text: "The Attack Value of this [weapon_text] is this ship's Primary Weapon Value +1. \n<hr> <b>ATTACK:</b> Spend this ship's [target-lock] Token, place 2 [time] Tokens on this card, and target an opposing ship. \n This ship may convert all [blank] into [battlestations] .",
		attack: "*",
		FrontArc: true,
		RearArc: true,
		range: "2 - 3",
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W223",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Dorsal Phaser Array",
		cost: 0,
		text: "The Attack Value of this [weapon_text] is equal to this ship's Primary Weapon Value and the cost of this [weapon_text] is equal to this ship's Primary Weapon Value +1. \n<hr> <b>ATTACK:</b> You may fire this weapon in any direction.",
		shipFederation: true,
		OnePerShip: true,
		range: "1 - 2",
		hullConstraint: "4+",
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W222",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Type 10 Phasers",
		cost: 3,
		text: "This card fills 2 [weapon_text] Upgrade slots. \n<hr> <b>WHEN ATTACKING WITH YOUR PRIMARY WEAPON:</b> \n\n Roll +1 attack die and re-roll up to 2 [blank] . If the defending ship has no Active Shields, you may convert up to 2 [blank] into [battlestations] instead.",
		OnePerShip: true,
		shipFederation: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W999",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Type 10 Phasers (2nd Slot)",
		cost: 0,
		text: "<b>(NOT A PHSICAL CARD, USED INTERNALLY ON UTOPIA ONLY)</b> \n\n This card is to represent the 2nd weapon slot being used to equip the Type 10 Phaser Array upgrade.",
		OnePerShip: true,
		shipFederation: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E215",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Shakedown Cruise Commander",
		cost: 4,
		text: "<b>WHEN YOU WOULD REVEAL A SPEED 4 OR HIGHER MANEUVER:</b> Place 3 [time] Tokens on this card. If this ship has a [hook] equipped, place only 2 [time] Tokens instead. \n\n Perform either a 4 [bank-left] or a 4 [bank-right] Maneuver instead and rotate this ship 90°.",
		OnePerShip: true,
		captainFederation: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E214",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Task Force Commander",
		cost: 4,
		text: "<b>SETUP:</b> Choose Faction. \n<hr> <b>ACTION:</b> Target up to 2 friendly ships within range: \n\n This ship and the target ships gain +1 attack and defense die against ships of the chosen faction this game round. If the target ships are <img src='img/text/faction-federation.png' width='20' height='20'>, this ship and the target ships may perform the [target-lock] Action as a Free Action.",
		unique: true,
		captainFederation: true,
		shipFederation: true,
		range: "1 - 2",
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E213",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Fleet Coordination",
		cost: 3,
		text: "Treat friendly <img src='img/text/faction-federation.png' width='20' height='20'> ships at Range as though they were at Range 2 for the effects of cards equipped to this ship.",
		unique: true,
		captainFederation: true,
		shipFederation: true,
		range: "3",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C390",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Geordi La Forge",
		cost: 2,
		text: "<b>REVEAL DIAL STEP:</b> When this ship reveals a [straight] Maneuver: Place 2 [time] Tokens on this card and choose 1 of the listed effects. \n\n *Treat the revealed Maneuver as a Green Maneuver. \n\n *Increase the speed of the revealed Maneuver by 1. The color of the Maneuver remains the same as the revealed Maneuver. \n\n If this ship has the 'Federation Prototype' [hook] equipped, you may choose both effects.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C389",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Lasca",
		cost: 1,
		text: "<b>ACTIVATION PHASE:</b> Place 2 [time] Tokens on this card and target this ship or a friendly <img src='img/text/faction-federation.png' width='20' height='20'> ship within range. \n\n Flip 1 face-up damage card on the target ship facedown. If the target ship has the 'Federation Prototype' [hook] equipped, repair 1 Hull on the target ship.",
		unique: true,
		shipFederation: true,
		range: "1",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C388",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Montgomery Scott",
		cost: 3,
		text: "<b>WHENEVER YOU WOULD PLACE AN [aux] TOKEN BESIDE THIS SHIP:</b> \n\n Place that Token on this card (max 2). \n<hr> <b>ACTION:</b> Place 2 [time] Tokens on this card and target a ship with a [hook] equipped within range. \n\n If that ship is this ship or a friendly ship, it performs a 2 [straight] . If that ship is an opposing ship, Place any [aux] Tokens from on this card beside the target ship.",
		unique: true,
		range: "1 - 2",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C387",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Harry Kim",
		cost: 2,
		text: "<b>END PHASE:</b> Spend a [scan] Token beside this ship. \n\n Remove an [aux] Token beside this ship. If this ship has a the 'Federation Prototype' [hook] equipped, repair 1 Hull on this ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C386",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Benjamin Sisko",
		cost: 3,
		text: "<b>COMBAT PHASE:</b> Place an [aux] Token beside this ship. \n\n Remove either 2 [time] Tokens or a Disabled Token from a <img src='img/text/faction-federation.png' width='20' height='20'> [weapon_text] Upgrade equipped to this ship. If this ship has the 'Federation Prototype' [hook] equipped place a [battlestations] Token beside this ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q022",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Romulan Ale",
		cost: 1,
		text: "This upgrade can be equipped to a ship without requiring an Upgrade Slot\n <b>PLANNING PHASE: </b>\n You may exchange all disabled Tokens from the Captain and [crew_text] Upgrades equipped to this ship, with 2 [time] Tokens on those cards instead.\n <b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card. \n <b>CONTINUOUS EFFECT:</b> This ship and each opposing ship attacking this ship must convert 1 [hit] into 1 [blank]",
		OnePerShip: true,
		costRomulan: "+3",
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T276",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Romulan Cloaking Device",
		cost: 2,
		text: "Add the [cloak] Action to this ship's Action Bar. \n----------------------------------------\n This ship may use either the 1 [bank-left], 1 [bank-right], 2 [bank-left], or 2 [bank-right] template when performing a [sensor-echo] Action instead. \n----------------------------------------\n If equipped to a <img src='img/text/faction-romulan.png' width='20' height='20'> ship, this ship may perform the [sensor-echo] Action as a Free Action.",
		OnePerShip: true,
		costRomulan: "+2",
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T275",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Advanced Cloaking",
		cost: 4,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked and does not have an [aux] Token beside it, place an [aux] Token beside this ship. \n\n This ship's [cloak] Token does not flip to its red side this attack.",
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T274",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Improved Cloaking",
		cost: 3,
		text: "<b>WHENEVER THIS SHIP WOULD PERFORM THE [cloak] ACTION:</b> \n\n You only have to disable 1 of your Active Shields to [cloak].",
		OnePerShip: true,
		remanLimit: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W221",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Flanking Attack",
		cost: 3,
		text: "The Attack Value of this [weapon_text] is this ship's Primary Attack Value. \n----------------------------------------\n <b>ATTACK:</b> Place 3 [time] Tokens on this card and target an opposing ship. \n If this is equipped to a <img src='img/text/rom-valdore.png' width='18' height='18'>, this ship rolls +2 Attack dice. If this ship is not in the <img src='img/text/forward-arc.png' width='18' height='18'> of the defending ship, the defending ship also rolls -2 defense dice.",
		range: "2 - 3",
		attack: "*",
		FrontArc: true,
		shipRomulan: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W220",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Disruptor Pulse",
		cost: 3,
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card to perform this attack. \n <b>DECLARE TARGET STEP:</b> Target each opposing ship in your <img src='img/text/forward-arc.png' width='18' height='18'> and in range. \n Perform a separate attack against each target with this attack.",
		range: "1 - 2",
		costRomulan: "+3",
		attack: "3",
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W219",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Aft Disruptor Emitters",
		cost: 2,
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship not in your <img src='img/text/forward-arc.png' width='18' height='18'>.",
		range: "1 - 3",
		OnePerShip: true,
		costRomulan: "+2",
		attack: "3",
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W218",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Thalaron Weapon",
		cost: 5,
		text: "<b>ATTACK:</b> Discard this card and target an opposing ship. \n\n Your opponent must discard either their Captain, Admiral, [ambassador_text], or a [crew_text] Upgrade equipped to the defending ship. If you hit, cancel 1 [crit] to discard either the defending ship's Captain, Admiral, [ambassador_text], or [crew_text] Upgrade equipped to the defending ship.",
		range: "1 - 3",
		unique: true,
		FrontArc: true,
		remanLimit: true,
		attack: "6",
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E212",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Fire Everything!",
		cost: 4,
		text: "<b> WHENEVER ATTACKING:</b> If you dealt no damage or your attack was cancelled: Disable this card. \n\n You may perform an additional attack with a <img src='img/text/faction-romulan.png' width='20' height='20'> [weapon_text] Upgrade equipped to this ship against the same target.",
		unique: true,
		captainRomulan: true,
		shipRomulan: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E211",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Outflank",
		cost: 2,
		text: "<b> WHENEVER YOU WOULD PERFORM A [sensor-echo] ACTION:</b> If this ship is Cloaked: Discard this card. \n\n Place a [battlestations] and [evade] Token beside your ship. ",
		OnePerShip: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E210",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Covert Research",
		cost: 3,
		text: "Add the [scan] Action to this ship's Action Bar. \n----------------------------------------\n <b> END PHASE:</b> \n Place 1 [scan] Token from beside this ship onto this card (max 3). \n----------------------------------------\n <b> ACTION:</b> Remove any number of [scan] Tokens on this card. \n Gain +1 attack dice for each [scan] Token removed this game round.",
		unique: true,
		captainRomulan: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C385",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Nevala",
		cost: 3,
		text: "Increase the Captain Skill of the Captain equipped to this ship by 1 (By 3 for a <img src='img/text/faction-romulan.png' width='20' height='20'> Captain instead). \n---------------------------------------\n <b>WHEN DEFENDING:</b> Spend an [evade] Token beside this ship. \n\n Place a [battlestations] Token beside this ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C384",
		gameId: 1,
		set: [
			"75012"
		],
		name: "T'Rul",
		cost: 2,
		text: "You may equip the 'Romulan Cloaking Device' Upgrade to this ship for 0 SP even if it exceeds its restrictions. \n---------------------------------------\n <b>WHENEVER YOU WOULD PERFORM THE [cloak] ACTION:</b> \n\n Place an [evade] Token beside this ship. If equipped to a <img src='img/text/fed-defiant.png' width='18' height='18'>, you may place a [battlestations] Token instead.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C383",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Reman Helmsman",
		cost: 2,
		text: "<b>REVEAL DIAL STEP:</b> Disable this card. \n\n Disregard your revealed Maneuver and perform a 1 red [reverse] Maneuver instead. If equipped to a <img src='img/text/rom-dderidex.png' width='18' height='18'> ship, treat this as a white Maneuver instead.",
		OnePerShip: true,
		costRomulan: "+2",
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C382",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Viceroy",
		cost: 3,
		text: "<b>PLANNING PHASE:</b> If your ship is Cloaked: Target an opposing ship within Range. \n\n Place 2 [time] Tokens on a [crew_text] Upgrade equipped to the target ship. If equipped to a <img src='img/text/rom-reman.png' width='18' height='18'>, you may perform a [sensor-echo] Action as a Free Action.",
		range: "1 - 2",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C381",
		gameId: 1,
		set: [
			"75012"
		],
		name: "B-4",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card and target an opposing ship within Range. \n\n The target ship either executes a 1 [bank-left], 1 [bank-right], or 1 [straight] Maneuver of the opponent's choice. If the target ship is also a <img src='img/text/faction-federation.png' width='20' height='20'> ship, it rolls -1 attack die this game round. If the target ship also has 'Enterprise' in its name, place 2 [time] Tokens on the Captain equipped to that ship.",
		range: "2 - 3",
		unique: true,
		factions: [
			"romulan",
			"independent"
		]
	},
	{
		type: "crew",
		id: "C380",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Varak",
		cost: 3,
		text: "Add 1 [crew_text] upgrade to this Ship's Upgrade Bar. \n----------------------------------------\n <b>ACTION:</b> Place 2 [time] Tokens on this card and target this ship or a friendly ship within Range. \n\n <b>CONTINUOUS EFFECT:</b> \n The Captain and other [crew_text] Upgrades equipped to the target ship cannot be affected by opposing cards. ",
		range: "1 - 2",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W217",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Waylay",
		cost: 2,
		text: "The Attack Value of this [weapon_text] is this ship's Primary Weapon Value.\n<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship\nIf this card is equipped to a B'rel Class ship, place an [aux] Token beside the defending ship.\nAfter making this attack, this ship may perform a 1 white [bank-left] or 1 white [bank-right] and place an [evade] Token beside this ship.",
		range: "1 - 2",
		frontarc: true,
		hullConstraint: "3-",
		attack: "*",
		factions: [
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W216",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Concussive Charges",
		cost: 2,
		text: "The Attack Value of this [weapon_text] is the ship's Primary Weapon Value.\n<b>ATTACK:</b> Spend this ship's [cloak] Token, raise its Shields, place 2 [time] Tokens on this card, and target an opposing ship.\nIf this card is equipped to a K't'inga Class Ship, it rolls +1 attack die. For each uncancelled [hit] or [crit], remove up to 1 Token of your choice beside the defending ship.",
		oneperShip: true,
		range: "1 - 2",
		shipklingon: true,
		frontarc: true,
		reararc: true,
		attack: "*",
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T273",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Science Station",
		cost: 4,
		text: "Add 1 [tech_text] to this ship's Upgrade Bar.\n<b>FREE ACTION:</b> If this ship is Cloaked, place 2 [time] Tokens on this card.\n\nPlace 1 [scan] Token beside this ship. If an opposing ship is within this ship's Primary Firing Arc, this ship may perform a [target-lock] Action targeting that opposing ship as a Free Action.",
		oneperShip: true,
		range: "1 - 3",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C379",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Klingon Gunner",
		cost: 2,
		text: "<b>WHEN ATTACKING:</b> During the Modify Attack Dice Step, discard this card.\n\nAdd 1 [hit].",
		oneperShip: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C378",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Mara",
		cost: 2,
		text: "Add the [scan] Action to this ship's Action Bar.\n----------------------------------------\n<b>WHEN THE CAPTAIN OF THIS SHIP WOULD BE DISABLED OR DISCARDED:</b>\n\nDiscard this card instead.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C377",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Kolana",
		cost: 2,
		text: "<b>WHEN ONE OR MORE [time] TOKENS WOULD BE PLACED ON A [weapon_text] UPGRADE EQUIPPED TO THIS SHIP:</b>\n\nPlace 1 fewer [time] Tokens. If this ship is Cloaked and it is a <img src='https://i.imgur.com/2lM4cv0.png' width='20' height='20'> [weapon_text] Upgrade, place 2 fewer [time] Tokens instead.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C376",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Ch'Targh",
		cost: 3,
		text: "<b>END PHASE:</b> Remove an [aux] Token beside this ship.\n\nFlip this ship's [cloak] Token to its Green side.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C375",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Yeto",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card and target an opposing ship that has no Active Shields.\n\nDisable 1 [crew_text] Upgrade on the target ship and/or steal 1 [crew_text] Upgrade from the target ship, ignoring this ship's restrictions.",
		unique: true,
		range: "1 - 2",
		factions: [
			"klingon",
			"independent"
		]
	},
	{
		type: "talent",
		id: "E209",
		gameId: 1,
		set: [
			"75010"
		],
		name: "A Death Worthy of Sto-Vo-Kor",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card and a [crew_text] Upgrade equipped to this ship and target an opposing ship.\n\nDiscard an Upgrade equipped to the target ship. If that Upgrade has a printed SP cost higher than the printed SP ost of the [crew_text] Upgrade you discarded, this ship rolls +1 attack die for all attacks this game round.",
		unique: true,
		captainKlingon: true,
		range: "1 - 2",
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E208",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Dahar Master",
		cost: 2,
		text: "Can only be equipped to a Captain name Kang, Koloth, or Kor.\n----------------------------------------\nIncrease the Captain Skill of this Captain by 1 for each copy of Dahar Master in your fleet, including this one.\n----------------------------------------\n<b>ACTIVIATION PHASE:</b> This ship may perform a [cloak] Action or [target-lock] Action as a Free Action. (Utopia Note: Code not working yet)",
		OnePerShip: true,
		shipKlingon: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T272",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Metaphasic Sweep",
		cost: 1,
		text: "<b>FREE ACTION:</b> Discard this card.\n\nPerform a [target-lock] Action as a Free Action, even if the target ship has a [cloak] Token beside it.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T271",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Ablative Armor",
		cost: 2,
		text: "<b>WHEN DEFENDING:</b> During the Roll Defense Dice Step:\n\nRoll +1 defense die.\n----------------------------------------\n<b>WHEN DEFENDING:</b> During the Modify Attack Dice Step:\nConvert all [crit] to [hit].",
		oneperShip: true,
		defiantLimit: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T270",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Advanced Shields",
		cost: 4,
		text: "Add 2 to this ship's Shield Value.\n----------------------------------------\n<b>ACTION:</b> Remove this card from play.\n\nRepair up to 3 Shields on this ship.",
		unique: true,
		shipFederation: true,
		hullConstraint: "5+",
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W215",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Experimental Torpedo Bay",
		text: "<b>START OF THE GAME:</b> Place a Torpedo [weapon_text] Upgrade with a printed SP cost of 5 or less face down beneath this card.\n----------------------------------------\n<b>COMBAT PHASE:</b> Discard this card.\n\nFlip the card beneath this card face up and equip it to this ship, ignoring restrictions.",
		cost: 2,
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W213",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Phaser Cannons",
		text: "<b>ATTACK:</b> Place 3 [time] Tokens on this card and target an opposing ship.\n----------------------------------------\n<b>AFTER ATTACKING WITH THIS [weapon_text] UPGRADE:</b> \nYou may make an attack with this ship's Primary Weapon.",
		cost: 3,
		OnePerShip: true,
		factions: [
			"federation"
		],
		attack: 4,
		range: "1 - 2",
		Frontarc: true,
		defiantLimit: true
	},
	{
		type: "crew",
		id: "C374",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Enrique Muniz",
		unique: true,
		text: "<b>WHEN ATTACKING OR DEFENDING:</b> Place 2 [time] Tokens on this card and target a friendly ship.\n\nThis ship may use one [battlestations], [evade], or [scan] Token beside the target ship as if it was beside this ship, this game round.",
		factions: [
			"federation"
		],
		cost: 2,
		range: "1 - 2"
	},
	{
		type: "crew",
		id: "C373",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Sarita Carson",
		unique: true,
		text: "<b>COMBAT PHASE:</b> Place 2 [time] Tokens on this card.\n\nPerform a 1 red [straight] or 2 red [straight].",
		factions: [
			"federation"
		],
		cost: 2
	},
	{
		type: "crew",
		id: "C372",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Ezri Dax",
		unique: true,
		text: "Add 1 [crew_text] to this ship's Upgrade Bar.\n----------------------------------------\n<b>WHENEVER ONE OR MORE [time] TOKENS WOULD BE PLACED ON THIS SHIP'S CAPTAIN OR A [crew_text] UPGRADE EQUIPPED TO THIS SHIP:</b>\n\nPlace 1 fewer [time] Tokens on that card.",
		factions: [
			"federation"
		],
		cost: 2
	},
	{
		type: "crew",
		id: "C371",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Julian Bashir",
		unique: true,
		text: "<b>ACTIVIATION PHASE:</b> Target a [crew_text] Upgrade equipped to this ship or another ship:\n\nRemove 2 [time] Tokens or a disable Token from the target [crew_text] Upgrade.  If the targeted [crew_text] is on an opposing ship, that ship rolls -1 attack die this game round.",
		factions: [
			"federation"
		],
		cost: 2,
		range: "1"
	},
	{
		type: "crew",
		id: "C370",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Kira Nerys",
		unique: true,
		text: "<b>FREE ACTION:</b> Place 3 [time] Tokens on this card and target an opposing ship.\n\nDisable a [tech_text] Upgrade equipped to the target ship, then roll 1 attack die. On a [hit] or [crit], discard 1 [crew_text] Upgrade equipped to the target ship.",
		factions: [
			"federation"
		],
		cost: 3,
		range: "1"
	},
	{
		type: "tech",
		id: "T259",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Subspace Field",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card.\n\nRemove all [aux] Tokens beside all ships.",
		range: " 1 ",
		alliance: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T258",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Improved Hull Plating",
		cost: 2,
		text: "<b>WHEN DEFENDING:</b> During the Modify Attack Dice Step:\n\nConvert 1 [crit] into 1 [hit].",
		alliance: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T257",
		gameId: 1,
		set: [
			"80001"
		],
		name: "EMH",
		cost: 4,
		text: "<b>PLANNING PHASE:</b> Place 2 [time] Tokens on this card.\n\nRemove 1 Disabled Token on a [crew_text] Upgrade equipped to this ship.",
		alliance: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T256",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Impulse Efficiency",
		cost: 2,
		text: "<b>EXECUTE MANEUVER STEP:</b> If this ship performs a white maneuver, place 2 [time] Tokens on this card.\n\nRemove 1 [aux] Token beside this ship.",
		alliance: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W207",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Enhanced Targeting",
		text: "<b>WHEN ATTACKING:</b>\n\nThis ship may re-roll 1 attack die.",
		cost: 4,
		OnePerShip: true,
		factions: [
			"federation"
		],
		alliance: true
	},
	{
		type: "weapon",
		id: "W205",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Overcharged Phasers",
		text: "<b>WHEN ATTACKING WITH THIS SHIP'S PRIMARY WEAPON:</b>\n\nRoll +1 Attack die.",
		cost: 3,
		range: " 2 ",
		OnePerShip: true,
		factions: [
			"federation"
		],
		alliance: true
	},
	{
		type: "weapon",
		id: "W204",
		gameId: 1,
		set: [
			"80001",
			"2017core",
			"75011"
		],
		name: "Photon Torpedoes",
		text: "The Attack Value of this [weapon_text] is this ship's Primary Weapon Value +1.\n---------------------------------\n<b>ATTACK:</b> Spend this ship's  [target-lock] Token, disable this card and target an opposing ship.\n\nThis ship may convert all [blank]  into [battlestations].",
		FrontArc: true,
		RearArc: true,
		cost: 2,
		range: "2 - 3",
		factions: [
			"federation"
		],
		alliance: true
	},
	{
		type: "crew",
		id: "C362",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Commander",
		OnePerShip: true,
		text: "<b>ACTION:</b>\n\nPlace 1 [battlestations] Token and 1 [evade] Token beside this ship.",
		factions: [
			"federation"
		],
		cost: 5,
		alliance: true
	},
	{
		type: "crew",
		id: "C361",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Helmsman",
		OnePerShip: true,
		text: "<b>ACTIVATION PHASE:</b> When this ship's maneuver is revealed, disable this card.\n\nIncrease or decrease the maneuver's speed by 1, even if this results in a maneuver that does not appear on this ship's Maneuver Dial.",
		factions: [
			"federation"
		],
		cost: 3,
		alliance: true
	},
	{
		type: "crew",
		id: "C360",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Tactical Officer",
		OnePerShip: true,
		text: "<b>WHEN ATTACKING:</b> Disable this card.\n\nRe-roll any number of attack dice.",
		factions: [
			"federation"
		],
		cost: 4,
		alliance: true
	},
	{
		type: "crew",
		id: "C359",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Operations Officer",
		OnePerShip: true,
		text: "<b>END PHASE:</b> Spend an [evade] Token beside this ship.\n\nRepair 1 Shield on this ship.",
		factions: [
			"federation"
		],
		cost: 2,
		alliance: true
	},
	{
		type: "talent",
		id: "E203",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Wing Leader",
		cost: 3,
		text: "<b>WHEN A FRIENDLY SHIP WITHIN RANGE IS ATTACKING OR DEFENDING:</b>\n\nThat ship may re-roll 1 [battlestations].",
		alliance: true,
		range: " 1 ",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E202",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Battle-Hardened",
		cost: 4,
		text: "<b>WHEN THIS SHIP SPENDS A [battlestations] TOKEN:</b> Place 1 [time] Token on this card.\n\nPlace a [battlestations] Token beside this ship.",
		alliance: true,
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E201",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Evasive Pattern Delta",
		cost: 3,
		text: "<b>COMBAT PHASE:</b> Spend an [evade] Token beside this ship and discard this card.\n\nPerform a maneuver with a speed of 2 on this ship's maneuver dial.",
		alliance: true,
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E200",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Calculating",
		cost: 1,
		text: "<b>ACTIVATION PHASE:</b> Discard this card.\n\nThis game round, the Captain Skill of the Captain equipped to this ship is 10.",
		alliance: true,
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W203",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Dorsal Phaser Array",
		OnePerShip: true,
		text: "<b>ATTACK:</b> Target an opposing ship.\n\nThis ship may fire this [weapon_text] in any direction.",
		factions: [
			"federation"
		],
		cost: 3,
		attack: 3,
		range: "1 - 2",
		alliance: true
	},
	{
		type: "weapon",
		id: "W202",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Quantum Torpedoes",
		unique: false,
		text: "<b>ATTACK:</b> Spend this ship's     [target-lock] Token, disable this card, and target an opposing ship.  \n\nIf the defending ship is hit, add 1 [hit].",
		factions: [
			"federation"
		],
		cost: 6,
		skill: 0,
		RearArc: true,
		FrontArc: true,
		attack: 5,
		range: "2 - 3",
		alliance: true
	},
	{
		type: "crew",
		id: "C358",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Science Officer",
		OnePerShip: true,
		text: "<b>ACTION:</b>\n\nPlace 2 [scan] Tokens beside this ship.",
		factions: [
			"federation"
		],
		cost: 3,
		alliance: true
	},
	{
		type: "tech",
		id: "T255",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Detection Grid",
		cost: 3,
		text: "<b>COMBAT PHASE:</b> If there is a [scan] Token beside this ship:\n\nOpposing ships that are both in range and in this ship's primary firing arc roll 1 fewer defense dice when defending against another friendly ship.",
		alliance: true,
		range: "1 - 3",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E199",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Inspiring",
		cost: 2,
		text: "<b>PLANNING PHASE:</b> Target a friendly ship.\n\nRemove 1 [aux] token beside the target ship.",
		alliance: true,
		range: "1",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T254",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Impulse Upgrade",
		cost: 1,
		text: "Treat this ship's 2 [bank-left], 2 [straight], and 2 [bank-right] maneuvers as green.",
		alliance: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T253",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Reinforced Shielding",
		cost: 3,
		text: "Add +2 to this ship's Shield Value.",
		alliance: true,
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W201",
		gameId: 1,
		set: [
			"80001"
		],
		name: "Full Spread",
		cost: 5,
		text: "<b>AFTER ATTACKING WITH A TORPEDO UPGRADE:</b> Discard this card and the Torpedo Upgrade used.\n\nMake another attack with the same Torpedo Upgrade against a different target (even if the Torpedo is disabled, has a time token, or you no longer have a   [target-lock] Token to spend).",
		OnePerShip: true,
		alliance: true,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q018",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Kanar",
		cost: 1,
		text: "This upgrade can be equipped to a ship without requiring an Upgrade Slot\n-----------------------------------\n<b>PLANNING PHASE: </b>Place 2 [time] Tokens on the Captain equipped to this ship.\nPlan this ships Maneuver with the dial face up this game round. This ship does its Perfrom Action Step before its Revial Dial Step this game round.",
		shipDominion: true,
		OnePerShip: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C363",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Gul Broca",
		text: "<b>COMBAT PHASE:</b> Discard this card, target this ship, and target all friendly <img src='https://i.imgur.com/QKqthve.png' width='20' height='20'> ships.\n\nAll target ships roll +1 attack die this game round.",
		cost: 2,
		shipDominion: true,
		unique: true,
		range: "1 - 2",
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C365",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Tora Ziyal",
		text: "<b>WHEN DEFENDING:</b> During the Compare Results Step, target the attacking ship and remove this card from the game.\nCancel the attack. This ship may make an attack against the attacking ship with its Primary Weapon with -1 attack die, if possible.",
		cost: 5,
		unique: true,
		range: "1",
		factions: [
			"dominion",
			"bajoran"
		]
	},
	{
		type: "crew",
		id: "C366",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Korinas",
		text: "<b>ACTION:</b> Disable this card, place an [aux] Token beside this ship, and target a Minefield Token.\n\nRemove the target Minefield Token from the play area.",
		cost: 3,
		unique: true,
		range: "2 - 3",
		factions: [
			"dominion"
		]
	},
	{
		type: "talent",
		id: "E204",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Obsidian Order",
		text: "<b>EACH TIME AN OPPOSING SHIP WITHIN RANGE SPENDS A [battlestations], [evade], OR [scan] TOKEN:</b> Place a token of the same type beside this ship.",
		cost: 5,
		oneperShip: true,
		shipDominion: true,
		range: "1 - 3",
		factions: [
			"dominion"
		]
	},
	{
		type: "talent",
		id: "E205",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Supreme Tribunal",
		text: "<b>END PHASE:</b> Place 4 [time] Tokens on this card and target an opposing ship.\n\nPlace an [aux] Token beside the target ship.",
		cost: 1,
		unique: true,
		range: "1 - 2",
		factions: [
			"dominion"
		]
	},
	{
		type: "talent",
		id: "E206",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Interrogation",
		text: "<b>PLANNING PHASE:</b> Discard this card and target a [crew_text] Upgrade equipped to an oppsoing ship.\n\nPlace 3 [time] Tokens on the target [crew_text] Upgrade.",
		cost: 2,
		unique: true,
		range: "1",
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W208",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Multiple Dorsal Arrays",
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship.\n\nOnce per game round, if you hit an Attack Squadran with this [weapon_text], you may perform an additional attack against the same target. (<i>Galor Class Only</i>)",
		cost: 3,
		oneperShip: true,
		attack: "3",
		range: "1 - 3",
		shipLimit: true,
		arc360: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W209",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Enhanced Resonance Field Grid",
		text: "<b>WHEN ATTACKING WITH THIS SHIP'S PRIMARY WEAPON:</b> During the Deal Damage Step, discard this card, and select 1 uncancelled [hit].\n\nDeal the selected [hit] to the defending ship's Hull.",
		cost: 2,
		oneperShip: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W210",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Phase Disruptor Array",
		text: "<b>WHEN ATTACKING WITH THIS SHIP'S PRIMARY WEAPON:</b> During the Modify Attack Dice Step, if the defending ship is within Range, place 3 [time] Tokens on this card and spend this ship's [target-lock] Token.\nRe-roll any number of attack dice up to two times. (<i>Galor or Keldon Class Only</i>).",
		cost: 2,
		oneperShip: true,
		range: "1 - 2",
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C364",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Gul Damar",
		text: "Increase the Captain Skill of the Captain equipped to this ship by 2.\n<b>WHEN A FRIENDLY SHIP ATTACKS WITH A [weapon_text] UPGRADE:</b> Target that ship and place 2 [time] Tokens on the [weapon_text] Upgrade being used.\nThe target ship may re-roll up to 3 attack dice this attack.",
		cost: 2,
		unique: true,
		range: "1 - 2",
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T260",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Sensor Ghost",
		text: "<b>WHEN DEFENDING:</b> Discard this card.\n\nThe attacking ship rolls -1 attack die.  If this ship is not destroyed by the attack, it may perform a [sensor-echo] Action as a Free Action using the 1 [straight] Maneuver Template even if it does not have the [sensor-echo] Action on its Action Bar and/or is not Cloaked.",
		cost: 2,
		oneperShip: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T261",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Uridium Alloy",
		text: "<b>WHEN ATTACKING:</b> During the Modify Attack Dice Step, disable this card.\n\nConvert 2 [hit] into 1 [crit].\n(<i>Galor or Keldon Class Only</i>).",
		cost: 1,
		oneperShip: true,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T262",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Type-3 Galor Class",
		text: "Replace the Shield Value of this ship with its printed Shield Value +2.\n\n(</i>Galor Class Only</i>)",
		cost: 4,
		oneperShip: true,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T263",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Legion Crew Module",
		text: "Add 2 [crew_text] to this ship's Upgrade Bar.",
		cost: 2,
		unique: true,
		shipDominion: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C369",
		gameId: 1,
		set: [
			"75008"
		],
		name: "T'Paal",
		text: "Place the Stone of Gol [tech_text] Upgrade facedown under T'Paal for 0 SP.\n---------------------------------\n<b>EXECUTE MANEUVER STEP:</b> After this ship moves, discard this card and target an opposing ship. Discard 1 [tech_text] Upgrade equipped to the target ship.  Flip the Stone of Gol [tech_text] Upgrade under T'Paal face up and equip it to this ship, ignoring restrictions.",
		cost: 2,
		unique: true,
		range: "1 - 2",
		factions: [
			"vulcan"
		]
	},
	{
		type: "crew",
		id: "C368",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Vorik",
		text: "<b>WHEN DEFENDING:</b> Place 3 [time] Tokens on this card.\n\nRemove a    [target-lock] Token or a [battlestations] Token beside the attacking ship.  Place a [scan] Token beside this ship.",
		cost: 2,
		unique: true,
		factions: [
			"federation",
			"vulcan"
		]
	},
	{
		type: "crew",
		id: "C367",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Chu'Lak",
		text: "<b>FREE ACTION:</b> Place three [scan] Tokens beside this ship.\n--------------------------------------\n<b>END PHASE:</b> If you used Chu'Lak's Free Action: \nYou must discard 1 [crew_text] Upgrade equipped to this ship.",
		cost: 2,
		unique: true,
		factions: [
			"federation",
			"vulcan"
		]
	},
	{
		type: "weapon",
		id: "W212",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Photonic Auto-Cannon",
		text: "<b>ATTACK:</b> If this ship has a [scan] Token beside it, place 3 [time] Tokens on this card and target an opposing ship.\n\nConvert all [battlestations] into [hit].",
		cost: 3,
		OnePerShip: true,
		attack: "5",
		range: "2 - 3",
		shipVulcan: true,
		FrontArc: true,
		RearArc: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "weapon",
		id: "W211",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Aft Particle Beam",
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship.",
		cost: 2,
		attack: "4",
		range: "1 - 3",
		shipVulcan: true,
		RearArc: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "talent",
		id: "E207",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Logic is the Beginning of Wisdom",
		cost: 2,
		text: "<b>ACTIVATION PHASE:</b> Target a ship.\n\nPlace a [time] token, Continuous Effect Token or Permanent Effect Token from this ship, or a card equipped to this ship, on the target ship, or a card equipped to the target ship of the same type.",
		range: "1 - 2",
		captainVulcan: true,
		shipVulcan: true,
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T269",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Graviton Telescope",
		cost: 2,
		text: "<b>WHEN ATTACKING:</b> During the Deal Damage Step, if there is a [scan] Token beside this ship, disable this card.\n\nAdd 1 [hit].",
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T268",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Translinear Sensors",
		cost: 3,
		text: "<b>WHEN ATTACKING:</b> During the Roll Defense Dice Step, if there is a [scan] Token beside this ship, place 3 [time] Token on this card.\n\nThe defending ship may not roll more than 2 defense dice this attack.",
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T264",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Katric Ark",
		cost: 2,
		text: "<b>WHEN A VULCAN [crew_text] UPGRADE EQUIPPED TO THIS SHIP IS DISCARDED:</b> Place that [crew_text] Upgrade beneath this card.\n------------------------------------------------\n<b>ACTION:</b> Remove this card from play.\n\nEquip one [crew_text] Upgrade beneath this card to this ship. Discard all other [crew_text] Upgrades beneath this card.",
		shipVulcan: true,
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T267",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Stone of Gol",
		cost: 3,
		text: "<b>ACTION:</b>Place 3 [time] Tokens on this card and target a [crew_text] Upgrade equipped to an opposing ship.\n\nRoll a number of attack dice equal to the printed SP cost of the target [crew_text] Upgrade. If at least 1 [crit] is rolled, discard the target [crew_text] Upgrade. Otherwise, place 1 [time] Token on that [crew_text] Upgrade for each [hit]. (<i>Non-Vulcan ship costs +5 SP</i>)",
		unique: true,
		costVulcan: "+5",
		range: "1",
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T266",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Science Vessel Variant",
		cost: 4,
		text: "You may not equip the Combat Vessel Variant [tech_text] Upgrade to this ship.\n-----------------------------------------\nAdd 1 to this ship's Agility Value and Hull Value.",
		OnePerShip: true,
		dkyrLimit: true,
		suurokLimit: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T265",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Combat Vessel Variant",
		cost: 2,
		text: "You may not equip the Science Vessel Variant [tech_text] Upgrade to this ship.\n-----------------------------------------\nReplace this ship's Primary Weapon Value with its printed Primary Weapon Value +1.",
		OnePerShip: true,
		dkyrLimit: true,
		suurokLimit: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "talent",
		id: "E198",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Live Long And Prosper",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> Discard this card and target an opposing ship.\n\nRoll 4 defense dice if at least 3 [evade] are rolled this ship and the target ship cannont attack this game round.",
		range: "1 - 2",
		captainVulcan: true,
		shipVulcan: true,
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "talent",
		id: "E195",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Collective Consciousness",
		cost: 5,
		text: "<b>PLANNING PHASE: </b>Place 3 [time] Tokens on this card and target all friendly ships with a <img src='https://i.imgur.com/tZbY5gi.png' width='20' height='20'> Captain equipped to them.\n\nThe Captains equipped to the target ships replace their Captain Skill with the Captain Skill of the Captain equipped to this ship this game round.",
		range: "1 - 3",
		captainBorg: true,
		factions: [
			"borg"
		]
	},
	{
		type: "talent",
		id: "E194",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Root Command",
		cost: 4,
		text: "<b>COMBAT PHASE: </b>Discard this card and target an opposing ship\n\nDuring the target ship's Declare Target Step this game round, you choose that ship's target. The target must still be legal.",
		range: "1 - 2",
		shipBorg: true,
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "talent",
		id: "E193",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Ocular Implants",
		cost: 4,
		text: "<b>WHEN THIS SHIP PERFORMS A  [target-lock] ACTION:</b>\n\nThis ship may perform a [battlestations] Action as a Free Action.",
		captainBorg: true,
		shipBorg: true,
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B023",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Interlink Transceiver",
		cost: 2,
		text: "This ship and all friendly <img src='https://i.imgur.com/tZbY5gi.png' width='20' height='20'> ships within Range increase their Agility Value by 1.",
		unique: true,
		range: "1",
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B022",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Technological Distinctiveness",
		cost: 3,
		text: "<b>ACTION:</b>\nPlace one Mission Token on this card.\n-----------------------------------\n<b>WHEN ATTACKING WITH THIS SHIP'S PRIMARY WEAPON:</b>\n\nThis ship rolls +1 attack die for each Mission Token on this card.",
		unique: true,
		shipBorg: true,
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B021",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Assimilation Tubules",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card and target an opposing ship that is not Cloaked and has no Active Shields.\n\nSteal 1 [crew_text] Upgrade equipped to the target ship, ignoring this ship's restrictions.",
		unique: true,
		range: "1 - 2",
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B020",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Borg Multi-Adaptive Shields",
		cost: 5,
		text: "You must discard this card if this ship has no Active Shields.\n-----------------------------------\n<b>WHEN DEFENDING:</b> During the Compare Results Step:\n\nCancel 1 [hit]",
		OnePerShip: true,
		shipBorg: true,
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B019",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Distribution Nodes",
		cost: 1,
		text: "<b>ACTIVATION PHASE:</b> Target a friendly ship.\n\nRepair 1 Hull on this ship and deal 1 [hit] to the Hull of the target ship.",
		unique: true,
		range: 1,
		factions: [
			"borg"
		]
	},
	{
		type: "tech",
		id: "T252",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Integrated Borg Technology",
		cost: 1,
		text: "Add 1 [borg_text] to this ship's Upgrade Bar\n----------------------------------------\nYou do not pay a faction penalty for this card.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "weapon",
		id: "W200",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Advanced Proton Beam",
		cost: 3,
		range: "1",
		attack: "*",
		text: "The Attack Value of this [weapon_text] are this ship's Printed Primary Weapon Value.\n<b>ATTACK:</b> Remove this card from play, spend 2 Drone Tokens on the Captain equipped to this ship, and target an opposing ship.\n\nAll Damage inflicted by this attack ignores the defending ship's Shields",
		unique: true,
		shipBorg: true,
		FrontArc: true,
		arc360: true,
		factions: [
			"borg"
		]
	},
	{
		type: "weapon",
		id: "W199",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Bio-Molecular Torpedo",
		cost: 0,
		range: "1 - 2",
		attack: "*",
		text: "The Attack Value and cost of this [weapon_text] are this ship's Printed Primary Weapon Value.  <b>ATTACK:</b> Spend 2 Drone Tokens on the Captain equipped to this ship and target an opposing ship.  If this attack hits, place 2 [time] Tokens on the Captain and each [crew_text] Upgrade equipped to the defending ship. If the defending ship is a <img src='https://i.imgur.com/4FcAujB.png' width='20' height='20'> ship, place 2 [time] Tokens on all the cards equipped to it instead.",
		unique: true,
		shipBorg: true,
		FrontArc: true,
		RearArc: true,
		factions: [
			"federation",
			"borg"
		]
	},
	{
		type: "crew",
		id: "C357",
		gameId: 1,
		set: [
			"75007"
		],
		name: "B'Elanna Torres",
		cost: 3,
		unique: true,
		text: "Add 1 [borg_text] to this ship's Upgrade Bar. The [borg_text] Upgrade equipped to this ship using that [borg_text] Upgrade Slot cost -1SP for each unused Upgrade Slot on that ship's printed Upgrade Bar.",
		factions: [
			"federation",
			"borg"
		]
	},
	{
		type: "crew",
		id: "C352",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Three of Nine",
		cost: 5,
		unique: true,
		shipBorg: true,
		text: "<b>WHEN THIS SHIP PERFORMES A [regenerate] ACTION:</b>\n\nRepair up to 1 Shield and 1 Hull instead. this ship does not lose its attack from performing the [regenerate] Action.",
		factions: [
			"borg"
		]
	},
	{
		type: "crew",
		id: "C350",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Tuvok",
		cost: 5,
		unique: true,
		text: "<b>WHEN DEFENDING:</b> During the Modify Attack Dice Step, spend 1 Drone Token on the Captain equiped to this ship.\n\nThe attacking ship cannot re-roll any attack dice this attack. In addition, if the attacking ship has any Federation [weapon_text] Upgrades equipped to it, convert 1 [hit] or [crit] into 1 [blank] .",
		factions: [
			"federation",
			"borg"
		]
	},
	{
		type: "crew",
		id: "C345",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Crosis",
		cost: 3,
		unique: true,
		text: "Increase the Captain Skill of the Captain equiped to this ship by 1. If the Captain is a <img src='https://i.imgur.com/tZbY5gi.png' width='20' height='20'> Captain increase its Captain Skill by 3 instead.\n-----------------------------------\n<b>ONCE PER GAME, WHEN THE CAPTAIN OF THIS SHIP IS DISCARDED:</b>\n\nThis Card becomes this ship's Captain. Place 5 Drone Tokens on this card.",
		factions: [
			"borg"
		]
	},
	{
		type: "crew",
		id: "C351",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Seven of Nine",
		cost: 2,
		unique: true,
		text: "Add 1 [borg_text] to this ship's Upgrade Bar.\n-----------------------------------\nAll [borg_text] Upgrades equipped to this ship cost -1 SP.",
		factions: [
			"borg"
		]
	},
	{
		type: "talent",
		id: "E197",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Worthy Opponent",
		cost: 3,
		OnePerShip: true,
		captainKlingon: true,
		shipKlingon: true,
		text: "<b>WHEN DEFENDING WHILE THERE IS AT LEAST 1 DAMAGE CARD BESIDE THIS SHIP'S SHIP CARD:</b> Discard this card.\n\nConvert all the attacking ship's [hit], [crit], and [battlestations] into [blank] .",
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E196",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Legacy of the Name",
		cost: 3,
		OnePerShip: true,
		captainFederation: true,
		shipFederation: true,
		text: "Can only be equipped to a <img src='https://i.imgur.com/XIBw3Gb.png' width='10' height='10'> ship.\n-----------------------------------\n<b>FREE ACTION:</b> Place 3 [time] Tokens on this card.\n\nPerform a [battlestations] Action or an [evade] Action as a Free Action. If this card is equipped to a ship with \"Enterprise\" in its name, you may perform any available Action as a Free Action instead.",
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W198",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Disruptor Blast",
		cost: 3,
		range: "1 - 2",
		attack: 3,
		unique: false,
		FrontArc: true,
		text: "<b>ATTACK:</b> Place 3 [time] Tokens on this card and target an opposing ship.\n\nMake this attack twice against the defending ship. If this ship is a D7 Class you may convert 1 [blank] into 1 [battlestations] during each attack.",
		factions: [
			"klingon",
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W197",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Full Power Phaser Barrage",
		cost: 5,
		range: "2 - 3",
		attack: "*",
		unique: true,
		FrontArc: true,
		text: "The Attack Value of this [weapon_text] is this ship's printed Primary Weapon Value.  \n<b>ATTACK:</b> Place 3 [time] Tokens on this card, place an [aux] Token beside this ship, and target an opposing ship.  If this [weapon_text] is equipped to a Constitution Class ship, this ship rolls +2 attack dice. During the Deal Damage Step, if there is at least 2 uncancelled [hit] and/or [crit], roll 3 additional attack dice and add all [hit] and/or [crit] to the attack total.",
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W196",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Magnetic Pulse",
		cost: 5,
		range: "2 - 3",
		attack: "*",
		OnePerShip: true,
		FrontArc: true,
		text: "The Attack Value of this [weapon_text] is this ship's printed Primary Weapon Value.\n-----------------------------------\n<b>ATTACK:</b> Disable 1 Active Shield on this ship and target an opposing ship.\nIf this [weapon_text] is equipped to a D7 Class ship, this ship rolls +2 attack dice. All [crit] that would damage a Shield on the defending ship inflicts 1 [hit] to the defending ship's Hull instead.",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C355",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Christine Chapel",
		cost: 3,
		unique: true,
		text: "<b>PLANNING PHASE:</b> Disable this card or place 3 [time] Tokens on this card, and target a [crew_text] Upgrade equipped to this ship.\n\nRemove 1 Disabled Token or all [time] Tokens from the target [crew_text] Upgrade.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C348",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Mr. Spock",
		cost: 4,
		unique: true,
		text: "<b>COMBAT PHASE:</b> Discard this card and spend a [scan] Token beside this ship.\n\nThis ship's attacks cannot be cancelled this game round and this ship cannot be prevented from attacking this game round.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C347",
		gameId: 1,
		set: [
			"75006"
		],
		name: "M'ress",
		cost: 3,
		unique: true,
		text: "<b>WHEN A [battlestations] TOKEN IS PLACED BESIDE THIS SHIP:</b>\n\nRemove a Disable Token from a [crew_text] Upgrade equipped to this ship.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C353",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Montgomery Scott",
		cost: 3,
		unique: true,
		text: "<b>ACTION: </b>Disable this card.\n\nRepair up to 1 Shield and 1 Hull on this ship.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C354",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Arex",
		cost: 2,
		unique: true,
		text: "<b>WHEN THIS SHIP REVEALS ITS MANEUVER DIAL: </b>Disable this card.\n\nRotate this ship's maneuver dial to a White or Green maneuver of the same speed as the maneuver revealed and perform that maneuver instead.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C346",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Kali",
		cost: 3,
		range: "1",
		shipKlingon: true,
		text: "<b>ACTION:</b> Discard this card and target an opposing ship. \n\nLook at all face down damage cards beside the target ship's Ship Card. Flip 1 of those Damage Cards face up and resolve its effect if applicable.",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C356",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Kaz",
		cost: 2,
		range: "1",
		shipKlingon: true,
		text: "<b>WHEN A <img src='https://i.imgur.com/2lM4cv0.png' width='20' height='20'> [crew_text] UPGRADE EQUIPPED TO THIS SHIP OR ANOTHER FRIENDLY SHIP WITHIN RANGE WOULD BE DISCARDED BY AN OPPOSING EFFECT:</b> \n\n You may discard this card instead.",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C344",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Vendorian Spy",
		cost: 4,
		range: "1-2",
		unique: true,
		text: "<b>ACTIVATION PHASE:</b> Target a [crew_text] Upgrade equipped to a friendly ship.\n\nThis card becomes a copy of the target [crew_text] Upgrade this game round.",
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C349",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Harcourt Fenton Mudd",
		cost: 3,
		unique: true,
		range: " 1 ",
		text: "You do not pay a faction penalty for this card. \n-----------------------------------\n<b>PLANNING PHASE:</b> Disable this card and target an opposing ship.\n\nPlace a Love Crystal Token on two [crew_text] Upgrades equipped to the opposing ship.",
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E192",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Maquis Tactics",
		cost: 5,
		text: "<b>AFTER ATTACKING:</b>\n\nThis ship may perform a 1 [straight], 1 [bank-left] or  1 [bank-right] maneuver.\n(<i>Maquis Raider Only</i>)",
		unique: true,
		captainIndependent: true,
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E191",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Andorian Imperial Guard",
		cost: 2,
		text: "May only be equipped to Thy'lek Shran or an Andorian Captain.\n-----------------------------------\n<b>WHEN ATTACKING WITH AN Independent [weapon_text] UPGRADE:</b> Place 2 [time] Tokens on this card.\nThis ship rolls additional attack dice this attack equal to the number of [time] Tokens on the Independent [weapon_text] Upgrade being used.",
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E190",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Vidiian Sodality",
		cost: 1,
		text: "May only be equipped to a Vidiian Captain.\n<b>WHEN THIS SHIP OR A CARD EQUIPPED TO IT DISABLES OR DISCARDS A [crew_text] UPGRADE EQUIPPED TO AN OPPOSING SHIP:</b>\nPlace 1 Mission Token on this card.\n----------------------------------------\n<b>WHEN AN INDEPENDENT [crew_text] UPGRADE OR CAPTAIN EQUIPPED TO THIS SHIP WOULD BE DISCARDED:</b>\nYou may discard 1 Mission Token on this card instead.</b>",
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T251",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Particle Synthesis",
		cost: 4,
		text: "<b>WHEN DEFENDING:</b> Before the Roll Attack Dice Step:\n\nYou may roll exactly 1 defense die that cannnot be re-rolled or modified. If you roll a [blank] , the attacking ship must choose a new legal target for the attack. If no other target can be chosen the attack is cancelled and this card must be discarded.\n<i>(Dauntless Class only)</i>",
		shipLimit: true,
		OnePerShip: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T184",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Enhanced Shield Emitters",
		cost: 5,
		text: "Increase this ship's Shield Value by 2.\n-----------------------------------\n<b>COMBAT PHASE:</b> You may flip up to 2 Disabled Shield Tokens on this ship to their Active sides.\n-----------------------------------\n<b>END PHASE:</b> You may repair 1 Shield on this ship.\n\n<i>(Andorian Battle Cruiser Only)</i>",
		shipLimit: true,
		OnePerShip: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T183",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Class 4 Cloaking Device",
		cost: 4,
		text: "<b>ACTION:</b> Place 2 [time] Tokens on this card.\n\nPerform a [cloak] Action as a Free Action even if its not on this ship's Action Bar. Then this ship may perform the [sensor-echo] Action as a Free Action even if its not on its Action Bar.\n(<i>Maquis Raider Only</i>)",
		shipLimit: true,
		OnePerShip: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T182",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Inertial Compensators",
		cost: 2,
		text: "This ship must have a [come-about] maneuver on its maneuver dial to equip this card.\n----------------------------------------\n<b>AFTER PERFORMING A BANK OR TURN MANEUVER WITH A SPEED OF 2 OR GREATER:</b> Place an [aux] token beside this ship. \nRotate this ship 180 degrees even if this ship’s base overlapped another ship’s base.",
		OnePerShip: true,
		hullConstraint: "3-",
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W194",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Enhanced Phasers",
		cost: 3,
		text: "<b>AFTER THIS SHIP ATTACKS WITH ITS PRIMARY WEAPON:</b>\n\nThis ship may make an attack with its Primary Weapon targeting a different opposing ship in its Primary Firing Arc.\n\n(Note: Ship must have Primary Weapon 2 or less)",
		attackConstraint: "2-",
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W193",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Hypothermic Charge",
		cost: 4,
		attack: 3,
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship.\n\nAll damage inflicted by this attacks ignores the defending ship's Shields. If the defending ship has no Active Shields, you may re-roll any number of your Attack Dice\n(<i>Vidiian Battle Cruiser Only</i>)",
		unique: false,
		shipLimit: true,
		range: "1 - 2",
		factions: [
			"independent"
		]
	},
	{
		type: "question",
		id: "Q015",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Repurposed Cargo Hold",
		cost: 2,
		text: "This card counts as a [crew_text] Upgrade, [tech_text] Upgrade, or [weapon_text] Upgrade.\n\nAdd one [tech_text] or [weapon_text] Upgrade to this ship’s Upgrade Bar.",
		OnePerShip: true,
		shipIndependent: true,
		factions: [
			"independent"
		],
		countsAsUpgrade: true
	},
	{
		type: "crew",
		id: "C340",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Tarah",
		cost: 5,
		text: "<b>ACTION:</b> Remove this card from play and target an opposing ship. \n\nDiscard a Captain Card or Admiral Card equipped to that ship.\n\n(<i>Andorian Battle Cruiser</i>)",
		unique: true,
		range: "1",
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C339",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Michael Jonas",
		cost: 3,
		text: "<b>PLANNING PHASE:</b> Place 2 [time] Tokens on this card and target an opposing ship.\n\nThe target ship cannot perform a maneuver with a speed greater than 2 this game round.",
		unique: true,
		range: "1 - 2",
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C338",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Teero Anaydis",
		cost: 3,
		text: "<b>PLANNING PHASE:</b> Target a [crew_text] Upgrade equipped to an opposing ship.\nPlace 1 [time] Token on the target [crew_text] Upgrade.\n----------------------------------------\n<b>END PHASE</b> Target a [crew_text] Upgrade with a [time] Token on it equipped to an opposing ship.\nAdd 1 [time] Token to the target [crew_text] Upgrade instead of removing 1 [time] Token.",
		unique: true,
		range: "1 - 2",
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C337",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Motura",
		cost: 2,
		text: "<b>ACTION:</b> Discard this card and target an opposing ship.\n\nDiscard 1 [crew_text] Upgrade equipped to the target ship. This ship may perform a maneuver on its dial with a speed of 3 or less. If it does it cannot attack this game round.",
		unique: true,
		range: "1 - 2",
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C336",
		gameId: 1,
		set: [
			"75005"
		],
		name: "James T. Kirk",
		cost: 4,
		text: "<b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card. Increase the Captain Skill of the Captain equipped to this ship by 2 this game round and perform a [battlestations] Action as a free Action.",
		unique: true,
		talents: 1,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C335",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Mr. Spock",
		cost: 4,
		text: "<b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card. Increase the Captain Skill of the Captain equipped to this ship by 2 this game round and perform a [scan] Action as a free Action.",
		unique: true,
		talents: 1,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C334",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Hikaru Sulu",
		cost: 3,
		text: "<b>WHEN THIS SHIP WOULD SUFFER DAMAGE FROM AN OBSTACLE OR MINEFIELD TOKEN:</b> Place 3 [time] Tokens on this card and roll 3 defence dice.\n\nFor each [evade] cancel 1 [hit] or [crit].",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C333",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Montgomery Scott",
		cost: 3,
		text: "<b>PLANNING PHASE:</b> Place 3 [time] Tokens on this card.\n\nRepair 1 Shield on this ship and flip this card.",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C332",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Montgomery Scott",
		cost: 3,
		text: "<b>PLANNING PHASE:</b> Place 3 [time] Tokens on this card.\n\nRepair 1 Hull on this ship and flip this card.",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C331",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Leonard Mccoy",
		cost: 3,
		text: "<b>WHEN A CAPTAIN EQUIPPED TO THIS SHIP WOULD BE DISABLED:</b>\nPlace 3 [time] Tokens on this card instead.\n----------------------------------------\n<b>WHEN A CAPTAIN EQUIPPED TO THIS SHIP WOULD BE DISCARDED:</b>\nPlace 2 [time] Tokens on this card and the Captain that would be discarded instead.",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C330",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Leonard Mccoy",
		cost: 3,
		text: "<b>SETUP:</b>\nPlace 1 [crew_text] Upgrade with a printed cost of 4 SP or less face down beneath this card.\n----------------------------------------\n<b>ACTIVATION PHASE:</b>\nFlip the [crew_text] Upgrade beneath this card face up and equip it to this ship even if it exceeds this ship's restrictions. Place 3 [time] Tokens on that [crew_text] Upgrade.",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C329",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Pavel Chekov",
		cost: 2,
		text: "<b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card.\n\nRemove 1 [aux] Token beside this ship.",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C328",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Pavel Chekov",
		cost: 2,
		text: "<b>COMBAT PHASE:</b> Place 3 [time] Tokens on this card and target an opposing ship.\n\nRemove 1 [scan] Token beside the target ship.",
		unique: true,
		specialization: true,
		range: "1 - 2",
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C327",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Nyota Uhura",
		cost: 3,
		text: "<b>WHEN THIS CARD IS FLIPPED FACE UP OR AFTER THIS SHIP SUFFERS CRITICAL DAMAGE:</b>\n\nDiscard all face up \"Communications Failure\" damage cards beside this ship's Ship Card.",
		unique: true,
		specialization: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "crew",
		id: "C326",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Nyota Uhura",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card and target this ship or a friendly ship.\n\nIncrease the Range of all Upgrades equipped to the target ship by 1 this game round (Max Range 3).",
		unique: true,
		specialization: true,
		range: "1 - 2",
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "talent",
		id: "E189",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Overwhelm",
		cost: 4,
		text: "<b>WHEN ATTACKING:</b> Place 2 [time] Tokens on this card. \nThis game round, for each other friendly ship that attacked the defending ship this game round, this ship rolls +1 attack die and may convert 1 [blank] into 1 [battlestations].",
		unique: true,
		shipKlingon: true,
		captainKlingon: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T181",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Portable Transwarp Beaming Device",
		cost: 2,
		text: "<b>WHEN A [crew_text] UPGRADE EQUIPPED TO THIS SHIP WOULD BE DISCARDED:</b> Discard this card and target a friendly ship.\n\nInstead, place 1 [time] Token on the [crew_text] Upgrade that would be discarded and equip it to the target ship, even if it exceeds that ship's restrictions.",
		unique: true,
		range: "1 - 3",
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "tech",
		id: "T180",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Integrated Future Technology",
		cost: 3,
		text: "You do not pay Faction Penalty when equipping Romulan or Borg [tech_text] and/or [weapon_text] Upgrades to this ship.\n<b>SETUP:</b>Place 1 [tech_text] Upgrade with a printed cost of 4 SP or less face down beneath this card.\n\n<b>PLANNING PHASE:</b> Discard this card.\nFlip the [tech_text] Upgrade beneath this card face up and equip it to this ship even if it exceeds this ships restrictions.",
		OnePerShip: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "tech",
		id: "T179",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Klingon Cloaking Device",
		cost: 2,
		text: "<b>WHEN DEFENDING:</b> If this ship is Cloaked:\n\nConvert 1 [blank] into 1 [evade].\n-----------------------------------\n<b>END PHASE:</b> Place 3 [time] Tokens on this card.\n\nFlip this ship's [cloak] Token to its green side.",
		OnePerShip: true,
		shipKlingon: true,
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C325",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Klingon Guard",
		cost: 2,
		text: "<b>COMBAT PHASE:</b> Discard this card.\n\nPlace 1 [evade] Token beside this ship.",
		shipKlingon: true,
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C324",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Klingon Patrol",
		cost: 2,
		text: "<b>END PHASE:</b> If this ship is not in the Primary Firing Arc of an opposing ship within Range:\n\nFlip this ship's [cloak] Token to its green side.",
		shipKlingon: true,
		range: "1 - 2",
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C323",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Klingon First Officer",
		cost: 4,
		text: "<b>END PHASE:</b> Once per game, discard the Captain equipped to this ship.\n\nPerfrom an attack with this ship's Primary Weapon. This card becomes this ship's Captain with a Captain Skill of 4.",
		shipKlingon: true,
		OnePerShip: true,
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C322",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Koth",
		cost: 2,
		text: "<b>SETUP:</b> Place 1 Disabled Token on 1 [crew_text] upgrade equipped to each opposing ship.",
		unique: true,
		shipKlingon: true,
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W192",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Advanced Long Range Torpedo",
		cost: 3,
		text: "The Attack Value of this [weapon_text] is this ship’s Primary Weapon Value +1.\n-----------------------------------\n<b>ATTACK:</b> Spend this ship’s  [target-lock] Token, place 2 [time] Tokens on this card, and target an opposing ship.\n\nIf the attack hits, every other ship within Range 1 of the opposing ship suffers 1 [hit].\n(<i>Constitution Class (Kelvin) Only</i>)",
		attack: 0,
		unique: false,
		range: "2 - 3",
		shipLimit: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W191",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Photon Torpedoes",
		cost: 3,
		text: "The Attack Value of this [weapon_text] is this ship’s Primary Weapon Value +1.\n-----------------------------------\n<b>ATTACK:</b> Spend this ship’s   [target-lock] Token, place 3 [time] Tokens on this card, and target an opposing ship.\n\nIf the defending ship has no Active Shields and is not Cloaked, convert all [battlestations] into [crit].",
		attack: 0,
		RearArc: true,
		range: "1 - 3",
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W190",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Disruptor Volley",
		cost: 3,
		text: "<b>ATTACK</b>:Disable this card and Target an opposing ship.\n\nThis attack deals no damage. If this attack his place an [aux] Token beside the defending ship. If the defending ship is an Attack Squadron, discard 1 Attack Squadron Token (AST) for each uncancelled [hit] or [crit].</b>\n(<i>Warbird Class Only</i>)",
		shipLimit: true,
		attack: 5,
		range: "1 - 3",
		factions: [
			"mirror-universe",
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W189",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Full Spread Phasers",
		cost: 4,
		text: "<b>WHEN ATTACKING WITH THIS SHIP'S PRIMARY WEAPON:</b>\n\nThis ship rolls +1 attack die, or this ship may perform an additional attack with its Primary Weapon from its Secondary Firing Arc with -1 attack die.\n(<i>Constitution Class (Kelvin) Only</i>)",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"mirror-universe",
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D032",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Lead Squadron",
		cost: 5,
		text: "Add 1 [squadron_text] Upgrade to this Attack Squadron’s Upgrade Bar.\n-----------------------------------\nAdd the [battlestations] Action to this Attack Squadron’s Action Bar.\n-----------------------------------\nIncrease the Captain Skill of this Attack Squadron by 2.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D033",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Anti-Squadron Barrage",
		cost: 3,
		text: "<b>ATTACK:</b> Discard this card and target an opposing Attack Squadron.<br><br>Perform 1 attack against the target Attack Squadron for every 2 Attack Squadron Tokens (ASTs) on the target Attack Squadron's Ship Card (rounded down).",
		range: " 1 - 2 ",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D031",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Flanking Maneuver Epsilon",
		cost: 3,
		text: "<b>AFTER THIS ATTACK SQUADRON PERFORMS A MANEUVER:</b> Place 3 [time] Tokens on this card.\n\nPerform a [sensor-echo] Action using a 1 [straight] Maneuver Template as a Free Action even if this Attack Squadron is not Cloaked.",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D030",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Defensive Maneuver Alpha",
		cost: 1,
		text: "This Attack Squadron obstructs attacks targeting friendly ships.",
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D029",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Defensive Maneuver Beta",
		cost: 2,
		OnePerShip: true,
		range: " 1 ",
		text: "<b>WHEN A FRIENDLY CAPITAL SHIP IS DEFENDING:</b> Discard this card and remove up to 2 ASTs from this Attack Squadron, and target that friendly Capital Ship.\n\nFor Each AST removed, cancel 1 [hit] against the target ship. ",
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D028",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Defensive Maneuver Theta",
		cost: 3,
		OnePerShip: true,
		range: " 1 ",
		text: "<b>COMBAT PHASE:</b> Discard this card and target all friendly Capital Ships.\n\nPlace an [evade] Token beside this Attack Squadron and all target ships.",
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D027",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Flanking Maneuver Delta",
		cost: 2,
		text: "<b>AFTER THIS ATTACK SQUADRON PERFORMS A [bank-left] or [bank-right] MANEUVER:</b> Discard this card and place an [aux] Token beside this Attack Squadron. \n\nRotate this Attack Squadron 180 degrees.",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "squadron",
		id: "D026",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Flanking Attack Omega",
		cost: 4,
		text: "<b>COMBAT PHASE:</b> Discard this card and target a friendly Capital Ship.\n\nThe target ship rolls +3 attack dice this game round. This Attack Squadron cannot attack this game round.",
		OnePerShip: true,
		range: " 1 ",
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q014",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Optronic Data Core",
		cost: 4,
		text: "This card counts as a [tech_text] or [weapon_text] Upgrade.\n<b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card.\nPerform the Action on a [question_text] Upgrade equipped to this ship as a Free Action.\n-----------------------------------\n<b>ACTIVATION PHASE:</b> Disable this card.\nRemove a Disable Token from a [question_text] Upgrade equipped this ship.",
		OnePerShip: true,
		factions: [
			"federation",
			"independent"
		],
		countsAsUpgrade: true
	},
	{
		type: "talent",
		id: "E188",
		gameId: 1,
		set: [
			"73042"
		],
		name: "The Lone Hunt",
		cost: 3,
		range: "1 - 2",
		text: "<b>WHEN ATTACKING:</b> If there are no friendly ships within range of this ship:\n\nThis ship rolls +1 Attack die this game round.",
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E187",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Relics",
		cost: 4,
		text: "Can only be equipped to Karr or a Hirogen Captain.\n\n<b>WHEN ATTACKING:</b> Once per game round, when this ship hits an opposing ship with an attack:\nPlace 1 Mission Token on this card (max 3).\n\n<b>ACTIVATION PHASE:</b> Spend 1 Mission Token on this card.\nPerform an Action on this ship's Action Bar as a Free Action.",
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T178",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Tractor Beam",
		cost: 3,
		text: "<b>ACTION:</b> Target an opposing ship. \n\nThe target ship treats all White Maneuvers as Red Maneuvers and all Green Maneuvers as White Maneuvers this game round.",
		OnePerShip: true,
		range: "1 - 2",
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T177",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Stealth Mode",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> Place 2 [time] Tokens on this card. \nPerform a [sensor-echo] Action as a Free Action even if this ship is not Cloaked\n\n(<i>Hirogen Warship Only</i>)",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W188",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Subnucleonic Beams",
		cost: 3,
		attack: 4,
		range: "1 - 2",
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship.\n\nFor each uncancelled [hit] or [crit], you may disable 1 [crew_text] Upgrade equipped to the target ship (max 3).\n\n(<i>Non-Hirogen Warship Costs +5 SP</i>)",
		shipLimit: "+5",
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C321",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Donik",
		cost: 2,
		text: "This ship cannot be targeted by [weapon_text] Upgrades fried though a Secondary Firing Arc.\n\n(<i>Hirogen Warship Only</i>)",
		unique: true,
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C320",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Beta Hirogen",
		cost: 3,
		text: "Increase the Captain Skill of the Captain equipped to this ship by 1.\n----------------------------------------\n<b>WHEN THIS SHIP PERFROMS A [scan] ACTION:</b>\n\nPlace an additional [scan] Token beside this ship.",
		OnePerShip: true,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E186",
		gameId: 1,
		set: [
			"72321"
		],
		name: "Kal-If-Fee",
		cost: 1,
		text: "<b>ACTION:</b> Disable this card and target an opposing ship\n\nSelect a [crew_text] on this ship. The controller of the target ship selects a [crew_text] on that ship. Each player rolls five attack dice. Whichever player rolls fewer [crit] and/or [hit] results must discard the [crew_text] they selected.",
		unique: true,
		range: "1 - 3",
		factions: [
			"vulcan"
		]
	},
	{
		type: "talent",
		id: "E185",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Victory Is Life",
		cost: 6,
		text: "<b>COMBAT PHASE:</b> Discard this card, target this ship, and target all friendly <img src='https://i.imgur.com/l7seIMt.png' width='20' height='20'> ships.\n\nPlace a [battlestations] Token beside all target ships. All target ships roll +1 attack die this game round.",
		unique: true,
		range: "1",
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T176",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Cloning Facility",
		cost: 4,
		text: "<b>ACTIVATION PHASE:</b> Target a Dominion [crew_text] Upgrade equipped to this ship or a friendly ship.\n\nThis card becomes a copy of the target Dominion [crew_text] Upgrade this game round.",
		OnePerShip: true,
		range: "1",
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T175",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Antiproton Blast",
		cost: 2,
		text: "<b>ACTIVATION PHASE:</b> Discard this card, target this ship and target all friendly ship.\n\nThe target ships can target opposing ships with a [cloak] Token beside them with a  [target-lock] Action this game round.",
		unique: false,
		range: "1",
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C319",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Changeling Infiltrator",
		cost: 4,
		text: "<b>ACTIVATION PHASE:</b> Target a [crew_text] Upgrade equipped to an opposing ship.\n\nThis card becomes a copy of the target [crew_text] Upgrade this game round.",
		unique: true,
		range: "1 - 2",
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C318",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Elim Garak",
		cost: 1,
		text: "<b>WHEN ATTACKING:</b> If the defending ship shares a faction with this ship or this card:\n\n1[hit] or 1[crit] cannot be cancelled.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C317",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Seskal",
		cost: 4,
		text: "<b>COMBAT PHASE:</b> If all this ships Shields have been destroyed, disable this card.\n\nThis ship rolls +2 attack dice this game round.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W187",
		gameId: 1,
		set: [
			"73032"
		],
		name: "Tactical Command Reticle",
		cost: 2,
		text: "Add 1 [weapon_text] to this ships Upgrade Bar\n-----------------------------------\n<b>COMBAT PHASE:</b> Place 2 [time] Tokens on this card.\n\nThis ship rolls +1 attack die this game round.",
		OnePerShip: true,
		shipDominion: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "talent",
		id: "E184",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Gorn Hegemony",
		cost: 4,
		text: "This card may only be equipped to S'Sesslak or a Gorn Captain.\n-----------------------------------\n<b>ACTION:</b> Discard this card and treat the Captain Skill of the Captain equipped to this ship as 0 this game round.\nThis ship may make 2 attacks instead of 1 this game round.\n(<i>Gorn Raider Only</i>)",
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "question",
		id: "Q013",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Meridor - Gorn Ale",
		cost: 2,
		text: "This Upgrade may be equipped to a ship without requiring an Upgrade slot.\n-----------------------------------\n<b>ACTIVATION PHASE:</b> Place 3 [time] Tokens on this card.\n\nDecrease the Captain Skill of the Captain equipped to this ship by up to 2 this game round, and increase this ship's Primary Weapon Value by the same amount this game round.",
		OnePerShip: true,
		shipIndependent: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C316",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Slar",
		cost: 5,
		text: "<b>ACTION:</b> Remove this card from play and target an opposing ship.\n\nDisable 1 [crew_text] Upgrade equipped to the target ship and deal 1 [crit] to the target ship's Hull.",
		unique: true,
		opBanned: false,
		range: "1",
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C315",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Gorn Pilot",
		cost: 3,
		text: "<b>ACTION:</b> If this ship performed a [straight] Maneuver this game round disable this card.\n\nPerform a 1 [straight] Maneuver",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C314",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Gorn Trooper",
		cost: 2,
		text: "For each Gorn Trooper Equipped to this ship, Increase the Captain Skill of the Captain equipped to this ship by 1.\n-----------------------------------\n<b>WHEN ATTACKING:</b> Disable this card.\n\nRe-Roll 1 attack die.",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W186",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Hidden Explosives",
		cost: 3,
		text: "<b>SETUP:</b> Target an opposing ship. Place a Hidden Explosives Token on the target ship and place 4 [time] Tokens on this card.\n-----------------------------------\n<b>WHEN THERE ARE NO MORE [time] TOKENS ON THIS CARD:</b> you must discard this card. Roll 3 attack dice that cannot be re-rolled or modified. All [hit] and [crit] deal damage to the ships Hull. Discard the Hidden Explosives Token after the attack is made.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T174",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Enhanced Durability",
		cost: 4,
		text: "Add 1 [tech_text] to this ships Upgrade Bar.\n-----------------------------------\nIncrease this ship's Shield and Agility Values by 1.\n\n<i>(Gorn Raider Only)</i>",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T173",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Gorn Sensors",
		cost: 3,
		text: "<b>WHEN THIS SHIP ATTACKS WITH ITS PRIMARY WEAPON AT RANGE 1:</b>\nRange combat bonuses are doubled\n-----------------------------------\n<b>WHEN THIS SHIP ATTACKS WITH A [weapon_text] UPGRADE AT RANGE 1:</B>\nApply Range combat bonuses.\n<i>(Gorn Raider)</i>",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W185",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Disruptor Bombardment",
		cost: 2,
		text: "<b>ATTACK:</b> Place 3 [time] Tokens on this card, place a Mission Token within Range 1-2 and target all opposing ships within Range 1 of the Mission Token.\n\nMake a separate attack roll against each target ship. This attack cannot be obstructed by Obstacles or Planets. Discard the Mission Token after the attack is made.\n<i>(Gorn Raider Only)</i>",
		OnePerShip: true,
		shipLimit: true,
		FrontArc: true,
		attack: 4,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E183",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Grand Nagus",
		cost: 2,
		text: "<b>ACTION:</b> Discard this card and target all friendly <img src='https://i.imgur.com/nmga8GG.png' width='20' height='20'> ships.\n\nAll target ships may perform a Green Maneuver.",
		unique: true,
		captainFerengi: true,
		range: "1 - 3",
		factions: [
			"ferengi"
		]
	},
	{
		type: "tech",
		id: "T172",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Kemocite",
		cost: 2,
		text: "<b>ACTIVATION PHASE:</b> When you reveal this ship's Maneuver.\nYou may increase the speed of the Maneuver by 2. The color of the Maneuver remains the same as the revealed Maneuver.\n-----------------------------------\n<b>WHEN ATTACKING:</b> Discard this card.\nAdd 1 [hit].",
		OnePerShip: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "tech",
		id: "T171",
		gameId: 1,
		set: [
			"75003"
		],
		name: "T-9 Energy Converter",
		cost: 2,
		text: "<b>END PHASE:</b> Disable this card and remove an [aux] Token beside this ship.\n\nRepair 1 Shield on this ship.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W184",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Weapon Ports",
		cost: 2,
		text: "<b>IF THIS CARD IS DISABLED:</b>\nThis ship rolls -1 defense dice\n-----------------------------------\n<b>ATTACK:</b> Disable this card and target an opposing ship.\nThis attack deals no damage. If this attack hits an Attack Squadron discard 1 Attack Squadron Token for each uncanceled [hit] or [crit].",
		range: "1 - 3",
		FrontArc: true,
		attack: 3,
		factions: [
			"ferengi"
		]
	},
	{
		type: "weapon",
		id: "W183",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Photon Torpedoes",
		cost: 2,
		text: "The Attack Value of this [weapon_text] is this ship's Primary Weapon Value\n-----------------------------------\n<b>ATTACK:</b> Place 2 [time] Tokens on this card and target an opposing ship.\n\nPlace an [aux] Token beside the target ship.",
		range: "1 - 3",
		FrontArc: true,
		RearArc: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "weapon",
		id: "W182",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Verteron Pulse Trap",
		cost: 2,
		text: "<b>SETUP:</b>\nPlace a Minefield Token anywhere that is not within Range 1 - 2 of any edge of the play area.\n-----------------------------------\n<b>WHEN A SHIP MOVES WITHIN RANGE 1 OF THE MINEFIELD TOKEN:</b> Target that ship.\nPlace an [aux] Token beside the target ship.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C313",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Gegis",
		cost: 3,
		text: "<b>ACTION:</b> Place 2 [time] Tokens on this card and target a [tech_text] or [question_text] Upgrade equipped to another ship.\n\nPlace 3 [time] Tokens on the target Upgrade.",
		unique: true,
		range: "1 - 2",
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C312",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Par Lenor",
		cost: 3,
		text: "<b>WHEN THIS SHIP WOULD BE DESTROYED BY AN ATTACK:</b> Equip this card to the attacking ship, even if it exceeds that ships restrictions with a number of GPLT on this card equal the the number of GPLT on the captain on this ship.\n-----------------------------------\n<b>ACTIVATION PHASE:</b> The opposing player may spend 1 GPLT on this card. Place 1 Disabled Token on an Upgrade equipped to this ship.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C311",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Letek",
		cost: 2,
		text: "<b>ACTION:</b> Discard this card an place 1 [aux] Token beside this ship.\n\nThis ship rolls +2 attack dice this game round.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C310",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Gral",
		cost: 1,
		text: "<b>END PHASE:</b> Discard this card or another [crew_text] Upgrade equipped to this ship.\n\nPlace 2 GPLT on the Captain equipped to this ship.",
		unique: true,
		captainFerengi: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C309",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Nava",
		cost: 1,
		text: "<b>WHEN A FERENGI [crew_text] UPGRADE WOULD BE DISCARDED FROM THIS SHIP:</b>\n\nPlace 1 GPLT on the Captain equipped to this ship.",
		unique: true,
		captainFerengi: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C308",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Grilka",
		cost: 1,
		text: "You do not pay a Faction Penalty when equipping this card to a <img src='https://i.imgur.com/nmga8GG.png' width='20' height='20'> Ship.\n-----------------------------------\nOpposing effects that cost one or more GPLT cost +1 GPLT.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "question",
		id: "Q012",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Bio-Mimetic Gel",
		cost: 3,
		text: "This card counts as a [tech_text] or [weapon_text] Upgrade.\n-----------------------------------\n<b>ACTIVATION PHASE:</b> Place 2 [time] Tokens on this card and target a [crew_text], [weapon_text], or [tech_text] Upgrade equipped to an another ship. Place 1 Bio-Mimetic Gel Token on the target Upgrade",
		unique: true,
		range: "1 - 2",
		factions: [
			"independent"
		],
		countsAsUpgrade: true
	},
	{
		type: "talent",
		id: "E182",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Neural Transponder",
		cost: 2,
		text: "<b>WHENEVER A [battlestations], [evade], [scan] OR [aux] TOKEN IS PLACED BESIDE THIS SHIP:</b> You must discard this card.\n\nEach other friendly ship within range that has a Neural Transponder Upgrade equipped to it must also place a token of the same type beside it if it does not already have one.",
		OnePerShip: true,
		shipBorg: true,
		captainBorg: true,
		range: "1 - 2",
		factions: [
			"borg"
		]
	},
	{
		type: "tech",
		id: "T190",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Technological Analysis",
		cost: 4,
		text: "<b>COMBAT PHASE:</b> Spend 1 Drone Token and target an opposing ship.\n\nDiscard 1 [battlestations], [evade], [scan], or  [target-lock] Token beside the target ship.",
		range: "1 - 3",
		arc360: true,
		factions: [
			"borg"
		]
	},
	{
		type: "weapon",
		id: "W181",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Tractor Beam",
		cost: 5,
		text: "The Attack Value of this [weapon_text] is equal to this ship's Primary Weapon Value.\n-----------------------------------\n<b>ATTACK:</b> Discard this card and target an opposing ship.\n\nFor each [crit] that would damage the defending ship's Hull, you may instead steal 1 [tech_text] or [crew_text] Upgrade from the defending ship ignoring this ship's restrictions.",
		range: "1 - 2",
		arc360: true,
		attack: "?",
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B018",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Threat Analysis",
		cost: 1,
		text: "<b>ACTION:</b> Place 2 [time] Tokens on this card.\n\nPlace a [battlestations] Token beside this ship.",
		factions: [
			"borg"
		]
	},
	{
		type: "crew",
		id: "C307",
		gameId: 1,
		set: [
			"73002"
		],
		name: "One",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card.\n\nFor each damage this ship suffers this game round, disable 1 of its Active Shields instead of destroying it. If this ship has no Active Shields, damage is applied normally.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "crew",
		id: "C306",
		gameId: 1,
		set: [
			"73002"
		],
		name: "'Second'",
		cost: 4,
		text: "<b>ACTIVATION PHASE:</b> Once per game, discard the Captain equipped to this ship.\n\nPerform an Action as a Free Action. Then, place 4 Drone Tokens on this card. This card becomes this ships Captain.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "crew",
		id: "C305",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Neonatal Borg",
		cost: 2,
		text: "Add 1 [crew_text] to this ships Upgrade Bar.\n-----------------------------------\nIf this card is equipped to a Borg ship, you may have Borg [crew_text] Upgrades fill this ships [tech_text] or [borg_text] Upgrade Slots.",
		OnePerShip: true,
		factions: [
			"borg"
		]
	},
	{
		type: "crew",
		id: "C304",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Mezoti",
		cost: 2,
		text: "<b>WHENEVER THE EFFECT OF A [crew_text] UPGRADE WOULD TARGET THIS SHIP:</b> Discard this card and target that [crew_text] Upgrade.\n\nDisable the target [crew_text] Upgrade and cancel its effect.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "talent",
		id: "E181",
		gameId: 1,
		set: [
			"73001",
			"75003"
		],
		name: "The Rules Of Acquisition",
		cost: 5,
		text: "<b>SETUP:</b>\n\n Place 6 Gold-Pressed Latinum Tokens (GPLT) on the Captain equipped to this ship.",
		OnePerShip: true,
		captainFerengi: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C303",
		gameId: 1,
		set: [
			"73001"
		],
		name: "Arridor",
		cost: 3,
		text: "<b>ACTION:</b> Disable this card and disable the Captain equipped t this ship, and target a [crew_text] Upgrade equipped to another ship.\n\nPlace a number of [time] Tokens equal the the Captain Skill of the Captain equipped to this ship -2 on the target [crew_text] Upgrade.",
		unique: true,
		range: "1",
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C302",
		gameId: 1,
		set: [
			"73001"
		],
		name: "Doctor Reyga",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card.\n\nRemove a Disabled Token from a [tech_text] Upgrade equipped to this ship and repair 1 damage to this ships Shields.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C301",
		gameId: 1,
		set: [
			"73001"
		],
		name: "Kol",
		cost: 2,
		text: "<b>END PHASE:</b> If there are no opposing ships within range, discard this card.\n\nPlace 1 Gold-Pressed Latinum Token (GPLT) on the Captain equipped to this ship.",
		unique: true,
		range: "1 - 2",
		captainFerengi: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "weapon",
		id: "W180",
		gameId: 1,
		set: [
			"73001"
		],
		name: "Missile Launchers",
		cost: 3,
		attack: 2,
		range: "1 - 2",
		FrontArc: true,
		text: "<b>ATTACK:</b> Disable this card and target an opposing ship.\n\nMake this attack twice. The second attack may target a different ship. Any [crit] deal damage to the defending ships Hull.",
		unique: false,
		factions: [
			"ferengi"
		]
	},
	{
		type: "tech",
		id: "T170",
		gameId: 1,
		set: [
			"73001"
		],
		name: "Metaphasic Shields",
		cost: 4,
		OnePerShip: true,
		text: "Increase this ships Shield Value by 1.\n-----------------------------------\nDiscard this card when this ship has no Active Shields.\n-----------------------------------\n<b>WHEN THIS SHIP OVERLAPS AN OBSTACLE:</b>\nThis ship does not lose its Action, but it may only perform a Non-Free Action listed on its Action Bar.",
		unique: false,
		factions: [
			"ferengi"
		]
	},
	{
		type: "weapon",
		id: "W179",
		gameId: 1,
		set: [
			"72311p"
		],
		name: "Photonic Cannon",
		cost: 10,
		attack: 10,
		range: "3",
		text: "<b>ATTACK:</b> Spend this ship's  [target-lock] Token and remove this card from play.\n\nThis ship suffers 2 [hit] to its Hull.\n\nThis [weapon_text] can only be fired out of this ships Primary Firing Arc.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E180",
		gameId: 1,
		set: [
			"75002"
		],
		name: "All Power To Weapons",
		cost: 5,
		text: "<b>COMBAT PHASE:</b> Place 3 [time] Tokens on this card and disable this ship's Shields.\n\n<b>Continuous Effect:</b> This ship's Shields remain disabled. This ship can only perform Green Maneuvers. This ship rolls +3 attack dice.",
		unique: true,
		captainDominion: true,
		hullConstraint: "5+",
		factions: [
			"dominion"
		]
	},
	{
		type: "talent",
		id: "E179",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Spread Despair and Demoralization",
		cost: 5,
		range: "1 - 2",
		text: "<b>ACTION:</b> Discard this card and target all opposing ships.\n\nAll target ships roll -1 attack die and -1 defense die this game round.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T169",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Suicide Attack",
		cost: 5,
		text: "<b>ACTIVATION PHASE:</b> If this ship overlaps an opposing ship, target that ship and destroy this ship.\n\nDeal 2 [crit] to that target ships Hull.\n\n(<i>Jem'Hadar Attack Ship</i>)",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T168",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Secondary Matter System",
		cost: 3,
		text: "All 2 [bank-left] 2 [bank-right], and 3 [straight] Maneuvers this ship performs are Green Maneuvers.",
		shipDominion: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W178",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Disruptor Cannon",
		cost: 3,
		range: "1 - 2",
		attack: 6,
		text: "<b>ATTACK:</b> Spend this ships  [target-lock] Token, discard this card, and target an opposing ship.\n\nPerfrom this attack twice against the target ship.\n\n(<i>Jem'Hadar Battleship Only</i>)",
		unique: true,
		shipLimit: true,
		RearArc: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W177",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Photon Torpedoes",
		cost: 5,
		range: "2 - 3",
		attack: 8,
		text: "<b>ATTACK:</b> Spend this ship's  [target-lock] Token, discard this card, and target an opposing ship that is not Cloaked and has no active Shields.\n\nThis ship may convert all [battlestations] into [hit]",
		FrontArc: true,
		RearArc: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W176",
		gameId: 1,
		set: [
			"75002",
			"73032"
		],
		name: "Phased Polaron Beams",
		cost: 3,
		range: "1 - 2",
		attack: 3,
		text: "<b>ATTACK:</b> Disable this card and target an opposing ship.\n\nThis attack ignores the target ship's Shields. This ship may convert 1 [battlestations] into 1 [hit].\n\n(<i>Jem'Hadar Attack Ship</i>)",
		OnePerShip: true,
		FrontArc: true,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W175",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Minesweeper",
		cost: 2,
		range: "1",
		text: "<b>ACTIVATION PHASE:</b> When this ship would trigger a Minefield Token by moving, discard this card and target that Minefield Token.\n\nRoll 1 attack die and consult the chart below:\n[crit] or [hit]: Remove the target Minefield Token, Its effect does not trigger.\n[battlestations] or [blank]: The effect of the Minefield Token triggers normally.",
		OnePerShip: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W174",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Energy Dissipator",
		cost: 2,
		range: "1 - 2",
		attack: 3,
		text: "<b>Attack:</b> Discard this card and target an opposing ship.\n\nFor each uncancelled [hit] or [crit], discard 1 [tech_text] Upgrade equipped to the target ship.\n\n(<i>Jem'Hadar Attack Ship</i>)",
		unique: true,
		FrontArc: true,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C300",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Jem'Hadar First",
		cost: 3,
		text: "<b>MODIFY ATTACK DICE STEP OR MODIFY DEFENSE DICE STEP:</b> Place 3 [time] Tokens on this card.\n\nConvert 1 [battlestations] into 1 [blank], 1 [evade], or 1 [hit].\n\n<b>( ERRATA )</b>",
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C299",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Jem'Hadar Elder",
		cost: 3,
		text: "<b>END PHASE:</b> Place 3 [time] Tokens on this card.\n\n[battlestations] Token do not get removed from this ship this game round.",
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C298",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Duran'Adar",
		cost: 3,
		text: "Add 1 [tech_text] to this ships Upgrade Bar.\n-----------------------------\n<b>ACTIVATION PHASE:</b> After this ship reveals a Red Maneuver, place 3 [time] Tokens on this card.\n\nThis ship does not receive [aux] Tokens this game round.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C297",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Talak'Talan",
		cost: 2,
		range: "1 - 2",
		text: "<b>ACTION:</b> Discard this card and target all friendly ships.\n\nPlace a [battlestations] Token beside this ship and all target ships.",
		unique: true,
		shipDominion: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C296",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Lamat'Ukan",
		cost: 2,
		text: "<b>WHEN ATTACKING:</b> If this ship spent its [target-lock] Token to re-roll its attack dice:\n\nThis ship may convert 1 [blank] into 1 [hit].",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T167",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Quantum Stasis Module",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> Discard this card and target a Captain or [crew_text] Upgrade equipped to an opposing ship.\n\nThe target Captain or [crew_text] Upgrade cannot perform Actions this game round.",
		unique: true,
		range: "1 - 2",
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T166",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Auxiliary Power Core",
		cost: 3,
		text: "When this card has 2 or more [aux] Tokens on it, discard it.\n-----------------------------\n<b>WHEN AN [aux] TOKEN WOULD BE PLACED BESIDE THIS SHIP:</b>\nPlace that [aux] Token on this card instead.\n\n(<i>Non-Romulan cost +2 SP more</i>)",
		OnePerShip: true,
		hullConstraint: "4+",
		costRomulan: "+2",
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T165",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Reinforced Shields",
		cost: 1,
		text: "<b>WHEN THIS SHIP SUFFERS 3 OR MORE DAMAGE FROM A SINGLE ATTACK:</b>\n\nRepair 1 Shield.",
		OnePerShip: true,
		hullConstraint: "5+",
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E178",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Strike From The Shadows",
		cost: 3,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked, discard this card.\n\nFlip this ships [cloak] Token to its green side.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E177",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Tal Shiar",
		cost: 2,
		text: "<b>PLANNING PHASE:</b> After all ships have chosen their Maneuvers, discard this card and target an opposing ship. \nLook at the target ship's Maneuver Dial and place a [battlestations] Token beside this ship. This ship cannot perform a [battlestations] Action this game round.",
		unique: true,
		captainRomulan: true,
		range: "1 - 3",
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W173",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Disruptor Beams",
		cost: 5,
		text: "<b>ATTACK:</b> Place 3 [time] Tokens on this card and target an opposing ship.\n\nFor each [hit] or [crit] the defending ship suffers, roll 1 attack die. If you roll at least 1 [hit] or [crit], the defending ships suffer 1 additional [hit].",
		attack: 5,
		range: "1 - 3",
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W172",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Forward Disruptor Banks",
		cost: 3,
		text: "<b>IF THIS SHIP PERFORMED A 2 [bank-left], [bank-right] OR 3 [bank-left], [bank-right] MANEUVER THIS GAME ROUND::</b>\n\nThis ship rolls +1 Attack die this game round.",
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W171",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Additional Weapons Array",
		cost: 3,
		OnePerShip: true,
		shipLimit: true,
		text: "<b>WHEN ATTACKING:</b>\n\nThis ship rolls +1 attack die.\n\n(<i>D'Deridex Class</i>)",
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C295",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Romulan Medical Team",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card and target a friendly ship.\n\nRemove 1 Disabled Token from all [crew_text] Upgrades equipped to the target ship.",
		range: "1 - 2",
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C294",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Romulan Spy",
		cost: 2,
		text: "<b>START OF THE GAME:</b> Target all friendly Romulan ships.\n\nPlace a [cloak] Token on the base of all the target ships.",
		range: "1",
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C293",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Tal Shiar Sub-Commander",
		cost: 2,
		text: "<b>WHEN ATTACKING:</b> If this ship has an [evade] Token beside it:\n\nThis ship may convert 1 of the defending ship's [evade] into a [blank] .",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C292",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Parem",
		cost: 1,
		text: "<b>PLANNING PHASE:</b> Discard this card and target a friendly ship.\n\n[tech_text] Upgrades equipped to the target ship cannot be affected by opposing effects this game round.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C291",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Bochra",
		cost: 1,
		text: "<b>ACTIVATION PHASE:</b> Discard this card.\n\nThis ship activates last this game round.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E176",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Riker Maneuver",
		cost: 4,
		text: "<b>WHEN DEFENDING:</b> If the attacking ship is not in this ships Primary Firing Arc, discard this card.\n\nRemove all  [target-lock] and [battlestations] Tokens beside the attacking ship. Place an [aux] beside this ship and the attacking ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E175",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Make It So",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card.\n\nThis ship may perform two Actions on Admiral Cards, Captain Cards, and/or [crew_text] Upgrades equipped to it as a Free Actions.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T164",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Reinforced Bulkheads",
		cost: 3,
		text: "<b>WHEN DEFENDING:</b> When this ship receives a face up Damage Card:\n\nTurn that Damage Card face down unless it is a \"Warp Core Breach\".",
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T163",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Exocomp",
		cost: 4,
		text: "<b>PLANNING PHASE:</b> Place 2 [time] Tokens on this card.\n\nRepair 1 damage to this ship's Hull.",
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W170",
		gameId: 1,
		set: [
			"2017core",
			"71510"
		],
		name: "Tactical Station",
		cost: 4,
		text: "Add 1 [weapon_text] to this ships Upgrade Bar.\n-----------------------------\n<b>WHEN ATTACKING:</b> Disable this card.\nThis ship rolls +1 attack die this game round.\n-----------------------------\n<b>WHEN ATTACKING:</b> Discard this card.\nThis ship rolls +2 attack dice this game round.\n<b>( ERRATA )</b>",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W168",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Disruptor Cannon",
		cost: 2,
		text: "<b>ATTACK:</b> Disable this card and target an opposing ship.\n\nIf this defending ship has an [aux] Token beside it the ship rolls +1 attack die.",
		RearArc: true,
		range: "1 - 2",
		attack: 5,
		factions: [
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W167",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Torpedo Fusillade",
		cost: 0,
		text: "The cost and Attack Value of this [weapon_text] are equal to this ship's Primary Weapon Value.\n-----------------------------------\n<b>ATTACK:</b> Remove this card from the game and target all opposing ships.\n\nMake a separate attack roll against each target ship.",
		unique: true,
		FrontArc: true,
		range: "2 - 3",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C290",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Worf",
		cost: 5,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked:\n\nConvert all [blank] to [hit].",
		unique: true,
		shipKlingon: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C289",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Kurn",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card.\n\nEquip a [weapon_text] Upgrade with a cost of 5 SP or less that was discarded from this ship to this ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C288",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Klingon Helmsman",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> Place 2 [time] Tokens on this card.\n\nPerform a [scan] Action as a Free Action.",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C287",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Toral",
		cost: 2,
		unique: true,
		text: "<b>WHEN DEFENDING:</b>\n\nThis ship may convert 1 [battlestations] into 1 [evade].",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C286",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Klingon Bekk",
		cost: 1,
		text: "<b>WHEN ATTACKING:</b> Discard this card.\n\nConvert 1 [hit] into 1 [crit].",
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C285",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Geordi La Forge",
		cost: 3,
		unique: true,
		text: "<b>ACTIVATION PHASE:</b> After this ship reveals its Maneuver, place 2 [time] Tokens on this card.\n\nThis ship may increase or decrease the speed of the revealed Maneuver by 2. The color of the Maneuver (Red, White, Green) is the same as the revealed Maneuver. This ship cannot perform an Action the game round this effect is activated.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C284",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Miles O'Brien",
		cost: 2,
		unique: true,
		text: "<b>PLANNING PHASE:</b> Disable this card.\n\nRemove a Disable Token from a [tech_text] or [weapon_text] Upgrade equipped to this ship.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C283",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Deanna Troi",
		cost: 2,
		unique: true,
		range: "1 - 3",
		text: "<b>PLANNING PHASE:</b> After all ships have chosen their Maneuver, discard this card and target two opposing ships.\n\nLook at the Maneuver dials of the target ships. Then, this ship may change its chosen Maneuver. The  target ships' Maneuvers may not be changed for the rest of the game round.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C282",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Beverly Crusher",
		cost: 3,
		unique: true,
		text: "<b>ACTIVATION PHASE:</b> Disable this card.\nRemove a Disabled Token from a [crew_text] Upgrade equipped to this ship.\n-----------------------------\n<b>ACTION:</b> Discard this card.\nEquip a [crew_text] Upgrade with a cost of 4 SP or less that was discarded from this ship to this ship.",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C281",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Christopher Hobson",
		cost: 2,
		unique: true,
		text: "<b>WHEN ATTACKING:</b> If the defending ship is Cloaked:\n\nThe defending ship rolls -2 defense dice.",
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E174",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Blood Oath",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card, target a Captain equipped to an opposing ship, and target the Captain equipped to this ship.\nThe controllers of the target Captains both roll 5 attack dice. Whoever rolls the most [battlestations], re-rolling ties, adds +2 to their target Captain's Captain Skill for the rest of the game. The other player must discard their target Captain.",
		unique: true,
		captainKlingon: true,
		range: "1 - 3",
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E173",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "Today Is A Good Day To Die",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card.\n\nAll ships may convert all [hit] into [crit] this game round.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T162",
		gameId: 1,
		set: [
			"72302p"
		],
		name: "Sabotaged Systems",
		cost: 3,
		range: "1 - 3",
		text: "<b>PLANNING PHASE:</b> Discard this card and target an opposing ship.\n\nSwap the Primary Weapon Value and Agility of the target ship until the end of the game round.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C280",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Tellarite Bounty Hunter",
		cost: 1,
		range: "1 - 2",
		text: "<b>WHEN THIS CARD WOULD BE DISCARDED:</b>\n\n Discard an [evade] Token beside an opposing ship.",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W166",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Triphasic Emitters",
		cost: 2,
		attack: "?",
		range: "?",
		text: "<b>SETUP:</b> Choose a Non-Borg [weapon_text] Upgrade with a cost of 5 SP or less and place it face down beneath this card.\n<b>ATTACK:</b> Discard this card.\n\nFlip the card that is beneath this card face up and perform the attack listed on that card (if possible). After the attack resolves, discard that card.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T161",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Propulsion Matrix",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> If this ship reveals a 3 [straight] Maneuver:\n\nThis ship may perform a 4 [straight] or a 5 [straight] Maneuver instead. If it does, place an [aux] Token beside this ship.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T160",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Repair Protocol",
		cost: 4,
		text: "<b>END PHASE:</b> Place 3 [time] Tokens on this card.\n\nRepair 1 damage to this ship's Shields or Hull.\n<i>(Romulan Drone Ship Only)</i>",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W165",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Tellarite Disruptor Banks",
		cost: 3,
		attack: 4,
		range: "1 - 3",
		text: "<b>ATTACK:</b> Place 3 [time] Tokens on this card.\n\nIf there is at least 1 uncancelled [hit], modify the defender's Agility Value by -1 until the end of the game round.",
		OnePerShip: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T159",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Evasive Protocol",
		cost: 3,
		text: "<b>COMBAT PHASE:</b> If this ship is in the Primary or Secondary Firing Arc of an opposing ship, place 3 [time] Tokens on this card.\n\nPerform a [sensor-echo] Action as a Free Action. If this ship does, also remove an opposing  [target-lock] Token from this ship.\n<i>(Romulan Drone Ship Only)</i>",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T158",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Disguise Protocol",
		cost: 4,
		text: "<b>WHEN DEFENDING:</b> Place 3 [time] Tokens on this card.\n\nThe attacking ship rolls -2 attack dice.\n<i>(Romulan Drone Ship Only)</i>",
		OnePerShip: true,
		shipLimit: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W164",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Thoron Shock Emitter",
		cost: 2,
		attack: 6,
		range: "1 -3",
		text: "<b>ATTACK:</b> Discard this card.\n\nThis ship may re-roll any number of attack dice.\n\n(<i>Cardassian ATR-4107</i>)",
		unique: false,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W163",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Plasma Wave",
		cost: 3,
		attack: 4,
		range: "1",
		text: "<b>ATTACK:</b> Place 2 [time] Tokens on this card and target all opposing ships. \n\n\n(<i>Cardassian ATR-4107</i>)",
		unique: true,
		shipLimit: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W162",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Plasma Pulse",
		cost: 3,
		range: "1 - 2",
		attack: 4,
		text: "<b>Attack:</b> Discard this card.\n\nThe defending ship cannot spend [battlestations] or [evade] Tokens\n\n<b>WHEN DEFENDING:</b> Discard this card\n\nThe attacking ship suffers 1 [crit].",
		OnePerShip: true,
		FrontArc: true,
		RearArc: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W161",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Quantum Torpedoes",
		cost: 3,
		range: "2 - 3",
		attack: 5,
		text: "<b>Attack:</b>Spend this ship's  [target-lock] Token and place 2 [time] Tokens on this card. \n\nIf this attack hits, add 1 [hit] or add 2 [hit] if this [weapon_text] is equipped to a Cardassian ATR-4107.",
		FrontArc: true,
		RearArc: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "question",
		id: "Q011",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Captured",
		cost: 1,
		text: "This Upgrade does not require an Upgrade Slot\n\nThis ship gains the <img src='https://i.imgur.com/9h5vl1r.png' width='20' height='20'> Faction.\n\n<b>WHEN DEFENDING:</b> If the attacking ship shares a Faction with this ship other than <img src='https://i.imgur.com/9h5vl1r.png' width='20' height='20'>:\n\nThe attacking ship rolls +1 attack dice",
		OnePerShip: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T157",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "B'Elanna's Codes",
		cost: 3,
		text: "<b>IF ONE OR MORE [time] TOKENS WOULD BE PLACED ON A [weapon_text] UPGRADE EQUIPPED TO THIS SHIP:</b>\nPlace those [time] Tokens on this card instead.\n\n<b>WHEN A [weapon_text] UPGRADE EQUIPPED TO THIS SHIP WOULD BE DISCARDED:</b>\nDiscard this Card instead.</b>",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T156",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Final Stage Targeting",
		cost: 3,
		text: "This ship can only target ships that it has a [target-lock] Token on.\n\n<b>WHEN ATTACKING:</b>\nDefending ships must skip the Modify Defense Dice step.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T155",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Shield Adaptation",
		cost: 5,
		text: "Discard this card if this ship has no active Shields.\n\n<b>WHEN DEFENDING:</b> The attacking ship rolls -2 attack dice when firing a Primary Weapon and -1 when firing a [weapon_text] Upgrade.",
		unique: true,
		hullConstraint: "4+",
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C279",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "B'Elanna Torres",
		cost: 1,
		text: "<b>WHEN ATTACKING:</b>\n\nThis ship may re-roll 1 [blank] . If the defending ship is a <img src='https://i.imgur.com/l7seIMt.png' width='20' height='20'> Ship, this ship may also convert 1 [blank] into 1 [hit].",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E172",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "DNA Encoded Message",
		cost: 5,
		text: "<b>SETUP:</b> Place 3 Klingon [talent_text] Upgrades face down beneath this card.\n<b>ACTIVATION PHASE:</b> Discard this card.\nFlip 1 of the Klingon [talent_text] Upgrades beneath this card face up and equip it to the Captain equipped to this ship, even if it exceeds this ship's restrictions. Remove the other 2 face down Klingon [talent_text] Upgrades from the game.\n<b>( ERRATA )</b>",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C278",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Goroth",
		cost: 2,
		range: "1 - 2",
		text: "Add 1 [crew_text] to this ships Upgrade Bar.\n\n<b>ACTION:</b> Discard this card and discard 1 [crew_text] Upgrade, and target an opposing ship.\n\nDisable the Captain equipped to the target ship. ",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C277",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Kolos",
		cost: 3,
		text: "<b>IF THE CAPTAIN EQUIPPED TO THIS SHIP WOULD BE DISABLED OR DISCARDED:</b>\n\nDiscard this card instead. ",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W160",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Photon Torpedoes",
		cost: 2,
		attack: 4,
		range: "2 - 3",
		FrontArc: true,
		RearArc: true,
		text: "<b>ATTACK:</b> If this ship has a  [target-lock] Token on the defending ship, place 2 [time] Tokens on this card.\n\nThis ship my convert 1 [battlestations] into a [crit].",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T154",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Dispersive Armor",
		cost: 4,
		text: "<b>WHEN DEFENDING:</b> Disable this card.\n\nThis game round, replace the attacking ship's Primary Weapon Value with 4. For the remainder of the game round, the attacking ship's Primary Weapon Value can not be replaced or modified.",
		unique: false,
		OnePerShip: true,
		hullConstraint: "3+",
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T153",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Reactor Pit",
		cost: 3,
		text: "<b>PLANNING PHASE:</b> Disable this card.\n\nRemove an [aux] Token from beside this ship. ",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "question",
		id: "Q010",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "Photon Detonation",
		cost: 3,
		range: "1 - 2",
		text: "This card counts as either a [tech_text] Upgrade or a [weapon_text] Upgrade.\n\n<b>ACTION:</b> Disable this card, place 3 [time] Tokens on a Photon Torpedoes Upgrade equipped to the ship, and target a Minefield Token\n\nRemove the Minefield Token from play. ",
		unique: false,
		factions: [
			"klingon"
		],
		countsAsUpgrade: true
	},
	{
		type: "talent",
		id: "E171",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "Captain's Discretion",
		cost: 4,
		text: "<b>FREE ACTION:</b> Discard this card.\n\nPerform the Action of a [crew_text] Upgrade equipped to this ship.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C276",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "David Marcus",
		cost: 3,
		text: "<b>IF A [crew_text] UPGRADE EQUIPPED TO THIS SHIP WOULD BE DISCARDED:</b>\nDiscard this card instead.\n\n<b>WHEN DEFENDING:</b> Discard this card. Add 1 [evade].",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C275",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "Saavik",
		cost: 1,
		range: "1 - 2",
		text: "<b>WHEN DEFENDING:</b> If this ship is within Range of a Planet token.\n\nThis ship may convert one [blank] into 1 [evade].",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C274",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "Federation Helmsman",
		cost: 3,
		text: "<b>ACTION:</b> Place an [aux] Token beside this ship.\n\nPerform a White 1 [straight], 1 [bank-left] or 1 [bank-right] Maneuver.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T152",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "Comm Station",
		cost: 4,
		range: "1 - 2",
		text: "Add 1 [crew_text] to this ship's Upgrade Bar.\n\n<b>ACTIVATION PHASE:</b> Disable this card and target a friendly ship.\n\nThis game round, replace the Captain Skill on this ship's Captain with the Captain Skill of the target ship's Captain.",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T151",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "Close-Range Scan",
		cost: 3,
		text: "<b>ACTIVATION PHASE:</b> If this ship performed a [scan] Action, disable 1 Shield.\n\nPlace a [scan] Token beside this ship.",
		OnePerShip: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T150",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "Genesis Effect",
		cost: 2,
		range: "1 - 3",
		text: "<b>SETUP:</b> Place 1 [crew_test] Upgrade with a cost of 5 SP or less face down beneath this card.\n\n<b>END PHASE:</b> If this ship is within Range 1-3 of a Planet Token, disable all of its Shields.\n\nFlip the [crew_text] Upgrade beneath this card face up, place 2 [time] Tokens on it and equip it to this ship, even if it exceeds its restrictions. ",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C273",
		gameId: 1,
		set: [
			"72011wp",
			"71801"
		],
		name: "William T. Riker",
		cost: 4,
		text: "Modify the Captain Skill of the Captain equipped to this ship by +3.\n<b>IF THE CAPTAIN EQUIPPED TO THIS SHIP IS DISABLED OR DISCARDED:</b>\nThis ship's Captain Skill is 5.\n<b>IF THIS SHIP RECEIVES A FACE UP 'COMMUNICATIONS FAILURE' OR 'INJURED CAPTAIN' DAMAGE CARD:</b>\nFlip that damage card face down.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C272",
		gameId: 1,
		set: [
			"72301rp"
		],
		name: "Data",
		cost: 5,
		range: "1 - 2",
		text: "<b>ACTION:</b> Discard this card and target an opposing ship.\n\nRoll one attack die and consult the below chart:\n[crit]:Discard a card of your choice on the target ship.\n[battlestations]: Discard the Captain of the target ship.\n[hit]:Discard a [crew_text] on the target ship,\n[blank] : Nothing happens.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E170",
		gameId: 1,
		set: [
			"72300p"
		],
		name: "Quick Thinking",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to immediately perform a [sensor-echo] Action, even if your ship is not cloaked.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T149",
		gameId: 1,
		set: [
			"72300p"
		],
		name: "Impulse Thrusters",
		cost: 4,
		text: "<b>ACTION</b> If your ship executed a [straight] maneuver with a speed of 3 or less this round, disable this card to immediately execute an additional 1 [straight] maneuver.\n\nNo ship may be equipped with more than one \"Impulse Thrusters\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W159",
		gameId: 1,
		set: [
			"72300p"
		],
		name: "Pulse Phased Weapons",
		attack: 3,
		range: 1,
		cost: 5,
		text: "<b>ATTACK:</b> Place 3 Time Tokens on this card to perform this attack. Make 2 separate attacks with this weapon. These attacks are defended against separately and may be used against different ships.\n\nYou may only fire this weapon from your forward firing arc and may not increase the number of dice rolled in your attack.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C271",
		gameId: 1,
		set: [
			"72300p"
		],
		name: "B'Elanna Torres",
		cost: 3,
		text: "If your ship ends its move overlapping another ship's base, you may discard this card to perform an Action from your ship's Action Bar.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W158",
		gameId: 1,
		set: [
			"72290p"
		],
		name: "Aft Photon Torpedoes",
		cost: 4,
		range: "2 - 3",
		attack: 4,
		text: "<b>ATTACK: Target Lock</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\nYou may convert 1 of your [battlestations] results into a [crit] result.\nYou may only target a ship that is not in your forward firing arc with this attack.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C270",
		gameId: 1,
		set: [
			"72290p"
		],
		name: "Assault Team",
		cost: 5,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card to place 2 Time Tokens on all Upgrades on the target ship that do not already have Time Tokens on them.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "crew",
		id: "C269",
		gameId: 1,
		set: [
			"72290p"
		],
		name: "Charles Tucker III",
		cost: 4,
		text: "<b>ACTION:</b> Disable this card to remove up to 2 Disabled Upgrade Tokens or up to 4 Time Tokens from any of your [tech_text] or [weapon_text] Upgrades.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "crew",
		id: "C268",
		gameId: 1,
		set: [
			"72290p"
		],
		name: "T'Pol",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to target a ship within Range 1-3. Disable 1 [crew_text] Upgrade and/or 1 [tech_text] or [weapon_text] Upgrade on the target ship.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "talent",
		id: "E169",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Patience is for the Dead",
		cost: 5,
		text: "At the start of the Combat Phase, before any ships have attacked, you may discard this card to attack before all other ships. You cannot roll any defense dice during the round you use this ability.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W157",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Xindi Torpedoes",
		attack: 4,
		cost: 3,
		range: "2 - 3",
		text: "<b>ATTACK:</b> Target Lock, Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nIf fired from a Xindi Reptilian Warship add +1 attack dice.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W156",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Particle Beam Weapon ",
		cost: 0,
		attack: "*",
		range: "1 - 3",
		text: "<b>ATTACK:</b> The Attack Value of this weapon is equal to the ship's Primary Weapon Value +1.\n\nThis Upgrade may only be purchased for a Xindi ship and the SP cost is equal to the ship's Primary Weapon Value.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C267",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Reptilian Analysis Team",
		cost: 5,
		text: "Add 1 [tech_text] Upgrade to your Upgrade Bar.\nWhen you are supposed to disable a [tech_text] Upgrade, you may disable this card instead and place 3 Time Tokens on the [tech_text] Upgrade. (2 Time Tokens if it is a Xindi [tech_text] Upgrade).\n\nThis Upgrade may only be purchased for a Xindi ship and no ship may be equipped with more than one 'Reptilian Analysis Team' Upgrade.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T148",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Thermal Chamber",
		cost: 3,
		text: "<b>ACTION:</b> Remove all Disabled Upgrade Tokens from all of your Xindi [crew_text] Upgrades and add +4 to your Captain Skill number for this round.\n\nThis Upgrade may only be purchased for a Xindi-Reptilian warship.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T147",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Sensor Encoders",
		cost: 3,
		text: "When defending, you may disable this card to re-roll 1 of your defense dice.\nIf a friendly ship is destroyed, you may discard this card. If you do so, your ship gains +1 Agility for the rest of the game. \n\nThis Upgrade may only be purchased for a Xindi-Reptilian warship and no ship may be equipped with more than one \"Sensor Encoders\" Upgrade.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E168",
		gameId: 1,
		set: [
			"72284p"
		],
		name: "Dispersal Pattern Sierra",
		cost: 5,
		text: "When attacking with Photon Torpedoes, during the Declare Target Step you may discard this card to target 2 or 3 different ships in your forward firing arc with this attack. If you target 2 different ships, each attack is at -1 attack die. If you target 3 different ships, each attack is at -2 attack dice.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T146",
		gameId: 1,
		set: [
			"72284p"
		],
		name: "Transporter",
		cost: 3,
		text: "<b>ACTION:</b> Disable this card to target a friendly ship within Range 1-2 and disable all remaining shields on both ships. Then switch 1 [crew_text] Upgrade between this ships.\n\nNo Ship may be equipped with more than one \"Transporter\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W155",
		gameId: 1,
		set: [
			"72284p"
		],
		name: "Aft Phaser Emitters",
		cost: 0,
		attack: "*",
		range: "1 - 3",
		text: "<b>ATTACK:</b> You may fire this weapon from your rear firing arc. This attack value is equal to the ships Primary Weapon value -1\n\nThis Upgrade may only be purchased for a Federation ship with a Hull value of 4 or greater and the SP cost is equal to the ships Primary Weapon Value.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C266",
		gameId: 1,
		set: [
			"72284p"
		],
		name: "Natasha Yar",
		cost: 4,
		text: "Add 2 [weapon_text] Upgrade slots to your Upgrade Bar.\n\nWhen attacking, during the Modify Attack Dice step you may place 2 Time Tokens on this card to re-roll up to three of your attack dice.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W154",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Xindi Torpedoes",
		attack: 4,
		cost: 3,
		range: "2 - 3",
		text: "<b>ATTACK:</b> Target Lock, Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nIf fired from a Xindi Aquatic Cruiser add +1 attack dice.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T145",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Biometric Hologram",
		cost: 5,
		text: "When attacking, during the Roll Attack Dice step, you may discard this card to gain +2 attack dice. If the attack hits, disable all [crew_text] Upgrades on the defending ship.\n\nThis Upgrade may only be purchased for a Xindi ship and no ship may be equipped with more then one \"Biometric Hologram\" Upgrade.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T144",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Subspace Vortex",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to execute an additional 4[straight], 5[straight] or 6[straight] Maneuver. Place an Auxiliary Power Token beside your ship.\n\nThis Upgrade costs +5 for any non-Xindi ship.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T143",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Trellium-D",
		cost: 4,
		text: "Place 2 Mission Tokens on this card. During the Compare Results step, you may discard up to 2 of these Tokens to cancel one [hit] or [crit] result for each Token discarded.\n\nThis Upgrade costs +4 SP for any non-Xindi ship and no ship may be equipped with more than one \"Trellium-D\" Upgrade.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C265",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Raijin",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. Chose 1 Upgrade on the target ship and place 2 Time Tokens on that Upgrade.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E167",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Retaliation",
		cost: 5,
		text: "When another ship in your fleet is destroyed, discard this card to immediately make an attack with your Primary Weapon at -1 attack die. This attack is in addition to your normal attack for the round. If there is no ship to target with this additional attack, place a Mission Token on this card instead of discarding it. If you do this on your next attack discard this card to gain +3 attack dice for that attack. This Upgrade may only be purchased for a Xindi Captain assigned to a Xindi ship.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E166",
		gameId: 1,
		set: [
			"72282gp"
		],
		name: "Klingon-Romulan Alliance",
		cost: 4,
		text: "If your ship is within Range 1-2 of a friendly Klingon or Romulan ship, you may discard this card to re-roll any number of your defense dice.\n\nThis card may only be fielded by a Klingon or Romulan Captain assigned to a Klingon or Romulan Ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E165",
		gameId: 1,
		set: [
			"72282gp"
		],
		name: "Reverse Course",
		cost: 5,
		text: "During the Activation Phase, you may discard this card to disregard your chosen maneuver and execute a Full Astern [reverse] Maneuver with a speed of 1 or 2.\n\n<b>( ERRATA )</b>",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C264",
		gameId: 1,
		set: [
			"72282gp"
		],
		name: "Tokath",
		cost: 2,
		text: "<b>ACTION:</b> Discard this card to remove 2 Disabled Upgrade Tokens from your other Upgrades.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T142",
		gameId: 1,
		set: [
			"72282gp"
		],
		name: "Tachyon Pulse",
		cost: 4,
		text: "When defending, during the Roll Defense Dice step, you may disable this card to roll +1 defense die (+2 defense dice if the attacking ship has a [scan] Token beside it).\n\nNo ship may be equipped with more than one \"Tachyon Pulse\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E164",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "Interrogation",
		cost: 5,
		text: "When attacking, during the Roll Attack Dice step, you may discard this card to gain a number of attack dice equal to 1 plus the number of Upgrades on the defending ship (max +3).\n\nThis Upgrade may only be fielded by a Klingon Captain assigned to a Klingon Ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E163",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "Enemy Of The Empire",
		cost: 5,
		text: "When attacking, during the Roll Attack Dice step, you may discard this card to gain +1 attack die. If the defending ship is a Klingon ship or a ship with a Klingon Captain or Upgrade assigned to it, disable his card instead of discarding it.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C263",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "Kulge",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to disable your Captain Card and place a [battlestations] Token beside your ship.\n\nWhile your Captain Card is disabled your Captain Skill is \"0\" and your ship may perform the [battlestations] Action as if it were on your Action Bar.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T141",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "Aft Shields",
		cost: 4,
		text: "If you are not Cloaked and defending against an attack from a ship that is not in your forward firing arc, during the Compare Results step, you may discard this card to cancel up to 2 of attacking ship's [hit] or [crit] results. If you do so, place an Auxiliary Power Token beside your ship.\n\nNo ship may be equipped with more than one \"Aft Shields\" Upgrade.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C262",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "Lursa",
		cost: 3,
		talents: 1,
		text: "You may perform a [cloak] or a [sensor-echo] Action as a free action, if your ship has the appropriate Action on its Action Bar\n\nIf B'Etor is the Captain of your ship, you may fill one of your [crew_text] Upgrade slots with this card and gain +4 to your Captain Skill.\n(Not a physical card, used internally on Utopia, can only be equipped as crew if B'Etor is your captain.)",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C261",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "B'Etor",
		cost: 3,
		talents: 1,
		text: "A friendly ship within Range 1-2 of your ship may use the Action or Ability of your [talent_text] Upgrade as if it were assigned to that ship.\nIf Lursa is the Captain of your ship, you may fill one of your [crew_text] Upgrade slots with this card and gain +4 to your Captain Skill. \n(Not a physical card, used internally on Utopia, can only be equipped as crew if Lursa is your captain.)",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E162",
		gameId: 1,
		set: [
			"72281p"
		],
		name: "On My Command",
		cost: 5,
		text: "During the Combat Phase, when it is your turn to attack, you may discard this card to delay your attack until after all other ships have completed their attacks, if you do so, roll +2 attack dice for your first attack during the round you use this ability.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C260",
		gameId: 1,
		set: [
			"72281p"
		],
		name: "Toral",
		cost: 4,
		text: "During the Modify Defense Dice step, you may discard this card to re-roll up to 2 of your defense dice.\n\nIf this card is deployed to a Klingon Ship, you may disable it instead of discarding it.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T140",
		gameId: 1,
		set: [
			"72281p"
		],
		name: "Auxiliary Power to Shields",
		cost: 4,
		text: "When defending, during the Deal Damage step, you may discard this card to immediately repair up to 2 of your Shields that were destroyed with that attack. Place 1 Auxiliary Power Token beside your ship for each Shield Token you repaired with this ability.\n\nNo ship may be equipped with more than one \"Auxiliary Power to Shields\" Upgrade.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "question",
		id: "Q016",
		gameId: 1,
		set: [
			"72281p"
		],
		name: "Course Change",
		cost: 4,
		text: "This card may fill a [crew_text], [talent_text], [tech_text], or [weapon_text] Upgrade slot. During the Activation Phase, when you reveal your maneuver, you may discard this card to change your maneuver to any maneuver on your Maneuver Dial.\n\nNo ship may be equipped with more than one 'Course Change' Upgrade.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E161",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Thalen",
		cost: 5,
		text: "Add 1 [weapon_text] Upgrade slot to your Upgrade bar. If the additional [weapon_text] Upgrade is a Xindi [weapon_text] Upgrade, its cost is -2 SP.\n\nWhen firing a secondary weapon, you may disable this card to gain +1 attack die (max 6).",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E160",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Xindi Council",
		cost: 4,
		text: "Place 1 Mission Token on this card for each damage your ship suffers to its Hull or Shields (max 4).\nWhen attacking or defending, you may discard this card to re-roll a number of your attack or defense dice up to the number of Mission Tokens on this card.\nThis card may only be fielded by a Xindi Captain assigned to a Xindi Ship.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C259",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Insecetoid Raiding Party",
		cost: 3,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at range 1-2 that is not Cloaked and has no Active Shields. Discard this card to discard any Upgrade with a cost of 5 SP or less on the target ship. This Upgrade costs +5 SP if purchased for any ship other than a Xindi ship and no ship may be equipped with more than one 'Insectoid Raiding Party' Upgrade.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W153",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Pulse-Firing Particle Cannon",
		cost: 4,
		attack: 3,
		range: "1 - 3",
		text: "<b>ATTACK:</b> Disable this card to perform this attack. You may only fire this weapon from your forward firing arc.\nIf this attack hits, you may immediately make a second attack with this weapon against the same target and -1 attack die. The target ship rolls 1 less defense die against the second attack.\nThis Upgrade costs +5 if purchased for a non-Xindi ship.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W152",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Xindi Torpedoes",
		cost: 2,
		attack: 4,
		range: "2 - 3",
		text: "<b>ATTACK:</b> Target Lock: Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nYou may only fire this weapon from your forward firing arc.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T139",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Hatchery",
		cost: 2,
		text: "Add 1 [crew_text] Upgrade slot to your Upgrade Bar. At the start of the game, during the Gather Forces step, place a Xindi [crew_text] Upgrade face down beneath this card. When one of your other [crew_text] Upgrades is discarded discard this card and flip the card beneath this card face up. That card is now deployed to your ship and may be used normally. This Upgrade may only be purchased for a Xindi ship and no ship may have more than one \"Hatchery\" Upgrade.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E159",
		gameId: 1,
		set: [
			"72280p"
		],
		name: "Cry of the Warrior",
		cost: 5,
		text: "When attacking, during the Roll Attack Dice step, you may discard this card to gain +1 attack die for each opposing ship that has your ship in its forward firing arc (max +3). The next time your ship rolls defense dice roll -1 defense die for each additional attack die you gained with this ability.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E158",
		gameId: 1,
		set: [
			"72280p"
		],
		name: "Aim and Fire!",
		cost: 5,
		text: "When attacking with your Primary Weapon, you may discard this card to target a ship at Range 1-2. The target ship cannot re-roll any of its defense dice against that attack.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C258",
		gameId: 1,
		set: [
			"72280p"
		],
		name: "Worf",
		cost: 3,
		text: "When attacking a ship with no Active Shields, you may disable this card to gain +1 attack die. Your ship cannot roll any defense dice during the round in which you use this ability.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T138",
		gameId: 1,
		set: [
			"72280p"
		],
		name: "Emergency Override",
		cost: 2,
		text: "<b>ACTION:</b> If you executed a green maneuver this round, disable this card to repair 1 of your Shields.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C257",
		gameId: 1,
		set: [
			"72263"
		],
		name: "Demora Sulu",
		cost: 4,
		text: "If your ship is hit, after the Deal Damage phase, you may discard this card to immediately execute a maneuver from your Maneuver Dial with a speed of 3 or less.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T137",
		gameId: 1,
		set: [
			"72263"
		],
		name: "Holo-Communicator",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card and target a Captain equipped to a friendly ship.\n\nThis ship performs the Action listed on the target Captain as a Free Action.\n\n<b>( ERRATA )</b>",
		unique: true,
		range: "1 - 2",
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T136",
		gameId: 1,
		set: [
			"72263"
		],
		name: "Full Reverse",
		cost: 2,
		text: "During the Activation Phase if you reveal a [reverse] Maneuver, you may disable this card to add 1 to the speed of that maneuver.\n\nNo ship may be equipped with more than one \"Full Reverse\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T135",
		gameId: 1,
		set: [
			"72263"
		],
		name: "Deflector Control",
		cost: 5,
		text: "<b>ACTION:</b> Repair 1 Shield Token.\nOR\n Discard this card to flip up to 3 of your disabled Shield Tokens over to their Active Sides. You can not use this Action if your ship is Cloaked\n\nNo ship may be equipped with more than one \"Deflector Control\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T134",
		gameId: 1,
		set: [
			"72263"
		],
		name: "Resonance Burst",
		cost: 5,
		text: "When attacking during the Declare target step, you may discard this card to target a ship in your forward firing arc and within Range 1 of your ship. The target ship must discard 1 Token ([evade], [battlestations], [scan], or  [target-lock]) that is beside it of its choice. If there is a [cloak] Token beside the target ship, flip it over to its red side. No ship may be equipped with more than 1 \"Resonance Burs\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W151",
		gameId: 1,
		set: [
			"72263"
		],
		name: "Improved Phasers",
		cost: 3,
		attack: 4,
		range: "1 - 3",
		text: "<b>ATTACK:</b> Place 2 Time Tokens on this card to perform this attack.\n\nTreat this as a attack with your Primary Weapon.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E157",
		gameId: 1,
		set: [
			"72270p"
		],
		name: "Kuvah'Magh",
		cost: 5,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, you may discard this card to gain +1 attack die for that attack for every Klingon [crew_text] Upgrade deployed to your ship (max+3) Then suffer 1 critical damage to your Hull.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C256",
		gameId: 1,
		set: [
			"72270p"
		],
		name: "Morak",
		cost: 5,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable this card to repair 1 of your Shield Tokens\nOR\n<b>ACTION:</b> Discard this card to flip up to 3 of your Disabled Shields over to their Active sides. If you do this while you ship is Cloaked, flip your [cloak] Token to its red side.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C255",
		gameId: 1,
		set: [
			"72270p"
		],
		name: "T'Greth",
		cost: 4,
		text: "<b>ACTION:</b> Place a [battlestations] Token beside your ship. Then place and Auxiliary Power Token beside your ship. You cannot perform a [battlestations] Action this round.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C254",
		gameId: 1,
		set: [
			"72270p"
		],
		name: "Ch’rega",
		cost: 2,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Disable this card and any 2 [crew_text] Upgrades of your choice on the target ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E156",
		gameId: 1,
		set: [
			"72262p"
		],
		name: "Military Secrets",
		cost: 4,
		text: "When attacking, during the Roll Defense Dice step, you may discard this card to force the defending ship to roll 1 less defense die. -2 defense dice if that ship is Cloaked.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T133",
		gameId: 1,
		set: [
			"72262p"
		],
		name: "Control Central",
		cost: 4,
		text: "After performing your Action, you may disable this card to perform one of the Actions on your Action Bar as a free Action.\n\nNo ship may be equipped with more then one \"Control Central\" Upgrade.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W150",
		gameId: 1,
		set: [
			"72262p"
		],
		name: "Main Batteries",
		cost: 3,
		attack: 3,
		range: "1 - 3",
		text: "Add 1 [weapon_text] Upgrade icon to your Upgrade Bar.\n\n<b>ATTACK:</b> Place 2 Time Tokens on this card to perform this attack. Treat this attack as if it were an attack made with a Primary Weapon. No ship may be equipped with more then one \"Main Batteries\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C253",
		gameId: 1,
		set: [
			"72262p",
			"72301rp"
		],
		name: "Nanclus",
		cost: 5,
		range: "1-3",
		text: "<b>ACTION:</b> Discard this card to target an opposing ship.\n\n This game round, the target ship rolls +1 attack die this round but cannot roll defense dice.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E155",
		gameId: 1,
		set: [
			"72253"
		],
		name: "Galaxy Wing Squadron",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target all friendly Galaxy-class ships within Range 1-2. Target ships gain +1 attack die this round.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W149",
		gameId: 1,
		set: [
			"72253"
		],
		name: "Additional Phaser Arrays",
		cost: 5,
		text: "After you make an attack with your Primary Weapon, you may disable this card to make an additional attack with your Primary Weapon at -2 attack dice.\n\nNo ship may be equipped with more than 1 \"Additional Phaser Arrays\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T132",
		gameId: 1,
		set: [
			"72253"
		],
		name: "Maximum Warp",
		cost: 5,
		text: "<b>ACTION:</b> If you perform a [straight] Maneuver this round, you may disable this card to immediately perform an additional [straight] Maneuver with a speed of 2 or less. You cannot perform any free Actions this round.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T131",
		gameId: 1,
		set: [
			"72253"
		],
		name: "High-Capacty Deflector Shield Grid",
		cost: 5,
		text: "If you have at least 1 Active Shield, during the Compare Results step you may discard this card to negate up to 2 damage.\n\nNo ship may be equipped with more than 1 \"High-Capacity Deflector Shield Grid\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q017",
		gameId: 1,
		set: [
			"72253"
		],
		name: "Computer Core",
		cost: 5,
		text: "You can fill a [crew_text] or [weapon_text] Upgrade slot with this Upgrade. Add 1 [tech_text] Upgrade to your Upgrade Bar.\n\n<b>ACTION:</b> You may re-roll any 1 die this round.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E154",
		gameId: 1,
		set: [
			"72261p"
		],
		name: "Task Force",
		cost: 5,
		text: "<b>ACTION:</b> Choose a faction. All friendly ships within Range 1-2 of your ship gain +1 Attack die and roll +1 Defense die against ships of that faction for this round.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W147",
		gameId: 1,
		set: [
			"72261p"
		],
		name: "High Yield Photon Torpedoes",
		cost: 6,
		attack: 6,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nYou may convert 1 of your [battlestations] results into 1 [crit] result.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T130",
		gameId: 1,
		set: [
			"72261p"
		],
		name: "Deuterium Tank",
		cost: 3,
		text: "You may disable this card just before you move to treat a red maneuver as a white maneuver.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q009",
		gameId: 1,
		set: [
			"72261p"
		],
		name: "Delta Shift",
		cost: 5,
		text: "This Upgrade may be assigned to any ship without requiring an Upgrade slot.\n\nWhen one of your [crew_text] Upgrades is supposed to be disabled or discarded, you may discard this card instead. No ship may be equipped with more than one \"Delta Shift\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C252",
		gameId: 1,
		set: [
			"72260p"
		],
		name: "Hikaru Sulu",
		cost: 3,
		text: "If you execute a red maneuver, you may disable this card instead of placing an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C251",
		gameId: 1,
		set: [
			"72260gp"
		],
		name: "Leonard McCoy",
		cost: 4,
		text: "During the Activation Phase, after you move, you may discard this card to perform the Action listed on your ship's Captain Card as a free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C250",
		gameId: 1,
		set: [
			"72260gp"
		],
		name: "Valeris",
		cost: 3,
		text: "After your ship executes a green maneuver, you may perform an [evade] Action as a free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W146",
		gameId: 1,
		set: [
			"72260gp"
		],
		name: "Torpedo Bay",
		cost: 2,
		text: "Add 1 [weapon_text] Upgrade slot to your Upgrade Bar. This Upgrade must be filled with a Photon Torpedoes Upgrade.\n\nWhen Placing Time Tokens on one of your Photon Torpedoes Upgrades, if there are no Time Tokens on this card, you may place them on this card instead.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T129",
		gameId: 1,
		set: [
			"72260gp"
		],
		name: "Isolation Door",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to flip over all critical damage assigned to your ship and then repair 1 damage to your ship's Hull.\n\nNo ship may be equipped with more then one \"Isolation Door\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C249",
		gameId: 1,
		set: [
			"72260p"
		],
		name: "Pavel Chekov",
		cost: 4,
		text: "At the end of the Activation Phase, you may disable this card and place an Auxiliary Power Token beside your ship to flip up to 2 of your disabled Shield Tokens (red) back to their Active sides (blue).",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C248",
		gameId: 1,
		set: [
			"72260p"
		],
		name: "Montgomery Scott",
		cost: 4,
		text: "Add 1 Upgrade slot to your Upgrade bar ([tech_text] or [weapon_text]).\n\nAt any time, you may disable this card to remove an Auxiliary Power Token from beside your ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C247",
		gameId: 1,
		set: [
			"72260p"
		],
		name: "Nyota Uhura",
		cost: 5,
		text: "At the start of the Combat Phase, you may discard this card to target all opposing ships within Range 1 of your ship. Each target ship must either discard a Token ([evade], [scan], or [battlestations]) that is beside it or place an Auxiliary Power Token beside it.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E153",
		gameId: 1,
		set: [
			"72255"
		],
		name: "I Am The Borg",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to perform this Action. All friendly ships within Range 1-2 of your ship gain +1 attack die this round when attacking.\n\nThis Upgrade may only be assigned to the Borg Queen.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "tech",
		id: "T128",
		gameId: 1,
		set: [
			"72255"
		],
		name: "Temporal Vortex",
		cost: 5,
		text: "When defending, during the Compare Results step you may discard this card and spend 3 of your Drone Tokens to force the attacking ship to redo its attack. All of the dice (attack and defense) are rolled again. All cards and tokens that were used in the original attack remain used and cannot be used in the second attack. This Upgrade may only be purchased for a Borg ship.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "borg",
		id: "B017",
		gameId: 1,
		set: [
			"72255"
		],
		name: "Borg Support Vehicle Dock",
		cost: 0,
		text: "This Upgrade may only be purchased for a Borg Cube. At the start of the game, place a Borg Support Vehicle token (BSVT) on one ship in your fleet.\n\n<b>ACTION:</b> If all of your ship's shields have been destroyed, you may discard this card and spend 1 Drone Token to make your support ship Active. Place an Auxiliary Power Token beside your ship. Your ship cannot attack this round.",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "question",
		id: "Q008",
		gameId: 1,
		set: [
			"72255"
		],
		name: "Borg Support Vehicle Token",
		cost: 0,
		text: "Attach to a Ship with a Hull Value of 7 or less.\n\nThis ship costs -10sp. If this ship is a Borg Sphere this ship costs -15sp.\n\n (Not a physical card, used internally on Utopia)",
		unique: true,
		factions: [
			"borg"
		]
	},
	{
		type: "talent",
		id: "E152",
		gameId: 1,
		set: [
			"72236p"
		],
		name: "Retaliatory Strike",
		cost: 5,
		text: "If your ship was just damaged and the attacking ship is in your forward firing arc and within Range 2-3 of your ship, you may discard this card to immediately perform an attack against the attacking ship with one of your Photon Torpedoes Upgrades. You must discard the Photon Torpedoes Upgrade when your attack is completed. This attack is in addition to your normal attack for the round.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C246",
		gameId: 1,
		set: [
			"72236p"
		],
		name: "Valkris",
		cost: 5,
		text: "<b>ACTION:</b> Target a ship at Range 1-3. Discard this card and disable 1 Upgrade on the target ship ([crew_text], [tech_text], or [weapon_text]). You may immediately use the Action listed on the Upgrade you disabled with this Action as if it were assigned to your ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C245",
		gameId: 1,
		set: [
			"72236p"
		],
		name: "Torg",
		cost: 6,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card and disable all Upgrades on the target ship. The target ship rolls -1 attack die and -1 defense die while any of its Upgrades remain disabled. Once there are no disabled Upgrades on the target ship, remove Torg's Continuous Effect Token from beside the target ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C244",
		gameId: 1,
		set: [
			"72236p"
		],
		name: "Maltz",
		cost: 5,
		text: "<b>ACTION:</b> If your ship is not Cloaked, discard this card to target a friendly ship within Range 1-2 of your ship. Take up to 3 [crew_text] Upgrades from that ship and deploy them to your ship, even if it exceeds your ship's restrictions, OR take up to 3 [crew_text] Upgrades from your ship and deploy them to the target ship, even if it exceeds that ship's restrictions.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E151",
		gameId: 1,
		set: [
			"72242"
		],
		name: "Command Pod",
		cost: 4,
		text: "When defending during the Compare Results step, you may discard this card to cancel any 1 die result.\n\nThis Upgrade may only be fielded by a Captain assigned to a D7-Class ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E150",
		gameId: 1,
		set: [
			"72242"
		],
		name: "Cloaked Attack",
		cost: 5,
		text: "When attacking with your Primary Weapon during the Roll Attack Dice step, you may discard this card and spend your [cloak] Token to gain +2 attack dice.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C243",
		gameId: 1,
		set: [
			"72242"
		],
		name: "Romulan Technical Officer",
		cost: 2,
		text: "<b>ACTION:</b> Disable this card to place a [scan] Token beside your ship. You cannot perform the [scan] Action as a free Action this round. \n\nThis Upgrade may only be purchased for a Romulan ship and no ship may be equipped with more than 1 \"Romulan Technical Officer\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W145",
		gameId: 1,
		set: [
			"71278"
		],
		name: "Plasma Torpedoes",
		cost: 3,
		attack: 4,
		range: "1 - 2",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may re-roll all your blank results one time. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T127",
		gameId: 1,
		set: [
			"72242"
		],
		name: "Impulse Drive",
		cost: 2,
		text: "You may disable this card when you perform a white maneuver if there is an Auxiliary Power Token beside your ship.  If you do so, you must still skip your Perform Action step. You may then remove an auxiliary power token from beside your ship. \nNo ship may be equipped with more than one \"Impulse Drive\" upgrade.\n<b>( ERRATA )</b>",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E149",
		gameId: 1,
		set: [
			"72224gp"
		],
		name: "The Benefactor",
		cost: 5,
		text: "At the start of the game, place 3 Mission Tokens on this card.\n\nWhen you are required to place Time Tokens on one of your Upgrades, you may discard any number of Mission Tokens from this card to place 1 less Time Token for each Mission Token discarded. When there are no more Mission Tokens on this card, discard it.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "crew",
		id: "C242",
		gameId: 1,
		set: [
			"72224gp"
		],
		name: "Daniels",
		cost: 5,
		text: "Whenever an opposing ship is required to place Time Tokens on one of its Upgrades, you may discard this card to force that ship to place 1 additional Time Token on that Upgrade.\nOR\nDuring the Combat Phase, you may discard this card to chose any number of dice and re-roll them.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "tech",
		id: "T126",
		gameId: 1,
		set: [
			"72224gp"
		],
		name: "Temporal Conduit",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to redeploy one of your previously discarded Upgrade cards with a cost of 4 SP or less to your ship. Place 3 Time Tokens on that Upgrade.\n\nThis Upgrade costs +5 SP for any non-Mirror Universe ship.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "question",
		id: "Q020",
		gameId: 1,
		set: [
			"72224gp"
		],
		name: "Temporal Observatory",
		cost: 6,
		text: "You may fill a [crew_text], [tech_text] or [weapon_text] Upgrade slot with his Upgrade.\n<b>ACTION:</b> Place 3 Time Tokens on this card. During the Planning Phase, after all ships have chosen their maneuvers, you may peek at a number of opposing maneuver dials equal to the number of Time Tokens on this card. You may then change your chosen maneuver. Discard this card after the last Time Token is removed.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "talent",
		id: "E148",
		gameId: 1,
		set: [
			"72235p"
		],
		name: "Ceti Eel",
		cost: 6,
		text: "During the Combat Phase, you may discard this card to target a ship within Range 1-3 when it is that ship's turn to attack and force that ship to either; 1) attack any ship of your choice in its firing arc and within range, if possible, 2) not perform its attack and disable the Captain Card, or 3) perform its attack as normal and discard its Captain Card. The target ship must choose one of these options.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E147",
		gameId: 1,
		set: [
			"72235p"
		],
		name: "Fire!",
		cost: 6,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, you may discard this card to gain +2 attack dice. If you do so, during the Modify Attack Dice step, you may re-roll up to 2 of your attack dice and then place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C240",
		gameId: 1,
		set: [
			"72235p"
		],
		name: "Joachim",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to add +3 to your Captain Skill Number until the End Phase of this round. If you attack first in the Combat Phase as a result of this, during the Compare Results step, you may convert 1 of your [hit] results into a [crit] result.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W143",
		gameId: 1,
		set: [
			"72235p"
		],
		name: "All Power To Phasers",
		cost: 5,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, you may discard this card to gain +2 attack dice. If you do this you must disable all of your remaining Shields.",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E146",
		gameId: 1,
		set: [
			"72241"
		],
		name: "Detonation Codes",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to target a Minefield Token within Range 1-3. Roll the number of attack dice listed on the mine's Upgrade Card minus 1. All ships within Range 1 of that Minefield Token suffer damage as normal from any [hit] or [crit] results. The affected ships do not roll any defense dice. Remove the Minefield Token after it is detonated.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T124",
		gameId: 1,
		set: [
			"72241"
		],
		name: "Emergency Power",
		unique: false,
		text: "During the Activation Phase, if there is an Auxiliary Power Token beside your ship, you may disable this card to either perform a Red Manveuer or perform an Action.\n\nNo ship may be equipped with more than 1 \"Emergency Power\" Upgrade.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T123",
		gameId: 1,
		set: [
			"72241"
		],
		name: "Security Sensors",
		unique: false,
		text: "If an enemy Upgrade or Captain targets your ship, immediately place an [evade] Token beside your ship, even if there is already one there.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C239",
		gameId: 1,
		set: [
			"72241"
		],
		name: "Bo'Rak",
		cost: 5,
		text: "When attacking, during he Modify Defense Dice step, you may disable this card to force the defending ship to re-roll 1 of its defense dice of your choice.\n\nWhen defending, you may roll your full defense dice in spite of the presence of an opposing ship's [scan] Token.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W142",
		gameId: 1,
		set: [
			"72241"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack. \n\nIf fired from a Vor'cha class ship add +1 attack die. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "talent",
		id: "E145",
		gameId: 1,
		set: [
			"72234p"
		],
		name: "Standby Battle Stations",
		cost: 4,
		text: "During the Combat Phase, you may discard this card to replace 1 Token that is beside your ship ([evade] or [scan]) with a [battlestations] Token. \n\n This card may only be purchased for a ship that has the [battlestations] icon on its Action Bar",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C238",
		gameId: 1,
		set: [
			"72234p"
		],
		name: "Damage Control Party",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to repair 1 damage to your ship's Hull or Shields.\n\nOR\n\nACTION:Disable this card to flip one Critical Damage Card that is assigned to your ship face down.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q007",
		gameId: 1,
		set: [
			"72234p"
		],
		name: "Auxiliary Control Room",
		cost: 5,
		text: "You may fill a [tech_text] or [weapon_text] Upgrade slot with this card. No ship may be equipped with more than 1 'Auxiliary Control Room' Upgrade\n\nYou may disable this card to perform an Action while there is an Auxiliary Power Token beside your ship.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q006",
		gameId: 1,
		set: [
			"72234p"
		],
		name: "Automated Distress Beacon",
		cost: 3,
		text: "You may fill a [crew_text], [tech_text] or [weapon_text] Upgrade slot with this card. No ship may be equipped with more than one \"Automated Distress Beacon\" Upgrade.\n\nACTION: Discard this card to target a ship in your fleet that is not within Range 1-3 of your ship. The target ship immediately performs an additional maneuver with a speed of 2 (straight bank or turn).\n <b>( ERRATA )</b>",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E144",
		gameId: 1,
		set: [
			"72224p"
		],
		name: "Dominant Species",
		cost: 5,
		text: "When attacking, during the Modify Defense Dice step, you may discard this card to force the defending ship to re-roll up to 2 of its defense dice.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C237",
		gameId: 1,
		set: [
			"72224p"
		],
		name: "Damron",
		cost: 4,
		text: "When attacking with your Primary Weapon, if your attack hits the target ship, you may spend your [target-lock] Token to discard 1 [crew_text] Upgrade on target ship.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W144",
		gameId: 1,
		set: [
			"72224p"
		],
		name: "Photon Torpedoes",
		cost: 3,
		attack: 4,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack\r\n\r\nIf fired from a Xindi Reptilian warship add +1 attack die.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T122",
		gameId: 1,
		set: [
			"72224p"
		],
		name: "Sensor Encoders",
		cost: 3,
		text: "If your ship is destroyed, all friendly ships within Range 1-3 of your ship roll +1 defense die the next time they defend.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E143",
		gameId: 1,
		set: [
			"72233"
		],
		name: "Destabilized Relations",
		cost: 5,
		text: "When attacking a ship at Range 3, if there is another opposing ship within Range 1-2 of the target ship, the defending ship rolls -2 defense dice against your attack.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C236",
		gameId: 1,
		set: [
			"72233"
		],
		name: "Reman Bodyguards",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1. When attacking that ship with your Primary Weapon this round, gain +1 attack die and force the defending ship to roll -1 defense die.\r\n\r\nNo ship may be equipped with more than 1 \"Reman Bodyguards\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C235",
		gameId: 1,
		set: [
			"72233"
		],
		name: "Nijil",
		cost: 5,
		text: "Add 1 [tech_text] Upgrade to your Upgrade Bar. That Upgrade costs -1 SP (min 1) and must be a Romulan [tech_text] Upgrade.\r\n\r\nACTION: When defending this round, during the Roll Defense Dice step, disable this card and one of your [tech_text] Upgrades to roll +1 defense die.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W140",
		gameId: 1,
		set: [
			"72233"
		],
		name: "Disruptor Banks",
		cost: 4,
		attack: 3,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Place 3 Time Tokens on this card to perform this attack from your forward firing arcs\r\nOR\r\nWhen defending during the Roll Attack Dice step you may discard this card to force your opponent to roll -2 attack dice. No ship may be equipped with more than one \"Disruptor Banks\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T121",
		gameId: 1,
		set: [
			"72233"
		],
		name: "Prototype Cloaking Device",
		cost: 4,
		text: "<b>ACTION:</b> Disable this card to perform the [cloak] Action as a free Action, even if you have no Active Shields. Roll +1 attack die. On a [battlestations] result, your Hull sustains 1 Damage.  While your ship is Cloaked, you may perform the [sensor-echo] Action.\r\n\r\nThis Upgrade costs +5 SP for any non-Romulan ship and no ship may have more than 1 \"Prototype Cloaking Device\" Upgrade.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C234",
		gameId: 1,
		set: [
			"72232"
		],
		name: "Klingon Helmsman",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to immediately perform an additional 1[come-about] or 2[come-about] Maneuver. Treat this as a red maneuver. \n\nThis card costs +5 SP for any non-Klingon ship and cannot be deployed to a ship the does not have a [come-about] Maneuver on its Maneuver Dial.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C233",
		gameId: 1,
		set: [
			"72232"
		],
		name: "Klingon Navigator",
		cost: 2,
		text: "During the Activation Phase, before you move, you may discard this card to disregard your chosen maneuver and perform any maneuver on your Maneuver Dial with a speed of 3 or less. Treat this maneuver as a red maneuver. \n\nNo ship may be equipped with more than on \"Klingon Navigator\" Upgrade.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C232",
		gameId: 1,
		set: [
			"72232"
		],
		name: "Klingon Tactical Officer",
		cost: 3,
		text: "When attacking with your Primary Weapon, during the Modify Attack Dice step, you may disable this card to spend your [evade] Token to convert 1 of your [battlestations] results into a [hit] result.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W139",
		gameId: 1,
		set: [
			"72232"
		],
		name: "Stand By Torpedoes",
		cost: 3,
		text: "You may disable this card instead of spending your Target lock when attacking with Photon Torpedoes. \n\nNo ship may be equipped with more than one \"Stand By Torpedoes\" Upgrade.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C231",
		gameId: 1,
		set: [
			"72231"
		],
		name: "Wesley Crusher",
		cost: 5,
		text: "During the Activation Phase, after you move, if there is an Auxiliary Power Token beside your ship, you may disable this card to perform an Action from your Action Bar.  <b>OR</b>  During the Activation Phase after you move you may disable this card to perform an Action listed on one of your [tech_text] Upgrades as a free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W138",
		gameId: 1,
		set: [
			"72231"
		],
		name: "Heavy Gravition Beam",
		cost: 4,
		attack: 3,
		range: "1 - 2",
		text: "<b>ATTACK: </b>Discard this card to perform this attack. The defending ship rolls -1 defense die against this attack. \nYou may only fire this weapon from your forward firing arc. \nIf fired against a Borg ship add +3 attack dice to this attack. The defending Borg ship cannot roll any defense dice against this attack.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W137",
		gameId: 1,
		set: [
			"72231",
			"72011",
			"72253",
			"71221",
			"71201",
			"72008"
		],
		name: "Photon Torpedoes",
		cost: 5,
		attack: 5,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\nYou may convert 1 of your [battlestations] results into 1 [crit] result.\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T119",
		gameId: 1,
		set: [
			"72231"
		],
		name: "Subspace Transmitter",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card to target a friendly ship within Range 1-3 of your ship. Place 1 [scan] Token beside your ship and the target ship. You cannot perform a [scan] Action as a Free Action this round.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T118",
		gameId: 1,
		set: [
			"72231"
		],
		name: "Thruster Array",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to immediately perform a 1 [reverse] or 2 [reverse] Maneuver. Treat this maneuver as a red maneuver.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E142",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Arming Sequence",
		cost: 8,
		text: "<b>ACTION:</b> Place 1 Mission Token on this card. During the Activation Phase of each subsequent round, place 1 additional Mission Token on this card (max 3). While there are Mission Tokens on this card, your ship cannot perform any Actions and my only execute maneuvers with a speed of 1. While attacking with a \"Destructive Blast\" [weapon_text] Upgrade or your Primary Weapon, during the Roll Attack Dice step, you may discard this card to gain a number of attack dice equal to the number of Mission Tokens on this card. If you do so, discard this card. This Upgrade may only be purchased for a Xindi Weapon.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C230",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Degra",
		cost: 4,
		text: "All of your Xindi [weapon_text] Upgrades cost -1 SP. \n\nWhen attacking, during the Declare Target step, if your ship does not already have another ship target locked, you may discard this card to acquire a target lock on a ship within Range 1-3 of your ship.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W136",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Destructive Blast",
		cost: 6,
		attack: 5,
		range: "*",
		text: "<b>ATTACK: </b>Discard this card to perform this attack. This attack targets all ships in a straight line up to Range 3 from your ship. Perform one attack against each ship in the line. Each attack beyond the first is at a cumulative -1 attack die (i.e. -1 attack die against the 2nd ship, -2 attack die against the 3rd, etc.) This Upgrade can only be purchased for a Xindi Weapon.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W135",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Rotating Emitters",
		cost: 4,
		attack: 4,
		range: "1",
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may fire this weapon in any direction. \n\nThis Upgrade may only be purchased for a Xindi Weapon.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T117",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Subspace Vortex",
		cost: 6,
		text: "<b>ACTION:</b> Discard this card to remove your ship from the play area and discard all Tokens that are beside your ship except for Auxiliary Power Tokens. Immediately place your ship back anywhere in the play area, but not within Range 1-3 of any enemy ship. You cannot attack during the round that you use this Action. This Upgrade can only be purchased for a Xindi ship.",
		unique: true,
		opBanned: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T116",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Self-Destruct",
		cost: 5,
		text: "<b>ACTION:</b> Target all ships within Range 1 of your ship and destroy your ship. Each target suffers 1 damage and must discard a Token ([evade], [scan], [battlestations], or  [target-lock]) that is beside it. \n\nThis Upgrade may only be purchased for a Xindi Weapon.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E141",
		gameId: 1,
		set: [
			"72221p"
		],
		name: "INTERCEPT",
		cost: 5,
		text: "During the Activation Phase, if an opposing ship ends it move within your forward firing arc, before that ship performs its Action, you may discard this card to immediately perform an attack with 3 attack dice against that ship. The defending ship may roll defense dice against this attack, but the attack dice cannot be modified in any way.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C229",
		gameId: 1,
		set: [
			"72221p"
		],
		name: "THEI",
		cost: 1,
		text: "During the Activation Phase, after you move, if you have the [cloak] Action on your Action Bar, you may discard this card to perform a [cloak] Action as a free Action.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W134",
		gameId: 1,
		set: [
			"72221p"
		],
		name: "CHARGING WEAPONS",
		cost: 1,
		text: "When attacking with your Primary Weapon, you may disable this card to re-roll one of your blank results.\n\nNo ship may be equipped with more than one \"Charging Weapons\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T115",
		gameId: 1,
		set: [
			"72221p"
		],
		name: "SELF REPAIR TECHNOLOGY",
		cost: 4,
		text: "After your ship performs a green maneuver, you may disable this card to repair 1 damage to your ship's Hull.\n\nThis Upgrade may only be purchased for a Romulan ship and no ship may be equipped with more than 1 \"Self Repair Technology\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D025",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Cloaked Fighters",
		cost: 4,
		text: "Add the [cloak] Action to your Action Bar.  \nWhile your squadron is Cloaked, you cannot perform a maneuver with a speed greater than 1. \nThis Upgrade may only be purchased for a Scorpion class attack squadron and no ship may be equipped have more than one \"Cloaked Fighters\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D024",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Hidden Formation",
		cost: 5,
		text: "Add the [sensor-echo] Action to your Action Bar. When performing the [sensor-echo] Action you may only use a 1 [straight] Maneuver Template. \nIf your squadron is Cloaked, after performing a [sensor-echo] Action, you may discard this card to immediately perform an additional [sensor-echo] Action as a free Action. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D023",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Cover Fire",
		cost: 4,
		text: "When defending, during the Roll Defense Dice step, you may discard this card to to add a number of defense dice to your roll equal to your current Primary Weapon value. \n\nNo ship may be equipped with more than one \"Cover Fire\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D022",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Focused Strike",
		cost: 5,
		text: "If you damage an opposing ship's Hull with a critical damage, you may discard this card to draw 3 Damage Cards (instead of 1) and choose which one to place beside the enemy's Ship Card; discard the unused Damage Cards.\n\nNo ship may be equipped with more than one \"Focused Strike\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D021",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Torpedo Attack",
		cost: 4,
		attack: 4,
		range: "1 - 2",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 time tokens on this card to perform this attack. You may fire this weapon form your forward or rear firing arcs. \nNo Ship may be equipped with more than one \"Torpedo Attack\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D020",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Reconnaissance",
		cost: 2,
		text: "<b>ACTION:</b> Place a [scan] and an Auxiliary Power Token beside your ship.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D019",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Thrusters",
		cost: 3,
		text: "During the Activation Phase, if your ship is not Cloaked and you reveal a green maneuver dial you may discard this card to add 1 to your maneuver speed.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "squadron",
		id: "D018",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Support Ship",
		cost: 4,
		text: "When your last Attack Squadron Token is destroyed, discard this card instead of removing that Token. \n\nNo ship may be equipped with more than one \"Support Ship\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "question",
		id: "Q005",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Maintenance Crew",
		cost: 6,
		text: "This Upgrades does not require an upgrade slot. Add 1 [crew_text] Upgrade slot to your Upgrade Bar. During the Planning Phase you may discard this card and 1 of your [crew_text] Upgrades to repair up to 2 Damage to your ship. No ship may be equipped with more than one \"Maintenance Crew\" Upgrade.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W133",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Matter-Antimatter Warhead",
		cost: 7,
		attack: 7,
		range: "3",
		text: "<b>Attack: (Target Lock)</b> Spend your target lock and discard this card to perform this attack. If this attack hits place an Auxiliary Power Token beside all ships within Range 1 of the defending ship. \nYou may only fire this weapon form your forward firing arc.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W132",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Quantum Torpedoes",
		cost: 6,
		attack: 5,
		range: "2 - 3",
		text: "<b>Attack: (Target Lock)</b> Spend your target lock and place 3 time tokens on this card to perform this attack.  If the target ship is hit add 1 [hit] result to your total damage. If this weapon is fired from a Cardassian ATR-4107 add 1 additional [hit] result to your total damage.  You may fire this weapon from you forward or rear firing arcs.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W131",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Thoron Shock Emitter",
		cost: 5,
		attack: 5,
		range: "1 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack. \nYou may select any number of your attack dice and re-roll them. \nThis Upgrade may only be purchased for a Cardassian ATR-4107 ship.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W130",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Plasma Wave",
		cost: 5,
		attack: 3,
		range: "1",
		text: "<b>ATTACK: </b>Discard this card to perform this attack. \nYou may fire this weapon at the every enemy ship within Range 1 of your ship. \nThis Upgrade may only be purchased for a Cardassian ATR-4107 ship.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T113",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Kinetic Detonator",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card and 1 of your [weapon_text] Upgrades to inflict 1 damage to all ships within Range 1 (including this ship).",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T112",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Counter Measures",
		cost: 5,
		text: "When defending, during the Roll Defense Dice step, you may discard this card to roll +2 defense dice. Immediately after that attack is completed, you may then perform a 2 dice attack against the attack ship. \nThis Upgrade costs +5 SP for any ship other than a Cardassian ATR-4107 and no ship may be equipped with more than one \"Counter Measures\" Upgrade.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T111",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Evasive Attack Route",
		cost: 5,
		text: "When defending, during the Modify Defense Dice step, you may disable this card and discard one of your [weapon_text] Upgrades to place 2 [evade] Tokens beside your ship. \nThis Upgrade my only be purchased for a Cardassian ATR-4107.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C342",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Lorrum",
		cost: 4,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, instead of rolling your normal number of attack dice, you may discard this card to roll a number of attack dice equal to the SP cost of one upgrade on the target ship (max 4 dice).",
		unique: true,
		factions: [
			"kazon"
		]
	},
	{
		type: "crew",
		id: "C228",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Kazon Guard",
		cost: 4,
		text: "During the Activation Phase, you may discard this card to place an [evade] Token beside your ship, even if there is already one there. If you do so place an Auxiliary Power Token beside your ship.\n\n No ship may be equipped with more than one 'Kazon Guard' Upgrade.",
		unique: false,
		factions: [
			"kazon"
		]
	},
	{
		type: "weapon",
		id: "W129",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Photonic Charges",
		cost: 3,
		attack: 3,
		range: "1 - 2",
		text: "<b>ATTACK: </b>Place 3 Time Tokens on this card to perform this attack. \n\nPlace an Auxiliary Power Token beside the target ship if there if there is at lease one uncancelled [hit] or [crit] result.",
		unique: false,
		factions: [
			"kazon"
		]
	},
	{
		type: "weapon",
		id: "W128",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Aft Torpedo Launcher",
		cost: 3,
		attack: 4,
		range: "2 - 3",
		text: "<b>Attack: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack. \n\nYou may only fire this weapon at a ship that is not in your forward firing arc.",
		unique: false,
		factions: [
			"kazon"
		]
	},
	{
		type: "weapon",
		id: "W127",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Variable Yield Charges",
		cost: 2,
		text: "When attacking with one of your \"Photonic Charges\" Upgrades, during the Roll Attack Dice Step, you may disable this card to gain +1 attack die for that attack. If you do so place an Auxiliary Power Token beside your ship.",
		unique: false,
		factions: [
			"kazon"
		]
	},
	{
		type: "question",
		id: "Q004",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Unremarkable Species",
		cost: 5,
		text: "This Upgrade does not require an Upgrade slot and my not be deployed to a Borg ship. While this upgrade is equipped to your ship your Kazon Upgrades cannot be targeted by the Borg Assimilation Tubules Upgrade. In addition when defending against a Borg ship, during the Roll Defense Dice step roll +2 defence dice. This Upgrade costs +5SP if purchased for a non Kazon ship and no ship may be equipped with more than 1 \"Unremarkable Species\" Upgrade.",
		unique: false,
		factions: [
			"kazon"
		]
	},
	{
		type: "talent",
		id: "E140",
		gameId: 1,
		set: [
			"71211"
		],
		name: "EMISSARY",
		cost: 5,
		text: "At the start of the Activation Phase you may discard this card to remove all Disabled Upgrade Tokens from all Bajoran Upgrades deployed to all friendly ship within Range 1-3.",
		unique: true,
		factions: [
			"bajoran"
		]
	},
	{
		type: "talent",
		id: "E139",
		gameId: 1,
		set: [
			"71211"
		],
		name: "LEGENDARY HERO",
		cost: 5,
		text: "You may discard this card at the start of the Combat Phase to gain +2 attack dice and +2 defense dice for that round. \n\nThis Upgrade may only be purchased for a Bajoran captain assigned to a Bajoran Ship.",
		unique: true,
		factions: [
			"bajoran"
		]
	},
	{
		type: "talent",
		id: "E138",
		gameId: 1,
		set: [
			"71211"
		],
		name: "D'Jarras",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target a friendly ship within Range 1-3. That target ship may perform an Action listed on one of that ship's [crew_text] Upgrades. If the [crew_text] Upgrade is Bajoran, treat this Action as a free Action.  \nThis Upgrade may only be purchased for a Bajoran Captain assigned to a Bajoran ship.",
		unique: true,
		factions: [
			"bajoran"
		]
	},
	{
		type: "tech",
		id: "T110",
		gameId: 1,
		set: [
			"71211"
		],
		name: "TACHYON EDDIES",
		cost: 5,
		text: "When you reveal you chosen maneuver you may disable this card to add up the +3 to that maneuver speed. Inflict one damage to your ship if you add +2 to your speed or inflict 2 damage to your ship if you add +3 to your speed. This Upgrade may only be purchased for a Bajoran Lightship and no ship may be equipped with more than 1 'Tachyon Eddies' Upgrade.",
		unique: false,
		factions: [
			"bajoran"
		]
	},
	{
		type: "tech",
		id: "T109",
		gameId: 1,
		set: [
			"71211"
		],
		name: "MAINSAILS",
		cost: 4,
		text: "At the start of the game place 2 Shield Tokens on this card. When your ship suffers damage remove these tokens first. You cannot use these tokens to activate any other card ability.  This Upgrade may only be purchased for a Bajoran Lightship and no ship may be equipped with more than 1 'Mainsails' Upgrade.",
		unique: false,
		factions: [
			"bajoran"
		]
	},
	{
		type: "tech",
		id: "T108",
		gameId: 1,
		set: [
			"71211"
		],
		name: "SOLAR SAIL POWERED",
		cost: 3,
		text: "After you move you may disable this card to treat any maneuver as a green maneuver. This upgrade may only be purchased for a Bajoran Lightship.",
		unique: true,
		factions: [
			"bajoran"
		]
	},
	{
		type: "talent",
		id: "E137",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Infiltration",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to perform this Action. If your ship is within Range 1-2 of at least 1 enemy ship, but is not within Range 1-2 of any friendly ships, your ship cannot be attacked or attack this round.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C227",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Miles O'Brien",
		cost: 5,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card to inflict 1 damage to the target ship's Hull.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C226",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Jadzia Dax",
		cost: 4,
		text: "You may disable this card after performing a red maneuver to place an [evade] Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C225",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Julian Bashir",
		cost: 4,
		text: "At any time, your may discard this card to re-roll any 1 die.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C224",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Nog",
		cost: 4,
		text: "During the Combat Phase you may disable this card to spend a [scan] Token that is beside your ship as though it were a [evade] or a [battlestations] Token.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C223",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Elim Garak",
		cost: 3,
		text: "At the beginning of the Combat Phase, you may disable this card to add +2 to your Captain Skill Number until the End Phase.  OR   During the Combat Phase, you may discard this card to select up to 3 of your attack or defence dice and re-roll them.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E136",
		gameId: 1,
		set: [
			"71221"
		],
		name: "Red Squad",
		cost: 5,
		text: "At the start of the game, place a number of Tokens ([evade], [scan], or [battlestations]) on this card equal to the number of Federation [crew_text] Upgrades assigned to your ship (4 max). During the Activation Phase, before performing your Action, you may remove 1 Token from on top of this card and place it beside your ship. This Upgrade may only be purchased for a Federation Captain assigned to a Federation ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C222",
		gameId: 1,
		set: [
			"71221"
		],
		name: "Riley Aldrin Shepard",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card to perform an additional green maneuver with a speed of 1. Your ship cannot be Target Locked this round. If there is already a Target Lock on your ship, remove it.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C221",
		gameId: 1,
		set: [
			"71221"
		],
		name: "Karen Ferris",
		cost: 4,
		text: "When targeting an opposing ship with a Photon or Quantum Torpedoes secondary weapon you may disable this card instead of spending a Target Lock.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C220",
		gameId: 1,
		set: [
			"71221"
		],
		name: "Dorian Collins",
		cost: 2,
		text: "If your ship suffers damage to its Hull you may immediately disable this card to repair 1 Shield.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C219",
		gameId: 1,
		set: [
			"71221"
		],
		name: "Nog",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card to repair 1 damage to your Hull or Shields. <b>OR</b> If you execute a Red Maneuver, you may disable this card after skipping your Perform Action Step to remove 1 Auxiliary Power Token form beside your ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E135",
		gameId: 1,
		set: [
			"71223"
		],
		name: "DIVERSION",
		cost: 5,
		text: "When an opposing ship declares an attack against a friendly ship that is within Range 1 of your ship. If you are also in the attacking ships forward firing arc you may discard this card to force the attacking ship to make its attack against your ship instead. The attack is made at -2 attack dice.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C218",
		gameId: 1,
		set: [
			"71223"
		],
		name: "TALAS",
		cost: 3,
		text: "When a friendly  ship within Range 1 of your ship is declared the target of an attack, you may discard this card to target that ship. If you do so, the target ship may spend your [evade] or [battlestations] Tokens as if it were beside their ship during this attack.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W125",
		gameId: 1,
		set: [
			"71223"
		],
		name: "ADVANCED WEAPONRY",
		cost: 5,
		attack: 5,
		range: "1 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack. If your inflict a critical damage you may search the damage deck and chose either a \"Weapons Malfunction\" or \"Munitions Failure\" critical damage card, then reshuffle the deck. You may only fire this weapon from your forward firing arc.",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W124",
		gameId: 1,
		set: [
			"71223"
		],
		name: "PARTICLE CANNON ARRAY",
		cost: 3,
		attack: 4,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Place 2 Time Tokens on this card to perform this attack. \n\nYou my only fire this weapon from your forward firing arc.",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T107",
		gameId: 1,
		set: [
			"71223"
		],
		name: "TRACTOR BEAM",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to target a friendly ship within Range 1. That ship performs an additional green maneuver with a speed of 1. The target ship rolls +1 defence die this round.",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "tech",
		id: "T106",
		gameId: 1,
		set: [
			"71223"
		],
		name: "LONG RANGE SENSORS",
		cost: 3,
		text: "When defending, it there is a [scan] Token beside your ship, during the Roll Defence Dice step, you may disable this card to roll +1 defence die for that attack. ",
		unique: false,
		factions: [
			"independent"
		]
	},
	{
		type: "talent",
		id: "E134",
		gameId: 1,
		set: [
			"71201"
		],
		name: "Improvise",
		cost: 5,
		text: "During the Combat Phase, when attacking or defending, you may disable this card and any number of your other Upgrades to re-roll a number of your attack or defense dice equal to the number of Upgrades you disabled with this ability (not including this card).",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C217",
		gameId: 1,
		set: [
			"71201"
		],
		name: "Wesley Crusher",
		cost: 5,
		text: "At the start of the game, place up to 3 Federation [tech_text] Upgrades, each 4 SP or less, face down under this card. During the Actavation Phase, you may discard this card to flip one of these Upgrades face up and deploy it to your ship, even if it exceeds your ship's restrictions. If you do so, remove the other 2 face down Upgrades from the game and place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C216",
		gameId: 1,
		set: [
			"71201"
		],
		name: "Worf",
		cost: 5,
		text: "When defending, you may disable this card. If you do so, the attacking ship rolls 1 fewer attack die and cannot spend [battlestations] or [target-lock] Tokens to modify its attack roll and your ship may roll its full defence dice in spite of the presence of any [scan] Token(s) beside the attacking ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C215",
		gameId: 1,
		set: [
			"71201"
		],
		name: "Geordi La Forge",
		cost: 5,
		text: "All of your [tech_text] Upgrades cost -1 SP. \n\nWhen defending, during the Roll Defence Dice step, you may disable this card to roll 1 additional defence die for each [tech_text] Upgrade deployed to your ship (+2 max)",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T105",
		gameId: 1,
		set: [
			"71201"
		],
		name: "Navigational Station",
		cost: 4,
		text: "After you perform a green maneuver, you may disable this card to immediately perform an [evade] Action as a free Action. \n\nNo ship may be equipped with more than one 'Navigational Station' Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T104",
		gameId: 1,
		set: [
			"71201"
		],
		name: "Warp Jump",
		cost: 5,
		text: "At the start of the Combat Phase before any attacks have been made, you my discard this card to remove your ship form the play area. At the end of the Combat Phase, after all other ships have attacked, place your ship anywhere in the play area but not within Range 1-3 of any other ship. All Tokens that were beside your ship are removed. You can not attack during the round in which you use this ability.",
		unique: false,
		opBanned: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E133",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Covert Mission",
		cost: 5,
		text: "This Upgrade may be fielded by any Captain. If the Captain's card does not have an [talent_text] icon, this Upgrade costs +1 SP. \nDuring the End Phase of each round, place 1 Mission Token on this card (max 3).\n<b>ACTION:</b> Discard this card to gain +1 attack die for each Mission Token beside this card for your first attack this round.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C214",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Pardek",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 3. Your ship cannot attack the target ship and that ship cannot attack your ship this round.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C213",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Patahk",
		cost: 1,
		text: "When attacking with your Primary Weapon during the Roll Attack Dice step, you may discard this card to gain +1 attack die for that attack.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T103",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Distress Signal",
		cost: 2,
		text: "When defending, if there is a friendly ship within Range 1-2 of your ship with a Hull value greater then your ship, during the Roll Defence Dice step you may discard this card to roll +2 defence dice. \n\nNo ship my be equipped with more than 1 \"Distress Signal\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T102",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Graviton Field Generator",
		cost: 2,
		text: "When defending, if your ship is not Cloaked, during the Deal Damage step you may discard this card to add 1 Shield Token. This Shield Token my not exceed your ship's starting Shield Value and is treated like a normal Shield Token. \n\nNo ship my be equipped with more than 1 \"Graviton Field Generator\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E132",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Engage",
		unique: false,
		text: "<b>ACTION:</b> If you performed a Green Maneuver this round, you may immediately perform an additional Green Maneuver of your choice. Place an Auxiliary Power Token besides your ship. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C212",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Worf",
		unique: true,
		text: "Disable this card to re-roll your entire attack roll. You must re-roll all of the dice and keep the results of the second roll. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T101",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Self Destruct Sequence",
		cost: 3,
		text: "<b>ACTION:</b> Destroy your ship and target every ship within Range 1 of your ship. Each target ship suffers 1 damage. \n\nNo ship may be equipped with more than 1 \"Self Destruct Sequence\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C211",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Miles O'Brien",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to disable any 1 Upgrade on another ship at Range 1-3. \n\nThis ability may be used against a ship that is Cloaked.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C210",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Geordi La Forge",
		unique: true,
		text: "If your ship has a [scan] Token beside it, you may force one ship you attacked this round to re-roll one defense die of your choice. ",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C209",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Data",
		unique: true,
		text: "<b>ACTION:</b> Place 2 [evade] Tokens beside your ship and reduce your total attack dice by 2 this round. You cannot perform an [evade] Action this round, even as a free Action. \n\n <b>( ERRATA )</b>",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W122",
		gameId: 1,
		set: [
			"71120",
			"71268",
			"72282",
			"71276",
			"71280",
			"72261"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert 1 of your [battlestations] results into a [crit] result. \nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W121",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Antimatter Mines",
		unique: false,
		text: "<b>ATTACK: </b>Discard this card and place a Minefield Token in your rear firing arc at Range 1. If you place this token on a ship, or if a ship enters the minefield, roll 4 attack dice. Any [hit] or [crit] damages the ship as normal. The affected ship does not roll any defense dice. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C208",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Konmel",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, you may repair 1 Shield Token. ",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C207",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Klag",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard Klag and one [crew_text] Upgrade of your choice on the target ship. ",
		factions: [
			"klingon"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W120",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nIf fired from a <i>Vor'cha</i> class ship add +1 attack die. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "tech",
		id: "T100",
		gameId: 1,
		set: [
			"71120",
			"71126",
			"72251"
		],
		name: "Tractor Beam",
		unique: false,
		text: "<b>ACTION:</b> Target a ship at Range 1 and roll 2 attack dice. For every [hit] result, that ship rolls 1 less defense die against your next attack. ",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: null,
		talents: null,
		attack: null
	},
	{
		type: "tech",
		id: "T250",
		gameId: 1,
		set: [
			"71120",
			"71273"
		],
		name: "Advanced Weapon System",
		unique: false,
		text: "When attacking, you may disable this Upgrade before rolling any dice to keep your [cloak] token from flipping to its red side. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: null,
		talents: null,
		attack: null
	},
	{
		type: "talent",
		id: "E131",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Counter Attack",
		unique: false,
		text: "<b>ACTION</b>: If you ship's Shields or Hull are damaged by a ship in your forward firing arc this round, you may immediately make 1 free attack against that ship. \n\nYou may not make this attack if your ship is destroyed. ",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C206",
		gameId: 1,
		set: [
			"71120"
		],
		name: "N'Vek",
		unique: true,
		text: "<b>ACTION:</b> Disable 1 of your Active Shields in order to add +1 attack die this round. ",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C205",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Bochra",
		unique: true,
		text: "<b>ACTION:</b> If you ship is not Cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard Bochra and one [crew_text] Upgrade of your choice on the target ship. ",
		factions: [
			"romulan"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W119",
		gameId: 1,
		set: [
			"71120",
			"71123",
			"71511",
			"71794"
		],
		name: "Plasma Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may re-roll all your blank results one time. \nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 2"
	},
	{
		type: "tech",
		id: "T249",
		gameId: 1,
		set: [
			"71120"
		],
		name: "Artificial Quantum Singularity",
		unique: false,
		text: "While your ship is Cloaked, you may roll your full defense dice in spite of the presence of an opposing ship's [scan] Token. ",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E130",
		gameId: 1,
		set: [
			"71121"
		],
		name: "I Stab at Thee",
		unique: false,
		text: "If your ship was just destroyed, roll 3 attack dice and inflict the resulting damage on all ships within Range 1 of your ship. These ships do not roll defense dice against this damage. ",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E129",
		gameId: 1,
		set: [
			"71121"
		],
		name: "Superior Intellect",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Steal 1 face up Upgrade Card of your choice from that ship, even if the Upgrade exceeds your ship's restriction. ",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C204",
		gameId: 1,
		set: [
			"71121"
		],
		name: "Kyle",
		unique: true,
		text: "<b>ACTION:</b> If you performed a Green Maneuver this round, repair 1 Shield Token and reduce your total attack dice by 2 this round. ",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C203",
		gameId: 1,
		set: [
			"71121"
		],
		name: "Pavel Chekov",
		unique: true,
		text: "Your ship can remove 1 Auxiliary Power Token after performing a White Maneuver. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C202",
		gameId: 1,
		set: [
			"71121"
		],
		name: "Follower of Khan",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card and one [crew_text] Upgrade of your choice on the target ship. ",
		factions: [
			"independent"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C201",
		gameId: 1,
		set: [
			"71121"
		],
		name: "Joachim",
		unique: true,
		text: "Each time you inflict a [crit] on an enemy ship's Hull, you may draw 2 Damage Cards (instead of 1) and choose which one to place beside the enemy's Ship Card; discard the unused Damage Card. ",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W118",
		gameId: 1,
		set: [
			"71121",
			"71122",
			"72240",
			"71272",
			"72292"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert 1 of your [battlestations] results into a [crit] result. \nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "talent",
		id: "E128",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Cheat Death",
		unique: false,
		text: "If your ship was just destroyed, discard this card to remove Damage Cards 1 at a time from your Ship Card until the amount of damage is 1 point less than your Hull Value. Flip all remaining Damage Cards face down. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E127",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Cochrane Deceleration Maneuver",
		unique: false,
		text: "<b>ACTION:</b> If you performed a 1 [forward] Maneuver this round, discard this Upgrade to Come About [come-about]. Place an Auxiliary Power Token beside your ship. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E126",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Corbomite Maneuver",
		unique: false,
		text: "<b>ACTION:</b> Discard this Upgrade to prevent all enemy ships from attacking you this round. You cannot attack this round. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C200",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Leonard McCoy",
		unique: true,
		text: "Discard McCoy to allow 1 of your [crew_text] Upgrades to perform its Action as a free Action this round. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C199",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Hikaru Sulu",
		unique: true,
		text: "<b>ACTION:</b> Add 2 to your Agility for the rest of this round. Each time you defend this round, you may convert 1 [battlestations] result into 1 [evade] result. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C198",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Mr. Spock",
		unique: true,
		text: "If your ship has a [scan] Token beside it when you attack, you may convert all your [battlestations] results into [hit] results. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C197",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Nyota Uhura",
		unique: true,
		text: "Discard Uhura immediately before you move in order to change your Maneuver for this round. ",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C196",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "Montgomery Scott",
		unique: true,
		text: "<b>ACTION:</b> Disable 2 of your Shields in order to gain +2 attack dice this round. \n<b>OR</b> \nRepair 1 Shield Token and reduce your total attack dice by 2 this round. ",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E125",
		gameId: 1,
		set: [
			"71123"
		],
		name: "All Forward Disruptor Banks",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to add +1 attack die to any attack in your forward firing arc this round. ",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C195",
		gameId: 1,
		set: [
			"71123"
		],
		name: "Tactical Officer",
		unique: false,
		text: "When removing your Target Lock from an opposing ship in order to re-roll your attack dice, you may re-roll each attack die one additional time. ",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W117",
		gameId: 1,
		set: [
			"71123"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert 1 [battlestations] result into 1 [crit] result. \nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "crew",
		id: "C194",
		gameId: 1,
		set: [
			"71124"
		],
		name: "Parem",
		unique: true,
		text: "<b>ACTION:</b> If you ship is not Cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard Parem and one [crew_text] Upgrade of your choice on the target ship. ",
		factions: [
			"romulan"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C193",
		gameId: 1,
		set: [
			"71124"
		],
		name: "Varel",
		unique: true,
		text: "Discard this card to cancel a single attack against her ship before any dice are rolled. The cancelled attack cannot be directed against a different ship. \n\nThis Upgrade costs +5 Squadron Points for any ship that is not a Romulan Science Vessel. ",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T248",
		gameId: 1,
		set: [
			"71124",
			"75001"
		],
		name: "Interphase Generator",
		OnePerShip: true,
		text: "<b>WHEN DEFENDING:</b> After all dice have been rolled if this ship is Cloaked, discard this card.\n\nCancel the attack. This ship suffers 1 [hit].\n\n<b>( ERRATA )</b>",
		factions: [
			"romulan"
		],
		cost: 3
	},
	{
		type: "tech",
		id: "T247",
		gameId: 1,
		set: [
			"71124"
		],
		name: "Muon Feedback Wave",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to place a Muon Token beside a ship at Range 1. \n\nThis upgrade may only be purchased for a Romulan Science Vessel. ",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: "",
		hasTokenInfo: true,
		tokenId: "muon_token"
	},
	{
		type: "talent",
		id: "E124",
		gameId: 1,
		set: [
			"71125",
			"72272"
		],
		name: "Sabotage",
		unique: false,
		text: "<b>ACTION:</b> Discard this Upgrade to target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard 1 [weapon_text] or [tech_text] Upgrade on the target ship. ",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C192",
		gameId: 1,
		set: [
			"71125",
			"72272"
		],
		name: "Korax",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard Korax and any 2 [crew_text] Upgrades of your choice on the target ship. ",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C191",
		gameId: 1,
		set: [
			"71125",
			"72272"
		],
		name: "Cyrano Jones",
		unique: true,
		text: "You begin the game with one Tribble Token beside your Ship Card ",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W116",
		gameId: 1,
		set: [
			"71125",
			"71448",
			"72272"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert 1 [battlestations] result into 1 [crit] result. \nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W115",
		gameId: 1,
		set: [
			"71125",
			"72272"
		],
		name: "Magnetic Pulse",
		unique: false,
		text: "<b>ATTACK: </b> Disable this card and 1 Active Shield to perform this attack. \n\nEach [crit] that would damage on the opponent's Shields instead inflicts 1 [hit] on the opponent's Hull. ",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "tech",
		id: "T246",
		gameId: 1,
		set: [
			"71125",
			"72272"
		],
		name: "Projected Stasis Field",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not cloaked, disable all of your remaining Shields and discard this Upgrade to target a ship at Range 1-2. That ship must disable all of its remaining Shields and cannot attack this round. Your ship rolls 2 less attack dice this round. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C190",
		gameId: 1,
		set: [
			"71126",
			"72251"
		],
		name: "Klingon Boarding Party",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card to disable all Upgrades and remove all [battlestations] Tokens on the target ship. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E123",
		gameId: 1,
		set: [
			"71126",
			"72251"
		],
		name: "In'cha",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to perform one additional Maneuver of your choice this round. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C189",
		gameId: 1,
		set: [
			"71126",
			"72251"
		],
		name: "Drex",
		unique: true,
		text: "<b>ACTION:</b> When attacking this round, you may convert 1 [battlestations] result into 1 [crit] result and all of your other [battlestations] results into [hit] results. ",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W114",
		gameId: 1,
		set: [
			"71126",
			"72251"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nIf fired from a Negh'Var class ship add +1 attack die.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "crew",
		id: "C188",
		gameId: 1,
		set: [
			"71127"
		],
		name: "Glinn Telle",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target 1 ship in your forward firing arc at Range 1-3. That ship rolls 2 less attack dice this round. ",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W113",
		gameId: 1,
		set: [
			"71127"
		],
		name: "Forward Weapons Grid",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. You must divide the attack between 2 different ships in your forward firing arc. You may divide your attack dice however your like, but you must roll at least 1 attack die against each ship. ",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 3"
	},
	{
		type: "tech",
		id: "T245",
		gameId: 1,
		set: [
			"71127"
		],
		name: "Antiproton Scan",
		unique: false,
		text: "If a [scan] Token is beside your ship, add +1 attack die when firing against a ship that has no Active Shields. ",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T244",
		gameId: 1,
		set: [
			"71127"
		],
		name: "EM Pulse",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to target a ship at Range 1-2. The targeted ship rolls 1 less attack die and 1 less defense die this round. ",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C187",
		gameId: 1,
		set: [
			"71128"
		],
		name: "Breen Aide",
		unique: false,
		text: "If your ship has a [scan] Token beside it when you attack, you may convert 1 blank result into 1 [hit] result. ",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W112",
		gameId: 1,
		set: [
			"71128",
			"71271"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W111",
		gameId: 1,
		set: [
			"71128",
			"OP5Prize"
		],
		name: "Energy Dissipator",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. If this attack hits, the target suffers no damage, receives 1 Energy Dampening Token, and you may immediately attack the same ship again with another weapon. This upgrade costs +5 Squadron Points for any non-Breen ship. ",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1"
	},
	{
		type: "talent",
		id: "E122",
		gameId: 1,
		set: [
			"OP1Prize"
		],
		name: "Conditional Surrender",
		unique: false,
		text: "When your ship is attacked, before any dice are rolled, discard all of your [crew_text] Upgrades and this card to cancel the attack. You must have at least 1 [crew_text] Upgrade on your ship in order to use this ability.\n\n<b>( ERRATA )</b>",
		factions: [
			"ferengi"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C186",
		gameId: 1,
		set: [
			"OP1Prize"
		],
		name: "Farek",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields to target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard Farek and 1 [crew_text] Upgrade on the target ship. If there is a [scan] Token beside your ship, you may perform this action as a free Action.",
		factions: [
			"ferengi"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W110",
		gameId: 1,
		set: [
			"OP1Prize"
		],
		name: "Missile Launchers",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. Make 2 attacks against ship(s) in your forward firing arc. Roll 2 attack dice for each of these attacks. Any [crit] results that would damage an opponent's Shields inflict critical damage to that ship's Hull instead.",
		factions: [
			"ferengi"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 2,
		range: "1 - 2"
	},
	{
		type: "talent",
		id: "E121",
		gameId: 1,
		set: [
			"OP2Prize"
		],
		name: "Defense Condition One",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to place a [battlestations] Token beside your ship and all friendly ships within Range 1-2 of your ship (even if there is already one there).",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W109",
		gameId: 1,
		set: [
			"OP2Prize"
		],
		name: "Barrage of Fire",
		unique: false,
		text: "<b>ATTACK: </b>Discard this card to perform this attack. Target 1 friendly ship within Range 1 of your ship. Target ship may not make a normal attack this round. Instead, add the Primary Weapon value of that ship to your attack roll for this attack. Both ships must have the enemy ship within their forward firing arcs. Place an Auxiliary Power Token beside both ships.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 2"
	},
	{
		type: "tech",
		id: "T242",
		gameId: 1,
		set: [
			"OP2Prize"
		],
		name: "Secondary Shield Emitters",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to repair 1 Shield Token. If you attack this round, roll 1 less attack die.",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C185",
		gameId: 1,
		set: [
			"OP2Prize"
		],
		name: "Synon",
		unique: true,
		text: "When performing a [sensor-echo] Action, you may use a [forward]1, [forward]2 or [forward]3 maneuver template.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E120",
		gameId: 1,
		set: [
			"OP3Prize"
		],
		name: "Invasion Plans",
		unique: true,
		text: "When you initiate an attack against a ship at Range 2-3 while you are Cloaked, you may discard this card to force that ship to roll 2 less defense dice against your attack.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C184",
		gameId: 1,
		set: [
			"OP3Prize",
			"72311p"
		],
		name: "Romulan Pilot",
		unique: false,
		text: "<b>FREE ACTION:</b> Discard this card.\n\nPlace a [scan] Token beside this ship and this ship may make a Green Maneuver.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W108",
		gameId: 1,
		set: [
			"OP3Prize"
		],
		name: "Additional Weapons Array",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to make this attack. \n\nYou may convert 1 of your [battlestations] results into 1 [crit] result.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 2"
	},
	{
		type: "tech",
		id: "T241",
		gameId: 1,
		set: [
			"OP3Prize"
		],
		name: "Nullifier Core",
		unique: false,
		text: "Each time you defend while Cloaked, you may re-roll 1 of your defense dice. Discard this card if you ship sustains any damage to its Hull.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W107",
		gameId: 1,
		set: [
			"71268",
			"72282",
			"71531",
			"72271"
		],
		name: "Quantum Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf the target ship is hit, add 1 [hit] result to your total damage. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"federation"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "tech",
		id: "T240",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "Cloaking Device",
		unique: false,
		text: "Instead of performing a normal Action, you may disable this card to perform the [cloak] Action. While you have a [cloak] token beside your ship, you may perform the [sensor-echo] Action even if this card is disabled. \n\nThis Upgrade costs +5 Squadron Points for any ship other than the U.S.S. Defiant.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C183",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "Worf",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1. That ship rolls 2 less attack dice this round.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E119",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "Attack Pattern Delta",
		unique: true,
		text: "Disable this card to re-roll your entire defense roll. You must re-roll all of the dice and keep the results of the second roll.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E118",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "Attack Pattern Omega",
		unique: true,
		text: "If you damage an opponent's Hull with a [crit], you may immediately discard this card to search the Damage Deck for a \"Warp Core Breach\" card instead of drawing a random Damage Card. Re-shuffle the Damage Deck when you are done.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C182",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "Jadzia Dax",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to perform an additional \"2\" Maneuver this round (forward or bank). \n\nYou cannot attack this round.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C181",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "Miles O'Brien",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to repair 2 Shield Tokens. \n\nYou cannot attack this round.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E117",
		gameId: 1,
		set: [
			"71269"
		],
		name: "Once More Unto The Breach",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to allow your Primary Weapon to make a total of 2 attacks this round at -1 attack die each. \n\nYou may not roll any defense dice this round.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W106",
		gameId: 1,
		set: [
			"71269"
		],
		name: "Concussive Charges",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nFor every uncancelled [hit] or [crit] result, the target ship loses 1 token of your choice that has been placed beside it in the play area. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W105",
		gameId: 1,
		set: [
			"71269",
			"71273",
			"71532",
			"71512",
			"71804"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert 1 of your [battlestations] results into a [crit] result. \nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "crew",
		id: "C180",
		gameId: 1,
		set: [
			"71269"
		],
		name: "Kerla",
		unique: true,
		text: "When defending against a ship at Range 1, you may convert 1 of your [battlestations] results into 1 [evade] result.",
		factions: [
			"klingon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C179",
		gameId: 1,
		set: [
			"71269"
		],
		name: "Stex",
		unique: true,
		text: "If a [crew_text] Upgrade on an enemy ship would cause your ship to discard or disable any of your Upgrades, roll 2 defense dice. If you roll at least 1 [evade] result, ignore the effects of the enemy Upgrade. ",
		factions: [
			"klingon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T239",
		gameId: 1,
		set: [
			"71270"
		],
		name: "Cloaked Mines",
		unique: false,
		text: "During the Planning Phase, you may discard this card to place a Minefield Token within Range 2 of your ship (in any direction), but not within Range 2 of an enemy ship. If an enemy ship passes within Range 1 of the token, roll 3 attack dice (-1 if the target ship immediately performs a [scan] Action). Any [hit] or [crit] damages the target ship as normal. The affected ship does not roll any defense dice.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T238",
		gameId: 1,
		set: [
			"71270"
		],
		name: "Polarized Hull Plating",
		unique: false,
		text: "When your ship is hit, convert 1 [crit] into 1 [hit] result.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W104",
		gameId: 1,
		set: [
			"71270"
		],
		name: "Nuclear Missiles",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may re-roll one of your blank results one time.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 2"
	},
	{
		type: "tech",
		id: "T237",
		gameId: 1,
		set: [
			"71271"
		],
		name: "Long Range Tachyon Scan",
		unique: false,
		text: "When attacking a ship at Range 3, you may spend 1 [scan] Token to force that ship to roll 2 less defense dice this round.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T236",
		gameId: 1,
		set: [
			"71271"
		],
		name: "Suicide Attack",
		unique: false,
		text: "<b>ACTION:</b> At the end of the Activation Phase, you must make a 1 [forward] Maneuver and place an Auxiliary Power Token beside your ship. If your ship overlaps an enemy ship, destroy your ship and roll 8 attack dice to damage the enemy ship. That ship rolls defense dice against this attack. This Upgrade may only be purchased for a Jem'Hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W103",
		gameId: 1,
		set: [
			"71271"
		],
		name: "Phased Polaron Beam",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nAll damage inflicted by this attack ignores the opposing ship's Shields. \n\nThis Upgrade costs +5 Squadron Points for any non-Jem'Hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 2"
	},
	{
		type: "crew",
		id: "C178",
		gameId: 1,
		set: [
			"71271"
		],
		name: "Omet'Iklan",
		unique: true,
		text: "Whenever you attack with your Primary Weapon, you may convert 1 result into a [hit] result. \n\nThis Upgrade may only be purchased for a Jem'hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C177",
		gameId: 1,
		set: [
			"71271"
		],
		name: "Virak'Kara",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1. Disable this card and 1 [crew_text] Upgrade of your choice on the target ship (even if that ship is Cloaked or has Active Shields). You may then use that Upgrade's Action (if any) as a free Action this round. \n\nThis Upgrade may only be purchased for a Jem'hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C176",
		gameId: 1,
		set: [
			"71271"
		],
		name: "Toman'Torax",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1. Discard this card and 1 [crew_text] Upgrade of your choice on the target ship (even if that ship is Cloaked or has Active Shields). \n\nThis Upgrade may only be purchased for a Jem'hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C175",
		gameId: 1,
		set: [
			"OP2Participation"
		],
		name: "Redshirt",
		unique: false,
		text: "When defending, discard this card to cancel any one of your opponent's attack dice of your choice.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C174",
		gameId: 1,
		set: [
			"71273"
		],
		name: "N'Garen",
		unique: true,
		text: "<b>ACTION:</b> When attacking this round, you may convert 1 of your [battlestations] results into a [crit] result and all of your other [battlestations] results into [hit] results.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C173",
		gameId: 1,
		set: [
			"71273"
		],
		name: "Alexander",
		unique: true,
		text: "Each time your ship is hit for at least 1 damage, place 1 [battlestations] Token on this card. \n\nDuring the Activation Phase, you may take 1 [battlestations] Token off this card and place it beside your ship.",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T235",
		gameId: 1,
		set: [
			"71273"
		],
		name: "EM Pulse",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to target a ship at Range 1-2. The target ship rolls 1 less attack die and 1 less defense die this round. ",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C172",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Boheeka",
		unique: true,
		text: "If your ship has a [battlestations] Token beside it when you attack, you may convert 1 blank result into 1 [hit] result.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W102",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Enhanced Weaponry",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nIf fired from a Keldon Class ship, add +1 attack die.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W101",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Dorsal Weapons Array",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may fire this weapon in any direction.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "tech",
		id: "T234",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Tetryon Emissions",
		unique: false,
		text: "<b>ACTION:</b> Disable this Upgrade to add +3 defense dice each time you defend this round.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T233",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Cloaking Device",
		unique: false,
		text: "Instead of performing a normal Action, you may disable this card to perform the [cloak] Action. While you have a [cloak] Token beside your ship, you may perform the [sensor-echo] Action even if this card is disabled. This Upgrade costs +5 Squadron Points for any non-Keldon class ship.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E116",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Captured Intelligence",
		unique: true,
		text: "Before rolling your defense dice, if you do not have an [evade] Token beside your ship, you may discard this card to place an [evade] Token beside your ship. In addition, each time you defend during the round use this ability, roll 1 extra defense die.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E115",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "Feint",
		unique: false,
		text: "<b>ACTION:</b> Discard this Upgrade to target a ship at Range 2-3. If you attack that ship this round, it rolls 2 less defense dice.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C171",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "Dmitri Valtane",
		unique: true,
		text: "If your ship has a [scan] Token beside it when you attack, you may re-roll up to 2 of your attack dice.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C170",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "Janice Rand",
		unique: true,
		text: "After your ship moves, discard Rand to allow your Captain to perform the Action on one of his [talent_text] Upgrades as a free Action this round.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C169",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "Lojur",
		unique: true,
		text: "When your ship fires a [weapon_text] Upgrade that requires you to disable it, you may disable Lojur instead of that [weapon_text] Upgrade.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T232",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "Positron Beam",
		unique: false,
		text: "During the Planning Phase, you may discard this Upgrade to target a ship at Range 1 of your ship. That ship immediately receives an Auxiliary Power Token.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T231",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "Transwarp Drive",
		unique: false,
		text: "During the Activation Phase, if your Maneuver Dial reveals a [forward] 4 or [forward] 5 Maneuver, you may instead use a [forward] 6 Maneuver.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E114",
		gameId: 1,
		set: [
			"71274"
		],
		name: "Massacre",
		unique: true,
		text: "If your ship inflicts a [crit] against an enemy's Hull, discard this card to inflict 1 additional damage to that ship. ",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C168",
		gameId: 1,
		set: [
			"71274"
		],
		name: "Selok",
		unique: true,
		text: "<b>ACTION:</b> Discard Selok to target a ship at Range 1. That ship cannot attack your ship this round. ",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T230",
		gameId: 1,
		set: [
			"71274"
		],
		name: "Ultritium Explosives",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card and 1 of your [crew_text] Upgrades to inflict 1 [crit] against the target ship. ",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E113",
		gameId: 1,
		set: [
			"OP4Prize"
		],
		name: "Disobey Orders",
		unique: false,
		text: "You may discard this card at any time to replace 1 [evade], [scan], or [battlestations] Token that is beside your ship with 1 [evade], [scan], or [battlestations] Token. ",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C167",
		gameId: 1,
		set: [
			"OP4Prize"
		],
		name: "Christopher Hobson",
		unique: true,
		text: "<b>ACTION:</b> Gain +1 attack die when firing at any Cloaked ship. ",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W100",
		gameId: 1,
		set: [
			"OP4Prize"
		],
		name: "Secondary Torpedo Launcher",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Discard this card and spend your target lock to perform this attack. \nIf you have already fired another torpedo at an enemy ship in your forward firing arc this round, you may use this weapon to make a second attack against that ship, at -1 attack die. You do not need to spend a second target lock to make the extra attack.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "tech",
		id: "T229",
		gameId: 1,
		set: [
			"OP4Prize"
		],
		name: "High Energy Sensor Sweep",
		unique: false,
		text: "After you move, you may disable 1 Active Shield to perform a free [scan] Action.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E112",
		gameId: 1,
		set: [
			"OP5Prize"
		],
		name: "Invaluable Advice",
		unique: true,
		text: "Before rolling your attack or defense dice, you may discard this card to place a [battlestations] Token beside your ship.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C166",
		gameId: 1,
		set: [
			"OP5Prize"
		],
		name: "Breen Guards",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Disable Breen Guards and discard one [crew_text] Upgrade of your choice on the target ship. ",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T228",
		gameId: 1,
		set: [
			"OP5Prize"
		],
		name: "Cold Storage Unit",
		unique: false,
		text: "Add 2 additional [weapon_text] icons to your ship's Upgrade Bar.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C165",
		gameId: 1,
		set: [
			"71276"
		],
		name: "Marla Gilmore",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Disable this card and 1 [tech_text] of your choice on the target ship. You may then use that Upgrade's Action (if any) as a free Action this round.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C164",
		gameId: 1,
		set: [
			"71276"
		],
		name: "Noah Lessing",
		unique: true,
		text: "<b>ACTION:</b> Disable this card and any 1 of your [tech_text] Upgrades to target a ship at Range 1-2. Disable 1 of the target ship's Active Shields.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "question",
		id: "Q024",
		gameId: 1,
		set: [
			"71276"
		],
		name: "Emergency Medical Hologram",
		unique: true,
		text: "This Upgrade counts as either a [crew_text] Upgrade or a [tech_text] Upgrade (your choice). \n\nWhen you use a [tech_text] Upgrade that requires you to disable it, you may disable this card instead of that [tech_text] Upgrade.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: "",
		countsAsUpgrade: true
	},
	{
		type: "tech",
		id: "T226",
		gameId: 1,
		set: [
			"71276"
		],
		name: "Navigational Deflector",
		unique: false,
		text: "When taking damage, you may discard this card to cancel 1 [hit] result. \n\nIf the damage is from a minefield or an obstacle, disable this card instead of discarding it. If you disable this card, you may roll defense dice against obstacles or minefields.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E111",
		gameId: 1,
		set: [
			"71448"
		],
		name: "Klingon Honor",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to add +1 attack die and convert 1 [hit] result into 1 [crit] result during any one attack you initiate this round. You cannot roll any defense dice this round. \n\nThis Upgrade may only be purchased for a Klingon Captain.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C162",
		gameId: 1,
		set: [
			"71448"
		],
		name: "Bu'Kah",
		unique: true,
		text: "If you performed a Green Maneuver this round, discard this card to repair up to 2 damage to your Hull.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T225",
		gameId: 1,
		set: [
			"71448"
		],
		name: "Shockwave",
		unique: false,
		text: "Instead of moving normally during the Activation Phase, you may discard this card and disable 1 of your Torpedoes to disregard your chosen Maneuver and perform a Red 1 [reverse] Full Astern Maneuver instead. \n\nThis upgrade may only be purchased for a Raptor Class ship.",
		factions: [
			"klingon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T224",
		gameId: 1,
		set: [
			"71448"
		],
		name: "Tactical Sensors",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to place a [battlestations] Token and a [scan] Token beside your ship. \n\nThis upgrade may only be purchased for a Raptor class ship.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C161",
		gameId: 1,
		set: [
			"71278"
		],
		name: "Centurion",
		unique: false,
		text: "When one of your [crew_text] upgrades or your Captain is to be disabled or discarded, you may discard this card instead.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C160",
		gameId: 1,
		set: [
			"71278"
		],
		name: "Romulan Officer",
		unique: true,
		text: "<b>ACTION:</b> Discard this card. \nIf you initiate an attack while Cloaked this round, add +2 attack dice. You cannot roll any defense dice this round.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E110",
		gameId: 1,
		set: [
			"71278"
		],
		name: "Decoy",
		unique: true,
		text: "When defending, before any dice are rolled, you may discard this card and any one of your [weapon_text] or [tech_text] Upgrades to force your opponent to roll 3 less attack dice this round.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E109",
		gameId: 1,
		set: [
			"71278"
		],
		name: "Double Back",
		unique: true,
		text: "After performing a [sensor-echo] Action, you may discard this card to immediately perform a [reverse] 1 or [reverse] 2 Full Astern Maneuver.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W098",
		gameId: 1,
		set: [
			"71278"
		],
		name: "Nuclear Warhead",
		unique: false,
		text: "<b>ACTION:</b> At the end of the Activation Phase, discard this card and place a Minefield Token within Range 1 of your ship, but not within your forward firing arc and not on top of another ship. If a ship enters the minefield on a future turn, roll 3 attack dice. Any [hit] or [crit] damages the ship as normal. The affected ship does not roll any defense dice.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C159",
		gameId: 1,
		set: [
			"71279"
		],
		name: "Kudak'Etan",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1. Discard this card and disable 1 of your other [crew_text] Upgrades to disable all [crew_text] Upgrades on the target ship (even if that ships is Cloaked or has Active Shields). \n\nThis Upgrade may only be purchased for a Jem'hadar ship.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C158",
		gameId: 1,
		set: [
			"71279"
		],
		name: "Ixtana'Rax",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to flip over all Critical Damage cards assigned to your ship.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C157",
		gameId: 1,
		set: [
			"71279"
		],
		name: "Ikat'Ika",
		unique: true,
		text: "When defending , you may discard this card to force one ship that attacks you this round to re-roll any number of their attack dice of your choice (once per die). \n\nThis Upgrade costs +5 Squadron Points for any non-Jem'hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W097",
		gameId: 1,
		set: [
			"71279"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf fired from a Jem'Hadar Battleship add +2 attack dice. \nYou may fire this weapon form your forward or rear firing arcs.",
		factions: [
			"dominion"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "talent",
		id: "E108",
		gameId: 1,
		set: [
			"71279"
		],
		name: "Ketracel-White",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to remove all Disabled Upgrade Tokens from all of your Dominion [crew_text] Upgrades.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T223",
		gameId: 1,
		set: [
			"71279"
		],
		name: "Shroud",
		unique: false,
		text: "If one of your Dominion [crew_text] Upgrades is supposed to be discarded, discard this card instead.",
		factions: [
			"dominion"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W096",
		gameId: 1,
		set: [
			"71279",
			"71524"
		],
		name: "Phased Polaron Beam",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nAll damage inflicted by this attack ignores the opposing ship's Shields. \n\nThis Upgrade costs +5 Squadron Points for any non-Jem'Hadar ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1"
	},
	{
		type: "talent",
		id: "E107",
		gameId: 1,
		set: [
			"OP6Prize"
		],
		name: "Blockade",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target all friendly ships within Range 1 of your ship (including your ship). Target ships gain +1 attack die and +1 defense die this round.",
		factions: [
			"bajoran"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E106",
		gameId: 1,
		set: [
			"OP6Prize"
		],
		name: "I Am Kohn-Ma",
		unique: true,
		text: "<b>ACTION:</b> Discard the card to target a ship at Range 1-3. Disable one Upgrade of your choice on the target ship. \n\nThis upgrade may only be purchased for a Bajoran Captain.",
		factions: [
			"bajoran"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C156",
		gameId: 1,
		set: [
			"OP6Prize"
		],
		name: "Li Nalas",
		unique: true,
		text: "You may disable Li Nalas to prevent 1 of your [crew_text] Upgrades or Captain Card from being disabled this round. \nOR \nYou may discard Li Nalas to prevent 1 of your [crew_text] Upgrades or Captain Card from being discarded this round.",
		factions: [
			"bajoran"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C155",
		gameId: 1,
		set: [
			"OP6Prize"
		],
		name: "Day Kannu",
		unique: true,
		text: "During the Activation Phase, you may discard this card to perform an additional Action from your Action Bar as a free Action.",
		factions: [
			"bajoran"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T222",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Ablative Generator",
		unique: false,
		text: "<b>ACTION:</b> Place or remove the Ablative Generator Token beside your ship. \n\nThis Upgrade may only be purchased for the <i>U.S.S. Voyager</i>.",
		factions: [
			"federation"
		],
		cost: 10,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C154",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "B'elanna Torres",
		unique: true,
		text: "Add 1 additional [weapon_text] icon and 1 additional [tech_text] icon to your ship's Upgrade Bar.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T221",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Bio-Electric Interference",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target all other ships within range 1-3 of your ship. Target ships must discard all Tokens that are placed beside their ships except for Auxiliary Power Tokens. A ship that discards a [cloak] Token may immediately raise its Shields. In addition, your ship cannot be target locked this round. This Upgrade may only be purchased for a Species 8472 ship.",
		factions: [
			"species-8472"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T220",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Bio-Neural Circuitry",
		unique: false,
		text: "After your roll the dice for any reason, you may disable this Upgrade to re-roll the dice. You must re-roll all of the dice and keep the results of the second roll.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B016",
		gameId: 1,
		set: [
			"71283",
			"71444",
			"72283"
		],
		name: "Borg Ablative Hull Armor",
		unique: false,
		text: "When defending, convert all of your opponents' [crit] results into [hit] results and place all the damage cards that your ship receives beneath this card. Once there are 4 damage cards beneath this card, discard this Upgrade and all damage cards beneath it. All excess damage affects the ship as normal.",
		factions: [
			"borg"
		],
		cost: 10,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B015",
		gameId: 1,
		set: [
			"71283",
			"71530",
			"72283"
		],
		name: "Borg Assimilation Tubules",
		unique: false,
		text: "<b>ACTION:</b> Disable this card and discard 1 Drone Token to target a ship at Range 1-2. Steal 1 [crew_text], [tech_text], or [weapon_text] Upgrade from the target ship, even if it exceeds your ship's restrictions. Place a Disabled Upgrade Token on the assimilated Upgrade. You cannot steal a Species 8472 Upgrade with this Action.",
		factions: [
			"borg"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B014",
		gameId: 1,
		set: [
			"71283",
			"71444",
			"71513a",
			"72283"
		],
		name: "Borg Tractor Beam",
		unique: false,
		text: "<b>ACTION:</b> Target a ship at Range 1. Place one white Borg Tractor Beam Token beside that ship and the corresponding green Borg Tractor Beam Token (the one that matches the white token's letter) beside your ship.",
		factions: [
			"borg"
		],
		cost: 7,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T219",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Extraordinary Immune Response",
		unique: false,
		text: "When you defend, you may discard this card to roll 1 extra defense die for every damage card that is by your Ship Card. \n\nThis Upgrade may only be purchased for a Species 8472 ship.",
		factions: [
			"species-8472"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T218",
		gameId: 1,
		set: [
			"71283",
			"72283"
		],
		name: "Feedback Pulse",
		unique: true,
		text: "When defending, before any dice are rolled, you may discard this card to declare that half of the damage from this attack will be cancelled and the other half will be assigned to the attacker (round down); you receive no damage. The attacking ship cannot receive critical damage from this effect. Place an Auxiliary Power Token beside your ship.",
		factions: [
			"borg"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C153",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Harry Kim",
		unique: true,
		text: "<b>ACTION:</b> Disable Harry to repair 1 Shield Token.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C152",
		gameId: 1,
		set: [
			"71282"
		],
		name: "Kazon Raiding Party",
		unique: false,
		text: "When attacking, if you inflict at least 2 damage you may discard this card to reduce the damage to exactly 1 critical damage that ignores the opposing ship's Shields. Disable 1 [tech_text] Upgrade of your choice on the target ship and then steal that Upgrade, even if it exceeds your ship's requirements. \nThis Upgrade may only be purchased for a Kazon ship.",
		factions: [
			"kazon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T217",
		gameId: 1,
		set: [
			"71282"
		],
		name: "Masking Circuitry",
		unique: false,
		text: "Instead of performing a normal Action, you may disable this card to perform the [cloak] Action. Place an Auxiliary Power Token beside your ship. While you have a [cloak] Token beside your ship, you may perform the [sensor-echo] Action even if this card is disabled. \n\nThis Upgrade cost +5 Squadron Points for any ship other than a Kazon ship.",
		factions: [
			"kazon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T216",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Quantum Singularity",
		unique: false,
		opBanned: true,
		text: "<b>ACTION:</b> Discard this card to remove your ship from the play area and discard all Tokens that are beside your ship except for Auxiliary Power Tokens. During the End Phase, place your ship back in the play area. You cannot place your ship within Range 1-3 of any other ship. This Upgrade may only be purchased for a Species 8472 ship.",
		factions: [
			"species-8472"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E105",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Sacrifice",
		unique: true,
		text: "Before rolling the dice during an attack or defense, you may discard this Upgrade and disable your Captain in order to choose the results of two dice. These dice cannot be re-rolled for the remainder of this attack.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C150",
		gameId: 1,
		set: [
			"71282"
		],
		name: "Seska",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 2-3. Disable Seska and 1 [crew_text] Upgrade of your choice on the target ship. \n\nThis ability can be used against a ship that is Cloaked.",
		factions: [
			"kazon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C149",
		gameId: 1,
		set: [
			"71283",
			"72283"
		],
		name: "Seven of Nine",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to add up to 2 Drone Tokens your Captain Card. You may not exceed your starting number of Drone Tokens.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C148",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Seven of Nine",
		unique: true,
		text: "<b>ACTION:</b> Disable Seven of Nine to place 1 Adaptation Token on any [tech_text] Upgrade on an enemy ship within Range 1-2. You cannot use this Action against a Species 8472 [tech_text] Upgrade.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},

	{
		type: "question",
		id: "Q025",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "The Doctor",
		unique: true,
		text: "The Doctor counts as either a [crew_text] Upgrade or a [tech_text] Upgrade (your choice). \n\n<b>ACTION:</b> Remove all Disabled Upgrade tokens from your [crew_text] Upgrades.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: "",
		countsAsUpgrade: true
	},
	{
		type: "talent",
		id: "E104",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "The Weak Will Perish",
		unique: true,
		text: "When attacking with your Primary Weapon, after rolling your attack dice, you may discard this card and disable your Captain Card to choose any number of your attack dice and re-roll them up to 2 times. This Upgrade cost +5 Squadron Points for any ship other than a Species 8472 ship.",
		factions: [
			"species-8472"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C146",
		gameId: 1,
		set: [
			"71282"
		],
		name: "Tierna",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard Tierna and roll 2 attack dice. The target ship takes normal damage to its Hull for each [hit] and [crit] result. The target ship does not roll any defense dice against this attack.",
		factions: [
			"kazon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C145",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Tom Paris",
		unique: true,
		text: "When defending, your ship rolls 1 extra defense die.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C144",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Tuvok",
		unique: true,
		text: "When firing a Secondary Weapon, you may disable Tuvok to roll 1 extra attack die.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W095",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Biological Attack",
		unique: false,
		text: "At the end of the Activation Phase, if your ship base is touching an enemy ship base, you may discard this Upgrade and disable your Captain Card to inflict 1 critical damage to the enemy ship's Hull (even if it has Active Shields). Then disable 1 [crew_text] Upgrade of your choice on the enemy ship. This Upgrade may only be purchased for a Species 8472 ship.",
		factions: [
			"species-8472"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W094",
		gameId: 1,
		set: [
			"71283",
			"71444",
			"71513a",
			"72283"
		],
		name: "Cutting Beam",
		unique: false,
		text: "<b>ATTACK:</b> You must have the target ship held in a Borg Tractor Beam (i.e. the target ship must have the white Borg Tractor Beam Token beside its ship and your must have the corresponding green Borg Tractor Beam Token beside your ship) and disable this card to perform this attack. This Upgrade may only be purchased for a Borg Ship.",
		factions: [
			"borg"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 10,
		range: "1"
	},
	{
		type: "weapon",
		id: "W093",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Energy Blast",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nIf fired from a Species 8472 Bioship, add +2 attack dice.",
		factions: [
			"species-8472"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W092",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Energy Focusing Ship",
		unique: true,
		text: "<b>ATTACK:</b> Discard this card to perform this attack. Target all friendly ships within Range 1 of your ship that have not yet attacked this round. Target ships cannot make a normal attack this round. Instead, add +2 attack dice to your attack roll for this attack for each targeted ship. Place an Auxiliary Power Token beside your ship and each of the target ships. This Upgrade may only be purchased for a Species 8472 ship.",
		factions: [
			"species-8472"
		],
		cost: 10,
		skill: 0,
		talents: 0,
		attack: 6,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W091",
		gameId: 1,
		set: [
			"71282"
		],
		name: "Photonic Charges",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nPlace an Auxiliary Token beside the target ship if there at least 1 uncancelled [hit] or [crit] result.",
		factions: [
			"kazon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W090",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Transphasic Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack. \nYou may fire this weapon from your forward or rear firing arcs. \nThis Upgrade may only be purchased for the U.S.S. Voyager.",
		factions: [
			"federation"
		],
		cost: 10,
		skill: 0,
		talents: 0,
		attack: 10,
		range: "2 - 3"
	},
	{
		type: "talent",
		id: "E103",
		gameId: 1,
		set: [
			"OPWebPrize",
			"71795"
		],
		name: "Tholian Punctuality",
		unique: true,
		text: "When you initiate an attack, you may discard this card to gain +1 attack die for that attack. \n\nThis upgrade may only be purchased by Loskene or any other Tholian Captain.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W089",
		gameId: 1,
		set: [
			"OPWebPrize",
			"71795"
		],
		name: "Energy Web",
		unique: false,
		text: "<b>ACTION:</b> If you performed a 1 [forward] Maneuver this round, you may place 1 Energy Web Token in the play area behind your ship. \n\nThis Upgrade may only be purchased for a Tholian Ship.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W088",
		gameId: 1,
		set: [
			"OPWebPrize",
			"71795"
		],
		name: "Plasma Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may re-roll all of your blank results one time. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 2"
	},
	{
		type: "talent",
		id: "E102",
		gameId: 1,
		set: [
			"OPWebParticipation"
		],
		name: "Red Alert",
		unique: true,
		text: "When you spend a [battlestations] Token, you may discard this card instead of returning the [battlestations] Token to the Action Token supply.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C143",
		gameId: 1,
		set: [
			"71446"
		],
		name: "Muroc",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2 and roll 2 attack dice. For every [hit] and [crit] result, disable 1 Active Shield on the target ship. If the target ship is Cloaked, a [hit] result flips that ship's [cloak] Token over to its red side.",
		factions: [
			"vulcan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C142",
		gameId: 1,
		set: [
			"71446"
		],
		name: "T'Pol",
		unique: true,
		text: "When defending, if you have a [scan] Token beside your ship, you may spend that token to re-roll up to 2 of your defense dice.",
		factions: [
			"vulcan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T214",
		gameId: 1,
		set: [
			"71446"
		],
		name: "Auxiliary Control Room",
		unique: false,
		text: "At any time, you may disable this card to remove 1 Auxiliary Power Token from beside your ship.",
		factions: [
			"vulcan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T213",
		gameId: 1,
		set: [
			"71446"
		],
		name: "Sensor Grid",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target one other friendly ship within Range 1-3 of your ship. Place a [scan] Token and an Auxiliary Power Token beside your ship and the target ship. If you do so, every Cloaked enemy ship that is within Range 1-2 of your ship must immediately flip its [cloak] Token over to its red side.",
		factions: [
			"vulcan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E101",
		gameId: 1,
		set: [
			"71446"
		],
		name: "Vulcan High Command",
		unique: true,
		text: "Add 2 Upgrade slots to your Upgrade Bar. The additional Upgrade slots may be either [crew_text] or [tech_text] Upgrades. This Upgrade may only be purchased for a Vulcan Captain on a Vulcan ship. If the Vulcan Captain Card is every removed from your ship, discard this Upgrade and then discard Upgrades from your ship one at a time until all of your Upgrades are supported by your ship's Upgrade Bar.",
		factions: [
			"vulcan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C141",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Neela",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1-3 and roll 3 attack dice. If you roll at least 1 [crit] result, inflict 1 critical damage to the target ship's Hull. If you damaged the target ship with this Action, discard this card. If you did not damage the target ship with this Action, disable this card.",
		factions: [
			"bajoran"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C140",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Anara",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to repair 1 damage to your Hull",
		factions: [
			"bajoran"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T212",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Warp Drive Refit",
		unique: false,
		text: "During the Activation Phase, if you reveal a 3 [forward] Maneuver, you may use a 4 [forward] Maneuver instead. \n\nThis Upgrade may only be purchased for a ship that does not have a 4 or higher on its Maneuver Dial.",
		factions: [
			"bajoran"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T211",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Maneuverability",
		unique: false,
		text: "During the Activation Phase, if you reveal a 1 [turn-right], a 1 [turn-left] or a [come-about] Maneuver, you may use the Full About [full-about] Maneuver Template instead. If you do so, treat this as a Red Maneuver. After performing any maneuver, you may overlap a Planet Token (i.e. you do not move back along your Maneuver Template). While you are overlapping a Planet Token, you can still perform Actions, attack without penalty, and be attacked (although you roll +1 defense die). This Upgrade costs +5 SP for any ship other than a Bajoran Interceptor.",
		factions: [
			"bajoran"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E100",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Militia",
		unique: true,
		text: "At the start of the Combat Phase, you may discard this card to place a [battlestations] Token beside your ship (even if there is already one there). In addition, if this Upgrade is equipped to a Bajoran ship with a Bajoran Captain, you gain +2 attack dice to your first attack made during the round in which you use this Upgrade.",
		factions: [
			"bajoran"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C139",
		gameId: 1,
		set: [
			"71444"
		],
		name: "Four of Twelve",
		unique: true,
		text: "<b>ACTION:</b> Discard this card and 1 of your Drone Tokens to target a ship within Range 1-3. Remove any 1 Token ([evade], [scan], [battlestations], or blue  [target-lock]) from beside the target ship. Then place 1 [scan] token beside your ship. If you removed a blue  [target-lock] Token with this Action, also remove the corresponding red  [target-lock] Token from the play area as well.",
		factions: [
			"borg"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B013",
		gameId: 1,
		set: [
			"71444",
			"71525"
		],
		name: "Borg Alcove",
		unique: false,
		text: "<b>ACTION:</b> Add 1 Drone Token to your Captain Card. You cannot exceed your Captain's starting number of Drone Tokens.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E099",
		gameId: 1,
		set: [
			"71444"
		],
		name: "Assimilated Access Codes",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 2-3, and then discard up to 3 Drone Tokens from your Captain Card. Disable a number of Active Shields on the target ship equal to the number of Drone Tokens that you discarded with this Action. If the target ship is Cloaked, you may instead discard 2 Drone Tokens to flip the target ship's [cloak] Token over to its red side. This Upgrade may only be purchased for a Borg Captain.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T210",
		gameId: 1,
		set: [
			"71444"
		],
		name: "Self Destruct Sequence",
		unique: false,
		text: "<b>ACTION:</b> You cannot attack this round. During the next Activation Phase, you cannot move or take any Actions (including free Actions). At the end of the next Activation Phase, after all ships have moved, destroy your ship and roll a number of attack dice equal to your Hull value to damage every ship within Range 1-3 of your ship. A ship does not roll defense dice against this attack unless that ship has a [scan] Token beside it.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W087",
		gameId: 1,
		set: [
			"71446",
			"71527"
		],
		name: "Photonic Weapon",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may re-roll one of your blank results. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"vulcan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W086",
		gameId: 1,
		set: [
			"71446"
		],
		name: "Aft Particle Beam",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may only fire this weapon from your rear firing arc.",
		factions: [
			"vulcan"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W085",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Phaser Strike",
		unique: false,
		text: "<b>ACTION:</b> During the Combat Phase, you may attack with this Weapon as if you had a Captain Skill of \"10\". \n<b>ATTACK:</b> Disable this card to perform this attack. Range combat bonuses apply to this attack. This Upgrade may only be purchased for a ship with a Hull value of 3 or less and costs +5 SP for any ship other than a Bajoran Interceptor.",
		factions: [
			"bajoran"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W084",
		gameId: 1,
		set: [
			"71444"
		],
		name: "Full Assault",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \nYou must divide this attack between 2 or 3 different ships; you may divide your attack dice however you like, but you must roll at least 2 attack dice against each ship. \nIf fired from a Borg Tactical Cube, add +3 attack dice.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 6,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W083",
		gameId: 1,
		set: [
			"71444",
			"71513a"
		],
		name: "Borg Missile",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. The target ship does not sustain normal damage from this attack. Instead, place 1 Auxiliary Power Token beside the target ship AND destroy 1 of its Active Shields for each [hit] or [crit] result. The target ship does not roll defense dice against this attack. This Upgrade may only be purchased for a Borg ship.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 2"
	},
	{
		type: "tech",
		id: "T209",
		gameId: 1,
		set: [
			"OPArenaPrize",
			"71797"
		],
		name: "Jammed Communications",
		unique: false,
		text: "<b>ACTION:</b> All ships within Range 1-3 of your ship (including your own) cannot provide or benefit from any text abilities that affect other friendly ships this round. Place an Auxiliary Power Token beside your ship.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C138",
		gameId: 1,
		set: [
			"OPArenaPrize"
		],
		name: "Gorn Pilot",
		unique: true,
		text: "<b>ACTION:</b> If you performed a straight Maneuver this round, you may disable this card to immediately perform an additional 1 [forward] Maneuver.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T208",
		gameId: 1,
		set: [
			"OPArenaPrize"
		],
		name: "Impulse Overload",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1 of your ship and roll 3 attack dice. If you roll at least 1 [hit] or [crit] result, the target ship must discard 1 [tech_text] Upgrade (of its choice).",
		factions: [
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T207",
		gameId: 1,
		set: [
			"71797"
		],
		name: "Impulse Overload",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1 of your ship and roll 3 attack dice. If you roll at least 1 [hit] or [crit] result, the target ship must discard 1 [tech_text] Upgrade (of its choice).",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E098",
		gameId: 1,
		set: [
			"OPArenaPrize",
			"71797"
		],
		name: "Faked Messages",
		unique: true,
		text: "During the Planning Phase, after every ship's maneuver has been chosen, you may discard this card to target 1 enemy ship that is not within Range 1-3 of your ship. Force that ship to change its chosen Maneuver to a 1 [forward] Maneuver.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E097",
		gameId: 1,
		set: [
			"OPArenaParticipation"
		],
		name: "Full Alert",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to place 1 [evade] Token, 1 [scan] Token, 1 [battlestations] Token, and 1 Auxiliary Power Token beside your ship. Your ship cannot perform any free Actions during the same round that you perform this Action (either before or after you perform this Action).",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C137",
		gameId: 1,
		set: [
			"i_k_s_b_moth"
		],
		name: "Kunivas",
		unique: true,
		text: "During the Modify Attack Dice step of the Combat Phase, you may discard this card to add 1 additional [hit] result.",
		factions: [
			"klingon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E096",
		gameId: 1,
		set: [
			"i_k_s_b_moth"
		],
		name: "Qapla'",
		unique: true,
		text: "During the Roll Attack Dice step of the Combat Phase, before rolling any of your attack dice, you may discard this card to select one of your attack dice and set it on the side of your choice. That die cannot be rolled or re-rolled during the round in which you use this Upgrade.",
		factions: [
			"klingon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T206",
		gameId: 1,
		set: [
			"i_k_s_b_moth"
		],
		name: "Tritium Intermix",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to flip all of your critical damage cards face down and then repair 1 damage to your ship's Hull. You may perform an [evade] Action as a free Action this round.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C136",
		gameId: 1,
		set: [
			"i_r_w_vorta_vor"
		],
		name: "Tal",
		unique: true,
		text: "When attacking a ship with a [scan] Token beside it, during the Roll Attack Dice step of the Combat Phase, you may disable this card to gain +1 attack die.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T205",
		gameId: 1,
		set: [
			"i_r_w_vorta_vor"
		],
		name: "Advanced Cloaking",
		unique: false,
		text: "When attacking while you are Cloaked, if there are no Auxiliary Power Tokens beside your ship, you may place an Auxiliary Power Token beside your ship before rolling any dice to keep your [cloak] Token from flipping to its red side.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C135",
		gameId: 1,
		set: [
			"gavroche"
		],
		name: "Lon Suder",
		unique: true,
		text: "During the Roll Attack Dice step of the Combat Phase, you may disable this card and spend a [battlestations] Token to add +1 additional attack die to your attack.",
		factions: [
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E095",
		gameId: 1,
		set: [
			"i_r_w_vorta_vor"
		],
		name: "Direct Command",
		unique: true,
		text: "<b>ACTION:</b> Discard this card and spend your Target Lock to gain +2 attack dice this round.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C134",
		gameId: 1,
		set: [
			"gavroche",
			"72321"
		],
		name: "Sakonna",
		unique: true,
		text: "Add 1 additional [weapon_text] Upgrade slot to your Upgrade Bar. \n\nAll of your [weapon_text] Upgrades with a cost of 5 or less cost -2 SP.",
		factions: [
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E094",
		gameId: 1,
		set: [
			"gavroche"
		],
		name: "Hijack",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2 that is not cloaked and has no Active Shields. Disable all of your remaining Shields and 1 [crew_text] Upgrade on the target ship. Then steal 1 face up [tech_text] or [weapon_text] Upgrade Card of your choice from that ship, even if the Upgrade exceeds your ship's restrictions.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C133",
		gameId: 1,
		set: [
			"3rd_wing_attack_ship"
		],
		name: "Seskal",
		unique: true,
		text: "If all your Shields have been destroyed, during the Roll Attack Dice step of the Combat Phase you may disable this card to gain +2 attack dice.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E093",
		gameId: 1,
		set: [
			"3rd_wing_attack_ship"
		],
		name: "First Strike",
		unique: true,
		text: "During the Combat Phase, if you have 2 or more enemy ships in your forward firing arc within Range 1-3, you may discard this card to treat your Captain's Skill Number as a 10 until the End Phase. \n\nThis Upgrade may only be purchased for a ship with a Hull Value of 3 or less.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T204",
		gameId: 1,
		set: [
			"3rd_wing_attack_ship"
		],
		name: "Ion Thrusters",
		unique: false,
		text: "During the Activation Phase, after you reveal a straight Maneuver, you may disable this card to add +1 to the Maneuver's number (i.e. a 2 becomes a 3, a 3 becomes a 4, etc). \n\nNo ship may be equipped with more than 1 Ion Thrusters Upgrade.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E092",
		gameId: 1,
		set: [
			"u_s_s_yaeger"
		],
		name: "Preemptive Strike",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 2-3 in forward firing arc and roll 3 attack dice. Any [hit] or [crit] damages the target ship as normal. The target ship rolls defense dice against this attack.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C132",
		gameId: 1,
		set: [
			"u_s_s_yaeger",
			"72302p"
		],
		name: "Elizabeth Shelby",
		unique: true,
		text: "<b>WHEN DEFENDING:\n\n</b> This ship may re-roll one of its [blank] results.\n\n If the attacking ship is a <img src='https://i.imgur.com/tGfLdVL.png' width='20' height='20'> ship, this ship rolls +1 defense die and may re-roll all of its [blank] results",
		factions: [
			"federation"
		],
		cost: 2
	},
	{
		type: "crew",
		id: "C131",
		gameId: 1,
		set: [
			"u_s_s_yaeger"
		],
		name: "Reginald Barclay",
		unique: true,
		text: "<b>ACTION:</b> Disable this card and roll 3 defense dice. For each [evade] result, repair 1 damage to your Hull. If you repair 2 or more damage with this Action in a single round, place an Auxiliary Power Token beside your ship. If you repair 3 damage with this Action in a single round, discard this card.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W082",
		gameId: 1,
		set: [
			"i_k_s_b_moth"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W081",
		gameId: 1,
		set: [
			"i_r_w_vorta_vor"
		],
		name: "Plasma Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W080",
		gameId: 1,
		set: [
			"gavroche"
		],
		name: "Focused Particle Beam",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. During the Roll Attack Dice step of the Combat Phase, if you roll a [hit] or [crit] result on each one of your dice with this attack, continue rolling 1 additional attack die, one-at-a-time, until you do not roll a [hit] or [crit] result (max 3 additional dice). Add all [hit] or [crit] results from the additional dice to your total for this attack. Any Blank or [battlestations] results from the additional dice are not added.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W079",
		gameId: 1,
		set: [
			"3rd_wing_attack_ship"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W078",
		gameId: 1,
		set: [
			"u_s_s_yaeger",
			"71523"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "talent",
		id: "E091",
		gameId: 1,
		set: [
			"71523"
		],
		name: "The Needs of the Many...",
		unique: true,
		text: "<b>ACTION:</b> Discard this card and one of your [crew_text] Upgrades with an SP cost of 3 or higher to repair up to 3 of your Shields.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C130",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Leonard McCoy",
		unique: true,
		text: "<b>ACTION:</b> Remove 2 Disabled Upgrade Tokens from your [crew_text] Upgrades.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C129",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Saavik",
		unique: true,
		text: "You may disable this card at any time to replace 1 [scan] or [battlestations] Token that is beside your ship with 1 [evade] Token.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C128",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Ilia",
		unique: true,
		text: "You do not lose your \"Perform Actions\" step when you overlap another ship's base.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C127",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Hikaru Sulu",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked and you performed a Green Maneuver this round, perform a [sensor-echo] Action.  You may use this Action even if your ship does not have the [sensor-echo] Action on its Action Bar.\n\nYou may only use the 1 [forward] Maneuver Template for this Action.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E090",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Self-Destruct Sequence",
		unique: true,
		text: "<b>ACTION:</b> You cannot attack this round.  At the end of the next Activation Phase, after all ships have moved, destroy your ship and roll a number of attack dice equal to your Hull value to damage every ship within Range 1 of your ship.  These ships do not roll defense dice against this damage.  You cannot use the Cheat Death [talent_text] Upgrade in conjunction with this Action.  This Upgrade may only be purchased for a Federation ship.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C126",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Montgomery Scott",
		unique: true,
		text: "At any time, you may disable this card to prevent 1 Auxiliary Power Token from being placed beside your ship.\n\nOR\n\n<b>ACTION:</b> Discard this card to immediately repair up to 2 damage to your ship's Hull.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C125",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Pavel Chekov",
		unique: true,
		text: "When attacking with your Primary Weapon, during the Modify Attack Dice step of the Combat Phase, you may disable this card to re-roll all of your blank results.  You must keep the results of the second roll.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C124",
		gameId: 1,
		set: [
			"71523"
		],
		name: "Nyota Uhura",
		unique: true,
		text: "At the start of the Activation Phase, you may disable this card to add +2 to your Captain's Skill Number until the End Phase.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C123",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Goval",
		unique: true,
		text: "Discard this card at any time to prevent 1 of your other [crew_text] Upgrades from being discarded or disabled.\n\nIf this Upgrade is deployed to a ship with a Borg Captain, you must spend 1 Drone Token to use this ability.",
		factions: [
			"borg",
			"independent"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C122",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Bosus",
		unique: true,
		text: "If an enemy ship causes any of your [crew_text] Upgrades to be discarded, place those Upgrades face down beneath this card.\n<b>ACTION:</b> Discard this card and all the cards beneath it.  For each card that was discarded by this Action (including this card), you gain +1 attack die when attacking with your Primary Weapon this round.  If this Upgrade is deployed to a ship with a Borg Captain, you must spend 2 Drone Tokens to use this Action.",
		factions: [
			"borg",
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C121",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Crosis",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1. Disable 1 [crew_text] or 1 [tech_text] Upgrade of your choice on the target ship.  Then steal 1 [crew_text] Upgrade of your choice from that ship, even if the Upgrade exceeds your ship's restrictions.  If this Upgrade is deployed to a ship with a Borg Captain,  you must spend 2 Drone Tokens to perform this Action.",
		factions: [
			"borg",
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C120",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Torsus",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to increase your Captain's Skill Number by +2 until the End Phase.\n\nIf this Upgrade is deployed to a ship with a Borg Captain, you must spend 1 Drone Token to perform this Action.",
		factions: [
			"borg",
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E089",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Diversionary Tactics",
		unique: true,
		text: "<b>ACTION:</b> Discard this card and one of your [crew_text] Upgrades to target a ship that is within Range 1-2 of your ship and not in your forward firing arc.  Target ship must discard 1 of its [crew_text] Upgrades (of its choice) and cannot attack your ship this round.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E088",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Experimental Link",
		unique: true,
		text: "During the Modify Attack Dice step of the Combat Phase, you may discard this card and either spend up to 3 of your Drone Tokens OR disable up to 3 of your [crew_text] Upgrades to re-roll a number of your attack dice equal to the number of Drone Tokens you spend or [crew_text] Upgrades you disabled with this card.  This Upgrade may only be purchased for a Borg Captain.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T203",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Subspace Distortion",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to perform this Action.  Each time you defend this round, instead of rolling your normal defense dice, roll a number of defense dice equal to your starting Shield value.  During the Modify Defense Dice step of the Combat Phase, you may re-roll a number of your blank results equal to your Active Shields.  You cannot attack this round.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B012",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Transwarp Conduit",
		unique: false,
		opBanned: true,
		text: "<b>ACTION:</b> Discard this card to remove your ship from the play area and discard all Tokens that are beside your ship except Auxiliary Power Tokens.  During the End Phase, place your ship back in the play area.  You cannot place your ship within Range 1-3 of any enemy ship.  This Upgrade may only be purchased for a Borg ship.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E087",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Unnecessary Bloodshed",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target every friendly ship within Range 1-3 (and your ship). During the Roll Attack Dice step of the Combat Phase, each target ship chooses one of its attack dice and places it on a [hit] result.  These dice may not be rolled or re-rolled this round.  This Upgrade may only be purchased for a Dominion Captain.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C119",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Lamat'Ukan",
		unique: true,
		text: "If your ship has already acquired a Target Lock on an enemy ship, during the Declare Target step of the Combat Phase, you may discard this card to remove your  [target-lock] Tokens and acquire a Target Lock on a different enemy ship as a free Action.  Normal Target Lock rules apply.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C118",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Remata'Klan",
		unique: true,
		text: "At the end of the Activation Phase, if your ship is in the forward firing arcs of at least 2 enemy ships within Range 1-3 of your ship, you may discard this card to add +2 to your Captain's Skill Number until the End Phase.  Gain +2 attack dice for all of your attacks during the round in which you use this Upgrade.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C117",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Amat'Igan",
		unique: true,
		text: "Each time you defend, roll +1 defense dice.\n\nWhenever an enemy Upgrade would cause one of your other [crew_text] Upgrades to be discarded, you must discard this card instead.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T202",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Sensor Array",
		unique: false,
		text: "During the Modify Attack Dice step of the Combat Phase, you may spend your [scan] Token to force 1 enemy ship to re-roll one of its attack dice of your choice.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W077",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b>: Spend your target lock and disable this card to perform this attack.\n\nIf the target ship is damaged by this attack, destroy 1 additional Active Shield on that ship (if possible).\n\nIf fired from a Borg ship, add +1 attack die.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W076",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Forward Weapons Array",
		unique: false,
		text: "<b>ATTACK: </b>Discard this card to target up to 3 ships in your forward firing arc.  Make a separate attack with this weapon against each of those ships.  If you attack 1 ship with this weapon, add +3 attack dice to that attack.  If you attack 2 ships with this weapon, add +1 die to each attack.\nThis Upgrade costs +5 SP if purchased for any non-Borg ship.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W075",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Volley of Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack.  You may disable 1 of your other Dominion Torpedo Upgrades and make one additional attack with it.  You do not need to have the 2nd ship target locked or spend a 2nd target lock to make this extra attack.  Both attacks must be made against different targets in your forward or rear firing arcs.  This Upgrade may only be purchased for a Jem'Hadar Battle Cruiser or Battleship.",
		factions: [
			"dominion"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W074",
		gameId: 1,
		set: [
			"71524"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack.\nIf fired from a Jem'Hadar Battle Cruiser, add +1 attack die.\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "tech",
		id: "T201",
		gameId: 1,
		set: [
			"71508"
		],
		name: "Combat Vessel Variant",
		unique: true,
		text: "Your Primary Weapon and Hull values are each at +1.  In addition, during the Activation Phase, if you reveal a 4 [forward] Maneuver, you may perform a 5 [forward] Maneuver instead.  If you do so, place an Auxiliary Power Token beside your ship. \n\nThis Upgrade may only be purchased for a Suurok Class ship.",
		factions: [
			"vulcan"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T200",
		gameId: 1,
		set: [
			"71508"
		],
		name: "Tractor Beam",
		unique: false,
		text: "If you are attacked at Range 1, you may disable this card to force the attacking ship to re-roll up to 2 attack dice of your choice.",
		factions: [
			"vulcan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E086",
		gameId: 1,
		set: [
			"71508"
		],
		name: "Diplomacy",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target 1 enemy ship within Range 1-3.  Discard all Tokens from beside your ship and the target ship (except for Auxiliary Power Tokens).  Both your ship and the target ship cannot attack or be attacked this round.",
		factions: [
			"vulcan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C116",
		gameId: 1,
		set: [
			"71508"
		],
		name: "Koss",
		unique: true,
		text: "While Koss is on your ship, none of your other Upgrades can be affected by your opponents. Discard this card immediately after it protects another Upgrade card.\n\n<b>( ERRATA )</b>",
		factions: [
			"vulcan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T099",
		gameId: 1,
		set: [
			"71509"
		],
		name: "Mutli-adaptive Shields",
		unique: true,
		text: "This upgrade only functions while you have Active Shields. Each time you defend, roll +1 defense die. When defending, you roll your full defense dice in spite of the presence of an enemy ship's [scan] Token. In addition, you roll your full defense against any Minefield Tokens. \n\nThis Upgrade may only be purchased for a Federation ship.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T098",
		gameId: 1,
		set: [
			"71509"
		],
		name: "Reinforced Structural Integrity",
		unique: true,
		text: "Each time your ship takes damage, place 1 of the damage cards that your ship receives beneath this card. All excess damage affects the ship as normal. You cannot place critical damage cards beneath this card. Once there are 3 damage cards beneath this card, discard this Upgrade and all cards beneath it. This Upgrade costs +5 SP for any ship other than the <i>U.S.S. Raven</i>.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E085",
		gameId: 1,
		set: [
			"71509"
		],
		name: "Research Mission",
		unique: false,
		text: "During the Roll Defense Dice step of the Combat Phase, you may disable this card to roll +1 defense die.",
		factions: [
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C115",
		gameId: 1,
		set: [
			"71509"
		],
		name: "Erin Hansen",
		unique: true,
		text: "During the Planning Phase, after all ships have chosen their Maneuvers, you may discard this card to target one enemy ship at Range 1-3 and look at that ship's chosen Maneuver. You may then change your Maneuver. The target ship cannot change its Maneuver after you look at it.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C114",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "Quark",
		unique: true,
		text: "At the start of the game, place 1 non-Borg [tech_text] Upgrade with a cost of 5 or less face down beneath this card. \n\nAt any time, you may discard Quark to flip the Upgrade that is beneath this card face up and deploy it to your ship, even if it exceeds your ship's restrictions.",
		factions: [
			"ferengi"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C113",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "Odo",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1-3 (even if that ship is Cloaked or has Active Shields). Disable this card and one Upgrade on the target ship. If the Upgrade you disabled is a [crew_text] Upgrade, you may then use that Upgrade's Action (if any) as a free Action this round.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "question",
		id: "Q019",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "Vic Fontaine",
		unique: true,
		text: "This Upgrade counts as either a [crew_text] or [tech_text] Upgrade (your choice). If an enemy Upgrade would affect one of your [crew_text] Upgrades, roll 2 defense dice. If you roll at least 1 [evade] result, ignore the effects of the enemy Upgrade. \n\nYou do not pay a Faction penalty when deploying this Upgrade to a Federation ship.",
		factions: [
			"independent"
		],
		countsAsUpgrade: true,
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C111",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "T'Kar",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not cloaked and has no Active Shields. Discards this card and 1 [crew_text] Upgrade of your choice on the target ship. Then disable the Captain Card and all remaining [crew_text] upgrades on the target ship. While the Captain Card is disabled, the target ship has a Skill of \"1\".",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C110",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "T'Rul",
		unique: true,
		text: "Add 1 [tech_text] Upgrade slot to your Upgrade Bar. While your ship is cloaked, during the Roll Defense Dice step of the Combat Phase, you may choose to roll 3 less defense dice and add 1 [evade] result to your defense roll. If the \"Cloaking Device\" Upgrade card is deployed to T'Rul's ship, you do not need to disable that card when you perform the Action listed on it.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C109",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "Elim Garak",
		unique: true,
		text: "During the Modify Defense step of the Combat Phase, you may disable this card to add 1 [evade] result to your defense roll.\n You do not pay a Faction penalty when assigning Elim Garak or his [talent_text] Upgrade to your ship. If Elim Garak is ever disabled or discarded, you cannot use his [talent_text] Upgrade.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 1,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C108",
		gameId: 1,
		set: [
			"71786",
			"71810"
		],
		name: "Julian Bashir",
		unique: true,
		text: "<b>ACTION:</b> Move a Disabled Upgrade Token from one of your disabled [crew_text] or [tech_text] Upgrades to one of your non-disabled [crew_text] or [tech_text] upgrades. You may then immediately perform the Action (if any) listed on the Upgrade that you moved the token from as a free Action.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T096",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Enhanced Hull Plating",
		unique: false,
		text: "During the Roll Defense Dice step of the Combat Phase, if your ship is not Cloaked and you have no Active Shields, you may add up to 2 [evade] results to your defense roll. If you do so, place 1 Auxiliary Power Token beside your ship for each [evade] result you added with this Upgrade. This Upgrade may only be purchased for a Federation ship. You cannot deploy more than 1 \"Enhanced Hull Plating\" [tech_text] Upgrade to any ship.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C107",
		gameId: 1,
		set: [
			"71526"
		],
		name: "T'Pol",
		unique: true,
		text: "Add 1 [tech_text] slot to your Upgrade Bar. When attacking with your Primary Weapon, if there is a [scan] Token beside your ship, you may disable this card to force the defending ship to roll -2 defense dice against your attack (instead of -1 defense die). You do not pay a Faction penalty when deploying this card to a Vulcan Ship.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C106",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Malcolm Reed",
		unique: true,
		text: "When attacking with your Primary Weapon, you may disable this card and discard 1 of your Secondary Weapon Upgrades to add +2 attack dice to your attack.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C105",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Hoshi Sato",
		unique: true,
		text: "When defending, if there is a [scan] Token beside your ship, during the Roll Attack Dice step of the Combat Phase you may disable this card to force the attacking ship to roll 1 less attack die.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C104",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Charles Tucker III",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not in the forward firing arc of any enemy ships, repair 1 damage to your ship's Hull.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C103",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Travis Mayweather",
		unique: true,
		text: "During the Activation Phase, if you reveal a 2 or 3 Bank Maneuver, you may disable this card to change it to a Turn Maneuver. If you do so, treat it as a Red Maneuver. The number and direction of the new Maneuver remain the same.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C102",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Phlox",
		unique: true,
		text: "During the Activation Phase, you may disable this card to remove all Disabled Upgrade Tokens from all of your other [crew_text] Upgrades.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E084",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Tactical Alert",
		unique: true,
		text: "When attacking or defending, you may discard this card and spend a [battlestations] Token to re-roll any number of your attack or defense dice.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C101",
		gameId: 1,
		set: [
			"71527"
		],
		name: "Vulcan Commandos",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card and any number of your other \"Vulcan Commandos\" [crew_text] Upgrades. For each of your [crew_text] Upgrades that you discarded with this Action disable 1 Upgrade of your choice on the target ship AND gain +1 attack die this round against that ship. This Upgrade may only be purchased for a Vulcan Ship.",
		factions: [
			"vulcan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T095",
		gameId: 1,
		set: [
			"71527"
		],
		name: "Combat Vessel Variant",
		unique: false,
		text: "Your Primary Weapon and Hull Values are at +1. In addition, add 1 [weapon_text] Upgrade slot to your Upgrade Bar. \n\nThis Upgrade may only be purchased for a Suurok Class ship. You cannot deploy more than 1 \"Combat Vessel Variant\" [tech_text] Upgrade to any ship.",
		factions: [
			"vulcan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T094",
		gameId: 1,
		set: [
			"71527"
		],
		name: "Tractor Beam",
		unique: false,
		text: "If you are attacked at Range 1, during the Modify Attack Dice step of the Combat Phase, you may disable this card to force the attacking ship to re-roll 1 of its attack dice of your choice.",
		factions: [
			"vulcan"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E083",
		gameId: 1,
		set: [
			"71527"
		],
		name: "Decisive Action",
		unique: true,
		text: "<b>ACTION:</b> If you attack an enemy ship this round whose Captain has a lower Skill Number than yours, during the Roll Attack Dice step of the Combat Phase, you may discard this card to choose 2 of your attack dice and place them both on [hit] results. These dice cannot be rolled or re-rolled this round.",
		factions: [
			"vulcan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C100",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Third of Five",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1-2. Discard this card and disable all [crew_text] Upgrades on the target ship. This ability may be used against a ship that is Cloaked.  You cannot deploy this card to the same ship or fleet as \"Hugh\".",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C099",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Second of Five",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1-2. Discard this card and 1 Upgrade of your choice on the target ship. This ability may be used against a ship that is Cloaked.",
		factions: [
			"borg"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C098",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Fourth of Five",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1-2. Discard this card and disable up to 2 Shields on the target ship. Then disable up to 2 Upgrades of your choice on that ship. This ability may be used against a ship that is Cloaked.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T093",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Subspace Beacon",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to target every friendly ship within Range 1-3 of your ship. Target ship(s) may immediately perform a [scan] Action as a free Action. Then place 1 [scan] Token beside your ship.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T092",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Long Range Scan",
		unique: false,
		text: "When attacking a ship at Range 3, if there is a [scan] Token beside your ship, during the Modify Defense Dice step of the Combat Phase you may disable this card to convert 1 of your opponent's [evade] or [battlestations] results to a blank result.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B011",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Scavenged Parts",
		unique: false,
		text: "Whenever one of your Upgrades is discarded, add 1 Drone Token to your Captain Card. You cannot exceed your Captain's starting number of Drone Tokens. \n\nYou cannot deploy more than 1 \"Scavenged Parts\" [borg_text] Upgrade to any ship.",
		factions: [
			"borg"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W073",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Aft Phase Cannon",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nThis weapon can only be fired from your rear firing arc.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W072",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Photonic Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W071",
		gameId: 1,
		set: [
			"71525",
			"71513b"
		],
		name: "Magnetometric Guided Charge",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may convert 1 of your [battlestations] results into a [crit] result. Target ship does not roll defense dice against this attack. \n\nThis Upgrade may only be purchased for a Borg ship.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "tech",
		id: "T091",
		gameId: 1,
		set: [
			"71510"
		],
		name: "Secondary Impulse Reactor",
		unique: false,
		text: "During the Activation Phase, if you reveal a Red Maneuver and you have an Auxiliary Power Token beside your ship, you may disable this card to perform that Maneuver with no penalty.",
		factions: [
			"federation"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C097",
		gameId: 1,
		set: [
			"71510"
		],
		name: "Jack Crusher",
		unique: true,
		text: "During the Modify Defense Dice step of the Combat Phase, you may discard this card and spend 1 [evade] Token to add 2 [evade] results to your roll.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E082",
		gameId: 1,
		set: [
			"71510"
		],
		name: "Picard Maneuver",
		unique: true,
		text: "<b>ACTION:</b> If you performed a 3 [forward], 4 [forward], or 5 [forward] Maneuver this round, discard this card and immediately perform an additional 5 [forward] Maneuver.  Place an Auxiliary Power Token beside your ship.  All attacks against your ship this round are at -4 attack dice.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B010",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Regeneration Sequencers",
		unique: false,
		text: "Whenever one of your Upgrades is discarded, repair 1 damage to your Hull. \n\nOR \n\nYou may discard this card and spend 1 Drone Token to repair up to 2 damage to your Hull.",
		factions: [
			"mirror-universe",
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E081",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "We Won't Go Back!",
		unique: true,
		text: "If your ship, its Captain, or any of its Upgrades are targeted by an Upgrade on an enemy ship, you may discard this card before that Upgrade takes effect to immediately make 1 free attack against that ship, if possible.  If the enemy ship is destroyed by this free attack, the enemy Upgrade does not take effect.",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C096",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Worf",
		unique: true,
		text: "If you inflict at least 1 damage (normal or critical) to an enemy ship during the Deal Damage step of the Combat Phase, you may discard this card to inflict 1 additional normal damage to that ship.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W070",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Fire All Weapons",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b>: Spend your target lock and disable this card to perform this attack.  You may fire this weapon from your forward or rear firing arcs. \nYou may immediately make 1 additional attack with your Primary Weapon at a different enemy ship, if possible. \nThis Upgrade costs +5 SP for any ship other than a Galaxy, Intrepid or Sovereign Class ship.",
		factions: [
			"mirror-universe"
		],
		cost: 7,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W069",
		gameId: 1,
		set: [
			"71510b",
			"71529"
		],
		name: "Quantum Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf the target ship is hit, add 1 [hit] result to your total damage. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"mirror-universe"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W068",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Biogenic Charge",
		unique: false,
		text: "You must use 1 [borg_text] and 1 [weapon_text] Upgrade slot to deploy this Upgrade to your ship. <b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack.  In addition to normal damage, the opposing ship must discard 1 of its [crew_text] Upgrades of its choice for each damage you inflict to that ship's Hull with this attack (max 2).  Add 1 Drone Token to your Captain Card for each [crew_text] Upgrade that was discarded with this attack.  You cannot exceed your starting number of Drone Tokens.",
		factions: [
			"mirror-universe",
			"borg"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 7,
		range: "2 - 3"
	},
	{
		type: "borg",
		id: "B009",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Biogenic Charge",
		unique: false,
		text: "You must use 1 [borg_text] and 1 [weapon_text] Upgrade slot to deploy this Upgrade to your ship. <b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack.  In addition to normal damage, the opposing ship must discard 1 of its [crew_text] Upgrades of its choice for each damage you inflict to that ship's Hull with this attack (max 2).  Add 1 Drone Token to your Captain Card for each [crew_text] Upgrade that was discarded with this attack.  You cannot exceed your starting number of Drone Tokens.",
		factions: [
			"mirror-universe",
			"borg"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 7,
		range: ""
	},
	{
		type: "tech",
		id: "T090",
		gameId: 1,
		set: [
			"71646a"
		],
		name: "Thought Maker",
		unique: true,
		text: "During the Planning Phase, after every ship has been assigned a Maneuver Dial, you may discard this card to target a ship within Range 1-2.  If you do so, look at that ship's Maneuver Dial and change it to any of its 1 or 2 Green Maneuvers (your choice).  That Maneuver Dial cannot be changed nor can its player look at it until it is that ship's turn to activate.  The target ship's player may place an Auxiliary Power Token beside the target ship to ignore the new Maneuver and not move that round.  This Upgrade may only be purchased for a Ferengi ship.",
		factions: [
			"ferengi"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E080",
		gameId: 1,
		set: [
			"71646a"
		],
		name: "Vengeance",
		unique: true,
		text: "When attacking a ship at Range 1, during the Roll Attack Dice step of the Combat Phase, you may discard this card to roll up to +2 additional attack dice.  If you do so, when the attack is completed your ship suffers 1 normal damage for each additional die you rolled. \n\nThis Upgrade may only be purchased for a Ferengi Captain assigned to a Ferengi ship.",
		factions: [
			"ferengi"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C095",
		gameId: 1,
		set: [
			"71646a"
		],
		name: "Kazago",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to place 1 [evade] Token and 1 [battlestations] Token beside your ship.  You cannot perform an [evade] or a [battlestations] Action as a free Action this round. \n\nOR \n\n<b>ACTION:</b> Discard your current Captain Card and treat this card as your new Captain.  While Kazago is your Captain, your Skill Number is 4.",
		factions: [
			"ferengi"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C094",
		gameId: 1,
		set: [
			"71646b"
		],
		name: "Tasha Yar",
		unique: true,
		text: "If your ship was just destroyed, discard this card to target 1 enemy ship within Range 1-3, if possible. Immediately make 1 free attack against that ship with 4 attack dice. If the target ship is in your forward firing arc, that ship rolls -2 defense dice against this attack.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T089",
		gameId: 1,
		set: [
			"71646b"
		],
		name: "Cloaking Device",
		unique: false,
		text: "Instead of performing a normal Action, you may disable this card to perform the [cloak] Action. While you have a [cloak] token beside your ship, you may perform the [sensor-echo] Action even if this card is disabled. This upgrade costs +5 Squadron Points for any non-Mirror Universe ship.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C093",
		gameId: 1,
		set: [
			"71646c"
		],
		name: "Tersa",
		unique: true,
		text: "<b>ACTION:</b>  If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1 - 2 that is not Cloaked and has no Active Shields.  Discard Tersa and 1 [crew_text] Upgrade of your choice on the target ship.  Place a [scan] Token beside your ship.",
		factions: [
			"kazon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T088",
		gameId: 1,
		set: [
			"71646c",
			"71793"
		],
		name: "Tractor Beam",
		unique: false,
		text: "During the Activation Phase, when a ship within Range 1 of your ship reveals a Maneuver with a number of 3 or higher, before that ship moves, you may discard this card to subtract 2 from that Maneuver's number. \n\nNo ship may be equipped with more than 1 of this Upgrade.",
		factions: [
			"kazon"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T087",
		gameId: 1,
		set: [
			"71646d"
		],
		name: "Access Terminal",
		unique: false,
		text: "When you are required to spend any number of Drone Tokens, you may disable this card to spend those Drone Tokens from your ship and/or any friendly ship(s) within Range 1-2 of your ship. You may divide spending those Drone Tokens between your ships however you like.",
		factions: [
			"borg"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C092",
		gameId: 1,
		set: [
			"71646d"
		],
		name: "One",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to perform this Action. For each damage your ship suffers this round, disable 1 of your Active Shields instead of destroying it. If you have no Active Shields left, any excess damage is applied to your Hull as normal.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B008",
		gameId: 1,
		set: [
			"71646d"
		],
		name: "Dispersion Field",
		unique: true,
		text: "While this card is deployed to your ship none of your other Upgrades can be affected by your opponents. Discard this card immediately after it protects another Upgrade card.  In addition, you may roll your full defense dice in spite of the presence of an opposing ship's [scan] Token.\n<b>( ERRATA )</b>",
		factions: [
			"borg"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E079",
		gameId: 1,
		set: [
			"71646e"
		],
		name: "Vulcan Logic",
		unique: true,
		text: "During the Roll Defense Dice step of the Combat Phase, you may discard this card to roll +2 defense dice. If you do so, during the Modify Defense Dice step, you may re-roll any number of your defense dice. \n\nThis Upgrade may only be purchased for a Vulcan Captain assigned to a Vulcan ship.",
		factions: [
			"vulcan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C091",
		gameId: 1,
		set: [
			"71646e"
		],
		name: "Kov",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to repair up to 2 damage to your ship's Hull or Shields.",
		factions: [
			"vulcan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T086",
		gameId: 1,
		set: [
			"71646e"
		],
		name: "Power Grid",
		unique: false,
		text: "Whenever you are supposed to place an Auxiliary Power Token beside your ship, you may disable this card instead.",
		factions: [
			"vulcan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W067",
		gameId: 1,
		set: [
			"71646a"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"ferengi"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W066",
		gameId: 1,
		set: [
			"71646b"
		],
		name: "Forward Weapons Grid",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. You must divide this attack between 2 different ships in your forward firing arc. You may divide your attack dice however you like, but you must roll at least 2 attack dice against each ship. Place an Auxiliary Power Token beside your ship.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 6,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W065",
		gameId: 1,
		set: [
			"71646b"
		],
		name: "Dorsal Weapons Array",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may fire this weapon in any direction.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W064",
		gameId: 1,
		set: [
			"71646c",
			"71793",
			"blind_nistrim_culluh"
		],
		name: "Photonic Charges",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nPlace an Auxiliary Power Token beside the target ship if there is at least 1 uncancelled [hit] or [crit] result. \n\nThis Upgrade costs +4 SP if purchased for a non-Predator class ship.",
		factions: [
			"kazon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1"
	},
	{
		type: "weapon",
		id: "W063",
		gameId: 1,
		set: [
			"71646c"
		],
		name: "Particle Beam Weapon",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"kazon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W062",
		gameId: 1,
		set: [
			"71646d"
		],
		name: "Proton beam",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nAll damage inflicted by this attack ignores the opposing ship's Shields. \n\nThis upgrade costs +5 SP for any non-Borg ship.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1"
	},
	{
		type: "weapon",
		id: "W061",
		gameId: 1,
		set: [
			"71646e"
		],
		name: "Photonic Weapon",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may re-roll all of your blank results one time. \n\nYou may fire this weapon from your forward or rear firing arcs. ",
		factions: [
			"vulcan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "borg",
		id: "B007",
		gameId: 1,
		set: [
			"71511"
		],
		name: "Hive Mind",
		unique: false,
		text: "<b>ACTION:</b> Disable this card and any number of your other Upgrades. Add 1 Drone Token to your Captain Card for each card you disabled with this Action (including this card). You cannot exceed your Captain's starting number of Drone Tokens. \n\nYou cannot deploy more than 1 \"Hive Mind\" [borg_text] Upgrade to any ship.",
		factions: [
			"borg"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C090",
		gameId: 1,
		set: [
			"71511"
		],
		name: "Vox",
		unique: true,
		text: "After rolling your dice for any reason, you may discard this card to re-roll one of those dice. \n\nOR \n\nAfter rolling your dice for any reason, you may disable this card and spend 2 of your Drone Tokens to re-roll one of those dice.",
		factions: [
			"romulan",
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E078",
		gameId: 1,
		set: [
			"71511"
		],
		name: "Borg Alliance",
		unique: true,
		text: "Add 1 [borg_text] Upgrade slot to your Upgrade Bar. \n\nAt the start of the game, place 4 Drone Tokens on your Captain card. \n\nThis Upgrade may only be purchased for a non-Borg ship with a non-Borg Captain.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T085",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Advanced Shields",
		unique: false,
		text: "<b>ACTION:</b> If you still have Active Shields, place 1 additional Shield Token beside your ship. If you take damage this round, remove this Shield Token first. \n\nIf you do not take damage this round, discard the extra Shield Token during the End Phase. No ship may be equipped with more than 1 Advanced Shields Upgrade.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E077",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Fire At Will!",
		unique: true,
		text: "During the Combat Phase, instead of making a normal attack, you may discard this card to make 1 attack with your Primary Weapon and 1 attack with one of your Secondary Weapons. Each of these attacks is at -1 attack die and must be made against different enemy ships.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E076",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Make It So",
		unique: true,
		text: "When performing an Action or an Attack that requires you to disable one of your Upgrades, you may discard this card instead of disabling the Upgrade.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C080",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Data",
		unique: true,
		text: "<b>WHEN DEFENDING:</b> During the Modify Attack Dice Step, you may discard this card to force the attacking ship to re-roll all its attack dice.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C089",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "William T. Riker",
		unique: true,
		text: "Add 1 [crew_text] Upgrade slot to your Upgrade Bar.\n\n After you move, you may disable this card to perform the Action on one of your [crew_text], [talent_text], or [tech_text] Upgrades or your Captain's Action as a free Action.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C088",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Geordi La Forge",
		unique: true,
		text: "Add 1 [tech_text] Upgrade slot to your Upgrade Bar.\n\n<b>ACTION:</b> Disable this card to target a ship at Range 1-3. Target ship rolls 2 less defense dice this round (min 0) against all of your ship's attacks. If the target ship is Cloaked, flip its [cloak] Token to its red side.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C087",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Tuvok",
		unique: true,
		text: "During the Combat Phase, after you complete an attack that you initiated, you may disable this card to immediately perform an additional 1 Maneuver (Straight, Bank or Turn).",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C086",
		gameId: 1,
		set: [
			"71528"
		],
		name: "B'Elanna Torres",
		unique: true,
		text: "Whenever you initiate an attack at Range 3, during the Roll Attack Dice step of the Combat Phase, you may disable this card to gain +1 attack die (or +2 attack dice if this Upgrade is deployed to a ship with a Hull of 3 or less).",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C085",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Magnus Hansen",
		unique: true,
		text: "Whenever you are required to spend any number of Drone Tokens, you may discard this card to spend 1 less Drone Token.",
		factions: [
			"borg"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E075",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Resistance Is Futile",
		unique: true,
		text: "During the Modify Attack Dice step of the Combat Phase, you may discard this card and spend up to 3 of your Drone Tokens to select a number of your attack dice equal to the number of Drone Tokens you spent with this card. These dice cannot be cancelled during the Compare Results step of the Combat Phase.",
		factions: [
			"borg"
		],
		cost: 7,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E074",
		gameId: 1,
		set: [
			"71530"
		],
		name: "We Are the Borg",
		unique: true,
		text: "During the Modify Defense Dice step of the Combat Phase, you may discard this card and spend up to 3 of your Drone Tokens. Add 1 [evade] result to your roll for each Drone Token you spent with this card.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B006",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Transwarp Signal",
		unique: false,
		text: "Discard this card to target a ship anywhere in the play area. Remove 1 Token ([evade], [battlestations], [scan], or  [target-lock]) from beside the target ship. If you remove a  [target-lock] Token with this card, remove the corresponding  [target-lock] Token as well. Place an Auxiliary Power Token beside the target ship. This Upgrade may only be purchased for a Borg ship. No ship can be equipped with more than 1 \"Transwarp Signal\" Borg Upgrade. This Upgrade has no effect on a Species 8472 ship.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B005",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Borg Shield Matrix",
		unique: false,
		text: "Every time your ship's Hull or Shields are damaged by an enemy ship, place 1 Borg Shield Matrix Token on this card (3 max). \n\nNo ship can be equipped with more than 1 Borg Shield Matrix Upgrade. This Upgrade has no effect on a Species 8472 ship.",
		factions: [
			"borg"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T084",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Power Node",
		unique: false,
		text: "Whenever you perform a Red Maneuver, you may disable this card and 2 of your Active Shields to treat the Maneuver as a White Maneuver.",
		factions: [
			"borg"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C084",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Beverly Crusher",
		unique: true,
		text: "If one of your other [crew_text] Upgrades is supposed to be disabled for any reason, you may disable this card instead. OR If one of your other [crew_text] Upgrades is supposed to be discarded for any reason, you may discard this card instead.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C083",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Deanna Troi",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2. Disable the Captain or 1 [crew_text] Upgrade on the target ship. Place a [battlestations] Token beside your ship. If the target ship is Cloaked, flip its [cloak] Token over to its red side.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C082",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Kenneth Dalby",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to repair 1 damage to your Hull or Shields.\n\nOR\n\n<b>ACTION:</b> Discard this card to repair up to 2 damage to your Hull or Shields.",
		factions: [
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C081",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Seska",
		unique: true,
		text: "<b>ACTION:</b> Discard this card and disable 1 of your other Upgrades to target a ship at Range 1-3. Target ship cannot attack your ship this round.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E073",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Evasive Pattern Omega",
		unique: true,
		text: "After all ships have moved, if you are in the forward firing arc of an enemy ship and that ship is not in your forward firing arc, you may disable this card to immediately perform a [sensor-echo] Action (even if you do not have it on your Action Bar).",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E072",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Be Creative",
		unique: true,
		text: "You may disable this card at any time to replace 1 [evade], [scan] or [battlestations] Token beside your ship with 1 [evade], [scan] or [battlestations] Token.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W060",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Ramming Attack",
		unique: false,
		text: "<b>ATTACK: </b>Discard this card and immediately perform a 1 [forward] Maneuver. If your ship overlaps an enemy ship, destroy your ship and roll 6 attack dice to damage the enemy ship. The enemy ship rolls -3 defense dice against this attack (min 0). \n\nThis Upgrade may only be purchased for a ship with a Hull of 3 or less and cannot be used with the Cheat Death Upgrade.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W059",
		gameId: 1,
		set: [
			"71528",
			"71808"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert one of your [battlestations] results into a [crit] result. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W058",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf fired from a Sovereign class ship, gain +1 attack die. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"federation"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W057",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "Dorsal Phaser Array",
		unique: false,
		text: "<b>ATTACK: </b>You may fire this weapon in any direction. The Attack Value is equal to the ship's Primary Weapon Value. \n\nThis Upgrade may only be purchased for a Federation ship with a Hull Value of 4 or greater and the SP cost is equal to the ship's Primary Weapon Value +1.",
		factions: [
			"federation"
		],
		cost: 0,
		skill: 0,
		talents: 0,
		attack: null,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W056",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Multi Kinetic Neutronic Mines",
		unique: true,
		text: "<b>ATTACK: </b>Discard this card and place a Minefield Token anywhere within Range 1 of your ship. If you place this Token on a ship or if a ship enters the minefield (i.e., overlaps it), roll 4 attack dice. Any [hit] or [crit] damages every ship (including your own) within Range 1-3 of this Minefield Token as normal. Ships within Range 1 of the Minefield Token do not roll defense dice against this attack. All other ships roll full defense dice against this attack (+1 defense die at Range 3). This Upgrade costs +5 SP if purchased for any non-Borg ship.",
		factions: [
			"borg"
		],
		cost: 10,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B004",
		gameId: 1,
		set: [
			"71512"
		],
		name: "Vinculum",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to repair 1 damage to your Hull or Shields. \n\nOR \n\n<b>ACTION:</b> Disable this card to target your ship and every friendly Borg ship within Range 1-2 of your ship. Add 1 Drone Token to every target ship's Captain Card. No ship can exceed its Captain's starting number of Drone Tokens.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T083",
		gameId: 1,
		set: [
			"71512"
		],
		name: "Data Node",
		unique: false,
		text: "At the start of the game, place 3 Mission Tokens on this card. \nEach time you defend, during the Roll Attack Dice step, you may discard 1 Mission Token from this card to force your opponent to roll -1 attack die. \nNo ship may be equipped with more than 1 \"Data Node\" [tech_text] Upgrade.",
		factions: [
			"borg"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E071",
		gameId: 1,
		set: [
			"71512"
		],
		name: "Warrior Spirit",
		unique: true,
		text: "When attacking, at the end of the Deal Damage step, you may discard this card to roll 2 attack dice. Each [hit] or [crit] result damage the defending ship as normal. For each blank or [battlestations] result, your ship suffers 1 normal damage to its Hull. This roll cannot be modified and the defending ship does not roll defense dice against this damage. This Upgrade may only be purchased for a Klingon Captain.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E070",
		gameId: 1,
		set: [
			"71513a"
		],
		name: "Command Interface",
		unique: true,
		text: "After you roll a die, for any reason, you may discard this card to re-roll that die once. \n\nThis Upgrade costs +5 SP if purchased for any non-borg ship.",
		factions: [
			"borg"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B003",
		gameId: 1,
		set: [
			"71513a"
		],
		name: "Borg Maturation Chamber",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to add a number of Drone Tokens to your Captain Card until you reach your Captain's starting number of Drone Tokens. You cannot exceed your Captain's starting number of Drone Tokens.",
		factions: [
			"borg"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B002",
		gameId: 1,
		set: [
			"71513a"
		],
		name: "Interplexing Beacon",
		unique: false,
		text: "When attacking a ship at Range 3, during the Modify Attack Dice step, you may disable this card and spend up to 2 Drone Tokens to re-roll a number of your attack dice equal to the number of Drone Tokens you spent with this card. No ship may be equipped with more than one \"Interplexing Beacon\" Upgrade.",
		factions: [
			"borg"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C341",
		gameId: 1,
		set: [
			"71513a"
		],
		name: "Data",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1-2 and spend 1 Drone Token to disable the Captain Card on that ship. Then place a [scan] Token beside your ship as a free Action.",
		factions: [
			"borg"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T082",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Multi-Targeting Phaser Banks",
		unique: false,
		text: "When you perform a    [target-lock] action, you may disable this card to acquire a 2nd target lock on a different enemy ship within range 1-3 of your ship. While you have this upgrade on your ship, you may have up to 2 different enemy ships target locked at the same time even if this card is disabled.\n<b>( ERRATA )</b>",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C079",
		gameId: 1,
		set: [
			"71532"
		],
		name: "Azetbur",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. Disable your Captain Card and the Captain Card on the target ship. Neither of your ships may attack each other this round.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T081",
		gameId: 1,
		set: [
			"71532"
		],
		name: "Prototype Cloaking Device",
		unique: false,
		text: "When attacking while Cloaked, you may disable this card before rolling any dice to keep your [cloak] Token from flipping to its red side. If you do this, during the Modify Attack Dice step of the Combat Phase, you may place an Auxiliary Power Token beside your ship to choose any number of your attack dice and re-roll them. This Upgrade may only be purchased for a Klingon Bird-of-Prey class ship.",
		factions: [
			"klingon"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E069",
		gameId: 1,
		set: [
			"71532"
		],
		name: "The Game's Afoot",
		unique: true,
		text: "If you initiate an attack, while Cloaked, against a ship that does not have your ship in its forward or rear firing arcs, during the Roll Attack Dice step of the Combat Phase, you may discard this card to gain +1 attack die against that ship for that attack. If you do this, after you complete your attack, you may immediately perform a [sensor-echo] Action as a free Action.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E068",
		gameId: 1,
		set: [
			"71532"
		],
		name: "Cry Havoc",
		unique: true,
		text: "<b>ACTION:</b> If you are Cloaked, discard this card to remove your [cloak] Token and flip all of your Shields back to their Active sides. You are no longer considered to be Cloaked. During the Roll Attack Dice step of the Combat Phase, gain +2 attack dice this round. You cannot roll defense dice this round. \nThis Upgrade may only be purchased for a Klingon Captain.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C078",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Jennifer Sisko",
		unique: true,
		text: "Add 1 [tech_text] Upgrade slot to your Upgrade Bar. \n\n At the start of the game, after Setup, target 1 enemy ship anywhere in the play area and disable up to 2 Upgrades of your choice on that ship.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C077",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Ezri Tigan",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. Steal 1 [tech_text] Upgrade from the target ship with an SP cost of 5 or less, even if it exceeds your ship's restrictions. Place a Disabled Upgrade Token on the stolen Upgrade.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C076",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Rom",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. Disable up to 2 [tech_text] Upgrades of your choice on the target ship. This ability may be used against a ship that is Cloaked.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E067",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Rebellion",
		unique: true,
		text: "If you are defending against a ship that has a greater Hull Value than your ship's Hull Value, during the Roll Attack Dice step of the Combat Phase, you may discard this card to force that ship to roll -2 attack dice for that attack. After that ship's attack is completed, you may immediately make 1 free attack against that ship with your Primary Weapon, if possible.",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E066",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Strafing Run",
		unique: true,
		text: "<b>ACTION:</b> If you performed a Maneuver with a number of 3 or higher this round, target an enemy ship within Range 1-3 that is not in your firing arc. Discard this card to immediately make 1 free attack against that ship with 4 attack dice. Treat this attack as if it was fired with a Primary Weapon.\n\n<b>( ERRATA )</b>",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C075",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Julian Bashir",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. If that ship attacks this round, it must attack your ship and cannot attack any other ship. If it does attack your ship, during the Roll Attack Dice step of the Combat Phase, that ship rolls -2 attack dice.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C074",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Jadzia Dax",
		unique: true,
		text: "When your ship suffers damage to its Hull, you may discard this card to reduce the damage by 1.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C073",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Reman Boarding Party",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card and disable all Upgrades on the target ship.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E065",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Target Weapons Systems",
		unique: true,
		text: "If you damage an opponent's Hull with a [crit], you may immediately discard this card to search the Damage Deck for a \"Munitions Failure\" or a \"Weapons Malfunction\" card instead of drawing a random Damage Card. Re-shuffle the Damage Deck when you are done.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E064",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Attack Pattern Shinzon Theta",
		unique: true,
		text: "During the Deal Damage step of the Combat Phase, if you hit your opponent's ship, you may discard this card to add 1 additional damage to that ship's Shields (if possible) for every uncancelled [crit] result.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E063",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Shinzon Romulan Talents",
		unique: true,
		text: "Place up to 4 Romulan [talent_text] Upgrades face down beside Shinzon. These cards remain face down until you decide to use one of them. When you do so, select the one you want to use and turn it face up for the rest of the game. Then discard the other 3.\n\n(Not a physical card, used internally on Utopia)",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E062",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Full Stop",
		unique: true,
		text: "During the Activation Phase, after you reveal your chosen Maneuver, you may discard this card to ignore that Maneuver and not move. You may still take an Action during the Perform Actions step.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T080",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Secondary Shields",
		unique: false,
		text: "At the start of the game, place 3 Shield Tokens on this card. During each End Phase, if you have fewer total Shields (Active and/or Disabled) than your starting Shield Value, remove 1 Shield from this card and add it to your ship. If you ship is Cloaked, you may choose to add the extra Shield as a Disabled Shield. This Upgrade may only be purchased for a Reman Warbird.",
		factions: [
			"romulan"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T079",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Improved Cloaking Device",
		unique: false,
		text: "If you have the [cloak] icon on your Action Bar, you may perform a [cloak] Action even if you have no Active Shields and/or if there is an Auxiliary Power Token beside your ship. This Upgrade costs +5 SP for any ship other than a Reman Warbird.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W055",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Aft Phaser Emitter",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may only fire this weapon from your rear firing arc.",
		factions: [
			"mirror-universe"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "weapon",
		id: "W054",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Thalaron Weapon",
		unique: true,
		text: "<b>ATTACK: </b>Discard this card to perform this attack. Instead of inflicting normal damage, for each uncancelled [hit] or [crit] result, discard the Captain Card or 1 [crew_text] Upgrade (opponent's choice) on the target ship. If the Captain and all of the [crew_text] Upgrades on the target ship are destroyed, any additional uncancelled [hit] or [crit] results damage the ship as normal (max 5 damage). This Upgrade may only be purchased for a Reman Warbird.",
		factions: [
			"romulan"
		],
		cost: 10,
		skill: 0,
		talents: 0,
		attack: 10,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W053",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf fired from a Reman Warbird, gain +2 attack dice. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"romulan"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "crew",
		id: "C072",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Vidiian Boarding Party",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1 that is not Cloaked and has no Active Shields. Discard this card and roll 4 attack dice. For each [hit] or [crit] result, the target ship must discard 1 [crew_text] Upgrade of your choice. If you are Grappling the target ship, you may perform this Action as a free Action.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C071",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Dereth",
		unique: true,
		text: "If one of your [crew_text] Upgrades (including this one) is affected by an enemy ship, you may disable 1 Upgrade of your choice on that enemy ship.",
		factions: [
			"independent"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C070",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Denara Pel",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1. Discard this card and one [crew_text] Upgrade of your choice on the target ship. If you are Grappling the target ship, disable this card instead of discarding it when performing this Action. \nThis ability may be used against a ship that is Cloaked.",
		factions: [
			"independent"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C069",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Sulan",
		unique: true,
		text: "<b>ACTION:</b> Target a ship at Range 1. Discard this card and one [crew_text] Upgrade of your choice on the target ship. If you are Grappling the target ship, you may also disable up to 2 other [crew_text] Upgrade on the target ship. This ability may be used against a ship that is Cloaked.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W052",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Hypothermic Charge",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. All damage inflicted by this attack ignores the opposing ship's Shields. If the opposing ship has no Active Shields, you may choose any number of your attack dice and re-roll them. This Upgrade may only be purchased for a Vidiian ship.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W051",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Grappler",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. This attack damage the target ship as normal. \nIn addition, if you inflict at least 1 damage to the target ship's Hull, place a red Grapple Token beside that ship and the corresponding blue Grapple Token beside your ship.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1"
	},
	{
		type: "talent",
		id: "E061",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Decisive Orders",
		unique: true,
		text: "When attacking a ship that has no Active Shields, during the Modify Attack Dice step, you may discard this card to choose up to 2 of your attack dice and re-roll them (even if the chosen dice have already been re-rolled).",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D017",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Escort",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to target a friendly ship within Range 1 of your ship. Each time the target ship defends this round, it adds a number of defense dice to its roll equal to the number of Attack Squadron Tokens on your Ship Card. You cannot attack this round.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D016",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Cover Fire",
		unique: false,
		text: "When defending, during the Roll Defense Dice step, you may discard this card to add a number of defense dice to your roll equal to your current Primary Weapon value. \n\nNo squadron may be equipped with more than one \"Cover Fire\" Upgrade.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D015",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Flanking Attack",
		unique: false,
		text: "When a friendly ship within Range 1 of your ship is attacking an enemy ship that is also in your forward firing arc, if you haven't already attacked this round, you may discard this card to add a number of attack dice to that ship's attack roll equal to the number of Attack Squadron Tokens on your Ship Card. You cannot attack during the round you use this ability. No ship may be equipped with more than one \"Flanking Attack\" Upgrade.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D014",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Break Formation",
		unique: false,
		text: "<b>ACTION:</b> If your ship is not within Range 1 of a friendly ship, disable this card to immediately perform a free attack with your Primary Weapon of -1 attack die (max 3 attack dice).",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D013",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Support Ship",
		unique: false,
		text: "When your last Attack Squadron Token is destroyed, discard this card instead of removing that Token. \n\nNo ship may be equipped with more than one \"Support Ship\" Upgrade.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D012",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Photo Lock-On",
		unique: false,
		text: "When you are attacking, during the Declare Target step, if you do not have an enemy ship Target Locked, you may discard this card to acquire a Target Lock on an enemy ship within Range 1-2 of your ship.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D011",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Aft Disruptor Wave Cannons",
		unique: false,
		text: "You may fire your Primary Weapon from your rear firing arc. If you do so, disable this card. \n\nNo ship may be equipped with more than one \"Aft Disruptor Wave Cannons\" Upgrade.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D010",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Galor Class Phaser Banks",
		unique: false,
		text: "Your ship's Primary Weapon can target ships at Range 1-3 (standard combat bonuses apply) and your Primary Weapon Value is at +1 (max 6 dice). This Upgrade may only be purchased for a Hideki Class Attack Squadron any no ship may be equipped with more than one \"Galor Class Phaser Banks\" Upgrade.\n<b>( ERRATA )</b>",
		factions: [
			"dominion"
		],
		cost: 7,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "borg",
		id: "B001",
		gameId: 1,
		set: [
			"71513b"
		],
		name: "Neural Link",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target all friendly Borg ships within Range 1-3. Rearrange the current Drone Tokens on all of these ships any way that you want. You must have the same total number of Drone Tokens between the ships and you cannot exceed the Captain's starting number of Drone Tokens on any of these ships.",
		factions: [
			"borg"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C068",
		gameId: 1,
		set: [
			"71513b"
		],
		name: "Glinn Daro",
		unique: true,
		text: "<b>ACTION:</b> Repair 1 Damage to your Hull or Shields.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E060",
		gameId: 1,
		set: [
			"71513b"
		],
		name: "Truce",
		unique: true,
		text: "When defending, during the Declare Target step, you may discard this card to cancel that attack. The cancelled attack cannot be directed against a different ship. Place an Auxiliary Power Token beside your ship. If you have already attacked during the round you use this ability, place a 2nd Auxiliary Power Token beside your ship. This Upgrade costs +5 SP if purchased for a Captain with a Skill greater than 5.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E059",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Intendant's Orders",
		unique: true,
		text: "During the Planning Phase, you may disable this card to remove up to 2 Disabled Upgrade Tokens from your [crew_text] Upgrades.\n\n<b>( ERRATA )</b>",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E058",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Make It So!",
		unique: true,
		text: "During the Activation Phase, after you move, you may discard this card and disable one of your [crew_text] Upgrades to perform one additional Action this round as a free Action.\n\n<b>( ERRATA )</b>",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E057",
		gameId: 1,
		set: [
			"71535"
		],
		name: "I Will Deal With Them Myself",
		unique: true,
		text: "During the Roll Attack Dice step, you may discard this card to disable up to 2 of your [crew_text] Upgrades. If you do so, roll 1 additional attack die for that attack for each Upgrade you disabled with this card.",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C067",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Elim Garak",
		unique: true,
		text: "While Elim Garak is assigned to a Mirror Universe ship, add 2 to that ship's Captain's Skill Number. During the Roll Attack Dice step, you may disable your Captain Card to gain +1 additional die for that attack.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C066",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Brunt",
		unique: true,
		text: "At the start of the End Phase, you may discard this card to target an enemy ship at Range 1-3. Place an Auxiliary Power Token beside the target ship.",
		factions: [
			"mirror-universe"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C065",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Bareil Antos",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to target a ship at Range 1-3. Choose a [tech_text] Upgrade and roll 1 attack die. On a [hit] or a [crit] result either discard that [tech_text] Upgrade or steal it. Your ship must have at least 1 [tech_text] Upgrade slot in order to steal it. If the stolen Upgrade exceeds your ship's restrictions, you must discard 1 of your [tech_text] Upgrades to open a slot for it.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C064",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Odo",
		unique: true,
		text: "<b>ACTION:</b> Select one of your disabled [crew_text] Upgrades and perform that Upgrade's Action as a free Action. Then discard that [crew_text] Upgrade.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T078",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Cloaking Device",
		unique: false,
		text: "Instead of performing a normal Action, you may disable this card to perform the [cloak] Action. While you have a [cloak] Token beside your ship, you may perform the [sensor-echo] Action even if this card is disabled. \n\nThis Upgrade costs +5 Squadron Points for any ship other than the Regent's Flagship.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T077",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Tractor Beam",
		unique: false,
		text: "<b>ACTION:</b> Target a ship at Range 1 and roll 2 attack dice. For every [hit] or [crit] result, place 1 Auxiliary Power Token beside the target ship.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W050",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf fired from a Negh'Var class ship, gain +1 attack die. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "tech",
		id: "T076",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Monotanium Armor Plating",
		unique: false,
		text: "Whenever an enemy ship attempts to acquire a target lock on your ship, roll 2 defense dice. If you roll at least 1 [evade] result, the  [target-lock] Action has no effect. No ship may be equipped with more than 1 \"Monotanium Armor Plating\" Upgrade.\n<b>ACTION:</b> Disable this card to remove a red  [target-lock] Token from beside your ship (and the corresponding blue  [target-lock] Token from beside the locking ship).",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T075",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Sensor Network",
		unique: false,
		text: "During the Planning Phase, after all ships have chosen their Maneuvers, you may disable this card to target one ship anywhere in the play area, look at that ship's Maneuver Dial, and then choose your Maneuver. The target ship cannot change its Maneuver after you have looked at it. \n\nThis Upgrade may only be purchased for a Hirogen ship.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E056",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Intercept Course",
		unique: true,
		text: "You may discard this card immediately before you move in order to change your Maneuver for this round. If an enemy ship is in your forward firing arc after you complete this move, you may perform a [battlestations] Action as a free Action. \nThis Upgrade may only be purchased for a Hirogen ship and costs +5 SP for any Captain other than Karr or a Hirogen Captain.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E055",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Stalking Mode",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. The target ship's Skill Number is reduced by 2. In addition, during the Roll Attack Dice step, gain +1 attack die against the target ship. Both of these effects last until the end of the game.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E054",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Full Reverse",
		unique: true,
		text: "During the Activation Phase, after you reveal your Maneuver Dial, but before you move, you may discard this card to perform a 1 [reverse] or 2 [reverse] Full Astern Maneuver instead of your chosen Maneuver. Treat this new Maneuver as a White Maneuver.",
		factions: [
			"independent"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W049",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Subnucleonic Beam",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \nIn addition to inflicting normal damage, for each uncancelled [hit] or [crit] result, disable 1 [crew_text] Upgrade on the target ship of your choice. \nThis Upgrade costs +5 SP for any ship other than a Hirogen ship.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 2"
	},
	{
		type: "squadron",
		id: "D009",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Defensive Maneuvers",
		unique: false,
		text: "When defending, during the Declare Target step, you may disable this card to place an [evade] Token beside your ship, even if there is already one there. \n\nNo ship may be equipped with more than one \"Defensive Maneuvers\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D008",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Support Ship",
		unique: false,
		text: "When your last Attack Squadron Token is destroyed, discard this card instead of removing that Token. \n\nNo ship may be equipped with more than one \"Support Ship\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D006",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Attack Wave",
		unique: false,
		text: "When attacking, during the Roll Attack Dice step, you may disable this card to gain +1 attack die for that attack. No ship may be equipped with more than one \"Attack Wave\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D005",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Squad Leader",
		unique: false,
		text: "At the start of the Combat Phase, you may add +2 to your Captain Skill Number until the End Phase. If you do so, place an Auxiliary Power Token beside your ship.\nOR\n<b>ACTION:</b> Target a friendly ship at Range 1-2 and perform the Action listed on its Captain Card as a free Action (if possible).",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D004",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Attack Formation",
		unique: false,
		text: "When attacking, during the Roll Attack Dice step, if you are within Range 1 of a friendly ship, you may disable this card to set 1 of your attack dice on any result. That die cannot be rolled or re-rolled during that attack. No ship may be equipped with more than one \"Attack Formation\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D003",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Tactical Pattern Theta",
		unique: false,
		text: "If you damage an opponent's Hull with a [crit], you may immediately disable this card to search the Damage Deck for a \"Weapons Malfunction\" or a \"Munitions Failure\" card instead of drawing a random Damage Card. Re-shuffle the Damage Deck when you are done.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D002",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Cover Fire",
		unique: false,
		text: "When defending, during the Roll Defense Dice step, you may discard this card to add a number of defense dice to your roll equal to your current Primary Weapon value. \n\nNo squadron may be equipped with more than one \"Cover Fire\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "squadron",
		id: "D001",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Coordinated Attack",
		unique: false,
		text: "When attacking, during the Declare Target step, if you do not have a [battlestations] Token beside your ship, you may disable this card to place a [battlestations] Token beside your ship. \n\nNo ship may be equipped with more than one \"Coordinated Attack\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T074",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Maneuvering Thrusters",
		unique: false,
		text: "When defending, during the Declare Target step, you may disable this card to place 1 [evade] Token beside your ship, even if there is already one there. \n\nThis Upgrade costs +5 SP if purchased for any ship other than a Romulan Drone Ship.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T073",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Multi-Spectral Emitters",
		unique: false,
		text: "When defending, during the Roll Defense Dice step, you may disable this card and all of your remaining Shields, to roll +2 defense dice. \n\nThis Upgrade may only be purchased for a Romulan Drone Ship.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E053",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Core Overload",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to perform this Action. At the end of the Activation Phase, after all ships have moved, destroy your ship and roll 3 attack dice. Every ship within Range 1 of your ship suffers normal damage for each [hit] or [crit] result. The \"Cheat Death\" Upgrade cannot be used in conjunction with this card.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T072",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Backup Sequencer",
		unique: false,
		text: "At any time, you may disable this card to activate all of your Shield Tokens by flipping them back to their blue sides. \n\nThis Upgrade may only be purchased for a Romulan Drone Ship.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T071",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Reinforced Hull Plating",
		unique: false,
		text: "When defending, during the Compare Results step, you may disable this card to cancel 1 [hit] or [crit] result.",
		factions: [
			"romulan"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W048",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Triphasic Emitter",
		unique: false,
		text: "At the start of the game, after Setup, choose a non-Borg [weapon_text] Upgrade and place it face down beneath this card. The chosen Upgrade must have a cost of 5 SP or less. <b>ATTACK:</b> Discard this card to perform this attack. Flip the card that is beneath this card face up and perform the attack listed on that card (if possible). After the attack is complete, discard that card as well.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: "?",
		range: "?"
	},
	{
		type: "tech",
		id: "T070",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Propulsion Matrix",
		unique: false,
		text: "During the Activation Phase, if you reveal a 3 [forward] Maneuver, you may use a 4 [forward] or a 5 [forward] Maneuver instead. If you do, place an Auxiliary Power Token beside your ship.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E052",
		gameId: 1,
		set: [
			"71996"
		],
		name: "Surrender As Ordered",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target one enemy ship at Range 1 that is in your forward firing arc. The target ship may choose to not attack this round and disable all of its [weapon_text] Upgrades. If it does this, then your ship cannot attack that ship this round. If the target ship chooses not to do this (or if it has no [weapon_text] Upgrades that are not already disabled), you gain +1 attack dice against that ship this round.",
		factions: [
			"klingon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C063",
		gameId: 1,
		set: [
			"71996"
		],
		name: "William T. Riker",
		unique: true,
		text: "You do not pay a faction penalty when assigning this card to a Klingon Ship.\n\n<b>ACTION:</b> Disable this card to increase your Captain Skill to 10 until the End Phase.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T069",
		gameId: 1,
		set: [
			"71996"
		],
		name: "Tunneling Neutrino Beam",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to target 1 friendly ship at Range 1. Target ship repairs 1 damage to its Hull. You cannot attack this round. \n\nYou do not pay a faction penalty when assigning this card to a Klingon ship.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W047",
		gameId: 1,
		set: [
			"71996"
		],
		name: "Phaser Array Retrofit",
		unique: false,
		text: "When attacking with your Primary Weapon at Range 3, you gain +1 attack die and your opponent rolls 1 less defense die. \n\nThis Upgrade may only be purchased for a Klingon Ship. No ship may be equipped with more than 1 \"Phaser Array Retrofit\" Upgrade.",
		factions: [
			"klingon"
		],
		cost: 5,
		range: "3"
	},
	{
		type: "crew",
		id: "C062",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Turanj",
		unique: true,
		text: "Add 1 [weapon_text] Upgrade slot to your Upgrade Bar.\r\n\r\nIf your Captain's Skill Number is ever below a \"4\" when you are attacking, during the Deal Damage step, you may discard your Captain Card to add +1 damage. If you do this, this card then becomes your new Captain with a Skill of 7.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: null,
		talents: null,
		attack: null
	},
	{
		type: "talent",
		id: "E051",
		gameId: 1,
		set: [
			"71795"
		],
		name: "Tholian Assembly",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target every Tholian ship within Range 3 of your ship. Each target ship may immediately perform an additional maneuver with a speed of 1.\r\n\r\nThis Upgrade may only be purchased for Loskene or any other Tholian Captain on a Tholian ship.",
		factions: [
			"independent"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C061",
		gameId: 1,
		set: [
			"71793"
		],
		name: "Karden",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to gain +2 attack dice and roll -2 defense dice this round. \n\nThis Upgrade may only be purchased for a Kazon ship.",
		factions: [
			"kazon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C060",
		gameId: 1,
		set: [
			"71793"
		],
		name: "Haliz",
		unique: true,
		text: "When defending, during the Declare Target step, you my remove your Captain Card from the game to cancel that attack. If you do this, the attacking ship cannot perform another attack during that round. This card then becomes your Captain Card with a skill of 3. This Upgrade may only be purchased for a Kazon ship.",
		factions: [
			"kazon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "question",
		id: "Q021",
		gameId: 1,
		set: [
			"71793"
		],
		name: "First Maje",
		unique: true,
		text: "This Upgrade does not require an Upgrade slot and may only be equipped to a Kazon ship with a Kazon Captain. While this Upgrade is equipped to your ship, you gain 1 additional [tech_text] Upgrade slot to your Upgrade Bar and your Captain Skill increases by 2. During the Planning Phase, you may discard this card to target a ship at Range 1. Disable 1 [tech_text] Upgrade on the target ship and then steal it, even if it exceeds your ship's restrictions.",
		factions: [
			"kazon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W046",
		gameId: 1,
		set: [
			"71793"
		],
		name: "Particle Beam Weapon",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"kazon"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 2"
	},
	{
		type: "crew",
		id: "C059",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Romulan Helmsman",
		unique: false,
		text: "During the Activation Phase, if you reveal a Red Maneuver, you may disable this card to treat that maneuver as if it were a White Maneuver. No ship may be equipped with more than one Romulan Helmsman.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C058",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Romulan Security Officer",
		unique: false,
		text: "For each Romulan Security Officer equipped to your ship (including this one), your Captain's Skill is +1 (max +3). When defending, you may disable this card to re-roll one of your blank results.",
		factions: [
			"romulan"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E049",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Make Them See Us!",
		unique: true,
		text: "While cloaked, during the Activation Phase, before revealing your dial you may discard this card to target a ship that you already have Target Locked. Remove your target lock from that ship. If you do this and your ship's base or maneuver template overlaps the target ship's base during the Execute Maneuver step, inflict an amount of damage equal to the current speed on your maneuver dial to both ships (max 4). The ship whose Captain has the higher Skill Number rolls a number of defense dice against this damage equal to the difference in your Skill Numbers. This Upgrade may only be purchased for a Romulan Captain on a Romulan ship.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C057",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Romulan Sub Lieutenant",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2. If the target ship has a Hull value of 6 or greater, that ship must disable 2 of its Active Shields, if possible. Otherwise, that ship must disable 1 of its Active Shields, if possible. This Upgrade may only be purchased for a Romulan ship.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W045",
		gameId: 1,
		set: [
			"71795"
		],
		name: "Tricobalt Warhead",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nThis Upgrade costs +5 SP for any non-Tholian ship.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 6,
		range: "3"
	},
	{
		type: "weapon",
		id: "W044",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Disruptor Pulse",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. During the Declare Target step, target every enemy ship that is in your forward firing arc and within range and perform a separate attack against each of the target ships with this attack. This Upgrade costs +5 SP for any non-Romulan ship.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 2"
	},
	{
		type: "weapon",
		id: "W043",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Disruptor Beams",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nFor every damage the defending ship suffers from this attack, roll 1 attack die. If you roll at least one [hit] or [crit] result, add +1 damage.",
		factions: [
			"romulan"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 3"
	},
	{
		type: "talent",
		id: "E048",
		gameId: 1,
		set: [
			"71797"
		],
		name: "Salvage",
		unique: true,
		text: "If a ship is destroyed within Range 1-2 of your ship, you may discard this card and disable all of your Active Shields to steal 1 [tech_text] or [weapon_text] Upgrade with a cost of 5 SP or less from that ship even if it exceeds your ship's restrictions. If you do so, place a Disabled Upgrade Token on the stolen Upgrade and place an Auxiliary Power Token beside your ship.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C056",
		gameId: 1,
		set: [
			"71797"
		],
		name: "Gorn Raiding Party",
		unique: true,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not cloaked. Target ship must disable 2 of its Active Shields, if possible. If the target ship has no Active Shields or if this Action causes the target ship to have no Active Shields, discard this card and disable all Upgrades on the target ship.",
		factions: [
			"independent"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T068",
		gameId: 1,
		set: [
			"71797"
		],
		name: "Improved Deflector Screens",
		unique: false,
		text: "When defending, during the Compare Results step, if you have any Active Shields, cancel 1 [hit] or [crit] result. Discard this Upgrade if all of your Shields are destroyed. This Upgrade may only be purchased for a ship with a Hull value of 3 or less and no ship may be equipped with more than one \"Improved Deflector Screens\" Upgrade.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W042",
		gameId: 1,
		set: [
			"71797"
		],
		name: "Targeted Phaser Strike",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \nIn addition to inflicting normal damage, for every [hit] or [crit] result, disable 1 [weapon_text] Upgrade on the target ship (max 2). \nThis Upgrade costs +4 SP for any ship other than a Gorn Raider.",
		factions: [
			"independent"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 3"
	},
	{
		type: "crew",
		id: "C055",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Corak",
		unique: true,
		text: "<b>ACTION:</b> Increase your Captain's Skill Number by 3 until the end phase.",
		factions: [
			"dominion"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C054",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Glinn Tajor",
		unique: true,
		text: "When attacking a ship at Range 3, during the Roll Defense Dice step, you may discard this card to force your opponent to roll 1 less defense die.",
		factions: [
			"dominion"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T067",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Subspace Carrier Wave",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 3 and roll 4 attack dice. For each [hit] or [crit] result, disable 1 Captain or [crew_text] Upgrade of your choice on the target ship, if possible.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E047",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Standard Attack Formation",
		unique: true,
		text: "If your ship is within Range 1 of two other friendly ships, when you initiate and attack against a ship that is in the forward firing arcs of all 3 ships, you may discard this card during the Roll Attack Dice step to gain +2 attack dice for that attack.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E046",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Coded Messages",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target 1 friendly Dominion ship that is not within Range 1-3 of your ship. The target ship immediately performs an additional maneuver listed on its maneuver dial with a speed of 3 or less. Place a [battlestations] Token beside your ship and the target ship. This Upgrade may only be purchased for a Dominion ship.",
		factions: [
			"dominion"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W041",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Aft Weapons Array",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \nYou may only target a ship that is not in your forward firing arc with this attack. \nThis Upgrade may only be purchased for a Dominion ship with a Hull Value of 4 or greater.",
		factions: [
			"dominion"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "1 - 3"
	},
	{
		type: "crew",
		id: "C053",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Hikaru Sulu",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to acquire a target lock on an enemy ship within Range 1-3 and then perform an Action listed on your Action Bar as a free Action.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C052",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Pavel Chekov",
		unique: true,
		text: "During the Activation Phase, you may discard this card and your Captain card to perform an Action listed on your Action Bar as a free Action.\nOR\n<b>ACTION:</b> If you performed a Green Maneuver this round, add +1 attack die when attacking with a Secondary Weapon this round.",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C051",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Marlena Moreau",
		unique: true,
		text: "One of your [talent_text] Upgrades costs -1 SP (min 0).\n\n<b>ACTION:</b> Add +3 to your Captain Skill until the End Phase. Your Captain cannot be affected by an enemy Upgrade this round.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E045",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Tantalus Field",
		unique: true,
		text: "<b>ACTION:</b> Disable this card to target a ship at Range 1. Discard 1 Captain or 1 [crew_text] Upgrade on the target ship (your choice). Place an Auxiliary Power Token beside your ship. You cannot perform any free Actions on the round you perform this Action. This Upgrade may only be purchased for the I.S.S. Enterprise.",
		factions: [
			"mirror-universe"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T066",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Agony Booth",
		unique: false,
		text: "During the Activation Phase, you may discard this card to use an Action listed on one of your [crew_text] Upgrades as a free Action even if that Upgrade is disabled. No ship may be equipped with more than 1 \"Agony Booth\" Upgrade.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W040",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Phaser Barrage",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \nDuring the Roll Attack Dice step, if you roll at least 2 [hit] or [crit] results with this attack, roll 3 additional attack dice. Add all of the results from the additional dice to your total for this attack.",
		factions: [
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "3"
	},
	{
		type: "weapon",
		id: "W039",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nYou may convert 1 of your [battlestations] results into a [crit] result. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"mirror-universe"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "crew",
		id: "C050",
		gameId: 1,
		set: [
			"71997p"
		],
		name: "Sirna Kolrami",
		unique: true,
		text: "When defending, during the Compare Results step, if you cancel all of your opponent's [hit] and [crit] results, you may discard this card and disable 1 of your other Upgrades to immediately roll a number of attack dice equal to the number of [hit] or [crit] results that were cancelled (max 4 dice). The attacking ship suffers normal damage for every [hit] or [crit] result you roll with these dice.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E044",
		gameId: 1,
		set: [
			"71997p"
		],
		name: "Computer Analysis",
		unique: true,
		text: "During the Planning Phase, you may discard this card to remove all the Disabled Upgrade Tokens from all of your other Upgrades.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T065",
		gameId: 1,
		set: [
			"71997p"
		],
		name: "Escape Transporter",
		unique: false,
		text: "When your ship is destroyed, before removing it from the play area, you may discard this card to target a friendly ship at Range 1-2 that is not cloaked and disable all of that ship's remaining Shields. Select up to 3 other Upgrades that were deployed to this ship and redeploy them to the target ship, even if it exceeds that ship's restrictions. If any of the redeployed Upgrades were already disabled, they remain disabled. This Upgrade may only be purchased for a Federation Shuttlecraft.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T064",
		gameId: 1,
		set: [
			"71997p"
		],
		name: "Warp Drive",
		unique: false,
		text: "During the Activation Phase, if you reveal a 2 [forward] Maneuver, you may disable this card to perform a white 3 [forward] or a red 4 [forward] Maneuver instead. This Upgrade may only be purchased for a Federation Shuttlecraft and no ship may be equipped with more than 1 \"Warp Drive\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E043",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Sabotage",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. Target ship must disable 2 Active Shields, if possible. If the target ship has no Active Shields or if this Action causes the target ship to have no Active Shields, place an Auxiliary Power Token beside the target ship.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C049",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Orion Tactical Officer",
		unique: false,
		text: "If you damage an opponent's Hull with a [crit], you may immediately discard this card to search the Damage Deck for a \"Weapons Malfunction\" or a \"Munitions Failure\" card instead of drawing a random Damage Card. Re-shuffle the Damage Deck when you are done. \nNo ship may be equipped with more than one \"Orion Tactical Officer\" Upgrade.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C048",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Andorian Helmsman",
		unique: false,
		text: "During the Combat Phase, after you complete your attack, you may discard this card to immediately perform a 1 or 2 Maneuver (straight or bank). If you do so, place an Auxiliary Power Token beside your ship. \nNo ship may be equipped with more than one \"Andorian Helmsman\" Upgrade.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T063",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Emergency Bulkheads",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to flip all critical damage cards assigned to your ship face down. If your ship is not cloaked and you have no Active Shields, each time you defend this round, roll +1 defense die.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T062",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Enhanced Hull Plating",
		unique: false,
		text: "During the Roll Defense Dice step of the Combat Phase, if your ship is not Cloaked and you have no Active Shields, you may add up to 2 [evade] results to your defense roll. If you do so, place 1 Auxiliary Power Token beside your ship for each [evade] result you added with this Upgrade. This Upgrade may only be purchased for a Mirror Universe ship with a Hull value of 4 or less. You cannot deploy more than 1 \"Enhanced Hull Plating\" Upgrade to any ship.",
		factions: [
			"mirror-universe"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W038",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Photonic Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 4,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W037",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Plasma Cannons",
		unique: false,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. \n\nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"mirror-universe"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1 - 3"
	},
	{
		type: "talent",
		id: "E042",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Causality Paradox",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. Discard 1 Upgrade of your choice on the target ship. Then remove 1 Disabled Upgrade Token from 1 of your Upgrades, if possible. \nThis Upgrade may only be purchased for Annorax or any other Krenim Captain assigned to a Krenim weapon ship.",
		factions: [
			"independent",
			"mirror-universe"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T061",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Temporal Wave Front",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target every ship in your forward firing arc within Range 1-3. Each target ship must roll 3 defense dice. For every blank result a ship rolls, that ship must disable one of its cards at random (Captain, Admiral or Upgrade card). \n\nThis Upgrade by only be purchased for a Krenim weapon ship.",
		factions: [
			"independent",
			"mirror-universe"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T060",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Temporal Core",
		unique: false,
		text: "<b>ACTION:</b> Disable this card to perform this Action. When defending this round, all ships roll -2 attack dice against your ship until the End Phase. This Action cannot reduce an attack below 1 attack die. You cannot perform any free Actions this round. \n\nThis Upgrade may only be purchased for a Krenim weapon ship.",
		factions: [
			"independent",
			"mirror-universe"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T059",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Spatial Distortion",
		unique: false,
		opBanned: true,
		text: "<b>ACTION:</b> Discard this card to remove your ship from the play area and discard all Tokens that are beside your ship except for Auxiliary Power Tokens. During the End Phase, place your ship back in the play area. You cannot place your ship within Range 1-3 of any enemy ship. \n\nThis Upgrade may only be purchased for Krenim weapon ship.",
		factions: [
			"independent",
			"mirror-universe"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T058",
		gameId: 1,
		set: [
			"71998p"
		],
		name: "Tachyon Detection Grid",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target your ship and up to 2 friendly ships within Range 1 of your ship. All cloaked enemy ships within Range 1 of the target ships cannot perform the [sensor-echo] Action this round and immediately flip their [cloak] Tokens over to their red sides. In addition, all enemy ships within Range 1 of the target ships roll -1 defense die each time they defend this round. This Upgrade may only be purchased for a Federation ship.",
		factions: [
			"federation"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C047",
		gameId: 1,
		set: [
			"71998p"
		],
		name: "William T. Riker",
		unique: true,
		text: "Each time you defend, roll +1 defense die and you may convert 1 of your [battlestations] results into an [evade] result. If your Captain Card is disabled, each time you defend, roll +2 defense dice and you may convert up to 2 of your [battlestations] results into [evade] results.",
		factions: [
			"federation"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T057",
		gameId: 1,
		set: [
			"71998p"
		],
		name: "Systems Upgrade",
		unique: false,
		text: "You may fill any slot on your Upgrade Bar with this Upgrade. Add 1 [tech_text] icon to your Upgrade Bar. Your starting Shield Value is at +1. This Upgrade may only be purchased for a Federation ship and no ship may be equipped with more than one \"Systems Upgrade\" card.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T056",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Specialized Shields",
		unique: false,
		text: "When defending, while your ship still has Active Shields, during the Modify Defense Dice step, you may re-roll 1 of your blank results. When suffering damage from an obstacle or a minefield, subtract 1 damage from the total damage. This Upgrade may only be purchased for a Federation ship with a Hull value of 3 or less.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T055",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Phasing Cloaking Device",
		unique: true,
		text: "Add the [cloak] and [sensor-echo] icons to your Action Bar. Each time your ship performs the [cloak] Action, roll 1 attack die. If you roll a [hit] result, suffer 1 damage to your Hull. While cloaked, your ship: 1) may only perform green maneuvers, 2) does not lose its actions when overlapping another ship's base or an obstacle and 3) suffers no damage when overlapping obstacles. This Upgrade costs +5 SP for any ship other than a Federation Oberth Class.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T054",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Escape Pod",
		unique: false,
		text: "When your ship is destroyed, before removing it from the play area, place 1 Escape Pod Token in the play area within Range 1 of your ship and then choose your Captain and/or up to 2 of your [crew_text] Upgrades and place them under this card. Do not discard these cards with the ship.",
		factions: [
			"federation"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C046",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Andy Simonson",
		unique: true,
		text: "After completing your ship's move, before declaring your Action for this round, you may discard this card to target a ship within Range 1-3 of your ship and look at that ship's chosen Maneuver.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C045",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Phil Wallace",
		unique: true,
		text: "Before you move, after revealing your Maneuver Dial, you may disable this card to reduce your ship's Speed by 1 (min 1).",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C044",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Dawn Velazquez",
		unique: true,
		text: "<b>ACTION:</b> Discard your Captain Card to immediately perform an additional maneuver from your maneuver dial with a speed of 3 or less. You cannot attack this round. This card then becomes your Captain with a Skill of 2. You cannot perform this action if Dawn Velazquez is your captain. This card may only be purchased for a Federation ship with a Hull Value of 3 or less.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C043",
		gameId: 1,
		set: [
			"71801"
		],
		name: "Eric Motz",
		unique: true,
		text: "Add 1 [tech_text] Upgrade slot to your Upgrade Bar.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E041",
		gameId: 1,
		set: [
			"71803"
		],
		name: "Provisional Government",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-3. You cannot attack that ship and that ship cannot attack your ship this round.",
		factions: [
			"bajoran"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T053",
		gameId: 1,
		set: [
			"71803"
		],
		name: "Assault Vessel Upgrade",
		unique: false,
		text: "You may fill any slot on your Upgrade Bar with this Upgrade. \nYour Primary Weapon and Shield values are at +1. \nThis Upgrade may only be purchased for a Bajoran Scout Ship and no ship may be equipped with more than 1 Assault Vessel Upgrade.",
		factions: [
			"bajoran"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C042",
		gameId: 1,
		set: [
			"71803"
		],
		name: "Bajoran Militia",
		unique: false,
		text: "<b>ACTION:</b> During the Combat Phase, add a number of attack dice equal to the number of Bajoran Militia Upgrades assigned to your ship (max +3) until the End Phase. This Upgrade may only be purchased for a Bajoran ship.",
		factions: [
			"bajoran"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E040",
		gameId: 1,
		set: [
			"71803"
		],
		name: "More Than Meets the Eye",
		unique: true,
		text: "You may discard this card to place a [scan] Token beside your ship, even if there is already one there. You cannot perform a [scan] Action as a free Action during the round you use this ability.",
		factions: [
			"bajoran"
		],
		cost: 1,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W036",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Chroniton Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. All damage inflicted by this attack ignores the opposing ship's Shields. \nYou may fire this weapon from your forward or rear firing arcs. This Upgrade costs +6 SP for any ship other than a Krenim weapon ship.",
		factions: [
			"independent",
			"mirror-universe"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W035",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Temporal Incursion",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack. In addition to normal damage, for every uncancelled [crit] result, discard 1 Upgrade at random on the target ship. Then for every uncancelled [hit] result, disable 1 Upgrade at random on the target ship. This Upgrade may only be purchased for a Krenim weapon ship.",
		factions: [
			"independent",
			"mirror-universe"
		],
		cost: 9,
		skill: 0,
		talents: 0,
		attack: 8,
		range: "3"
	},
	{
		type: "weapon",
		id: "W034",
		gameId: 1,
		set: [
			"71998p"
		],
		name: "Type 8 Phaser Array",
		unique: false,
		text: "When attacking with your Primary Weapon, gain +1 attack die. \n\nThis Upgrade may only be purchased for a ship with a Primary Weapon Value of 3 or less. No ship may be equipped with more than one \"Type 8 Phaser Array\" Upgrade.",
		factions: [
			"federation"
		],
		cost: 2,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C041",
		gameId: 1,
		set: [
			"71999p"
		],
		name: "Klingon Stealth Team",
		unique: false,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 2-3 that is not Cloaked. Disable 1 [tech_text] or [weapon_text] Upgrade of your choice on target ship and then discard 1 [crew_text] Upgrade of your choice on that ship, if possible. \nThis Upgrade may only be purchased for a Klingon ship and no ship may be equipped with more than one Klingon Stealth Team Upgrade.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T052",
		gameId: 1,
		set: [
			"71999p",
			"72241"
		],
		name: "Cloaked Mines",
		unique: false,
		text: "During the Planning Phase, you may discard this card to place a Minefield Token within Range 1 of your ship (in any direction), but not within Range 3 of an enemy ship. If an enemy ship passes within Range 1 of the token, roll 3 attack dice (-1 if the target ship immediately performs a [scan] Action). Any [hit] or [crit] damage the target ship as normal. The affected ship does not roll any defense dice.",
		factions: [
			"klingon"
		],
		cost: 3,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E039",
		gameId: 1,
		set: [
			"71999p"
		],
		name: "Mauk-to'Vor",
		unique: true,
		text: "<b>ACTION:</b> Discard this card and your Captain Card to gain a number of attack dice for your first attack this round equal to 1/2 of that Captain's Skill number, rounded down (max +3). Place an Auxiliary Power Token beside your ship. You cannot perform any free Actions this round. \nThis Upgrade may only be purchased for a Klingon Captain assigned to a Klingon ship.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W033",
		gameId: 1,
		set: [
			"71999p"
		],
		name: "Ambush Attack",
		unique: false,
		text: "<b>ATTACK: </b>Discard this card to perform this attack. \nIf your ship is cloaked, gain +1 attack die for this attack. If your ship is not in the target ship's forward or rear firing arcs, you may convert all of your [battlestations] results into [hit] results. No ship may be equipped with more than one Ambush Attack Upgrade.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "1 - 2"
	},
	{
		type: "question",
		id: "Q026",
		gameId: 1,
		set: [
			"71802"
		],
		name: "EMH Mark II",
		unique: true,
		text: "This Upgrade counts as either a [crew_text] Upgrade or a [tech_text] Upgrade (your choice).\n<hr> <b>ACTION:</b> Discard this card to target a ship at Range 1. Disable all [crew_text] Upgrades on the target ship.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: "",
		countsAsUpgrade: true
	},
	{
		type: "tech",
		id: "T050",
		gameId: 1,
		set: [
			"71802"
		],
		name: "Tactical Prototype",
		unique: true,
		text: "You may disable this card to perform an [evade], [scan] or [battlestations] Action while you have an Auxiliary Power Token beside your ship. Your ship must have the appropriate Action on its Action Bar in order to use this ability, and you cannot perform any free Actions during the round in which you use this ability.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C039",
		gameId: 1,
		set: [
			"71802"
		],
		name: "Romulan Hijackers",
		unique: true,
		text: "While this card is assigned to your ship, you may only have a Romulan Captain and Romulan [crew_text] Upgrades assigned to your ship and all of your non-Borg [tech_text] and [weapon_text] Upgrades cost -1 SP. In addition, if this card is assigned to a non-Romulan ship, you do not pay a Faction penalty for any of your Romulan upgrades (including this one). When attacking with your Primary Weapon, if your ship is not within Range 1-3 of any other friendly ships, during the Roll Attack Dice step, you may disable this card to gain +1 attack die.",
		factions: [
			"romulan"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "crew",
		id: "C038",
		gameId: 1,
		set: [
			"71804"
		],
		name: "Darok",
		unique: true,
		text: "After your ship moves, you may discard Darok to perform an additional Action as a free Action this round. This Upgrade may only be purchased for a Klingon ship.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T049",
		gameId: 1,
		set: [
			"71804"
		],
		name: "Inverse Graviton Burst",
		unique: true,
		text: "<b>ACTION:</b> Discard this card to target every ship at Range 1-3. Place 1 Auxiliary Power Token beside your ship and each of the targeted ships. \n\nThis Upgrade costs +5 SP if purchased for a non-Klingon ship.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "talent",
		id: "E038",
		gameId: 1,
		set: [
			"71804"
		],
		name: "Long Live the Empire!",
		unique: true,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, you may discard this card to add up to 3 attack die to your attack. If you do so, immediately after you complete the attack, your ship suffers 1 damage to your Hull or Shields (your choice) for each additional die you added with this ability. This Upgrade may only be purchased for a Klingon Captain assigned to a Klingon ship.",
		factions: [
			"klingon"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T048",
		gameId: 1,
		set: [
			"71802"
		],
		name: "Regenerative Shielding",
		unique: false,
		text: "During the Planning Phase, you may disable this card to repair 1 of your Shield Tokens. \n\nThis Upgrade costs +4 SP for any ship other than the U.S.S. Prometheus and no ship may be equipped with more than 1 Regenerative Shielding Upgrade.",
		factions: [
			"federation"
		],
		cost: 4,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "tech",
		id: "T047",
		gameId: 1,
		set: [
			"71802"
		],
		name: "Ablative Hull Armor",
		unique: true,
		text: "When defending, during the Modify Defense Dice step, convert all of your opponent's [crit] results into [hit] results. Place all the damage cards that your ship receives beneath this card. Once there are 3 damage cards beneath this card, discard this Upgrade and all damage cards beneath it. All excess damage affects the ship as normal. This Upgrade may only be purchased for a Prometheus Class ship.",
		factions: [
			"federation"
		],
		cost: 7,
		skill: 0,
		talents: 0,
		attack: 0,
		range: ""
	},
	{
		type: "weapon",
		id: "W032",
		gameId: 1,
		set: [
			"71804"
		],
		name: "Strafing Attack",
		unique: false,
		text: "<b>ATTACK: </b>Discard this card to perform this attack. After completing this attack, you may immediately target up to 2 other ships within Range 1 of your ship and make an additional 3 dice attack against each of those ships. The additional target ships do not need to be in your forward firing arc. You cannot perform this attack the if you performed a Full Astern Maneuver this round.",
		factions: [
			"klingon"
		],
		cost: 6,
		skill: 0,
		talents: 0,
		attack: 3,
		range: "1"
	},
	{
		type: "weapon",
		id: "W031",
		gameId: 1,
		set: [
			"71802"
		],
		name: "Photon Torpedoes",
		unique: false,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack. \nIf fired from a Prometheus class ship, add +1 attack die. \nYou may fire this weapon from your forward or rear firing arcs.",
		factions: [
			"federation"
		],
		cost: 5,
		skill: 0,
		talents: 0,
		attack: 5,
		range: "2 - 3"
	},
	{
		type: "weapon",
		id: "W030",
		gameId: 1,
		set: [
			"71802"
		],
		name: "Multi-Vector Assault Mode",
		unique: true,
		text: "<b>ACTION:</b> Place a Multi-Vector Assault Mode Token beside your ship. You cannot perform any free Actions this round. <b>ATTACK: (Target Lock):</b> Disable this card, spend your target lock and spend your Multi-Vector Assault Mode Token to perform this attack. You may fire this weapon in any direction. This Upgrade may only be purchased for a Prometheus Class ship.",
		factions: [
			"federation"
		],
		cost: 8,
		skill: 0,
		talents: 0,
		attack: 8,
		range: "1"
	},
	{
		type: "talent",
		id: "E037",
		gameId: 1,
		set: [
			"blind_aldara"
		],
		name: "Concentrated Firepower",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target 1 enemy ship at Range 3. Every friendly ship (including this ship) that attacks the target ship this round with its Primary Weapon gains +1 attack die.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "crew",
		id: "C037",
		gameId: 1,
		set: [
			"blind_aldara"
		],
		name: "Glinn Lasaran",
		cost: 3,
		text: "When defending, during the Roll Defense Dice step, you may discard this card to roll +2 Defense Dice.",
		unique: true,
		factions: [
			"dominion"
		]
	},
	{
		type: "tech",
		id: "T046",
		gameId: 1,
		set: [
			"blind_aldara"
		],
		name: "High Energy Subspace Field",
		cost: 5,
		text: "Between any of the Phases, you may discard this card to target a ship at Range 1-3. Remove 1 Token ([evade], [scan] or [battlestations]) from beside that ship and place the same Token beside your ship. You cannot perform any Actions, including free Actions, before or after you use this ability during that round.\nThis Upgrade costs +5 SP if purchased for any non-Dominion ship and no ship may be equipped with more than one \"High Energy Subspace Field\" Upgrade.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "weapon",
		id: "W029",
		gameId: 1,
		set: [
			"blind_aldara"
		],
		name: "Aft Weapons Array",
		cost: 3,
		attack: 4,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Disable this card to perform this attack.\n\nYou may only fire this weapon at an opposing ship that is not in your forward firing arc.\n\nThis card costs +5 SP if purchased for any ship other than a Cardassian Galor class ship and no ship may be equipped with more than one \"Aft Weapons Array\" Upgrade.",
		unique: false,
		factions: [
			"dominion"
		]
	},
	{
		type: "talent",
		id: "E036",
		gameId: 1,
		set: [
			"72004p"
		],
		name: "Ibix Dynasty",
		cost: 5,
		text: "Add 2 [weapon_text] Upgrade slots to your Upgrade Bar. If this card is discarded, your ship loses these Upgrade slots.\n\nWhen defending, before any dice are rolled, you may discard this card and 1 of your [weapon_text] Upgrades to cancel the attack.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C036",
		gameId: 1,
		set: [
			"72004p"
		],
		name: "Aquatic Councilor",
		cost: 5,
		text: "When defending, during the Roll Defense Dice step, you may disable this card to roll 1 additional defense die.\nOR\nWhen defending, during the Roll Defense Dice step, you may discard this card to roll 2 additional defense dice.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W028",
		gameId: 1,
		set: [
			"72004p"
		],
		name: "Prototype Weapon",
		cost: 5,
		attack: 5,
		range: "1",
		text: "<b>ATTACK: </b>Discard this card and your Captain Card to perform this attack. Place a Mission Token in the play area, in your forward firing arc, within Range 1 of your ship that is not on top of another ship's base. Using a 360 arc from the Mission Token, target all ships in a line up to Range 2 and make a separate attack against each ship in the line (at -1 attack die for each ship past the first). Remove the Mission Token from the play area after the attack. This Upgrade may only be purchased for a Xindi ship.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T045",
		gameId: 1,
		set: [
			"72004p"
		],
		name: "Escape Pod",
		cost: 1,
		text: "Whenever one of your [crew_text] Upgrades is supposed to be discarded, you may place that Upgrade beneath this card instead. While an Upgrade is beneath this card it cannot be targeted or used in any way.\n\nIf your ship is destroyed, you may remove the [crew_text] Upgrade from beneath this card and deploy it to a friendly ship within Range 1-3 of your ship.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E035",
		gameId: 1,
		set: [
			"72002h"
		],
		name: "Balance of Terror",
		cost: 3,
		factionPenalty: 0,
		text: "This card adds an extra [talent_text] slot which applies the special rules from the Balance of Terror OP.\n\nThe chosen Upgrade will be placed face down below your ship card for a cost of exactly 3 SP. The Upgrade must be of the same faction as the ship and have an SP cost of 5 or less.",
		unique: false,
		factions: [
			"no-faction"
		]
	},
	{
		type: "crew",
		id: "C035",
		gameId: 1,
		set: [
			"72002h"
		],
		name: "Balance of Terror",
		cost: 3,
		factionPenalty: 0,
		text: "This card adds an extra [crew_text] slot which applies the special rules from the Balance of Terror OP.\n\nThe chosen Upgrade will be placed face down below your ship card for a cost of exactly 3 SP. The Upgrade must be of the same faction as the ship and have an SP cost of 5 or less.",
		unique: false,
		factions: [
			"no-faction"
		]
	},
	{
		type: "tech",
		id: "T044",
		gameId: 1,
		set: [
			"72002h"
		],
		name: "Balance of Terror",
		cost: 3,
		factionPenalty: 0,
		text: "This card adds an extra [tech_text] slot which applies the special rules from the Balance of Terror OP.\n\nThe chosen Upgrade will be placed face down below your ship card for a cost of exactly 3 SP. The Upgrade must be of the same faction as the ship and have an SP cost of 5 or less.",
		unique: false,
		factions: [
			"no-faction"
		]
	},
	{
		type: "weapon",
		id: "W027",
		gameId: 1,
		set: [
			"72002h"
		],
		name: "Balance of Terror",
		cost: 3,
		factionPenalty: 0,
		text: "This card adds an extra [weapon_text] slot which applies the special rules from the Balance of Terror OP.\n\nThe chosen Upgrade will be placed face down below your ship card for a cost of exactly 3 SP. The Upgrade must be of the same faction as the ship and have an SP cost of 5 or less.",
		unique: false,
		factions: [
			"no-faction"
		]
	},
	{
		type: "talent",
		id: "E034",
		gameId: 1,
		set: [
			"blind_belak"
		],
		name: "Tal Shiar",
		cost: 5,
		text: "During the Planning Phase, after all ships have chosen their maneuvers, you may discard this card to target a ship at Range 1-3 and look at that ship's maneuver dial. Then place a [battlestations] Token beside your ship. You cannot perform a [battlestations] Action (even as a free Action) this round.\n\nThis Upgrade may only be purchased for a Romulan Captain.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C343",
		gameId: 1,
		set: [
			"blind_belak"
		],
		name: "Tallera",
		cost: 3,
		text: "<b>ACTION:</b> Target a ship at Range 1-2 and roll 1 attack die. If you roll a [hit] or [crit] result, discard this card and 1 [crew_text] Upgrade on the target ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T043",
		gameId: 1,
		set: [
			"blind_belak"
		],
		name: "Modified Cloaking Device",
		cost: 5,
		text: "On the round you perform a [cloak] Action, you ship can only be target locked by a ship that is within Range 1 of your ship. In addition, you may roll your full defense dice in spite of the presence of an opposing ship's [scan] Token while you are cloaked.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W026",
		gameId: 1,
		set: [
			"blind_belak"
		],
		name: "Aft Disruptor Emitters",
		cost: 2,
		attack: 3,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Disable this card to perform this attack.\n\nYou may only fire this weapon at a ship that is not in your forward firing arc.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E033",
		gameId: 1,
		set: [
			"72001p"
		],
		name: "Section 31",
		cost: 3,
		text: "At any time, you may discard this card to achieve the effect of spending either a [battlestations], an [evade], or a  [target-lock] Token as if you spent the appropriate Token from beside your ship. You may only use the  [target-lock] effect for re-rolling your dice.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C033",
		gameId: 1,
		set: [
			"72001p"
		],
		name: "Luther Sloan",
		cost: 3,
		text: "You do not pay a faction penalty when assigning this card to a Federation ship.\n\nDuring the Planning Phase, after all ships have been assigned a Maneuver Dial, you may discard this card to look at up to 3 ships' Maneuver Dials. You may then change your chosen Maneuver.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "weapon",
		id: "W025",
		gameId: 1,
		set: [
			"72001p"
		],
		name: "Tricobalt Device",
		cost: 6,
		attack: 6,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack.\n\nYou may only fire this weapon from your forward firing arc.\nThis Upgrade costs +4 SP if purchased for any ship other than an Intrepid-class ship.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T042",
		gameId: 1,
		set: [
			"72001p"
		],
		name: "Variable Geometry Pylons",
		cost: 5,
		text: "Before you move, you may disable this card to increase your speed by 1 or decrease your speed by 1. If you do this, treat the maneuver as a White Maneuver. You cannot perform any Actions on the round you use this ability.\n\nThis Upgrade may only be purchased for an Intrepid-class ship and no ship may be equipped with more than 1 Variable Geometry Pylons Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E032",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Telepathy",
		cost: 4,
		text: "You may discard this card immediately before you move in order to change your Maneuver for that round.",
		unique: true,
		factions: [
			"species-8472"
		]
	},
	{
		type: "weapon",
		id: "W024",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Biological Weapon",
		cost: 6,
		attack: 5,
		range: "2 - 3",
		text: "<b>ATTACK: </b>Discard this card to perform this attack.\nIf this attack hits, in addition to normal damage, discard 1 [crew_text] Upgrade of your choice on the defending ship for each [battlestations] result (max 2).\n\nThis Upgrade may only be purchased for a Species 8472 Bioship.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "weapon",
		id: "W023",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Energy Blast",
		cost: 8,
		attack: 8,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and discard this card to perform this attack.\n\nThis Upgrade may only be purchased for a Species 8472 Bioship.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T041",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Biological Technology",
		cost: 5,
		text: "Place 1 Mission Token on this card at the start of each Planning Phase. When attacking, you may spend up to 2 of these tokens to add an equal number of attack dice. When defending, you may spend up to 2 of these tokens to add an equal number of defense dice.\nThis Upgrade may only be purchased for a Species 8472 ship and no ship may be equipped with more than 1 \"Biological Technology\" Upgrade.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T040",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Biogenic Field",
		cost: 6,
		text: "When defending, you roll +1 defense die (+3 vs a Borg ship). In addition, when an enemy card ability affects one of your cards, roll 1 attack die (3 against a Borg card ability). If you roll a [battlestations] result, the card effect is cancelled.\n\nThis Upgrade may only be purchased for a Species 8472 ship and no ship may be equipped with more than 1 \"Biogenic Field\" Upgrade.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T039",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Electrodynamic Fluid",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to immediately perform a 2nd maneuver from your Maneuver Dial with a speed of 3 or less.\nOR\n<b>ACTION:</b> Disable this card to perform a [sensor-echo] Action even if your ship is not cloaked.\nThis Upgrade may only be purchased for a Species 8472 ship.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T038",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Fluidic Space",
		cost: 6,
		text: "Instead of making a normal move, you may discard this card to remove your ship from the play area and immediately place it back anywhere in the play area, but not within Range 1-2 of any other ship. You cannot attack or perform any Actions on the round you use this ability.\nThis Upgrade costs +5SP if purchased for a non-Species 8472 ship and no ship may be equipped with more than 1 \"Fluidic Space\" Upgrade.",
		unique: false,
		opBanned: true,
		factions: [
			"species-8472"
		]
	},
	{
		type: "weapon",
		id: "W022",
		gameId: 1,
		set: [
			"blind_bioship"
		],
		name: "Energy Weapon",
		cost: 4,
		text: "During the Activation Phase, if an enemy ship ends its move in your forward firing arc, you may discard this card to immediately perform an additional attack against that ship with your Primary Weapon at -3 attack dice. If you do so, place an Auxiliary Power Token beside your ship.\n\nThis Upgrade may only be purchased for a Species 8472 Bioship and no ship may be equipped with more than 1 \"Energy Weapon\" Upgrade.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T037",
		gameId: 1,
		set: [
			"blind_bioship"
		],
		name: "Neuro Peptides",
		cost: 2,
		text: "During the Activation Phase, you may discard this card to perform an Action from your Action Bar as a free Action.\n\nThis Upgrade may only be purchased for a Species 8472 ship and no ship may be equipped with more than 1 \"Neuro Peptides\" Upgrade.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T036",
		gameId: 1,
		set: [
			"blind_bioship"
		],
		name: "Organic Conduits",
		cost: 1,
		text: "When you reveal a red maneuver, you may discard this card to treat that maneuver as a white maneuver.\n\nThis Upgrade may only be purchased for a Species 8472 ship.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "tech",
		id: "T035",
		gameId: 1,
		set: [
			"blind_bioship"
		],
		name: "Resistant Hull",
		cost: 1,
		text: "You may roll your full defense dice in spite of the presence of an opposing ship's [scan] Token. In addition, if a [borg_text] Upgrade affects your ship Captain or one of your Upgrades, roll 1 defense die. If your roll an [evade] result, the effect is cancelled.\n\nThis Upgrade may only be purchased for a Species 8472 ship and no ship may be equipped with more than 1 \"Resistant Hull\" Upgrade.",
		unique: false,
		factions: [
			"species-8472"
		]
	},
	{
		type: "talent",
		id: "E031",
		gameId: 1,
		set: [
			"blind_buruk"
		],
		name: "Dishonorable Tactics",
		cost: 3,
		text: "When attacking with your Primary Weapon, during the Modify Attack Dice step, you may discard this card to target a friendly ship within Range 1-3 of your ship. Disable 1 Upgrade on the target ship to re-roll any number of your attack dice. You may discard that Upgrade to re-roll any of those dice a 2nd time.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C032",
		gameId: 1,
		set: [
			"blind_buruk"
		],
		name: "Kurak",
		cost: 3,
		text: "When defending, during the Deal Damage step, you may discard this card to disable up to 2 of your Shield Tokens instead of losing them.\n\nThis card costs +5 SP if purchased for a non-Klingon ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "weapon",
		id: "W021",
		gameId: 1,
		set: [
			"blind_buruk"
		],
		name: "Ambush Attack",
		cost: 5,
		text: "At the start of the Combat Phase, if your ship is cloaked, you may discard this card to perform your attack before every other ship. This attack must be made with your Primary Weapon. If this attack hits an attack squadron, disable 1 (squadron) Upgrade on the defending attack squadron, if possible.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T034",
		gameId: 1,
		set: [
			"blind_buruk"
		],
		name: "Targeting Systems",
		cost: 4,
		text: "During the Activation Phase, you may discard this card to perform the  [target-lock] Action as a free Action.\n\nNo ship may be equipped with more than 1 \"Targeting Systems\" Upgrade.",
		unique: false,
		factions: [
			"klingon"
		]
	},
	{
		type: "tech",
		id: "T033",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Auto-Navigation",
		cost: 2,
		text: "Add 1 [tech_text] Upgrade to your Upgrade Bar.\n\nWhile this card is assigned to your ship, you do not need to have a Captain Card assigned to your ship and your ship has a Skill Number of 2.\n\nWhen you reveal your chosen maneuver, you may disable this card to change that maneuver to any Green Maneuver on your ship's dial.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T032",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Quantum Slipstream Drive",
		cost: 6,
		text: "If you reveal an maneuver with a speed of 5 or greater, before performing the maneuver, you may discard this card to remove your ship from the play area and discard all tokens from beside your ship except for Auxiliary Power Tokens. Then, immediately place it back in the play area, but not within Range 1-3 of any other ship. You cannot attack during the round you use this ability.",
		unique: true,
		opBanned: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T031",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Power Distribution Grid",
		cost: 2,
		text: "During the Activation Phase, before you move, you may discard this card to disregard your chosen Maneuver and perform one of the [turn-left] or [turn-right] Maneuvers on your Maneuver dial instead. Treat this as a red maneuver.",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T030",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Force Field",
		cost: 3,
		text: "If an enemy ship causes one of your Upgrades to be disabled or discarded, you may disable this card to roll 1 defense die. If you roll an [evade] result, the targeted Upgrade is not disabled or discarded.\n\nThis upgrade costs +5 SP for any ship other than a Dauntless class ship.",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T029",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Navigational Deflector",
		cost: 4,
		text: "When taking damage this round, you may discard this card to cancel 1 [hit] result. If the damage is from a minefield or an obstacle, disable this card instead of discarding it. You may roll defense dice against obstacles or minefields. No ship may be equipped with more than one Navigational Deflector Upgrade.",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T028",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Particle Synthesis",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card and discard one of your [tech_text] Upgrades to repair either 1 damage to your Hull or up to 2 of your Shield Tokens.\n\nThis Upgrade may only be purchased for a Dauntless class ship.",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E030",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Emergency Shutdown",
		cost: 3,
		text: "During the Activation Phase, before you move, you may discard this card to disregard your chosen Maneuver and not move. If you do so, you lose your Perform Action step for that round.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E029",
		gameId: 1,
		set: [
			"71805"
		],
		name: "Lure",
		cost: 5,
		text: "During the Planning Phase, after all ships have chosen their maneuvers, you may discard this card to target an enemy ship that is not within Range 1-3 of your ship. If you do this, change that ship's chosen Maneuver to a green maneuver on it's dial. The target ship cannot look at or change their dial after you reset it. If the new maneuver would cause the ship to exit the play area or overlap another ship, the target ship may disregard the maneuver and not move that turn.<b> ( ERRATA )</b>",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "crew",
		id: "C031",
		gameId: 1,
		set: [
			"72014"
		],
		name: "B'Elanna Torres",
		cost: 4,
		text: "When defending, during the Compare Results step, you may disable this card and 1 of your Active Shields to cancel 1 [hit] or [crit] result.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C030",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Harry Kim",
		cost: 3,
		text: "<b>ACTION:</b> Disable this card to place 2 [evade] Tokens beside your ship. You cannot roll any defense dice this round. You cannot perform an [evade] Action this round, even as a free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C029",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Seven of Nine",
		cost: 4,
		text: "During the Activation Phase, you may disable this card to perform a [battlestations] Action as a free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T027",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Parametallic Hull Plating",
		cost: 2,
		text: "During the Compare Results step, you may discard this card to cancel 1 [hit] or [crit] result.\n\nThis Upgrade costs +3 SP for any non-Federation ship and no ship may be equipped with more than 1 Parametallic Hull Plating Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T026",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Immersion Shielding",
		cost: 3,
		text: "Add +1 to your ship's Shield value. In addition, you may re-roll the attack die wihen your ship overlaps an Obstacle.\n\nThis Upgrade costs +3 SP for any non-Federation ship and no ship may be equipped with more than 1 \"Immersion Shielding\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T025",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Unimatrix Shielding",
		cost: 5,
		text: "Add +2 to your ship's Shield value. When defending against an attack from a Borg ship, during the Compare Results step, you may disable up to 2 of your Active Shields to cancel an equal number of [hit] or [crit] results.\n\nThis Upgrade costs +5 SP for any non-Federation ship and no ship may be equipped with more than 1 \"Unimatrix Shielding\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W020",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Photonic Missiles",
		cost: 3,
		attack: 3,
		range: "1 - 2",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\nIf this attack hits, in addition to normal damage, place an Auxiliary Power Token beside the defending ship.\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W195",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Photon Torpedoes",
		cost: 4,
		attack: 5,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\nIf fired from a shuttlecraft, discard this card instead of placing the Time Tokens and the Range is 1-2.\n\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E028",
		gameId: 1,
		set: [
			"72003p"
		],
		name: "Neuro Toxin",
		cost: 5,
		text: "If an Upgrade on your ship is affected by an opposing ship, you may discard this card to disable the Captain and every [crew_text] Upgrade on the opposing ship.",
		unique: true,
		factions: [
			"xindi"
		]
	},
	{
		type: "crew",
		id: "C028",
		gameId: 1,
		set: [
			"72003p"
		],
		name: "Insectoid Riflemen",
		cost: 5,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card to disable all [crew_text] Upgrades on the target ship and then place an Auxiliary Power Token beside that ship.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "weapon",
		id: "W019",
		gameId: 1,
		set: [
			"72003p"
		],
		name: "Pulse-Firing Particle Cannon",
		cost: 4,
		attack: 3,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Disable this card to perform this attack. You may only fire this weapon from your forward firing arc.\nOnce per round, if this attack hits, you may immediately make an additional attack with this weapon against the same target with half the attack dice rounded down.\nThis Upgrade costs +5 SP if purchased for a non-Xindi ship.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "tech",
		id: "T024",
		gameId: 1,
		set: [
			"72003p"
		],
		name: "Phase Deflector Pulse",
		cost: 5,
		text: "If your ship executes a maneuver that would cause its base to overlap another ship's base, after moving your ship backward along the template until it no longer overlaps the other ship, you may discard this card to immediately perform an additional 2 [forward] Maneuver. If you do so, you do not lose your \"Perform Action\" step.\nThis Upgrade may only be purchased for a Xindi ship and no ship may be equipped with more than 1 \"Phase Deflector Pulse\" Upgrade.",
		unique: false,
		factions: [
			"xindi"
		]
	},
	{
		type: "talent",
		id: "E027",
		gameId: 1,
		set: [
			"blind_interceptor8"
		],
		name: "Pursuit",
		cost: 5,
		text: "When attacking a ship that you already have target locked, during the Roll Attack Dice step, you may discard this card to roll +2 attack dice.\n\nThis Upgrade may only be purchased for a ship with a Hull value of 3 or less.",
		unique: true,
		factions: [
			"bajoran"
		]
	},
	{
		type: "crew",
		id: "C027",
		gameId: 1,
		set: [
			"blind_interceptor8"
		],
		name: "Ro Laren",
		cost: 5,
		text: "When attacking, during the Roll Attack Dice step, you may discard this card to roll +2 attack dice for that attack. In addition, if this Upgrade is deployed to a Bajoran ship, during the Modify Attack Dice step, you may re-roll all of your [battlestations] results for that attack.\n\nThis Upgrade may only be purchased for a Bajoran or Federation ship.",
		unique: true,
		factions: [
			"bajoran"
		]
	},
	{
		type: "weapon",
		id: "W018",
		gameId: 1,
		set: [
			"blind_interceptor8"
		],
		name: "Phaser Strike",
		cost: 5,
		attack: 4,
		range: "1 - 3",
		text: "<b>ACTION:</b> During the Combat Phase, you may attack with this Weapon as if you had a Captain Skill of 10.\n\nATTACK: Disable this card to perform this attack. Range combat bonuses apply to this attack. This Upgrade may only be purchased for a ship with a Hull value of 3 or less and costs +5 SP for any ship other than a Bajoran Interceptor.",
		unique: false,
		factions: [
			"bajoran"
		]
	},
	{
		type: "tech",
		id: "T023",
		gameId: 1,
		set: [
			"blind_interceptor8"
		],
		name: "Navigational Sensors",
		cost: 5,
		text: "After performing a Come About [come-about] Maneuver, you may disable this card to immediately perform an additional maneuver.\n\nThis Upgrade may only be purchased for a Bajoran Interceptor and no ship may be equipped with more than 1 Navigational Sensors Upgrade.",
		unique: false,
		factions: [
			"bajoran"
		]
	},
	{
		type: "talent",
		id: "E026",
		gameId: 1,
		set: [
			"72002p"
		],
		name: "Flag Officer",
		cost: 4,
		text: "After you move, you may discard this card to target 1 friendly ship within Range 1-2 of your ship. The target ship may immediately perform 1 free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C026",
		gameId: 1,
		set: [
			"72002p"
		],
		name: "Vulcan Engineer",
		cost: 3,
		text: "<b>ACTION:</b> If there are no enemy ships within Range 1-3 of your ship, repair 1 of your Shield Tokens.\n\nYou do not pay a faction penalty when assigning this card to a Vulcan ship.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W017",
		gameId: 1,
		set: [
			"72002p"
		],
		name: "Dual Phaser Banks",
		cost: 3,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, you may disable this card to gain +1 attack die.\n\nThis Upgrade may only be purchased for a Federation ship and costs +3 SP for any ship other than a Constitution Class ship.\nNo ship may be equipped with more than 1 Dual Phaser Banks Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q003",
		gameId: 1,
		set: [
			"72002p"
		],
		name: "Astrogator",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to perform an additional non-red maneuver on your Maneuver Dial with a speed of 1 or 2.\n\nThis Upgrade may only be purchased for a Constitution Class ship and you may fill a [crew_text] or [weapon_text] slot on your Upgrade Bar with this Upgrade.\nNo ship may be equipped with more than 1 Astrogator Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E025",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Marauder",
		cost: 2,
		text: "After you move, you may disable this card to perform a [battlestations] Action as a free Action.\n\nThis Upgrade may only be purchased for a Ferengi ship with a Ferengi Captain.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E024",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Acquisition",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Steal 1 non-Borg [tech_text] or [weapon_text] Upgrade of your choice on the target ship, even if the Upgrade exceeds your ship's restrictions.\n\nThis Upgrade may only be purchased for a Ferengi ship with a Ferengi Captain.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "weapon",
		id: "W016",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Photon Torpedoes",
		cost: 5,
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and disable this card to perform this attack.\nYou may convert 1 of your [battlestations] results into a [crit] result.\n\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"ferengi"
		],
		attack: 5,
		range: "2 - 3",
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "weapon",
		id: "W015",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Missile Launchers",
		cost: 3,
		text: "<b>ATTACK: </b>Disable this card to perform this attack. Make 2 attacks against ship(s) in your forward firing arc. Roll separate dice for each of these attacks. Any [crit] results that would damage an opponent's Shields inflict critical damage to that ship's Hull instead.",
		unique: false,
		factions: [
			"ferengi"
		],
		attack: 2,
		range: "1 - 2",
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "crew",
		id: "C025",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Tactical Officer",
		cost: 4,
		text: "At the end of the Activation Phase, if you are in the forward firing arc of an enemy ship, you may discard this card to immediately perform a 3 [forward] or 4 [forward] Maneuver. You cannot attack on the round you use this ability.\n\nNo ship may be equipped with more than 1 Tactical Officer Upgrade.",
		unique: false,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T022",
		gameId: 1,
		set: [
			"71806",
			"OP1Prize"
		],
		name: "EM Pulse",
		cost: 4,
		text: "<b>ACTION:</b> Disable this card to target a ship at Range 1-2 that is not in your forward firing arc. Place an Auxiliary Power Token beside the target ship. The target ship rolls 2 less attack dice this round.",
		unique: false,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T021",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Maximum Shields",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to place 2 additional Shield Tokens beside your ship. When taking damage this round, remove these Tokens first. You cannot attack this round. If either or both of these Tokens are unused, discard them during the End Phase.",
		unique: false,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T020",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Ferengi Probe",
		cost: 4,
		text: "If there is a [scan] Token beside your ship, you may disable this card to double your Range Combat Bonuses.\n\nThis Upgrade may only be purchased for a Ferengi ship and no ship may be equipped with more than 1 Ferengi Probe Upgrade",
		unique: false,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E023",
		gameId: 1,
		set: [
			"blind_lakota"
		],
		name: "Defy Orders",
		cost: 4,
		text: "At the end of the Activation Phase, after all ships have moved, if you have an enemy ship in your forward firing arc, you may discard this card to immediately perform an additional green or white maneuver. You cannot attack during the round you use this ability.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C024",
		gameId: 1,
		set: [
			"blind_lakota"
		],
		name: "Tuvok",
		cost: 3,
		text: "At any time, you may discard this card to perform a [scan] Action as a free Action.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T019",
		gameId: 1,
		set: [
			"blind_lakota"
		],
		name: "Micro Power Relays",
		cost: 3,
		text: "<b>ACTION:</b> Repair 1 non-critical damage to your Hull.\n\nOR\n\n<b>ACTION:</b> Flip over all critical damage cards assigned to your ship.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W014",
		gameId: 1,
		set: [
			"blind_lakota"
		],
		name: "Upgraded Phasers",
		cost: 3,
		text: "When attacking with your Primary Weapon, gain +1 attack die.\nOnce per round, if you hit an Attack Squadron with your Primary Weapon you may immediately make a second attack against that same target.\nThis Upgrade costs +5 SP for any non-Federation ship and may only be deployed to a ship with a Primary Weapon value of 3 or less. No ship may be equipped with more than 1 \"Upgraded Phasers\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E022",
		gameId: 1,
		set: [
			"blind_nistrim_culluh"
		],
		name: "Ambition",
		cost: 5,
		text: "When attacking a ship that has more Upgrades assigned to it, you may discard this card to either gain +2 attack dice during the Roll Attack Dice step, or re-roll any number of your attack dice during the Modify Attack Dice step.\n\nThis Upgrade may only be purchased for a Kazon Captain assigned to a Kazon ship.",
		unique: true,
		factions: [
			"kazon"
		]
	},
	{
		type: "crew",
		id: "C023",
		gameId: 1,
		set: [
			"blind_nistrim_culluh"
		],
		name: "Rulat",
		cost: 3,
		text: "When attacking or defending, you may discard this card to re-roll any number of your dice.",
		unique: true,
		factions: [
			"kazon"
		]
	},
	{
		type: "tech",
		id: "T018",
		gameId: 1,
		set: [
			"blind_nistrim_culluh"
		],
		name: "Stolen Technology",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to perform the Action listed on a non-Borg [tech_text] Upgrade deployed to an opposing ship within Range 1-3 of your ship.\n\n\nThis Upgrade may only be purchased for a Kazon ship.",
		unique: false,
		factions: [
			"kazon"
		]
	},
	{
		type: "talent",
		id: "E021",
		gameId: 1,
		set: [
			"blind_nunks_marauder"
		],
		name: "Kidnap",
		cost: 5,
		text: "<b>ACTION:</b> Disable all of your remaining Shields and target a ship at Range 1-2 that is not cloaked and has no Active Shields. Discard this card to steal 1 [crew_text] Upgrade on the target ship. If the stolen Upgrade exceeds your ship's restrictions, discard that Upgrade instead of stealing it.\n\nThis Upgrade may only be purchased for a Ferengi Captain assigned to a Ferengi ship.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C022",
		gameId: 1,
		set: [
			"blind_nunks_marauder"
		],
		name: "Omag",
		cost: 5,
		text: "Between any of the Phases, you may discard this card to remove a Disabled Upgrade Token from 1 of your [weapon_text] Upgrades.\nOR\nWhen attacking, during the Declare Target step, you may discard this card to target a ship at Range 1-3. Choose 1 non-Borg [weapon_text] Upgrade on the target ship with a printed cost of 4 or less and disable it to perform its attack as if it were deployed to your ship.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "weapon",
		id: "W013",
		gameId: 1,
		set: [
			"blind_nunks_marauder"
		],
		name: "Weapon Ports",
		cost: 4,
		attack: 4,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Disable this card to perform this attack. While this card is disabled, you roll 1 less defense die.\nIf you hit an Attack Squadron with this attack, during the Deal Damage step, discard 1 Attack Squadron Token for each uncancelled [hit] or [crit] result (max 3).\nYou may only fire this weapon from your forward firing arc.",
		unique: false,
		factions: [
			"ferengi"
		]
	},
	{
		type: "tech",
		id: "T017",
		gameId: 1,
		set: [
			"blind_nunks_marauder"
		],
		name: "Geodesic Pulse",
		cost: 5,
		text: "<b>ACTION:</b> Immediately perform an additional maneuver with a speed of 2 or less. You do not lose your Perform Action step if your ship's base overlaps another ship's base with this maneuver. In addition, you do not suffer any damage from Obstacles. You cannot attack this round.",
		unique: false,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C021",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Nell Chilton",
		cost: 3,
		text: "When defending, during the Deal Damage step, after your ship suffers at least 1 damage to its Hull, you may discard this card to immediately perform an additional Green Maneuver.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "crew",
		id: "C020",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Alyssa Ogawa",
		cost: 2,
		text: "<b>ACTION:</b> Remove 1 Disabled Upgrade Token from 1 of your [tech_text] or [crew_text] Upgrades and then perform a [scan] or [evade] Action as a free Action.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T016",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Impulse Drive",
		cost: 3,
		text: "During the Activation Phase, if you reveal a 1, 2 or 3 Maneuver (Straight or Bank), before you move you may disable this card. If you do so, and the maneuver is a white maneuver, treat it as a green maneuver. If the maneuver is a red maneuver, treat it as a white maneuver.",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T015",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Inverse Tachyon Pulse",
		cost: 2,
		text: "When you initiate an attack while there is a [scan] token beside your ship, you may disable this card. If you do so, the defending ship rolls -1 defense die against that attack.\n\nNo ship may be equipped with more than 1 Inverse Tachyon Pulse Upgrade.",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E020",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Yellow Alert",
		cost: 2,
		text: "At the start of the Combat Phase, before any attacks are made, you may discard this card. If you do so, place either 1 [evade] or 1 [battlestations] Token beside your ship (even if there is already one there).",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E019",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Starfleet Intelligence",
		cost: 3,
		text: "When defending, during the Modify Defense Dice step, you may discard this card to re-roll any number of your defense dice.\nOR\nWhen attacking, during the Modify Attack Dice step, you may discard this card to re-roll any number of your attack dice.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E018",
		gameId: 1,
		set: [
			"72011"
		],
		name: "Prefix Code",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1-2 of your ship. Disable up to 2 Shield Tokens on the target ship. Place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C019",
		gameId: 1,
		set: [
			"72011"
		],
		name: "Elizabeth Lense",
		cost: 1,
		text: "At any time, you may discard this card to remove 1 Disabled Upgrade Token from one of your [crew_text] or [tech_text] Upgrades and then place 2 Time Tokens on that Upgrade.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C018",
		gameId: 1,
		set: [
			"72011"
		],
		name: "Terry",
		cost: 4,
		text: "<b>ACTION:</b> Disable this card and 2 of your Active Shields to repair 1 damage to your ship's Hull.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "tech",
		id: "T014",
		gameId: 1,
		set: [
			"72011"
		],
		name: "High Energy Sensor Sweep",
		cost: 5,
		text: "After you move, you may disable 1 Active Shield to perform a free [scan] Action.\n\nNo ship may be equipped with more than 1 High Energy Sensor Sweep Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W012",
		gameId: 1,
		set: [
			"72011"
		],
		name: "Arsenal",
		cost: 4,
		text: "Add 2 [weapon_text] Upgrades to your Upgrade Bar.\n\nWhen placing Time Tokens on one of your other [weapon_text] Upgrades, you may place 1 of those tokens on this card.\n\nNo ship may be equipped with more than 1 \"Arsenal\" Upgrade.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q002",
		gameId: 1,
		set: [
			"72011"
		],
		name: "Aft Torpedo Launcher",
		cost: 3,
		text: "You may fill one of your [crew_text], [tech_text] or [weapon_text] Upgrade slots with this card.\nWhen attacking with a Photon Torpedoes Upgrade, you may disable this card to target a ship that is not in your forward firing arc.\nThis Upgrade may only be purchased for a ship with a Hull of 4 or greater that does not have a rear firing arc and costs +5 SP if purchased for any non-Federation ship.",
		unique: false,
		hullConstraint: "4+",
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C017",
		gameId: 1,
		set: [
			"72000b"
		],
		name: "Quinn",
		cost: 2,
		text: "When your ship is defending, during the Compare Results step, you may discard this card to cancel 1 [hit] or [crit] result.",
		unique: true,
		factions: [
			"q-continuum"
		],
		factionPenalty: 0,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E017",
		gameId: 1,
		set: [
			"72000b"
		],
		name: "Think Fast",
		cost: 1,
		text: "During the Roll Attack Dice step, when attacking with a Primary Weapon, you may discard this card and disable 1 of your other Upgrades to gain +1 attack die for that attack.\nOR\nDuring the Roll Defense Dice step, you may discard this card and disable 1 of your other Upgrades to roll +1 defense die.",
		unique: true,
		factions: [
			"q-continuum"
		],
		factionPenalty: 0,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "question",
		id: "Q001",
		gameId: 1,
		set: [
			"72000b"
		],
		name: "Q2",
		cost: 5,
		text: "This Upgrade counts as either a [crew_text], an [talent_text], a [tech_text], or a [weapon_text] Upgrade (your choice).\n\nWhenever a friendly ship within Range 1 of your ship receives damage, you may discard this card to transfer all of that damage to your ship.",
		unique: true,
		factions: [
			"q-continuum"
		],
		factionPenalty: 0,
		countsAsUpgrade: true
	},
	{
		type: "talent",
		id: "E016",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Grand Nagus",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target every friendly Ferengi ship within Range 1-3. Each target ship may immediately perform an additional green maneuver.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "talent",
		id: "E015",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Smugglers",
		cost: 5,
		text: "<b>ACTION:</b> Target a ship at Range 1-3. Discard this card to steal 1 [tech_text] or [weapon_text] Upgrade from the target ship, even if it exceeds your ship's restrictions. If the Smugglers Upgrade is assigned to a Ferengi Shuttle, the stolen Upgrade is flipped face down and cannot be used by your ship. The shuttle may exchange the stolen Upgrade with a docking ship. The docking ship may then flip the stolen Upgrade face up and use it. This Upgrade may only be purchased for a Ferengi Captain assigned to a Ferengi ship.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C016",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Odo",
		cost: 5,
		text: "During the Planning Phase, you may target a ship within Range 1-3 and choose 1 [crew_text] Upgrade on the target ship. If you do so, treat this card as an exact copy of the chosen Upgrade until the end of the End Phase in which you use this ability. If the chosen Upgrade's Action or ability requires it to be disabled or discarded, you must disable or discard this card to use it.",
		unique: true,
		factions: [
			"independent"
		]
	},
	{
		type: "crew",
		id: "C015",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Nog",
		cost: 3,
		text: "When defending, during the Roll Attack Dice step, you may discard this card to force the attacking ship to roll -2 attack dice for that attack.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "crew",
		id: "C014",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Rom",
		cost: 3,
		text: "<b>ACTION:</b> Repair 1 Shield Token. If this card is assigned to a Ferengi ship, you may repair up to 2 Shield Tokens instead of 1.",
		unique: true,
		factions: [
			"ferengi"
		]
	},
	{
		type: "tech",
		id: "T013",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Cargo Hold",
		cost: 1,
		text: "Add 2 Upgrade slots ([crew_text] or [tech_text]) to your Upgrade Bar. These Upgrades cannot have a cost greater than 4 SP.\n\nThis Upgrade may only be purchased for a Ferengi ship and no ship may be equipped with more than 1 \"Cargo Hold\" Upgrade.",
		unique: false,
		factions: [
			"ferengi"
		]
	},
	{
		type: "tech",
		id: "T012",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Inversion Wave",
		cost: 4,
		text: "Instead of making a normal move, you may discard this card to place your ship anywhere in the play area within Range 1-3 of your current position. Remove all Tokens (except Critical Hit Tokens) from beside your ship and place an Auxiliary Power Token beside your ship. You cannot attack on the round you use this ability.\nNo ship may be equipped with more than 1 \"Inversion Wave\" Upgrade.",
		unique: false,
		factions: [
			"ferengi"
		]
	},
	{
		type: "talent",
		id: "E013",
		gameId: 1,
		set: [
			"72015"
		],
		name: "The Day is Ours!",
		cost: 4,
		text: "During the Roll Attack Dice step, you may discard this card to add 1 [crit] result to your roll.\n\nThis card may only be purchased for a Klingon Captain assigned to a Klingon ship.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E012",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Alert Status One",
		cost: 3,
		text: "<b>ACTION:</b> Discard this card to place a [battlestations] Token beside your ship. You cannot perform a [battlestations] Action as a free Action this round.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E011",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Supreme Commander",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target 1 friendly ship within Range 1-3. The target ship immediately performs a free Action from its Action Bar. If the target ship is a Klingon ship, it may perform any Action as a free Action.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C013",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Worf",
		cost: 2,
		text: "Increase your Captain's Skill by +1 (+3 for a Klingon Captain). This ability cannot be used on this card.\n\nIf your Captain is disabled, discarded, or affected by a critical damage card, treat this card as your Captain Card with a Skill of 5. If your Captain becomes non-disabled or unaffected by the critical damage card, that Captain Card is restored.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C012",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Jadzia Dax",
		cost: 5,
		text: "You do not pay a faction penalty when assigning this card to a Klingon ship.\n\nYou may disable this card and spend your [scan] Token to convert 1 of your [battlestations] results into a [hit] or an [evade] result.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "crew",
		id: "C011",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Leskit",
		cost: 3,
		text: "After you reveal a red maneuver, before you move, you may discard this card to treat the maneuver as a green maneuver. If your ship is cloaked when you do this, you may immediately perform a [sensor-echo] Action as a free Action.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C010",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Tavana",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card to repair 1 Shield Token. In addition, if your ship is cloaked, you may repair 1 damage to your Hull. You roll -2 attack dice on all of your attacks this round.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "crew",
		id: "C009",
		gameId: 1,
		set: [
			"72015"
		],
		name: "Kornan",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to acquire a target lock on a ship within Range 1-3 of your ship and then perform an Action from your Action Bar (not [target-lock]) as a free Action.",
		unique: true,
		factions: [
			"klingon"
		]
	},
	{
		type: "talent",
		id: "E010",
		gameId: 1,
		set: [
			"blind_seleya"
		],
		name: "V'Tosh Ka'Tur",
		cost: 5,
		text: "When attacking, during the Roll Attack Dice step, you may discard this card and up to 3 of your other Upgrades and/or Active Shields. Gain +1 attack die for that attack for each Upgrade or Shield you discarded with this ability.\n\nThis Upgrade may only be purchased for a Vulcan Captain assigned to a Vulcan ship.\n<b>( ERRATA )</b>",
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "crew",
		id: "C008",
		gameId: 1,
		set: [
			"blind_seleya"
		],
		name: "Solin",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to repair up to 2 Shield Tokens.\n\nThis Upgrade costs +4 SP if purchased for any non-Vulcan ship.",
		unique: true,
		factions: [
			"vulcan"
		]
	},
	{
		type: "weapon",
		id: "W011",
		gameId: 1,
		set: [
			"blind_seleya"
		],
		name: "Aft Particle Beam",
		cost: 3,
		attack: 4,
		range: "1 - 3",
		text: "<b>ATTACK: </b>Disable this card to perform this attack.\n\nYou may only fire this weapon from your rear firing arc.",
		unique: false,
		factions: [
			"vulcan"
		]
	},
	{
		type: "tech",
		id: "T011",
		gameId: 1,
		set: [
			"blind_seleya"
		],
		name: "Power Distribution Net",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card and up to 3 of your Active Shields to immediately perform a green or white maneuver with a speed equal to the number of Shields you disabled with this Action.\n\nThis upgrade may only be purchased for a Vulcan ship and no ship may be equipped with more than 1 \"Power Distribution Net\" Upgrade.",
		unique: false,
		factions: [
			"vulcan"
		]
	},
	{
		type: "talent",
		id: "E009",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Secret Research",
		cost: 5,
		text: "Add the [scan] Action to your Action Bar. If this card is discarded, you no longer have the [scan] Action on your Action Bar.\n\nDuring the Activation Phase, you may discard this card to perform a [scan] Action as a free Action.\n\nThis card costs +5 SP if purchased for any ship other than a Romulan Science Vessel.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T010",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Warp Core Ejection System",
		cost: 4,
		text: "<b>ACTION:</b> Discard this card to repair 1 damage to your Hull and flip any \"Warp Core Breach\" critical damage cards assigned to your ship face down. For the rest of the game, you cannot perform any maneuvers with a speed greater than 1 and you cannot receive a \"Warp Core Breach\" critical damage card. If you do, immediately flip the card face down and treat it as normal damage.  No ship may be equipped with more than one \"Warp Core Ejection System\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T009",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Test Cylinder",
		cost: 3,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at any Range. Disable this card and 1 [crew_text] Upgrade of your choice on the target ship.\n\nThis Upgrade may only be purchased for a Romulan Science Vessel.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T008",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Temporal Displacement",
		cost: 5,
		text: "When defending, during the Compare Results step, you may discard this card to cancel all of the attacking ship's [hit] and [crit] results. All cards that were used during the attack are returned to the state that they were in prior to the attack. The attacking ship cannot perform any more attacks during the round this ability is used. This card may only be purchased for a Romulan Science Vessel.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T007",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Advanced Scanning",
		cost: 5,
		text: "Add the [scan] Action to your Action Bar. If this card is discarded, you no longer have the [scan] Action on your Action Bar.\nWhenever your perform the [scan] Action, you may place 1 additional [scan] Token beside your ship. If you do so, place an Auxiliary Power Token beside your ship.\n\nThis card costs +5 SP for any ship other than a Romulan Science Vessel.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T006",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Signal Amplifier",
		cost: 5,
		text: "You may discard this card and spend 1 [scan] Token to add +2 attack dice or +2 defense dice.\n\n\nThis Upgrade costs +5 SP for any ship other than a Romulan Science Vessel and no ship may be equipped with more than 1 \"Signal Amplifier\" Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "tech",
		id: "T005",
		gameId: 1,
		set: [
			"72016"
		],
		name: "Graviton Field Generator",
		cost: 5,
		text: "<b>ACTION:</b> Disable this card and up to 2 of your Active Shields to immediately perform an additional [straight] maneuver with a speed equal to the number of shields you disabled with this Action.\nOR\n<b>ACTION:</b> If you performed a green maneuver this round, discard this card to place 2 Shield Tokens beside your ship. When suffering damage this round, remove those Shield Tokens first.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "talent",
		id: "E008",
		gameId: 1,
		set: [
			"72000p"
		],
		name: "Deception",
		cost: 5,
		text: "At the start of the Combat Phase, before any ships have attacked, if there is not a [battlestations] Token beside your ship, you may discard this card to place 1 [battlestations] Token beside your ship. In addition, if your ship is Cloaked, you may place 1 [evade] Token beside your ship (even if there is one there already).",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "crew",
		id: "C007",
		gameId: 1,
		set: [
			"72000p"
		],
		name: "Taibak",
		cost: 4,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card to steal 1 [crew_text] Upgrade on the target ship, even if it exceeds your ship's restrictions.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T004",
		gameId: 1,
		set: [
			"72000p"
		],
		name: "Long Range Scanners",
		cost: 3,
		text: "<b>ACTION:</b> Perform a [scan] Action and then place an Auxiliary Power Token beside your ship.\n\nDuring the End Phase, if there is a [scan] Token beside your ship, you may discard this card to leave that Token beside your ship instead of removing it.\n\nThis Upgrade costs +3 SP for any ship other than a D'Deridex class ship.",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "weapon",
		id: "W010",
		gameId: 1,
		set: [
			"72000p"
		],
		name: "Additional Phaser Array",
		cost: 2,
		text: "When attacking with your Primary Weapon at a ship in your forward firing arc, gain +1 attack die.\n\nThis Upgrade may only be purchased for a D'Deridex class ship and no ship may be equipped with more than 1 Additional Phaser Array Upgrade.",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E006",
		gameId: 1,
		set: [
			"72008"
		],
		name: "Persistence",
		cost: 5,
		text: "When you attack with your Primary Weapon, during the Roll Attack Dice step, if you roll a [hit] or [crit] result on each one of your dice, you may discard this card to roll +2 additional attack dice (+4 against Borg ships). Add all [hit] and [crit] results from the additional dice to your total for that attack. Any Blank or [battlestations] results from the additional dice are not added.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E005",
		gameId: 1,
		set: [
			"72008"
		],
		name: "Federation Task Force",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target up to 2 friendly ships within Range 1-2. Your ship and the target ships may immediately perform a  [target-lock] Action as a free Action, if possible.\n\nThis Upgrade may only be purchased for a Federation ship with a Federation Captain.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "talent",
		id: "E004",
		gameId: 1,
		set: [
			"72008"
		],
		name: "Intercept",
		cost: 5,
		text: "If a friendly ship within Range 1 of your ship is attacked, and your ship is also in the attacking ship's firing arc, you may discard this card to force the attacking ship to perform its attack against your ship instead of the target ship. After the attack is complete, you may perform an additional green maneuver.",
		unique: true,
		factions: [
			"federation"
		]
	},
	{
		type: "weapon",
		id: "W008",
		gameId: 1,
		set: [
			"72008",
			"72011"
		],
		name: "Quantum Torpedoes",
		cost: 6,
		attack: 5,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\nIf the target ship is hit, add 1 [hit] result to your total damage.\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"federation"
		]
	},
	{
		type: "question",
		id: "Q027",
		gameId: 1,
		set: [
			"72008"
		],
		name: "Rapid Reload",
		cost: 2,
		text: "This Upgrade counts as a [crew_text], [tech_text] or [weapon_text] Upgrade (your choice).\n\nWhen you are instructed to place Time Tokens on one of your [weapon_text] Upgrades, you may disable this card to place only 1 Time Token instead of the required amount.",
		unique: false,
		factions: [
			"federation"
		],
		countsAsUpgrade: true
	},
	{
		type: "talent",
		id: "E003",
		gameId: 1,
		set: [
			"blind_tohkaht"
		],
		name: "Covert Mission",
		cost: 5,
		text: "<b>ACTION:</b> If your ship is not Cloaked, disable all of your remaining Shields and target a ship at Range 1-2 that is not Cloaked and has no Active Shields. Discard this card to steal 1 [weapon_text] Upgrade on that ship with a cost of 5 or less even if it exceeds your ship's restrictions.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "crew",
		id: "C005",
		gameId: 1,
		set: [
			"blind_tohkaht"
		],
		name: "Hon-Tihl",
		cost: 5,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step, you may discard this card to gain +2 attack dice for that attack.\nIf you targeted an Attack Squadron with that attack, after resolving the attack, you may immediately make a second attack against the same Attack Squadron using only 2 attack dice; the number of dice for the second attack cannot be increased in any way.\nYou cannot roll any defense dice during the round you use this ability.",
		unique: true,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "weapon",
		id: "W006",
		gameId: 1,
		set: [
			"blind_tohkaht"
		],
		name: "Thalmerite Explosive",
		cost: 5,
		attack: 6,
		range: "1 - 2",
		text: "<b>ATTACK: </b>Discard this card to perform this attack. If the defending ship is not cloaked and has no Active Shields and you have at least 1 uncancelled [crit] result, draw 2 Damage Cards (instead of 1) and choose which one to place beside the enemy's Ship Card; discard the unused Damage Cards.\nIf this attack is fired at Range 1 and hits, your ship suffers 1 damage.",
		unique: false,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "tech",
		id: "T002",
		gameId: 1,
		set: [
			"blind_tohkaht"
		],
		name: "Reactor Core",
		cost: 2,
		text: "During the Activation Phase, after you reveal your maneuver, before you move, you may disable this card to increase or decrease your speed by 1. Your new maneuver must be one that is on your maneuver dial and it is treated as a red maneuver.\n\nNo ship may be equipped with more than 1 \"Reactor Core\" Upgrade.",
		unique: false,
		factions: [
			"mirror-universe"
		]
	},
	{
		type: "talent",
		id: "E002",
		gameId: 1,
		set: [
			"72009"
		],
		name: "Devotion to Duty",
		cost: 4,
		text: "<b>ACTION:</b> When attacking with your Primary Weapon this round, during the Roll Attack Dice step, you may discard this card to gain +1 attack die for every damage card assigned to your ship (max +2).\n\nThis Upgrade may only be purchased for a Klingon Captain assigned to a Klingon ship.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "crew",
		id: "C004",
		gameId: 1,
		set: [
			"72009"
		],
		name: "Tactical Officer",
		cost: 2,
		text: "If your ship is not Cloaked, during the Modify Attack Dice step, you may disable this card to re-roll all of your blank results once.\n\nThis Upgrade costs +3 SP for any non-Klingon ship and no ship may be equipped with more than 1 Tactical Officer Upgrade.",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "crew",
		id: "C003",
		gameId: 1,
		set: [
			"72009"
		],
		name: "K'Ehleyr",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 1. Your ship cannot attack the target ship and the target ship cannot attack your ship this round.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "weapon",
		id: "W005",
		gameId: 1,
		set: [
			"72009"
		],
		name: "Concussive Charges",
		cost: 4,
		attack: 4,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nFor every uncancelled [hit] or [crit] result, the target ship loses 1 token of your choice that has been placed beside it in the play area.\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "weapon",
		id: "W004",
		gameId: 1,
		set: [
			"72009",
			"72015",
			"72232"
		],
		name: "Photon Torpedoes",
		cost: 5,
		attack: 5,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nYou may convert 1 of your [battlestations] results into 1 [crit] result.\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "tech",
		id: "T001",
		gameId: 1,
		set: [
			"72009"
		],
		name: "Cryogenic Stasis",
		cost: 5,
		text: "At the start of the game, place 2 non-Borg [crew_text] Upgrades with a cost of 5 or less face down beneath this card.\n<b>ACTION:</b> Flip one of the Upgrades that is beneath this card face up (your choice) and deploy it to your ship, even if it exceeds your ship's restrictions. Then place 2 Time Tokens on that Upgrade.\nDiscard this card when there are no more Upgrades beneath it.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "talent",
		id: "E001",
		gameId: 1,
		set: [
			"72010"
		],
		name: "Coordinated Attack",
		cost: 5,
		text: "If your ship has not already attacked this round, you may discard this card to perform an attack with your Primary Weapon at -1 attack dice immediately after a friendly ship attacks, regardless of initiative order.\n\nThis Upgrade may only be purchased for a Romulan Captain on a Romulan ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C002",
		gameId: 1,
		set: [
			"72010"
		],
		name: "Bridge Officer",
		cost: 3,
		text: "When you are instructed to place Time Tokens on one of your [weapon_text] Upgrades, place 1 less Time Token than required.\n\nThis Upgrade costs +2 SP for any non-Romulan ship and no ship may be equipped with more than 1 Bridge Officer Upgrade.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "crew",
		id: "C001",
		gameId: 1,
		set: [
			"72010"
		],
		name: "Tal'aura",
		cost: 5,
		text: "<b>ACTION:</b> Discard this card to target a ship at Range 3. Discard 1 [crew_text] Upgrade of your choice on the target ship.",
		unique: true,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W003",
		gameId: 1,
		set: [
			"72010"
		],
		name: "Photon Torpedoes",
		cost: 5,
		attack: 5,
		range: "2 - 3",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nYou may convert 1 of your [battlestations] results into 1 [crit] result.\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W002",
		gameId: 1,
		set: [
			"72010"
		],
		name: "Plasma Torpedoes",
		cost: 5,
		attack: 5,
		range: "1 - 2",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.\n\nYou may re-roll all of your blank results one time.\n\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W009",
		gameId: 1,
		set: [
			"72242"
		],
		name: "Plasma Torpedoes",
		cost: 3,
		attack: 4,
		range: "1 - 2",
		text: "<b>ATTACK: (Target Lock)</b> Spend your target lock and place 3 Time Tokens on this card to perform this attack.  \n\nYou may re-roll all of your blank results one time.  \n\nYou may fire this weapon from your forward or rear firing arcs.",
		unique: false,
		factions: [
			"romulan"
		]
	},
	{
		type: "weapon",
		id: "W001",
		gameId: 1,
		set: [
			"72010"
		],
		name: "Flanking Attack",
		cost: 6,
		attack: 6,
		range: "2 - 3",
		text: "<b>ATTACK: </b>Discard this card to perform this attack.\nThe defending ship rolls -1 defense die against this attack.\nYou may only fire this weapon from your forward firing arc and you may only perform this attack if your ship is not within the forward or rear firing arc of the defending ship.",
		unique: false,
		factions: [
			"romulan"
		]
	}
];
