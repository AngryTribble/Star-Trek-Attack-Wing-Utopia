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

let dataDir = path.resolve(__dirname, "../../staw-utopia/data");
let filepath = path.resolve(__dirname, `${dataDir}/data.json`);
// create the folder if it isn't there - todo: must be a better way to do this step in the build
if(!fs.existsSync(dataDir)) {
	fs.mkdirSync(dataDir, { recursive: true });
}
fs.writeFileSync(filepath, JSON.stringify(data));
