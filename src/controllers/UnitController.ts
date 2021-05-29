import { Request, Response } from "express";
import Unit from "../models/Unit";
import BuildingService from "../services/BuildingService";
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
}

export default new UnitController();
