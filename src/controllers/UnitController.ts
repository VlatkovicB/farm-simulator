import { Request, Response } from "express";
import Unit from "../models/Unit";
import UnitService from "../services/UnitService";

class UnitController {
	public async getAll(request: Request, response: Response) {
		try {
			const data = await UnitService.getAll();

			response.status(200).send(data);
		} catch (error) {
			response.status(500).send({ error });
		}
	}

	public async create(request: Request, response: Response) {
		const unit: Unit = request.body;

		try {
			const data = await UnitService.create(unit);

			response.status(201).send(data);
		} catch (error) {
			response.status(500).send({ error });
		}
	}

	public async feedOneUnit(request: Request, response: Response) {
		const { id } = request.params;
		const unitId = parseInt(id);
		try {
			const unit = await UnitService.findOne(unitId);

			if (unit) {
				const now = new Date();
				const lastFed = unit.lastFed;

				const isRecentlyFed =
					lastFed && now.getTime() - lastFed.getTime() < 5000;

				if (!lastFed || !isRecentlyFed) {
					unit.hp += 1;
					unit.lastFed = now;

					const updatedUnit = await UnitService.update(unit);

					response.status(200).send(updatedUnit);
				} else {
					response
						.status(400)
						.send({ message: "Unit can't be fed that often!" });
				}
			} else {
				response.status(404).send({ message: "Unit not found." });
			}
		} catch (error) {
			console.log(error);
			response.status(500).send({ message: error.message });
		}
	}
}

export default new UnitController();
