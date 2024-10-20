import millify from 'millify';
import { Card, CardContent } from '../../../../components/ui/card';
import { cn } from '@/lib/utils';

const CoinStatsCard = ({ title, currency = false, data }: any) => {
  return (
    <div>
      <Card className={cn('w-[180px]')}>
        <CardContent>
          <p className="text-xs text-center mt-2">{title}</p>
          <p className="text-[15px] text-center font-semibold">
            {currency ? `$${millify(data)}` : data}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoinStatsCard;
