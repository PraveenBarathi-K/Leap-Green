const express = require("express");
const router = express.Router();
const Windmill = require("../models/site"); // Assuming you have a Windmill model

// Route to get windmill data
router.get("/", async (req, res) => {
  try {
    const windmills = await Windmill.find(); // Fetching all windmills
    res.json(windmills);
  } catch (error) {
    console.error("Error fetching windmills:", error);
    res.status(500).json({ message: "Error fetching windmills" });
  }
});

module.exports = router;
