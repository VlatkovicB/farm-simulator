import Building from "../models/Building";
import Unit from "../models/Unit";
import BuildingService from "../services/BuildingService";
import UnitService from "../services/UnitService";

export let buildings: Array<Building> = [];
export let units: Array<Unit> = [];

export const buildingFeedingUnits = async (): Promise<void> => {
	buildings = await BuildingService.getAll();
	buildings.forEach((building) => building.feedUnits());
};

export const unitsDecaying = async (): Promise<void> => {
	units = await UnitService.getAll();
	units.forEach((unit) => unit.loseHealth());
};
