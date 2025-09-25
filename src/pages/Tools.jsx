import React from 'react'

import { useAuth } from '../auth/AuthProvider'
import LotSizeCalculator from '../components/LotSizeCalculator'
import MultiIndicatorHeatmap from '../components/MultiIndicatorHeatmap'
import MultiTimeAnalysis from '../components/MultiTimeAnalysis'
import Navbar from '../components/Navbar'

const Tools = () => {
  const { user: _user } = useAuth()

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 overflow-hidden flex flex-col transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

        {/* Main Content - Takes remaining screen height with proper top spacing for navbar */}
        <main className="flex-1 min-h-0 overflow-hidden p-2 sm:p-3 pt-20 mt-20 pb-2">
        <div className="h-full flex flex-col gap-2">
          {/* Grid Layout - Top Two Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 flex-1 min-h-0">
            {/* Top Left - Lot Size Calculator */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-2">
              <div className="h-full overflow-y-auto">
                <LotSizeCalculator />
              </div>
            </div>

            {/* Top Right - Multi Time Analysis */}
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden p-2">
              <div className="h-full overflow-y-auto">
                <MultiTimeAnalysis />
              </div>
            </div>
          </div>

          {/* Bottom Section - Multi-Indicator Heatmap */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex-shrink-0 p-2" style={{height: 'calc(60vh - 0.5rem)'}}>
            <div className="h-full overflow-x-auto">
              <MultiIndicatorHeatmap />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Tools
