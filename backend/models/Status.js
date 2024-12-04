const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true },
  color: { type: String, required: true },
});

module.exports = mongoose.model("Status", statusSchema);
