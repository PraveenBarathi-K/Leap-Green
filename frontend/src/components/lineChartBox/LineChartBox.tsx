import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface LineChartBoxProps {
  title: string;
  color: string;
  dataKeyX: string;
  dataKeyY: string;
  chartData: { [key: string]: any }[];
}

const LineChartBox: React.FC<LineChartBoxProps> = ({
  title,
  color,
  dataKeyX,
  dataKeyY,
  chartData,
}) => {
  return (
    <div className="line-chart-box">
      <h3>{title}</h3>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyX} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKeyY} stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBox;
