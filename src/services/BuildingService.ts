import Building from "../models/Building";
import { buildings } from "../utils/utils";

class BuildingService {
	getAll() {
		return Building.findAll();
	}

	create(building: Building) {
		buildings.push(building);
		return Building.create(building);
	}
}

export default new BuildingService();
