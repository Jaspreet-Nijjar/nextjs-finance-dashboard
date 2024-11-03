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
  'text-center text-orange-400 font-bold',
  'text-center text-orange-400 font-bold',
  'text-center text-orange-400 font-bold',
  'hidden md:block text-center text-orange-400 font-bold',
  'hidden lg:block text-center text-orange-400 font-bold',
  'hidden lg:block text-center text-orange-400 font-bold',
  'hidden md:block text-center text-orange-400 font-bold',
  'hidden xl:block text-center text-orange-400 font-bold col-span-2',
  'hidden xl:block text-center text-orange-400 font-bold',
];

// Watchlist Component
export const WATCHLIST_HEADERS = [
  'Coin',
  'Price',
  'Market Cap',
  'High 24hr',
  'Low 24hr',
];

export const WATCHLIST_HEADERS_CLASSES = [
  'text-[14px] text-gray-600 mb-2 font-bold',
  'text-[14px] text-gray-600 mb-2 font-bold',
  'text-[14px] text-gray-600 mb-2 font-bold',
  'hidden md:block text-[14px] text-gray-600 mb-2 font-bold',
  'hidden xl:block text-[14px] text-gray-600 mb-2 font-bold',
];

// Assets Component
export const ASSET_HEADERS = [
  'Coin',
  'Symbol',
  'Amount',
  'Price',
  'Market Cap',
];

export const ASSET_HEADERS_CLASSES = [
  'font-bold',
  'hidden font-bold lg:block',
  'font-bold',
  'font-bold',
  'font-bold',
];

// Transaction Component
export const TRANSACTIONS_HEADERS = [
  'Coin',
  'Amount',
  'Cost',
  'Status',
  'Date',
];

// Recent Transaction Component
export const RECENT_TRANSACTIONS_HEADERS = ['Coin', 'Cost', 'Date'];
