var fs = require("fs");
var path = require("path");

var data = {
	sets: require("./sets"),
	rulings: require("./rulings"),
	missionSets: require("./missionSets"),
	missions: require("./missions"),
	ships: require("./ships"),
	shipClasses: require("./ship_classes"),
	captains: require("./captains"),
	admirals: require("./admirals"),
	ambassadors: require("./ambassadors"),
	upgrades: require("./upgrades"),
	starship_construction: require("./starship_construction"),
	resources: require("./resources"),
	others: require("./others")
};

var filepath = path.resolve(__dirname, "../../staw-utopia/data/data.json");
fs.writeFileSync(filepath, JSON.stringify(data));
