import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Categoria extends Model{}

Categoria.init({
    id:{
        type: DT.INTEGER,
        allowNull:false,
    },
    categoria:{
        type: DT.STRING,
        allowNull:false,
        primaryKey:true,
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