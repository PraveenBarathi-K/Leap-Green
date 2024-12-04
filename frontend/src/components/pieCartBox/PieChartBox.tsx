import { useState, useEffect } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import axios from "axios";
import "./pieChartBox.scss";

// Define the type for the data items
interface StatusData {
  name: string;
  value: number;
  color: string;
}

interface InstantData {
  atpwr: number; // Active power
  // Add any other relevant properties you need here
}

const PieChartBox = () => {
  // State for pie chart data, loading status, and instant generation data
  const [data, setData] = useState<StatusData[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [instantData, setInstantData] = useState<InstantData | null>(null); // Instant generation data
  const [totalGeneration, setTotalGeneration] = useState<number>(0); // Total generation for the day

  const fetchData = async () => {
    try {
      // Fetch status data
      const statusResponse = await axios.get("http://localhost:5000/api/status");
      console.log("Fetched status data:", statusResponse.data);

      // Transform status data into the required format for the pie chart
      const workingCount = statusResponse.data.filter((item: any) => item.state && item.state.includes('+')).length;
      const stoppedCount = statusResponse.data.filter((item: any) => item.state && item.state.includes('-')).length;
      
      const formattedData: StatusData[] = [
        { name: "Working", value: workingCount, color: "#4caf50" }, // Green
        { name: "Stopped", value: stoppedCount, color: "#f44336" } , // Red
        { name: "Not.Prod", value: 143, color: "#FFEB3B" },  // Red
        { name: "Not.Prod", value: 1, color: "#2196F3" } 
      ];

      setData(formattedData);

      // Fetch instant generation data
      const instantResponse = await axios.get("http://localhost:5000/api/power");
      console.log("Fetched instant generation data:", instantResponse.data);

      // Assuming instantResponse.data is an array, extract the last item for instant generation
      if (instantResponse.data.length > 0) {
        const latestData = instantResponse.data[instantResponse.data.length - 1];
        setInstantData(latestData);
      }

      // Calculate total generation for the day (you might need to adjust the logic based on your data structure)
      const totalPower = instantResponse.data.reduce((acc: number, item: any) => acc + (item.atpwr || 0), 0);

      setTotalGeneration(totalPower);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  // Use useEffect to call fetchData once when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs once

  return (
    <div className="pieChartBox">
        <h1 style={{ textAlign: 'center' }}>Live Status</h1>

      <h4>Today's Generation:<span style={{color:"hwb(126 14% 24%)"}}> {totalGeneration.toFixed(2)} kW</span></h4>
      <h4>Instant Generation:<span style={{color:"hwb(126 14% 24%)"}}> {instantData ? instantData.atpwr.toFixed(2) : "Loading..."} kW</span></h4>
    
      

      
      <div className="chart">
        {loading ? ( // Show loading indicator while data is being fetched
          <p>Loading data...</p>
        ) : data.length > 0 ? ( // Only render the chart if there's data
          <ResponsiveContainer width="90%" height={200}>
            <PieChart>
              <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
              <Pie
                data={data}
                innerRadius={"60%"} // Make inner radius smaller
                outerRadius={"80%"} // Make outer radius smaller
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((item: StatusData) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available to display</p> // Message when no data is available
        )}
      </div>
      <div className="options">
        {data.map((item: StatusData) => ( // Explicitly set item type
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;