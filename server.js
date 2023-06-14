import express from "express";
import connection from "./connection/connection.js";

const app = express();

//Momentaneamente
import User from "./Models/User.js";
import Product from "./Models/Product.js";
import Category from "./Models/Category.js";
import Gasto from "./Models/Gasto.js";

await connection.sync({force:false}).then(() =>{
  app.listen(8080, () => {
    console.log("Server OK http://localhost:8080");
  });
});

