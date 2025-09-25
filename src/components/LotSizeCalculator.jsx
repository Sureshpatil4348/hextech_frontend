import React, { useState, useEffect, useMemo } from 'react';

import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const LotSizeCalculator = () => {
  const [formData, setFormData] = useState({
    accountBalance: '',
    riskPercentage: '',
    stopLoss: '',
    instrumentType: 'forex',
    currencyPair: 'EUR/USD',
    contractSize: '100000',
    pipValue: '10',
    currentPrice: ''
  });

  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  // Instrument configurations
  const instrumentConfigs = useMemo(() => ({
    forex: {
      name: 'Forex',
      pairs: [
        { symbol: 'EUR/USD', pipValue: 10, contractSize: 100000 },
        { symbol: 'GBP/USD', pipValue: 10, contractSize: 100000 },
        { symbol: 'USD/JPY', pipValue: 10, contractSize: 100000 },
        { symbol: 'USD/CHF', pipValue: 10, contractSize: 100000 },
        { symbol: 'AUD/USD', pipValue: 10, contractSize: 100000 },
        { symbol: 'USD/CAD', pipValue: 10, contractSize: 100000 },
        { symbol: 'NZD/USD', pipValue: 10, contractSize: 100000 }
      ],
      stopLossUnit: 'pips',
      resultUnit: 'lots'
    },
    commodities: {
      name: 'Commodities',
      pairs: [
        { symbol: 'Gold (XAU/USD)', pipValue: 100, contractSize: 100 },
        { symbol: 'Silver (XAG/USD)', pipValue: 50, contractSize: 5000 },
        { symbol: 'Crude Oil (WTI)', pipValue: 1000, contractSize: 1000 },
        { symbol: 'Brent Oil', pipValue: 1000, contractSize: 1000 },
        { symbol: 'Natural Gas', pipValue: 10000, contractSize: 10000 }
      ],
      stopLossUnit: 'price difference',
      resultUnit: 'contracts'
    },
    crypto: {
      name: 'Cryptocurrency',
      pairs: [
        { symbol: 'BTC/USD', pipValue: 1, contractSize: 1 },
        { symbol: 'ETH/USD', pipValue: 1, contractSize: 1 },
        { symbol: 'LTC/USD', pipValue: 1, contractSize: 1 },
        { symbol: 'XRP/USD', pipValue: 1, contractSize: 1 },
        { symbol: 'ADA/USD', pipValue: 1, contractSize: 1 }
      ],
      stopLossUnit: 'price difference',
      resultUnit: 'units'
    }
  }), []);

  // Update pip value and contract size when currency pair changes
  useEffect(() => {
    const config = instrumentConfigs[formData.instrumentType];
    const selectedPair = config.pairs.find(pair => pair.symbol === formData.currencyPair);
    if (selectedPair) {
      setFormData(prev => ({
        ...prev,
        pipValue: selectedPair.pipValue.toString(),
        contractSize: selectedPair.contractSize.toString()
      }));
    }
  }, [formData.currencyPair, formData.instrumentType, instrumentConfigs]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.accountBalance || parseFloat(formData.accountBalance) <= 0) {
      newErrors.accountBalance = 'Account balance must be greater than 0';
    }

    if (!formData.riskPercentage || parseFloat(formData.riskPercentage) <= 0 || parseFloat(formData.riskPercentage) > 100) {
      newErrors.riskPercentage = 'Risk percentage must be between 0.1% and 100%';
    }

    if (!formData.stopLoss || parseFloat(formData.stopLoss) <= 0) {
      newErrors.stopLoss = 'Stop loss must be greater than 0';
    }

    if (formData.instrumentType === 'crypto' && (!formData.currentPrice || parseFloat(formData.currentPrice) <= 0)) {
      newErrors.currentPrice = 'Current price is required for crypto calculations';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateLotSize = () => {
    if (!validateForm()) return;

    const accountBalance = parseFloat(formData.accountBalance);
    const riskPercentage = parseFloat(formData.riskPercentage) / 100;
    const stopLoss = parseFloat(formData.stopLoss);
    const pipValue = parseFloat(formData.pipValue);
    const contractSize = parseFloat(formData.contractSize);

    let lotSize = 0;
    let riskAmount = 0;
    let calculation = '';

    // Calculate risk amount
    riskAmount = accountBalance * riskPercentage;

    if (formData.instrumentType === 'forex') {
      // Forex calculation: Lot Size = (Account Balance × Risk %) / (Stop Loss (pips) × Pip Value)
      lotSize = riskAmount / (stopLoss * pipValue);
      calculation = `(${accountBalance.toFixed(2)} × ${(riskPercentage * 100).toFixed(1)}%) / (${stopLoss} pips × $${pipValue}) = ${lotSize.toFixed(4)} lots`;
    } else if (formData.instrumentType === 'commodities') {
      // Commodities calculation: Lot Size = (Account Balance × Risk %) / (Stop Loss (price difference) × Contract Size)
      lotSize = riskAmount / (stopLoss * contractSize);
      calculation = `(${accountBalance.toFixed(2)} × ${(riskPercentage * 100).toFixed(1)}%) / (${stopLoss} × ${contractSize}) = ${lotSize.toFixed(4)} contracts`;
    } else if (formData.instrumentType === 'crypto') {
      // Crypto calculation: Position Size = (Account Balance × Risk %) / Stop Loss (price difference)
      lotSize = riskAmount / stopLoss;
      calculation = `(${accountBalance.toFixed(2)} × ${(riskPercentage * 100).toFixed(1)}%) / ${stopLoss} = ${lotSize.toFixed(8)} ${formData.currencyPair.split('/')[0]}`;
    }

    setResult({
      lotSize: lotSize,
      riskAmount: riskAmount,
      calculation: calculation,
      instrumentType: formData.instrumentType,
      resultUnit: instrumentConfigs[formData.instrumentType].resultUnit
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const resetCalculator = () => {
    setFormData({
      accountBalance: '',
      riskPercentage: '',
      stopLoss: '',
      instrumentType: 'forex',
      currencyPair: 'EUR/USD',
      contractSize: '100000',
      pipValue: '10',
      currentPrice: ''
    });
    setResult(null);
    setErrors({});
  };

  return (
    <div className="p-4 h-full">
      <Card className="bg-transparent shadow-none border-none">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Lot Size Calculator
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
            Calculate optimal position size based on your account balance, risk tolerance, and stop-loss level
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Instrument Type Selection */}
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(instrumentConfigs).map(([key, config]) => (
              <button
                key={key}
                onClick={() => handleInputChange('instrumentType', key)}
                className={`p-2 rounded-lg border-2 transition-all duration-200 ${
                  formData.instrumentType === key
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{config.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {config.resultUnit}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Account Balance */}
            <div>
              <label htmlFor="accountBalance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Account Balance ($)
              </label>
              <input
                id="accountBalance"
                type="number"
                step="0.01"
                value={formData.accountBalance}
                onChange={(e) => handleInputChange('accountBalance', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.accountBalance ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="10000"
              />
              {errors.accountBalance && (
                <p className="text-red-500 text-sm mt-1">{errors.accountBalance}</p>
              )}
            </div>

            {/* Risk Percentage */}
            <div>
              <label htmlFor="riskPercentage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Risk Percentage (%)
              </label>
              <input
                id="riskPercentage"
                type="number"
                step="0.1"
                value={formData.riskPercentage}
                onChange={(e) => handleInputChange('riskPercentage', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.riskPercentage ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="2"
              />
              {errors.riskPercentage && (
                <p className="text-red-500 text-sm mt-1">{errors.riskPercentage}</p>
              )}
            </div>

            {/* Currency Pair Selection */}
            <div>
              <label htmlFor="currencyPair" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {formData.instrumentType === 'forex' ? 'Currency Pair' : 
                 formData.instrumentType === 'commodities' ? 'Commodity' : 'Cryptocurrency'}
              </label>
              <select
                id="currencyPair"
                value={formData.currencyPair}
                onChange={(e) => handleInputChange('currencyPair', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                {instrumentConfigs[formData.instrumentType].pairs.map((pair) => (
                  <option key={pair.symbol} value={pair.symbol}>
                    {pair.symbol}
                  </option>
                ))}
              </select>
            </div>

            {/* Stop Loss */}
            <div>
              <label htmlFor="stopLoss" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Stop Loss ({instrumentConfigs[formData.instrumentType].stopLossUnit})
              </label>
              <input
                id="stopLoss"
                type="number"
                step="0.01"
                value={formData.stopLoss}
                onChange={(e) => handleInputChange('stopLoss', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  errors.stopLoss ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={formData.instrumentType === 'forex' ? '50' : '100'}
              />
              {errors.stopLoss && (
                <p className="text-red-500 text-sm mt-1">{errors.stopLoss}</p>
              )}
            </div>

            {/* Current Price (for crypto only) */}
            {formData.instrumentType === 'crypto' && (
              <div className="md:col-span-2">
                <label htmlFor="currentPrice" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Current Price ($)
                </label>
                <input
                  id="currentPrice"
                  type="number"
                  step="0.01"
                  value={formData.currentPrice}
                  onChange={(e) => handleInputChange('currentPrice', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                    errors.currentPrice ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="50000"
                />
                {errors.currentPrice && (
                  <p className="text-red-500 text-sm mt-1">{errors.currentPrice}</p>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button
              onClick={calculateLotSize}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Calculate Lot Size
            </Button>
            <Button
              onClick={resetCalculator}
              variant="outline"
              className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Reset
            </Button>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Calculation Results
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Risk Amount:</span>
                    <span className="font-semibold text-red-600">${result.riskAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Position Size:</span>
                    <span className="font-semibold text-green-600">
                      {result.lotSize.toFixed(result.instrumentType === 'crypto' ? 8 : 4)} {result.resultUnit}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Calculation:</strong>
                    <div className="mt-1 p-2 bg-white dark:bg-gray-800 rounded border font-mono text-xs">
                      {result.calculation}
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Management Tips */}
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Risk Management Tips:</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Never risk more than 2-3% of your account per trade</li>
                  <li>• Always use stop-loss orders to limit potential losses</li>
                  <li>• Consider market volatility when setting stop-loss levels</li>
                  <li>• Review and adjust position sizes based on market conditions</li>
                </ul>
              </div>
            </div>
          )}

          {/* Formula Information */}
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">📊 Calculation Formulas:</h4>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <strong>Forex:</strong> Lot Size = (Account Balance × Risk %) ÷ (Stop Loss (pips) × Pip Value)
              </div>
              <div>
                <strong>Commodities:</strong> Lot Size = (Account Balance × Risk %) ÷ (Stop Loss (price difference) × Contract Size)
              </div>
              <div>
                <strong>Cryptocurrency:</strong> Position Size = (Account Balance × Risk %) ÷ Stop Loss (price difference)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LotSizeCalculator;
