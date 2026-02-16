import React from 'react';
import { Link } from 'react-router-dom';
import { Award, FileCheck, Users, CheckCircle, Briefcase, Clock, MessageSquare, FolderOpen, ClipboardCheck, Check, FileText, Send, Mail, Plane, Bell, Building2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const VisasEmploymentPasses = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Visas and Employment Passes in Singapore",
    "description": "Expert guidance and end-to-end support for work pass applications in Singapore.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "Visa and Employment Pass Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Complete work pass application and compliance services."
    }
  };

  return (
    <>
      <SEOHead
        title="Visas and Employment Passes - RDC Corporate"
        description="Expert guidance and end-to-end support for work pass applications in Singapore."
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
                Visas and Employment Passes in Singapore
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
        aria-label="Visas and employment passes overview"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-24">
              <div className="max-w-4xl mx-auto mb-16">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
                  <div className="space-y-6 text-center">
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Getting the right work pass is a key step for anyone looking to work in Singapore. The Ministry of Manpower (MOM) offers a variety of <a href="https://www.mom.gov.sg/passes-and-permits" target="_blank" rel="noopener noreferrer" className="text-[#5680E9] hover:underline font-semibold">work passes</a> that cater to different roles, skill levels, and professional qualifications.
                    </p>

                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      Having the appropriate work pass not only ensures full compliance with Singapore's employment laws but also allows individuals to enjoy the rights, benefits, and protections under local regulations.
                    </p>

                    <div className="bg-blue-50 rounded-lg p-6 md:p-8 border border-blue-100 mt-8">
                      <p className="text-base md:text-lg text-gray-800 leading-relaxed font-medium">
                        At <span className="text-[#5680E9] font-semibold">RDC Corporate</span>, our team at <span className="text-[#5680E9] font-semibold">Corporate SG</span> <span className="text-sm text-gray-600">(EA License Number: 23S1557)</span> provides expert guidance and end-to-end support to help you and your employees secure the appropriate work passes efficiently and seamlessly.
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
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Employment & S Pass Applications</h3>
                        <p className="text-sm text-gray-600">We assist professionals and mid-skilled employees in securing the right work passes</p>
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
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Dependent & Long-Term Visit Passes</h3>
                        <p className="text-sm text-gray-600">Support for family members to accompany or join work pass holders in Singapore</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <Clock className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Renewals & Amendments</h3>
                        <p className="text-sm text-gray-600">Handle extensions, renewals, and changes to work passes to keep your business compliant</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 4 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <FileCheck className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">Compliance & Documentation Support</h3>
                        <p className="text-sm text-gray-600">Ensure all applications meet MOM regulations with complete and accurate documentation</p>
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
              {/* End-to-End Support */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                        End-to-End Support
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      We provide end-to-end support for Employment Passes, S Passes, Dependant Passes, and Permanent Residency, ensuring full compliance and a smooth application process —helping businesses and individuals move forward with confidence.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comprehensive Work Pass Services */}
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
                        Comprehensive Work Pass Services
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      We can handle your work pass applications for all types of work passes such as Employment Pass (EP), Personalised Employment Pass (PEP), Letter of Consent (LOC), S Pass, Dependant's Pass (DP), and Long-Term Visit Pass (LTVP) – hassle free and time saving.
                    </p>
                  </div>
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
                    3 Steps to Apply Singapore Work Passes with Us
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
                            <MessageSquare className="w-12 h-12 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="absolute -top-1 -right-1 w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center shadow-md">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </div>

                      <div className="flex-grow flex flex-col">
                        <p className="text-gray-700 text-base leading-relaxed font-body px-4">
                          Consultation with our expert team on the work passes and eligibility
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
                          Send related documents with RDC for verification purposes
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
                          Once you meet MOM requirements, we will send invoice for payment and our team will start working on the application
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Passes Application Procedures Section */}
            <div className="mt-20 mb-0">
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
                  {/* Column 1: Image */}
                  <div className="flex justify-center md:justify-end">
                    <img
                      src="/work-passess-red.png"
                      alt="Singapore Work Passes"
                      className="w-full max-w-md h-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Column 2: Title */}
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900">
                      Work Passes Application Procedures in General
                    </h2>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">Based on MOM Timeline</p>
                  </div>
                </div>
              </div>

              {/* Timeline Container */}
              <div className="relative max-w-7xl mx-auto px-4">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-cyan-50/40 rounded-3xl -z-10"></div>

                {/* Main Timeline Line */}
                <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[#5680E9] via-[#8860D0] to-[#5680E9]" style={{ top: '8rem' }}></div>

                {/* Timeline Steps */}
                <div className="relative py-16">
                  <div className="grid lg:grid-cols-5 gap-8 lg:gap-6">
                    {/* Step 1 */}
                    <div className="relative">
                      {/* Circle Connector */}
                      <div className="hidden lg:flex absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#5680E9] rounded-full border-4 border-white shadow-lg z-10"></div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-full flex items-center justify-center mb-4 shadow-md">
                            <Send className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1 bg-[#5680E9] text-white text-xs font-bold rounded-full mb-2">STEP 1</div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Submission of application by your employer or employment agency (EA).
                          </p>
                        </div>
                      </div>

                      {/* Vertical connector line for mobile */}
                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-1 h-12 bg-gradient-to-b from-[#5680E9] to-[#8860D0]"></div>
                      </div>
                    </div>

                    {/* Step 2 - Lower Position */}
                    <div className="relative lg:mt-24">
                      {/* Circle Connector */}
                      <div className="hidden lg:flex absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#6B7FE8] rounded-full border-4 border-white shadow-lg z-10"></div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#6B7FE8] hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#6B7FE8] to-[#84CEEB] rounded-full flex items-center justify-center mb-4 shadow-md">
                            <Mail className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1 bg-[#6B7FE8] text-white text-xs font-bold rounded-full mb-2">STEP 2</div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Upon approval by MOM, EA will receive an In-Principle Approval (IPA) letter. It serves as your entry pass to travel to Singapore.
                          </p>
                        </div>
                      </div>

                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-1 h-12 bg-gradient-to-b from-[#6B7FE8] to-[#8860D0]"></div>
                      </div>
                    </div>

                    {/* Step 3 - Higher Position */}
                    <div className="relative">
                      {/* Circle Connector */}
                      <div className="hidden lg:flex absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#8860D0] rounded-full border-4 border-white shadow-lg z-10"></div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#8860D0] hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-full flex items-center justify-center mb-4 shadow-md">
                            <Plane className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1 bg-[#8860D0] text-white text-xs font-bold rounded-full mb-2">STEP 3</div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Upon your arrival, EA will complete the formalities and arrange for the issuance of Work Pass via EP online.
                          </p>
                        </div>
                      </div>

                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-1 h-12 bg-gradient-to-b from-[#8860D0] to-[#7B6FD8]"></div>
                      </div>
                    </div>

                    {/* Step 4 - Lower Position */}
                    <div className="relative lg:mt-24">
                      {/* Circle Connector */}
                      <div className="hidden lg:flex absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#7B6FD8] rounded-full border-4 border-white shadow-lg z-10"></div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#7B6FD8] hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#7B6FD8] to-[#84CEEB] rounded-full flex items-center justify-center mb-4 shadow-md">
                            <Bell className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1 bg-[#7B6FD8] text-white text-xs font-bold rounded-full mb-2">STEP 4</div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Once the work pass is issued, a notification letter is provided.
                          </p>
                        </div>
                      </div>

                      <div className="lg:hidden flex justify-center my-4">
                        <div className="w-1 h-12 bg-gradient-to-b from-[#7B6FD8] to-[#5680E9]"></div>
                      </div>
                    </div>

                    {/* Step 5 - Higher Position */}
                    <div className="relative">
                      {/* Circle Connector */}
                      <div className="hidden lg:flex absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#5680E9] rounded-full border-4 border-white shadow-lg z-10"></div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300 h-full">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-full flex items-center justify-center mb-4 shadow-md">
                            <Building2 className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1 bg-[#5680E9] text-white text-xs font-bold rounded-full mb-2">STEP 5</div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            Registration at Employment Pass Service Centre (EPSC) and after 4 days, your pass card is ready for collection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Note Section */}
                <div className="mt-12 max-w-4xl mx-auto">
                  <div className="bg-blue-50 border-l-4 border-[#5680E9] rounded-lg p-6 shadow-md">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">Note:</span> Processing times for work pass applications is subject to change, depending on the complexity, but generally, <span className="font-semibold text-[#5680E9]">it takes around 3 to 8 weeks for the initial approval by MOM.</span>
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

export default VisasEmploymentPasses;
