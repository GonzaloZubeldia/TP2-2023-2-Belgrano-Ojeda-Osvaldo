import { Router } from "express";
import GastoController from "../Controllers/GastoController.js";

const gastoRoutes = Router();

const gastoController = new GastoController();

gastoRoutes.get("/", gastoController.getAllGastos);
gastoRoutes.get("/:id", gastoController.getGastoById);
gastoRoutes.post("/", gastoController.createGasto);
gastoRoutes.delete("/:id", gastoController.deleteGasto);
gastoRoutes.put("/:id", gastoController.updateGasto);

export default gastoRoutes;
