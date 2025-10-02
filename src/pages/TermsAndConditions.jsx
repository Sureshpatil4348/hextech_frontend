import React from 'react'

import InteractiveFooter from '../components/InteractiveFooter'
import Navbar from '../components/Navbar'

const TermsAndConditions = () => {
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
              Terms and Conditions
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Acceptance of Terms
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                By accessing or using <strong>Hextech Technologies FZC</strong> services, you agree to these Terms & Conditions. If you do not agree, discontinue usage immediately.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. Services Provided
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                AI-based algorithmic trading analytics, SaaS tools, and related services.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We do not provide investment advice or act as a broker/dealer. Users are solely responsible for trading decisions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                3. Eligibility
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Users must be 18+ years old.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Users must comply with applicable local and international laws regarding trading.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                4. Payment & Billing
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                All fees are displayed in USD unless otherwise stated.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Payments are collected upfront on a subscription basis (monthly, quarterly, or annually).
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Failure to make payment will result in suspension/termination of services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                5. Refunds
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                See Return Policy below. No refunds beyond the stated policy.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                6. Intellectual Property
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                All <strong>Hextech Technologies FZC</strong> software, content, and tools are owned by Hextech Technologies FZC. Users are prohibited from copying, redistributing, or reverse-engineering.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                7. Limitation of Liability
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>Hextech Technologies FZC</strong> shall not be held liable for financial losses, trading decisions, or market risks.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Services are provided &ldquo;AS IS&rdquo; without warranty of uninterrupted availability.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                8. Termination
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We reserve the right to suspend/terminate access for breach of terms, fraudulent activity, or misuse of services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                9. Governing Law & Jurisdiction
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                These Terms are governed by the laws of Ajman, UAE. Any disputes shall be resolved under the jurisdiction of Ajman courts.
              </p>
            </div>
          </div>
        </div>

        <InteractiveFooter />
      </div>
    </div>
  )
}

export default TermsAndConditions
