import yaml from "js-yaml";
import fs from "fs";
import { DatabaseSettings } from "./database";

interface Config {
	app: {
		UNIT_FEEDING_INTERVAL: number;
		BUILDING_FEEDING_INTERVAL: number;
		HP: number;
	};
	database: DatabaseSettings;
}

let doc: Config;

try {
	doc = <Config>yaml.load(fs.readFileSync(__dirname + "/config.yml", "utf8"));
} catch (error) {
	console.log(error);
}

export default doc;
