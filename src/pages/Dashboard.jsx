import React from 'react'

import { useAuth } from '../auth/AuthProvider'
import AINewsAnalysis from '../components/AINewsAnalysis'
import CurrencyStrengthMeter from '../components/CurrencyStrengthMeter'
import LoadingOverlay from '../components/LoadingOverlay'
import LotSizeCalculator from '../components/LotSizeCalculator'
import MultiIndicatorHeatmap from '../components/MultiIndicatorHeatmap'
import MultiTimeAnalysis from '../components/MultiTimeAnalysis'
import Navbar from '../components/Navbar'
import RSIOverboughtOversoldTracker from '../components/RSIOverboughtOversoldTracker'
import TradingViewWidget from '../components/TradingViewWidget'
import TrendingPairs from '../components/TrendingPairs'
import useBaseMarketStore from '../store/useBaseMarketStore'
import useMarketStore from '../store/useMarketStore'

const Dashboard = () => {
  const { user } = useAuth()
  const { retryAllConnections } = useMarketStore()
  const connectionInitiated = React.useRef(false)
  const [activeTab, setActiveTab] = React.useState('analysis') // 'analysis' | 'tools'
    
    // Subscribe only to the specific parts we need for rendering
    const showLoader = useMarketStore(state => state.globalConnectionState.showLoader)
    const connectionStatus = useMarketStore(state => state.globalConnectionState.status)
    const connectionAttempts = useMarketStore(state => state.globalConnectionState.connectionAttempts)
    const dashboardConnections = useMarketStore(state => state.globalConnectionState.dashboardConnections)

    const { loadTabState, tabStateHasLoaded: _tabStateHasLoaded } = useBaseMarketStore();

    React.useEffect(() => {
      // Only reset if we're dealing with a different user
      if (user?.id && connectionInitiated.current !== user.id) {
        connectionInitiated.current = user.id
        useMarketStore.getState().initiateGlobalConnection()
      }
    }, [user?.id])

    React.useEffect(() => {
      useBaseMarketStore.getState().fetchNews()
      const newsInterval = setInterval(() => {
        useBaseMarketStore.getState().fetchNews()
      }, 5 * 60 * 1000)
      return () => clearInterval(newsInterval)
    }, [])

    // Load user tab states on dashboard mount (optional)
    React.useEffect(() => {
      loadTabState().catch(error => {
        console.error('Failed to load tab states:', error);
      });
    }, [loadTabState]);

    // Cleanup effect to reset global state when component unmounts
    React.useEffect(() => {
      return () => {
        // Reset any global state that might be interfering with routing
        connectionInitiated.current = false;
        // Clear any intervals or timeouts
        try {
          useMarketStore.getState().clearAllConnections?.();
          useMarketStore.getState().resetGlobalConnection?.();
        } catch (error) {
          // Silent cleanup error handling
        }
      };
    }, []);

    return (
      <div className="relative h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden flex flex-col transition-colors duration-300">
        {/* Loading Overlay - Render at root level to avoid layout constraints */}
        {showLoader && (
          <LoadingOverlay
            status={connectionStatus}
            connectionAttempts={connectionAttempts}
            dashboardConnections={dashboardConnections}
            onRetry={retryAllConnections}
          />
        )}

        {/* Navbar */}
        <Navbar />

        {/* Main Content - Takes remaining screen height with proper top spacing for navbar */}
        <main className="flex-1 min-h-0 overflow-y-auto p-2 sm:p-3 pt-20 mt-20">
          {/* Tabs - centered */}
          <div className="mb-3 flex items-center gap-2 justify-center">
            <button
              onClick={() => setActiveTab('analysis')}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                activeTab === 'analysis'
                  ? 'bg-blue-500/30 text-blue-800 dark:text-blue-300 border-blue-400/50'
                  : 'bg-white/20 dark:bg-gray-800/20 text-black dark:text-white hover:bg-white/30 dark:hover:bg-gray-700/30 border-white/30 dark:border-gray-700/40'
              }`}
            >
              Analysis
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                activeTab === 'tools'
                  ? 'bg-purple-500/30 text-purple-800 dark:text-purple-300 border-purple-400/50'
                  : 'bg-white/20 dark:bg-gray-800/20 text-black dark:text-white hover:bg-white/30 dark:hover:bg-gray-700/30 border-white/30 dark:border-gray-700/40'
              }`}
            >
              Tools
            </button>
          </div>

          {activeTab === 'analysis' ? (
            <>
              {/* Mobile Layout - Stack vertically */}
              <div className="block lg:hidden space-y-3">
                {/* Section 1 - TradingView Widget */}
                <div className="h-96 overflow-hidden">
                  <TradingViewWidget
                    initialSymbol="OANDA:EURUSD"
                    initialInterval="60"
                    height="100%"
                    showControls={true}
                    className="w-full"
                  />
                </div>

                {/* Section 2 - AI News Analysis */}
                <div className="h-80">
                  <AINewsAnalysis />
                </div>

                {/* Section 3 - Currency Strength Meter */}
                <div className="h-80">
                  <CurrencyStrengthMeter />
                </div>

                {/* Section 4 - RSI Tracker */}
                <div className="h-64">
                  <RSIOverboughtOversoldTracker />
                </div>
              </div>

              {/* Desktop Layout - Original 12x12 grid preserved exactly */}
              <div className="hidden lg:grid h-full grid-cols-12 grid-rows-12 gap-2">
                {/* Section 1 - TradingView Widget (75% width - top left) */}
                <div className="col-span-9 row-span-8 min-h-0 flex flex-col">
                  <TradingViewWidget
                    initialSymbol="OANDA:EURUSD"
                    initialInterval="60"
                    height="100%"
                    showControls={true}
                    className="w-full flex-1"
                  />
                </div>

                {/* Section 3rd - AI News Analysis (25% width - top right) */}
                <div className="col-span-3 row-span-8">
                  <AINewsAnalysis />
                </div>

                {/* Section 2nd - Currency Strength Meter (75% width - bottom left) */}
                <div className="col-span-9 row-span-4 row-start-9">
                  <CurrencyStrengthMeter />
                </div>

                {/* Section 5th - RSI Tracker (25% width - bottom right) */}
                <div className="col-span-3 row-span-4 row-start-9">
                  <RSIOverboughtOversoldTracker />
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Tools Tab Content */}
              <div className="h-full flex flex-col gap-2">
                {/* Grid Layout - Top Three Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 flex-1 min-h-0">
                  {/* Top Left - Lot Size Calculator */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-2">
                    <div className="h-full overflow-y-auto">
                      <LotSizeCalculator />
                    </div>
                  </div>

                  {/* Top Center - Multi Time Analysis */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-2">
                    <div className="h-full overflow-y-auto">
                      <MultiTimeAnalysis />
                    </div>
                  </div>

                  {/* Top Right - Trending Pairs */}
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-2">
                    <div className="h-full overflow-y-auto">
                      <TrendingPairs />
                    </div>
                  </div>
                </div>

                {/* Bottom Section - Multi-Indicator Heatmap */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex-shrink-0 p-2" style={{ height: 'calc(60vh - 0.5rem)' }}>
                  <div className="h-full overflow-x-auto">
                    <MultiIndicatorHeatmap />
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    )
  }

  export default Dashboard
