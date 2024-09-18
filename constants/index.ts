import { FaHome } from 'react-icons/fa';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { AiOutlineBulb } from 'react-icons/ai';
import { BsPieChart } from 'react-icons/bs';

export const SIDEBAR_LINKS = [
  {
    label: 'Home',
    route: '/',
    icon: FaHome,
  },

  {
    label: 'Crypto',
    route: '/crypto',
    icon: BiMoneyWithdraw,
  },

  {
    label: 'Transactions',
    route: '/transactions',
    icon: BsPieChart,
  },

  {
    label: 'News',
    route: '/news',
    icon: AiOutlineBulb,
  },
];
