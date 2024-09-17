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
    label: 'Stocks',
    route: '/stocks',
    icon: BiMoneyWithdraw,
  },

  {
    label: 'Transaction History',
    route: '/transactions',
    icon: BsPieChart,
  },

  {
    label: 'news',
    route: '/news',
    icon: AiOutlineBulb,
  },
];
