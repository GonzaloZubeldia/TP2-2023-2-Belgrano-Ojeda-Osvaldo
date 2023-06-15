import { Router } from "express";
import GastoController from "../Controllers/GastoController.js";

const gastoRoutes = Router();

const gastoController = new GastoController();

gastoRoutes.get("/", gastoController.getAllUser);
gastoRoutes.get("/:id", gastoController.getUserById);
gastoRoutes.post("/", gastoController.createUser);
gastoRoutes.delete("/:id", gastoController.deleteUser);
gastoRoutes.put("/:id", gastoController.updateUser);

export default gastoController;
