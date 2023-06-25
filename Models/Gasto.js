import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Gasto extends Model{}

Gasto.init({
    name:{
        type: DT.STRING,
        allowNull:false,
    },
    monto:{
        type: DT.INTEGER,
        allowNull:false,
    },
    fecha:{
        type: DT.DATE,
        allowNull:false,
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