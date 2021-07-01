import { NextFunction, Request, Response } from "express";
import Building from "../models/Building";
import BuildingService from "../services/BuildingService";

class BuildingController {
	async getAll(request: Request, response: Response, next: NextFunction) {
		try {
			const data = await BuildingService.getAll();
			return response.status(200).send(data);
		} catch (error) {
			return next(error);
		}
	}

	async create(request: Request, response: Response, next: NextFunction) {
		const building: Building = request.body;

		try {
			const data = await BuildingService.create(building);

			return response.status(201).send(data);
		} catch (error) {
			return next(error);
		}
	}
}

export default new BuildingController();
