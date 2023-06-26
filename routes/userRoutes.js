import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import validacionLogin from "../Middlewares/validacionLogin.js"

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.loginUser);

userRoutes.get("/me", validacionLogin, userController.me);
userRoutes.use(validacionLogin);    //De aca para abajo necesitan estar logueados
userRoutes.get("/", userController.getAllUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);
userRoutes.post("/logout", userController.logoutUser);

export default userRoutes;
