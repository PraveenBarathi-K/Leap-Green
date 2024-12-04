import { useState, useEffect } from "react";
import axios from "axios";
import "./savings.scss";

interface InstantData {
  atpwr: number;
}

const SavingBox = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [instantData, setInstantData] = useState<InstantData | null>(null);
  const [c02, setc02Saved] = useState<number>(0);
  const [treesaved, settreeSaved] = useState<number>(0);
  const [dieselsaving, setdieselSaved] = useState<number>(0);
  const [generationHistory, setGenerationHistory] = useState<number[]>([0, 0, 0, 0]); // Example data
  const [currentMonthGeneration, setCurrentMonthGeneration] = useState<number>(0); // Example data
  const [financialYear, setFinancialYear] = useState<number>(2023); // Example year

  const fetchData = async () => {
    try {
      const instantResponse = await axios.get("http://localhost:5000/api/power");
      if (instantResponse.data.length > 0) {
        const latestData = instantResponse.data[instantResponse.data.length - 1];
        setInstantData(latestData);
      }

      const totalPower = instantResponse.data.reduce((acc: number, item: any) => acc + (item.atpwr || 0), 0);
      setc02Saved((totalPower * 0.8) / 1000);
      setdieselSaved((totalPower * 0.3));
      settreeSaved((c02 * 1000) / 1);
      
      // Example data for generation history and current month
      setGenerationHistory([28.75]); // Replace with actual data
      setCurrentMonthGeneration(250); // Replace with actual data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <h1>Savings Overview</h1>
        <div className="savingsDetails">
          <div>
            <p>CO2 Saved: <span className="value">{loading ? "Loading..." : c02.toFixed(2)} tons</span></p>
          </div>
          <div>
            <p>Diesel Saved: <span className="value">{loading ? "Loading..." : dieselsaving.toFixed(2)} liters</span></p>
          </div>
          <div>
            <p>Trees Equivalent: <span className="value">{loading ? "Loading..." : treesaved.toFixed(2)} trees</span></p>
          </div>
        </div>
        <div className="separator" />
        <div className="generationHistory">
          <h2>Generation History</h2>
          {/* Add generation history details here */}
        </div>
        <div className="currentMonth">
          <h4>Current Month Generation</h4>
          <p><span className="value">{loading ? "Loading..." : currentMonthGeneration} kWh</span></p>
        </div>
        <div className="financialYear">
          <h2>Financial Year</h2>
          <p><span className="value">16.48 GWh</span></p>
        </div>
      </div>
    </div>
  );
};

export default SavingBox;
