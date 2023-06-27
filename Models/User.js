import { DataTypes as DT, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  async validatePassword(passwordtextoPlano) {
    const passwordHass = await bcrypt.hash(passwordtextoPlano, this.salt);
    return this.password === passwordHass;
  }
}

User.init(
  {
    id: {
      type: DT.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
        isAlpha: true,
      },
    },
    lastName: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [1, 20],
        isAlpha: true,
      },
    },
    password: {
      type: DT.STRING,
      allowNull: false,
      validate: {
        len: [1, 10],
      },
    },
    email: {
      type: DT.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    salt: {
      type: DT.STRING,
    },
    role: {
      type: DT.STRING,
      defaultValue:"user"
    },
  },
  {
    sequelize: connection,
    modelName: "User",
    timestamps:false,
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user.salt = salt;
  const passwordHash = await bcrypt.hash(user.password, salt);
  user.password = passwordHash;
});

User.beforeBulkCreate(async (user) => {
  const salt = await bcrypt.genSalt();
  user[0].dataValues.salt = salt;
  const passwordHash = await bcrypt.hash(user[0].dataValues.password, salt);
  user[0].dataValues.password = passwordHash;
});

export default User;
