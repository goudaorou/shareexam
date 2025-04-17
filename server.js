const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const Port= 5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/epreuve", require("./routes/epreuveroute"))
app.use("/api/auth", require("./routes/userroute"))




app.listen(Port, ()=> console.log(`le serveur est démarré sur le port ${Port}`));