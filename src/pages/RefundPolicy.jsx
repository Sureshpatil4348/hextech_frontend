import React from 'react'
import Navbar from '../components/Navbar'
import InteractiveFooter from '../components/InteractiveFooter'

const RefundPolicy = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-0">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <Navbar />

        {/* Content */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Return & Refund Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Digital Products & Subscriptions
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Due to the nature of digital SaaS services, all sales are final once access is granted.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                No refunds for partially used subscription periods.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. Exceptions
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Refunds may only be issued under the following circumstances:
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                • Duplicate payment or transaction error.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                • Technical failure on our side that prevents access to purchased services (verified case).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                3. Refund Process
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Submit a refund request within 7 days of transaction at [Insert support email].
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Approved refunds will be processed within 10–15 business days to the original payment method.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                4. Cancellation Policy
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Users may cancel subscriptions at any time.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Cancellation will prevent auto-renewal but does not entitle a refund for unused time.
              </p>
            </div>
          </div>
        </div>

        <InteractiveFooter />
      </div>
    </div>
  )
}

export default RefundPolicy
