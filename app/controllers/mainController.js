const express = require("express");
const router = express.Router();
const dogs = require("../data/dogs.json");

const controller = {
  homePage: (req, res) => {
    res.render("index", { dogs });
  },
};

module.exports = controller;
