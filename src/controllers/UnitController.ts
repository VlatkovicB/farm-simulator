import { NextFunction, Request, Response } from "express";
import BadRequestError from "../errors/BadRequestError";
import NotFoundError from "../errors/NotFoundError";
import Unit from "../models/Unit";
import BuildingService from "../services/BuildingService";
import UnitService from "../services/UnitService";

class UnitController {
	async getAll(request: Request, response: Response, next: NextFunction) {
		try {
			const data = await UnitService.getAll();

			return response.send(data);
		} catch (error) {
			return next(error);
		}
	}

	async create(request: Request, response: Response, next: NextFunction) {
		const unit: Unit = request.body;

		try {
			const building = await BuildingService.findById(unit.buildingId);

			if (!building) {
				throw new BadRequestError(
					`There is no building with ID: ${unit.buildingId}.`
				);
			}

			const data = await UnitService.create(unit);

			return response.status(201).send(data);
		} catch (error) {
			return next(error);
		}
	}

	async feedOneUnit(request: Request, response: Response, next: NextFunction) {
		const { id } = request.params;

		if (!id) {
			return next(new BadRequestError(`ID not provided.`));
		}

		try {
			const unitId = parseInt(id);
			const unit = await UnitService.findOne(unitId);

			if (!unit) {
				throw new NotFoundError(`There's no unit with ID: ${id}`);
			}

			const updatedUnit = await UnitService.feedOne(unit, 1);
			return response.status(200).send(updatedUnit);
		} catch (error) {
			return next(error);
		}
	}
}

export default new UnitController();
