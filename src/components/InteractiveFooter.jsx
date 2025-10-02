import React, { useState, useEffect } from 'react'

import forexService from '../services/forexService'

const InteractiveFooter = () => {
  const [forexData, setForexData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchForexData = async () => {
      try {
        const data = await forexService.getAllForexData();
        const dataMap = {};
        data.forEach(item => {
          dataMap[item.pair] = item;
        });
        setForexData(dataMap);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching forex data:', error);
        setLoading(false);
      }
    };

    // Initial fetch
    fetchForexData();

    // Set up interval for updates (every 60 seconds for free API)
    const interval = setInterval(fetchForexData, 60000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (pair, price) => {
    if (pair === 'USDJPY' || pair === 'XAUUSD') {
      return parseFloat(price).toFixed(2);
    }
    return parseFloat(price).toFixed(4);
  };

  return (
    <>
      {/* Forex Ticker Tape */}
      <div className="ticker-tape border-y border-gray-200 dark:border-gray-700 py-2 sm:py-2.5 md:py-3 overflow-hidden w-full transition-colors duration-300">
        <div className="ticker-content flex items-center animate-scroll">
          {/* First Set */}
          {/* EUR/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="EURUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-blue-300 transition-colors duration-300">€</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">EUR/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('EURUSD', forexData.EURUSD?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('EURUSD', forexData.EURUSD?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('EURUSD', forexData.EURUSD?.spread || 0)}
              </span>
            </div>
          </div>
          {/* GBP/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="GBPUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xs font-bold text-red-800 dark:text-red-300 transition-colors duration-300">£</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">GBP/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('GBPUSD', forexData.GBPUSD?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('GBPUSD', forexData.GBPUSD?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('GBPUSD', forexData.GBPUSD?.spread || 0)}
              </span>
            </div>
          </div>
          {/* USD/JPY */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDJPY">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs font-bold text-green-800 dark:text-green-300 transition-colors duration-300">¥</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/JPY</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.00' : formatPrice('USDJPY', forexData.USDJPY?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.00' : formatPrice('USDJPY', forexData.USDJPY?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('USDJPY', forexData.USDJPY?.spread || 0)}
              </span>
            </div>
          </div>
          {/* USD/CHF */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDCHF">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs font-bold text-purple-800 dark:text-purple-300 transition-colors duration-300">₣</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/CHF</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('USDCHF', forexData.USDCHF?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('USDCHF', forexData.USDCHF?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('USDCHF', forexData.USDCHF?.spread || 0)}
              </span>
            </div>
          </div>
          {/* XAU/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="XAUUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-xs font-bold text-yellow-800 dark:text-yellow-300 transition-colors duration-300">Au</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">XAU/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('XAUUSD', forexData.XAUUSD?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('XAUUSD', forexData.XAUUSD?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('XAUUSD', forexData.XAUUSD?.spread || 0)}
              </span>
            </div>
          </div>
          
          {/* Duplicate Set for Seamless Loop */}
          {/* EUR/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="EURUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-blue-300 transition-colors duration-300">€</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">EUR/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('EURUSD', forexData.EURUSD?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('EURUSD', forexData.EURUSD?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('EURUSD', forexData.EURUSD?.spread || 0)}
              </span>
            </div>
          </div>
          {/* GBP/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="GBPUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xs font-bold text-red-800 dark:text-red-300 transition-colors duration-300">£</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">GBP/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('GBPUSD', forexData.GBPUSD?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('GBPUSD', forexData.GBPUSD?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('GBPUSD', forexData.GBPUSD?.spread || 0)}
              </span>
            </div>
          </div>
          {/* USD/JPY */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDJPY">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs font-bold text-green-800 dark:text-green-300 transition-colors duration-300">¥</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/JPY</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.00' : formatPrice('USDJPY', forexData.USDJPY?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.00' : formatPrice('USDJPY', forexData.USDJPY?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('USDJPY', forexData.USDJPY?.spread || 0)}
              </span>
            </div>
          </div>
          {/* USD/CHF */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDCHF">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs font-bold text-purple-800 dark:text-purple-300 transition-colors duration-300">₣</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/CHF</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('USDCHF', forexData.USDCHF?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('USDCHF', forexData.USDCHF?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('USDCHF', forexData.USDCHF?.spread || 0)}
              </span>
            </div>
          </div>
          {/* XAU/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="XAUUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-xs font-bold text-yellow-800 dark:text-yellow-300 transition-colors duration-300">Au</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">XAU/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('XAUUSD', forexData.XAUUSD?.ask || 0)}
              </span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">
                {loading ? '0.0000' : formatPrice('XAUUSD', forexData.XAUUSD?.bid || 0)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">
                {loading ? '0.0' : formatPrice('XAUUSD', forexData.XAUUSD?.spread || 0)}
              </span>
            </div>
          </div>
        </div>
      </div>

 

      {/* Footer */}
      <footer className="bg-[#19235d] text-white py-8 sm:py-10 md:py-12 px-4 md:px-6 w-full">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            <div>
              <div className="flex items-center mb-3 sm:mb-4 justify-center md:justify-start">
                <h3 className="text-xl sm:text-2xl font-bold text-[#00e676]">HEXTECH ALGO</h3>
              </div>
              <p className="mb-3 sm:mb-4 text-center md:text-left text-gray-300 text-sm sm:text-base">
                Professional forex trading system helping hundreds+ achieve consistent profits trading analysis software.
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/hextechalgo?igsh=MWViMG1ua2l1bDc3dw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00e676] transition duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://youtube.com/@hextechalgo?si=-YmagntVmp6Ss0RB" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00e676] transition duration-300">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="https://t.me/+NgzWiBMfEj02YTM1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00e676] transition duration-300">
                  <i className="fab fa-telegram text-xl"></i>
                </a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <li><a href="#features" className="text-gray-300 hover:text-[#00e676] transition duration-300">System Features</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-[#00e676] transition duration-300">Packages</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-[#00e676] transition duration-300">FAQ</a></li>
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-[#00e676] transition duration-300">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="text-gray-300 hover:text-[#00e676] transition duration-300">Terms & Conditions</a></li>
                <li><a href="/refund-policy" className="text-gray-300 hover:text-[#00e676] transition duration-300">Refund Policy</a></li>
              </ul>
            </div>
           
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contact Information</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start justify-center md:justify-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2 text-gray-400"></i>
                  <span className="text-gray-300">UAE - Dubai</span>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <i className="fab fa-telegram mt-1 mr-2 text-gray-400"></i>
                  <span className="text-gray-300">Telegram: <a href="https://t.me/+NgzWiBMfEj02YTM1" className="text-gray-300 hover:text-[#00e676] transition duration-300">Click to Chat</a></span>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <i className="fas fa-envelope mt-1 mr-2 text-gray-400"></i>
                  <span className="text-gray-300">hextechalgo@gmail.com</span>
                </li>
                <li className="mt-4 pt-4">
                  <p className="text-sm text-gray-400">For fastest response, contact me via Telegram</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 sm:mt-10 md:mt-12 pt-5 sm:pt-6 md:pt-8 text-center">
            <p className="text-gray-300 text-sm sm:text-base">&copy; 2025 Hextech Algo. All Rights Reserved.</p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-4xl mx-auto px-4">
              Trading involves significant risk of loss and may not be suitable for all investors. Past performance is not indicative of future results. Before
              deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default InteractiveFooter
