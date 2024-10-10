import React, { useState, useCallback } from 'react';
import { ArrowRightLeft } from 'lucide-react';

const PxToRemConverter: React.FC = () => {
  const [px, setPx] = useState<string>('');
  const [rem, setRem] = useState<string>('');
  const [baseSize, setBaseSize] = useState<string>('16');

  const convertPxToRem = useCallback((pxValue: string) => {
    const numericPx = parseFloat(pxValue);
    if (!isNaN(numericPx)) {
      const remValue = numericPx / parseFloat(baseSize);
      setRem(remValue.toFixed(4));
    } else {
      setRem('');
    }
  }, [baseSize]);

  const convertRemToPx = useCallback((remValue: string) => {
    const numericRem = parseFloat(remValue);
    if (!isNaN(numericRem)) {
      const pxValue = numericRem * parseFloat(baseSize);
      setPx(pxValue.toFixed(2));
    } else {
      setPx('');
    }
  }, [baseSize]);

  const handlePxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPx(value);
    convertPxToRem(value);
  };

  const handleRemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRem(value);
    convertRemToPx(value);
  };

  const handleBaseSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBaseSize(value);
    convertPxToRem(px);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Px to Rem Converter</h2>
      <div className="mb-4">
        <label htmlFor="baseSize" className="block text-sm font-medium text-gray-700 mb-1">
          Base Font Size (px):
        </label>
        <input
          type="number"
          id="baseSize"
          value={baseSize}
          onChange={handleBaseSizeChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1">
          <label htmlFor="px" className="block text-sm font-medium text-gray-700 mb-1">
            Pixels (px):
          </label>
          <input
            type="number"
            id="px"
            value={px}
            onChange={handlePxChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            step="0.01"
          />
        </div>
        <ArrowRightLeft className="text-gray-400" />
        <div className="flex-1">
          <label htmlFor="rem" className="block text-sm font-medium text-gray-700 mb-1">
            Rem:
          </label>
          <input
            type="number"
            id="rem"
            value={rem}
            onChange={handleRemChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            step="0.0001"
          />
        </div>
      </div>
    </div>
  );
};

export default PxToRemConverter;