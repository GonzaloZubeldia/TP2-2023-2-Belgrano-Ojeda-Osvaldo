import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const userRoutes = Router();

const userController = new UserController();

userRoutes.get("/", userController.getAllUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.put("/:id", userController.updateUser);

export default userRoutes;
