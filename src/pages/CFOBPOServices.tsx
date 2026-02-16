import React from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, ClipboardList, Shield, DollarSign, BarChart3, Target, Users, Briefcase, LineChart, PieChart, ArrowUpCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CFOBPOServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CFO & BPO Services",
    "description": "Chief Financial Officer services and Business Process Outsourcing solutions designed to give your business financial clarity and operational efficiency.",
    "provider": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "url": "https://rdccorporate.com"
    },
    "serviceType": "CFO & BPO Services",
    "areaServed": {
      "@type": "Country",
      "name": "Singapore"
    },
    "offers": {
      "category": "Business Service",
      "description": "Outsourced CFO services and business process outsourcing for strategic financial leadership."
    }
  };

  return (
    <>
      <SEOHead
        title="CFO & BPO Services - RDC Corporate"
        description="Chief Financial Officer services and Business Process Outsourcing solutions designed to give your business financial clarity and operational efficiency."
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
                CFO & BPO Services
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
        aria-label="CFO and BPO services overview"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-20">
              {/* Introduction Text */}
              <div className="max-w-4xl mx-auto mb-16 text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  At RDC Corporate, we offer <strong>Chief Financial Officer (CFO)</strong> services and <strong>Business Process Outsourcing (BPO)</strong> solutions designed to give your business financial clarity and operational efficiency.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Whether you are a startup, SME or expanding enterprise, our team ensures compliance, scalability and sustainable growth.
                </p>
              </div>
            </div>

            {/* Services We Support */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                  Our services include:
                </h2>
                <div className="w-20 h-1 bg-[#5680E9] mx-auto rounded-full"></div>
              </div>

              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Service Card 1 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <LineChart className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Financial Planning and Analysis</h3>
                        <p className="text-sm text-gray-600 mt-2">Gain insights into your business performance and make informed strategic decisions</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 2 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <PieChart className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Budgeting and Forecasting</h3>
                        <p className="text-sm text-gray-600 mt-2">Plan for the future with accurate budgets and forecasts tailored to your business needs</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Card 3 */}
                  <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#5680E9] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#5680E9]/10 flex items-center justify-center group-hover:bg-[#5680E9] transition-colors duration-300">
                          <DollarSign className="w-6 h-6 text-[#5680E9] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Cash Flow Management</h3>
                        <p className="text-sm text-gray-600 mt-2">Keep your finances healthy and ensure liquidity to support growth</p>
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
                        <h3 className="font-semibold text-gray-900 text-lg">Internal Controls and Reporting</h3>
                        <p className="text-sm text-gray-600 mt-2">Maintain strong governance and accurate reporting to drive confidence and transparency</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Closing paragraph */}
              <div className="max-w-4xl mx-auto mt-12 text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  With RDC Corporate as your partner, you can focus on growing your business while we manage your financial operations with precision and expertise.
                </p>
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your trusted partner for strategic financial leadership and operational excellence
              </p>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {/* Strategic Insights Beyond Accounting */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                        Strategic Insights Beyond Accounting
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Our Outsourced CFO services provide access to senior-level financial insight and strategic planning, without the overhead of hiring in-house.
                    </p>
                  </div>
                </div>
              </div>

              {/* Compliance and Risk Management */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#8860D0]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8860D0]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#8860D0] transition-colors duration-300">
                        Compliance and Risk Management
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      We ensure your business stays fully compliant with Singapore's accounting and regulatory standards, while implementing internal controls to manage risk effectively.
                    </p>
                  </div>
                </div>
              </div>

              {/* Streamlined Operations Through BPO */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/5 to-[#5AB9EA]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#84CEEB]/30 h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#84CEEB]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        <div className="relative w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#5AB9EA] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#84CEEB] transition-colors duration-300">
                        Streamlined Operations Through BPO
                      </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed font-body">
                      Our Business Process Outsourcing solutions allow you to delegate time-consuming, non-core functions—such as payroll, accounts payable/receivable and financial administration, allowing you to focus on your front office.
                    </p>
                  </div>
                </div>
              </div>
              </div>

              {/* Centered Bottom Row */}
              <div className="flex flex-wrap justify-center gap-8">
                {/* Strategic Planning and Growth Support */}
                <div className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/5 to-[#84CEEB]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5680E9]/30 h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5680E9]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5680E9] transition-colors duration-300">
                          Strategic Planning and Growth Support
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed font-body">
                        From budgeting and forecasting to cash flow management, we offer insights and strategies that drive sustainable growth and operational efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Focus on Your Business */}
                <div className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/5 to-[#5680E9]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-[#5AB9EA]/30 h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5AB9EA]/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <ArrowUpCircle className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-4 text-gray-900 group-hover:text-[#5AB9EA] transition-colors duration-300">
                          Focus on Your Business
                        </h3>
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed font-body">
                        By handling your financial operations, reporting and planning, we free you to focus on running and expanding your business with confidence.
                      </p>
                    </div>
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
                    With RDC as your CFO partner, you gain trusted expertise, actionable insights and peace of mind to grow your business in Singapore.
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

export default CFOBPOServices;
