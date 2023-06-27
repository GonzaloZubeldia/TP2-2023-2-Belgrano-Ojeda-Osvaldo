import { User, Gasto } from "../Models/index.js";
import { generateToken } from "../Utils/token.js";
import gastoRoutes from "../routes/gastoRoutes.js";

class UserController {
  constructor() {}

  getAllUser = async (req, res) => {
    try {
      const result = await User.findAll({
        attributes: ["name", "lastName", "password", "email"], //Filtro los campos que me trae la consulta
        include: [
          {
            model: Gasto,
            attributes: ["descripcion", "monto"],
          },
        ],
      });
      if (result.length === 0) throw new Error("No hay usuarios");
      res.status(200).send({
        success: true,
        message: "Estos son los usuarios encontrados",
        result,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await User.findAll({
        attributes: ["name", "lastName", "password", "email"],
        include: {
          model: Gasto,
          attributes: ["descripcion", "monto"],
        },
        where: {
          id,
        },
      });
      if (result.length === 0) throw new Error("No hay usuarios");
      res.status(200).send({
        success: true,
        message: "Usuario encontrada",
        result: result[0].dataValues,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createUser = async (req, res, next) => {
    try {
      const user = await User.count({
        where: {
          id: 1,
        },
      });
      let role = "user";
      if (user == 0) {
        role = "admin";
      }
      const { name, lastName, password, email } = req.body;
      const result = await User.create({
        name,
        lastName,
        password,
        email,
        role,
      });
      if (!result) throw new Error("No se pudo crear el Usuario");
      res.status(200).send({
        success: true,
        message: "Se creo con exito el usuario",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastName, password, email } = req.body;
      const result = await User.findOne(
        { name, lastName, password, email },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo eliminar el usuario");
      await result.destroy();
      res.status(200).send({
        success: true,
        message: "Se elimino con exito el usuario junto con sus gastos",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastName, password, email } = req.body;
      const result = await User.update(
        { name, lastName, password, email },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo actualizar el usuario");
      res.status(200).send({
        success: true,
        message: "Se actualizo con exito",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  loginUser = async (req, res, next) => {
    try {
      const { email, password: passwordTextoPlano } = req.body;
      const result = await User.findOne({
        where: {
          email,
        },
      });
      if (!result) {
        const error = new Error("Usuario no encontrado");
        error.status = 400;
        throw error;
      }
      const comparePassword = await result.validatePassword(passwordTextoPlano);
      if (!comparePassword) {
        const error = new Error("Contraseña incorrecta");
        error.status = 400;
        throw error;
      }

      const payload = {
        id: result.id,
        email: result.email,
        role: result.role,
      };

      const token = generateToken(payload);
      res.cookie("token", token);

      res.status(200).send({
        success: true,
        message: "Logueado con exito",
      });
    } catch (error) {
      next(error);
    }
  };

  me = (req, res, next) => {
    const { user } = req;

    res.status(200).send({
      success: true,
      message: "Usuario ok",
      result: user,
    });
  };

  logoutUser = (req, res, next) => {
    res.cookie("token", "");
    res.status(200).send({
      success: true,
      message: "Usuario deslogueado",
    });
  };
}

export default UserController;
