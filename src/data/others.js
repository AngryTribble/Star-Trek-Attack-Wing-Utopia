module.exports = [
	{
		type: "token",
		id: "rule_starshipconstruction",
		gameId: 1,
		set: [
			"AdditionalRules",
			"75013"
		],
		name: "Starship Construction",
		text: "Starship Construction Cards are cards featuring the [hook] symbol. \n\n [hook] Card's do not count as Upgrades. \n\n A ship may only have one [hook] card equipped. \n\n You do not pay a Faction Penalty when equipping a [hook] card to a ship. \n\n [hook] Cards represent various versions of ships such as Prototypes, Refits, Retrofits, and Mission Specific alterations."
	},
	{
		type: "token",
		id: "rule_love_crysatal",
		gameId: 1,
		set: [
			"AdditionalRules",
			"75006"
		],
		name: "Love Crystal Token",
		text: "When a [crew_text] Upgrade with a Love Crystal Token becomes disabled the player who placed that Love Crystal Token on that [crew_text] Upgrade chooses and disables another [crew_text] Upgrade with a Love Crystal Token equipped to the same ship.\n\nWhen a [crew_text] Upgrade with a Love Crystal Token is discarded the player who placed that Love Crystal Token on that [crew_text] Upgrade chooses and discards another [crew_text] Upgrade with a Love Crystal Token equipped to the same ship.\n\nWhen a [crew_text] Upgrade with a Love Crystal Token has one or more [time] Tokens placed on it, the player who placed that Love Crystal Token on that [crew_text] Upgrade choses another [crew_text] Upgrade with a Love Crystal Token equipped to the same ship and places the same amount of [time] Tokens on it."
	},
	{
		type: "token",
		id: "rule_specialzation",
		gameId: 1,
		set: [
			"AdditionalRules",
			"71283",
			"71444",
			"71513a",
			"72283"
		],
		name: "Borg Tractor Beam Token (BTBT)",
		text: "This card explains the rules for a Borg Tractor Beam Token and serves as a reference to remind players of its effect.\n\nA ship with a white BTBT assigned to it follows these special rules:\n\n1) As soon as the ship receives the BTBT, disable 2 of that ship's Active Shields (if the ship was cloaked, remove the [cloak] Token and raise all of its Shields except 2).\n\n2) While the ship has the BTB, it cannot raise its Shields or Cloak.\n\n3) During the Planning Phase, the owner may not select a Manuever whose number is greater than 2.\n\n4) At the end of the Activation Pahse, if the ship is no longer within Range 1 of the ship with the corresponding BTBT (the one that matches the white token's letter), remove the BTBTs from both ships."
	},
	{
		type: "token",
		id: "rule_specialzation",
		gameId: 1,
		set: [
			"AdditionalRules",
			"75005"
		],
		name: "Specialization Cards (SCS)",
		text: "Specialization Cards(SCs) are two-sided cards featuring the [specialization] symbol. This card contains additional rules that pertain to SCs.\n1. During Setup choose which side each of your SCs will start on.\n2. If a SC is flipped while it is disabled, it remains disabled.\n3. If a SC is flipped while it has [time] Tokens, the [time] Tokens remain on it.\n4 If a SC that has an [talent_text] Upgrade equipped to it is flipped the [talent_text] remains equipped to it.\n5 Players only earn Fleet Points for the SP cost that was paid during Fleet Construction.\n6. When flipping an SC that SC remains equipped to the ship, even if it exceeds taht ship's restrictions.\n7. You may not flip a SC to its Captain or Admiral side if it would cause you to have more then one Captain on a ship or more then one Admiral in your Fleet."
	},
	{
		type: "token",
		id: "rule_BMGT",
		gameId: 1,
		set: [
			"AdditionalRules",
			"75003"
		],
		name: "Bio-Mimetic Gel Rules",
		text: "While an Upgrade has a Bio-Mimetic Gel Token (BMGT) on it, it gains the following text based on its upgrade type:\n\n[crew_text]: The ship that placed the BMGT on this [crew_text] Upgrade may spend the BMGT to use the ability of this [crew_text] Upgrade.\n\n[weapon_text]: When this [weapon_text] Upgrade deals damage to an opposing ship’s Hull, the ship that placed the BMGT on this [weapon_text] Upgrade may spend the BMGT to discard 1 [crew_text] Upgrade of their choice equipped to the defending ship.\n\n[tech_text]: When the ability of this [tech_text] Upgrade is used, the ship that placed the BMGT on this [tech_text] Upgrade may spend the BMGT to place 2 [time] Tokens on each [crew_text] Upgrade equipped to this ship.\n-----------------------------------\nWhen a BMGT is spent, roll 1 attack die. If a [battlestations] result is rolled, discard both the “Bio-mimetic Gel” Upgrade Card and the target Upgrade the BMGT was on."
	},
	{
		type: "token",
		id: "rule_GPLT",
		gameId: 1,
		set: [
			"AdditionalRules",
			"73001",
			"75003"
		],
		name: "Gold-Pressed Latinum Token",
		text: "Once per game round per ship, a Captain may spend their Gold-Pressed Latinum Token(s) (GPLT) to activate one of the following abilities:\n-----------------------------------\n<b>PLANING PHASE:</b> Spend 1 GPLT\nRemove an [aux] Token beside this ship.\n-----------------------------------\n<b>ACTIVATION PHASE:</b>Once per game, spend any of GPLT.\n\nEquip a [crew_text], [tech_text], or [weapon_text] Upgrade with a cost equal to the amount of GPLT spent that was discarded from this ship.\n-----------------------------------\n<b>COMBAT PHASE:</b> Spend 1 GPLT.\nPlace a [battlestations], [evade] or [scan] Token beside this ship."
	},
	{
		type: "token",
		id: "rule_EWT",
		gameId: 1,
		set: [
			"AdditionalRules",
			"71795",
			"OPWebPrize"
		],
		name: "Energy Web Token",
		text: "ENERGY WEB\n\nEWT's are treated as Obstacles but do not inflict normal Obstacle damage.\n\nA ship whose base or Maneuver Template overlaps an EWT, or a ship that has an EWT placed on top of it, must roll 1 attack die for every 2 EWTs that you have in the play area, rounded up (max 10 dice) Any [hit] or [crit] Damages the target ship as Normal. The affected ship does not roll any defense dice.\n\nNOTE: Tholian ships are immune to the effects of EWTs and may move and/or fire though them without penalty."
	},
	{
		type: "token",
		id: "rule_ambassador",
		gameId: 1,
		set: [
			"AdditionalRules",
			"75008",
			"75010",
			"75011"
		],
		name: "Ambassador Cards",
		text: "[amabassador_text] cards do not count as Captains, Admirals or Upgrades.\n\nA fleet may only have one [ambassador_text] Card.\n\nYou do not pay a Faction Penalty when equipping an Ambassador to a ship.\n\nAt the start of the game, a player may activate their Ambassador's Negotiation Effect by choosing an opposing ship.  The target of the effect may choose to accept negotiations or deny negotiations.  If negotiations are accepted, players will both be affected in some way.  If negotiations are denied, the opposing player will be affected detrimentally.\n\nIf negotiations have been accepted and the ship the [ambassador_text] Card is equipped to is destroyed by the ship that accepted negotiations, immediately trigger the Negotiations Denied section of the [ambassador_text] Card targeting the ship that accepted the negotiations before removing the ship from the play area.  If both players have Ambassadors, the player with the Initiative Token first enacts their Ambassador card, including any Start of Game effects."
	},
	{
		type: "token",
		id: "rule_muon_token",
		gameId: 1,
		set: [
			"AdditionalRules"
		],
		name: "Muon Token",
		text: "This card explains the rules for a Muon Token and serves as a reference to remind players of its effect.\n\nA ship with a Muon Token assigned to it follows these special rules:\n\n1. A Muon Token stays with a ship until it is removed.\n\n2. During the Activation Phase, after the ship moves, the ship takes damage to its Hull equal to the number of its current Maneuver -1. The type of Maneuver does not matter, just the number.\n\n3. After the ship performs a Green or White Maneuver, it can spend an Action to remove the Muon Token."
	},
	{
		type: "token",
		id: "rule_regenerate",
		gameId: 1,
		set: [
			"AdditionalRules"
		],
		name: "Regenerate",
		text: "Ships with the [regenerate] icon in their Action Bar may perform the Regenerate Action. A ship that performs the [regenerate] Action immediately repairs 1 damage of its choice to its Hull (critical or normal). A ship cannot attack during the round that it performs the [regenerate] Action."
	},
	{
		type: "token",
		id: "grapple_tokens",
		gameId: 1,
		set: [
			"71534",
			"AdditionalRules"
		],
		name: "Grapple Token",
		text: "This card explains the rules for a Grapple Token and serves as a reference to remind players of its effect.\n\nEach ship capable of performing the Grappler Action can maintain only 1 GRapple at a time (i.e. each ship can only have 1 Blue Grapple Token assigned to it)\n\nWhile a ship has a Red Grapple Token assigned to it, that ship follows these special rules:\n\n1) When attacking, the ship rolls 1 less attack die. Each time the ship defends, it rolls 1 less defense die.\n\n2) During the Planning Phase, the ship's owner cannot select a Speed greater than 2.\n\n3) At the end of the Activation Phase, if the grappled ship is no longer within Range 1 of the grappling ship, then remove the corresponding Red and Blue Grapple Tokens from beside both ships.\n\n4) During the Combat Phase, a grappled ship may foreog its attack, and roll a number of attack dice equal to its Primary Weapon Value. If that ship rolls at least 2 [hit] or [crit] results, remove the corresponding Red and Blue Grapple Tokens from beside both ships. This roll cannot be modified."
	},
	{
		type: "token",
		id: "tribble_tokens",
		gameId: 1,
		set: [
			"71125",
			"72272",
			"AdditionalRules"
		],
		name: "Tribble Tokens",
		text: "A Ship Card with at least 1 Tribble Token assigned to it follows special rules:\n\n1) During the End Phase, add 1 Tribble Token to your Ship Card (reguardless of the number of Tribble Tokens it already has).\n\n2) If your Ship has 1-3 Tribble Tokens, add +1 attack die whenever you attack and +1 defense whenever you defend. Ignore this rule if your Ship includes any Klingon Captains or Crew.\n\n3) If your ship has 4-5 Tribble Tokens, there is no effect.\n\n4) If your ship has 6 or more Tribble Tokens, roll 1 less attack die whenever you attack and 1 less defense dice whenever you defend. This penalty is doubled if your ship includes any Klingon Captains or Klingon Crew.\n\n5) You gain the following Action:\nAction: If your ship is not Cloaked, disable all of your remaining Shields and target a ship at range 1-2 that is not cloaked and has no Active Shields. Place any number of your Tribble Tokens beside the target ship's Ship Card. You cannot transfer any Tribble Token that you recieved this round."
	},
	{
		type: "token",
		id: "Multi-Vactor_Assault_Mode_tokens",
		gameId: 1,
		set: [
			"71802",
			"AdditionalRules"
		],
		name: "Multi-Vector Assault Mode Token",
		text: "This card explains the rules for a Multi-Vector Assault Mode Token and serves as a reference to remind players of its effect.\n\nWhile a Multi-Vector Assault Mode Token (MVAMT) is beside your ship.\n\n1) During the Planning Phase, you cannot choose a Maneuver with a speed greater than 3.\n\n2) Each time you defend, roll -1 defense die.\n\n3) During the Combat Phase, you may perform the attack listed on the Multi-Vector Assault Mode Upgrade card.\n\n4) During the End Phase, you may choose to retain the Multi-Vector Assault Mode Token.  If you do so, leave it beside your ship."
	},
	{
		type: "token",
		id: "adaptation_tokens",
		gameId: 1,
		set: [
			"71280",
			"72261",
			"AdditionalRules"
		],
		name: "Adaptation Tokens",
		text: "1) While an Adaptation Token is on a [tech_text] Upgrade, Seven of Nine's ship is now considered to also possess that [tech_text] Upgrade (even if Seven is disabled).  The original Upgrade Card is unaffected and can be used freely by its owner.  If the original Upgrade is disabled or discarded, Seven's ship is still considered to possess that [tech_text] Upgrade and can freely use it.\n\n2)If using the [tech_text] Upgrade would normally require the Upgrade to be disabled or discarded, then when Seven's ship uses the Upgrade, remove the Adaptation Token.  The original Upgrade is unaffected.\n\n3) Only 1 Adapatation Token may be in play at the same time.  If Seven of Nine uses her ability on another [tech_text] Upgrade, remove the Adaptation Token from the previous Upgrade.\n\n4)If Seven of Nine is discarded, discard the Adaptation Token."
	},
	{
		type: "token",
		id: "Escape_Pod_Token",
		gameId: 1,
		set: [
			"71801",
			"AdditionalRules"
		],
		name: "Escape Pod Token (EPT)",
		text: "This card explains the rules for an Escape Pod Token and serves as a reference to remind players of its effect. While an Escape Pod Token is in the play area:\n\n1) During the Activation Phase, after all ships have moved, the Escape Pod must move 1 [straight] in the direction of the arrow on the Token.  If it overlaps a friendly ship's base after this move, it is considered to be picked up by that ship (see below).  If it overlaps an enemy ship's base after this move, it is destroyed.\n\n2) During the Combat Phase, it cannot attack, but it may b attacked.  It has a 0 Agility, a Hull Value of 1, and 0 Shields.\n\n3) The cards beneath the \"Escape Pod\" Upgrade card cannot be use their text abilities and cannot be affected by enemy Upgrades.\n\nIf a friendly ship is within Range 1 of an EPT at the end of the Activation Phase (or it is placed directly on a friendly ship's base), the EPT is considered to be picked up.  Remove the EPT from the game and discard the \"Escape Pod\" Upgrade Card.  Place all of the cards beneath it beside that ship's cards. These cards are now considered to be deployed to that ship.\n\nNOTE: The [crew_text] Upgrade cards may exceed the ship's restrictions, but there may only be 1 Captain Card assigned to the ship.  You may keep either your original Captain card or the one from the Escape Pod and remove the other one from the game."
	},
	{
		type: "token",
		id: "Ablative_Generator_Token",
		gameId: 1,
		set: [
			"71280",
			"72261",
			"AdditionalRules"
		],
		name: "Ablative Generator Token (AGT)",
		text: "This card explains the rules for an Ablative Generator Token and serves as a reference to remind players of its effect.\n\nA ship with an AGT assigned to it follows these special rules:\n\n1) As soon as the ship receives the AGT, disable all of its remaining Shields and remove its [cloak] Token, if any.\n\n2) While the ship has the AGT, it cannot raise its Shields or Cloak.\n\n3) Convert all [crit] results against the ship to [hit] results.\n\n4) Place all Damage Cards that the ship receives beneath the Ablative Generator Card.  If the player removes the AGT from beside the ship, the Damage Cards remain beneath the Ablative Generator card.\n\n5) Once the Ablative Generator receives 5 Damage Cards, discard the Upgrade Card (and all 5 Damage Cards), and then remove the AGT from beside the ship.  All excess damage affects the ship as normal."
	},
	{
		type: "token",
		id: "engery_dampening_tokens",
		gameId: 1,
		set: [
			"AdditionalRules",
			"71128",
			"OP5Prize"
		],
		name: "Energy Dampening Tokens (EDT)",
		text: "This card explains the rules for an Energy Dampening Token and serves as a reference to remind players of its effect.\n\nA ship with an EDT assigned to it follows these special rules:\n\n1) As soon as the ship receives the EDT, disable all of its remaining Shields and remove its [cloak] Token, if any.\n\n2) While the ship has the EDT, it cannot attack or raise its Shields.\n\n3) During the <b>Planning Phase</b> the owner does not assign a Maneuver dial to this ship.\n\n4) During the Activation Phase the owner moves the ship as if it were assigned a White 1 [straight] Maneuver. After executing this Maneuver, remove all EDTs from this ship It may now perform Actions and attack as normal."
	},
	{
		type: "token",
		id: "rule_drone_tokens",
		gameId: 1,
		set: [
			"AdditionalRules"
		],
		name: "Drone Tokens",
		text: "Each Drone Token has a Drone number list on the face, as well as a Captain Skill Number listed on the back. The Drone Tokens are placed in a stack on top of the Captain Card in descending order (from highest to lowest) of their Drone numbers. \n\nNOTE: The Drone number listed on the token at the top of the stack is always considered the ship’s current Captain Skill. At the start of the game, place the Drone Token that has the starting Captain Skill beside the ship (this will be the reverse side of the Drone Token that reads “START” on the face).\n\nWhen a Drone Token is used, remove one Token from the top of the stack and flip it over. Then remove the Drone Token that is beside the ship from play and replace it with the token that you just removed from the stack. NOTE: The Captain Skill that is listed on the Token beside the ship should always be equal to the number of Drone Tokens left on the Captain Card.\n\n You may use Drone Tokens for other Upgrade effects, but not for the text on a disabled Captain if your Captain is disabled."
	},
	{
		type: "fleet-captain",
		id: "R010a",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Federation",
		factions: [
			"federation"
		],
		text: "After you move, you may target 1 friendly Federation ship within Range 1-3 (or your own ship). The target ship immediately removes 1 Disabled Upgrade Token from 1 of its disabled Upgrades as a free Action.",
		cost: 5,
		skill: 2,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 0,
		techAdd: 1,
		weaponAdd: 1,
		crewAdd: 0
	},
	{
		type: "fleet-captain",
		id: "R010b",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Dominion",
		factions: [
			"dominion"
		],
		text: "After you move, you may target 1 friendly Dominion ship within Range 1-2 (or your own ship). The target ship immediately performs an Action on one of its non-disabled [tech_text] Upgrades as a free Action.",
		cost: 5,
		skill: 2,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 1,
		techAdd: 0,
		weaponAdd: 0,
		crewAdd: 1
	},
	{
		type: "fleet-captain",
		id: "R010c",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Romulan",
		factions: [
			"romulan"
		],
		text: "After you move, you may target 1 friendly Cloaked Romulan ship within Range 1-2 (or your own ship). The target ship immediately performs a [sensor-echo] Action as a free Action.",
		cost: 5,
		skill: 2,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 0,
		techAdd: 0,
		weaponAdd: 1,
		crewAdd: 1
	},
	{
		type: "fleet-captain",
		id: "R010d",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Klingon",
		factions: [
			"klingon"
		],
		text: "After you move, you may target 1 friendly Klingon ship within Range 1-2 (or your own ship). The target ship immediately performs an action on one of its non-disabled [crew_text] Upgrades as a free Action.",
		cost: 5,
		skill: 2,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 1,
		techAdd: 1,
		weaponAdd: 0,
		crewAdd: 0
	},
	{
		type: "fleet-captain",
		id: "R010e",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Independent (Klingon)",
		factions: [
			"independent"
		],
		text: "All of your [crew_text] Upgrades cost -1 SP for all ships in your fleet (including your own ship).",
		cost: 5,
		skill: 1,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 1,
		techAdd: 0,
		weaponAdd: 0,
		crewAdd: 2
	},
	{
		type: "fleet-captain",
		id: "R010f",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Independent (Federation)",
		factions: [
			"independent"
		],
		text: "After you move, you may target 1 friendly ship within Range 1-2 (or your own ship). The target ship immediately performs an additional white \"1\" Maneuver (forward, bank or turn).",
		cost: 5,
		skill: 1,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 1,
		techAdd: 0,
		weaponAdd: 0,
		crewAdd: 0
	},
	{
		type: "fleet-captain",
		id: "R010g",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Independent (Romulan)",
		factions: [
			"independent"
		],
		text: "All your [weapon_text] Upgrades cost -1 SP for all ships in your fleet (including your own ship).",
		cost: 5,
		skill: 1,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 1,
		techAdd: 0,
		weaponAdd: 2,
		crewAdd: 0
	},
	{
		type: "fleet-captain",
		id: "R010h",
		gameId: 1,
		set: [
			"CollectiveOP2"
		],
		name: "Independent (Dominion)",
		factions: [
			"independent"
		],
		text: "All of your [tech_text] Upgrades cost -1 SP for all ships in your fleet (including your own ship).",
		cost: 5,
		skill: 1,
		upgradeSlots: [],
		isSkillModifier: true,
		showType: true,
		canEquip: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true,
		talentAdd: 1,
		techAdd: 2,
		weaponAdd: 0,
		crewAdd: 0
	},
	{
		type: "officer",
		id: "R011a",
		gameId: 1,
		set: [
			"CollectiveOP3"
		],
		name: "First Officer",
		factions: [
			"independent"
		],
		text: "Whenever you perform a [battlestations], [scan], or [evade] Action, you may place 2 Tokens of the appropriate type beside your ship instead of 1.  If you do so, place an Auxiliary Power Token beside your ship. \n\nIf your Captain's Skill is ever reduced below 4, you may use the Skill Number on this card instead of your Captain's Skill Number.",
		cost: 3,
		upgradeSlots: [
			{
				type: [
					"crew"
				],
				source: "Crew to be assigned as First Officer"
			}
		],
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "officer",
		id: "R011b",
		gameId: 1,
		set: [
			"CollectiveOP3"
		],
		name: "Tactical Officer",
		factions: [
			"independent"
		],
		text: "Add 1 [weapon_text] Upgrade slot to your Upgrade Bar. \nDuring the Roll Attack Dice step of the Combat Phase, you may spend a [battlestations] Token to roll +1 attack die. \nDuring the Roll Defense Dice step of the Combat Phase, you may spend a [battlestations] Token to roll +1 defense die.",
		cost: 3,
		upgradeSlots: [
			{
				type: [
					"crew"
				],
				source: "Crew to be assigned as Tactical Officer"
			}
		],
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "officer",
		id: "R011c",
		gameId: 1,
		set: [
			"CollectiveOP3"
		],
		name: "Operations Officer",
		factions: [
			"independent"
		],
		text: "Add 1 [crew_text] Upgrade slot to your Upgrade Bar. \nDuring the Modify Attack Dice step of the Combat Phase, you may choose one of your attack dice and re-roll that die twice. \nDuring the Modify Defense Dice step of the Combat Phase, you may choose one of your defense dice and re-roll that die twice.",
		cost: 3,
		upgradeSlots: [
			{
				type: [
					"crew"
				],
				source: "Crew to be assigned as Operations Officer"
			}
		],
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "officer",
		id: "R011d",
		gameId: 1,
		set: [
			"CollectiveOP3"
		],
		name: "Science Officer",
		factions: [
			"independent"
		],
		text: "Add 1 [tech_text] Upgrade slot to your Upgrade Bar. \nEach time you attack, if there is a [scan] Token beside your ship, the defender rolls -2 defense dice instead of -1. \nDuring the Modify Defense Dice step of the Combat Phase, you may spend a [scan] Token to add 1 [evade] result to your roll.",
		cost: 3,
		upgradeSlots: [
			{
				type: [
					"crew"
				],
				source: "Crew to be assigned as Science Officer"
			}
		],
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004a",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Romulan",
		class: "Flagship",
		factions: [
			"romulan"
		],
		text: "When attacking, all other friendly, Romulan ships within Range 1-2 of your Flagship may choose any number of their attack dice and re-roll them once.",
		cost: 10,
		actions: [
			"sensor-echo"
		],
		upgrades: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			}
		],
		attack: 1,
		agility: 1,
		hull: 0,
		shields: 1,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004f",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Independent (Romulan)",
		class: "Flagship",
		factions: [
			"independent"
		],
		text: "When defending, all other friendly ships within Range 1 of your Flagship gain +1 defense die.",
		cost: 10,
		actions: [
			"battlestations"
		],
		upgrades: [
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		attack: 1,
		agility: 1,
		hull: 0,
		shields: 1,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004b",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Klingon",
		class: "Flagship",
		factions: [
			"klingon"
		],
		text: "When attacking, all other friendly Klingon ships within Range 1-2 of your Flagship may convert 1 blank result into 1 [hit] result.",
		cost: 10,
		actions: [
			"cloak"
		],
		upgrades: [
			{
				type: [
					"tech"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"tech"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		attack: 1,
		agility: 1,
		hull: 1,
		shields: 0,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004g",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Independent (Klingon)",
		class: "Flagship",
		factions: [
			"independent"
		],
		text: "All other friendly ships within Range 1 of your Flagship gain +1 attack die when attacking at Range 2-3.",
		cost: 10,
		actions: [
			"scan"
		],
		upgrades: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"tech"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"tech"
				],
				source: "Flagship"
			}
		],
		attack: 1,
		agility: 1,
		hull: 1,
		shields: 0,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004c",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Dominion",
		class: "Flagship",
		factions: [
			"dominion"
		],
		text: "When defending, all other friendly Dominion ships within Range 1-2 of your Flagship may convert 1 blank result into 1 [evade] result.",
		cost: 10,
		actions: [
			"scan"
		],
		upgrades: [
			{
				type: [
					"tech"
				],
				source: "Flagship"
			},
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"tech"
				],
				source: "Flagship"
			},
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			}
		],
		attack: 0,
		agility: 1,
		hull: 1,
		shields: 1,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004h",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Independent (Dominion)",
		class: "Flagship",
		factions: [
			"independent"
		],
		text: "After your Flagship moves, you may target 1 other Friendly ship within Range 1 of your Flagship. Target ship immediately performs an extra white or green Maneuver.",
		cost: 10,
		actions: [
			"target-lock"
		],
		upgrades: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"weapon"
				],
				source: "Flagship"
			}
		],
		attack: 0,
		agility: 1,
		hull: 1,
		shields: 1,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004e",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Federation",
		class: "Flagship",
		factions: [
			"federation"
		],
		text: "When defending, all other friendly Federation ships within Range 1-2 of your Flagship may choose any number of their defense dice and re-roll them once.",
		cost: 10,
		actions: [
			"battlestations"
		],
		upgrades: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"talent"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		attack: 1,
		agility: 0,
		hull: 1,
		shields: 1,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "flagship",
		id: "R004i",
		gameId: 1,
		set: [
			"OP4Participation"
		],
		name: "Independent (Federation)",
		class: "Flagship",
		factions: [
			"independent"
		],
		text: "After your Flagship moves, you may target 1 other Friendly ship within Range 1 of your Flagship. Target ship immediately performs a 2nd Action listed on its Action Bar as a free Action this round.",
		cost: 10,
		actions: [
			"evade"
		],
		upgrades: [
			{
				type: [
					"tech"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		upgradeSlots: [
			{
				type: [
					"tech"
				],
				source: "Flagship"
			},
			{
				type: [
					"crew"
				],
				source: "Flagship"
			}
		],
		attack: 1,
		agility: 0,
		hull: 1,
		shields: 1,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "faction",
		id: "faction_federation",
		gameId: 1,
		showType: true,
		name: "Federation",
		factions: [
			"federation"
		],
		text: "This card represents the Federation faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_klingon",
		gameId: 1,
		showType: true,
		name: "Klingon",
		factions: [
			"klingon"
		],
		text: "This card represents the Klingon faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_romulan",
		gameId: 1,
		showType: true,
		name: "Romulan",
		factions: [
			"romulan"
		],
		text: "This card represents the Romulan faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_dominion",
		gameId: 1,
		showType: true,
		name: "Dominion",
		factions: [
			"dominion"
		],
		text: "This card represents the Dominion faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_borg",
		gameId: 1,
		showType: true,
		name: "Borg",
		factions: [
			"borg"
		],
		text: "This card represents the Borg faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_species_8472",
		gameId: 1,
		showType: true,
		name: "Species 8472",
		factions: [
			"species-8472"
		],
		text: "This card represents the Species 8472 faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_kazon",
		gameId: 1,
		showType: true,
		name: "Kazon",
		factions: [
			"kazon"
		],
		text: "This card represents the Kazon faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_xindi",
		gameId: 1,
		showType: true,
		name: "Xindi",
		factions: [
			"xindi"
		],
		text: "This card represents the Xindi faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_bajoran",
		gameId: 1,
		showType: true,
		name: "Bajoran",
		factions: [
			"bajoran"
		],
		text: "This card represents the Bajoran faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_ferengi",
		gameId: 1,
		showType: true,
		name: "Ferengi",
		factions: [
			"ferengi"
		],
		text: "This card represents the Ferengi faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_vulcan",
		gameId: 1,
		showType: true,
		name: "Vulcan",
		factions: [
			"vulcan"
		],
		text: "This card represents the Vulcan faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_independent",
		gameId: 1,
		showType: true,
		name: "Independent",
		factions: [
			"independent"
		],
		text: "This card represents the Independent faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_mirror_universe",
		gameId: 1,
		showType: true,
		name: "Mirror Universe",
		factions: [
			"mirror-universe"
		],
		text: "This card represents the Mirror Universe faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "faction",
		id: "faction_q_continuum",
		gameId: 1,
		showType: true,
		name: "Q Continuum",
		factions: [
			"q-continuum"
		],
		text: "This card represents the Q Continuum faction and is used with the Officer Exchange Program Resource.",
		cost: 0,
		unique: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		}
	},
	{
		type: "ship-resource",
		id: "Rs01",
		gameId: 1,
		set: [
			"72282gp"
		],
		name: "Movars Ability ",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "This card functions with captain Movar, from the Seleas Warbird Grand Prize. Swap a [tech_text], [weapon_text] or [crew_text] slot with a [talent_text], [tech_text], [weapon_text] or [crew_text] slot",
		cost: 0,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "ship-resource",
		id: "R036a",
		gameId: 1,
		set: [
			"72284r"
		],
		name: "Senior Staff ",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "This card adds an extra [crew_text] and [talent_text] slot which applies the special rules from the Senior Staff OP Resource.\n\nThis [crew_text] may equip a [talent_text] at the cost of +1SP.",
		cost: 0,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: false
	},
	{
		type: "ship-resource",
		id: "R033b",
		gameId: 1,
		set: [
			"72280r"
		],
		name: "Fleet Commander",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "Captain's Skill is increased +1.\n\nAdd +1 to this Ships Hull value.",
		cost: 5,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "ship-resource",
		id: "R033a",
		gameId: 1,
		set: [
			"72280r"
		],
		name: "Fleet Commander",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "Captain's Skill is increased +1.\n\nAdd +1 to this Ships Shield value.",
		cost: 5,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "ship-resource",
		id: "R039a",
		gameId: 1,
		set: [
			"72301r"
		],
		name: "Captain's Chair",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "Ship with Captain skill 5+\n\nAfter performing an Green or White Maneuver, remove a Disable Token from a Upgrade equipped to this ship.",
		cost: 3,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "ship-resource",
		id: "Rs40",
		gameId: 1,
		set: [
			"72302r"
		],
		name: "Front Line Retrofit",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "Ship must have a hull of Hull 3 or less\n\nAdds 1 [weapon_text] slot and +1 to Shield and Captain Skill values",
		cost: 5,
		upgrades: [
			{
				type: [
					"weapon"
				],
				source: "Retrofit Weapon"
			}
		],
		upgradeSlots: [
			{
				type: [
					"weapon"
				],
				source: "Retrofit Weapon"
			}
		],
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	},
	{
		type: "ship-resource",
		id: "R042a",
		gameId: 1,
		set: [
			"72321r"
		],
		name: "Sickbay",
		factions: [
			"federation",
			"klingon",
			"romulan",
			"dominion",
			"independent"
		],
		text: "Ship must have a hull of Hull 4 or more\n\nWhenever this ships Captain, Admiral, or [crew_text] would be disabled, you may place 2 [time] Tokens on that card instead.\n-OR-\nWhenever this ships Captain, Admiral, or [crew_text] would be discarded, you may discard this card instead.",
		cost: 6,
		showType: true,
		canEquip: true,
		canEquipFaction: true,
		isShipModifier: true,
		intercept: {
			ship: {},
			fleet: {}
		},
		factionPenalty: 0,
		unique: true
	}
];
