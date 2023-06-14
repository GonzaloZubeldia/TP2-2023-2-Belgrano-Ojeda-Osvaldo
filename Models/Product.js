import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class Product extends Model{}

Product.init({
    name:{
        type: DT.STRING,
        allowNull:false,
    },
    description:{
        type: DT.STRING,
        allowNull:false,
    },
    category:{
        type: DT.STRING,
        allowNull:false,
    },
},
{
    sequelize:connection,
    modelName:"Product",
}
);

export default Product;