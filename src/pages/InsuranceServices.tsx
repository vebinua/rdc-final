import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Users, Briefcase, AlertTriangle, FileCheck, Lock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const InsuranceServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Insurance Services",
    "description": "Tailored insurance solutions designed to protect your company, assets, and key personnel in Singapore.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Insurance Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Comprehensive insurance and risk management solutions."
    }
  };

  return (
    <>
      <SEOHead
        title="Insurance Services - RDC Corporate"
        description="Tailored insurance solutions designed to protect your company, assets, and key personnel in Singapore."
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
                Insurance Services
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
        aria-label="Insurance services overview"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-24">
              {/* Introduction Text */}
              <div className="max-w-4xl mx-auto mb-16 text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  At RDC Corporate, we recognise that every business faces unique risks. That's why we offer tailored insurance solutions designed to protect your company, assets, and key personnel, giving you confidence to grow without worry.
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
                          <Briefcase className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Corporate Insurance Coverage</h3>
                        <p className="text-sm text-gray-600">Protect your business from operational risks, property damage, liability claims, and other unforeseen events</p>
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
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Key-Person Insurance</h3>
                        <p className="text-sm text-gray-600">Safeguard your company from the financial impact of losing a critical employee, partner or executive</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <AlertTriangle className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">General Risk Protection</h3>
                        <p className="text-sm text-gray-600">Cover common business risks such as fire, theft, business interruption, and liability exposures</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 4 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Shield className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Employee Benefits & Group Insurance</h3>
                        <p className="text-sm text-gray-600">Provide health, accident and life insurance solutions that improve retention and satisfaction</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 5 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Lock className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Specialised Insurance Solutions</h3>
                        <p className="text-sm text-gray-600">Tailored policies for unique needs, including professional indemnity, cyber liability, or industry-specific coverage</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 6 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <FileCheck className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Risk Assessment & Advisory</h3>
                        <p className="text-sm text-gray-600">We assess your business risks and provide expert guidance to create an insurance strategy that balances protection with cost-efficiency</p>
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

            {/* Content Box */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    We deliver holistic and customised insurance solutions that safeguard what matters most — your business, your people, and your peace of mind.
                  </p>
                  <p>
                    Our team combines expertise, confidentiality, and genuine care to help you navigate the complex insurance landscape — seamlessly and securely.
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

export default InsuranceServices;
