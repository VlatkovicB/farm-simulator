import config from "../config";
import UnitService from "../services/UnitService";

const { BUILDING_FEEDING_INTERVAL, UNIT_FEEDING_INTERVAL } = config;

export const buildingFeedingUnits = (): NodeJS.Timeout =>
	setInterval(() => {
		const feedAmount = Math.ceil(
			BUILDING_FEEDING_INTERVAL / UNIT_FEEDING_INTERVAL / 2
		);
		UnitService.feedUnits(feedAmount);
	}, BUILDING_FEEDING_INTERVAL);

export const unitsDecaying = (): NodeJS.Timeout =>
	setInterval(() => {
		UnitService.unitsDecay();
	}, UNIT_FEEDING_INTERVAL);
