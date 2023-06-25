import { Router } from "express";
import userRoutes from "./userRoutes.js";
import gastoRoutes from "./gastoRoutes.js";
import categoriaRoutes from "./categoriaRoutes.js";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/gastos", gastoRoutes)
routes.use("/categorias", categoriaRoutes)

export default routes