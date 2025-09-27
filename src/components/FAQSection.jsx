import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-900 dark:text-white transition-colors duration-300">
          Frequently Asked <span className="gold-text">Questions</span>
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Do I need prior trading experience to use this system?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              No, the AURUM is designed for both beginners and experienced traders. Complete setup guides are provided, and our WhatsApp community is always there to help you. However, I recommend watching some of my YouTube tutorials to understand basic trading concepts.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Which platforms and brokers are supported?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              The system works with both MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms. It&apos;s compatible with most brokers offering gold (XAUUSD) trading. If you&apos;re unsure about your broker, contact me on WhatsApp and I&apos;ll confirm compatibility.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">What&apos;s the difference between Silver, Gold, and Diamond packages?</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Silver allows trading in a single direction (either buy or sell). Gold adds bi-directional trading and enhanced re-entry logic, doubling your profit potential. Diamond includes everything plus advanced customization options like trading schedules, price range limits, and one-click management features.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">How much capital do I need to start?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              While you can start with as little as $500, I recommend at least $1,000 USD (or equivalent) to fully utilize the grid trading strategy. The system includes position sizing controls to adapt to your account size. Many of my successful students started with accounts between $1,000 - $5,000.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">What kind of support will I receive?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              All packages include installation support and access to our Telegram community. Silver includes 30-day email support, Gold includes 90-day priority support, and Diamond includes lifetime VIP support with direct access to me for strategy optimization.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">How much time do I need to spend monitoring the system?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              That&apos;s the beauty of the AURUM — it&apos;s fully automated. Once set up, it trades 24/5 while you sleep or work. Most users check results for 5-10 minutes daily. With the Diamond package, you can even set specific trading hours to match your schedule.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">Is this system only for gold trading?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              The system is Works on all pairs including gold, which offers the best volatility and profit potential. However, with a few adjustments, it can be used on major forex pairs as well. I provide setup guidance for other instruments in our community.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors duration-300">What are the realistic profit expectations?</h3>
            <p className="text-[#19235d] dark:text-gray-300 transition-colors duration-300">
              Results vary based on market conditions, account size, and risk settings. On average, my students see 5-15% monthly returns with proper risk management. Some testimonials show higher returns, but these represent experienced traders. Always start conservative and scale up as you gain confidence.
              <span className="text-sm block mt-2 italic text-gray-500 dark:text-gray-400 transition-colors duration-300">*Trading involves risk. Past performance is not indicative of future results.</span>
            </p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-lg md:text-xl mb-4 md:mb-6 text-gray-900 dark:text-white transition-colors duration-300">Still have questions?</p>
          <a 
            href="https://t.me/+NgzWiBMfEj02YTM1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
          >
            <i className="fab fa-telegram mr-2 text-xl"></i> Ask on Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
