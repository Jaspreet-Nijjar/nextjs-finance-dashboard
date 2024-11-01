import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { AssetsProps } from '@/types/markets';

ChartJS.register(ArcElement, Tooltip, Legend);

const BalanceDoughnutChart = ({ assets }: AssetsProps) => {
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
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'right' as const,
        onClick: undefined,
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
