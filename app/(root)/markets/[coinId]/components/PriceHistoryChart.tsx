'use client';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

interface CoinMarketDataProps {
  prices: [number, number][];
}
const PriceHistoryChart = ({
  coinMarketData,
}: {
  coinMarketData: CoinMarketDataProps;
}) => {
  const prices = coinMarketData.prices.map((price) => price[1]);
  const timestamps = coinMarketData.prices.map((price) => {
    const date = new Date(price[0]);
    return date.toLocaleDateString();
  });

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        data: prices,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 1,
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
        enabled: true,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
  };

  return (
    <div>
      <h2 className="text-xl text-gray-600">
        Price History for the Last 7 Days
      </h2>
      <div style={{ height: '400px', width: '600px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default PriceHistoryChart;
