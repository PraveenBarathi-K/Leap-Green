const express = require("express");
const router = express.Router();
const Windmill = require("../models/windmill");
const Site = require("../models/site");
const Tenmins = require("../models/PowerGeneration");

// Route to get grouped windmill data
router.get("/", async (req, res) => {
//   try {
//     // Fetch all windmills and sites
//     const windmills = await Windmill.find();
//     const sites = await Site.find();
//     const results = [];

//     // Loop through each site
//     for (const site of sites) {
//       // Find windmills corresponding to the current site
//       const siteWindmills = windmills.filter(windmill => windmill.wtgname === site.loc);

//       for (const windmill of siteWindmills) {
//         // Find turbines in the Tenmins collection that belong to the current windmill
//         const tenminsData = await Tenmins.find({ siteId: windmill.dataKey });
        
//         // Calculate total power and efficiency
//         const totalPower = tenminsData.reduce((acc, curr) => acc + curr.atpwr, 0);
//         const averageEfficiency = tenminsData.length ? totalPower / tenminsData.length : 0;

//         results.push({
//           windmill: windmill.dataKey,
//           siteName: site.plant, // Adjust according to your site model
//           totalPower,
//           averageEfficiency,
//         });
//       }
//     }

//     res.json(results);
//   } catch (error) {
//     console.error("Error fetching windmills:", error);
//     res.status(500).json({ message: "Error fetching windmills", error: error.message });
//   }
try {
    const data = await Site.find({});
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
