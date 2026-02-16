import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, FileCheck, CheckCircle, Eye, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AssuranceServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Assurance Services",
    "description": "Reliable assurance services with audits led by qualified statutory auditors in Singapore.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Assurance Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Complete audit and assurance services for compliance and transparency."
    }
  };

  return (
    <>
      <SEOHead
        title="Assurance Services - RDC Corporate"
        description="Reliable assurance services with audits led by qualified statutory auditors in Singapore."
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
                Assurance Services
              </h1>

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
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        aria-label="Assurance services overview"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-24">
              {/* Introduction Text */}
              <div className="max-w-4xl mx-auto mb-16 text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Looking for reliable assurance services? At RDC Corporate, our associates offer audits led by qualified statutory auditors. We take a collaborative approach, working closely with clients to ensure accuracy, compliance and transparency — all while keeping the audit process friendly, efficient, and stress-free.
                </p>
              </div>
            </div>

            {/* Services We Support */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  Our Key Services Include
                </h2>
                <div className="w-20 h-1 bg-[#5680E9] mx-auto rounded-full mb-4"></div>
              </div>

              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Card 1 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <FileCheck className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Companies Act Audits</h3>
                        <p className="text-sm text-gray-600">Statutory audits to ensure your business stays fully compliant with Singapore regulations</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 2 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Eye className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Financial Statement Reviews</h3>
                        <p className="text-sm text-gray-600">Independent reviews for accuracy, transparency, and stakeholder confidence</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Shield className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Internal Controls & Risk Assessment</h3>
                        <p className="text-sm text-gray-600">Identify risks, strengthen processes, and improve operational efficiency</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 4 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <CheckCircle className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Regulatory Compliance Support</h3>
                        <p className="text-sm text-gray-600">Expert guidance to keep your business aligned with SFRS and other regulatory requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us?
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Independent Assessment */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                        Independent Assessment
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Our associates provide an unbiased and thorough assessment of your financial statements, internal controls, and risks management processes —ensuring transparency and reinforcing stakeholder trust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Proficiency */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#8860D0]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8860D0]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#8860D0] transition-colors duration-300">
                        Technical Proficiency
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Our associates combine technical proficiency with industry-specific insight, enabling us to deliver relevant, accurate and value-added assurance services tailored to your sector and operations.
                    </p>
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

export default AssuranceServices;
