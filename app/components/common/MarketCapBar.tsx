import { ElementType } from 'react';

interface MarketCapBarProps {
  icon: ElementType;
  color: string;
  percentage: number;
}

const MarketCapBar = ({ icon: Icon, color, percentage }: MarketCapBarProps) => {
  return (
    <div className="hidden lg:flex items-center gap-2">
      <Icon size="20" color={color} />
      <p>{percentage.toFixed(0)}%</p>
      <div className="relative w-16 h-2 bg-gray-200 rounded">
        <div
          className="absolute left-0 top-0 h-full bg-orange-400 rounded"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default MarketCapBar;
