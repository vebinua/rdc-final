import React from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, ClipboardList, Shield, DollarSign, Users, Briefcase, Globe, Lock, FileCheck, Scale, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const PrivateClientServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Private Client Services",
    "description": "Tailored wealth management, tax planning and advisory services for high-net-worth individuals and families in Singapore.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Private Client Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Comprehensive private client and tax advisory solutions for individuals and families."
    }
  };

  return (
    <>
      <SEOHead
        title="Private Client Services - RDC Corporate"
        description="Tailored wealth management, tax planning and advisory services for high-net-worth individuals and families in Singapore."
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
                Private Client Services
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
        aria-label="Private client services overview"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-24">
              <div className="max-w-6xl mx-auto">
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
                      As global tax and compliance rules grow more complex, high-net-worth individuals and families face new challenges in managing and protecting their wealth. At RDC Corporate, we listen, plan and create tailored strategies that ensure compliance, preserve assets and safeguard your legacy. Our integrated approach combines tax, legal and financial planning to help you build a sustainable future across generations.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                      We leverage the expertise and dedication of <span className="font-semibold text-[#5680E9]">RDC Corporate's</span> extensive network to stay ahead of the latest tax law changes and emerging trends. This network enables us to collaborate, brainstorm and deliver innovative multi-jurisdictional tax solutions efficiently, ensuring our clients receive seamless, competitive and forward-thinking advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services We Support */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  We provide bespoke advisory services for our private clients include:
                </h2>
                <div className="w-20 h-1 bg-[#5680E9] mx-auto rounded-full mb-4"></div>
              </div>

              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Service Card 1 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Briefcase className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Wealth structuring and succession planning</h3>
                        <p className="text-sm text-gray-600">Plan effectively for the future and ensure smooth wealth transition</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 2 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <TrendingUp className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Tax-efficient investment strategies</h3>
                        <p className="text-sm text-gray-600">Optimise your investments to reduce tax impact while achieving growth</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Globe className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Cross-border advisory</h3>
                        <p className="text-sm text-gray-600">Navigate international investments and compliance with confidence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing paragraph */}
              <div className="max-w-4xl mx-auto mt-12 text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  With discretion and professionalism, we help to protect and grow your wealth across generations.
                </p>
              </div>
            </div>

            {/* Personal, Business & Partnership Tax Accounting Section */}
            <div className="relative bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-2xl p-12 md:p-16 shadow-lg overflow-hidden mb-20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnptLTQgMHYyaDJ2LTJoLTJ6bS00IDB2Mmgydi0yaC0yem0tNCAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

              <div className="relative">
                <div className="flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <FileCheck className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Personal, Business & Partnership Tax Accounting
                      </h3>
                      <p className="text-white/90 text-base md:text-lg leading-relaxed font-semibold mb-2">
                        Personalised Tax Solutions for Individuals, Entrepreneurs & Partnerships
                      </p>
                      <p className="text-white/90 text-base md:text-lg leading-relaxed">
                        Managing your personal and business tax obligations in Singapore requires more than compliance—it demands strategic planning and expert guidance. At RDC Corporate, we offer tailored tax advisory services for individuals, entrepreneurs and partnerships, helping you optimize tax efficiency, protect wealth and stay fully compliant.
                      </p>
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
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your trusted partner for comprehensive private client and tax advisory solutions
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Comprehensive Expertise in Tax Matters */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                        Comprehensive Expertise in Tax Matters
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Our specialists handle a wide range of tax scenarios, from personal income tax filing to partnership tax reporting and business income obligations, ensuring accuracy and compliance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tailored Tax Strategies for High-Net-Worth Individuals */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#8860D0]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8860D0]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <DollarSign className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#8860D0] transition-colors duration-300">
                        Tailored Tax Strategies for High-Net-Worth Individuals (HNWIs)
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      We go beyond filing to create custom tax plans that leverage Singapore's tax incentives, reliefs and exemptions, reducing liabilities while aligning with your wealth goals.
                    </p>
                  </div>
                </div>
              </div>

              {/* Proactive Compliance & Regulatory Updates */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/5 to-[#5AB9EA]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#84CEEB]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#84CEEB]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#84CEEB] transition-colors duration-300">
                        Proactive Compliance & Regulatory Updates
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      We stay ahead of evolving tax laws and ensure your structure meets Inland Revenue Authority of Singapore (IRAS) requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner with RDC Corporate Section */}
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
                    At RDC Corporate, we exceed compliance to become your trusted business partner. Our team combines deep local expertise with a personal touch — offering insights, clarity, and support that empower you to make confident financial decisions and drive sustainable growth.
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

export default PrivateClientServices;
