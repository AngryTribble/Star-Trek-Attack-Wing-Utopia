module.exports = [
{
	type: "ship-class",
	id: "kelvin_constitution_class",
	name: "Constitution Class (Kelvin)",
	frontArc: "180",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "red"
		},
		min: -2,
		max: 6,
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "warbird_class",
	name: "Warbird Class",
	frontArc: "90",
	secondArc: "45",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
},{
	type: "ship-class",
	id: "72224p",
	name: "Xindi Reptilian Warship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "71223",
	name: "Andorian Battle Cruiser",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "ardassian_ATR_4107",
	name: "Cardassian ATR-4107",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "71225",
	name: "Xindi Weapon",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "red"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5000",
	name: "Galaxy Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		min: -2,
		max: 5,
		"-1": {
			straight: "red"
		},
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5001",
	name: "Miranda Class",
	frontArc: "180",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white"
		},
		4: {
			straight: "white"
		},
		min: -2,
		max: 4,
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5002",
	name: "Constitution Class",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -2,
		max: 4,
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5003",
	name: "Defiant Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5004",
	name: "D'deridex Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white"
		},
		4: {
			straight: "white"
		},
		min: -2,
		max: 4,
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5005",
	name: "Valdore Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5006",
	name: "Romulan Science Vessel",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5007",
	name: "Romulan Bird-of-Prey",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5008",
	name: "Vor'cha Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5009",
	name: "D7 Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5010",
	name: "Negh'var Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5011",
	name: "K'T'Inga Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5012",
	name: "Cardassian Galor Class",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "5013",
	name: "Breen Battle Cruiser",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5014",
	name: "Jem'Hadar Attack Ship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5015",
	name: "D'Kora Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5017",
	name: "Nor Class Orbital Space Station",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		0: {
			stop: "green",
			"45-degree-rotate": "green",
			"90-degree-rotate": "white"
		},
		1: {
			straight: "white",
			flank: "white"
		},
		2: {
			straight: "red",
			flank: "red"
		},
		min: 0,
		max: 2
	}
}, {
	type: "ship-class",
	id: "5018",
	name: "B'Rel Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5020",
	name: "K'Vort Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "new_kvort_class",
	name: "K'Vort Class ",
	frontArc: "90",
	secondArc: "45",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5021",
	name: "Cardassian Keldon Class",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white",
			bank: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "5022",
	name: "Excelsior Class",
	frontArc: "180",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -2,
		max: 4,
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "5023",
	name: "Romulan Scout Vessel",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "5024",
	name: "Nebula Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "nova_class",
	name: "Nova Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "raptor_class",
	name: "Raptor Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "jem_hadar_battleship",
	name: "Jem'Hadar Battleship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "white"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white",
			bank: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "new_jem_hadar_battleship",
	name: "Jem'Hadar Battleship ",
	frontArc: "90",
	secondArc: "45",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "white"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "bajoran_scout_ship",
	name: "Bajoran Scout Ship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "federation_attack_fighter",
	name: "Federation Attack Squadron",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "hideki_class_attack_fighter",
	name: "Hideki Class Attack Squadron",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "red"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "Scorpion_Clas_Attack_Squadron",
	name: "Scorpion Class Attack Squadron",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "borg_sphere",
	name: "Borg Sphere",
	frontArc: "",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			spin: "white"
		},
		2: {
			straight: "green",
			spin: "white"
		},
		3: {
			straight: "green",
			spin: "white"
		},
		4: {
			straight: "white",
			spin: "red"
		},
		min: -3,
		max: 4,
		"-1": {
			straight: "white"
		},
		"-2": {
			straight: "white"
		},
		"-3": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "species_8472_bioship",
	name: "Species 8472 Bioship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "kazon_raider",
	name: "Kazon Raider",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "intrepid_class",
	name: "Intrepid Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "white"
		},
		min: 1,
		max: 6
	}
}, {
	type: "ship-class",
	id: "tholian_vessel",
	name: "Tholian Vessel",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "d_kyr_class",
	name: "D'Kyr Class",
	frontArc: "180",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "bajoran_interceptor",
	name: "Bajoran Interceptor",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "borg_tactical_cube",
	name: "Borg Tactical Cube",
	frontArc: "",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			spin: "white"
		},
		2: {
			straight: "green",
			spin: "white"
		},
		3: {
			straight: "white",
			spin: "white"
		},
		4: {
			straight: "white",
			spin: "red"
		},
		min: -3,
		max: 4,
		"-1": {
			straight: "white"
		},
		"-2": {
			straight: "red"
		},
		"-3": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "gorn_raider",
	name: "Gorn Raider",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "saber_class",
	name: "Saber Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "maquis_raider",
	name: "Maquis Raider",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "constitution_refit_class",
	name: "Constitution Refit Class",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -2,
		max: 4,
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "jem_hadar_battle_cruiser",
	name: "Jem'Hadar Battle Cruiser",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white",
			about: "red"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "borg_type_03",
	name: "Borg Type 03",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green"
		},
		2: {
			straight: "green",
			bank: "green"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white",
			bank: "white",
			about: "red"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "red"
		},
		min: 1,
		max: 6
	}
}, {
	type: "ship-class",
	id: "suurok_class",
	name: "Suurok Class",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "aerie_class",
	name: "Aerie Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "federation_nx_class",
	name: "Federation NX Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "bajoran_solar_sailor",
	name: "BAJORAN SOLAR SAILOR",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "red"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "red"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "borg_scout_cube",
	name: "Borg Scout Cube",
	frontArc: "",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			spin: "green"
		},
		2: {
			straight: "green",
			spin: "white"
		},
		3: {
			straight: "white",
			spin: "white"
		},
		4: {
			straight: "red",
			spin: "red"
		},
		min: -3,
		max: 4,
		"-1": {
			straight: "white"
		},
		"-2": {
			straight: "white"
		},
		"-3": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "constellation_class",
	name: "Constellation Class",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "galaxy__class_mu",
	name: "Galaxy X Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "red"
		},
		min: -1,
		max: 6,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "predator_class",
	name: "Predator Class",
	frontArc: "180",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: -1,
		max: 4,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "sovereign_class",
	name: "Sovereign Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "red"
		},
		min: -1,
		max: 6,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "borg_octahedron",
	name: "Borg Octahedron",
	frontArc: "",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			spin: "green"
		},
		2: {
			straight: "green",
			spin: "white"
		},
		3: {
			straight: "white",
			spin: "white"
		},
		4: {
			straight: "white",
			spin: "red"
		},
		min: -3,
		max: 4,
		"-1": {
			straight: "white"
		},
		"-2": {
			straight: "white"
		},
		"-3": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "maquis_raider_b",
	name: "Maquis Raider",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "klingon_bird_of_prey",
	name: "Klingon Bird-of-Prey",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			about: "red",
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "defiant_class_mirror",
	name: "Defiant Class (Mirror)",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			about: "red",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "reman_warbird",
	name: "Reman Warbird",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white"
		},
		4: {
			straight: "white",
			about: "red"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "white"
		},
		min: 1,
		max: 6
	}
}, {
	type: "ship-class",
	id: "borg_cube",
	name: "Borg Cube",
	frontArc: "",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			spin: "green"
		},
		2: {
			straight: "green",
			spin: "white"
		},
		3: {
			straight: "white",
			spin: "white"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "red"
		},
		6: {
			straight: "red"
		},
		min: -3,
		max: 6,
		"-1": {
			straight: "white"
		},
		"-2": {
			straight: "white"
		},
		"-3": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "vidiian_battle_cruiser",
	name: "Vidiian Battle Cruiser",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "negh_var_class_mirror",
	name: "Negh'var Class (Mirror)",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "hirogen_warship",
	name: "Hirogen Warship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "romulan_drone_ship",
	name: "Romulan Drone Ship",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "type_7_shuttlecraft",
	name: "Type 7 Shuttlecraft",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			about: "white",
			straight: "green",
			bank: "green",
			turn: "white"
		},
		2: {
			about: "white",
			straight: "green",
			bank: "green",
			turn: "white"
		},
		min: 1,
		max: 2
	}
}, {
	type: "ship-class",
	id: "terran_nx_class",
	name: "Terran NX Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "krenim_weapon_ship",
	name: "Krenim Weapon Ship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		min: -2,
		max: 3,
		"-1": {
			straight: "red"
		},
		"-2": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "oberth_class",
	name: "Oberth Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			about: "white",
			bank: "green",
			turn: "white"
		},
		3: {
			straight: "white",
			about: "white",
			bank: "white",
			turn: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "prometheus_class",
	name: "Prometheus Class",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green"
		},
		2: {
			straight: "green",
			bank: "green"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white"
		},
		4: {
			straight: "white",
			bank: "white"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "white"
		},
		min: -1,
		max: 6,
		"-1": {
			straight: "red"
		}
	}
}, {
	type: "ship-class",
	id: "xindi_aquatic",
	name: "Xindi Aquatic Cruiser",
	frontArc: "180",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "red"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		"-1": {
			straight: "red"
		},
		min: -1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "dauntless_class",
	name: "Dauntless Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		min: 1,
		max: 5
	}
}, {
	type: "ship-class",
	id: "delta_flyer_class_shuttlecraft",
	name: "Delta Flyer Class Shuttlecraft",
	frontArc: "90",
	rearArc: "90",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		2: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white",
			bank: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "xindi_insectoid",
	name: "Xindi Insectoid Starship",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "white",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}, {
	type: "ship-class",
	id: "olympic_class",
	name: "Olympic Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red"
		},
		4: {
			straight: "white"
		},
		5: {
			straight: "white"
		},
		6: {
			straight: "red"
		},
		"-1": {
			straight: "red"
		},
		min: -1,
		max: 6
	}
}, {
	type: "ship-class",
	id: "ferengi_shuttle",
	name: "Ferengi Shuttle",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green",
			turn: "white",
			about: "white"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white",
			about: "white"
		},
		3: {
			straight: "white"
		},
		min: 1,
		max: 3
	}
}, {
	type: "ship-class",
	id: "akira_class",
	name: "Akira Class",
	frontArc: "90",
	rearArc: "",
	maneuvers: {
		1: {
			straight: "green",
			bank: "green"
		},
		2: {
			straight: "green",
			bank: "white",
			turn: "white"
		},
		3: {
			straight: "white",
			bank: "white",
			turn: "red",
			about: "red"
		},
		4: {
			straight: "white"
		},
		min: 1,
		max: 4
	}
}];
