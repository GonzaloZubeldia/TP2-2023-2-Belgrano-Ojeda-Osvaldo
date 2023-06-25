import User from "../Models/Gasto.js";

class UserController {
  constructor() {}
  getAllGastos = async (req, res) => {
    try {
      const result = await User.findAll({
        attributes: ["name", "monto", "fecha", "categoriaID", "userID"], //Filtro los campos que me trae la consulta
      });
      if (result.length === 0) throw new Error("No hay gastos");
      res.status(200).send({
        success: true,
        message: "Estos son los gastos encontrados",
        result,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getGastoById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await User.findAll({
        attributes: ["name", "monto", "fecha", "categoriaID", "userID"],
        //Filtro por Id
        where: {
          id,
        },
      });
      if (result.length === 0) throw new Error("No hay gastos");
      res.status(200).send({
        success: true,
        message: "Gasto encontrado",
        result: result[0].dataValues,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  creatGasto = async (req, res) => {
    try {
      const { name, lastName, password, email } = req.body;
      const result = await User.create({ name, monto, fecha, categoriaID, userID });
      if (!result) throw new Error("No se pudo crear el Usuario");
      res.status(200).send({
        success: true,
        message: "Se creo con exito el gasto",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteGasto = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, monto, fecha, categoriaID, userID } = req.body;
      const result = await User.drop(
        { name, monto, fecha, categoriaID, userID },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo eliminar el gasto");
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

  updateGasto = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, monto, fecha, categoriaID, userID } = req.body;
      const result = await User.update(
        { name, monto, fecha, categoriaID, userID },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo actualizar el gasto");
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

export default GastoController;
