import { FaHome } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import { PiNewspaperLight } from 'react-icons/pi';
import { FaChartPie } from 'react-icons/fa';

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
