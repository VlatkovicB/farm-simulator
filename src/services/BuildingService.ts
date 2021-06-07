import Building from "../models/Building";

class BuildingService {
	getAll() {
		return Building.findAll();
	}

	create(building: Building) {
		return Building.create(building);
	}
}

export default new BuildingService();
