import { FaHome } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import { PiNewspaperLight } from 'react-icons/pi';
import { FaChartPie } from 'react-icons/fa';

// Sidebar
export const SIDEBAR_LINKS = [
  {
    label: 'Dashboard',
    route: '/',
    icon: FaHome,
  },

  {
    label: 'Markets',
    route: '/markets',
    icon: VscGraphLine,
  },

  {
    label: 'Portfolio',
    route: '/portfolio',
    icon: FaChartPie,
  },

  {
    label: 'News',
    route: '/news',
    icon: PiNewspaperLight,
  },
];

// Coin Table
export const COIN_HEADERS = [
  '#',
  'Product',
  'Price',
  '1hr',
  '24hr',
  '7d',
  'Market Cap',
  'Circulating / Total Supply',
  'Last 7d',
];

export const COIN_HEADERS_CLASSES = [
  'hidden md:block text-center text-orange-400 font-bold',
  'text-center text-orange-400 font-bold col-span-2',
  'text-center text-orange-400 font-bold',
  'hidden md:block text-center text-orange-400 font-bold',
  'hidden lg:block text-center text-orange-400 font-bold',
  'hidden lg:block text-center text-orange-400 font-bold',
  'text-center text-orange-400 font-bold',
  'hidden xl:block text-center text-orange-400 font-bold col-span-2',
  'hidden xl:block text-center text-orange-400 font-bold',
];
