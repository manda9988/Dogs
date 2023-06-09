const express = require("express");
const router = express.Router();
const dogsData = require("../data/dogs.json");

const controller = {
  dogDetails: (req, res) => {
    const { id } = req.params;
    const dog = dogsData.find((dog) => dog.id.toString() === id);

    if (dog) {
      res.render("dog", { dog });
    } else {
      res.status(404).send("Chien non trouvé");
    }
  },
};

module.exports = controller;
