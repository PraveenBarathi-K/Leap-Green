// models/statusModel.js
const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  turbine: {
    type: String, // Store UUID as a string
    required: true,
  },
  eventstarttime: {
    type: Date,
    required: true,
  },
  modifiedtime: {
    type: Date,
    required: true,
  },
  eventtypecode: {
    type: String,
    required: true,
  },
  eventcode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  turbinestatecode: {
    type: Number,
    required: true,
  },
  yawstatecode: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Status = mongoose.model("status", statusSchema);
module.exports = Status;
