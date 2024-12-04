import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExcelChartComponent: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any>({});

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryStr = e.target?.result;
        if (binaryStr) {
          const workbook = XLSX.read(binaryStr, { type: 'binary' });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          const headers = jsonData[0] as string[];
          const rows = jsonData.slice(1) as any[];

          const chartLabels = rows.map(row => row[0]); // Assuming first column is time
          const chartValues = rows.map(row => row[1]); // Assuming second column is energy

          setData(rows);
          setChartData({
            labels: chartLabels,
            datasets: [
              {
                label: 'Energy Generated',
                data: chartValues,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <h2>Energy Generation Chart</h2>
      {fileName && <p>Selected File: {fileName}</p>}
      {data.length > 0 ? <Bar data={chartData} options={options} /> : <p>No data available. Please upload a file.</p>}
    </div>
  );
};

export default ExcelChartComponent;