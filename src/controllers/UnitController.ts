import { NextFunction, Request, Response } from "express";
import NotFoundError from "../errors/NotFoundError";
import Unit from "../models/Unit";
import UnitService from "../services/UnitService";

class UnitController {
	async getAll(request: Request, response: Response, next: NextFunction) {
		try {
			const data = await UnitService.getAll();

			response.status(200).send(data);
		} catch (error) {
			next(error);
		}
	}

	async create(request: Request, response: Response, next: NextFunction) {
		const unit: Unit = request.body;

		try {
			const data = await UnitService.create(unit);

			response.status(201).send(data);
		} catch (error) {
			next(error);
		}
	}

	async feedOneUnit(request: Request, response: Response, next: NextFunction) {
		const { id } = request.params;
		const unitId = parseInt(id);
		try {
			const unit = await UnitService.findOne(unitId);

			if (unit) {
				const updatedUnit = await UnitService.feedOne(unit, 1);
				response.status(200).send(updatedUnit);
			} else {
				throw new NotFoundError(`There's no unit with ID: ${id}`);
			}
		} catch (error) {
			next(error);
		}
	}
}

export default new UnitController();
