// controllers/dogController.js

const express = require("express");
const router = express.Router();

const controller = {
  all: (req, res) => {
    console.log("voici mes chiens");
    res.send("ici la page all dogs");
  },
};

module.exports = controller;
