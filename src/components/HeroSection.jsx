import React, { useState, useEffect } from 'react'
import aiIcon from '../assets/artificial-intelligence.png'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 3 ? 1 : prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const showSlide = (n) => {
    setCurrentSlide(n)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => prev === 3 ? 1 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 1 ? 3 : prev - 1)
  }

  return (
    <section className="pt-20 pb-12 px-4 sm:pt-24 sm:pb-16 md:px-6 w-full transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            {/* Premium Badges with Glassy Effect */}
            <div className="mb-6 flex flex-col items-center lg:items-start space-y-3">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full px-5 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center text-emerald-700 dark:text-emerald-300 text-sm font-semibold">
                  <i className="fas fa-check-circle mr-2 text-emerald-500"></i> 
                    AI Powered All-in-One Trading Platform
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900 dark:text-white transition-colors duration-300">
                Trade With The Power Of{' '}
              </span>
              <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent animate-gradient">
                AI
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experience seamless, all-in-one trading intelligence—every tool and insight you need, unified in a single world-class platform.
            </p>

            {/* Premium Feature Highlights */}
            <div className="mb-8 relative p-[1.5px] rounded-3xl bg-gradient-to-br from-white/60 via-white/30 to-white/10 dark:from-white/20 dark:via-white/10 dark:to-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <div className="rounded-3xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group flex items-center space-x-3 rounded-xl bg-white/10 dark:bg-white/[0.04] border border-white/20 dark:border-white/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-md flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                        <path d="M3 9h18"></path>
                        <circle cx="7" cy="7" r="1"></circle>
                        <circle cx="11" cy="7" r="1"></circle>
                        <circle cx="15" cy="7" r="1"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">No Software Needed</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Trade from any browser</p>
                    </div>
                  </div>
                  <div className="group flex items-center space-x-3 rounded-xl bg-white/10 dark:bg-white/[0.04] border border-white/20 dark:border-white/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 shadow-md flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8"></path>
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Live Alerts</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Email notifications</p>
                    </div>
                  </div>
                  <div className="group8 flex items-center space-x-3 rounded-xl bg-white/10 dark:bg-white/[0.04] border border-white/20 dark:border-white/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-md flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                        <path d="M8 7h8"></path>
                        <path d="M8 11h8M8 15h8"></path>
                        <path d="M12 11v8"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Pro Calculators</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Risk management tools</p>
                    </div>
                  </div>
                  <div className="group flex items-center space-x-3 rounded-xl bg-white/10 dark:bg-white/[0.04] border border-white/20 dark:border-white/10 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-md flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="8"></circle>
                        <path d="M12 8v4l3 2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">24/7 Access</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Trade anytime, anywhere</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <a 
                href="#pricing" 
                className="relative bg-gradient-to-r from-emerald-500 via-emerald-400 to-green-600 hover:from-emerald-500 hover:via-emerald-500 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_12px_40px_rgba(16,185,129,0.45)] hover:shadow-[0_16px_50px_rgba(16,185,129,0.55)] ring-1 ring-white/20 transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <span>Get Started Now</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <a 
                href="#trading-tools" 
                className="relative bg-white/10 dark:bg-white/[0.06] backdrop-blur-xl border border-white/30 dark:border-white/10 text-gray-900 dark:text-white px-8 py-4 rounded-full text-lg font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.16)] hover:bg-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <i className="fas fa-play-circle"></i>
                <span>Explore Tools</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 flex justify-center items-center relative w-full">
            {/* Algo Trading Animation */}
            <div className="relative w-full max-w-[1600px] h-[620px] sm:h-[460px] md:h-[520px] lg:h-[620px] xl:h-[700px] overflow-visible flex items-center justify-center">
              <iframe
                src="https://lottie.host/embed/5637be98-92ff-4474-bac5-6c8af542c916/TnmAcbV7Y0.lottie"
                className="w-full h-full transform scale-[1.25] sm:scale-[1.15] md:scale-[1.25] lg:scale-[1.25] translate-x-[8%] sm:translate-x-[6%] md:translate-x-[8%] lg:translate-x-[8%] translate-y-0"
                style={{ border: 'none' }}
                title="Trading Animation"
              />
            </div>
          </div>
              </div>

        {/* Premium Verified Results Section */}
        <div id="demo-video" className="mt-12 md:mt-16 mx-auto px-4 md:px-8 max-w-6xl">
          {/* Premium Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-sm mb-4">
              <img src={aiIcon} alt="AI Trading" className="w-6 h-6 mr-3" />
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm tracking-wide" style={{fontFamily: 'Pier Sans, sans-serif'}}>Unlock the Power of AI Trading</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3" style={{fontFamily: 'Pier Sans, sans-serif'}}>
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"></span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          
            </p>
          </div>

          {/* Frameless Premium Carousel */}
          <div className="relative group">
            {/* Main Carousel Container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50">
              
              {/* Slides */}
              <div className="relative h-[500px] md:h-[600px]">
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <img 
                    src="https://i.ibb.co/vCJCmq6B/Screenshot-2025-07-02-at-6-32-35-PM.png" 
                    alt="Trading Results 1"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <img 
                    src="https://www.milesweb.in/blog/wp-content/uploads/2023/03/forex-trading-software-top-picks-for-your-capital-gain.png" 
                    alt="Trading Results 2"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${currentSlide === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <img 
                    src="https://www.shareindia.com/wp-content/uploads/2023/12/Decoding-Forex-Trading.webp" 
                    alt="Trading Results 3"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Premium Navigation Arrows - Hidden */}
              <button 
                type="button" 
                onClick={prevSlide} 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 z-20 border border-gray-200/50 dark:border-gray-700/50"
              >
                <i className="fas fa-chevron-left text-lg"></i>
              </button>
              
              <button 
                type="button" 
                onClick={nextSlide} 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 z-20 border border-gray-200/50 dark:border-gray-700/50"
              >
                <i className="fas fa-chevron-right text-lg"></i>
              </button>

              {/* Premium Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <button 
                  type="button" 
                  onClick={() => showSlide(1)} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-emerald-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
                ></button>
                <button 
                  type="button" 
                  onClick={() => showSlide(2)} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 2 ? 'bg-emerald-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
                ></button>
                <button 
                  type="button" 
                  onClick={() => showSlide(3)} 
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === 3 ? 'bg-emerald-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'}`}
                ></button>
              </div>

              {/* Premium Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Premium Stats Overlay */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl px-6 py-4 shadow-xl">
              <div className="flex items-center space-x-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>80% +</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Accuracy</p>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>17+</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Trading Tools</p>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>$580k+</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Profit Generated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
