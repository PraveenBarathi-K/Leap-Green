// routes/windmills.js
const express = require("express");
const router = express.Router();

// Route to get grouped windmill data
const Windmill = require("../models/windmill"); // Assuming a Windmill model is set up

router.get("/", async (req, res) => {
  try {
    const windmills = await Windmill.find(); // Fetch windmills from the database
    res.json(windmills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching windmills" });
  }
});

// Ensure to export the router
module.exports = router; 
