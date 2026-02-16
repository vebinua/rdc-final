import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Users, Shield, FileText, Check, Clock, Star, Award, TrendingUp, Briefcase, Handshake, ClipboardList, FolderOpen, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CorporateSecretarialServices = () => {
  // Structured Data for this specific service page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Secretarial Services",
    "description": "Professional corporate secretarial and compliance services in Singapore. Ensure your company stays compliant with expert secretarial support.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Corporate Secretarial Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Complete corporate secretarial services, compliance management, and ongoing governance support."
    }
  };

  return (
    <>
      <SEOHead
        title="Corporate Secretarial Services - RDC Corporate"
        description="Professional corporate secretarial and compliance services in Singapore. Ensure your company stays compliant with expert secretarial support."
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
                className="main-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white drop-shadow-md"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)'
                }}
              >
                Corporate Secretarial Services
              </h1>
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
        aria-label="Why choose us for corporate secretarial services"
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
                      The role of the Company Secretary has become increasingly vital in maintaining good corporate governance. While not part of management or the board, the company secretary is there to assist the company be in compliance with the law.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-light">
                      Every Singapore company must appoint at least one Singapore resident as company secretary. Having a qualified company secretary not only keeps your business compliant but also strengthens governance, transparency and credibility.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                      At <span className="font-semibold text-[#5680E9]">RDC Corporate</span>, we offer responsive and reliable support while upholding the highest standards of professionalism and ethics, allowing you to focus on growing your business with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                We Support Businesses With
              </h2>
            </div>

            {/* Services Grid */}
            <div className="mb-16 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {/* Service 1 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <FileText className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Annual Compliance</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Annual return filing and statutory compliance and ensuring compliance with ACRA requirements and Singapore company law.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <FolderOpen className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Record Maintenance</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Maintenance of company registers, minutes and documentations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <ClipboardList className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Documentation & Filing</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Drafting minutes and resolutions and updating ACRA.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <Users className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Nominee Services</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Provision of nominee directors and registered office address (if required).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <Building className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Corporate Changes</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Managing changes in company structure, share transfer, share allotment and share capital modifications etc.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <Shield className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">CorpPass Management</h3>
                      <p className="text-gray-600 leading-relaxed">
                        CorpPass account management.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 7 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <FileText className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Company Closure</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Striking off company.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 8 */}
                <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                        <Briefcase className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">Bank Account Setup</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Bank account opening (subject to the bank's approval).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-16 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Why Choose Us?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Stay compliant easily as our team handles the tracking of your deadlines and filings.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Expertise You Can Trust */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#4c6fd4] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#4c6fd4] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                          Expertise You Can Trust
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed font-body">
                        Let us handle the tracking of your deadlines and filings — ensuring your company stays compliant, well-organised and always up to date with Singapore's corporate governance standards, allowing you to focus on your business.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsive and Supportive */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/5 to-[#0ea5e9]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#84CEEB]/30 h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#84CEEB]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB] to-[#0ea5e9] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#0ea5e9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Users className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#84CEEB] transition-colors duration-300">
                          Responsive and Supportive
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed font-body">
                        Have a question or need advice? We are here for you. Our team is approachable, reliable and always ready to provide practical guidance when you need it most.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Freedom to Focus on Your Business */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/5 to-[#0284c7]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5AB9EA]/30 h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5AB9EA]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA] to-[#0284c7] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#0284c7] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5AB9EA] transition-colors duration-300">
                          Freedom to Focus on Your Business
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed font-body">
                        With us managing your administrative and secretarial responsibilities, you can concentrate on growing your business, serving your customers and achieving your goals — while knowing your governance is in good hands.
                      </p>
                    </div>
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
                    Let us be your trusted company secretary, allowing you to focus on what matters most: building and growing your business in Singapore with confidence.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateSecretarialServices;
