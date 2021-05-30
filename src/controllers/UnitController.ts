import { Request, Response } from "express";
import Unit from "../models/Unit";
import UnitService from "../services/UnitService";

class UnitController {
	async getAll(request: Request, response: Response) {
		try {
			const data = await UnitService.getAll();

			response.status(200).send(data);
		} catch (error) {
			response.status(500).send({ error });
		}
	}

	async create(request: Request, response: Response) {
		const unit: Unit = request.body;

		try {
			const data = await UnitService.create(unit);

			response.status(201).send(data);
		} catch (error) {
			response.status(500).send({ error });
		}
	}

	async feedOneUnit(request: Request, response: Response) {
		const { id } = request.params;
		const unitId = parseInt(id);
		try {
			const unit = await UnitService.findOne(unitId);

			if (unit) {
				try {
					const updatedUnit = await UnitService.feedOne(unit, 1);
					response.status(200).send(updatedUnit);
				} catch (error) {
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

	async unitsDecay() {
		const units = await UnitService.getAll();

		for (const unit of units) {
			await UnitService.loseHealth(unit);
		}
	}
}

export default new UnitController();
