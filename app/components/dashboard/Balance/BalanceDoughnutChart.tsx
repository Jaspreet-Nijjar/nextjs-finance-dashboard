import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const BalanceDoughnutChart = ({ assets }) => {
  const chartData = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: 'Number of Coins',
        data: assets.map((asset) => asset.amount),
        backgroundColor: [
          'rgb(167, 199, 231)',
          'rgb(255, 165, 0)',
          'rgb(14, 126, 137)',
          'rgb(255, 71, 76)',
          'rgb(0,128,0)',
        ],
      },
    ],
  };

  const options = {
    cutout: 175,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'right',
        onClick: null,
      },
    },
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default BalanceDoughnutChart;
