import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [otherServicesTimeout, setOtherServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (otherServicesTimeout) {
        clearTimeout(otherServicesTimeout);
      }
    };
  }, [otherServicesTimeout]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsOtherServicesOpen(false);
    if (otherServicesTimeout) {
      clearTimeout(otherServicesTimeout);
      setOtherServicesTimeout(null);
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsOtherServicesOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <img 
              src={isScrolled ? "/RDC logo (transparent BG).png" : "/RDC reverse logo (transparent BG).png"}
              alt="RDC Corporate" 
              className="h-10 lg:h-16 w-auto transition-all duration-300 group-hover:scale-105"
              style={{ imageRendering: 'crisp-edges' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!isScrolled) {
                  target.src = "/RDC logo (transparent BG).png";
                } else {
                  target.src = "/RDC reverse logo (transparent BG).png";
                }
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`group font-semibold transition-all duration-300 hover:scale-105 relative ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#5680E9]'
                  : 'text-white hover:text-[#84CEEB]'
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5680E9] to-[#84CEEB] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown — Enhanced Design */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:scale-105 relative ${
                  isScrolled
                    ? 'text-gray-700 hover:text-[#5680E9]'
                    : 'text-white hover:text-[#84CEEB]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                {/* Animated underline */}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5680E9] to-[#84CEEB] transition-all duration-300 ${isServicesOpen ? 'w-full' : 'group-hover:w-full'}`}></span>
              </button>

              {/* Simplified Dropdown menu */}
              <div
                className={`absolute right-0 top-full pt-2 transition-all duration-200 z-50 ${
                  isServicesOpen
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible pointer-events-none'
                }`}
              >
                <div className="w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-2">

                  {/* Singapore Entities */}
                  <Link
                    to="/services/formation-singapore-entities"
                    className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Formation of Singapore Entities</span>
                  </Link>

                  {/* Foreign Entities */}
                  <Link
                    to="/services/formation-foreign-companies"
                    className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#8860D0] to-[#5AB9EA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Formation of Foreign Company</span>
                  </Link>

                  {/* Corporate Secretarial */}
                  <Link
                    to="/services/corporate-secretarial-services"
                    className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Corporate Secretarial Services</span>
                  </Link>

                  {/* Accounting & Taxation */}
                  <Link
                    to="/services/accounting-taxation"
                    className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#8860D0] to-[#5AB9EA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Accounting & Taxation</span>
                  </Link>

                  {/* CFO & BPO Services */}
                  <Link
                    to="/services/cfo-bpo"
                    className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">CFO & BPO Services</span>
                  </Link>

                  {/* Private Clients */}
                  <Link
                    to="/services/private-clients"
                    className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#5AB9EA] to-[#8860D0] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <span className="font-medium text-sm">Private Clients</span>
                  </Link>

                  {/* Divider */}
                  <div className="my-2">
                    <div className="h-px bg-gray-200"></div>
                  </div>

                  {/* Other Services - with submenu */}
                  <div
                    className="relative"
                    onMouseEnter={() => {
                      if (otherServicesTimeout) {
                        clearTimeout(otherServicesTimeout);
                        setOtherServicesTimeout(null);
                      }
                      setIsOtherServicesOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => {
                        setIsOtherServicesOpen(false);
                      }, 150);
                      setOtherServicesTimeout(timeout);
                    }}
                  >
                    <div className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#C1C8E4] to-[#5680E9] rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <span className="font-medium text-sm">Other Services</span>
                      </div>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${isOtherServicesOpen ? 'rotate-180' : 'rotate-90'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Modern Submenu */}
                    <div
                      className={`absolute left-full top-0 -ml-1 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-200 ${
                        isOtherServicesOpen
                          ? 'opacity-100 visible translate-x-0'
                          : 'opacity-0 invisible -translate-x-2 pointer-events-none'
                      }`}
                      onMouseEnter={() => {
                        if (otherServicesTimeout) {
                          clearTimeout(otherServicesTimeout);
                          setOtherServicesTimeout(null);
                        }
                        setIsOtherServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setIsOtherServicesOpen(false);
                        }, 150);
                        setOtherServicesTimeout(timeout);
                      }}
                    >
                      <div className="p-2">
                        {/* Payroll */}
                        <Link
                          to="/services/payroll-services"
                          className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                          onClick={closeMenu}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm">Payroll Services</span>
                        </Link>

                        {/* Assurance */}
                        <Link
                          to="/services/assurance"
                          className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                          onClick={closeMenu}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#8860D0] to-[#5AB9EA] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm">Assurance Services</span>
                        </Link>

                        {/* Insurance */}
                        <Link
                          to="/services/insurance"
                          className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                          onClick={closeMenu}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm">Insurance Services</span>
                        </Link>

                        {/* Visas */}
                        <Link
                          to="/services/visas-employment-passes"
                          className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] rounded-lg transition-all duration-200"
                          onClick={closeMenu}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#5AB9EA] to-[#8860D0] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                          <span className="font-medium text-sm">Visas & Employment Passes</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`group font-semibold transition-all duration-300 hover:scale-105 relative ${
                isScrolled
                  ? 'text-gray-700 hover:text-[#5680E9]'
                  : 'text-white hover:text-[#84CEEB]'
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5680E9] to-[#84CEEB] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link
              to="/contact"
              className={`group/cta relative px-6 py-2.5 rounded-full font-bold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#5680E9] to-[#8860D0] text-white shadow-lg hover:shadow-2xl'
                  : 'bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact
                <svg className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {isScrolled && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#4c6fd4] to-[#7c3aed] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl mt-4 shadow-xl border border-gray-200">
            <Link 
              to="/" 
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] transition-all duration-200 font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Mobile Services Section */}
            <div className="px-4">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-[#5680E9] transition-all duration-200 font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                isServicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 space-y-1 border-l-2 border-blue-100">
                  <Link
                    to="/services/formation-singapore-entities"
                    className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Singapore Entities
                  </Link>
                  <Link
                    to="/services/formation-foreign-companies"
                    className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Foreign Entities
                  </Link>
                  <Link
                    to="/services/corporate-secretarial-services"
                    className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Corporate Secretarial
                  </Link>

                  <Link 
                    to="/services/accounting-taxation" 
                    className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Accounting & Taxation
                  </Link>
                  <Link 
                    to="/services/cfo-bpo" 
                    className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    onClick={closeMenu}
                  >
                    CFO & BPO Services
                  </Link>
                  <Link
                    to="/services/private-clients"
                    className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Private Clients
                  </Link>

                  {/* Other Services submenu — mobile */}
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <button
                      onClick={() => setIsOtherServicesOpen(!isOtherServicesOpen)}
                      className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200"
                    >
                      <span>Other Services</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOtherServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`transition-all duration-300 overflow-hidden ${
                      isOtherServicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pl-4 space-y-1 border-l-2 border-blue-100 mt-1">
                        <Link
                          to="/services/payroll-services"
                          className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200 text-sm"
                          onClick={closeMenu}
                        >
                          Payroll Services
                        </Link>
                        <Link
                          to="/services/assurance"
                          className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200 text-sm"
                          onClick={closeMenu}
                        >
                          Assurance Services
                        </Link>
                        <Link
                          to="/services/insurance"
                          className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200 text-sm"
                          onClick={closeMenu}
                        >
                          Insurance Services
                        </Link>
                        <Link
                          to="/services/visas-employment-passes"
                          className="block py-2 text-gray-600 hover:text-[#5680E9] transition-all duration-200 text-sm"
                          onClick={closeMenu}
                        >
                          Visas & Employment Passes
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link 
              to="/about" 
              className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#5680E9] transition-all duration-200 font-medium"
              onClick={closeMenu}
            >
              About
            </Link>

            <div className="px-4 py-2">
              <Link 
                to="/contact" 
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#5680E9] to-[#8860D0] text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;