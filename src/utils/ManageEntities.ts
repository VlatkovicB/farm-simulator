import Building from "../models/Building";
import Unit from "../models/Unit";
import BuildingService from "../services/BuildingService";
import UnitService from "../services/UnitService";

export class ManageEntities {
	buildings: Array<Building> = [];
	units: Array<Unit> = [];
	static instance: ManageEntities = null;

	private constructor() {}

	static getInstance(): ManageEntities {
		if (this.instance) return this.instance;
		this.instance = new ManageEntities();

		return this.instance;
	}

	initiateEntities(): void {
		this.unitsDecaying();
		this.buildingFeedingUnits();
	}

	unitsDecaying = async (): Promise<void> => {
		this.units = await UnitService.getAll();
		this.units.forEach((unit) => unit.startDecay());
	};

	buildingFeedingUnits = async (): Promise<void> => {
		this.buildings = await BuildingService.getAll();
		this.buildings.forEach((building) => building.initiateFeeding());
	};

	registerUnit(unit: Unit): void {
		unit.startDecay();
		this.units.push(unit);
	}

	registerBuilding(building: Building): void {
		building.initiateFeeding();
		this.buildings.push(building);
	}
}
