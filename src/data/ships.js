module.exports = [
	{
		type: "ship",
		id: "S415",
		gameId: 1,
		set: ["75016"],
		name: "U.S.S. Atlas",
		image: "https://i.imgur.com/w2HBtk3.png",
		class: "Sovereign Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 5,
		cost: 29,
		text: "<b>WHENEVER THIS SHIP PERFORMS A</b> [battlestations], [scan], or [evade] <b>ACTION:</b> Target a friendly ship within Range 1-2. \n\n Place a copy of that Token beside the target ship.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S414",
		gameId: 1,
		set: ["75016"],
		name: "U.S.S. Enterprise NCC-1701-E",
		image: "https://i.imgur.com/nIaiEuA.png",
		class: "Sovereign Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 5,
		cost: 29,
		text: "<b>WHEN ATTACKING WITH A TORPEDO [weapon] UPGRADE:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship. \n\n You do not need a [target-lock] to perform that attack. <hr> <b>END PHASE:</b> \n\n You may flip this card over to its other side.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S413",
		gameId: 1,
		set: ["75016"],
		name: "U.S.S. Enterprise NCC-1701-E",
		image: "https://i.imgur.com/uPXW7Km.png",
		class: "Sovereign Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 5,
		shields: 5,
		cost: 29,
		text: "<b>CHECK FOR POWER STRAIN STEP:</b> If you executed a Green Maneuver: \n\n Place an [evade] Token beside this ship and when defending this round, roll +1 defense die <hr> <b>PLANNING PHASE:</b> \n\n You may flip this card over to its other side.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S412",
		gameId: 1,
		set: ["75016"],
		name: "U.S.S. Galaxy",
		image: "https://i.imgur.com/7xeztav.png",
		class: "Galaxy Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "Treat the Captain Skill Number of the <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> Captain with a printed Captain Skill Number of 4 or greater equipped to this ship as 8. <hr> If equipped with a [hook] <b>WHEN DEFENDING:</b> Roll +1 defense die.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S411",
		gameId: 1,
		set: ["75016"],
		name: "U.S.S. Enterprise-D",
		image: "https://i.imgur.com/kfJAuP3.png",
		class: "Galaxy Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "<b>DECLARE TARGET STEP:</b> \n\n You may attack a target with this ship's Primary Weapon at -1 attack dice outside of your <img src='img/text/forward-arc.png' width='18' height='18' title='Front Arc'> at Range 1-2.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S410",
		gameId: 1,
		set: [
			"75016"
		],
		name: "U.S.S. Enterprise-B",
		image: "https://i.imgur.com/xOSU8Lg.png",
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
		cost: 24,
		text: "<b>WHENEVER YOU PERFORM THE ACTION LISTED ON A</b> <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> [crew_text] <b>UPGRADE EQUIPPED TO THIS SIHP:</b> \n\n Place 1 less <img src='img/stuff/effect_time_token.png' width='20' height='16'> Token on that Upgrade.",
		unique: true,
		alliance: false,
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
		id: "S409",
		gameId: 1,
		set: [
			"75016"
		],
		name: "U.S.S. Excelsior",
		image: "https://i.imgur.com/fWS3xTj.png",
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
		cost: 23,
		text: "<b>EACH TIME AN OPPOSING SHIP WITHIN RANGE 1-3 WOULD ACQUIRE A BLUE [target-lock]:</b> \n\n This ship must be the target, if able. Then, remove a Disable Token from a [crew_text] Upgrade equipped to this ship.",
		unique: true,
		alliance: false,
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
		id: "S408",
		gameId: 1,
		set: [
			"75016"
		],
		name: "U.S.S. Enterprise-A",
		image: "https://i.imgur.com/eLou19b.png",
		class: "Constitution Class (Refit)",
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
		text: "<b>WHEN ATTACKING:</b> If there is a [scan] Token beside your ship. \n\n Roll +1 Attack die (+2 if the defending ship is Cloaked) <hr> <b>Planning Phase:</b> If the Captain equipped to this ship has a <img src='img/text/unique.png' width='20' height='20' title='Unique'> <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> [talent_text] Upgrade equipped to it: You may discard that Upgrade. \n\n Equip 1 other <img src='img/text/unique.png' width='20' height='20' title='Unique'> <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> [talent_text] Upgrade with a cost of 4 or less that is not already in your fleet to the Captain and place any Tokens that were on the discarded Upgrade on the new Upgrade.",
		unique: true,
		alliance: false,
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
		id: "S407",
		gameId: 1,
		set: [
			"75016"
		],
		name: "Federation Starship",
		image: "https://i.imgur.com/ogcTJCi.png",
		class: "Constitution Class (Refit)",
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
		cost: 18,
		text: "",
		unique: false,
		alliance: false,
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
		id: "S406",
		gameId: 1,
		set: [
			"75016"
		],
		name: "U.S.S. Enterprise",
		image: "https://i.imgur.com/AEAZk2p.png",
		class: "Constitution Class (Refit)",
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
		cost: 22,
		text: "<b>AFTER THIS SHIP EXECUTES A MANEUVER:</b> \n Gain the following effect based on the Speed of that Maneuver. \n\n <b>3+</b> - Place a [scan] Token beside this ship. \n <b>2 - WHEN ATTACKING WITH PRIMARY WEAPON:</b> Roll +1 attack die. \n <b>1 - WHEN ATTACKING WITH PRIMARY WEAPON: </b> Roll +2 attack dice.",
		unique: true,
		alliance: false,
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
		id: "S405",
		gameId: 1,
		set: [
			"75016"
		],
		name: "Columbia NX-02",
		image: "https://i.imgur.com/6Ni5CUL.png",
		class: "Federation NX Class",
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
		shields: 0,
		cost: 11,
		text: "<b>AFTER USING THE 'ENHANCED HULL PLATING' [hook] CARD:</b> \n\n Remove 1 <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token from beside this ship. <hr> <b>DECLARE TARGET STEP:</b> \n\n You may attack a target with a 'Photonic Torpedoes' [weapon] Upgrade at +1 attack dice ignoring any Firing Arcs. If you do, you must discard that Upgrade.",
		unique: true,
		alliance: false,
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
		id: "S404",
		gameId: 1,
		set: [
			"75016"
		],
		name: "Enterprise NX-01",
		image: "https://i.imgur.com/Rn2gJnL.png",
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
		cost: 12,
		text: "You may equip the 'Federation Prototype [hook] card ignoring it's restrictions and even if this ship has a different [hook] equipped. <hr> This ship may still perform any Actions listed on the <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> Captain and/or each <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> [crew_text] Upgrade equipped to this ship despite the presence of any <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Tokens beside it.",
		unique: true,
		alliance: false,
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
		id: "S403",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Hirogen Starship",
		image: "https://i.imgur.com/fnuw3RG.png",
		class: "Hirogen Warship",
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
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 18,
		text: "",
		alliance: false,
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
		id: "S402",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Alpha Hunter",
		image: "https://i.imgur.com/MFiNmvr.png",
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
		cost: 23,
		text: "<b>AFTER MOVING:</b> \n\n This ship may perform a [sensor-echo] Action as a Free Action.",
		unique: true,
		alliance: false,
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
		id: "S401",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Relic Stalker",
		image: "https://i.imgur.com/vmBDSb9.png",
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
			"crew",
			"crew"
		],
		attack: 4,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 23,
		text: "<b>AFTER MOVING:</b> If you are within Range 1-3 of an opposing ship: \n\n You may place a [battlestations] Token beside this ship.",
		unique: true,
		alliance: false,
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
		id: "S400",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Vidiian Starship",
		image: "https://i.imgur.com/G5omlHB.png",
		class: "Vidiian Battle Cruiser",
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
		agility: 2,
		hull: 5,
		shields: 2,
		cost: 21,
		text: "",
		alliance: false,
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
		id: "S399",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Fina Prime",
		image: "https://i.imgur.com/5XRe70R.png",
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
		text: "<b>ACTION:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship and target an opposing ship within range 1 - 2. \n\n Destroy 1 Shield on the target ship.",
		unique: true,
		alliance: false,
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
		id: "S398",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Honatta Prime",
		image: "https://i.imgur.com/NoiYRgH.png",
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
		text: "<b>WHEN ATTACKING: MODIFY ATTACK DICE STEP:</b> \n\n You may convert 1 [blank] into 1 [hit] for each [crew_text] Upgrade equipped to the defending ship.",
		unique: true,
		alliance: false,
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
		id: "S397",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Nasari Starship",
		image: "https://i.imgur.com/GDuJYqO.png",
		class: "Nerada-Type",
		actions: [
			"evade",
			"scan",
			"battlestations"
		],
		upgrades: [
			"tech",
			"weapon"
		],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 14,
		text: "",
		alliance: false,
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
		id: "S396",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Nerada",
		image: "https://i.imgur.com/VB7wdTN.png",
		class: "Nerada-Type",
		actions: [
			"evade",
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
		shields: 3,
		cost: 18,
		text: "<b>WHEN ATTACKING: MODIFY ATTACK DICE STEP:</b> If the defending ship is in the <img src='img/text/forward-arc.png' width='20' height='20'> of a Friendly ship that is within Range 1 of this ship: \n\n Add 1 [hit].",
		unique: true,
		alliance: false,
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
		id: "S395",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Numiri Starship",
		image: "https://i.imgur.com/SoOv5Xz.png",
		class: "Numiri Patrol Ship",
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
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 2,
		cost: 22,
		text: "",
		alliance: false,
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
		id: "S394",
		gameId: 1,
		set: [
			"75015"
		],
		name: "Antares Shadow",
		image: "https://i.imgur.com/xocJwxx.png",
		class: "Numiri Patrol Ship",
		actions: [
			"evade",
			"target-lock",
			"battlestations"
		],
		upgrades: [
			"tech",
			"tech",
			"weapon",
			"crew"
		],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 3,
		cost: 24,
		text: "<b>WHEN ATTACKING: ROLL ATTACK DICE STEP:</b> If the defending ship has a Hull Value less than this ship: \n\n Roll +1 attack die.",
		unique: true,
		alliance: false,
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
		id: "S393",
		gameId: 1,
		set: [
			"75014"
		],
		name: "Delta Flyer II",
		image: "https://i.imgur.com/lKFLr8o.png",
		class: "Delta Flyer Class",
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
		cost: 12,
		text: "<b>WHEN THIS SHIP PERFORMS A</b> [target-lock] <b>OR</b> [evade] <b>ACTION:</b> \n\n You may perform a [sensor-echo] Action as a Free Action even if this ship is not cloaked, then place a [battlestations] Token beside this ship.",
		unique: true,
		alliance: false,
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
		id: "S392",
		gameId: 1,
		set: [
			"75014"
		],
		name: "Federation Starship",
		image: "https://i.imgur.com/bGYpwoL.png",
		class: "Delta Flyer Class",
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
		cost: 11,
		text: "",
		unique: false,
		alliance: false,
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
		id: "S391",
		gameId: 1,
		set: [
			"75014"
		],
		name: "Delta Flyer",
		image: "https://i.imgur.com/DmtJiIL.png",
		class: "Delta Flyer Class",
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
		cost: 12,
		text: "<b> WHEN ATTACKING WITH YOUR PRIMARY WEAPON:</b> \n\n You may fire out of your <img src='img/text/rear-arc.png' width='20' height='20'> at -1 attack dice.",
		unique: true,
		alliance: false,
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
		id: "S390",
		gameId: 1,
		set: [
			"75014"
		],
		name: "Federation Starship",
		image: "https://i.imgur.com/FOsDRQn.png",
		class: "Aerie Class",
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
		cost: 7,
		text: "",
		unique: false,
		alliance: false,
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
		id: "S389",
		gameId: 1,
		set: ["75014"],
		name: "U.S.S. Raven",
		image: "https://i.imgur.com/BN8vhV0.png",
		class: "Aerie Class",
		actions: ["evade", "scan"],
		upgrades: ["tech", "tech", "crew"],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 3,
		cost: 10,
		text: "<b> COMBAT PHASE:</b> Target an opposing ship within Range 1. \n\n The target ship cannot attack this ship this game round. If the target ship is the only opposing ship in play, then it rolls -3 attack dice against this ship this game round instead.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S388",
		gameId: 1,
		set: [
			"75014"
		],
		name: "U.S.S. Nova",
		image: "https://i.imgur.com/UvzBWDn.png",
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
		cost: 13,
		text: "This ship does not skip it's Perform Action Step when overlapping an Obstacle. <hr> <b>FREE ACTION:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship and target each friendly ship within Range 1. \n\n Place a [scan] Token beside this ship and each target ship.",
		unique: true,
		alliance: false,
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
		id: "S387",
		gameId: 1,
		set: [
			"75014"
		],
		name: "U.S.S. Equinox",
		image: "https://i.imgur.com/7ex35W1.png",
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
		cost: 13,
		text: "This ship does not skip it's Perform Action Step when overlapping an Obstacle. <hr> <b>REVEAL DIAL STEP:</b> Target another Ship within Range 1. \n\n You may discard a [crew_text] Upgrade equipped to the target ship. If you do, increase the speed of this ship's revealed Maneuver by 2 and this ship suffers 1 damage.",
		unique: true,
		alliance: false,
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
		id: "S386",
		gameId: 1,
		set: ["75014"],
		name: "U.S.S. Intrepid NCC-74600",
		image: "https://i.imgur.com/G6oMrmA.png",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "tech", "weapon", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 25,
		text: "The 'Bio-Neural Circuitry' and 'Variable Geometry Pylons' [tech_text] Upgrades equipped to this ship cost -1 SP. <hr> <b>PLANNING PHASE:</b> Target a cloaked opposing ship within Range 1-2, if that ship is <img src='img/text/faction-romulan.png' width='20' height='20' title='Romulan'> you may choose one additional target. \n\n The Target(s) can only use a 1 [straight] Template when performing a [sensor-echo] Action this game round.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S385",
		gameId: 1,
		set: ["75014"],
		name: "U.S.S. Voyager",
		image: "https://i.imgur.com/6IiM65P.png",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 25,
		text: "<b>FLEET CONSTRUCTION:</b> You may reduce the cost of any number of Upgrades equipped to this ship by -2 SP. For each Upgrade reduced this way, suffer 1 damage at the start of the game (to either Shields or Hull, players choice).",
		unique: true,
		alliance: false,
		factions: ["federation", "mirror-universe"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S384",
		gameId: 1,
		set: ["75014"],
		name: "U.S.S. Voyager",
		image: "https://i.imgur.com/IvmlLyD.png",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 26,
		text: "<b>DECLARE TARGET STEP:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship. \n\n You may attack a target with this ship's Primary Weapon outside of your <img src='img/text/forward-arc.png' width='20' height='20'> at Range 1-2.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},
	{
		type: "ship",
		id: "S383",
		gameId: 1,
		set: ["75014"],
		name: "U.S.S. Voyager",
		image: "https://i.imgur.com/b0HTnnZ.png",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 25,
		text: "<b>ACTION:</b> \n Increase this ship's Agility Value by 1 this game round and repair 1 Hull or Shield on this ship. If there are no friendly ships within Range 1-2, this is a Free Action instead.",
		unique: true,
		alliance: false,
		factions: ["federation"],
		intercept: {
			ship: {},
			fleet: {}
		},
		squadron: false
	},

	{
		type: "ship",
		id: "S381",
		gameId: 2,
		set: [
			"80002"
		],
		name: "Dominion Starship",
		class: "Jem'Hadar Battle Cruiser",
		image: "https://i.imgur.com/1CatRst.png",
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
		cost: 27,
		text: "",
		unique: false,
		alliance: true,
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
		id: "S380",
		gameId: 2,
		set: [
			"80002"
		],
		name: "Dominion Starship",
		class: "Cardassian Galor Class",
		image: "https://i.imgur.com/LN9WIVV.png",
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
		alliance: true,
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
		id: "S379",
		gameId: 2,
		set: [
			"80002"
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
		alliance: true,
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
		id: "S378",
		gameId: 2,
		set: [
			"80002"
		],
		name: "Klingon Starship",
		class: "K'Vort Class",
		image: "https://i.imgur.com/HiqU2RV.png",
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
		alliance: true,
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
		id: "S377",
		gameId: 1,
		set: [
			"75013"
		],
		name: "U.S.S. Da Vinci",
		class: "Saber Class",
		image: "https://i.imgur.com/hzJJ3mt.png",
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
		text: "<b>COMBAT PHASE:</b> If there is a [scan] Token beside this ship: Target an opposing ship within Range 1-2. \n\n Place 1 <img src='img/stuff/effect_time_token.png' width='20' height='16'> Token on the target's ship card. You may spend that [scan] Token beside this ship and disable 1 [weapon_text] Upgrade equipped to the target ship.",
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
		image: "https://i.imgur.com/7Gubh8H.png",
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
		image: "https://i.imgur.com/OkBzfHN.png",
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
		text: "<b>WHEN A FRIENDLY <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> SHIP WITHIN RANGE 1 IS ATTACKING:</b>\n That friendly ship may roll +1 attack die. If that friendly ship is a <img src='img/text/fed-sovereign.png' width='18' height='18' title='Sovereign Class'> it may also add 1 [hit]. If the defending ship is a <img src='img/text/faction-borg.png' width='20' height='20' title='Borg'> ship, that friendly ship may also convert either 1 [blank] or [battlestations] into 1 [crit].",
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
		image: "https://i.imgur.com/LlwBF8E.png",
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
		image: "https://i.imgur.com/yUiLT8K.png",
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
		text: "<b>WHEN DEFENDING:</b>\n You may re-roll 1 [blank]. If the attacking ship is a Capital Ship, you may also add an [evade]. \n<hr> <b>WHEN ATTACKING A <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> SHIP:</b>\nRoll -2 attack dice.\nPlace 1 <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside the defending ship.",
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
		image: "https://i.imgur.com/xBNN5sR.png",
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
		set: ["75013"],
		name: "U.S.S. Cerberus",
		class: "Prometheus Class",
		image: "https://i.imgur.com/IkFcUoq.png",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "tech", "weapon", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 27,
		text: "<b>WHEN ATTACKING WITH A <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> [weapon_text] UPGRADE:</b> \n\n Convert 1 [battlestations] into 1 [hit]. If the defending ship is a <img src='img/text/faction-dominion.png' width='20' height='20' title='Dominion'> ship, convert 1 [battlestations] into 1 [crit] instead.",
		unique: true,
		factions: ["federation"],
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
		set: ["75013"],
		name: "Federation Starship",
		class: "Prometheus Class",
		image: "https://i.imgur.com/LckS2NG.png",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "tech", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 24,
		text: "",
		unique: false,
		factions: ["federation"],
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
		set: ["75013"],
		name: "U.S.S. Prometheus",
		class: "Prometheus Class",
		image: "https://i.imgur.com/G6F8x0q.png",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "tech", "weapon", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 28,
		text: "If this ship is equipped with the 'Federation Prototype' [hook], <img src='img/text/fed-prometheus.png' width='18' height='18' title='Prometheus Class'> Restricted Upgrades equipped to this ship cost -2 SP and cannot be affected by opposing Upgrades.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/YZCjANG.png",
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
		image: "https://i.imgur.com/xpbHAVg.png",
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
		image: "https://i.imgur.com/Pxumlx4.png",
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
		image: "https://i.imgur.com/fp2wciP.png",
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
		image: "https://i.imgur.com/9CTd49F.png",
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
		text: "<b>COMBAT PHASE:</b> Target an opposing ship and a friendly ship each within Range 1-2. \n\n You may discard a [battlestations], [evade], or [scan] Token beside the target opposing ship, then place a Token of the same type beside the target friendly ship.",
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
		image: "https://i.imgur.com/ObpwEor.png",
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
		text: "<b>WHEN DEFENDING</b> \n\n You may re-roll 1 of your defense dice. If this ship is cloaked, you may re-roll any of your defense dice.",
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
			"75012",
			"80003"
		],
		name: "Romulan Starship",
		class: "D'deridex Class",
		image: "https://i.imgur.com/uolfK2a.png",
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
		image: "https://i.imgur.com/2b4IXyY.png",
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
		text: "<b>AFTER AN OPPOSING SHIP WITHIN RANGE 1-3 PERFORMS AN ACTION:</b>\nIf this ship is cloaked.\n\n You may perform an additional [sensor-echo] Action as a Free Action this round or place a [battlestations] Token beside this ship. If that ship is a <img src='img/text/faction-dominion.png' width='18' height='18'> ship, you may do both.",
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
		image: "https://i.imgur.com/LrW9TgK.png",
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
		image: "https://i.imgur.com/3yWHzKQ.png",
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
		text: "<b>WHEN ATTACKING</b>: If this ship is cloaked: Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship. \n\nDo not flip your [cloak] Token to its red side.",
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
		image: "https://i.imgur.com/YDaaEzi.png",
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
		text: "<b>ACTIVATION PHASE:</b> Target a friendly ship within Range 1-2 that has an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside it and place 2 <img src='img/stuff/effect_time_token.png' width='20' height='16'> Tokens on a [crew_text] Upgrade equipped to this ship.\n\n The target ship does not skip its Perform Action Step this game round.",
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
		image: "https://i.imgur.com/R1t8t3T.png",
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
		text: "<b>FREE ACTION:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship and target all friendly <img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> ships with a Hull Value of 3 or less within Range 1-2.\n\n The target ships roll +2 defense dice and may convert 1 [blank] into 1 [battlestations] the next time they defend this game round.",
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
		image: "https://i.imgur.com/acFczGD.png",
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
		text: "<img src='img/text/faction-federation.png' width='20' height='20' title='Federation'> [weapon_text] Upgrades equipped to this ship cost -1 SP.\n<hr> <b>WHEN ATTACKING WITH A PHOTON TORPEDOS UPGRADE, DURING THE MODIFY ATTACK DICE STEP:</b>\n\n Destroy 1 Active Shield on the defending ship.",
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
		image: "https://i.imgur.com/CcnvMGR.png",
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
		text: "",
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
		image: "https://i.imgur.com/b1ys7km.png",
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
		text: "You may equip a <img src='img/text/faction-klingon.png' width='20' height='20' title='Klingon'> [tech_text] Upgrade with a printed cost of 4 SP or less to this ship for free, even if it exceeds this ship's retrictions.",
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
		image: "https://i.imgur.com/FN8Jytz.png",
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
		text: "<b>WHEN ATTACKING A SHIP WITH A HULL OF 4 OR GREATER:</b> \n\n Steal a [scan] Token, a [battlestations] Token, or an [evade] Token from beside the defending ship and place it beside this ship.\n<hr> <b>WHEN ATTACKING A <img src='img/text/faction-klingon.png' width='20' height='20' title='Klingon'> SHIP OR A SHIP WITH A <img src='img/text/faction-klingon.png' width='20' height='20' title='Klingon'> CAPTAIN EQUIPPED TO IT: \n\n </b> Add 1 [hit]. ",
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
		image: "https://i.imgur.com/bYe5lqL.png",
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
		image: "https://i.imgur.com/VAm2t0O.png",
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
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked, disable a <img src='img/text/faction-klingon.png' width='20' height='20' title='Klingon'> [crew_text] Upgrade equipped to this ship \n\n Do not flip this ship's [cloak] Token to its red side and place a [battlestations] Token beside this ship.",
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
		image: "https://i.imgur.com/wlWWvxD.png",
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
		image: "https://i.imgur.com/alJ4LJQ.png",
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
		image: "https://i.imgur.com/YbnuNBv.png",
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
		text: "<b>COMBAT PHASE:</b> If this ship is cloaked:\n\n Place a [battlestations],[scan],OR [evade] Token beside this ship OR increase the Captain Skill of the Captain equipped to this ship by 3 this Combat Phase",
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
		image: "https://i.imgur.com/MTJm2bX.png",
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
		text: "<b>ACTION:</b> \n\n All other friendly <img src='img/text/faction-dominion.png' width='20' height='20' title='Dominion'> ships within Range 1-2 may perform an Action on their Action Bar as a Free Action.",
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
		image: "https://i.imgur.com/6tfWdU4.png",
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
		text: "If there are only <img src='img/text/faction-dominion.png' width='20' height='20' title='Dominion'> and/or <img src='img/text/faction-romulan.png' width='20' height='20' title='Romulan'> cards equipped to this ship, add the [cloak] and [sensor-echo] Actions to this ship's Action Bar.\n<hr> <b>WHEN A FRIENDLY SHIP WITHIN RANGE 1 PERFORMS THE CLOAK ACTION:</b> \n\n This ship may perform the [cloak] Action as a Free Action.",
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
		image: "https://i.imgur.com/uDMmCh8.png",
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
		text: "All friendly <img src='img/text/faction-dominion.png' width='20' height='20' title='Dominion'> ships within Range 1 roll +1 attack die.",
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
		image: "https://i.imgur.com/WwcewLV.png",
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
		image: "https://i.imgur.com/plrTehK.png",
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
		text: "<b>WHEN ATTACKING:</b> During the Modify Attack Dice Step, if there is a [scan] Token beside this ship.\n\n Convert up to 2 [battlestations] into 1 [hit] each.",
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
		image: "https://i.imgur.com/0Zn9OI0.png",
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
		text: "<b>COMBAT PHASE:</b> Spend a [scan] Token from beside this ship.\n\n The next attack this ship makes with its Primary Weapon this game round ignores the defending ship's Shields.",
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
		set: ["75008"],
		name: "U.S.S. Intrepid",
		class: "Constitution Class",
		image: "https://i.imgur.com/WFht5uv.png",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew"],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 20,
		text: "<b>FREE ACTION:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside this ship and target a friendly ship within Range 1-2.\n\nPlace a [scan] Token and an [evade] Token beside this ship and target ship.",
		unique: true,
		factions: ["federation", "vulcan"],
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
		image: "https://i.imgur.com/CDC98WP.png",
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
		text: "All <img src='img/text/faction-vulcan.png' width='20' height='20' title='Vulcan'> Captains, Admirals, and [crew_text] Upgrades equipped to this ship cost -1 SP.\n<hr> <b>WHEN THIS SHIP PERFORMS A [scan] ACTION:</b> \n\nPlace an additional [scan] Token beside this ship.",
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
		image: "https://i.imgur.com/pjRNaHW.png",
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
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked:  This ship rolls +1 attack die this attack.\n<hr> <b>WHEN ATTACKING: </b> If this ship is not within the Primary Firing Arc of the defending ship.  \n\n Convert 1 [battlestations] into 1 [crit] and all other [battlestations] into [hit].",
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
		image: "https://i.imgur.com/YOeK9ch.png",
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
		image: "https://i.imgur.com/NxunlKv.png",
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
		text: "<b>BEFORE THIS SHIP REVEALS ITS MANEUVER DIAL:</b> If this ship is Cloaked: \n\nPerform a 1 <img src='img/stuff/maneuver_bank_left_white.png' width='20' height='20'>, 1 <img src='img/stuff/maneuver_straight_white.png' width='20' height='20'>, 1 <img src='img/stuff/maneuver_bank_right_white.png' width='20' height='20'>, OR perform a [sensor-echo] Action as a Free Action.",
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
		image: "https://i.imgur.com/jpM7JjD.png",
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
		text: "You do not pay a faction penalty for cards equipped to this ship.\n<hr> All [tech_text] Upgrades equipped to this ship cost -1 SP.",
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
		image: "https://i.imgur.com/48ZfmOY.png",
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
		image: "https://i.imgur.com/XU2atpz.png",
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
		set: ["75007"],
		name: "U.S.S. Voyager",
		class: "Intrepid Class",
		image: "https://i.imgur.com/2wANriO.png",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["borg", "tech", "weapon", "crew", "crew"],
		attack: 5,
		agility: 2,
		hull: 4,
		shields: 6,
		cost: 34,
		text: "<b>FREE ACTION:</b> If this ship performed a Green Maneuver this game round:\n\n Perform a  [target-lock] Action as a Free Action",
		unique: true,
		factions: ["federation", "borg"],
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
		set: ["75007"],
		name: "Federation/Borg Starship",
		class: "Intrepid Class",
		image: "https://i.imgur.com/Bmtwp6t.png",
		actions: ["evade", "target-lock", "scan", "regenerate"],
		upgrades: ["borg", "tech", "weapon", "crew"],
		attack: 5,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 29,
		text: "",
		unique: false,
		factions: ["federation", "borg"],
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
		image: "https://i.imgur.com/dEGGuCR.png",
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
		id: "S199",
		gameId: 1,
		set: [
			"75006"
		],
		name: "Federation Starship",
		class: "Constitution Class",
		image: "https://i.imgur.com/o6VbAgw.png",
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
		id: "S317",
		gameId: 1,
		set: [
			"75006"
		],
		name: "U.S.S. Enterprise",
		class: "Constitution Class",
		image: "https://i.imgur.com/rz4t7lH.png",
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
		image: "https://i.imgur.com/5G43FEB.png",
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
		text: "You may equip a [crew_text] Upgrade as the Captain of this ship. If you do, it counts as a Captain instead of a [crew_text] Upgrade and its Captain Skill is its Printed SP Cost +3.\n<hr> You may not equip an Admiral Card to this ship.",
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
		image: "https://i.imgur.com/n7e94Ty.png",
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
		image: "https://i.imgur.com/1PWbvIK.png",
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
		text: "<b>WHEN A FRIENDLY SHIP WITHIN RANGE 1 IS DEFENDING:</b> \n\n The friendly ship may roll +1 defense die. If that friendly ship is an <img src='img/text/ind-andorian.png' width='18' height='18' title='Andorian Battle Crusier'>, it may also convert one [blank] result into one [evade] result. If the attacking ship is a <img src='img/text/faction-vulcan.png' width='20' height='20' title='Vulcan'> Ship, that friendly ship may also add one [evade].",
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
		image: "https://i.imgur.com/1OyzXC1.png",
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
		text: "You may equip the Inertial Compensators Upgrade to this ship for free and without requiring an Upgrade Slot.\n<hr> <b>WHEN ATTACKING:</b> If the defending ship is hit: \n\n Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> token beside the defending ship.",
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
		image: "https://i.imgur.com/44SrrR1.png",
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
		image: "https://i.imgur.com/3MVOIKh.png",
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
		image: "https://i.imgur.com/gLLoPB7.png",
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
		image: "https://i.imgur.com/w9xAMCn.png",
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
		image: "https://i.imgur.com/LyHz09o.png",
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
		image: "https://i.imgur.com/uswQYeD.png",
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
		set: ["73041"],
		name: "Fighter Squadron 1",
		image: "https://i.imgur.com/DpdpQA0.png",
		class: "Federation Attack Squadron",
		actions: ["evade", "target-lock"],
		upgrades: ["squadron", "squadron", "squadron"],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 24,
		text: "ATTACK SQUADRON TOKENS: 5\r\n<b>ACTION:</b> Place 3 <img src='img/stuff/effect_time_token.png' width='20' height='16'> Tokens on this card.\n\nEquip a [squadron_text] Upgrade that was discarded from this Attack Squadron to this Attack Squadron.",
		unique: true,
		factions: ["federation"],
		squadron: true
	},
	{
		type: "ship",
		id: "S304",
		gameId: 1,
		set: ["73041"],
		name: "Fighter Squadron 3",
		image: "https://i.imgur.com/7G8l0DI.png",
		class: "Federation Attack Squadron",
		actions: ["evade", "target-lock"],
		upgrades: ["squadron", "squadron", "squadron"],
		attack: 5,
		agility: 0,
		hull: 1,
		shields: 1,
		cost: 24,
		text: "ATTACK SQUADRON TOKENS: 5\r\n<b>ACTION:</b> Place 2 <img src='img/stuff/effect_time_token.png' width='20' height='16'> Tokens on this card.\nPerform an [sensor-echo] action using a 1 [straight] Maneuver Template as a Free Action, even if this Attack Squadron is not Cloaked.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/zhH1NsB.png",
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
		text: "<b>AFTER THIS SHIP DEALS NO DAMAGE WITH AN ATTACK:</b> Target the defending ship. \n\nPlace a [battlestations] Token beside this ship and perform a  [target-lock] Action as a free Action on the target ship.",
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
		image: "https://i.imgur.com/NTbHqiN.png",
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
		text: "<b>AFTER THIS SHIP PERFORMS A   </b>[target-lock]<b> ACTION:</b> Target a friendly Jem'Hadar Attack Ship within Range 1.\n\nThe target ship may perform a   [target-lock] Action as a Free Action.",
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
		image: "https://i.imgur.com/nA3MhxG.png",
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
		image: "https://i.imgur.com/MzNSrze.png",
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
		image: "https://i.imgur.com/Ptghpqi.png",
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
		text: "<b>COMBAT PHASE:</b> If there is an opposing ship in the Primary Firing Arc of this ship and the Primary Firing Arc of another <img src='img/text/faction-ferengi.png' width='20' height='20' title='Ferengi'> ship with a <img src='img/text/faction-ferengi.png' width='20' height='20' title='Ferengi'> Captain equipped to it, target that friendly ship.  \n\nThis ship attack first this game round and the target ship attacks second this game round.",
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
		image: "https://i.imgur.com/2KrKfao.png",
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
		image: "https://i.imgur.com/4MerFZL.png",
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
		text: "<b>ACTION:</b> Target a [tech_text] or [weapon_text] Upgrade equipped to an opposing ship within Range 1-2.\n\nEach player rolls 5 attack dice. If you roll more [battlestations] than the controller of the target Upgrade, steal the target Upgrade even if it exceeds this ships restrictions.",
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
		image: "https://i.imgur.com/zE4CHWC.png",
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
		image: "https://i.imgur.com/HUAjF19.png",
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
		image: "https://i.imgur.com/HpB7YCA.png",
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
		image: "https://i.imgur.com/Z4aWuju.png",
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
		text: "<b>ACTIVATION PHASE:</b> After this ship executes a Green Maneuver, place 2 <img src='img/stuff/effect_time_token.png' width='20' height='16'> Tokens on this card.\n\n Remove a Disable Token from 1 Upgrade equipped to this ship or equip a <img src='img/text/faction-ferengi.png' width='20' height='20' title='Ferengi'> Upgrade that was discarded from this ship to this ship.",
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
		image: "https://i.imgur.com/4XrDGUg.png",
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
		image: "https://i.imgur.com/pERNymu.png",
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
		image: "https://i.imgur.com/1CatRst.png",
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
		cost: 27,
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
		image: "https://i.imgur.com/TaLPIbD.png",
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
		image: "https://i.imgur.com/aTyvE77.png",
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
		image: "https://i.imgur.com/ylP6tKR.png",
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
		text: "<b>WHEN ATTACKING:</b> If this ship is Cloaked, place an <img src='img/stuff/effect_auxilary.png' width='18' height='16'> Token beside it.\n\nDisable up to 2 Shields on the defending ship.",
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
		image: "https://i.imgur.com/uolfK2a.png",
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
		image: "https://i.imgur.com/NYnshHm.png",
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
		text: "<b>COMBAT PHASE:</b> After this ship attacks:\n\nThis ship may perform a 2 <img src='img/stuff/maneuver_bank_left_green.png' width='20' height='20'> or 2 <img src='img/stuff/maneuver_bank_right_green.png' width='20' height='20'> Maneuver.",
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
		image: "https://i.imgur.com/rGhZi1j.png",
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
		text: "<b>ACTIVATION PHASE:</b> Place 2 <img src='img/stuff/effect_time_token.png' width='20' height='16' title='Time Token'> Tokens on this card and target a friendly <img src='img/text/faction-romulan.png' width='20' height='20' title='Romulan Faction'> ship within Range 1.\n\nThe target ship may perform an Action as a Free Action.",
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
		image: "https://i.imgur.com/miZ7k7Q.png",
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
		image: "https://i.imgur.com/lNXEbNZ.png",
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
		image: "https://i.imgur.com/8jzC0UF.png",
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
			"2017core"
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
		text: "",
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
		set: ["2017core"],
		name: "U.S.S. Sutherland",
		image: "https://i.imgur.com/d19utFF.png",
		class: "Nebula Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 23,
		text: "\n<b>WHEN DEFENDING:</b>\n\nCancel 1 [hit]",
		unique: true,
		factions: ["federation"],
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
			"72011"
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
		text: "",
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
		image: "https://i.imgur.com/VpvDyEC.png",
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
		text: "",
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
		image: "https://i.imgur.com/V7tqAKg.png",
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
		text: "<b>PLANNING PHASE:</b> Place an <img src='img/stuff/effect_auxilary.png' width='18' height='16' title='AUX Power Token'> Token beside this ship.\n\n Remove 1 <img src='img/stuff/effect_time_token.png' width='18' height='16' title='Time Token'> Token from each [tech_text] Upgrade equipped to this ship. <hr> This ship may only be assigned Gareb or a Romulan Drone Pilot as its Captain.",
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
		image: "https://i.imgur.com/4x0L5G5.png",
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
		image: "https://i.imgur.com/id8Z0nS.png",
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
		image: "https://i.imgur.com/6N4gQTF.png",
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
		text: "<b>WHEN THIS SHIP WOULD BE DESTROYED:</b> \n\nThe attacking ship must discard one [crew_text] Upgrade. If it can't, place an <img src='img/stuff/effect_auxilary.png' width='18' height='16' title='AUX Power Token'> Token beside this ship.",
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
			"71801"
		],
		name: "Federation Starship",
		image: "https://i.imgur.com/Xb4s3gM.png",
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
		text: "",
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
		image: "https://i.imgur.com/ADh2mo4.png",
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
		image: "https://i.imgur.com/66a5T1g.png",
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
		image: "https://i.imgur.com/Fq5aQzr.png",
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
		image: "https://i.imgur.com/DtVgQHB.png",
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
		text: "During the Roll Attack Dice or Roll Defence Dice step of the Combat Phase, you may switch an [evade], [scan], or  [target-lock] Token that is beside your ship for a [battlestations] Token.",
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
		image: "https://i.imgur.com/9WPo8T3.png",
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
		image: "https://i.imgur.com/uvm3ZeQ.png",
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
		image: "https://i.imgur.com/35B6a31.png",
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
		image: "https://i.imgur.com/WvSOP7b.png",
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
		image: "https://i.imgur.com/QJqu8Io.png",
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
		image: "https://i.imgur.com/KzSbQoh.png",
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
		image: "https://i.imgur.com/VjPAF7K.png",
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
		image: "https://i.imgur.com/Xk8r6ML.png",
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
		image: "https://i.imgur.com/ESrWoZC.png",
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
		set: ["72253"],
		name: "U.S.S. Venture",
		image: "https://i.imgur.com/wcDY4qL.png",
		class: "Galaxy Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 4,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 28,
		text: "If you attack a ship that is in the forward firing arc of another friendly ship, you gain +1 attack die.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/XmKcvQH.png",
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
		image: "https://i.imgur.com/7OqNVbp.png",
		class: "Constitution Class (Refit)",
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
		text: "When attacking, during the Roll Attack Dice step, if there is a [scan] Token beside your ship gain +1 attack die (+2 if the defending ship is Cloaked).",
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
		image: "https://i.imgur.com/ljr49KV.png",
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
		image: "https://i.imgur.com/QYzhEE7.png",
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
		image: "https://i.imgur.com/4qavYDh.png",
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
		image: "https://i.imgur.com/J8r2gfT.png",
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
		image: "https://i.imgur.com/uwboWTm.png",
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
		image: "https://i.imgur.com/0Trj0Y2.png",
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
		set: ["72235p"],
		name: "U.S.S. Reliant",
		image: "https://i.imgur.com/WwNLPw7.png",
		class: "Miranda Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["weapon", "weapon", "crew", "crew"],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "When attacking with your Primary Weapon, during the Modify Attack Dice step, you may disable any number of your Active Shields to re-roll a number of your attack dice equal to the number of Shields you disabled.",
		unique: true,
		factions: ["independent"],
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
		image: "https://i.imgur.com/BWGb4EI.png",
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
		image: "https://i.imgur.com/14aHwRu.png",
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
		image: "https://i.imgur.com/7Dey98j.png",
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
		image: "https://i.imgur.com/9vjcpE4.png",
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
		image: "https://i.imgur.com/SvWzcGh.png",
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
		set: ["72231"],
		name: "U.S.S. Montgolfier",
		image: "https://i.imgur.com/O5qf7El.png",
		class: "Saber Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew"],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "If your ship has an opposing ship target locked, during the Activation Phase, you may switch the target lock to a different ship within Range 1-3 as a free Action.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/We7gicl.png",
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
		image: "https://i.imgur.com/pfuG3GV.png",
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
		image: "https://i.imgur.com/iaTY1S2.png",
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
		cost: 21,
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
		iamge: "https://i.imgur.com/54pAjuO.png",
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
		cost: 17,
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
		name: "I.R.W. T'Met",
		image: "https://i.imgur.com/jN2Z0cG.png",
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
		image: "https://i.imgur.com/uolfK2a.png",
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
		image: "https://i.imgur.com/CefMKwD.png",
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
		image: "https://i.imgur.com/vYHaYPU.png",
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
		image: "https://i.imgur.com/tO37kht.png",
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
		image: "https://i.imgur.com/Lbk4sDe.png",
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
		set: ["71221"],
		name: "U.S.S. Valiant",
		image: "https://i.imgur.com/Mr6fQRe.png",
		class: "Defiant Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 4,
		cost: 24,
		text: "When attacking with Photon Torpedoes during the Roll Attack Dice step, you may discard the Photon Torpedoes Upgrade to gain 1 additional attack die.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/REaLSvm.png",
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
		image: "https://i.imgur.com/Dz5W8Pv.png",
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
		image: "https://i.imgur.com/gl52BB4.png",
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
		image: "https://i.imgur.com/kTYcU5N.png",
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
			"75011"
		],
		name: "Federation Starship",
		class: "Galaxy Class",
		image: "https://i.imgur.com/tmfoSnZ.png",
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
		text: "",
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
		image: "https://i.imgur.com/ODvHtaT.png",
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
		image: "https://i.imgur.com/uolfK2a.png",
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
		image: "https://i.imgur.com/XvnxvhD.png",
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
		set: ["71121"],
		name: "U.S.S. Reliant",
		image: "https://i.imgur.com/o5sQyi1.png",
		class: "Miranda Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["weapon", "crew", "crew"],
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 20,
		text: "You gain +1 attack die when firing at Range 1.",
		unique: true,
		factions: ["federation"],
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
			"75011"
		],
		name: "Federation Starship",
		class: "Miranda Class",
		image: "https://i.imgur.com/x3IFOcm.png",
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
		text: "",
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
		image: "https://i.imgur.com/J0wF7on.png",
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
		text: "The <i>U.S.S. Enterprise</i> can perform an Action listed on its Action Bar while it has an Auxiliary Power Token.",
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
		image: "https://i.imgur.com/67CjfrE.png",
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
		image: "https://i.imgur.com/kQy8Gx2.png",
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
		image: "https://i.imgur.com/TcWbbCz.png",
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
		name: "Romulan Starship",
		class: "Romulan Science Vessel",
		image: "https://i.imgur.com/lNXEbNZ.png",
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
		image: "https://i.imgur.com/RDtD7eF.png",
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
		name: "Klingon Starship",
		class: "D7 Class",
		image: "https://i.imgur.com/EvecWbX.png",
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
		image: "https://i.imgur.com/GgIsEE4.png",
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
		image: "https://i.imgur.com/5GSBb7g.png",
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
		image: "https://i.imgur.com/vz0mTlZ.png",
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
		image: "https://i.imgur.com/LN9WIVV.png",
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
		image: "https://i.imgur.com/9M7EAjx.png",
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
		cost: 16,
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
		image: "https://i.imgur.com/Qm2YiCW.png",
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
		name: "Ferengi Starship",
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
		image: "https://i.imgur.com/H4K2p24.png",
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
		image: "https://i.imgur.com/wRzFPVN.png",
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
		image: "https://i.imgur.com/aosIQIx.png",
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
		image: "https://i.imgur.com/TQK3zpp.png",
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
		image: "https://i.imgur.com/bQ9h30u.png",
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
			"75011"
		],
		name: "Federation Starship",
		class: "Defiant Class",
		image: "https://i.imgur.com/YMMX0PA.png",
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
		text: "",
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
		image: "https://i.imgur.com/OKN0ReA.png",
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
		image: "https://i.imgur.com/KuYzz7N.png",
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
		image: "https://i.imgur.com/9wZo6ue.png",
		class: "Romulan Bird-of-Prey Class",
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
		class: "Romulan Bird-of-Prey Class",
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
		image: "https://i.imgur.com/wVL0CaN.png",
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
		image: "https://i.imgur.com/TJddYWc.png",
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
		image: "https://i.imgur.com/RyuUaVJ.png",
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
		image: "https://i.imgur.com/iqkPYjx.png",
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
		image: "https://i.imgur.com/4Vg1pkj.png",
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
		image: "https://i.imgur.com/1SuoQ4U.png",
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
		text: "",
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
		image: "https://i.imgur.com/aIPlvel.png",
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
		set: ["OP4Prize"],
		name: "U.S.S. Sutherland",
		image: "https://i.imgur.com/oCuOa6Q.png",
		class: "Nebula Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "When you initiate an attack at range 3, you may choose any number of your attack dice and re-roll them once.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/sjsj2rX.png",
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
			"OP5Prize",
			"80003"
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
		cost: 16,
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
		image: "https://i.imgur.com/VKnfNRW.png",
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
			"71276"
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
		text: "",
		alliance: true,
		attack: 2,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 11,
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
		image: "https://i.imgur.com/4LaYP18.png",
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
		image: "https://i.imgur.com/3q73fHB.png",
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
		image: "https://i.imgur.com/vDKLENw.png",
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
		image: "https://i.imgur.com/GxpKGga.png",
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
		image: "https://i.imgur.com/bUfLe5V.png",
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
		image: "https://i.imgur.com/r7WjOYs.png",
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
		image: "https://i.imgur.com/actfRrM.png",
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
		set: ["71280", "72261"],
		name: "U.S.S. Voyager",
		image: "https://i.imgur.com/Bshk9aX.png",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "Instead of making a normal attack with your Primary Weapon, you may fire in any direction at Range 1-2 with 4 attack dice. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: ["federation"],
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
		set: ["71280", "72261"],
		name: "Federation Starship",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 24,
		text: "",
		unique: false,
		factions: ["federation"],
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
		image: "https://i.imgur.com/YZcbeuJ.png",
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
		image: "https://i.imgur.com/9PEV3Se.png",
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
		image: "https://i.imgur.com/LleHgYi.png",
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
		image: "https://i.imgur.com/ItROyeu.png",
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
		image: "https://i.imgur.com/CBYQz1L.png",
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
		image: "https://i.imgur.com/Y1520wl.png",
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
		image: "https://i.imgur.com/RD08y6v.png",
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
		name: "Bajoran Starship",
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
		image: "https://i.imgur.com/GGTXeo1.png",
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
		image: "https://i.imgur.com/KOJAgts.png",
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
		immage: "https://i.imgur.com/MzNSrze.png",
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
		image: "https://i.imgur.com/ckweUDd.png",
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
		name: "Klingon Starship",
		class: "K'T'Inga Class",
		image: "https://i.imgur.com/q7mmkxP.png",
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
		image: "https://i.imgur.com/MZVvP2F.png",
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
		image: "https://i.imgur.com/lXjcmGz.png",
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
		name: "Romulan Starship",
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
		image: "https://i.imgur.com/PqhZ6qz.png",
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
		set: ["u_s_s_yaeger"],
		name: "U.S.S. Yeager",
		image: "https://i.imgur.com/Xwos9QQ.png",
		class: "Saber Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["weapon", "weapon", "crew", "crew"],
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 3,
		cost: 22,
		text: "When attacking with Photon Torpedoes, you do not need to disable the Photon Torpedoes.",
		unique: true,
		factions: ["federation"],
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
		set: ["u_s_s_yaeger", "72231"],
		name: "Federation Starship",
		class: "Saber Class",
		image: "https://i.imgur.com/JGT2EEU.png",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["weapon", "weapon", "crew"],
		text: "",
		alliance: true,
		attack: 3,
		agility: 2,
		hull: 3,
		shields: 2,
		cost: 12,
		unique: false,
		factions: ["federation"],
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
		image: "https://i.imgur.com/4W6YYc6.png",
		class: "Constitution Class (Refit)",
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
		class: "Constitution Class (Refit)",
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
		cost: 18,
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
		image: "https://i.imgur.com/FVRGBUj.png",
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
		image: "https://i.imgur.com/60y7oUk.png",
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
		image: "https://i.imgur.com/AMZOoQD.png",
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
		set: ["71509"],
		name: "U.S.S. Raven",
		image: "https://i.imgur.com/KjzaxgU.png",
		class: "Aerie Class",
		actions: ["evade", "scan"],
		upgrades: ["tech", "tech", "crew"],
		attack: 1,
		agility: 2,
		hull: 2,
		shields: 3,
		cost: 16,
		text: "Each time you attack or defend, if there is a [scan] token beside your ship, your range combat bonuses are doubled.",
		unique: true,
		factions: ["federation"],
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
		cost: 7,
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
		image: "https://i.imgur.com/ZuWI1JI.png",
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
		image: "https://i.imgur.com/srKVPeg.png",
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
		image: "https://i.imgur.com/7mj9PwQ.png",
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
		cost: 9,
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
		image: "https://i.imgur.com/09N7OKZ.png",
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
		image: "https://i.imgur.com/09N7OKZ.png",
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
		set: ["71510"],
		name: "U.S.S. Stargazer",
		image: "https://i.imgur.com/ReXRoH4.png",
		class: "Constellation Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "crew"],
		attack: 3,
		agility: 1,
		hull: 4,
		shields: 3,
		cost: 22,
		text: "During the Activation Phase, you may disable 1 of your Active Shields to remove 1 Auxiliary Power Token from beside your ship.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/KTMxQii.png",
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
		image: "https://i.imgur.com/98oxQEy.png",
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
		cost: 28,
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
		image: "https://i.imgur.com/j77bKct.png",
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
		image: "https://i.imgur.com/IXiXVCe.png",
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
		image: "https://i.imgur.com/b1NCcsH.png",
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
		image: "https://i.imgur.com/4SUKqks.png",
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
		image: "https://i.imgur.com/OCsmqXe.png",
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
		image: "https://i.imgur.com/H634Ndt.png",
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
		image: "https://i.imgur.com/yt4ehf0.png",
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
		image: "https://i.imgur.com/uolfK2a.png",
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
		image: "https://i.imgur.com/C2U4upz.png",
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
		image: "https://i.imgur.com/rAOfdki.png",
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
		image: "https://i.imgur.com/OB5KlJQ.png",
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
		name: "U.S.S. Enterprise NCC-1701-E",
		image: "https://i.imgur.com/j0nFb6t.png",
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
			"72271"
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
		text: "",
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
		image: "https://i.imgur.com/mgTFrHw.png",
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
		image: "https://i.imgur.com/2MXaU5e.png",
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
		image: "https://i.imgur.com/CZJCmJX.png",
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
		image: "https://i.imgur.com/PUxf9cv.png",
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
		image: "https://i.imgur.com/QlDwe1k.png",
		class: "Defiant Class",
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
		image: "https://i.imgur.com/jCjuqZF.png",
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
		cost: 34,
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
		class: "Defiant Class",
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
		image: "https://i.imgur.com/ESxdpDe.png",
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
		image: "https://i.imgur.com/HDdSXAs.png",
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
		image: "https://i.imgur.com/wCZNKeS.png",
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
		image: "https://i.imgur.com/yNeXj4q.png",
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
		image: "https://i.imgur.com/pKSLNAE.png",
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
		image: "https://i.imgur.com/Anpgb2r.png",
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
		image: "https://i.imgur.com/tZjmQki.png",
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
		image: "https://i.imgur.com/FqRBJQG.png",
		class: "Negh'var Class",
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
		class: "Negh'var Class",
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
		image: "https://i.imgur.com/V6XXp25.png",
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
			"73042",
			"75015"
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
		image: "https://i.imgur.com/xmoQdyL.png",
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
		image: "https://i.imgur.com/Mjwn6rh.png",
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
		image: "https://i.imgur.com/gBdHQBd.png",
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
		image: "https://i.imgur.com/TmJebAc.png",
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
		image: "https://i.imgur.com/upapShx.png",
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
		image: "https://i.imgur.com/uolfK2a.png",
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
		image: "https://i.imgur.com/5Humsm8.png",
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
		image: "https://i.imgur.com/zaCpTBr.png",
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
		image: "https://i.imgur.com/tdldT6I.png",
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
		image: "https://i.imgur.com/7yxX4Il.png",
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
		image: "https://i.imgur.com/XABZyYC.png",
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
		image: "https://i.imgur.com/9AAqWJ9.png",
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
		image: "https://i.imgur.com/NCqMSD3.png",
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
		set: ["71801"],
		name: "U.S.S. Pegasus",
		image: "https://i.imgur.com/WkylUnN.png",
		class: "Oberth Class",
		actions: ["evade", "target-lock", "scan"],
		upgrades: ["tech", "tech", "crew", "crew"],
		attack: 2,
		agility: 3,
		hull: 3,
		shields: 2,
		cost: 20,
		text: "All of your [tech_text] Upgrades cost -1 SP.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/0qbTBAZ.png",
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
		image: "https://i.imgur.com/RosghTn.png",
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
		set: ["71802"],
		name: "Federation Starship",
		class: "Prometheus Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "tech", "weapon", "weapon", "crew"],
		text: "",
		alliance: true,
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 24,
		unique: false,
		factions: ["federation"],
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
		image: "https://i.imgur.com/sb000DA.png",
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
		set: ["71802"],
		name: "U.S.S. Prometheus",
		image: "https://i.imgur.com/5cqSwVI.png",
		class: "Prometheus Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "tech", "weapon", "weapon", "crew", "crew"],
		attack: 5,
		agility: 1,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "<b>ACTION:</b> If you performed a [forward] Maneuver this round, immediately perform an additional 1 [forward] or 2 [forward] Maneuver.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/r8WbU5T.png",
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
		image: "https://i.imgur.com/tF36qVJ.png",
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
		image: "https://i.imgur.com/UOHp2i4.png",
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
		set: ["72001p"],
		name: "U.S.S. Bellerophon",
		image: "https://i.imgur.com/4dG42fK.png",
		class: "Intrepid Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 5,
		cost: 30,
		text: "When defending, during the Compare Results step, you may disable 2 of your Active Shields to cancel 1 of the attacking ship's [hit] results.",
		unique: true,
		factions: ["federation"],
		squadron: false
	},
	{
		type: "ship",
		id: "S033",
		gameId: 1,
		set: [
			"72001p"
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
		text: "",
		alliance: true,
		attack: 4,
		agility: 2,
		hull: 4,
		shields: 4,
		cost: 24,
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
		image: "https://i.imgur.com/qJIgV3P.png",
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
		image: "https://i.imgur.com/TaWNWrS.png",
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
		image: "https://i.imgur.com/J22BWjC.png",
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
		image: "https://i.imgur.com/oGntTvN.png",
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
		name: "Species 116 Starship",
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
		image: "https://i.imgur.com/j1EPmex.png",
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
		image: "https://i.imgur.com/7h23QXi.png",
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
		image: "https://i.imgur.com/iX4TXeI.png",
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
		image: "https://i.imgur.com/bSiySvP.png",
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
		image: "https://i.imgur.com/OAUTUfV.png",
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
		set: ["blind_lakota"],
		name: "U.S.S. Lakota",
		image: "https://i.imgur.com/ypDxa44.png",
		class: "Excelsior Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 3,
		agility: 1,
		hull: 5,
		shields: 4,
		cost: 26,
		text: "When attacking, during the Modify Attack Dice step, you may convert 1 of your [hit] results into 1 [crit] result. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/JEXqyRD.png",
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
		image: "https://i.imgur.com/zZSA7R8.png",
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
		image: "https://i.imgur.com/f8E43T8.png",
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
		cost: 15,
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
		set: ["72011"],
		name: "U.S.S. Phoenix",
		image: "https://i.imgur.com/MQJWBX6.png",
		class: "Nebula Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["tech", "weapon", "weapon", "crew", "crew"],
		attack: 4,
		agility: 1,
		hull: 4,
		shields: 4,
		cost: 26,
		text: "Before you move, you may change your maneuver to another maneuver on your Maneuver Dial with the same speed. If you do so, place an Auxiliary Power Token beside your ship.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/Cf1ccML.png",
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
		image: "https://i.imgur.com/fHzXOdB.png",
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
		image: "https://i.imgur.com/jPSZsQP.png",
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
		image: "https://i.imgur.com/MvpSIls.png",
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
		image: "https://i.imgur.com/5m1AtMl.png",
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
		set: ["72008"],
		name: "U.S.S. Thunderchild",
		image: "https://i.imgur.com/sW7knML.png",
		class: "Akira Class",
		actions: ["evade", "target-lock", "scan", "battlestations"],
		upgrades: ["weapon", "weapon", "weapon", "crew"],
		attack: 4,
		agility: 2,
		hull: 5,
		shields: 3,
		cost: 28,
		text: "Each time you defend, if you take no damage from an attack, you may immediately roll 1 attack die. A [hit] or [crit] result damages the attacking ship.",
		unique: true,
		factions: ["federation"],
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
		image: "https://i.imgur.com/MFvf94p.png",
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
		text: "",
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
		image: "https://i.imgur.com/Fb2VS0f.png",
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
		image: "https://i.imgur.com/HFC4fSa.png",
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
		image: "https://i.imgur.com/2dCKhoo.png",
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
