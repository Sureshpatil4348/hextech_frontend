import { LogIn, BarChart3, Sun, Moon, Settings, Users, HelpCircle, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import LoginModal from './LoginModal'
import UserProfileDropdown from './UserProfileDropdown'
import { useAuth } from '../auth/AuthProvider'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { user } = useAuth()
  const { isDarkMode, toggleTheme } = useTheme()
  const location = useLocation()
  const isOnDashboard = location.pathname === '/dashboard'
  const isOnProtectedPage = isOnDashboard
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [_liveMarketData, _setLiveMarketData] = useState({
    eurUsd: { price: '1.0850', change: '+0.12%', trend: 'up' },
    gbpUsd: { price: '1.2650', change: '-0.08%', trend: 'down' },
    usdJpy: { price: '149.25', change: '+0.15%', trend: 'up' }
  })

  const handleLoginClick = () => {
    setIsLoginModalOpen(true)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 80 // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }


  return (
    <>
      {/* Fixed navbar with glass morphism effect and fully rounded corners */}
      <header className="fixed top-4 left-4 right-4 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-full shadow-2xl">
            <div className="px-6 py-2">
              <div className="flex justify-between items-center h-12">
                {/* Logo Section - Raw Logo */}
                <div className="flex items-center">
                  <Link 
                    to="/" 
                    className="group" 
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    <img 
                      src={isDarkMode ? require('../assets/black.png') : require('../assets/white.png')} 
                      alt="HEXTECH ALGO Logo" 
                      className="w-30 h-30 sm:w-30 sm:h-30 md:w-32 md:h-32 object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
            
                {/* Center Section - Navigation Links */}
                <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
                  {/* Only show these navigation items when NOT on protected pages */}
                  {!isOnProtectedPage && (
                    <>
                      {/* Features */}
                      <button
                        onClick={() => scrollToSection('trading-dashboard')}
                        className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 group bg-white/20 dark:bg-gray-800/20 px-4 py-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/30"
                      >
                        <Settings className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm">Features</span>
                      </button>

                      {/* About Us */}
                      <button
                        onClick={() => scrollToSection('video-explanation')}
                        className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 group bg-white/20 dark:bg-gray-800/20 px-4 py-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/30"
                      >
                        <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm">About Us</span>
                      </button>

                      {/* FAQ */}
                      <button
                        onClick={() => scrollToSection('faq')}
                        className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 group bg-white/20 dark:bg-gray-800/20 px-4 py-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/30"
                      >
                        <HelpCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-medium text-sm">FAQ</span>
                      </button>
                    </>
                  )}

                  {/* Protected page uses in-page tabs; no per-URL nav needed */}

                  {/* Dashboard (for logged in users) - only show when NOT on protected pages */}
                  {user && !isOnProtectedPage && (
                    <Link
                      to="/dashboard"
                      className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 group bg-white/20 dark:bg-gray-800/20 px-4 py-2 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/30"
                    >
                      <BarChart3 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-sm">Dashboard</span>
                    </Link>
                  )}
                </div>
            
                {/* Right Section - Live Market & Controls */}
                <div className="flex items-center space-x-3">
                  
                  {/* Market is Live Pill - Only show on landing page */}
                  {!isOnProtectedPage && (
                    <div className="hidden sm:flex items-center space-x-2">
                      <div className="flex items-center space-x-2 bg-green-500/20 text-green-800 dark:text-green-300 px-3 py-1.5 rounded-full border border-green-400/30 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium">Market is Live</span>
                      </div>
                    </div>
                  )}

                  {/* Theme Toggle Button */}
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 border border-white/20 dark:border-gray-700/30"
                    title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </button>

                  {/* Desktop User Section - Hidden on mobile */}
                  <div className="hidden lg:flex items-center">
                    {user ? (
                      <div className="flex items-center space-x-2">
                        {/* Account Button */}
                        <UserProfileDropdown />
                      </div>
                      ) : (
                        <button
                          onClick={handleLoginClick}
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 text-sm"
                        >
                          <LogIn className="w-4 h-4" />
                          <span>Login</span>
                        </button>
                      )}
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 rounded-full bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30 text-black dark:text-white transition-all duration-300 border border-white/20 dark:border-gray-700/30"
                    aria-label="Toggle mobile menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-2xl">
            <div className="px-6 py-4">
              {/* Simple Menu List */}
              <div className="space-y-2">
                {!isOnProtectedPage && (
                  <>
                    <button
                      onClick={() => scrollToSection('trading-dashboard')}
                      className="flex items-center space-x-3 w-full text-left text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 py-3 px-4 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
                    >
                      <Settings className="w-5 h-5" />
                      <span className="font-medium">Features</span>
                    </button>

                    <button
                      onClick={() => scrollToSection('video-explanation')}
                      className="flex items-center space-x-3 w-full text-left text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 py-3 px-4 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
                    >
                      <Users className="w-5 h-5" />
                      <span className="font-medium">About Us</span>
                    </button>

                    <button
                      onClick={() => scrollToSection('faq')}
                      className="flex items-center space-x-3 w-full text-left text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 py-3 px-4 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
                    >
                      <HelpCircle className="w-5 h-5" />
                      <span className="font-medium">FAQ</span>
                    </button>
                  </>
                )}

                {user && !isOnProtectedPage && (
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-3 w-full text-left text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 py-3 px-4 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BarChart3 className="w-5 h-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                )}

                {/* Profile Section */}
                <div className="pt-3 border-t border-white/20 dark:border-gray-700/30">
                  {user ? (
                    <div className="flex justify-center">
                      <UserProfileDropdown />
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        handleLoginClick()
                        setIsMobileMenuOpen(false)
                      }}
                      className="flex items-center space-x-3 w-full text-left text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-300 py-3 px-4 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20"
                    >
                      <LogIn className="w-5 h-5" />
                      <span className="font-medium">Login</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  )
}

export default Navbar
