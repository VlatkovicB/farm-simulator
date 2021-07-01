import { Config } from "./definitions/Config";

const config: Config = {
	UNIT_FEEDING_INTERVAL: parseInt(process.env.UNIT_FEEDING_INTERVAL),
	BUILDING_FEEDING_INTERVAL: parseInt(process.env.BUILDING_FEEDING_INTERVAL),
	HP: parseInt(process.env.HP),
};

export const MINIMUM_INTERVAL = 1000;

export default config;
