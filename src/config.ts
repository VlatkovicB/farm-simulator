import yaml from "js-yaml";
import fs from "fs";

interface Config {
	UNIT_FEEDING_INTERVAL: number;
	BUILDING_FEEDING_INTERVAL: number;
	HP: number;
}

let doc: Config;

try {
	doc = <Config>yaml.load(fs.readFileSync(__dirname + "/config.yml", "utf8"));
} catch (error) {
	console.log(error);
}

export default doc;
