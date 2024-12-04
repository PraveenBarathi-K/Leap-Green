import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "3",
    Windspeed: 12,
    Energy: 66,
  },
  {
    name: "6",
    Windspeed: 14,
    Energy: 59,
  },
  {
    name: "9",
    Windspeed: 15,
    Energy: 98,
  },
  {
    name: "12",
    Windspeed: 20,
    Energy: 25,
  },
  {
    name: "15",
    Windspeed: 15,
    Energy: 30,
  },
  {
    name: "18",
    Windspeed: 17,
    Energy: 45,
  },
  {
    name: "21",
    Windspeed: 18,
    Energy: 33,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Production Today</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="top" // Positions the legend at the top
              align="right" // Aligns the legend to the right
            />
            <Area
              type="monotone"
              dataKey="Windspeed"
              stackId="1"
              stroke="#8884d8"
              fill="#FF6500"
            />
            <Area
              type="monotone"
              dataKey="Energy"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
