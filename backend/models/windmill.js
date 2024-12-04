// models/Windmill.js
const mongoose = require("mongoose");

const WindmillSchema = new mongoose.Schema({
  slno: {
    type: Number,
    required: true,
  },
  plant: {
    type: String,
    required: true,
  },
  functionalLocation: {
    type: String,
    required: true,
  },
  dataKey: {
    type: mongoose.Schema.Types.UUID, // Mongoose does not have UUID type, use String or Buffer
    required: true,
  },
  wtgname: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Windmill", WindmillSchema);
