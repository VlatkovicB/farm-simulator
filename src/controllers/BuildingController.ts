import { Request, Response } from "express";
import Building from "../models/Building";
import BuildingService from "../services/BuildingService";
import UnitService from "../services/UnitService";

class BuildingController {
	async getAll(request: Request, response: Response) {
		try {
			const data = await BuildingService.getAll();

			response.status(200).send(data);
		} catch (error) {
			response.status(500).send({ error });
		}
	}

	async create(request: Request, response: Response) {
		const building: Building = request.body;

		try {
			const data = await BuildingService.create(building);

			response.status(201).send(data);
		} catch (error) {
			response.status(500).send({ error });
		}
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

export default new BuildingController();
