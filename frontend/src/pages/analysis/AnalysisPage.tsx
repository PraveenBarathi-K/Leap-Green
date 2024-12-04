import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./analysis.scss";
import Menu from "../../components/menu/Menu";
import Navbar from "../../components/navbar/Navbar";

interface TurbineData {
  turbine: string;
  controlTime: string;
  modifiedTime: string;
  turok: number;
  atPwrIn: number;
  atPwrOut: number;
  reactPwrIn: number;
  reactPwrOut: number;
}

const AnalysisPage = () => {
  const [turbineData, setTurbineData] = useState<TurbineData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from: /assets/TenMinData_ADD_20240215_235737.csv");
        const response = await fetch("/assets/TenMinData_ADD_20240215_235737.csv");
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const text = await response.text();

        Papa.parse<TurbineData>(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log("Parsed results:", results.data);
            const data = results.data.map((row: any) => ({
              turbine: row.turbine || '',
              controlTime: row.controllertime || '',
              modifiedTime: row.modifiedtime || '',
              turok: parseFloat(row.turok?.toString() ),
              atPwrIn: parseFloat(row.atpwrin?.toString() || '0'),
              atPwrOut: parseFloat(row.atpwrout?.toString() || '0'),
              reactPwrIn: parseFloat(row.reactpwrin?.toString() || '0'),
              reactPwrOut: parseFloat(row.reactpwrout?.toString() || '0'),
            }));
            setTurbineData(data);
          },
          error: (error: any) => {
            console.error("Error parsing CSV data:", error.message);
          },
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error("Failed to load data:", error.message);
        } else {
          console.error("Failed to load data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="map-page">
    <Navbar />
    <div className="container">
        <div className="menuContainer">
            <Menu />
        </div>
    <div className="analysis-container">

      <h1>Turbine Data Analysis</h1>
      <table className="turbine-table">
        <thead>
          <tr>
            <th>Turbine</th>
            <th>Control Time</th>
            <th>Modified Time</th>
            <th>TurOk</th>
            <th>Active Power In</th>
            <th>Active Power Out</th>
            <th>Reactive Power In</th>
            <th>Reactive Power Out</th>
          </tr>
        </thead>
        <tbody>
          {turbineData.map((data, index) => (
            <tr key={index}>
              <td>{data.turbine}</td>
              <td>{data.controlTime}</td>
              <td>{data.modifiedTime}</td>
              <td>{data.turok}</td>
              <td>{data.atPwrIn}</td>
              <td>{data.atPwrOut}</td>
              <td>{data.reactPwrIn}</td>
              <td>{data.reactPwrOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default AnalysisPage;
