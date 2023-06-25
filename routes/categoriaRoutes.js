import { Router } from "express";
import CategoriaController from "../Controllers/CategoriaController.js";

const categoriaRoutes = Router();

const categoriaController = new CategoriaController();

categoriaRoutes.get("/", categoriaController.getAllCategorias);
categoriaRoutes.get("/:id", categoriaController.getCategoriaById);
categoriaRoutes.post("/", categoriaController.createCategoria);
categoriaRoutes.delete("/:id", categoriaController.deleteCategoria);
categoriaRoutes.put("/:id", categoriaController.updateCategoria);

export default categoriaController;
