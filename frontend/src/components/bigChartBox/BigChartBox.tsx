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
    name: "Sun",
    Efficiency: 4000,
    Energy: 2400,
  },
  {
    name: "Mon",
    Efficiency: 3000,
    Energy: 1398,
  },
  {
    name: "Tue",
    Efficiency: 2000,
    Energy: 9800,
  },
  {
    name: "Wed",
    Efficiency: 2780,
    Energy: 3908,
  },
  {
    name: "Thu",
    Efficiency: 1890,
    Energy: 4800,
  },
  {
    name: "Fri",
    Efficiency: 2390,
    Energy: 3800,
  },
  {
    name: "Sat",
    Efficiency: 3490,
    Energy: 4300,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Energy Generation</h1>
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
              verticalAlign="top" // Places the legend at the top
              align="right" // Aligns the legend to the right
            />
            <Area
              type="monotone"
              dataKey="Efficiency"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
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
