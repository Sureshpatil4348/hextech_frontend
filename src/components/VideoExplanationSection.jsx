import { 
  Play,
  Bell,
  Sparkles,
  Clock,
  Zap,
  Shield,
  Eye
} from 'lucide-react'
import React, { useState } from 'react'

const VideoExplanationSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const tradingSteps = [
    {
      id: 1,
      title: "Market Analysis",
      description: "AI scans 24/7 for high-probability setups across all major pairs",
      icon: Eye,
      time: "00:00",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Signal Detection",
      description: "Advanced algorithms identify optimal entry and exit points",
      icon: Zap,
      time: "00:15",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      title: "Risk Management",
      description: "Smart position sizing and stop-loss calculations",
      icon: Shield,
      time: "00:30",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Instant Alerts",
      description: "Real-time notifications delivered to your device",
      icon: Bell,
      time: "00:45",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1 text-emerald-600 dark:text-emerald-400 text-xs font-medium mb-4" style={{fontFamily: 'Pier Sans, sans-serif'}}>
            <Sparkles className="w-3 h-3" />
            <span>HOW IT WORKS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4" style={{fontFamily: 'Pier Sans, sans-serif'}}>
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
              Why Choose HEXTECH ALGO?
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the power of <span className="text-emerald-600 dark:text-emerald-400 font-medium" style={{fontFamily: 'Pier Sans, sans-serif'}}>AI-driven trading</span> with our proven system
          </p>
        </div>

        {/* Main Content - Swapped Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Trading Timeline Section - Left Side */}
          <div className="relative">
            <div className="relative">
              {/* Timeline Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                    Trading Process Timeline
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  From market analysis to profit realization in under 1 minute
                </p>
              </div>

              {/* Timeline Steps */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-yellow-500 via-green-500 to-purple-500 rounded-full opacity-20"></div>
                
                {tradingSteps.map((step) => {
                  const IconComponent = step.icon
                  
                  return (
                    <div key={step.id} className="relative mb-5 last:mb-0">
                      {/* Timeline Node */}
                      <div className="absolute left-4 top-1.5 w-3 h-3 bg-white dark:bg-gray-900 rounded-full border-2 border-emerald-500 shadow-sm z-10"></div>
                      
                      {/* Step Content */}
                      <div className="ml-12">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
                          {/* Time Badge */}
                          <div className="flex items-center justify-between mb-3">
                            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${step.color} text-white`} style={{fontFamily: 'Pier Sans, sans-serif'}}>
                              <Clock className="w-2.5 h-2.5 mr-1" />
                              {step.time}
                            </div>
                            <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          
                          {/* Content */}
                          <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300" style={{fontFamily: 'Pier Sans, sans-serif'}}>
                            {step.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Video Section - Right Side */}
          <div className="relative">
            {!isVideoPlaying ? (
              <div 
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg group cursor-pointer" 
                onClick={() => setIsVideoPlaying(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsVideoPlaying(true);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Play HEXTECH ALGO Demo Video"
              >
                {/* Video Thumbnail with Trading Theme */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
                  <img 
                    src="https://img.youtube.com/vi/xH3vWTPYMsY/maxresdefault.jpg" 
                    alt="HEXTECH ALGO Demo Video Thumbnail"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  {/* Trading-themed Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  
                  {/* Play Button with Trading Theme */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="group/btn relative w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center hover:from-emerald-400 hover:to-green-500 transition-all duration-300 hover:scale-110 shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1 group-hover/btn:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full blur opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
                    </button>
                  </div>
                  
                  {/* Video Title Overlay with Trading Theme */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-emerald-500/30">
                      <h3 className="text-white font-medium text-base mb-1" style={{fontFamily: 'Pier Sans, sans-serif'}}>HEXTECH ALGO Trading Demo</h3>
                      <p className="text-emerald-300 text-xs">Watch AI identify profitable opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative bg-black aspect-video overflow-hidden rounded-xl shadow-lg border border-emerald-500/20">
                <iframe
                  src="https://www.youtube.com/embed/xH3vWTPYMsY?autoplay=1&rel=0&modestbranding=1"
                  title="HEXTECH ALGO Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoExplanationSection