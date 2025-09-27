import React from 'react'

const InteractiveFooter = () => {
  return (
    <>
      {/* Forex Ticker Tape */}
      <div className="ticker-tape border-y border-gray-200 dark:border-gray-700 py-2 md:py-3 overflow-hidden w-full transition-colors duration-300">
        <div className="ticker-content flex items-center animate-scroll">
          {/* First Set */}
          {/* EUR/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="EURUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-blue-300 transition-colors duration-300">€</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">EUR/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* GBP/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="GBPUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xs font-bold text-red-800 dark:text-red-300 transition-colors duration-300">£</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">GBP/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* USD/JPY */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDJPY">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs font-bold text-green-800 dark:text-green-300 transition-colors duration-300">¥</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/JPY</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* USD/CHF */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDCHF">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs font-bold text-purple-800 dark:text-purple-300 transition-colors duration-300">₣</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/CHF</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* XAU/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="XAUUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-xs font-bold text-yellow-800 dark:text-yellow-300 transition-colors duration-300">Au</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">XAU/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          
          {/* Duplicate Set for Seamless Loop */}
          {/* EUR/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="EURUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-800 dark:text-blue-300 transition-colors duration-300">€</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">EUR/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* GBP/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="GBPUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-xs font-bold text-red-800 dark:text-red-300 transition-colors duration-300">£</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">GBP/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* USD/JPY */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDJPY">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs font-bold text-green-800 dark:text-green-300 transition-colors duration-300">¥</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/JPY</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* USD/CHF */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="USDCHF">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-xs font-bold text-purple-800 dark:text-purple-300 transition-colors duration-300">₣</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">USD/CHF</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
          {/* XAU/USD */}
          <div className="ticker-item flex items-center mx-2 md:mx-6" data-pair="XAUUSD">
            <div className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-xs font-bold text-yellow-800 dark:text-yellow-300 transition-colors duration-300">Au</div>
            <div className="flex items-center text-sm md:text-base">
              <span className="font-semibold mr-1 md:mr-2 text-gray-900 dark:text-white transition-colors duration-300">XAU/USD</span>
              <span className="ask-value text-green-600 dark:text-green-400 transition-colors duration-300">0.0000</span>
              <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 bid-value transition-colors duration-300">0.0000</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 spread-value hidden sm:inline transition-colors duration-300">0.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="py-8 md:py-10 w-full transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left w-full md:w-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Our Newsletter</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Our Newsletter And be Notified When Launch!</p>
            </div>
            <div className="w-full md:w-auto">
              <form action="https://formsubmit.co/hextechalgo@gmail.com" method="POST" className="flex flex-col sm:flex-row newsletter-input-container">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter Your Email" 
                  className="w-full sm:w-[300px] md:w-[400px] px-4 py-3 md:px-6 md:py-4 rounded-l-lg newsletter-input bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#00e676] hover:bg-[#00c853] dark:bg-green-500 dark:hover:bg-green-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-r-lg newsletter-button font-semibold transition duration-300 mt-2 sm:mt-0"
                >
                  Subscribe Now
                </button>
                {/* Anti-spam honeypot field */}
                <input type="text" name="_honey" style={{display: 'none'}} />
                {/* Disable captcha */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Success page */}
                <input type="hidden" name="_next" value="https://hextechalgo.com/thanks" />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-700 dark:text-gray-400 py-10 md:py-12 px-4 md:px-6 w-full transition-colors duration-300">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="flex items-center mb-4 justify-center sm:justify-start">
                <h3 className="text-2xl font-bold brand-text text-gray-900 dark:text-white transition-colors duration-300">HEXTECH ALGO</h3>
              </div>
              <p className="mb-4 text-center sm:text-left text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Professional forex trading system helping hundreds+ achieve consistent profits through automated trading.
              </p>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a href="https://www.instagram.com/hextechalgo?igsh=MWViMG1ua2l1bDc3dw==" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-500 hover:text-green-500 dark:hover:text-green-400 transition duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://youtube.com/@hextechalgo?si=-YmagntVmp6Ss0RB" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-500 hover:text-green-500 dark:hover:text-green-400 transition duration-300">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href="https://t.me/+NgzWiBMfEj02YTM1" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-500 hover:text-green-500 dark:hover:text-green-400 transition duration-300">
                  <i className="fab fa-telegram text-xl"></i>
                </a>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition duration-300">System Features</a></li>
                <li><a href="#packages" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition duration-300">Packages</a></li>
                <li><a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300 transition duration-300">Success Stories</a></li>
                <li><a href="#community" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300">Community</a></li>
                <li><a href="#faq" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition duration-300">FAQ</a></li>
              </ul>
            </div>
           
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">Contact Information</h4>
              <ul className="space-y-3">
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-2 text-gray-500 dark:text-gray-400 transition-colors duration-300"></i>
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">UAE</span>
                </li>
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fab fa-telegram mt-1 mr-2 text-gray-500 dark:text-gray-400 transition-colors duration-300"></i>
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Telegram: <a href="https://t.me/+NgzWiBMfEj02YTM1" className="underline hover:text-gray-900 dark:hover:text-gray-200 transition duration-300">Click to Chat</a></span>
                </li>
                <li className="flex items-start justify-center sm:justify-start">
                  <i className="fas fa-envelope mt-1 mr-2 text-gray-500 dark:text-gray-400 transition-colors duration-300"></i>
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">hextechalgo@gmail.com</span>
                </li>
                <li className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600 transition-colors duration-300">
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">For fastest response, contact me via Telegram</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 mt-10 md:mt-12 pt-6 md:pt-8 text-center transition-colors duration-300">
            <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">&copy; 2025 Hextech Algo. All Rights Reserved.</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-4xl mx-auto transition-colors duration-300">
              Trading involves significant risk of loss and may not be suitable for all investors. Past performance is not indicative of future results.
              Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default InteractiveFooter
