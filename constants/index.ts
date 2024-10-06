import { FaHome } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc';
import { HiOutlineArrowsUpDown } from 'react-icons/hi2';
import { PiNewspaperLight } from 'react-icons/pi';

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
    label: 'Transactions',
    route: '/transactions',
    icon: HiOutlineArrowsUpDown,
  },

  {
    label: 'News',
    route: '/news',
    icon: PiNewspaperLight,
  },
];
