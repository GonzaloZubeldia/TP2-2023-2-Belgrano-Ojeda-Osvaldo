import express from "express";
const app = express();

import router from "./routes/index.js";


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", router)

//server
app.listen(8080, () => {
  console.log("Puerto OK http://localhost:8080");
});
