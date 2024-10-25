import { ASSET_HEADERS } from '@/constants';
import React from 'react';

const AssetsHeaders = () => {
  return (
    <div className="grid grid-cols-7 gap-6 p-4 border-b border-gray-200 text-[13px]">
      {ASSET_HEADERS.map((header) => (
        <p className="font-bold">{header}</p>
      ))}
    </div>
  );
};

export default AssetsHeaders;