import "dotenv/config";

import { Sequelize } from "sequelize";

const database = process.env.DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWPORD;
const dialect = process.env.DB_DIALECT;

const connection = new Sequelize(database, username, password, {
  host: "localhost",
  dialect,
  port: 3306,
});
try {
  await connection.authenticate()
  console.log ("DB Connection OK")
} catch (error){
  console.log (`error:${error}`)
}

export default connection