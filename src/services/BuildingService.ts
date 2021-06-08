import Building from "../models/Building";
import { ManageEntities } from "../utils/ManageEntities";

class BuildingService {
	getAll() {
		return Building.findAll();
	}

	async create(building: Building) {
		const createdBuilding = await Building.create(building);

		ManageEntities.getInstance().registerBuilding(createdBuilding);

		return createdBuilding;
	}

	findById(id: number) {
		return Building.findOne({ where: { id } });
	}
}

export default new BuildingService();
