const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({
  locNo: {
    type: String,
    required: true,
  },
  site: {
    type: String,
    required: true,
  },
  capacity: { type: Number, required: true },
  company: { type: String, required: true },
  model: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true }, 
});

module.exports = mongoose.model("Site", SiteSchema);
