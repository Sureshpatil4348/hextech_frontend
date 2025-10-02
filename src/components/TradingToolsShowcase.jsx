import {
    LineChart,
    TrendingUp,
    Newspaper,
    Gauge,
    Bell,
    Calculator,
    Activity,
    Globe,
    CheckCircle2
  } from 'lucide-react'
  import React, { useState } from 'react'
  
  const TradingToolsShowcase = () => {
    const [activeTab, setActiveTab] = useState(1)
  
    const tools = [
      {
        id: 0,
        icon: LineChart,
        name: "TradingView Pro",
        title: "Professional Charting Without Software",
        description: "Access advanced TradingView charts directly in your browser. No downloads, no installations - just professional-grade trading tools at your fingertips.",
        features: [
          "Real-time price data across all markets",
          "50+ technical indicators and drawing tools",
          "Multiple timeframe analysis",
          "Custom watchlists and alerts",
          "Mobile responsive design"
        ],
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-500/10 to-cyan-500/10"
      },
      {
        id: 1,
        icon: Newspaper,
        name: "Live News Feed",
        title: "Real-Time Market News",
        description: "Stay informed with aggregated news from top financial sources. Never miss market-moving events that could impact your trades.",
        features: [
          "Breaking news from trusted sources",
          "Economic calendar integration",
          "Sentiment analysis",
          "Customizable news filters",
          "Impact level indicators"
        ],
        gradient: "from-emerald-500 to-green-500",
        bgGradient: "from-emerald-500/10 to-green-500/10"
      },
      {
        id: 2,
        icon: Gauge,
        name: "Currency Strength",
        title: "Advanced Currency Strength Meter",
        description: "Identify the strongest and weakest currencies in real-time. Make smarter trading decisions based on currency correlation and strength.",
        features: [
          "Real-time strength calculations",
          "8 major currency pairs tracked",
          "Visual strength indicators",
          "Historical strength data",
          "Correlation matrix analysis"
        ],
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-500/10 to-pink-500/10"
      },
      {
        id: 3,
        icon: Activity,
        name: "Multi-Indicator Dashboard",
        title: "6-in-1 Indicator Analysis",
        description: "Get comprehensive market analysis with 6-7 powerful indicators working across multiple timeframes simultaneously.",
        features: [
          "RSI, MACD, Ichimoku, and more",
          "Multi-timeframe correlation",
          "Automated signal generation",
          "Customizable thresholds",
          "Heatmap visualization"
        ],
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-500/10 to-red-500/10"
      },
      {
        id: 4,
        icon: Calculator,
        name: "Trading Calculators",
        title: "Professional Risk Management Tools",
        description: "Calculate position sizes, risk, stop-loss, and take-profit levels for Forex, Crypto, and Commodities with precision.",
        features: [
          "Position size calculator",
          "Risk/reward calculator",
          "Pip value calculator",
          "Stop-loss calculator",
          "Multi-asset support"
        ],
        gradient: "from-cyan-500 to-blue-500",
        bgGradient: "from-cyan-500/10 to-blue-500/10"
      },
      {
        id: 5,
        icon: Globe,
        name: "Market Sessions",
        title: "Global Trading Sessions Tracker",
        description: "Track all major trading sessions worldwide. Know when markets open, close, and overlap for optimal trading times.",
        features: [
          "London, New York, Tokyo, Sydney sessions",
          "Real-time session status",
          "Session overlap indicators",
          "Timezone converter",
          "Volume by session analytics"
        ],
        gradient: "from-indigo-500 to-purple-500",
        bgGradient: "from-indigo-500/10 to-purple-500/10"
      }
    ]
  
    const activeTool = tools[activeTab]
  
    return (
      <section id="trading-tools" className="py-14 md:py-20 px-4 md:px-6 w-full transition-colors duration-300 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
  
        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-full px-6 py-3 shadow-lg">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
                  Powerful Trading Tools
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Your Complete{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                Trading Arsenal
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              
            </p>
          </div>
  
          {/* Interactive Tabs with Glassy Effect */}
          <div className="mb-10 md:mb-12">
            <div className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-3xl p-2 shadow-xl">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setActiveTab(tool.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 ${
                      activeTab === tool.id
                        ? 'bg-white dark:bg-gray-800 shadow-lg scale-105'
                        : 'hover:bg-white/50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                      activeTab === tool.id
                        ? `bg-gradient-to-r ${tool.gradient} shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}>
                      <tool.icon className={`w-6 h-6 ${
                        activeTab === tool.id ? 'text-white' : 'text-gray-600 dark:text-gray-400'
                      }`} />
                    </div>
                    <span className={`text-xs font-semibold text-center leading-snug ${
                      activeTab === tool.id
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {tool.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
  
          {/* Tool Details Card with Premium Glassy Effect */}
          <div className="relative">
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-r ${activeTool.gradient} opacity-10 blur-3xl rounded-3xl transition-all duration-500`}></div>
            
            {/* Main Content Card */}
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-2xl border border-white/40 dark:border-gray-700/40 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-6 sm:p-8 md:p-12">
                {/* Left Column - Description */}
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${activeTool.gradient} flex items-center justify-center shadow-xl`}>
                      <activeTool.icon className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        {activeTool.title}
                      </h3>
                    </div>
                  </div>
  
                  {/* Description */}
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {activeTool.description}
                  </p>
  
                  {/* Alert Badge */}
                  <div className="flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 w-fit">
                    <Bell className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                      Email notifications included
                    </span>
                  </div>
                </div>
  
                {/* Right Column - Features List */}
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 rounded-2xl p-6 md:p-8 shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <TrendingUp className={`w-6 h-6 mr-2 bg-gradient-to-r ${activeTool.gradient} bg-clip-text text-transparent`} />
                    Key Features
                  </h4>
                  <ul className="space-y-4">
                    {activeTool.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 group">
                        <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${activeTool.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    )
  }
  
  export default TradingToolsShowcase
  