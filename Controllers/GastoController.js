import {Gasto, User, Categoria} from "../Models/index.js";

class GastoController {
  constructor() {}
  getAllGastos = async (req, res) => {
    try {
      const result = await Gasto.findAll({
        attributes: ["descripcion", "monto", "fecha", "categoriaID", "userID"], //Filtro los campos que me trae la consulta
        include:[{
          model:Categoria,
          attributes:["name"],
          model:User,
          attributes:["id","name"]
        }],
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
      const result = await Gasto.findAll({
        attributes: ["descripcion", "monto", "fecha", "categoriaID", "userID"],
        include:[{
          model:Categoria,
          attributes:["name"],
          model:User,
          attributes:["id","name"]
        }],
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

  createGasto = async (req, res) => {
    try {
      const { descripcion, monto, fecha, categoriaID, userID} = req.body;
      const result = await Gasto.create({ descripcion, monto, fecha, categoriaID, userID });
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
      const { descripcion, monto, fecha, categoriaID, userID } = req.body;
      const result = await Gasto.drop(
        { descripcion, monto, fecha, categoriaID, userID },
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
      const { descripcion, monto, fecha, categoriaID, userID } = req.body;
      const result = await Gasto.update(
        { descripcion, monto, fecha, categoriaID, userID },
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
