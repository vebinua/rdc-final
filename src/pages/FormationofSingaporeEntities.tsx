import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Shield, FileText, Check, Clock, Star, Award, TrendingUp, Briefcase, Handshake, ClipboardList, FolderOpen, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FormationOfSingaporeEntities = () => {
  // Structured Data for this specific service page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Formation of Singapore Entities",
    "description": "Professional company incorporation and setup services in Singapore. Let us handle the formation so you can focus on being an entrepreneur.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Company Incorporation",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Complete company formation, corporate secretarial setup, and initial compliance advisory."
    }
  };

  return (
    <>
      <SEOHead
        title="Formation of Singapore Entities - RDC Corporate"
        description="Professional company incorporation and setup services in Singapore. Let us handle the formation so you can focus on being an entrepreneur."
        structuredData={structuredData}
      />
      
      {/* Header Banner Section */}
      <header role="banner" className="relative">
        {/* Background Image Container */}
        <div 
          id="header-background"
          className="header-background absolute inset-0"
          style={{
            backgroundImage: 'url(/marinabay_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.1) saturate(1.05) brightness(1.02)',
            zIndex: -1
          }}
        />

        {/* Gradient Overlay — Brand Colors (No Blur) */}
        <div 
          id="header-overlay"
          className="header-overlay absolute inset-0 z-10 bg-gradient-to-br from-[#5680E9]/20 via-[#84CEEB]/10 to-[#8860D0]/20"
        >
          <div 
            id="header-radial-overlay"
            className="header-radial-overlay absolute inset-0 bg-radial-gradient from-transparent via-black/5 to-transparent"
          />
        </div>

        {/* Softer Bottom Fade — Brand-Toned */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#5680E9]/30 via-transparent to-transparent pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Main Hero Section */}
        <section
          id="hero-section"
          className="hero-section relative min-h-[60vh] flex items-center justify-center"
        >
          <div 
            id="hero-content-container"
            className="hero-content-container relative z-20 text-center text-white px-6 max-w-7xl mx-auto"
          >
            <div 
              id="hero-content-wrapper"
              className="hero-content-wrapper py-6 md:py-8 font-sans mt-16 md:mt-20 mb-8 md:mb-12"
            >
              <h1 
                id="main-heading"
                className="main-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-md"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                Formation of Singapore Entities
              </h1>
              
              <div 
                id="description-section"
                className="description-section max-w-4xl mx-auto mb-6 sm:mb-8"
              >
                <p 
                  id="main-description"
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium"
                  style={{
                    textShadow: '0 1px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  Looking to start a Business? Let us handle the company formation, allowing you to focus on being an entrepreneur.
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Visual Separation Element */}
      <div className="relative z-20">
        <div className="h-2 bg-gradient-to-b from-black/10 to-transparent"></div>
      </div>

      {/* Why Choose Us Section */}
      <section
        className="py-16 bg-gray-50"
        aria-label="Why choose us for Singapore entity formation"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Introduction Section */}
            <div className="mb-16 relative">
              <div className="max-w-6xl mx-auto relative">
                {/* Smooth blended edges */}
                <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                <div className="bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-gray-50/80 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
                  {/* Decorative background patterns */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #5680E9 1px, transparent 0)`,
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>

                  {/* Subtle decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full -ml-24 -mb-24"></div>

                  <div className="relative z-10 text-center max-w-5xl mx-auto">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
                      Starting or growing a business in Singapore is an exciting journey — and having the right partner makes all the difference. At <span className="font-semibold text-[#5680E9]">RDC Corporate</span>, we assist entrepreneurs and SMEs to turn their business ideas into reality with professional, reliable and friendly support.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                      From company formation to compliance, we manage the details allowing you to focus on building your dream business.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5680E9]/10 to-[#84CEEB]/10 rounded-full border border-[#5680E9]/20">
                  <Star className="w-4 h-4 text-[#5680E9]" />
                  <span className="text-sm font-semibold text-[#5680E9]">Why RDC Corporate</span>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your trusted partner in navigating Asia's dynamic business landscape
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 [&>*:nth-child(5)]:md:col-start-1 [&>*:nth-child(5)]:md:col-end-3 [&>*:nth-child(5)]:max-w-2xl [&>*:nth-child(5)]:mx-auto">
              {/* Corporate secretary */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#8860D0]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8860D0]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#8860D0] transition-colors duration-300">
                        Corporate secretary
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Let us take care of the administrative burdens of corporate governance with our seasoned professionals in corporate secretarial works — we will handle the tracking of your deadlines and filings — ensuring your company stays compliant, well-organised and always up to date with Singapore's corporate governance requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accounting */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/5 to-[#5AB9EA]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#84CEEB]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#84CEEB]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#84CEEB] transition-colors duration-300">
                        Accounting
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Trust our dedicated team to handle all your accounting compliance and management needs and be audit-ready, ensuring accuracy, transparency, adherence to Singapore's regulatory standards, keeping your company compliant and providing valuable insights allowing you to focus on driving business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax advisory */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/5 to-[#5680E9]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5AB9EA]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5AB9EA]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5AB9EA] transition-colors duration-300">
                        Tax advisory
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Taxes don't have to be complicated. Our advisors deliver precise tax guidance, helping your business optimise strategies for both efficiency and compliance. We help your business stay efficient and compliant, giving you peace of mind as you grow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reliable and responsive service */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                        Reliable and responsive service
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Our commitment and reliability ensure that you can trust us to meet your needs now and when you grow. Whether you are getting started or scaling up, with a responsive approach, we address your concerns promptly, providing solutions when you need them most.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back-office support */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 to-[#C1C8E4]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#8860D0]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8860D0]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0] to-[#C1C8E4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#C1C8E4] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#8860D0] transition-colors duration-300">
                        Back-office support
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Streamline your operations and enhance productivity with our reliable back-office support services — from administrative works to payroll, we can tailor to meet the unique needs of your business, allowing you to concentrate on core activities and strategic initiatives.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Partner with RDC Corporate - Enhanced Section */}
            <div className="mt-16">
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 md:p-16 border-2 border-blue-100 shadow-md">
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/10 via-purple-200/10 to-pink-200/10 rounded-full blur-3xl"></div>

                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-blue-300 rounded-tl-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-purple-300 rounded-br-3xl opacity-50"></div>

                <div className="relative max-w-4xl mx-auto space-y-8">
                  {/* Heading */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                      Partner with RDC Corporate
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
                    With years of experience supporting new businesses and SMEs, we recognise what it takes to succeed in Singapore's competitive environment. Let us handle the details, allowing you to focus on doing what you do best — building your business and achieving your goals.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Steps Section */}
            <div className="mt-12 mb-0 relative">
              {/* Enhanced Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-cyan-50/60 rounded-[2.5rem] -z-10"></div>
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #5680E9 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>

              <div className="py-16 px-4 md:px-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-blue-500 rounded-full"></div>
                    <div className="relative">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                    </div>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-transparent rounded-full"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-sans text-gray-900 leading-tight">
                    3 Steps to Set Up Your<br />Singapore Company with Us
                  </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto relative">
                  {/* Connecting Lines with consistent gradient */}
                  <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-1 -z-10">
                    <div className="max-w-4xl mx-auto px-40 h-full">
                      <div className="h-full bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300 rounded-full opacity-50"></div>
                    </div>
                  </div>

                  {/* Step 1 */}
                  <div className="group text-center relative h-full">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300 h-full flex flex-col">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl z-10 ring-4 ring-white">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>

                      <div className="flex justify-center mb-6 pt-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#8B7BE8] to-[#6C5DD3] rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                          <div className="relative w-24 h-24 bg-gradient-to-br from-[#8B7BE8] to-[#6C5DD3] rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                            <ClipboardList className="w-12 h-12 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="absolute -top-1 -right-1 w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>

                      <div className="flex-grow flex flex-col">
                        <p className="text-gray-700 text-base leading-relaxed font-body px-4">
                          Fill up our Company Setup Fact Form in minutes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="group text-center relative h-full">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300 h-full flex flex-col">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl z-10 ring-4 ring-white">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>

                      <div className="flex justify-center mb-6 pt-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#8B7BE8] to-[#6C5DD3] rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                          <div className="relative w-24 h-24 bg-gradient-to-br from-[#8B7BE8] to-[#6C5DD3] rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                            <FolderOpen className="w-12 h-12 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="absolute top-1 -right-2 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md transform rotate-12 group-hover:rotate-[20deg] transition-transform duration-500">
                            <FileText className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                        </div>
                      </div>

                      <div className="flex-grow flex flex-col">
                        <p className="text-gray-700 text-base leading-relaxed font-body px-4">
                          Send your KYC documents with RDC for verification purposes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="group text-center relative h-full">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-300 h-full flex flex-col">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl z-10 ring-4 ring-white">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>

                      <div className="flex justify-center mb-6 pt-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#8B7BE8] to-[#6C5DD3] rounded-xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                          <div className="relative w-24 h-24 bg-gradient-to-br from-[#8B7BE8] to-[#6C5DD3] rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                            <FileText className="w-12 h-12 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
                            <CheckCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>

                      <div className="flex-grow flex flex-col">
                        <p className="text-gray-700 text-base leading-relaxed font-body px-4">
                          Once KYC is approved, we will send invoice for payment and our team will start working on the application
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default FormationOfSingaporeEntities;