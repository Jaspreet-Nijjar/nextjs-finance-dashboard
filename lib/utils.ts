import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import numeral from 'numeral';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (value: number) => {
  const formattedNumber = numeral(value).format('0,0');
  return formattedNumber;
};
