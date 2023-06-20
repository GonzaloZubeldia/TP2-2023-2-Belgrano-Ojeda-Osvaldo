import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Categoria extends Model{}

Categoria.init({
    id:{
        type: DT.STRING,
        allowNull:false,
    },
    categoria:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,20],
            isAlpha: true,
            isNull: false,
        }
    },
},
{
    sequelize:connection,
    modelName:"Categoria",
}
);

export default Categoria;