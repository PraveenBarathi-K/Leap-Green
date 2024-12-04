const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Status = require("./models/Status");

dotenv.config();
const connectDB = require("./config/db");

const statuses = [
  { name: "Running", value: 400, color: "#0088FE" },
  { name: "Not.Found", value: 300, color: "#00C49F" },
  { name: "Stopped", value: 300, color: "#FFBB28" },
  { name: "No.Conn", value: 200, color: "#FF8042" },
];

connectDB();

const importData = async () => {
  try {
    await Status.insertMany(statuses);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();
