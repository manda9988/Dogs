const dogController = require("./controllers/dogController");
const mainController = require("./controllers/mainController");

const express = require("express");
const router = express.Router();

// Main
router.get("/", mainController.homePage);

// Dogs
router.get("/dogs/:id", dogController.dogDetails);

module.exports = router;
