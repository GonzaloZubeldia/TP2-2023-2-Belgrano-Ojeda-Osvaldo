import { DataTypes as DT, Model } from 'sequelize';
import connection from "../connection/connection.js";

class User extends Model{
    async validatePassword(passwordtextoPlano) {
        const passwordHass = await bcrypt.hash(passwordtextoPlano, this.salt);
        return this.password === passwordHass;
    }
}

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

User.beforeCreate(async(user)=>{
    const salt = await bcrypt.genSalt();
    user.Salt = salt
    const passwordHash = await bcrypt.hash(user.Password, salt)
    
    user.Password = passwordHash
})

User.beforeBulkCreate(async(user)=>{
    const salt = await bcrypt.genSalt();
    user[0].dataValues.Salt = salt

    const passwordHash = await bcrypt.hash(user[0].dataValues.Password, salt)
    
    user[0].dataValues.Password = passwordHash
})

export default User;