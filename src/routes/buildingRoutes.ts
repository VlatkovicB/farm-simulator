import express from "express"
import BuildingController from "../controllers/BuildingController"

const router = express.Router()

router.get("/", BuildingController.getAll)

router.post("/", BuildingController.create)

export default router
