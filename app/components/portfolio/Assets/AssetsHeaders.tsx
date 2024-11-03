import { ASSET_HEADERS, ASSET_HEADERS_CLASSES } from '@/constants';
import React from 'react';

const AssetsHeaders = () => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-5 gap-6 p-4 border-b border-gray-200 text-[13px]">
      {ASSET_HEADERS.map((header, index) => (
        <p className={ASSET_HEADERS_CLASSES[index]} key={header}>
          {header}
        </p>
      ))}
    </div>
  );
};

export default AssetsHeaders;
