// mainController.js

const express = require("express");
const router = express.Router();

// On importe les dogs
const dogs = require("../data/dogs.json");
const controller = {
  homePage: (req, res) => {
    res.locals.dogs = dogs;
    res.render("index");
  },
};

module.exports = controller;
