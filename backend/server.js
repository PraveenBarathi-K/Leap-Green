const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const statusRoutes = require("./Routes/statusRoutes");
const powerGenerationRoutes = require("./Routes/powerGenerationRoutes");
const windmills = require("./Routes/windmillRoutes");
const site = require("./Routes/siteroutes"); 
const mapsite = require("./Routes/mapsite"); 


const cors = require("cors"); // Import the cors package

dotenv.config(); // Load environment variables

const app = express();

connectDB(); // Connect to MongoDB

app.use(cors()); // Use CORS middleware to allow cross-origin requests
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/api/status", statusRoutes);
app.use("/api/power", powerGenerationRoutes);
app.use("/api/windmills",windmills);
app.use("/api/site",site);
app.use("/api/mapsite",mapsite);
// Adjust the path based on your folder structure

// app.use("/api/savings", chartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
