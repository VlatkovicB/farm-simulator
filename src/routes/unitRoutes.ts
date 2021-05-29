import express from "express";
import UnitController from "../controllers/UnitController";

const router = express.Router();

router.get("/", UnitController.getAll);

router.post("/", UnitController.create);

export default router;
