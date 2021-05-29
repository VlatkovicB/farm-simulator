import express from "express";
import FarmBuilding from "../models/FarmBuilding";
import FarmUnit from "../models/FarmUnit";

const router = express.Router();

router.get("/farm-unit", async (request, response) => {
	try {
		const units = await FarmUnit.findAll();
		return response.status(200).send(units);
	} catch (error) {
		console.log(error);
	}
	return response.status(400).send({ message: "Error occured" });
});

router.get("/farm-building", async (request, response) => {
	try {
		const units = await FarmBuilding.findAll();
		return response.status(200).send(units);
	} catch (error) {
		console.log(error);
	}
	return response.status(400).send({ message: "Error occured" });
});

router.post("/farm-building", async (request, response) => {
	const building: FarmBuilding = request.body;
	try {
		const createdBuilding = await FarmBuilding.create(building);
		return response.status(200).send(createdBuilding);
	} catch (error) {
		console.log(error);
	}
	return response.status(400).send({ message: "Error occured" });
});

export default router;
