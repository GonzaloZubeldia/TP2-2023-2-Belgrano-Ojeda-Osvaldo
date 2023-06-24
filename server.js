import express from "express";
import connection from "./connection/connection.js";

const app = express();
import { serverPort } from "./config/config.js";
import routes from "./routes/routes.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(routes)

//Momentaneamente
// import User from "./Models/User.js";
// import Product from "./Models/Product.js";
// import Categoria from "./Models/Categoria.js";
// import Gasto from "./Models/Gasto.js";

await connection.sync({force:false}).then(() =>{
  app.listen(serverPort, () => {
    console.log(`Server OK http://localhost:"${serverPort}"`);
  });
});

