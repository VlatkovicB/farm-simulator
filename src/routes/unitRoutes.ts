import express from "express"
import UnitController from "../controllers/UnitController"

const router = express.Router()

router.get("/", UnitController.getAll)

router.post("/", UnitController.create)

router.put("/feed/:id", UnitController.feedOneUnit)

export default router
