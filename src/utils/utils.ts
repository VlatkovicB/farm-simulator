import config from "../config";
import BuildingController from "../controllers/BuildingController";
import UnitController from "../controllers/UnitController";

const { BUILDING_FEEDING_INTERVAL, UNIT_FEEDING_INTERVAL } = config;

// Building feeding units
export const buildingFeedingUnits = () =>
	setInterval(() => {
		const feedAmount = Math.ceil(
			BUILDING_FEEDING_INTERVAL / UNIT_FEEDING_INTERVAL / 2
		);
		BuildingController.feedUnits(feedAmount);
	}, BUILDING_FEEDING_INTERVAL);

export const unitsDecaying = () =>
	setInterval(() => {
		UnitController.unitsDecay();
	}, UNIT_FEEDING_INTERVAL);
