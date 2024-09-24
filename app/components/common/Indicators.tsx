import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

interface IndicatorProps {
  data: number;
  fontSize?: string;
}

const Indicators = ({ data, fontSize }: IndicatorProps) => {
  return (
    <div className={`flex items-center justify-center ${fontSize}`}>
      {data > 0 ? (
        <>
          <IoMdArrowDropup size={20} className="text-green-500" />
          <p className="text-green-500">{Math.abs(data).toFixed(1)}%</p>
        </>
      ) : (
        <>
          <IoMdArrowDropdown size={20} className="text-red-500" />
          <p className="text-red-400 text-[13px]">
            {Math.abs(data).toFixed(1)}%
          </p>
        </>
      )}
    </div>
  );
};

export default Indicators;
