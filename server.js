// server.js

const express = require("express");
const app = express();
const db = require("./app/services/database");
const router = require("./app/router");

const port = 3000;

// CONFIG
app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Connexion à la base de données et synchronisation du modèle
db.authenticate()
  .then(() => {
    console.log("Database connected...");
    db.sync()
      .then(() => {
        console.log("Dog table synced");
      })
      .catch((error) => console.log(error));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// // Middleware pour servir les fichiers statiques
// app.use((req, res) => {
//   console.log("je suis un middleware appelé tout le temps");
// });

// Utilisation du router
app.use(router);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
