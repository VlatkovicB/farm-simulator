import Unit from "../models/Unit";

class UnitService {
	public getAll() {
		return Unit.findAll();
	}

	public create(unit: Unit) {
		return Unit.create(unit);
	}

	public findOne(unitId: number) {
		return Unit.findOne({ where: { id: unitId } });
	}

	update(unit: Unit) {
		return unit.save();
	}
}

export default new UnitService();
