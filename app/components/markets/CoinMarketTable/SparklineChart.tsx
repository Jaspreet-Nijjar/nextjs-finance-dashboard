import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { CoinProps } from '@/types/markets';

interface SparklineChartProps {
  coin: CoinProps;
}

const SparklineChart = ({ coin }: SparklineChartProps) => {
  const { sparkline_in_7d } = coin;

  if (!sparkline_in_7d) {
    return <p className="text-[13px] text-gray-500">Data Unavailable</p>;
  }

  const prices = sparkline_in_7d.price;
  const timestamps = Array.from({ length: prices.length }, (_, i) => i);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: 'Price',
        data: prices,
        borderColor:
          prices[0] > prices[prices.length - 1] ? 'red' : 'lightgreen',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className="hidden xl:block w-32 h-16">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SparklineChart;
