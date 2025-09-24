  import React from 'react'

  import { useAuth } from '../auth/AuthProvider'
  import AINewsAnalysis from '../components/AINewsAnalysis'
  import LoadingOverlay from '../components/LoadingOverlay'
  import MultiIndicatorHeatmap from '../components/MultiIndicatorHeatmap'
  import Navbar from '../components/Navbar'
  import RSICorrelationDashboard from '../components/RSICorrelationDashboard'
  import RSIOverboughtOversoldTracker from '../components/RSIOverboughtOversoldTracker'
  import useBaseMarketStore from '../store/useBaseMarketStore'
  import useMarketStore from '../store/useMarketStore'

  const Dashboard = () => {
    const { user } = useAuth()
    const { retryAllConnections } = useMarketStore()
    const connectionInitiated = React.useRef(false)
    
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

        {/* Main Content - Takes remaining screen height */}
        <main className="flex-1 min-h-0 overflow-y-auto p-2 sm:p-3">
          {/* Mobile Layout - Stack vertically */}
          <div className="block lg:hidden space-y-3">
            {/* Section 1 - Multi Indicator Heatmap */}
            <div className="h-96 overflow-hidden">
              <MultiIndicatorHeatmap selectedSymbol="EURUSDm" />
            </div>

            {/* Section 2 - AI News Analysis */}
            <div className="h-80">
              <AINewsAnalysis />
            </div>

            {/* Section 3 - RSI Correlation Dashboard */}
            <div className="h-80">
              <RSICorrelationDashboard />
            </div>

            {/* Section 4 - RSI Tracker */}
            <div className="h-64">
              <RSIOverboughtOversoldTracker />
            </div>
          </div>

          {/* Desktop Layout - Original 12x12 grid preserved exactly */}
          <div className="hidden lg:grid h-full grid-cols-12 grid-rows-12 gap-2">
            
            {/* Section 1 - Multi Indicator Heatmap (largest area - top left) */}
            <div className="col-span-7 row-span-7 min-h-0">
              <MultiIndicatorHeatmap selectedSymbol="EURUSDm" />
            </div>

            {/* Section 3rd - AI News Analysis (top right) - Further increased height */}
            <div className="col-span-5 row-span-7">
              <AINewsAnalysis />
            </div>

            {/* Section 2nd - RSI Correlation Dashboard (bottom left) */}
            <div className="col-span-7 row-span-5 row-start-8">
              <RSICorrelationDashboard />
            </div>

            {/* Section 5th - RSI Tracker (bottom right) - Further reduced height */}
            <div className="col-span-5 row-span-5 row-start-8">
              <RSIOverboughtOversoldTracker />
            </div>

          </div>

        </main>
      </div>
    )
  }

  export default Dashboard
