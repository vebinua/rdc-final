import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Shield, FileText, Check, Clock, Star, Award, TrendingUp, ClipboardList, FolderOpen, CheckCircle, Handshake, Target, Rocket } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const FormationOfForeignEntities = () => {
  // Structured Data for this specific service page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Formation of Foreign Company",
    "description": "Setting up offshore companies or formation companies in other jurisdictions. RDC Corporate simplifies the process with end-to-end support.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Foreign Company Formation",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Complete foreign entity formation, nominee services, compliance, and ongoing support."
    }
  };

  return (
    <>
      <SEOHead
        title="Formation of Foreign Company - RDC Corporate"
        description="Setting up offshore companies or formation companies in other jurisdictions. RDC Corporate simplifies the process with end-to-end support."
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
                Formation of Foreign Company
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
                  Setting up offshore companies or forming companies in other jurisdictions? RDC Corporate simplifies the process with end-to-end support.
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

      {/* Services Overview Section */}
      <section
        className="py-20 bg-white"
        aria-label="Foreign entity formation services overview"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Enhanced Introduction Section */}
            <div className="mb-20">
              <div className="relative">
                {/* Gradient background with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 via-white to-[#84CEEB]/5 -z-10"></div>

                <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left side - decorative */}
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square">
                      {/* Animated circles */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-2 border-[#5680E9]/20 animate-pulse"></div>
                      </div>
                      <div className="absolute inset-8 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-2 border-[#84CEEB]/30" style={{animationDelay: '0.5s'}}></div>
                      </div>
                      <div className="absolute inset-16 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-2 border-[#5AB9EA]/40 animate-pulse" style={{animationDelay: '1s'}}></div>
                      </div>

                      {/* Center icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-gradient-to-br from-[#5680E9] to-[#84CEEB] p-8 rounded-3xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                          <TrendingUp className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right side - content */}
                  <div className="space-y-6">
                    <div className="inline-block">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5680E9]/10 to-[#84CEEB]/10 rounded-full border border-[#5680E9]/20">
                        <Award className="w-4 h-4 text-[#5680E9]" />
                        <span className="text-sm font-semibold text-[#5680E9]">Global Reach</span>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      Your Gateway to<br />Global Business
                    </h2>

                    <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
                      <p>
                        The Singapore company formation services continue to grow as more entrepreneurs and global businesses choose Singapore as their preferred destination due to our strategic location, business-friendly environment and robust regulatory framework make it one of the most attractive destinations for corporate expansion.
                      </p>
                      <p>
                        We have an extensive global network of associates who can assist with company formation in over<span className="whitespace-nowrap"> 170 jurisdictions</span> worldwide.
                      </p>
                      <p>
                        Our team of experienced professionals ensures a smooth, compliant and efficient business setup process, guiding you through every step — from company registration and statutory compliance to ongoing corporate support. With RDC Corporate, you can start your business quickly and confidently, backed by trusted expertise and personalised service tailored to your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services We Support */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  We Support Businesses With
                </h2>
              </div>

              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Card 1 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Building className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Company formation and registration</h3>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 2 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Users className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Provision of nominee directors and registered office (if required)</h3>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <FileText className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Annual return filing and statutory compliance</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Centered last two cards */}
                <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
                  {/* Service Card 4 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <FolderOpen className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Maintenance of company registers and minutes</h3>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 5 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Handshake className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Other corporate secretarial support</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compliance Statement */}
              <div className="mt-12 text-center">
                <p className="text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                  We ensure your entity is compliant from day one and remains so throughout its lifecycle.
                </p>
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
                Setting up offshore companies or form companies in other jurisdictions? RDC Corporate simplifies the process with end-to-end support.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 [&>*:nth-child(5)]:md:col-start-1 [&>*:nth-child(5)]:md:col-end-3 [&>*:nth-child(5)]:max-w-2xl [&>*:nth-child(5)]:mx-auto">
              {/* Corporate secretary */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                        Corporate secretary
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Let us take care of the administrative burdens of corporate governance with our seasoned professionals in corporate secretarial works — we will handle the tracking of your deadlines and filings — ensuring your company is well-organised and adheres to all regulatory standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accounting for management and compliance */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#8860D0]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8860D0]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#8860D0] transition-colors duration-300">
                        Accounting for management and for compliance
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Trust our dedicated team to handle all your accounting needs for both management and compliance purposes and be audit-ready, ensuring accuracy, providing informative insights for decisions making and adherence to Singapore's regulatory standards, allowing you to focus on driving business growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tax advisory */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/5 to-[#5AB9EA]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#84CEEB]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#84CEEB]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#84CEEB] transition-colors duration-300">
                        Tax advisory
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      We know taxes can be tricky, especially when you are managing business across borders. Our advisors provide clear, practical guidance to help your business optimise tax strategies, stay compliant and make informed decisions that support long-term growth in Singapore.
                    </p>
                  </div>
                </div>
              </div>

              {/* Long-term visa support */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/5 to-[#5680E9]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5AB9EA]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5AB9EA]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5AB9EA] transition-colors duration-300">
                        Long-term visa support
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Effortlessly manage visa complexities with our end-to-end long-term visa support, allowing your team to stay focused on core business goals.
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
                          <Users className="w-6 h-6 text-white" />
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
                    We believe every business deserves a strong start and ongoing support. Whether you are setting up a business in Singapore for the first time or expanding regionally, RDC Corporate is here to guide you at every step. Together, we'll make your business journey in Singapore a success.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Steps Section */}
            <div className="mt-12 relative">
              {/* Floating decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>

              <div className="py-10 px-4 md:px-8">
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

export default FormationOfForeignEntities;