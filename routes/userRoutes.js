import { Router } from "express";
const userRoutes = Router();
import connection from "../connection/index.js";


userRoutes.get("/",(req, res) => {
  res.send("get all users")
});
userRoutes.get("/:id",(req, res) => {


    res.send("get user by id")
  });
  userRoutes.post("/",(req, res) => {
    //Desestructuramos el body para tener los datos
    const {name, lastName, password} = req.body
    //Creamos la query
    const query = `INSERT INTO user(name, lastName, password) VALUES("${name}","${lastName}","${password}")`;
    //Ejecutamos el metodo query
    connection.query(query,(err, response, fields)=>{
      if(err) throw err
        res.status(201).send("Create User")
    });
  });
  userRoutes.put("/:id",(req, res) => {
    res.send("update user by id")
  });
  userRoutes.delete("/:id",(req, res) => {
    res.send("delete user by id")
  });

export default userRoutes