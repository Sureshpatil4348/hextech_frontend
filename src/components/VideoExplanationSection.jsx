import React from 'react';

const VideoExplanationSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
              Advanced <span className="gold-text">Trading Technology</span>
            </h2>
            <p className="text-[#19235d] dark:text-gray-300 mb-8 text-base md:text-lg transition-colors duration-300">
              I&apos;ve spent years refining this system through thousands of trades. Here&apos;s what makes it different from everything else you&apos;ve tried:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2 transition-colors duration-300"></div>
                <p className="ml-3 text-[#19235d] dark:text-gray-300 transition-colors duration-300">
                  <strong>Multi-level grid positioning</strong> – Places orders at strategic price levels for maximum profit opportunities
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2 transition-colors duration-300"></div>
                <p className="ml-3 text-[#19235d] dark:text-gray-300 transition-colors duration-300">
                  <strong>Smart money management</strong> – Automatically adjusts position size based on your account equity and risk tolerance
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2 transition-colors duration-300"></div>
                <p className="ml-3 text-[#19235d] dark:text-gray-300 transition-colors duration-300">
                  <strong>Re-entry algorithm</strong> – Detects when a trend is continuing and re-enters in the direction of the trend
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-2 w-2 rounded-full bg-green-500 mt-2 transition-colors duration-300"></div>
                <p className="ml-3 text-[#19235d] dark:text-gray-300 transition-colors duration-300">
                  <strong>Volatility filters</strong> – Avoids trading during dangerous market conditions like news events
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg transition-colors duration-300">
            {/* YouTube Video Embed */}
            <div className="rounded-lg overflow-hidden aspect-video h-full flex items-center">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/1CcpagwYKNQ" 
                title="Hextech Algo Trading System" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="aspect-video"
                style={{minHeight: '250px', maxHeight: '350px'}}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExplanationSection;