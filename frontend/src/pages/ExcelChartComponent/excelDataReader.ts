import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExcelChartComponent: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [chartData, setChartData] = useState<any>({});
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setError(null);

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const arrayBuffer = e.target?.result;
          if (arrayBuffer) {
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

            if (jsonData.length > 6) { // Ensure there are enough rows
              const rows = jsonData.slice(1) as any[];

              // Extract columns; make sure they exist
              const chartLabels = rows.map(row => row[4] || ''); // Default to empty string if undefined
              const chartValues = rows.map(row => row[5] || 0); // Default to 0 if undefined

              console.log('Chart Labels:', chartLabels);
              console.log('Chart Values:', chartValues);

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
            } else {
              setError('Not enough data in the file.');
            }
          }
        } catch (err) {
          setError('Error processing file. Please ensure it is in the correct format.');
          console.error('Error processing file:', err);
        }
      };
      reader.readAsArrayBuffer(file);
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {chartData.labels ? <Bar data={chartData} options={options} /> : <p>No data available. Please upload a file.</p>}
    </div>
  );
};

export default ExcelChartComponent;
