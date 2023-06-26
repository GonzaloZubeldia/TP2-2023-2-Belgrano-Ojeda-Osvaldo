import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Gasto extends Model{}

Gasto.init({
    id:{
        type: DT.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    descripcion:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,20],
            isAlphanumeric: true,
        }
    },
    monto:{
        type: DT.INTEGER,
        allowNull:false,
        validate: {
            len:[1,20],
            isNumeric: true,
        }
    },
    fecha:{
        type: DT.DATE,
        allowNull:false,
        validate: {
            isDate: true, //formato MM-DD-YY
        }
    },
    categoriaID:{
        type: DT.INTEGER,
        allowNull:false,
    },
    userID:{
        type: DT.INTEGER,
        allowNull:false,
    },
},
{
    sequelize:connection,
    modelName:"Gasto",
    timestamps:false,
}
);

export default Gasto;