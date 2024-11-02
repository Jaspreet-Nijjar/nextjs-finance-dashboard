import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ assets }) => {
  const chartData = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: 'Number of Coins',
        data: assets.map((asset) => asset.amount),
        backgroundColor: 'orange',
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Coins',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
