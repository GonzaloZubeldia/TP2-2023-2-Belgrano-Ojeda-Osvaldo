import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class User extends Model{}

User.init({
    name:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,20],
            isAlpha: true,
            isNull: false,
        }
    },
    lastName:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,20],
            isAlpha: true,
            isNull: false,
        }
    },
    password:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            len:[1,10],
            isNull: false,
        }
    },
    email:{
        type: DT.STRING,
        allowNull:false,
        validate: {
            isEmail: true,
            isNull: false,
        }
    },
},
{
    sequelize:connection,
    modelName:"User",
}
);

export default User;