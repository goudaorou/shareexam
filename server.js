const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const port = 5000;

// Connexion à la base de données
connectDB();

// Middleware pour lire le body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes principales
app.use("/epreuve", require("./routes/epreuveroute"));
app.use("/api/auth", require("./routes/userroute"));

// Swagger Docs
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Lancement du serveur
app.listen(port, () => console.log(`✅ Serveur démarré sur le port ${port}`));
