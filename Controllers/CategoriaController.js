import Categoria from "../Models/Categoria.js";
import User from "../Models/Gasto.js";

class CategoriaController {
  constructor() {}
  getAllCategorias = async (req, res) => {
    try {
      const result = await Categoria.findAll({
        attributes: ["id", "categoria"], //Filtro los campos que me trae la consulta
      });
      if (result.length === 0) throw new Error("No hay categorías");
      res.status(200).send({
        success: true,
        message: "Estas son las categorías encontradas",
        result,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getCategoriaById = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await User.findAll({
        attributes: ["id", "categoria"],
        //Filtro por Id
        where: {
          id,
        },
      });
      if (result.length === 0) throw new Error("No hay categorias");
      res.status(200).send({
        success: true,
        message: "Categoría encontrada",
        result: result[0].dataValues,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  creatCategoria = async (req, res) => {
    try {
      const { id, categoria } = req.body;
      const result = await Categoria.create({ id, categoria });
      if (!result) throw new Error("No se pudo crear la categoría");
      res.status(200).send({
        success: true,
        message: "Se creo con éxito la categoría",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteCategoria = async (req, res) => {
    try {
      const { id } = req.params;
      const { categoria } = req.body;
      const result = await Categoria.drop(
        { id, categoria },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo eliminar la categoría");
      res.status(200).send({
        success: true,
        message: "Se eliminó con exito",
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
      const { categoria } = req.body;
      const result = await Categoria.update(
        { categoria },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 0) throw new Error("No se pudo actualizar la categoría");
      res.status(200).send({
        success: true,
        message: "Se actualizó con éxito",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default CategoriaController;
