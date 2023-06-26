import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Categoria extends Model{}

Categoria.init({
    id:{
        type: DT.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    categoria:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,20],
            isAlpha: true,
        }
    },
},
{
    sequelize:connection,
    modelName:"Categoria",
    // timestamps:false,
}
);

export default Categoria;