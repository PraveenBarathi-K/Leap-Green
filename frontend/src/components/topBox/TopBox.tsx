import "./TopBox.scss";
import { useState, useEffect } from "react";
import axios from "axios";

interface Windmill {
  site: string;         // turbine ID
  capacity: string;        // site name
  company: string;      // total power
  lat: number; // average efficiency
}

const WindmillTopBox = () => {
  const [windmills, setWindmills] = useState<Windmill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/site");
      console.log("Fetched windmill data:", response.data);
      setWindmills(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching windmill data:", error);
      setError("Failed to fetch windmill data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="topBox">
      <h1>Windmill Power Summary</h1>
      
      {loading ? (
        <p>Loading windmill data...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="list">
          {windmills.map((windmill, index) => (
            <div className="listItem" key={index}>
              <div className="windmill">
                <div className="windmillTexts">
                  <span className="turbineId">Turbine ID: {windmill.site}</span>
                  <span className="site">Site: {windmill.capacity}</span>
                  <span className="totalPower">Total Power: {windmill.company} kW</span>
                  <span className="averageEfficiency">Average Efficiency: {windmill.lat.toFixed(2)} %</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WindmillTopBox;
