import clsx from 'clsx';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

interface IndicatorProps {
  data: number;
  fontSize?: string;
}

const Indicators = ({ data, fontSize }: IndicatorProps) => {
  return (
    <div className={`flex items-center justify-center`}>
      {data > 0 ? (
        <>
          <IoMdArrowDropup size={20} className="text-green-500" />
          <p
            className={clsx(
              'text-green-500',
              {
                [`text-[${fontSize}]`]: fontSize,
              },
              'text-[11px]'
            )}
          >
            {Math.abs(data).toFixed(1)}%
          </p>
        </>
      ) : (
        <>
          <IoMdArrowDropdown size={20} className="text-red-500" />
          <p
            className={clsx(
              'text-red-500',
              {
                [`text-[${fontSize}]`]: fontSize,
              },
              'text-[11px]'
            )}
          >
            {Math.abs(data).toFixed(1)}%
          </p>
        </>
      )}
    </div>
  );
};

export default Indicators;
