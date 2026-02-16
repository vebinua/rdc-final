import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Calculator, Users, Shield, FileText, CheckCircle, Building2, Plane } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services = () => {
  // Structured Data for this specific service page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Corporate Services",
    "description": "Comprehensive corporate services including company formation, accounting, taxation, CFO services, and private client advisory in Singapore.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Corporate Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Complete business solutions including formation, accounting, taxation, CFO services, and specialized support services."
    }
  };

  return (
    <>
      <SEOHead
        title="Our Services - RDC Corporate"
        description="Comprehensive corporate services including company formation, accounting, taxation, CFO services, and private client advisory in Singapore."
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

  {/* ✅ SOFTER Bottom Fade — Brand-Toned & Gentle */}
  <div 
    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#5680E9]/30 via-transparent to-transparent pointer-events-none"
    style={{ zIndex: 1 }}
  />

  {/* Main Hero Section */}
  <section
    id="hero-section"
    className="hero-section relative min-h-[60vh] flex items-center justify-center"
  >
    {/* Content Container */}
    <div 
      id="hero-content-container"
      className="hero-content-container relative z-20 text-center text-white px-6 max-w-7xl mx-auto"
    >
      <div 
        id="hero-content-wrapper"
        className="hero-content-wrapper py-6 md:py-8 font-sans mt-16 md:mt-20 mb-8 md:mb-12"
      >
        {/* Main Heading — Subtle Shadow */}
        <h1 
          id="main-heading"
          className="main-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-md"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)'
          }}
        >
     Our Services
        </h1>
        
        {/* Description Section — Very Light Shadow */}
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
          Comprehensive business solutions tailored for the Asian market      </p>
        </div>
      </div>
    </div>
  </section>
</header>

      {/* Visual Separation Element */}
      <div className="relative z-20">
        {/* Simple transition to content */}
        <div className="h-2 bg-gradient-to-b from-black/10 to-transparent"></div>
      </div>

      {/* Main Services Section */}
      <section 
        className="py-20 bg-gray-50" 
        aria-label="Our comprehensive services"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Core Services Introduction */}
            <div className="text-center mb-20">
              <div className="relative max-w-5xl mx-auto">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-indigo-50/80 to-purple-50/50 rounded-3xl blur-3xl opacity-60"></div>
                
                <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full"></div>
                  
                  <div className="relative z-10">
                    {/* Main heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 font-sans leading-tight">
                      Complete Business Solutions for <span className="bg-gradient-to-r from-[#5680E9] to-[#8860D0] bg-clip-text text-transparent">Your Success</span>
                    </h2>
                    
                    {/* Subtitle with enhanced styling */}
                    <div className="max-w-3xl mx-auto">
                      <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed font-body mb-6">
                        From company formation to ongoing compliance, we provide 
                        <span className="font-bold bg-gradient-to-r from-[#84CEEB] to-[#5AB9EA] bg-clip-text text-transparent"> end-to-end support</span> for your business journey.
                      </p>
                      
                      {/* Supporting text */}
                      <p className="text-lg text-gray-600 leading-relaxed font-body">
                        Whether you're a startup, SME, or expanding enterprise, our comprehensive suite of services ensures you have the professional support needed to thrive in Singapore and across Asia.
                      </p>
                    </div>
                    
                    {/* Decorative divider */}
                    <div className="flex items-center justify-center mt-8">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#84CEEB] rounded-full"></div>
                        <div className="w-3 h-3 bg-gradient-to-br from-[#5680E9] to-[#8860D0] rounded-full shadow-lg animate-pulse"></div>
                        <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#5AB9EA] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Services Grid */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-sans text-gray-900">
                  Core Services
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
                  Essential services to establish and grow your business
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Company Formation & Corporate Secretarial */}
                <Link
                  to="/services/company-formation"
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5680E9] flex flex-col h-full overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/10 to-[#84CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5680E9] transition-colors duration-300 font-sans leading-tight">
                      Company Formation & Corporate Secretarial
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-body flex-grow mb-6">
                     Singapore, foreign and offshore entity setup, nominee director services
                    </p>
                    <div className="flex items-center text-[#5680E9] font-semibold text-lg group-hover:gap-3 transition-all duration-300 font-sans">
                      Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>

                {/* Accounting & Taxation */}
                <Link
                  to="/services/accounting-taxation"
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#8860D0] flex flex-col h-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/10 to-[#5AB9EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#5AB9EA] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#8860D0] transition-colors duration-300 font-sans">
                      Accounting & Taxation
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-body flex-grow mb-6">
                      Bookkeeping, financial reporting, GST compliance and corporate tax compliance and advisory.
                    </p>
                    <div className="flex items-center text-[#8860D0] font-semibold text-lg group-hover:gap-3 transition-all duration-300 font-sans">
                      Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>

                {/* CFO & BPO Services */}
                <Link
                  to="/services/cfo-bpo"
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#84CEEB] flex flex-col h-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/10 to-[#5680E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#84CEEB] transition-colors duration-300 font-sans">
                      CFO & BPO Services
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-body flex-grow mb-6">
                     Outsourced financial leadership and operational support
                    </p>
                    <div className="flex items-center text-[#84CEEB] font-semibold text-lg group-hover:gap-3 transition-all duration-300 font-sans">
                      Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>

                {/* Private Clients */}
                <Link
                  to="/services/private-clients"
                  className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5AB9EA] flex flex-col h-full overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/10 to-[#C1C8E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#8860D0] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5AB9EA] transition-colors duration-300 font-sans">
                      Private Clients
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed font-body flex-grow mb-6">
                    Strategic advisory for family offices and wealth management.
                    </p>
                    <div className="flex items-center text-[#5AB9EA] font-semibold text-lg group-hover:gap-3 transition-all duration-300 font-sans">
                      Learn More <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Additional Services Section */}
            <div className="mb-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-sans text-gray-900">
                  Additional Services
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
                  Specialized support services to complement your business operations
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Payroll */}
                <Link
                  to="/services/payroll-services"
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#5680E9] flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/10 to-[#84CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5680E9] transition-colors duration-300 font-sans leading-tight">
                    Payroll
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Accurate, compliant, and hassle-free payroll solutions for businesses of all sizes.
                  </p>
                  <div className="flex items-center text-[#5680E9] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  </div>
                </Link>

                {/* Assurance Services */}
                <Link
                  to="/services/assurance"
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#8860D0] flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/10 to-[#5AB9EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#5AB9EA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8860D0] transition-colors duration-300 font-sans leading-tight">
                    Assurance Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Unbiased assessment of financial statements, internal controls, and risk management processes.
                  </p>
                  <div className="flex items-center text-[#8860D0] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  </div>
                </Link>

                {/* Insurance */}
                <Link
                  to="/services/insurance"
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#84CEEB] flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/10 to-[#5680E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#84CEEB] transition-colors duration-300 font-sans leading-tight">
                    Insurance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Holistic insurance solutions that safeguard your business, assets, and people.
                  </p>
                  <div className="flex items-center text-[#84CEEB] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  </div>
                </Link>

                {/* Visas & Employment Passes */}
                <Link
                  to="/services/visas-employment-passes"
                  className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#5AB9EA] flex flex-col h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/10 to-[#C1C8E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#8860D0] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5AB9EA] transition-colors duration-300 font-sans leading-tight">
                    Visas & Employment Passes
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    End-to-end support for all types of work passes and employment documentation in Singapore.
                  </p>
                  <div className="flex items-center text-[#5AB9EA] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center">
              <div className="rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden" style={{
                background: `
                  radial-gradient(ellipse at top left, #5680E9 0%, transparent 50%),
                  radial-gradient(ellipse at top right, #84CEEB 0%, transparent 50%),
                  radial-gradient(ellipse at bottom left, #5AB9EA 0%, transparent 50%),
                  radial-gradient(ellipse at bottom right, #8860D0 0%, transparent 50%),
                  radial-gradient(ellipse at center, #C1C8E4 0%, transparent 70%),
                  linear-gradient(135deg, #5680E9 0%, #84CEEB 25%, #5AB9EA 50%, #C1C8E4 75%, #8860D0 100%)
                `
              }}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 border border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-white">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-body">
                  Let us help you choose the right services for your business needs
                </p>
                
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-sans"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;