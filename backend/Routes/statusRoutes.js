const express = require("express");
const router = express.Router();
const Status = require("../models/statusmodels");

// @desc Fetch all statuses
// @route GET /api/status
router.get("/", async (req, res) => {
  try {
    const statuses = await Status.find();
    res.json(statuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
