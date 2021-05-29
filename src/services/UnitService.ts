import Unit from "../models/Unit";

class UnitService {
	public async getAll() {
		return await Unit.findAll();
	}

	public async create(unit: Unit) {
		return await Unit.create(unit);
	}
}

export default new UnitService();
