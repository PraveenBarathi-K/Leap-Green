const mongoose = require("mongoose");

const powerGenerationSchema = new mongoose.Schema({
  turbine: { type: String, required: true },
  atpwr: { type: Number, required: true },
  controllertime: { type: Date, required: true },
  modifiedtime: { type: Date, required: true },
  // Add other fields as necessary
});

const PowerGeneration = mongoose.model("tenmindataas", powerGenerationSchema);

module.exports = PowerGeneration;
