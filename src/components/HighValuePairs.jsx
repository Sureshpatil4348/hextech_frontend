import { TrendingUp, RefreshCw } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';

import useMarketStore from '../store/useMarketStore';

const HighValuePairs = () => {
  const [highValuePairs, setHighValuePairs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { subscriptions, ohlcData } = useMarketStore();

  // Function to calculate pair value (you can adjust this logic based on your API data structure)
  const calculatePairValue = (symbol, ohlcData) => {
    const symbolData = ohlcData.get(symbol);
    if (!symbolData || symbolData.length === 0) return 0;
    
    const latestBar = symbolData[symbolData.length - 1];
    if (!latestBar) return 0;
    
    // Calculate value based on price change percentage
    const open = parseFloat(latestBar.open);
    const close = parseFloat(latestBar.close);
    const changePercent = Math.abs((close - open) / open);
    
    return changePercent;
  };

  // Function to get high value pairs
  const getHighValuePairs = useCallback(() => {
    setIsLoading(true);
    const pairs = [];
    
    // Iterate through all subscribed symbols
    subscriptions.forEach((subscription, symbol) => {
      const value = calculatePairValue(symbol, ohlcData);
      if (value >= 0.036) { // 0.036 = 3.6%
        pairs.push({
          symbol: symbol,
          value: value,
          changePercent: ((value - 1) * 100).toFixed(2)
        });
      }
    });
    
    // Sort by value descending
    pairs.sort((a, b) => b.value - a.value);
    setHighValuePairs(pairs);
    setIsLoading(false);
  }, [subscriptions, ohlcData]);

  // Update high value pairs when data changes
  useEffect(() => {
    if (subscriptions.size > 0 && ohlcData.size > 0) {
      getHighValuePairs();
    }
  }, [subscriptions, ohlcData, getHighValuePairs]);

  // Refresh function
  const handleRefresh = () => {
    getHighValuePairs();
  };

  return (
    <div className="card z-10 relative h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">High Value Pairs</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">Value ≥ 0.036 (3.6%)</p>
        </div>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          className="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          title="Refresh Data"
        >
          <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {highValuePairs.length > 0 ? (
          <div className="space-y-1.5">
            {highValuePairs.slice(0, 6).map((pair, index) => (
              <div
                key={pair.symbol}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-5 h-5 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {pair.symbol}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {pair.value.toFixed(4)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-xs font-bold text-green-600 dark:text-green-400">
                    {pair.changePercent}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-8 h-8 mx-auto mb-2 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-gray-400" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
              No High Value Pairs
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No pairs found with value ≥ 0.036
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HighValuePairs;
