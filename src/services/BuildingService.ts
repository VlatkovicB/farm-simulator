import Building from "../models/Building";

class BuildingService {
	public async getAll() {
		return await Building.findAll();
	}

	public async create(building: Building) {
		return await Building.create(building);
	}
}

export default new BuildingService();
