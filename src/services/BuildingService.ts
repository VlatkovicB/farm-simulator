import Building from "../models/Building";
import UnitService from "./UnitService";

class BuildingService {
	getAll() {
		return Building.findAll();
	}

	create(building: Building) {
		return Building.create(building);
	}

	async feedUnits(amount: number) {
		const allUnits = await UnitService.getAll();

		for (const unit of allUnits) {
			try {
				await UnitService.feedOne(unit, amount);
			} catch (error) {
				console.error("Unit has been fed recently.");
			}
		}
	}
}

export default new BuildingService();
