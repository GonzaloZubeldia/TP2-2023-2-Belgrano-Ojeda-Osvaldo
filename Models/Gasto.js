import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Gasto extends Model{}

Gasto.init({
    name:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,20],
            isAlpha: true,
            isNull: false,
        }
    },
    monto:{
        type: DT.INTEGER,
        allowNull:false,
        validate: {
            len:[1,10],
            isInt: true,
            isNull: false,
        }
    },
    fecha:{
        type: DT.DATE,
        allowNull:false,
        validate: {
            isDate: true,
            isNull: false,
        }
    },
    categoriaID:{
        type: DT.INTEGER,
        allowNull:false,
    },
    UserID:{
        type: DT.INTEGER,
        allowNull:false,
    },
},
{
    sequelize:connection,
    modelName:"Gasto",
}
);

export default Gasto;