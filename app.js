const express = require("express");
const app = express();
const path = require("path");


app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
