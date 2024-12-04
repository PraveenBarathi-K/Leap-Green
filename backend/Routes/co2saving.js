const express = require("express");
const router = express.Router();
const c02 = require("../models/co2models");

// @desc Fetch all statuses
// @route GET /api/status
router.get("/", async (req, res) => {
  try {
    const statuses = await c02.find();
    res.json(statuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
