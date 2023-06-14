import User from "../Models/User.js";

class UserController {
  constructor() {}

  getAllUser = async (req, res) => {
    try {
      const result = await User.findAll({
        attributes: ["name", "lastName", "password", "email"], //Filtro los campos que me trae la consulta
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
        //Filtro por Id
        where: {
          id,
        },
      });
      if (result.length === 0) throw new Error("No hay usuarios");
      res.status(200).send({
        success: true,
        message: "Usuario encontrado",
        result: result[0].dataValues,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, lastName, password, email } = req.body;
      const result = await User.create({ name, lastName, password, email });
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
      const result = await User.drop(
        { name, lastName, password, email },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo eliminar el usuario");
      res.status(200).send({
        success: true,
        message: "Se elimino con exito",
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
}

export default UserController;
