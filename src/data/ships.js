module.exports = [
	{
		type: "ship",
		id: "S377",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Da Vinci",
		class: "Saber Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 15,
		text: "<b>COMBAT PHASE:</b> If there is a [scan] Token beside this ship: Target an opposing ship within Range 1-2. \n\n Place 1 [time] Token on the target's ship card. You may spend that [scan] Token beside this ship and disable 1 [weapon_text] Upgrade equipped to the target ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S375",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Saber",
		class: "Saber Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 16,
		text: "This ship and each other friendly ship within Range 1 gain the effect listed based on the number of friendly ships within Range 1 of this ship: <b>WHEN ATTACKING OR DEFENDING:</b> \n\n <b>1</b> - Re-roll 1 [blank] . \n <b>2</b> - Convert 1 [blank] into 1 [battlestations] . \n <b>3+</b> - Convert 1 [blank] into either 1 [hit] or 1 [evade] .",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S372",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Musashi",
		class: "Sovereign Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 5,
		cost: 29,
		text: "<b>WHEN A FRIENDLY <img src='img/text/faction-federation.png' width='20' height='20'> SHIP WITHIN RANGE 1 IS ATTACKING:</b>\n That friendly ship may roll +1 attack die. If that friendly ship is a <img src='img/text/fed-sovereign.png' width='18' height='18';> it may also add 1 [hit]. If the defending ship is a <img src='img/text/faction-borg.png' width='20' height='20';> ship, that friendly ship may also convert either 1 [blank] or [battlestations] into 1 [crit].",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S370",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Sovereign",
		class: "Sovereign Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 5,
		cost: 29,
		text: "If equipped with an Admiral - You may perform the equipped card's Fleet Action as a Free Action this round. \n<hr> If equipped with an [ambassador_text] - Once per game. <b>PLANNING PHASE:</b> You may cancel your active Negotiations. Activate your Negotiation Effect targetting a different opposing ship. \n<hr> If equipped with the 'Federation Prototype' [hook] - <b>WHEN DEFENDING:</b> Roll +1 defense die.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S368",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Geronimo",
		class: "Akira Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 23,
		text: "<b>WHEN DEFENDING:</b>\n You may re-roll 1 [blank]. If the attacking ship is a Capital Ship, you may also add an [evade]. \n<hr> <b>WHEN ATTACKING A <img src='img/text/faction-federation.png' width='20' height='20'> SHIP:</b>\nRoll -2 attack dice.\nPlace 1 [aux] Token beside the defending ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S366",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Akira",
		class: "Akira Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 23,
		text: "<b>COMBAT PHASE:</b> \n You may move your Red [target-lock] Token to an opposing ship within Range 1-3 even if that ship is cloaked. \n<hr> <b>WHEN ATTACKING: DEAL DAMAGE STEP:</b> \n You may acquire a [target-lock] on the defending ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S364",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Cerberus",
		class: "Prometheus Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 27,
		text: "<b>WHEN ATTACKING WITH A <img src='img/text/faction-federation.png' width='20' height='20';'> [weapon_text] UPGRADE:</b> \n\n Convert 1 [battlestations] into 1 [hit]. If the defending ship is a <img src='img/text/faction-dominion.png' width='20' height='20';'> ship, convert 1 [battlestations] into 1 [crit] instead.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S363",
		gameId: 1,
		set: [
			"75013"
		],
		name: "Federation Class",
		class: "Prometheus Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S362",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Prometheus",
		class: "Prometheus Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 28,
		text: "If this ship is equipped with the 'Federation Prototype' [hook], <img src='img/text/fed-prometheus.png' width='18' height='18'> Restricted Upgrades equipped to this ship cost -2 SP and cannot be affected by opposing Upgrades.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S360",
		gameId: 1,
		set: [
			"75012"
		],
		name: "I.R.W. Valdore",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 27,
		text: "<b>WHEN ATTACKING:</b> If this ship performed a Green Maneuver this game round. \n\n Roll +1 attack die.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S359",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Romulan Starship",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 2,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S358",
		gameId: 1,
		set: [
			"75012"
		],
		name: "I.R.W. Soterus",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 27,
		text: "<b>REVEAL DIAL STEP:</b> If this ship reveals a 3 Speed Maneuver. \n\n You may change your Maneuver to any Maneuver of the same speed on this ship's dial.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S357",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Romulan Starship",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 1,
		cost: 9,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S356",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Tal Shair Scout",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 2,
		cost: 12,
		text: "<b>COMBAT PHASE:</b> Target an opposing ship and a friendly ship each within Range 1-2. \n You may discard a [battlestations], [evade], or [scan] Token beside the target opposing ship, then place a Token of the same type beside the target friendly ship.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S354",
		gameId: 1,
		set: [
			"75012"
		],
		name: "I.R.W. Belak",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 27,
		text: "<b>WHEN DEFENDING</b> \nYou may re-roll 1 of your defense dice. If this ship is cloaked, you may re-roll any of your defense dice.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S353",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Romulan Starship",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 25,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S352",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Twilight's Wrath",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 28,
		text: "<b>AFTER AN OPPOSING SHIP WITHIN RANGE 1-3 PERFORMS AN ACTION:</b>\nIf this ship is cloaked.\n You may perform an additional [sensor-echo] Action as a Free Action this round or place a [battlestations] Token beside this ship. If that ship is a <img src='img/text/faction-dominion.png' width='18' height='18'> ship, you may do both.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S351",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Reman Starship",
		class: "Reman Warbird",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 2,
		hull: 7,
		shields: 3,
		cost: 32,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S350",
		gameId: 1,
		set: [
			"75012"
		],
		name: "Scimitar",
		class: "Reman Warbird",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 2,
		hull: 7,
		shields: 4,
		cost: 34,
		text: "<b>WHEN ATTACKING</b>: If this ship is cloaked: Place an [aux] Token beside this ship. \n\nDo not flip your [cloak] Token to its red side.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S340",
		gameId: 1,
		set: [
			"75011"
		],
		name: "U.S.S. Tian An Men",
		class: "Miranda Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		text: "<b>ACTIVATION PHASE:</b> Target a friendly ship within Range 1-2 that has an [aux] Token beside it and place 2 [time] Tokens on a [crew_text] Upgrade equipped to this ship.\nThe target ship does not skip its Perform Action Step this game round.",
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 14,
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S339",
		gameId: 1,
		set: [
			"75011"
		],
		name: "U.S.S. Odyssey",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		text: "<b>FREE ACTION:</b> Place an [aux] Token beside this ship and target all friendly <img src='https://i.imgur.com/OwcsZi0.png' width='20' height='20'> ships with a Hull Value of 3 or less within Range 1-2.\nThe target ships roll +2 defense dice and may convert 1 [blank] into 1 [battlestations] the next time they defend this game round.",
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S342",
		gameId: 1,
		set: [
			"75011"
		],
		name: "U.S.S. Spector",
		class: "Akira Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		text: "<img src='../img/faction_fed.png' width='20' height='20'> [weapon_text] Upgrades equipped to this ship cost -1 SP.\n<b>WHEN ATTACKING WITH A PHOTON TORPEDOS UPGRADE, DURING THE MODIFY ATTACK DICE STEP:</b>\nDestroy 1 Active Shield on the defending ship.",
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 24,
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S348",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Klingon Starship",
		class: "Negh'var Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 2,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S341",
		gameId: 1,
		set: [
			"75011"
		],
		name: "Federation Starship",
		class: "Akira Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 2+).",
		alliance: true,
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 2,
		cost: 21,
		unique: false,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S336",
		gameId: 1,
		set: [
			"75010"
		],
		name: "I.K.S. K'Tanco",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 21,
		text: "You may equip a <img src='https://i.imgur.com/2lM4cv0.png' width='20' height='20'> [tech_text] Upgrade with a printed cost of 4 SP or less to this ship for free, even if it exceeds this ship's retrictions.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S347",
		gameId: 1,
		set: [
			"75010"
		],
		name: "I.K.S. Kos'Karii",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 16,
		text: "<b>WHEN ATTACKING A SHIP WITH A HULL OF 4 OR GREATER:</b> Steal a [scan] Token, a [battlestations] Token, or an [evade] Token from beside the defending ship and place it beside this ship.\n<b>WHEN ATTACKING A <img src='https://i.imgur.com/2lM4cv0.png' width='20' height='20'> SHIP OR A SHIP WITH A <img src='https://i.imgur.com/2lM4cv0.png' width='20' height='20'> CAPTAIN EQUIPPED TO IT:</b> Add 1 [hit]. ",
		unique: true,
		factions: [
			"klingon",
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S346",
		gameId: 1,
		set: [
			"75010"
		],
		name: "Klingon/Independent Starship",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"klingon",
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S345",
		gameId: 1,
		set: [
			"75010"
		],
		name: "I.K.S. Devwl",
		class: "Negh'var Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 3,
		cost: 28,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked, disable a <img src='https://i.imgur.com/2lM4cv0.png' width='20' height='20'> [crew_text] Upgrade equipped to this ship\n\nDo not flip this ship's [cloak] Token to its red side and place a [battlestations] Token beside this ship.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S343",
		gameId: 1,
		set: [
			"75011"
		],
		name: "U.S.S. Sao Paulo",
		class: "Defiant Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 20,
		text: "<b>WHEN ATTACKING:</b> If this ship spends a [battlestations] Token:\n\nPlace a [battlestations] Token beside this ship.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S349",
		gameId: 1,
		set: [
			"75010"
		],
		name: "I.K.S. T'Acog",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 21,
		text: "<b>FREE ACTION:</b> \n\nPerform a [sensor-echo] Action even if this ship isn't Cloaked.  If this ship is Cloaked, you may use a 3 [straight] Manuever Template for this Action.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S329",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Dukat's Bird-of-Prey",
		class: "Klingon Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 17,
		text: "<b>COMBAT PHASE:</b> If this ship is cloaked:\nPlace a [battlestations],[scan],OR [evade] Token beside this ship OR increase the Captain Skill of the Captain equipped to this ship by 3 this Combat Phase",
		unique: true,
		factions: [
			"dominion",
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S334",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Vetar",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 22,
		text: "<b>ACTION:</b> \nAll other friendly <img src='https://i.imgur.com/QKqthve.png' width='20' height='20'> ships within Range 1-2 may perform an Action on their Action Bar as a Free Action.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S332",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Orias",
		class: "Cardassian Keldon Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "If there are only <img src='https://i.imgur.com/QKqthve.png' width='20' height='20'> and/or <img src='https://i.imgur.com/BpbvTHt.png' width='20' height='20'> cards equipped to this ship, add the [cloak] and [sensor-echo] Actions to this ship's Action Bar.\n<b>WHEN A FRIENDLY SHIP WITHIN RANGE 1 PERFORMS THE CLOAK ACTION:</b> This ship may perform the [cloak] Action as a Free Action.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S331",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Preloc",
		class: "Cardassian Keldon Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "All friendly <img src='https://i.imgur.com/QKqthve.png' width='20' height='20'> ships within Range 1 roll +1 attack die.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S333",
		gameId: 1,
		set: [
			"75009"
		],
		name: "Dominion/Klingon Starship",
		class: "Klingon Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"dominion",
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S338",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Kir'Shara",
		class: "D'Kyr Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 24,
		text: "<b>WHEN ATTACKING:</b> During the Modify Attack Dice Step, if there is a [scan] Token beside this ship.\n\nConvert up to 2 [battlestations] into 1 [hit] each.",
		unique: true,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S330",
		gameId: 1,
		set: [
			"75008"
		],
		name: "V'Shar",
		class: "D'Kyr Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 25,
		text: "<b>COMBAT PHASE:</b> Spend a [scan] Token from beside this ship.\nThe next attack this ship makes with its Primary Weapon this game round ignores the defending ship's Shields.",
		unique: true,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S337",
		gameId: 1,
		set: [
			"75008"
		],
		name: "U.S.S. Intrepid",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "<b>FREE ACTION:</b>\nPlace an [aux] Token beside this ship and target a friendly ship within Range 1-2.\n\nPlace a [scan] Token and an [evade] Token beside this ship and target ship.",
		unique: true,
		factions: [
			"federation",
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S335",
		gameId: 1,
		set: [
			"75008"
		],
		name: "U.S.S. T'Kumbra",
		class: "Nebula Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 22,
		text: "All <img src='https://i.imgur.com/Bz5pgGG.png' width='20' height='20'> Captains, Admirals, and [crew_text] Upgrades equipped to this ship cost -1 SP.\n<b>WHEN THIS SHIP PERFORMS A [scan] ACTION:</b> \nPlace an additional [scan] Token beside this ship.",
		unique: true,
		factions: [
			"federation",
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S323",
		gameId: 1,
		set: [
			"75006"
		],
		name: "I.K.S. Klothos",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 16,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked:  This ship rolls +1 attack die this attack.\n-----------------------------------\n<b>WHEN ATTACKING: </b> If this ship is not within the Primary Firing Arc of the defending ship.  Convert 1 [battlestations] into 1 [crit] and all other [battlestations] into [hit].",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S322",
		gameId: 1,
		set: [
			"75006"
		],
		name: "I.K.S. Devisor",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 14,
		text: "<b>WHEN ATTACKING:</b> If the defending ship performed a maneuver with a speed of 3 or greater this game round:\n\nAdd 1 [crit].",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S319",
		gameId: 1,
		set: [
			"75006"
		],
		name: "I.R.W. Talon",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 14,
		text: "<b>BEFORE THIS SHIP REVEALS ITS MANEUVER DIAL:</b> If this ship is Cloaked: \n\nPerform a white 1 [bank-left], 1 [straight], 1 [bank-right], OR perform a [sensor-echo] Action as a Free Action.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S318",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Assimilation Target Prime",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 30,
		text: "You do not pay a faction penalty for cards equipped to this ship.\n-----------------------------------\nAll [tech_text] Upgrades equipped to this ship cost -1 SP.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S321",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Sphere 634",
		class: "Borg Sphere",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 7,
		cost: 40,
		text: "<b>COMBAT PHASE:</b> Spend a [scan] Token beside this ship and target an opposing ship within Range 1-2.\n\nDiscard a [scan], [battlestations], [evade], or  [target-lock] Token beside the target ship.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S325",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Scout 609",
		class: "Borg Scout Cube",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 3,
		hull: 2,
		shields: 4,
		cost: 22,
		text: "<b>ACTION:</b> Target a friendly ship within Range 1-2.\n\nRepair 1 Shield and 1 Hull on the target ship.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S326",
		gameId: 1,
		set: [
			"75007"
		],
		name: "U.S.S. Voyager",
		class: "Intrepid Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 2,
		hull: 4,
		shields: 6,
		cost: 34,
		text: "<b>FREE ACTION:</b> If this ship performed a Green Maneuver this game round:\n\n Perform a  [target-lock] Action as a Free Action",
		unique: true,
		factions: [
			"federation",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S324",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Federation/Borg Starship",
		class: "Intrepid Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 29,
		text: "",
		unique: false,
		factions: [
			"federation",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S320",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Federation/Borg Starship",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"federation",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S317",
		gameId: 1,
		set: [
			"75006"
		],
		name: "U.S.S. Enterprise",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "\n<b>ACTION:</b>\n\nRepair up to 3 Shields on this ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S316",
		gameId: 1,
		set: [
			"75004"
		],
		name: "U.S.S. Dauntless",
		class: "Dauntless Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"tech"
		],
		attack: 2,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 23,
		text: "You may equip a [crew_text] Upgrade as the Captain of this ship. If you do, it counts as a Captain instead of a [crew_text] Upgrade and its Captain Skill is its Printed SP Cost +3.\n----------------------------------\nYou may not equip an Admiral Card to this ship.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S315",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Harvester Prime",
		class: "Vidiian Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 23,
		text: "<b>COMBAT PHASE:</b> Disable any number of Active Shields on this ship and target an opposing ship within Range 1-3.\n\nDisable the same number of Active Shields -1 on the target ship.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S314",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Telev's Battle Cruiser",
		class: "Andorian Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 21,
		text: "<b>WHEN A FRIENDLY SHIP WITHIN RANGE 1 IS DEFENDING:</b> The friendly ship may roll +1 defense die. If that friendly ship is an <img src='https://i.imgur.com/gYAWL0N.png' width='10' height='10'>, it may also convert one [blank] result into one [evade] result. If the attacking ship is a <img src='https://i.imgur.com/89QK4SA.png' width='20' height='20'> Ship, that friendly ship may also add one [evade].",
		unique: true,
		factions: [
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S313",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Guingouin",
		class: "Maquis Raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 3,
		cost: 18,
		text: "You may equip the Inertial Compensators Upgrade to this ship for free and without requiring an Upgrade Slot.\n<b>WHEN ATTACKING:</b> If the defending ship is hit: Place an [aux] token beside the defending ship.",
		unique: true,
		factions: [
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S312",
		gameId: 1,
		set: [
			"75004"
		],
		name: "Maquis Starship",
		class: "Maquis Raider",
		classId: "maquis_raider_b",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S311",
		gameId: 1,
		set: [
			"75005"
		],
		name: "U.S.S. Enterprise",
		class: "Constitution Class (Kelvin)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 4,
		cost: 28,
		text: "<b>END PHASE:</b> Flip 1 Specialization card equipped to this ship and target one face up damage card beside this card.\n\nFlip the target damage card face down.",
		unique: true,
		factions: [
			"mirror-universe",
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S310",
		gameId: 1,
		set: [
			"75005"
		],
		name: "U.S.S. Enterprise-A",
		class: "Constitution Class (Kelvin)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 4,
		cost: 28,
		text: "<b>ACTION:</b> If this ship has one or more destroyed Shields, flip 1 Specialization card equipped to this ship.\n\n Repair 1 Shield on this ship.",
		unique: true,
		factions: [
			"mirror-universe",
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S309",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Federation Starship",
		class: "Constitution Class (Kelvin)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 3,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"mirror-universe",
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S308",
		gameId: 1,
		set: [
			"75005"
		],
		name: "I.K.S. Amar",
		class: "Warbird Class",
		actions: [
			"target-lock",
			"battlestations",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 21,
		text: "<b>WHEN THIS SHIP SUFFERS DAMAGE TO ITS HULL:</b> Once per game, if this ship is Cloaked:\n\nThis ship may perform an attack with its Primary Weapon.",
		unique: true,
		factions: [
			"mirror-universe",
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S307",
		gameId: 1,
		set: [
			"75005"
		],
		name: "I.K.S. Suvwl",
		class: "Warbird Class",
		actions: [
			"target-lock",
			"battlestations",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 21,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked and not in the Primary Firing Arc of the defending ship.\n\nThis ship rolls +1 attack die this attack and the defending ship rolls -1 defence die this attack.",
		unique: true,
		factions: [
			"mirror-universe",
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S306",
		gameId: 1,
		set: [
			"75005"
		],
		name: "Klingon Starship",
		class: "Warbird Class",
		actions: [
			"target-lock",
			"battlestations",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 17,
		text: "",
		unique: false,
		factions: [
			"mirror-universe",
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S305",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Fighter Squadron 1",
		class: "Federation Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron",
			"squadron"
		],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 24,
		text: "ATTACK SQUADRON TOKENS: 5\r\n<b>ACTION:</b> Place 3 [time] Tokens on this card.\n\nEquip a [squadron_text] Upgrade that was discarded from this Attack Squadron to this Attack Squadron.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: true
	},
	{
		type: "ship",
		id: "S304",
		gameId: 1,
		set: [
			"73041"
		],
		name: "Fighter Squadron 3",
		class: "Federation Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron",
			"squadron"
		],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 24,
		text: "ATTACK SQUADRON TOKENS: 5\r\n<b>ACTION:</b> Place 2 [time] Tokens on this card.\nPerform an [sensor-echo] action using a 1 [straight] Maneuver Template as a Free Action, even if this Attack Squadron is not Cloaked.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: true
	},
	{
		type: "ship",
		id: "S302",
		gameId: 1,
		set: [
			"73042"
		],
		name: "Hirogen Hunting Vessel",
		class: "Hirogen Warship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 22,
		text: "<b>AFTER THIS SHIP DEALS NO DAMAGE WITH AN ATTACK:</b> Target the defending ship. \nPlace a [battlestations] Token beside this ship and perform a  [target-lock] Action as a free Action on the target ship.",
		unique: true,
		factions: [
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S301",
		gameId: 1,
		set: [
			"73032"
		],
		name: "4th Wing Patrol Ship",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 16,
		text: "<b>AFTER THIS SHIP PERFORMS A   [target-lock] ACTION:</b> Target a friendly Jem'Hadar Attack Ship within Range 1.\n\nThe target ship may perform a   [target-lock] Action as a Free Action.",
		unique: true,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S300",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Gress'sril",
		class: "Gorn Raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 4,
		cost: 18,
		text: "<b>MODIFY ATTACK DICE STEP:\n</b> Disable 1 Shield on this ship.\n\nCancel 1 [hit] or [crit].",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S299",
		gameId: 1,
		set: [
			"73031"
		],
		name: "Gorn Starship",
		class: "Gorn Raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 14,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S298",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Lurin's Bird-of-Prey",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 18,
		text: "<b>COMBAT PHASE:</b> If there is an opposing ship in the Primary Firing Arc of this ship and the Primary Firing Arc of another <img src='https://i.imgur.com/nmga8GG.png' width='20' height='20'> ship with a <img src='https://i.imgur.com/nmga8GG.png' width='20' height='20'> Captain equipped to it, target that friendly ship.  This ship attack first this game round and the target ship attacks second this game round.",
		unique: true,
		factions: [
			"ferengi",
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S297",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Ferengi/Klingon Starship",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		factions: [
			"ferengi",
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S296",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Prak's Marauder",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 21,
		text: "<b>ACTION:</b> Target a [tech_text] or [weapon_text] Upgrade equipped to an opposing ship within Range 1-2.\nEach player rolls 5 attack dice. If you roll more [battlestations] than the controller of the target Upgrade, steal the target Upgrade even if it exceeds this ships restrictions.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S295",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Solok's Marauder",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "<b>WHEN THIS SHIP PERFORMS A 3 [turn-left], 3 [bank-left], 3 [straight], 3 [bank-right], OR 3 [turn-right] MANEUVER:</b>\n\nThis ship may perform a White Maneuver. If it does, it rolls -1 attack die this game round.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S294",
		gameId: 1,
		set: [
			"75003"
		],
		name: "Goss' Shuttle",
		class: "Ferengi Shuttle",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 12,
		text: "Other ships within Range 1-2 cannot be removed from the play area unless they are destroyed.",
		unique: true,
		factions: [
			"ferengi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S293",
		gameId: 1,
		set: [
			"75003",
			"72013"
		],
		name: "Ferengi Starship",
		class: "Ferengi Shuttle",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 2,
		shields: 1,
		cost: 8,
		text: "",
		unique: false,
		factions: [
			"ferengi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S292",
		gameId: 1,
		set: [
			"73002"
		],
		name: "Queen Vessel Prime",
		class: "Borg Octahedron",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 8,
		shields: 7,
		cost: 42,
		text: "\n<b>END PHASE:</b>\n\nAdd 1 Drone Token to the Captain equipped to this ship.",
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		unique: true,
		squadron: false
	},
	{
		type: "ship",
		id: "S291",
		gameId: 1,
		set: [
			"73002",
			"71530"
		],
		name: "Borg Starship",
		class: "Borg Octahedron",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 8,
		shields: 6,
		cost: 38,
		text: "",
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S290",
		gameId: 1,
		set: [
			"73001"
		],
		name: "Goss' Marauder",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "<b>ACTIVATION PHASE:</b> After this ship executes a Green Maneuver, place 2 [time] Tokens on this card.\nRemove a Disable Token from 1 Upgrade equipped to this ship or equip a <img src='https://i.imgur.com/nmga8GG.png' width='20' height='20'> Upgrade that was discarded from this ship to this ship.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S289",
		gameId: 1,
		set: [
			"75002"
		],
		name: "2nd Division Battleship",
		class: "Jem'Hadar Battleship ",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 5,
		cost: 35,
		text: "<b>END PHASE:</b> If this ship performed a Green Maneuver this game round.\n\nRepair 1 Hull or Shield.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S288",
		gameId: 1,
		set: [
			"75002"
		],
		name: "Jem'Hadar Battleship",
		class: "Jem'Hadar Battleship ",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 4,
		cost: 29,
		text: "",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S287",
		gameId: 1,
		set: [
			"75002"
		],
		name: "3rd Division Battle Cruiser",
		class: "Jem'Hadar Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 5,
		cost: 33,
		text: "\nJem'Hadar Attack Ships within Range 1 roll +1 defense dice",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S286",
		gameId: 1,
		set: [
			"75002",
			"71524"
		],
		name: "Dominion Starship",
		class: "Jem'Hadar Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 4,
		cost: 29,
		text: "",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S285",
		gameId: 1,
		set: [
			"75002"
		],
		name: "2nd Wing Patrol Ship",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 16,
		text: "\nThis ship rolls +2 defense dice if there is another Jem'Hadar Attack Ship within Range 1.",
		unique: true,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S284",
		gameId: 1,
		set: [
			"75002"
		],
		name: "6th Wing Patrol Ship",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 16,
		text: "\nThis ship rolls +1 attack die if there is another Jem'Hadar Attack Ship within Range 1.",
		unique: true,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S283",
		gameId: 1,
		set: [
			"75002",
			"73032",
			"71271",
			"3rd_wing_attack_ship"
		],
		name: "Dominion Starship",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S282",
		gameId: 1,
		set: [
			"75001"
		],
		name: "P.W.B. Tomal",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 29,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked, place an [aux] Token beside it.\n\nDisable up to 2 Shields on the defending ship.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S281",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Romulan Starship",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 25,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S280",
		gameId: 1,
		set: [
			"75001"
		],
		name: "I.R.W. Suran",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 28,
		text: "<b>COMBAT PHASE:</b> After this ship attacks:\n\nThis ship may perform a Green 2 [bank-left] or Green 2 [bank-right] Maneuver.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S279",
		gameId: 1,
		set: [
			"75001",
			"71123",
			"72010"
		],
		name: "Romulan Starship",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 2,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S278",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Jarok's Scout Vessel",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 2,
		cost: 12,
		text: "<b>ACTIVATION PHASE:</b> Place 2 [time] Tokens on this card and target a friendly Romulan ship within Range 1.\n\nThe target ship may perform an Action as a Free Action.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S277",
		gameId: 1,
		set: [
			"75001",
			"71274"
		],
		name: "Romulan Starship",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 1,
		cost: 9,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S276",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Mirok's Science Vessel",
		class: "Romulan Science Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 10,
		text: "<b>ACTION:</b> Target a friendly ship within Range 1-2.\n\nRepair 1 Shield or 1 Hull on the target ship.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S275",
		gameId: 1,
		set: [
			"75001"
		],
		name: "Romulan Starship",
		class: "Romulan Science Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 1,
		cost: 6,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S274",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "U.S.S. Enterprise-D",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "\n<b>WHEN DEFENDING:</b>\n\nThe attacking ship rolls -1 attack die.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S273",
		gameId: 1,
		set: [
			"2017core",
			"80000"
		],
		name: "Federation Starship",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 5+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 22,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S272",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "U.S.S. Sutherland",
		class: "Nebula Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 23,
		text: "\n<b>WHEN DEFENDING:</b>\n\nCancel 1 [hit]",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S271",
		gameId: 1,
		set: [
			"2017core",
			"OP4Prize",
			"72011",
			"80000"
		],
		name: "Federation Starship",
		class: "Nebula Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 5+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 19,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S344",
		gameId: 1,
		set: [
			"75008"
		],
		name: "Federation Starship",
		class: "Nebula Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 5+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 19,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S270",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "K'mpec's Attack Cruiser",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 25,
		text: "<b>ACTION:</b>Target all Cloaked friendly ships within range 1-2.\n\nPlace an [battlestations] Token next to all target ships.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S269",
		gameId: 1,
		set: [
			"2017core",
			"71120",
			"72241",
			"72280p"
		],
		name: "Klingon Starship",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 2,
		cost: 22,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S268",
		gameId: 1,
		set: [
			"2017core"
		],
		name: "I.K.S. Vorn",
		class: "K'Vort Class ",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 24,
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked.\n\nIf the defending ship is at Range 1, this ship rolls +2 attack dice. If the defending ship is at Range 2 this ship rolls +1 attack die.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S267",
		gameId: 1,
		set: [
			"72014wp"
		],
		name: "Prototype 02",
		class: "Romulan Drone Ship",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 3,
		hull: 3,
		shields: 3,
		cost: 19,
		text: "<b>PLANNING PHASE:</b> Place an [aux] Token beside this ship.\nRemove 1 [time] Token from each [tech_text] Upgrade equipped to this ship.\nThis ship may only be assigned Gareb or a Romulan Drone Pilot as its Captain.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S266",
		gameId: 1,
		set: [
			"72014wp",
			"71536"
		],
		name: "Romulan Starship",
		class: "Romulan Drone Ship",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 16,
		text: "This ship may only be assigned Gareb or a Romulan Drone Pilot as its Captain.",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S265",
		gameId: 1,
		set: [
			"72013wp"
		],
		name: "Dreadnought",
		class: "Cardassian ATR-4107",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon"
		],
		attack: 6,
		agility: 0,
		hull: 4,
		shields: 5,
		cost: 29,
		text: "You cannot equip a Captain or Admiral to this ship.\n\nWhile this ship has no Damage cards, treat its Captain Skill as 12.",
		unique: true,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S264",
		gameId: 1,
		set: [
			"72013wp",
			"71212"
		],
		name: "Dominion Starship",
		class: "Cardassian ATR-4107",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon"
		],
		attack: 6,
		agility: 0,
		hull: 4,
		shields: 4,
		cost: 24,
		text: "You cannot equip a Captain or Admiral to this ship.",
		unique: false,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S263",
		gameId: 1,
		set: [
			"72012wp"
		],
		name: "I.K.S. Ves Batlh",
		class: "Raptor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "<b>WHEN THIS SHIP SUFFERS DAMAGE FROM AN OBSTACLE OR MINEFIELD: </b>\n\nReduce the damage by 1.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S262",
		gameId: 1,
		set: [
			"72012wp",
			"71448"
		],
		name: "Klingon Starship",
		class: "Raptor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 1,
		cost: 11,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S261",
		gameId: 1,
		set: [
			"72011wp"
		],
		name: "U.S.S. Grissom",
		class: "Oberth Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 14,
		text: "<b>WHEN THIS SHIP WOULD BE DESTROYED:</b> \n\nThe attacking ship must discard one [crew_text] Upgrade. If it can't, place an [aux] Token beside it.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S260",
		gameId: 1,
		set: [
			"72011wp",
			"71801",
			"80000"
		],
		name: "Federation Starship",
		class: "Oberth Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 2+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 1,
		cost: 12,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S259",
		gameId: 1,
		set: [
			"72300p"
		],
		name: "Delta Flyer II",
		class: "Delta Flyer Class Shuttlecraft",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 2,
		shields: 3,
		cost: 20,
		text: "You may deploy [weapon_text] Upgrades with a cost of 4 SP or less to this ship.\n\nYou may place an Auxiliary Power Token next to your ship to perform an [battlestations] Action.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S258",
		gameId: 1,
		set: [
			"72290p"
		],
		name: "U.S.S. Defiant NCC-1764",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "When attacking, if your ship is not in the target ship's forward firing arc, during the Modify Attack Dice step, you may re-roll all of your blank results.",
		unique: true,
		factions: [
			"federation",
			"mirror-universe"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S257",
		gameId: 1,
		set: [
			"72293"
		],
		name: "Muratas",
		class: "Xindi Reptilian Warship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 22,
		text: "When attacking, during the Modify Attack Dice step, you may disable one of your Active Shields to re-roll up to 2 of your attack dice.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S256",
		gameId: 1,
		set: [
			"72284p"
		],
		name: "U.S.S. Enterprise-D",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 28,
		text: "During the Roll Attack Dice or Roll Defence Dice step of the Combat Phase, you may switch and [evade], [scan], or  [target-lock] Token that is beside your ship for a [battlestations] Token.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S255",
		gameId: 1,
		set: [
			"72281"
		],
		name: "Calindra",
		class: "Xindi Aquatic Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 3,
		cost: 28,
		text: "When defending, during the Modify Defense Dice step, you may discard a blue  [target-lock] Token from beside your ship to re-roll all of your defense dice.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S254",
		gameId: 1,
		set: [
			"72282gp"
		],
		name: "Sela's Warbird",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "During the Activation Phase, if your ship is Cloaked and performs the [sensor-echo] Action, you may flip your [cloak] Token over to its red side and immediately perform an additional [sensor-echo] Action as a free Action.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S253",
		gameId: 1,
		set: [
			"72282p"
		],
		name: "I.K.S. Toral",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "When defending, during the Roll Defence Dice step, if your ship is not Cloaked, you may roll +2 defence dice. If you do so place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S252",
		gameId: 1,
		set: [
			"72282p",
			"72015"
		],
		name: "Klingon Starship",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S251",
		gameId: 1,
		set: [
			"72281p"
		],
		name: "I.K.S. Hegh'ta",
		class: "K'Vort Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "If your ship is within Range 1 of a friendly ship, each time it defends, it rolls +1 defense die. This ability may only be used for 1 friendly ship per round.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S250",
		gameId: 1,
		set: [
			"72273"
		],
		name: "Orassin",
		class: "Xindi Insectoid Starship",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 20,
		text: "When attacking, during the Modify Attack Dice step, you may spend your [battlestations] Token to convert one of your [hit] results into a [crit] result.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S249",
		gameId: 1,
		set: [
			"72280p"
		],
		name: "I.K.S. Bortas",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "When defending, During the Modify Defense dice step, you may re-roll one of your defense dice. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S248",
		gameId: 1,
		set: [
			"72263"
		],
		name: "U.S.S. Enterprise-B",
		class: "Excelsior Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "During the Combat Phase, you may replace 1 [battlestations], [scan] or blue  [target-lock] Token that is beside your ship with an [evade] Token.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S247",
		gameId: 1,
		set: [
			"72270p"
		],
		name: "Kohlars Battle Cruiser",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "During the End Phase, if your [cloak] Token is on its red side, you may flip it back to its green side. If you do so place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S246",
		gameId: 1,
		set: [
			"72262p"
		],
		name: "I.R.W. Rateg",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "When defending, if your ship is Cloaked, you may re-roll up to 2 of your defense dice.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S245",
		gameId: 1,
		set: [
			"72253"
		],
		name: "U.S.S. Venture",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 28,
		text: "If you attack a ship that is in the forward firing arc of another friendly ship, you gain +1 attack die.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S244",
		gameId: 1,
		set: [
			"72261p"
		],
		name: "U.S.S. Cairo",
		class: "Excelsior Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "When defending, if there is an Auxiliary Power Token beside your ship, during the Roll Defense Dice step, roll +1 defense die.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S243",
		gameId: 1,
		set: [
			"72260gp"
		],
		name: "U.S.S. Enterprise-A",
		class: "Constitution Refit Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 24,
		text: "When attacking during the Roll Attack Dice step, if there is a [scan] Token beside your ship gain +1 attack die (+2 if the defending ship is Cloaked).",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S242",
		gameId: 1,
		set: [
			"72260p"
		],
		name: "H.M.S. Bounty",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "If there are only Federation cards assigned to this ship, add the [scan] and [battlestations] icons to the Action Bar. \n\nThis ship cannot be in the same fleet as Kruge's Bird-of-Prey.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S241",
		gameId: 1,
		set: [
			"72255"
		],
		name: "Cube 384",
		class: "Borg Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 10,
		shields: 10,
		cost: 52,
		text: "Your shields cannot be affected by Upgrades from an opponent's fleet.",
		unique: true,
		factions: [
			"borg"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S240",
		gameId: 1,
		set: [
			"72255"
		],
		name: "Sphere 936",
		class: "Borg Sphere",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 7,
		cost: 40,
		text: "If this ship is a support ship, you may equip 1 Upgrade (of your choice) at -2 SP to this ship and you may use a 1 [straight], 2 [straight], or 3 [straight] Maneuver Template to place it in the play area when it becomes Active.",
		unique: true,
		factions: [
			"borg"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S239",
		gameId: 1,
		set: [
			"72236p"
		],
		name: "Kruge's Bird-of-Prey",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "<b>ACTION:</b> Once this round, if you inflict a critical damage on an enemy ship's Hull, you may search the Damaage Deck for a \"Direct Hit\" damage card and place it beside the enemy's Ship Card. Shuffle the Damage Deck when you are done.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S238",
		gameId: 1,
		set: [
			"72242"
		],
		name: "I.R.W. Algeron",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "When attacking with your Primary Weapon, if your ship is not Cloaked, during the Declare Target step, you may perform a 1 [straight] Maneuver before choosing an enemy ship to attack.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S237",
		gameId: 1,
		set: [
			"72242",
			"75006"
		],
		name: "Romulan Battlecruiser",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 1,
		cost: 11,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S236",
		gameId: 1,
		set: [
			"72235p"
		],
		name: "U.S.S. Reliant",
		class: "Miranda Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "When attacking with your Primary Weapon, during the Modify Attack Dice step, you may disable any number of your Active Shields to re-roll a number of your attack dice equal to the number of Shields you disabled.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S235",
		gameId: 1,
		set: [
			"72241"
		],
		name: "I.K.S. Drovana",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "When defending, during the Compare Results step, you may discard 1 of your non-disabled Upgrades to cancel 1 [hit] or [crit] result.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S234",
		gameId: 1,
		set: [
			"72234p"
		],
		name: "U.S.S. Constellation",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "If all of your Shields have been destroyed, when attacking with your Primary Weapon, you may gain +2 attack dice. If you do so, place an Auxiliary Power Token beside your ship. You cannot roll any defence dice during a round in which you use this ability.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S233",
		gameId: 1,
		set: [
			"72224p"
		],
		name: "Xindus",
		class: "Xindi Reptilian Warship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 22,
		text: "When firing a Photon Torpedo Upgrade, place 1 less Time Token on that Upgrade.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S232",
		gameId: 1,
		set: [
			"72224p",
			"72293"
		],
		name: "Xindi Starship",
		class: "Xindi Reptilian Warship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 1,
		cost: 20,
		text: "",
		unique: false,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S231",
		gameId: 1,
		set: [
			"72233"
		],
		name: "I.R.W. Jazkal",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 0,
		cost: 14,
		text: "While there is a [scan] Token beside your ship, you cannot be targeted by any [talent_text] Upgrades and you roll +1 defense die against all attacks made with [weapon_text] Upgrades.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S230",
		gameId: 1,
		set: [
			"72232"
		],
		name: "I.K.S. Amar",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "When attacking if you do not hit the defending ship, place an [evade] Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S229",
		gameId: 1,
		set: [
			"72231"
		],
		name: "U.S.S. Montgolfier",
		class: "Saber Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "If your ship has an opposing ship target locked, during the Activation Phase, you may switch the target lock to a different ship within Range 1-3 as a free Action.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S227",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Weapon Zero",
		class: "Xindi Weapon",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 8,
		shields: 0,
		cost: 30,
		text: "When defending, during the Roll Defence Dice step, you may roll 1 defence die for each [hit] or [crit] result rolled by the attacking ship. If you do so, Place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S226",
		gameId: 1,
		set: [
			"71225"
		],
		name: "Xindi Starship",
		class: "Xindi Weapon",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 8,
		shields: 0,
		cost: 28,
		text: "",
		unique: false,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S225",
		gameId: 1,
		set: [
			"71203"
		],
		name: "Scorpion 4",
		class: "Scorpion Class Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron",
			"squadron"
		],
		attack: 4,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 24,
		skill: 6,
		text: "Attack Squadron Tokens: 5\n\nIf you attack during a round in which you performed a ([come-about]) Come About Maneuver, during the Modify Attack Dice step, you may re-roll all of your blank results.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: true
	},
	{
		type: "ship",
		id: "S224",
		gameId: 1,
		set: [
			"71203"
		],
		name: "ROMULAN ATTACK FIGHTERS",
		class: "Scorpion Class Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron"
		],
		attack: 3,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 20,
		skill: 5,
		text: "Attack Squadron Tokens: 4",
		unique: false,
		factions: [
			"romulan"
		],
		squadron: true
	},
	{
		type: "ship",
		id: "S223",
		gameId: 1,
		set: [
			"72221p"
		],
		name: "I.R.W. T'MET",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "<b>ACTION:</b> If your ship is not Cloaked, when attacking with your Primary Weapon at Range 1 this round, gain +1 attack die and roll -1 defence die.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S222",
		gameId: 1,
		set: [
			"72221p",
			"OP3Prize",
			"71511",
			"72282gp"
		],
		name: "ROMULAN STARSHIP",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 25,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S221",
		gameId: 1,
		set: [
			"71212"
		],
		name: "Dreadnought",
		class: "Cardassian ATR-4107",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon"
		],
		attack: 6,
		agility: 0,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "You cannot assign a Captain or an Admiral to this ship. \nWhen defending, during the Compare Results step, you may discard up to 2 of your Upgrades to cancel an equal number of attacking ship's dice.",
		unique: true,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S220",
		gameId: 1,
		set: [
			"71192"
		],
		name: "Halik Raider",
		class: "Kazon Raider",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "When defending during the Roll Defense Dice step, you may disable one of your Active Shields to gain +2 defence dice for that attack.",
		unique: true,
		factions: [
			"kazon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S219",
		gameId: 1,
		set: [
			"71192",
			"71282"
		],
		name: "Kazon Starship",
		class: "Kazon Raider",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "",
		unique: false,
		factions: [
			"kazon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S218",
		gameId: 1,
		set: [
			"71211"
		],
		name: "DENORIOS",
		class: "BAJORAN SOLAR SAILOR",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"tech"
		],
		attack: 1,
		agility: 2,
		hull: 3,
		shields: 0,
		cost: 12,
		text: "When Defending during the Compare Results step, you may place an Auxiliary Power Token beside your ship to cancel 1 [hit] result.",
		unique: true,
		factions: [
			"bajoran"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S217",
		gameId: 1,
		set: [
			"71211"
		],
		name: "Bajoran Starship",
		class: "BAJORAN SOLAR SAILOR",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech"
		],
		attack: 1,
		agility: 2,
		hull: 3,
		shields: 0,
		cost: 12,
		text: "",
		unique: false,
		factions: [
			"bajoran"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S216",
		gameId: 1,
		set: [
			"71213"
		],
		name: "Robinson",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"crew",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "When defending if you are hit and you don't already have a \"Warp Core Breach\" critical damage card assigned to your ship, you may chose to ignore up to 3 damage being inflicted to your ship and suffer a \"Warp Core Breach\" critical damage instead.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S215",
		gameId: 1,
		set: [
			"71221"
		],
		name: "U.S.S. Valiant",
		class: "Defiant Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 24,
		text: "When attacking with Photon Torpedoes during the Roll Attack Dice step, you may discard the Photon Torpedoes Upgrade to gain 1 additional attack die.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S213",
		gameId: 1,
		set: [
			"71223"
		],
		name: "KUMARI",
		class: "Andorian Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "You may perform an [evade] or a [scan] Action while there is an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S212",
		gameId: 1,
		set: [
			"71223",
			"75004"
		],
		name: "ANDORIAN STARSHIP",
		class: "Andorian Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S211",
		gameId: 1,
		set: [
			"71201"
		],
		name: "U.S.S. Hathaway",
		class: "Constellation Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "During the Activation Phase, you may perform a second Action from your Action Bar as a free Action. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S209",
		gameId: 1,
		set: [
			"71222"
		],
		name: "R.I.S. Pi",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 2,
		cost: 16,
		text: "During the Activation Phase you may perform a [scan] Action as a free Action. If you do so place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S208",
		gameId: 1,
		set: [
			"71222"
		],
		name: "Romulan Starship",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 1,
		cost: 9,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S207",
		gameId: 1,
		set: [
			"71120"
		],
		name: "U.S.S. Enterprise-D",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 28,
		text: "Instead of making a normal attack with your primary weapon, you may fire in any direction at Range 1-2 with 3 attack dice.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S206",
		gameId: 1,
		set: [
			"71120",
			"72253",
			"72284p",
			"80000",
			"75011"
		],
		name: "Federation Starship",
		class: "Galaxy Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 5+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 22,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S205",
		gameId: 1,
		set: [
			"71120"
		],
		name: "I.R.W. Khazara",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "If you initiate an attack while cloaked, add +1 attack die.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S204",
		gameId: 1,
		set: [
			"71120",
			"blind_belak"
		],
		name: "Romulan Starship",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 25,
		text: "\r\n      ",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S203",
		gameId: 1,
		set: [
			"71120"
		],
		name: "I.K.S. Maht-H'A",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "Any ship attacking you at Range 1 rolls 1 less attack die.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S202",
		gameId: 1,
		set: [
			"71121"
		],
		name: "U.S.S. Reliant",
		class: "Miranda Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "You gain +1 attack die when firing at Range 1.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S201",
		gameId: 1,
		set: [
			"71121",
			"72235p",
			"80000",
			"75011"
		],
		name: "Federation Starship",
		class: "Miranda Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 2+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 12,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S200",
		gameId: 1,
		set: [
			"71122",
			"72240"
		],
		name: "U.S.S. Enterprise",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "The U.S.S. Enterprise can perform an Action listed on its Action Bar while it has an Auxiliary Power Token.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S199",
		gameId: 1,
		set: [
			"72290p",
			"71122",
			"72240",
			"72234p",
			"72002p",
			"75006",
			"75008"
		],
		name: "Federation Starship",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 16,
		text: "\r\n      ",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S198",
		gameId: 1,
		set: [
			"71123"
		],
		name: "I.R.W. Valdore",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 30,
		text: "If you perform a Green Maneuver, add +1 attack die for the remainder of this round.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S197",
		gameId: 1,
		set: [
			"71124"
		],
		name: "R.I.S. Apnex",
		class: "Romulan Science Vessel",
		actions: [
			"evade",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"crew",
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 14,
		text: "<b>ACTION (once/game):</b> Every ship at Range 1 sustains 1 damage (including this ship). During the Planning Phase, this ship must choose a \"1\" Maneuver (forward, bank or turn) for the rest of the game.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S196",
		gameId: 1,
		set: [
			"71124",
			"72016"
		],
		name: "Romulan Science Vessel",
		class: "Romulan Science Vessel",
		actions: [
			"evade",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 1,
		cost: 6,
		text: "\r\n      ",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S195",
		gameId: 1,
		set: [
			"71125",
			"72272"
		],
		name: "I.K.S. Gr'oth",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "Each time you defend against a ship at Range 1, roll 1 extra defense die.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S194",
		gameId: 1,
		set: [
			"71125",
			"72270p",
			"72272",
			"75006"
		],
		name: "Klingon Battlecruiser",
		class: "D7 Class",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 1,
		cost: 11,
		text: "\r\n      ",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S193",
		gameId: 1,
		set: [
			"71126",
			"72251"
		],
		name: "I.K.S. Negh'var",
		class: "Negh'var Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 3,
		cost: 30,
		text: "<b>ACTION:</b> Target a ship within your firing arc at Range 1-2 and roll 3 attack dice. For each [hit] result disable 1 of that ship's Shields. If possible, you may play Klingon Boarding Party as a free action this turn. ",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S192",
		gameId: 1,
		set: [
			"71126",
			"72251"
		],
		name: "Klingon Starship",
		class: "Negh'var Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 2,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S191",
		gameId: 1,
		set: [
			"71127"
		],
		name: "Kraxon",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "Whenever a friendly ship within Range 1 of your ship receives damage you may transfer any amount of that damage to your own Shields, if possible.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S190",
		gameId: 1,
		set: [
			"71127",
			"71513b",
			"71798",
			"blind_aldara",
			"75009"
		],
		name: "Dominion Starship",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 17,
		text: "\r\n      ",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S189",
		gameId: 1,
		set: [
			"71128"
		],
		name: "Gor Portas",
		class: "Breen Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "Although you must be Target Locked on a ship to fire a Torpedo at it, you do not need to discard your Target Lock when doing so.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S188",
		gameId: 1,
		set: [
			"71128"
		],
		name: "Dominion Starship",
		class: "Breen Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "\r\n      ",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S187",
		gameId: 1,
		set: [
			"OP1Prize"
		],
		name: "Krayton",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "<b>ACTION:</b> Disable 1 of your Active Shields to gain +1 attack die this round. You may re-roll all of your blank results once.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S186",
		gameId: 1,
		set: [
			"OP1Prize",
			"71646a",
			"71806",
			"blind_nunks_marauder",
			"75003",
			"73001"
		],
		name: "Ferengi Marauder",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S185",
		gameId: 1,
		set: [
			"OP1Participation"
		],
		name: "Deep Space 9",
		class: "Nor Class Orbital Space Station",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 0,
		hull: 8,
		shields: 8,
		cost: 44,
		text: "When firing any torpedoes, do not disable the torpedoes.",
		unique: true,
		factions: [
			"federation",
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S184",
		gameId: 1,
		set: [
			"OP1Participation"
		],
		name: "Abandoned Space Station",
		class: "Nor Class Orbital Space Station",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 0,
		hull: 8,
		shields: 7,
		cost: 42,
		text: "\r\n      ",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S183",
		gameId: 1,
		set: [
			"OP2Prize"
		],
		name: "I.K.S. Ch'tang",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "If you initiate an attack while cloaked, you may choose any number of your attack dice and re-roll them once.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S182",
		gameId: 1,
		set: [
			"OP2Prize",
			"71512",
			"72236p"
		],
		name: "Klingon Starship",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "\r\n      ",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S181",
		gameId: 1,
		set: [
			"OP3Prize"
		],
		name: "P.W.B. Aj'Rmr",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "Each time you attack, you may re-roll 1 of your attack dice for every damage card assigned to your ship.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S180",
		gameId: 1,
		set: [
			"71268",
			"72282"
		],
		name: "U.S.S. Defiant",
		class: "Defiant Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 24,
		text: "When defending, convert all of your opponent's [crit] results into [hit] results.\r\n      ",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S179",
		gameId: 1,
		set: [
			"71268",
			"72282",
			"71221",
			"80000",
			"75011"
		],
		name: "Federation Starship",
		class: "Defiant Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 4+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 15,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S178",
		gameId: 1,
		set: [
			"71269"
		],
		name: "I.K.S. Kronos One",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "Any ship attacking you at Range 3 rolls 1 less attack die.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S177",
		gameId: 1,
		set: [
			"71269",
			"72232",
			"72009",
			"75010"
		],
		name: "Klingon Starship",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S176",
		gameId: 1,
		set: [
			"71270"
		],
		name: "I.R.W. Praetus",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 0,
		cost: 14,
		text: "You may use the [cloak] Action even if you have no Active Shields. Whenever you choose the [cloak] Action, roll 1 attack die. On a [battlestations] result, your Hull sustains 1 Damage.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S175",
		gameId: 1,
		set: [
			"71270",
			"72233"
		],
		name: "Romulan Starship",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"tech",
			"weapon"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 0,
		cost: 14,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S174",
		gameId: 1,
		set: [
			"71271"
		],
		name: "5th Wing Patrol Ship",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "<b>ACTION:</b> When attacking this round, gain +1 attack die. When defending this round, roll one less defense die.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S173",
		gameId: 1,
		set: [
			"71273"
		],
		name: "I.K.S. Koraga",
		class: "K'Vort Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "Each time you defend while Cloaked, roll +1 defense die.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S172",
		gameId: 1,
		set: [
			"2017core",
			"71273",
			"71996",
			"blind_buruk",
			"72281p"
		],
		name: "Klingon Starship",
		class: "K'Vort Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 2,
		cost: 20,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S171",
		gameId: 1,
		set: [
			"71275",
			"72262"
		],
		name: "Koranak",
		class: "Cardassian Keldon Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 26,
		text: "Instead of making a normal attack, you may spend a [scan] Token to attack 2 different ships with your Primary Weapon at -2 attack dice each.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S170",
		gameId: 1,
		set: [
			"71275",
			"72262",
			"75009"
		],
		name: "Dominion Starship",
		class: "Cardassian Keldon Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 20,
		text: "",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S169",
		gameId: 1,
		set: [
			"71272",
			"72292"
		],
		name: "U.S.S. Excelsior",
		class: "Excelsior Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "After you move, if no enemy ships are within Range 1 of your ship, you may perform a [scan] Action as a free Action.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S168",
		gameId: 1,
		set: [
			"71272",
			"72292",
			"72261p",
			"72263",
			"blind_lakota",
			"80001"
		],
		name: "Federation Starship",
		class: "Excelsior Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 2+).",
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 20,
		unique: false,
		alliance: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S167",
		gameId: 1,
		set: [
			"71274"
		],
		name: "R.I.S. Vo",
		class: "Romulan Scout Vessel",
		actions: [
			"evade",
			"scan",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 1,
		agility: 3,
		hull: 2,
		shields: 2,
		cost: 16,
		text: "After you move, you may perform an [evade] Action as a free Action. If you do so, you cannot attack during this round.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S166",
		gameId: 1,
		set: [
			"OP4Prize"
		],
		name: "U.S.S. Sutherland",
		class: "Nebula Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "When you initiate an attack at range 3, you may choose any number of your attack dice and re-roll them once.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S165",
		gameId: 1,
		set: [
			"OP5Prize"
		],
		name: "Rav Laerst",
		class: "Breen Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "<b>ACTION:</b> Perform a [sensor-echo] Action even if this ship is not Cloaked. You may only use the 1 [forward] Maneuver Template for this Action.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S164",
		gameId: 1,
		set: [
			"OP5Prize"
		],
		name: "Dominion Starship",
		class: "Breen Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S163",
		gameId: 1,
		set: [
			"71276"
		],
		name: "U.S.S. Equinox",
		class: "Nova Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "<b>ACTION:</b> Disable 1 of your Active Shields. During the End Phase this round, repair all of your damaged Shields.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S162",
		gameId: 1,
		set: [
			"71276",
			"80000"
		],
		name: "Federation Starship",
		class: "Nova Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 2+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S161",
		gameId: 1,
		set: [
			"71448"
		],
		name: "I.K.S. Somraw",
		class: "Raptor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "Each time you defend, you may convert up to 2 of your [battlestations] results into [evade] results.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S160",
		gameId: 1,
		set: [
			"71278"
		],
		name: "I.R.W. Gal Gath'thong",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "When initiating an attack while Cloaked, you may fire Plasma Torpedoes without needing a Target Lock.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S159",
		gameId: 1,
		set: [
			"71278",
			"72262p"
		],
		name: "Romulan Starship",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 1,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S158",
		gameId: 1,
		set: [
			"71279"
		],
		name: "4th Division Battleship",
		class: "Jem'Hadar Battleship",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 5,
		cost: 36,
		text: "Each round, one other friendly Jem'Hadar ship within Range 1-2 of your ship may perform an Action on their Action Bar as a free Action.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S157",
		gameId: 1,
		set: [
			"OP6Prize"
		],
		name: "Akorem",
		class: "Bajoran Scout Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "Each time you defend, if there is an [evade] Token beside your ship, you may re-roll all of your defense dice once. You must keep the outcome of the 2nd roll.",
		unique: true,
		factions: [
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S156",
		gameId: 1,
		set: [
			"OP6Prize",
			"71803"
		],
		name: "Bajoran Starship",
		class: "Bajoran Scout Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 1,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S155",
		gameId: 1,
		set: [
			"OP6Participation"
		],
		name: "Federation Attack Fighter",
		class: "Federation Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 20,
		text: "If you initiate an attack at Range 1, you may re-roll 1 of your attack dice. \n\n(Initial Captain skill 6).",
		unique: true,
		opBanned: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: true
	},
	{
		type: "ship",
		id: "S154",
		gameId: 1,
		set: [
			"OP5Participation"
		],
		name: "Hideki Class Attack Fighter",
		class: "Hideki Class Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [],
		attack: 6,
		agility: 0,
		hull: 1,
		shields: 0,
		cost: 20,
		text: "Instead of making a normal attack, you may make an attack with 2 dice from your rear firing arc. (Initial Captain skill 6)",
		unique: true,
		opBanned: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: true
	},
	{
		type: "ship",
		id: "S153",
		gameId: 1,
		set: [
			"71283",
			"72283"
		],
		name: "Borg Sphere 4270",
		class: "Borg Sphere",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 7,
		cost: 40,
		text: "Each time you attack with your Primary Weapon, you may divide your attack between 2 different ships; you may divide your attack dice however you like, but you must roll at least 1 die against each ship.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S152",
		gameId: 1,
		set: [
			"71283",
			"72283"
		],
		name: "Borg Starship",
		class: "Borg Sphere",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 6,
		cost: 36,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S151",
		gameId: 1,
		set: [
			"72255",
			"75007"
		],
		name: "Borg Starship",
		class: "Borg Sphere",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 7,
		shields: 6,
		cost: 36,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S150",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "U.S.S. Voyager",
		class: "Intrepid Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "Instead of making a normal attack with your Primary Weapon, you may fire in any direction at Range 1-2 with 4 attack dice. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S149",
		gameId: 1,
		set: [
			"71280",
			"72261"
		],
		name: "Federation Starship",
		class: "Intrepid Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 28,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S148",
		gameId: 1,
		set: [
			"71282"
		],
		name: "Nistrim Raider",
		class: "Kazon Raider",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "When attacking a ship with a Scan token beside it with your Primary Weapon, roll an additional +2 attack dice.",
		unique: true,
		factions: [
			"kazon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S146",
		gameId: 1,
		set: [
			"71281",
			"72291"
		],
		name: "Bioship Alpha",
		class: "Species 8472 Bioship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon",
			"weapon"
		],
		attack: 6,
		agility: 2,
		hull: 5,
		shields: 6,
		cost: 38,
		text: "When you attack with your Primary Weapon, if you inflict at least 3 damage, place an Auxiliary Power Token beside the target ship.",
		unique: true,
		factions: [
			"species-8472"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S145",
		gameId: 1,
		set: [
			"71281",
			"72291",
			"72012",
			"blind_bioship"
		],
		name: "Species 8472 Starship",
		class: "Species 8472 Bioship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon"
		],
		attack: 6,
		agility: 2,
		hull: 5,
		shields: 5,
		cost: 36,
		text: "",
		unique: false,
		factions: [
			"species-8472"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S144",
		gameId: 1,
		set: [
			"OPWebPrize",
			"71795"
		],
		name: "Tholia One",
		class: "Tholian Vessel",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"weapon",
			"weapon"
		],
		attack: 2,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 16,
		text: "You may perform the Action listed on the \"Energy Web\" Upgrade card as a free Action.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S143",
		gameId: 1,
		set: [
			"OPWebPrize",
			"71795"
		],
		name: "Tholian Starship",
		class: "Tholian Vessel",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"weapon"
		],
		attack: 2,
		agility: 2,
		hull: 2,
		shields: 1,
		cost: 14,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S142",
		gameId: 1,
		set: [
			"71446"
		],
		name: "D'Kyr",
		class: "D'Kyr Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "Whenever you initiate an attack against an enemy ship at Range 3, gain +1 attack die.",
		unique: true,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S140",
		gameId: 1,
		set: [
			"71445"
		],
		name: "Interceptor 5",
		class: "Bajoran Interceptor",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "You do not lose your \"Perform Actions\" step or take damage when you overlap a planet, obstacle or ship base. You may roll defense dice against any minefield.",
		unique: true,
		factions: [
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S139",
		gameId: 1,
		set: [
			"71444"
		],
		name: "Tactical Cube 138",
		class: "Borg Tactical Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 9,
		shields: 8,
		cost: 46,
		text: "The Borg Ablative Hull Armor [borg_text] Upgrade costs -3 SP to equip to this ship.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S138",
		gameId: 1,
		set: [
			"71444",
			"71513a"
		],
		name: "Borg Tactical Cube",
		class: "Borg Tactical Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 9,
		shields: 7,
		cost: 44,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S137",
		gameId: 1,
		set: [
			"71445",
			"blind_interceptor8"
		],
		name: "Bajoran Interceptor",
		class: "Bajoran Interceptor",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S136",
		gameId: 1,
		set: [
			"71446",
			"71646e",
			"blind_seleya",
			"75008"
		],
		name: "Vulcan Starship",
		class: "D'Kyr Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 19,
		text: "",
		unique: false,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S135",
		gameId: 1,
		set: [
			"OPArenaPrize"
		],
		name: "S'Gorn",
		class: "Gorn Raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 4,
		cost: 22,
		text: "When attacking with your Primary Weapon, if you inflict at least 1 Critical Damage to the enemy ship's hull, that ship must also discard 1 [crew_text] Upgrade (of its choice).",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S134",
		gameId: 1,
		set: [
			"OPArenaPrize",
			"71797"
		],
		name: "Gorn Starship",
		class: "Gorn Raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 14,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S133",
		gameId: 1,
		set: [
			"i_k_s_b_moth"
		],
		name: "I.K.S. B'Moth",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "You can perform a Red Maneuver while there is an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S132",
		gameId: 1,
		set: [
			"i_k_s_b_moth",
			"75010"
		],
		name: "K'T'Inga Class",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S131",
		gameId: 1,
		set: [
			"gavroche"
		],
		name: "Gavroche",
		class: "Maquis Raider",
		classId: "maquis_raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "<b>ACTION:</b> Disable up to 2 of your [crew_text] Upgrades and add +1 attack die to each of your attacks this round for each [crew_text] Upgrade you disabled with this Action.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S130",
		gameId: 1,
		set: [
			"gavroche"
		],
		name: "Maquis Starship",
		class: "Maquis Raider",
		classId: "maquis_raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S129",
		gameId: 1,
		set: [
			"i_r_w_vorta_vor"
		],
		name: "I.R.W. Vorta Vor",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "While you are Cloaked, after you perform a Green Maneuver, you may perform a [sensor-echo] Action as a free Action.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S128",
		gameId: 1,
		set: [
			"i_r_w_vorta_vor"
		],
		name: "Romulan Bird-of-Prey",
		class: "Romulan Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 1,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S127",
		gameId: 1,
		set: [
			"3rd_wing_attack_ship"
		],
		name: "3rd Wing Attack Ship",
		class: "Jem'Hadar Attack Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "When attacking with your Primary Weapon, during the Roll Attack Dice step of the Combat Phase you may disable one of your [crew_text] Upgrades to add +1 attack die to your attack.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S126",
		gameId: 1,
		set: [
			"u_s_s_yaeger"
		],
		name: "U.S.S. Yeager",
		class: "Saber Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "When attacking with Photon Torpedoes, you do not need to disable the Photon Torpedoes.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S125",
		gameId: 1,
		set: [
			"u_s_s_yaeger",
			"72231",
			"80000"
		],
		name: "Federation Starship",
		class: "Saber Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 4+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 12,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S124",
		gameId: 1,
		set: [
			"71523"
		],
		name: "U.S.S. Enterprise",
		class: "Constitution Refit Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 24,
		text: "<b>ACTION:</b> Disable up to 2 of your Active Shields.  For each Shield you disabled with this Action, gain +1 attack die for all of your attacks with your Primary Weapon this round.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S123",
		gameId: 1,
		set: [
			"71523",
			"72260gp"
		],
		name: "Federation Starship",
		class: "Constitution Refit Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S122",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Soong",
		class: "Borg Type 03",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 1,
		hull: 7,
		shields: 5,
		cost: 38,
		text: "After performing a 5 [forward] Maneuver, if there are no enemy ships in your forward firing arc, you may perform an [evade] Action as a free Action.",
		unique: true,
		factions: [
			"borg",
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S121",
		gameId: 1,
		set: [
			"71522"
		],
		name: "Borg Starship",
		class: "Borg Type 03",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 1,
		hull: 7,
		shields: 4,
		cost: 36,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S120",
		gameId: 1,
		set: [
			"71524"
		],
		name: "2nd Division Cruiser",
		class: "Jem'Hadar Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 6,
		shields: 5,
		cost: 34,
		text: "Each time you defend, if you are within Range 1-2 of at least one friendly Jem'Hadar Attack Ship, roll 1 extra defense die.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S119",
		gameId: 1,
		set: [
			"71508"
		],
		name: "Ti'Mur",
		class: "Suurok Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"crew"
		],
		attack: 2,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "Whenever you initiate an attack, you may disable one of your non-disabled [tech_text] Upgrades to add +1 attack die.",
		unique: true,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S118",
		gameId: 1,
		set: [
			"71508",
			"71527"
		],
		name: "Vulcan Starship",
		class: "Suurok Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 2,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 18,
		text: "",
		unique: false,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S117",
		gameId: 1,
		set: [
			"71509"
		],
		name: "U.S.S. Raven",
		class: "Aerie Class",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 3,
		cost: 16,
		text: "Each time you attack or defend, if there is a [scan] token beside your ship, your range combat bonuses are doubled.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S116",
		gameId: 1,
		set: [
			"71509"
		],
		name: "Federation Starship",
		class: "Aerie Class",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"tech"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 14,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S115",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Enterprise NX-01",
		class: "Federation NX Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "You may equip the Enhanced Hull Plating [tech_text] Upgrade to your ship for free even if it exceeds your ship's restrictions.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S114",
		gameId: 1,
		set: [
			"71527"
		],
		name: "Ni'Var",
		class: "Suurok Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "Whenever you attack an enemy ship at Range 3 with your Primary Weapon, if there is a [scan] Token beside your ship, you gain +1 attack die for that attack.",
		unique: true,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S113",
		gameId: 1,
		set: [
			"71525"
		],
		name: "Scout 608",
		class: "Borg Scout Cube",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 3,
		hull: 2,
		shields: 4,
		cost: 24,
		text: "After you move, you may discard one of your Upgrades to perform an additional Green or White Maneuver.  You cannot deploy a [borg_text] Upgrade with a cost greater than 5 to this ship.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S112",
		gameId: 1,
		set: [
			"71526"
		],
		name: "Federation Starship",
		class: "Federation NX Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S328",
		gameId: 1,
		set: [
			"75007"
		],
		name: "Borg Starship",
		class: "Borg Scout Cube",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"crew"
		],
		attack: 3,
		agility: 3,
		hull: 2,
		shields: 3,
		cost: 17,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S111",
		gameId: 1,
		set: [
			"71525",
			"71646d"
		],
		name: "Borg Starship",
		class: "Borg Scout Cube",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"crew"
		],
		attack: 3,
		agility: 3,
		hull: 2,
		shields: 3,
		cost: 17,
		text: "You cannot deploy a [borg_text] Upgrade with a cost greater than 5 to this ship.",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S110",
		gameId: 1,
		set: [
			"71510"
		],
		name: "U.S.S. Stargazer",
		class: "Constellation Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "During the Activation Phase, you may disable 1 of your Active Shields to remove 1 Auxiliary Power Token from beside your ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S109",
		gameId: 1,
		set: [
			"71510",
			"71201"
		],
		name: "Federation Starship",
		class: "Constellation Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 20,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S108",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "U.S.S. Enterprise-D",
		class: "Galaxy Class (MU)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "During the Roll Attack Dice step of the Combat Phase, you may disable 1 of your Active Shields to gain +1 attack die.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S107",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Mirror Universe Starship",
		class: "Galaxy Class (MU)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 2,
		cost: 26,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S106",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Assimilation Target Prime",
		class: "Galaxy Class (MU)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 30,
		text: "<b>ACTION:</b> Spend 1 Drone Token to repair 1 damage to your Hull or Shields.",
		unique: true,
		factions: [
			"mirror-universe",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S105",
		gameId: 1,
		set: [
			"71510b"
		],
		name: "Mirror Universe/Borg Starship",
		class: "Galaxy Class (MU)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"mirror-universe",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S104",
		gameId: 1,
		set: [
			"71646a"
		],
		name: "Bok's Marauder",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "If you performed a Maneuver of 3 or higher this round, during the Roll Attack Dice step of the Combat Phase, you may add +1 attack die.  If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S103",
		gameId: 1,
		set: [
			"71646b"
		],
		name: "Mirror Universe Starship",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 17,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S102",
		gameId: 1,
		set: [
			"71646b"
		],
		name: "Prakesh",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "After you move, if you are within Range 1 of a friendly ship, you may immediately perform one of the Actions listed on your Action Bar as a free Action.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S101",
		gameId: 1,
		set: [
			"71646c",
			"71793",
			"blind_nistrim_culluh"
		],
		name: "Kazon Starship",
		class: "Predator Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 2,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"kazon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S100",
		gameId: 1,
		set: [
			"71646c"
		],
		name: "Relora-Sankur",
		class: "Predator Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "If you performed a Green Maneuver this round, during the Roll Attack Dice step of the Combat Phase, roll +1 attack die.",
		unique: true,
		factions: [
			"kazon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S099",
		gameId: 1,
		set: [
			"71646d"
		],
		name: "Scout 255",
		class: "Borg Scout Cube",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 3,
		hull: 2,
		shields: 4,
		cost: 24,
		text: "If there is a [scan] Token beside your ship during the Modify Defense Dice step of the Combat Phase, roll +1 defense die. \nYou cannot deploy a [borg_text] Upgrade with a cost greater than 5 to this ship.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S098",
		gameId: 1,
		set: [
			"71646e"
		],
		name: "Tal'Kir",
		class: "D'Kyr Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "Each time you defend, during the Modify Defense Dice step of the Combat Phase, you may add 1 [evade] result to your roll.  If you do so, place 1 Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"vulcan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S097",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Val Jean",
		class: "Maquis Raider",
		classId: "maquis_raider_b",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "During the Modify Defense Dice step of the Combat Phase, you may disable up to 3 of your Upgrades to add 1 [evade] result to your roll for each Upgrade you disabled with this card.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S096",
		gameId: 1,
		set: [
			"71528"
		],
		name: "Maquis Starship",
		class: "Maquis Raider",
		classId: "maquis_raider_b",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S095",
		gameId: 1,
		set: [
			"71511"
		],
		name: "Romulan/Borg Starship",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 32,
		text: "",
		unique: false,
		factions: [
			"romulan",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S094",
		gameId: 1,
		set: [
			"71511"
		],
		name: "I.R.W. Avatar of Tomed",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 5,
		cost: 34,
		text: "When you perform a [cloak] Action, you may immediately perform a [regenerate] Action as a free Action. \nIf you do so, you cannot attack that round.",
		unique: true,
		factions: [
			"romulan",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S093",
		gameId: 1,
		set: [
			"71511"
		],
		name: "I.R.W. Avatar of Tomed",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "During the Roll Attack Dice step of the Combat Phase, you may roll +1 attack die.  If you do so, suffer 1 damage to your Hull.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S092",
		gameId: 1,
		set: [
			"71530"
		],
		name: "Queen Vessel Prime",
		class: "Borg Octahedron",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 8,
		shields: 7,
		cost: 42,
		text: "During the Roll Attack Dice step of the Combat Phase, your ship, or 1 friendly ship within Range 1-2 of your ship, may spend a Scan Token from beside this ship to gain +1 attack die.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S091",
		gameId: 1,
		set: [
			"71531",
			"72271"
		],
		name: "U.S.S. Enterprise-E",
		class: "Sovereign Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 5,
		cost: 32,
		text: "You may fire a Torpedo at an enemy ship without needing a Target Lock.  If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S090",
		gameId: 1,
		set: [
			"71531",
			"72271",
			"80000"
		],
		name: "Federation Starship",
		class: "Sovereign Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 8+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 25,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S089",
		gameId: 1,
		set: [
			"71512"
		],
		name: "Klingon/Borg Starship",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"borg",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 24,
		text: "",
		unique: false,
		factions: [
			"klingon",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S088",
		gameId: 1,
		set: [
			"71512"
		],
		name: "Assimilated Vessel 80279",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 3,
		shields: 4,
		cost: 26,
		text: "When attacking, during the Modify Attack Dice step, you may spend 3 Drone Tokens to choose any number of your attack dice and re-roll them (even if they have already been re-rolled).",
		unique: true,
		factions: [
			"klingon",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S087",
		gameId: 1,
		set: [
			"71512"
		],
		name: "Korok's Bird-of-Prey",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "When you initiate an attack at Range 1, while Cloaked, your opponent rolls -1 defense die. \n\nYou cannot deploy this card to the same fleet as \"Assimilated Vessel 80279.\"",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S086",
		gameId: 1,
		set: [
			"71513a"
		],
		name: "Tactical Cube 001",
		class: "Borg Tactical Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 9,
		shields: 8,
		cost: 46,
		text: "When defending, during the Compare Results step, you may discard up to 3 of your [borg_text] Upgrades.  Cancel 1 [hit] or [crit] result for each Upgrade you discard with this card.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S085",
		gameId: 1,
		set: [
			"71532"
		],
		name: "Chang's Bird-of-Prey",
		class: "Klingon Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "If you attack with Torpedoes while Cloaked, you do not flip your [cloak] Token over to its red side.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S084",
		gameId: 1,
		set: [
			"71529"
		],
		name: "I.S.S. Defiant",
		class: "Defiant Class (Mirror)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 24,
		text: "Each time you suffer damage from an attack, you may place an Auxiliary Power Token beside your ship to reduce the amount of damage from that attack by 1.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S083",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Scimitar",
		class: "Reman Warbird",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 2,
		hull: 7,
		shields: 4,
		cost: 38,
		text: "After you attack while Cloaked, you may place an Auxiliary Power Token beside your ship to keep your [cloak] Token from flipping to its red side.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S082",
		gameId: 1,
		set: [
			"71533",
			"72252"
		],
		name: "Reman Starship",
		class: "Reman Warbird",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 2,
		hull: 7,
		shields: 3,
		cost: 32,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S081",
		gameId: 1,
		set: [
			"71532"
		],
		name: "Klingon Starship",
		class: "Klingon Bird-of-Prey",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S080",
		gameId: 1,
		set: [
			"71529"
		],
		name: "Mirror Universe Starship",
		class: "Defiant Class (Mirror)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 22,
		text: "<b>( ERRATA )</b>",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S079",
		gameId: 1,
		set: [
			"71792"
		],
		name: "Cube 112",
		class: "Borg Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 10,
		shields: 10,
		cost: 82,
		text: "Instead of making a normal attack with your Primary Weapon, you may fire at up to 4 different ships at Range 1-2 with 4 attack dice against each ship. If you do this, spend 1 Drone Token for each of these attacks after the first.",
		unique: true,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S078",
		gameId: 1,
		set: [
			"71792"
		],
		name: "Borg Starship",
		class: "Borg Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 10,
		shields: 9,
		cost: 50,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S141",
		gameId: 1,
		set: [
			"72255"
		],
		name: "Borg Starship",
		class: "Borg Cube",
		actions: [
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 6,
		agility: 0,
		hull: 10,
		shields: 9,
		cost: 50,
		text: "",
		unique: false,
		factions: [
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S077",
		gameId: 1,
		set: [
			"71534"
		],
		name: "Fina Prime",
		class: "Vidiian Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "<b>ACTION:</b> Target a ship at Range 1 and force that ship to discard 1 of its Active Shield Tokens.  Place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S076",
		gameId: 1,
		set: [
			"71534",
			"75004"
		],
		name: "Vidiian Starship",
		class: "Vidiian Battle Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 5,
		shields: 2,
		cost: 21,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S075",
		gameId: 1,
		set: [
			"71810"
		],
		name: "Terok Nor",
		class: "Nor Class Orbital Space Station",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 0,
		hull: 8,
		shields: 8,
		cost: 44,
		text: "Instead of making a normal attack with your Primary Weapon, you may fire in any direction at Range 1-3 with 4 attack dice.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S073",
		gameId: 1,
		set: [
			"71810"
		],
		name: "Deep Space 9",
		class: "Nor Class Orbital Space Station",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 0,
		hull: 8,
		shields: 8,
		cost: 44,
		text: "Each time you defend, during the Roll Defense Dice step, you may roll up to 2 additional defense dice.  If you do, disable 1 of your Active Shields for each additional die you roll.",
		unique: true,
		factions: [
			"federation",
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S072",
		gameId: 1,
		set: [
			"71754"
		],
		name: "1st Wave Attack Fighters",
		class: "Hideki Class Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron",
			"squadron"
		],
		attack: 6,
		agility: 0,
		hull: 1,
		shields: 0,
		cost: 24,
		text: "ATTACK SQUADRON TOKENS: 5\r\nDuring the Roll Attack Dice step, you may disable one of your [squadron] Upgrade to gain +1 additional attack die for that attack.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: true
	},
	{
		type: "ship",
		id: "S071",
		gameId: 1,
		set: [
			"71754"
		],
		name: "Dominion Attack Fighters",
		class: "Hideki Class Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron"
		],
		attack: 6,
		agility: 0,
		hull: 1,
		shields: 0,
		cost: 20,
		text: "ATTACK SQUADRON TOKENS: 4",
		unique: false,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: true
	},
	{
		type: "ship",
		id: "S070",
		gameId: 1,
		set: [
			"71513b"
		],
		name: "Trager",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "During the Compare Results step, you may disable 1 of your Shields to cancel 1 [hit] or [crit] result. \n\nYou cannot deploy this card to the same fleet as \"Assimilated Vessel 64758.\"",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S069",
		gameId: 1,
		set: [
			"71513b"
		],
		name: "Assimilated Vessel 64758",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "When defending, during the Declare Target step, you may spend 1 Drone Token to set 1 of your defense dice on any side that you want.  This die cannot be rolled or re-rolled during that attack.",
		unique: true,
		factions: [
			"dominion",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S068",
		gameId: 1,
		set: [
			"71513b"
		],
		name: "Dominion/Borg Starship",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"borg",
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 28,
		text: "",
		unique: false,
		factions: [
			"dominion",
			"borg"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S067",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Regent's Flagship",
		class: "Negh'var Class (Mirror)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 7,
		shields: 3,
		cost: 32,
		text: "Instead of making a normal attack with your Primary Weapon,  you may fire in any direction at up to 2 enemy ships at Range 1 with 4 attack dice against each ship.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S066",
		gameId: 1,
		set: [
			"71535"
		],
		name: "Mirror Universe Starship",
		class: "Negh'var Class (Mirror)",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 7,
		shields: 2,
		cost: 30,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S065",
		gameId: 1,
		set: [
			"71808"
		],
		name: "Alpha Hunter",
		class: "Hirogen Warship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 26,
		text: "After you move, you may perform a [sensor-echo] Action with the 1 [forward] Maneuver as a free Action, even if you are not Cloaked.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S064",
		gameId: 1,
		set: [
			"71808",
			"73042"
		],
		name: "Hirogen Starship",
		class: "Hirogen Warship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 18,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S063",
		gameId: 1,
		set: [
			"71753"
		],
		name: "Fighter Squadron 6",
		class: "Federation Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron",
			"squadron"
		],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 24,
		text: "ATTACK SQUADRON TOKENS: 5\r\nWhen attacking a ship at Range 1, if that ship has at least 1 damage to its Hull, during the Modify Attack Dice step, add 1 [hit] result to your roll.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: true
	},
	{
		type: "ship",
		id: "S062",
		gameId: 1,
		set: [
			"71753",
			"73041"
		],
		name: "Federation Attack Squadron",
		class: "Federation Attack Squadron",
		actions: [
			"evade",
			"target-lock"
		],
		upgrades: [
			"squadron",
			"squadron"
		],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 20,
		text: "ATTACK SQUADRON TOKENS: 4",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: true
	},
	{
		type: "ship",
		id: "S061",
		gameId: 1,
		set: [
			"71536"
		],
		name: "Prototype 01",
		class: "Romulan Drone Ship",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 3,
		hull: 3,
		shields: 3,
		cost: 24,
		text: "During the End Phase of each round, repair 1 damage to your Hull or Shields (your choice).  This ship may only be assigned Gareb or a Romulan Drone Pilot as its Captain.",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S060",
		gameId: 1,
		set: [
			"71996"
		],
		name: "I.K.S. Pagh",
		class: "K'Vort Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "When attacking, you may convert 1 of your [crit] results into a [hit] result.  If you do so, you may then convert 1 of your blank results into a [hit] result.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S059",
		gameId: 1,
		set: [
			"71793"
		],
		name: "Ogla-Razik",
		class: "Predator Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "All friendly Kazon ships with a Hull value of 4 or less within Range 1-2 of this ship gain +1 defense die.",
		unique: true,
		factions: [
			"kazon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S058",
		gameId: 1,
		set: [
			"71794"
		],
		name: "I.R.W. Haakona",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "When attacking with your Primary Weapon while cloaked, gain +1 attack die for every other Romulan Ship in your fleet (max +4).",
		unique: true,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S057",
		gameId: 1,
		set: [
			"71794"
		],
		name: "Romulan Starship",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 25,
		text: "",
		unique: false,
		factions: [
			"romulan"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S056",
		gameId: 1,
		set: [
			"71797"
		],
		name: "Gornarus",
		class: "Gorn Raider",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 3,
		shields: 4,
		cost: 22,
		text: "When attacking with your Primary Weapon, if you inflict a Critical Damage to an enemy ship's hull, you may search the Damage Deck for a \"Structural Damage\" or a \"Weapons Malfunction\" card instead of drawing a random Damage Card.  Reshuffle the deck when you are done.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S055",
		gameId: 1,
		set: [
			"71798"
		],
		name: "Reklar",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "<b>ACTION:</b> Place a [battlestations] Token beside your ship.  Each time you defend this round, roll +1 defense die.",
		unique: true,
		factions: [
			"dominion"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S054",
		gameId: 1,
		set: [
			"71796"
		],
		name: "Mirror Universe Starship",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 2,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S053",
		gameId: 1,
		set: [
			"71796"
		],
		name: "I.S.S. Enterprise",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "When attacking a ship that you already have target locked, during the Roll Attack Dice step, gain +1 attack die.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S052",
		gameId: 1,
		set: [
			"71997p"
		],
		name: "Federation Starship",
		class: "Type 7 Shuttlecraft",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 1,
		cost: 12,
		text: "",
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S051",
		gameId: 1,
		set: [
			"71997p"
		],
		name: "Sakharov",
		class: "Type 7 Shuttlecraft",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 14,
		text: "At the start of the game, during the Gather Forces Step, you may purchase 1 additional [crew_text] or [tech_text] Upgrade for this ship.  This Upgrade may exceed the ship's restrictions and cost -2 SP (min 0).",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S050",
		gameId: 1,
		set: [
			"71800"
		],
		name: "I.S.S. Avenger",
		class: "Terran NX Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "During the Roll Attack Dice step, if there is an Auxiliary Power Token beside your ship, gain +2 attack dice when attacking with your Primary Weapon.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S049",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Kyana Prime",
		class: "Krenim Weapon Ship",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "<b>ACTION:</b> Roll 3 defense dice.  For every [evade] result, place 1 [evade] Token beside your ship.",
		unique: true,
		factions: [
			"independent",
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S048",
		gameId: 1,
		set: [
			"71998p"
		],
		name: "U.S.S. Hood",
		class: "Excelsior Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "When you initiate an attack against a cloaked ship, roll +1 attack die.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S047",
		gameId: 1,
		set: [
			"71801"
		],
		name: "U.S.S. Pegasus",
		class: "Oberth Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 20,
		text: "All of your [tech_text] Upgrades cost -1 SP.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S046",
		gameId: 1,
		set: [
			"71800"
		],
		name: "Mirror Universe Starship",
		class: "Terran NX Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S045",
		gameId: 1,
		set: [
			"71799"
		],
		name: "Krenim Starship",
		class: "Krenim Weapon Ship",
		actions: [
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 3,
		cost: 28,
		text: "",
		unique: false,
		factions: [
			"independent",
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S044",
		gameId: 1,
		set: [
			"71803"
		],
		name: "Ratosha",
		class: "Bajoran Scout Ship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 18,
		text: "After you move, if your ship is within Range 1 of a friendly ship you may perform a [battlestations] Action as a free Action.",
		unique: true,
		factions: [
			"bajoran"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S043",
		gameId: 1,
		set: [
			"71999p"
		],
		name: "I.K.S. Korinar",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "While you are cloaked, if you initiate an attack at Range 1 with your Primary Weapon, gain +1 attack die for that attack.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S042",
		gameId: 1,
		set: [
			"71999p",
			"71804"
		],
		name: "Klingon Starship",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 2,
		cost: 13,
		text: "",
		unique: false,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S041",
		gameId: 1,
		set: [
			"71802",
			"80000"
		],
		name: "Federation Starship",
		class: "Prometheus Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 8+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 24,
		unique: false,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S040",
		gameId: 1,
		set: [
			"71804"
		],
		name: "I.K.S. Ning'tao",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "After performing a [sensor-echo] Action, you may Come About (reverse direction).  If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S039",
		gameId: 1,
		set: [
			"71802"
		],
		name: "U.S.S. Prometheus",
		class: "Prometheus Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "<b>ACTION:</b> If you performed a [forward] Maneuver this round, immediately perform an additional 1 [forward] or 2 [forward] Maneuver.",
		unique: true,
		factions: [
			"federation"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S038",
		gameId: 1,
		set: [
			"blind_aldara"
		],
		name: "Aldara",
		class: "Cardassian Galor Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "When a ship that started the Activation Phase in your forward firing arc moves, if you have not yet moved, you may immediately change your maneuver. You may only use this ability once per round.",
		unique: true,
		factions: [
			"dominion"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S037",
		gameId: 1,
		set: [
			"72004p"
		],
		name: "Azati Prime",
		class: "Xindi Aquatic Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 3,
		cost: 28,
		text: "When defending, during the Roll Attack Dice step, you may discard a Token from beside your ship ( [evade], [scan], or [battlestations] ) to force the attacking ship to roll 1 less attack die.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S036",
		gameId: 1,
		set: [
			"72004p"
		],
		name: "Xindi Starship",
		class: "Xindi Aquatic Cruiser",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 6,
		shields: 2,
		cost: 26,
		text: "",
		unique: false,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S035",
		gameId: 1,
		set: [
			"blind_belak"
		],
		name: "I.R.W. Belak",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "When defending, you may re-roll 1 of your [battlestations] results. If your ship is cloaked, you may re-roll all of your [battlestations] results.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S034",
		gameId: 1,
		set: [
			"72001p"
		],
		name: "U.S.S. Bellerophon",
		class: "Intrepid Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "When defending, during the Compare Results step, you may disable 2 of your Active Shields to cancel 1 of the attacking ship's [hit] results.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S033",
		gameId: 1,
		set: [
			"72001p",
			"80000"
		],
		name: "Federation Starship",
		class: "Intrepid Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 5+).\n\nCard and model did not come with Star Trek Alliance.",
		alliance: true,
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 28,
		unique: false,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S032",
		gameId: 1,
		set: [
			"72012"
		],
		name: "Bioship Beta",
		class: "Species 8472 Bioship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon",
			"weapon"
		],
		attack: 6,
		agility: 2,
		hull: 5,
		shields: 6,
		cost: 38,
		text: "When defending, during the Compare Results step, you may cancel 1 [hit] result. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"species-8472"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S031",
		gameId: 1,
		set: [
			"blind_bioship"
		],
		name: "Bioship Omega",
		class: "Species 8472 Bioship",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"regenerate"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"weapon",
			"weapon"
		],
		attack: 6,
		agility: 2,
		hull: 5,
		shields: 6,
		cost: 38,
		text: "During the Deal Damage step, if you inflict 2 critical damage to an enemy ship's hull, you may immediately flip those damage cards face down and rotate the damaged ship's facing by 90 degrees (right or left).",
		unique: true,
		factions: [
			"species-8472"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S030",
		gameId: 1,
		set: [
			"blind_buruk"
		],
		name: "I.K.S. Buruk",
		class: "K'Vort Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "When defending, if your ship is not cloaked and there is a friendly ship within Range 1-2 of your ship, you may roll +1 defense die. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S029",
		gameId: 1,
		set: [
			"71805"
		],
		name: "U.S.S. Dauntless",
		class: "Dauntless Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"tech",
			"tech"
		],
		attack: 2,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 26,
		text: "Each time you perform an Action or use an ability on any of your [tech_text] Upgrades, place 1 Mission Token on this card. During the Roll Attack Dice step, you may spend up to 2 of these tokens to gain +1 attack die for that attack for each token spent.",
		unique: true,
		factions: [
			"independent"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S028",
		gameId: 1,
		set: [
			"71805",
			"75004"
		],
		name: "Independent Starship",
		class: "Dauntless Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"tech"
		],
		attack: 2,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 20,
		text: "",
		unique: false,
		factions: [
			"independent"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S027",
		gameId: 1,
		set: [
			"72014"
		],
		name: "Delta Flyer",
		class: "Delta Flyer Class Shuttlecraft",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 2,
		shields: 3,
		cost: 20,
		text: "You may deploy [weapon_text] Upgrades with a cost of 4 SP or less to this ship.\n\nYou may fire your Primary Weapon from your rear firing arc at -1 attack die.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S026",
		gameId: 1,
		set: [
			"72014",
			"72300p"
		],
		name: "Federation Starship",
		class: "Delta Flyer Class Shuttlecraft",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 18,
		text: "You may deploy [weapon_text] Upgrades with a cost of 4 SP or less to this ship.",
		unique: false,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S025",
		gameId: 1,
		set: [
			"72003p"
		],
		name: "Diaspora",
		class: "Xindi Insectoid Starship",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 20,
		text: "During the Roll Attack Dice step, if there is a [battlestations] Token beside your ship, you may discard that Token to re-roll all of your attack dice.",
		unique: true,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S024",
		gameId: 1,
		set: [
			"72003p",
			"72273"
		],
		name: "Xindi Starship",
		class: "Xindi Insectoid Starship",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 1,
		cost: 18,
		text: "",
		unique: false,
		factions: [
			"xindi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S023",
		gameId: 1,
		set: [
			"blind_interceptor8"
		],
		name: "Interceptor 8",
		class: "Bajoran Interceptor",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 0,
		cost: 16,
		text: "When attacking, if your ship is not in the target ship's forward firing arc, add +1 attack die.",
		unique: true,
		factions: [
			"bajoran"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S022",
		gameId: 1,
		set: [
			"72002p"
		],
		name: "U.S.S. Intrepid",
		class: "Constitution Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "When attacking a ship at Range 3, if there is a [scan] Token beside your ship, the defending ship rolls -2 defense dice instead of -1.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S021",
		gameId: 1,
		set: [
			"71806"
		],
		name: "Kreechta",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "When attacking a ship that has damaged Shields, during the Modify Attack Dice step, you may re-roll a number of your Attack dice up to the number of the defending ship's damaged Shields.",
		unique: true,
		factions: [
			"ferengi"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S020",
		gameId: 1,
		set: [
			"blind_lakota"
		],
		name: "U.S.S. Lakota",
		class: "Excelsior Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "When attacking, during the Modify Attack Dice step, you may convert 1 of your [hit] results into 1 [crit] result. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S019",
		gameId: 1,
		set: [
			"blind_nistrim_culluh"
		],
		name: "Nistrim-Culluh",
		class: "Predator Class",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 26,
		text: "When attacking a ship at Range 3, during the Roll Attack Dice step, gain +1 attack die for every friendly ship within Range 1 of your ship (max +2).",
		unique: true,
		factions: [
			"kazon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S017",
		gameId: 1,
		set: [
			"blind_nunks_marauder"
		],
		name: "Nunk's Marauder",
		class: "D'Kora Class",
		actions: [
			"evade",
			"target-lock",
			"scan"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "During the Activation Phase, you may perform a [scan] Action as a free Action. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"ferengi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S016",
		gameId: 1,
		set: [
			"71807"
		],
		name: "U.S.S. Pasteur",
		class: "Olympic Class",
		actions: [
			"evade",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"crew",
			"crew"
		],
		attack: 1,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 22,
		text: "After you perform a maneuver with a speed of 5 or greater, you may immediately perform an [evade] Action as a free Action.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S015",
		gameId: 1,
		set: [
			"71807"
		],
		name: "Mirror Universe Starship",
		class: "Olympic Class",
		actions: [
			"evade",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"crew"
		],
		attack: 1,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 20,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S014",
		gameId: 1,
		set: [
			"72011"
		],
		name: "U.S.S. Phoenix",
		class: "Nebula Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "Before you move, you may change your maneuver to another maneuver on your Maneuver Dial with the same speed. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S013",
		gameId: 1,
		set: [
			"72013"
		],
		name: "Quark's Treasure",
		class: "Ferengi Shuttle",
		actions: [
			"evade",
			"scan"
		],
		upgrades: [
			"tech",
			"crew",
			"crew"
		],
		attack: 2,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 16,
		text: "You do not pay a faction penalty when assigning any [crew_text] or [tech_text] Upgrades to this ship.\nYou do not place an Auxiliary Power Token beside your ship when using the \"Docking\" or \"Launching\" Actions.",
		unique: true,
		factions: [
			"ferengi"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S012",
		gameId: 1,
		set: [
			"72015"
		],
		name: "I.K.S. Rotarran",
		class: "B'Rel Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "<b>ACTION:</b> Perform a 2nd maneuver on your maneuver dial with a speed of 1 or 2. Place an Auxiliary Power Token beside your ship. You cannot attack this round.",
		unique: true,
		factions: [
			"klingon"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S011",
		gameId: 1,
		set: [
			"blind_seleya"
		],
		name: "Seleya",
		class: "D'Kyr Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "When defending, if you have a [scan] Token beside your ship, roll +1 defense die.",
		unique: true,
		factions: [
			"vulcan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S010",
		gameId: 1,
		set: [
			"72016"
		],
		name: "R.I.S. Talvath",
		class: "Romulan Science Vessel",
		actions: [
			"evade",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"tech"
		],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 2,
		cost: 14,
		text: "<b>ACTION:</b> If you are within Range 1-3 of at least 1 enemy ship, roll 3 defense dice. For every [evade] result, place 1 [evade] Token beside your ship. You cannot perform any free Actions this round.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S008",
		gameId: 1,
		set: [
			"72000p"
		],
		name: "I.R.W. Terix",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 4,
		cost: 30,
		text: "After you perform a Green Maneuver, you may immediately perform a [scan] Action as a free Action.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S007",
		gameId: 1,
		set: [
			"72000p"
		],
		name: "Mirror Universe Starship",
		class: "D'deridex Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 3,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 25,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S006",
		gameId: 1,
		set: [
			"72008"
		],
		name: "U.S.S. Thunderchild",
		class: "Akira Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "Each time you defend, if you take no damage from an attack, you may immediately roll 1 attack die. A [hit] or [crit] result damages the attacking ship.",
		unique: true,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S005",
		gameId: 1,
		set: [
			"72008",
			"80001"
		],
		name: "Federation Starship",
		class: "Akira Class",
		actions: [
			"evade",
			"target-lock",
			"scan",
			"battlestations"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew"
		],
		text: "Usable in Star Trek Alliance.\n(Captain Skill 2+).",
		alliance: true,
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 2,
		cost: 21,
		unique: false,
		factions: [
			"federation"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S004",
		gameId: 1,
		set: [
			"blind_tohkaht"
		],
		name: "I.K.S. Toh'Kaht",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "<b>ACTION:</b> Place a [scan] Token and an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: [
			"mirror-universe"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S003",
		gameId: 1,
		set: [
			"blind_tohkaht"
		],
		name: "Mirror Universe Starship",
		class: "Vor'cha Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"crew"
		],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 2,
		cost: 22,
		text: "",
		unique: false,
		factions: [
			"mirror-universe"
		],
		squadron: false
	},
	{
		type: "ship",
		id: "S002",
		gameId: 1,
		set: [
			"72009"
		],
		name: "I.K.S. T'Ong",
		class: "K'T'Inga Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"tech",
			"weapon",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 24,
		text: "When attacking a ship with your Primary Weapon that has a larger Hull value and/or Primary Weapon value than your ship, gain +1 attack die.",
		unique: true,
		factions: [
			"klingon"
		],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S001",
		gameId: 1,
		set: [
			"72010"
		],
		name: "I.R.W. Vrax",
		class: "Valdore Class",
		actions: [
			"evade",
			"target-lock",
			"cloak",
			"sensor-echo"
		],
		upgrades: [
			"weapon",
			"weapon",
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 6,
		shields: 3,
		cost: 30,
		text: "If you reveal a 4 [forward] maneuver, immediately before you move, you may change it to a 4 Bank maneuver. Treat this as a Red Maneuver.",
		unique: true,
		factions: [
			"romulan"
		],
		squadron: false
	}
];
