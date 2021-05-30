import Building from "../models/Building";

class BuildingService {
	async getAll() {
		return await Building.findAll();
	}

	async create(building: Building) {
		return await Building.create(building);
	}
}

export default new BuildingService();
