const express = require("express");
const PowerGeneration = require("../models/PowerGeneration");

const router = express.Router();

// Get all power generation data
router.get("/", async (req, res) => {
  try {
    const data = await PowerGeneration.find({});
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Add more routes as necessary (e.g., for adding, updating data)

module.exports = router;
