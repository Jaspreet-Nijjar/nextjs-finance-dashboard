import millify from 'millify';
import { Card, CardContent } from '../../../../components/ui/card';
import { cn } from '@/lib/utils';

export type CoinStatsCardProps = {
  title: string;
  currency: boolean;
  data: number | string;
};

const CoinStatsCard = ({
  title,
  currency = false,
  data,
}: CoinStatsCardProps) => {
  return (
    <div>
      <Card className={cn('w-[180px]')}>
        <CardContent>
          <p className="text-xs text-center mt-2">{title}</p>
          <p className="text-[15px] text-center font-semibold">
            {currency && typeof data === 'number' ? `$${millify(data)}` : data}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoinStatsCard;
