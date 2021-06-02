import { Request, Response } from "express";
import Building from "../models/Building";
import BuildingService from "../services/BuildingService";

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
}

export default new BuildingController();
