//Conexion BD
import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    port: "3306",
    database: "proyecto_jueves_tp2_2023",
});

connection.connect(err=>{
    if(err) throw err
    console.log("DB Connected")
})


export default connection