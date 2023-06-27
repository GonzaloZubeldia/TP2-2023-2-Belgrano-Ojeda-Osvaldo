import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import validacionLogin from "../Middlewares/validacionLogin.js"
import validacionAdmin from "../Middlewares/validacionAdmin.js";

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.loginUser);

userRoutes.get("/me", validacionLogin, userController.me); //Se aplica la validacion del login (individualmente)
userRoutes.use(validacionLogin);    //De aca para abajo necesitan estar logueados (manera global)
userRoutes.put("/:id", userController.updateUser);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/logout", userController.logoutUser);

userRoutes.use(validacionAdmin);    //Se aplica validacion de Rol administrador
userRoutes.get("/", userController.getAllUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
