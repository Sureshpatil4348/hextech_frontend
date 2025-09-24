import React, { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [animationLoaded, setAnimationLoaded] = useState(false)

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => prev === 3 ? 1 : prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Handle animation loading
  useEffect(() => {
    const checkAnimation = () => {
      const player = document.querySelector('dotlottie-player')
      const staticAnimation = document.getElementById('static-animation')
      
      if (player) {
        player.addEventListener('ready', () => {
          setAnimationLoaded(true)
          if (staticAnimation) {
            staticAnimation.style.display = 'none'
          }
        })
        
        player.addEventListener('error', () => {
          setAnimationLoaded(false)
          if (staticAnimation) {
            staticAnimation.style.display = 'flex'
          }
        })
        
        // Fallback timeout - show static animation if Lottie doesn't load within 3 seconds
        setTimeout(() => {
          if (!animationLoaded && staticAnimation) {
            staticAnimation.style.display = 'flex'
          }
        }, 3000)
      } else {
        // If dotlottie-player is not available, show static animation
        if (staticAnimation) {
          staticAnimation.style.display = 'flex'
        }
      }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkAnimation)
    } else {
      checkAnimation()
    }
  }, [animationLoaded])

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
    <section className="pt-32 pb-16 px-4 sm:pt-40 sm:pb-20 md:px-6 w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="mb-4 flex flex-col items-center lg:items-start space-y-2">
              <div className="flex items-center bg-green-100 dark:bg-green-900/30 rounded-full px-4 py-1 text-green-800 dark:text-green-300 text-sm font-medium transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                <i className="fas fa-check-circle mr-2"></i> Say Goodbye to All-Day Chart Monitoring!
              </div>
              <div className="flex items-center bg-blue-50 dark:bg-blue-900/30 rounded-full px-4 py-1 text-blue-800 dark:text-blue-300 text-xs font-medium transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                <i className="fas fa-users mr-2"></i> 100+ traders using our proven system
              </div>
              </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4" style={{fontFamily: 'Pier Sans, sans-serif'}}>
              <span className="text-[#19235d] dark:text-white transition-colors duration-300">Stop Chasing Losses: <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent">Achieve Consistent Results with Our Proven Trading Algorithm</span></span>
            </h1>
            <p className="text-base md:text-lg text-[#19235d] dark:text-gray-300 mb-6 transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
              Quit losing money on manual trades. Our proven automated system has empowered hundreds of clients to achieve consistent success in trading.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <a href="https://t.me/+NgzWiBMfEj02YTM1" target="_blank" rel="noopener noreferrer" className="bg-yellow-600 dark:bg-yellow-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-yellow-700 dark:hover:bg-yellow-600 transition duration-300 cta-button w-full sm:w-auto text-center" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                Join Successful Traders
              </a>
              <a href="#demo-video" className="border-2 border-green-600 dark:border-green-500 text-green-600 dark:text-green-400 px-6 py-3 rounded-full text-lg font-medium hover:bg-green-50 dark:hover:bg-green-900/20 transition duration-300 cta-button flex items-center justify-center w-full sm:w-auto" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                <i className="fas fa-play-circle mr-2"></i> Watch Demo
              </a>
              </div>
            </div>

          <div className="lg:w-1/2 flex justify-center relative w-full">
            {/* Algo Trading Animation */}
            <div className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center">
              {/* Lottie Animation */}
              <dotlottie-player
                src="https://lottie.host/809992b4-2bc5-4354-90c9-6f141d2ba8e0/5a1a9bzphT.lottie"
                background="transparent"
                speed="1"
                style={{width: '100%', height: '100%'}}
                loop
                autoplay
              ></dotlottie-player>
              
              
            </div>
          </div>
              </div>
        
        {/* Success Announcement */}
        <div className="mt-8 md:mt-12 text-center">
          {/* Success Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 p-4 rounded-lg shadow-lg max-w-4xl mx-auto mb-6 transition-colors duration-300">
            <div className="flex items-center justify-center text-white">
              <i className="fas fa-trophy text-2xl mr-3"></i>
              <div>
                <h3 className="font-medium text-lg" style={{fontFamily: 'Pier Sans, sans-serif'}}>🎉 SUCCESS STORIES!</h3>
                <p className="text-sm">150+ successful traders now using our proven system</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 via-[#19235d] to-blue-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-6 md:p-8 rounded-xl shadow-2xl max-w-4xl mx-auto border-t-4 border-[#00E676] dark:border-green-400 relative overflow-hidden transition-colors duration-300">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 transition-opacity duration-300">
              <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#00E676] dark:bg-green-400 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-[#1DE9B6] dark:bg-green-300 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-[#00BFA5] dark:bg-green-500 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            
            <div className="relative z-10">
              {/* Header with pulse effect */}
              <div className="inline-flex items-center justify-center px-4 py-2 bg-[#00E676] bg-opacity-20 dark:bg-green-400 dark:bg-opacity-30 rounded-full mb-4 transition-colors duration-300">
                <i className="fas fa-chart-trending-up text-[#00E676] dark:text-green-400 mr-2 transition-colors duration-300"></i>
                <span className="text-white font-medium tracking-wide" style={{fontFamily: 'Pier Sans, sans-serif'}}>PROVEN TRACK RECORD</span>
              </div>
              
              <h3 className="text-white text-2xl md:text-3xl font-medium mb-3" style={{fontFamily: 'Pier Sans, sans-serif'}}>Join Our Established Trading Community</h3>
              
              <p className="text-gray-200 dark:text-gray-300 text-lg mb-6 max-w-3xl mx-auto transition-colors duration-300">
                Our founding members have generated consistent profits using our proven system. 
                <span className="font-medium text-[#00E676] dark:text-green-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>Join 150+ successful traders today!</span>
              </p>
              
              {/* Success Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto">
                <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-30 rounded-lg p-4 text-center backdrop-blur-sm transition-colors duration-300">
                  <div className="text-2xl font-medium text-[#00E676] dark:text-green-400 mb-1" style={{fontFamily: 'Pier Sans, sans-serif'}}>150+</div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">Active Traders</p>
                  </div>
                <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-30 rounded-lg p-4 text-center backdrop-blur-sm transition-colors duration-300">
                  <div className="text-2xl font-medium text-[#00E676] dark:text-green-400 mb-1" style={{fontFamily: 'Pier Sans, sans-serif'}}>6-months</div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">Track Record</p>
                </div>
                <div className="bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-30 rounded-lg p-4 text-center backdrop-blur-sm transition-colors duration-300">
                  <div className="text-2xl font-medium text-[#00E676] dark:text-green-400 mb-1" style={{fontFamily: 'Pier Sans, sans-serif'}}>$230k+</div>
                  <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">Total Profits Generated</p>
                </div>
              </div>

              {/* CTA Button */}
              <a href="#packages" className="inline-block bg-[#00E676] hover:bg-[#00BFA5] dark:bg-green-500 dark:hover:bg-green-600 text-[#19235d] dark:text-white font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                Join Successful Traders
              </a>
              
              {/* Social proof */}
              <div className="mt-4 text-gray-400 dark:text-gray-500 text-sm flex items-center justify-center transition-colors duration-300">
                <i className="fas fa-users mr-2 text-green-400 dark:text-green-300"></i>
                <span>Active community with daily support and results sharing</span>
                      </div>
                    </div>
                  </div>
                </div>


        
        {/* Premium Verified Results Section */}
        <div id="demo-video" className="mt-12 md:mt-16 mx-auto px-4 md:px-8 max-w-6xl">
          {/* Premium Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-sm mb-4">
              <img src="https://www.myfxbook.com/favicon.ico" alt="Myfxbook" className="w-5 h-5 mr-3" />
              <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm tracking-wide" style={{fontFamily: 'Pier Sans, sans-serif'}}>VERIFIED BY MYFXBOOK</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-3" style={{fontFamily: 'Pier Sans, sans-serif'}}>
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Real Trading Results</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              See the actual performance data that speaks for itself
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
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>98.5%</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Win Rate</p>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>6+</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Months</p>
                </div>
                <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                <div>
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400" style={{fontFamily: 'Pier Sans, sans-serif'}}>$230k+</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Profits</p>
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
