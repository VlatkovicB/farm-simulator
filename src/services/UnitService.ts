import Unit from "../models/Unit";

class UnitService {
	getAll() {
		return Unit.findAll();
	}

	create(unit: Unit) {
		return Unit.create(unit);
	}

	findOne(unitId: number) {
		return Unit.findOne({ where: { id: unitId } });
	}

	loseHealth(unit: Unit) {
		if (unit.alive) unit.hp -= 1;

		return unit.save();
	}

	feedOne(unit: Unit, amount: number) {
		const now = new Date();
		const { lastFed, alive } = unit;

		const isRecentlyFed = lastFed && now.getTime() - lastFed.getTime() < 5000;

		if (!alive) throw new Error("Unit has died.");

		if (!lastFed || !isRecentlyFed) {
			unit.hp += amount;
			unit.lastFed = now;

			return unit.save();
		} else {
			throw new Error("Unit can't be fed that often!");
		}
	}
}

export default new UnitService();
