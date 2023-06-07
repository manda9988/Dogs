const express = require("express");
const db = require("./database");
const Dog = require("./models/Dog");
const dogController = require("./controllers/dogController");

const app = express();
app.set("view engine", "ejs");

const port = 3000;

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

// Routes pour les chiens
app.get("/dogs", dogController.getAllDogs);
app.get("/dogs/:id", dogController.getDogById);
app.post("/dogs", dogController.addDog);
app.put("/dogs/:id", dogController.updateDog);
app.delete("/dogs/:id", dogController.deleteDog);

// Middleware pour servir les fichiers statiques
app.use(express.static("public"));

// Route racine
app.get("/", (req, res) => {
  // Crée une liste de chiens fictifs
  const dogs = [
    {
      name: "Max",
      breed: "Labrador",
      age: 3,
      imageUrl: "/img/img1.jpg",
    },
    {
      name: "Bella",
      breed: "German Shepherd",
      age: 2,
      imageUrl: "/img/img2.jpg",
    },
    {
      name: "Charlie",
      breed: "Golden Retriever",
      age: 4,
      imageUrl: "/img/img3.jpg",
    },
    { name: "Lucy", breed: "Bulldog", age: 5, imageUrl: "/img/img4.jpg" },
    { name: "Cooper", breed: "Poodle", age: 1, imageUrl: "/img/img5.jpg" },
    { name: "Luna", breed: "Beagle", age: 3, imageUrl: "/img/img6.jpg" },
    { name: "Max", breed: "Siberian Husky", age: 2, imageUrl: "/img/img7.jpg" },
    { name: "Daisy", breed: "Boxer", age: 4, imageUrl: "/img/img8.jpg" },
    { name: "Rocky", breed: "Rottweiler", age: 6, imageUrl: "/img/img9.jpg" },
    { name: "Sadie", breed: "Great Dane", age: 2, imageUrl: "/img/img10.jpg" },
    { name: "Buddy", breed: "Bulldog", age: 4, imageUrl: "/img/img11.jpg" },
    {
      name: "Molly",
      breed: "French Bulldog",
      age: 3,
      imageUrl: "/img/img12.jpg",
    },
    { name: "Tucker", breed: "Corgi", age: 2, imageUrl: "/img/img13.jpg" },
    { name: "Lola", breed: "Shih Tzu", age: 5, imageUrl: "/img/img14.jpg" },
    {
      name: "Bear",
      breed: "Bernese Mountain Dog",
      age: 3,
      imageUrl: "/img/img15.jpg",
    },
    { name: "Zoe", breed: "Pomeranian", age: 2, imageUrl: "/img/img16.jpg" },

    // Ajoute les autres chiens fictifs ici...
  ];

  // Renvoie les chiens fictifs en tant que réponse
  res.render("index", { dogs });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
