import "dotenv/config";
import { Sequelize } from "sequelize";
import { database, username, password, host, port, dialect } from "../config/config.js";

const connection = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
});
try {
  await connection.authenticate()
  console.log ("DB Connection OK")
} catch (error){
  console.log (`error:${error}`)
}

export default connection