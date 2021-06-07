import BadRequestError from "../errors/BadRequestError";
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

		if (!alive) {
			throw new BadRequestError("Unit has died.");
		}

		if (!lastFed || !isRecentlyFed) {
			unit.hp += amount;
			unit.lastFed = now;

			return unit.save();
		} else {
			throw new BadRequestError("Unit can't be fed that often!");
		}
	}

	async feedUnits(amount: number) {
		const allUnits = await this.getAll();

		for await (const unit of allUnits) {
			if (unit.alive) this.feedOne(unit, amount);
		}
	}

	async unitsDecay() {
		const units = await this.getAll();

		for (const unit of units) {
			await this.loseHealth(unit);
		}
	}
}

export default new UnitService();
