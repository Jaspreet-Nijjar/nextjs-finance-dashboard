import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { FaXTwitter } from 'react-icons/fa6';
import { FaReddit } from 'react-icons/fa';
import { CoinLinksProps } from '@/types/markets';

const CoinLinks = ({ coin }: CoinLinksProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Information</CardTitle>
      </CardHeader>
      <CardContent>
        <section className="text-[14px]">
          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Website</p>
            <div className="flex gap-2">
              <Link
                href={coin.links.homepage[0]}
                className="bg-gray-200 rounded px-2 w-fit"
              >
                {coin.links.homepage[0].slice(11)}
              </Link>
              <Link
                href={coin.links.whitepaper}
                className="bg-gray-200 rounded px-2 w-fit"
              >
                Whitepaper
              </Link>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Forum</p>
            <div className="flex gap-2">
              <Link
                href={coin.links.homepage[0]}
                className="bg-gray-200 rounded px-2 w-fit"
              >
                {coin.links.official_forum_url[0].slice(8).replace('/', '')}
              </Link>
            </div>
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-gray-600">Socials</p>

            <div className="flex gap-2">
              <div className="flex bg-gray-200 rounded px-2 w-fit items-center gap-1">
                <FaXTwitter />
                <Link href={`https://x.com/${coin.id}`}>Twitter</Link>
              </div>

              <div className="flex bg-gray-200 rounded px-2 w-fit items-center gap-1">
                <FaReddit />
                <Link href={`https://www.reddit.com/r/${coin.id}/`}>
                  Reddit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default CoinLinks;
