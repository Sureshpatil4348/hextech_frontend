import React from 'react'
import Navbar from '../components/Navbar'
import InteractiveFooter from '../components/InteractiveFooter'

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>Hextech Technologies FZC</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) values your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, services, or trading tools.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. Information We Collect
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Personal Information:</strong> Name, email, phone number, billing details, KYC documentation (if applicable).
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Usage Data:</strong> Device details, IP address, browser type, and activity logs.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>Financial Information:</strong> Payment method details for subscription and service purchases.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. How We Use Your Information
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To provide, manage, and improve our services.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To process payments and issue invoices.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To comply with legal, regulatory, and AML/KYC requirements.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                To send service updates, newsletters, and marketing communication (you may opt-out anytime).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                3. Data Sharing & Disclosure
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We do not sell or rent your data.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Shared only with trusted third-party providers (payment processors, cloud hosting, analytics, compliance agencies).
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Disclosures may occur if legally required by UAE authorities or international regulatory frameworks.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                4. Data Security
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We implement advanced encryption, multi-layered firewalls, and strict access controls. However, no transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                5. Data Retention
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We retain your information only as long as necessary for legal, regulatory, and service purposes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                6. Your Rights
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Request access, correction, or deletion of your personal data.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Withdraw consent for marketing communications.
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                File complaints with UAE data protection authorities.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                7. Cookies & Tracking
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We use cookies and similar tools to enhance user experience. You may disable cookies in your browser settings.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                8. Contact Us
              </h2>

              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Hextech Technologies FZC</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Ajman Free Zone, Ajman, UAE
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                📧 [Insert email] | ☎️ [Insert phone]
              </p>
            </div>
          </div>
        </div>

        <InteractiveFooter />
      </div>
    </div>
  )
}

export default PrivacyPolicy
