import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import LazyImage from '../components/LazyImage';
import { partnersData } from '../data/partners';
import {
  ArrowRight,
  Building,
  Globe,
  FileText,
  CreditCard,
  Plane,
  Calculator,
  Users,
  Shield,
  ChevronDown,
  ChevronUp,
  Briefcase,
  CheckCircle,
} from 'lucide-react';

const Home: React.FC = () => {
  const [showAllServices, setShowAllServices] = React.useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RDC Corporate Pte. Ltd.",
    "description": "Professional corporate services, accounting, taxation, and private client advisory in Singapore. Your trusted partner since 2002.",
    "url": "https://rdccorporate.com",
    "logo": "https://rdccorporate.com/RDC reverse logo (transparent BG).png",
    "foundingDate": "2002",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Coleman Street, #10-10 The Adelphi",
      "addressLocality": "Singapore",
      "postalCode": "179803",
      "addressCountry": "SG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+65 6223 5466",
      "contactType": "customer service",
      "email": "contact@rdccorporate.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/rdc-corporate",
      "https://www.facebook.com/rdccorporate"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Corporate Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Company Formation & Corporate Secretarial",
            "description": "Complete incorporation and ongoing corporate secretarial support for Singapore and foreign entities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Accounting & Taxation",
            "description": "Bookkeeping, financial reporting, GST compliance, corporate tax filing and advisory services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CFO & BPO Services",
            "description": "Outsourced Chief Financial Officer (CFO), Business Process Outsourcing (BPO), and corporate advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Clients",
            "description": "Advisory and solutions tailored for high-net-worth individuals and their families' unique needs"
          }
        }
      ]
    }
  };

  return (
    <div>
      <SEOHead
        title="RDC Corporate - Trusted Corporate & Private Client Services"
        description="Professional corporate services, accounting, taxation, and private client advisory in Singapore. Your trusted partner since 2002."
        structuredData={structuredData}
      />
      
      {/* ✅ Final Hero Section — Readable + Beautiful + Frosted Glass */}
      <section className="relative min-h-screen pt-16 overflow-hidden">
        {/* Background Image — Fully visible */}
        <div className="absolute inset-0">
          <img
            src="/marina bay singapore - rdc.png"
            alt="Singapore Marina Bay - RDC Corporate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>
        
      {/* Hero Content with Compact Frosted Glass Panel */}
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
  <div
    className="text-center max-w-5xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10 shadow-xl"
    style={{
      animation: 'fadeInUp 1s ease-out forwards',
      animationDelay: '0.3s',
      opacity: 0
    }}
  >
    {/* Headline — Slightly smaller */}
    <div className="mb-6 px-2 sm:px-4 md:px-6">
      <h1 className="font-sans font-bold tracking-tight text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] leading-[1.3] sm:leading-[1.2] md:leading-[1.15] lg:leading-[1.1] text-white drop-shadow-md">
        Trusted Professionals in{' '}
        <span className="relative inline-block whitespace-nowrap">
          Corporate and Private Clients Services
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 h-[0.5em] w-full max-w-[90%] fill-[#84CEEB]/70"
            preserveAspectRatio="none"
          >
            <path d="m203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
        </svg>
        </span>
      </h1>
    </div>

    {/* Subtitle — Slightly smaller, tighter spacing */}
    <div className="pt-6 mb-8 max-w-4xl mx-auto px-2 sm:px-4 md:px-6">
  <p className="mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light text-center drop-shadow-sm">
        Welcome to RDC Corporate, your trusted partner in corporate services, accounting, back-office processing, and private client advisory across Singapore and Asia. Established in 2002, we specialise in helping businesses and individuals navigate the complexities of compliance, governance, and strategic growth. 
      </p>
    </div>

    {/* CTA Button — Keep as is, or reduce padding if needed */}
    <div 
      style={{
        animation: 'fadeInUp 1s ease-out forwards',
        animationDelay: '0.6s',
        opacity: 0
      }}
    >
      <Link
        to="/contact"
        className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm md:text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gradient-to-r from-[#5680E9] to-[#8860D0] text-white hover:from-[#4c6fd4] hover:to-[#7c3aed] active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] transform hover:scale-105"
      >
        Get in Touch
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </div>
</div>
      </section>

      {/* Value Proposition Section */}
      <section className="pt-8 md:pt-12 pb-20 md:pb-32 relative overflow-hidden">
        {/* Complex Multi-layered Background */}
        <div className="absolute inset-0">
          {/* Primary gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60"></div>
          
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #5680E9 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #84CEEB 1px, transparent 1px),
                linear-gradient(45deg, transparent 40%, rgba(86,128,233,0.1) 50%, transparent 60%)
              `,
              backgroundSize: '60px 60px, 40px 40px, 80px 80px'
            }}></div>
          </div>
          
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-[10%] w-32 h-32 border-2 border-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-[15%] w-24 h-24 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-lg rotate-45 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-32 left-[20%] w-16 h-16 border-2 border-purple-200/40 rounded-lg rotate-12 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 right-[25%] w-20 h-20 bg-gradient-to-tl from-indigo-200/25 to-purple-300/25 rounded-full animate-pulse animation-delay-500"></div>
          
          {/* Mesh gradient overlays */}
          <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-blue-400/5 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-radial from-purple-400/5 via-transparent to-transparent"></div>
        </div> 
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-8xl mx-auto">
            
            {/* Enhanced Header Section */}
            <div className="text-center mb-12 relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-sans text-gray-900 leading-tight tracking-tight">
                Why Choose RDC Corporate?
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-body">
                Your Gateway to Asia
              </p>
            </div>

            {/* Complex Multi-section Layout */}
            <div className="space-y-16">
              {/* Balanced Content Section */}
              <div className="max-w-6xl mx-auto">
                {/* Main Content - Open Typography */}
                <div className="text-center mb-20 relative">
                  {/* Decorative elements */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-8 flex items-center gap-2">
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-blue-500/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-12 h-1 bg-gradient-to-l from-transparent via-cyan-400/40 to-cyan-500/60 rounded-full"></div>
                  </div>

                  <div className="max-w-5xl mx-auto px-4 relative">
                    {/* Large opening statement */}
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
                      We have helped{' '}
                      <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-[#5680E9] via-[#5AB9EA] to-[#84CEEB] bg-clip-text text-transparent">
                          hundreds of businesses
                        </span>
                        <div className="absolute bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-[#5680E9]/20 via-[#5AB9EA]/20 to-[#84CEEB]/20 -rotate-1 rounded"></div>
                      </span>
                      {' '}establish and grow in Singapore and across Asia.
                    </p>

                    {/* Supporting paragraph */}
                    <div className="max-w-4xl mx-auto">
                      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        Whether you are{' '}
                        <span className="font-medium text-gray-800">launching a new venture</span>,{' '}
                        <span className="font-medium text-gray-800">expanding regionally</span> or{' '}
                        <span className="font-medium text-gray-800">managing multi-generational wealth</span>,{' '}
                        RDC Corporate delivers tailored solutions with precision and care.
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-12 flex justify-center">
                      <div className="flex items-center gap-3">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5680E9]"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#5AB9EA]"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#84CEEB]"></div>
                        </div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Key Features Grid - 2x2 Layout */}
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Singapore Expertise",
                      desc: "Over two decades of experience in Singapore’s corporate landscape, we have a deep understanding of the challenges and opportunities that come with building a sustainable business in Asia.",
                      gradient: "from-[#5680E9] to-[#4c6fd4]"
                    },
                    {
                      title: "Personalised Service",
                      desc: "We take the time to understand your unique needs and ambitions, so we can provide practical advice and solutions that truly support your business and personal growth.",
                      gradient: "from-[#84CEEB] to-[#0ea5e9]"
                    },
                    {
                      title: "Local Expertise and Regional Presence",
                      desc: "With a network that extends across Singapore, Hong Kong, Indonesia, Malaysia and Thailand and associates across over 170 jurisdictions, we offer the convenience of local insights combined with regional reach — helping you navigate cross-border opportunities with confidence and ease.",
                      gradient: "from-[#5AB9EA] to-[#0284c7]"
                    },
                    {
                      title: "Trusted Partner",
                      desc: "Long-standing relationships with entrepreneurs, professionals and bankers reflect the trust we have earned over the years. We value integrity, transparency, and reliability — the foundations of every successful partnership.",
                      gradient: "from-[#8860D0] to-[#7c3aed]"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group relative">
                      <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white relative overflow-hidden cursor-default transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-2xl h-full`}>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
                        
                        <div className="relative z-10">
                          <h4 className="font-bold text-2xl mb-4 group-hover:text-white/90 transition-colors duration-300">{item.title}</h4>
                          <p className="text-white/80 text-lg leading-relaxed group-hover:text-white/70 transition-colors duration-300">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Slogan */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #5680E9 1px, transparent 1px),
              radial-gradient(circle at 80% 50%, #84CEEB 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-[15%] w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-gradient-to-tl from-cyan-200/20 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Top decorative accent */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400/40"></div>
                <div className="relative">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/40"></div>
              </div>
            </div>

            {/* Main quote section */}
            <div className="text-center mb-16">
              <blockquote className="relative">
                {/* Large decorative opening quote */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                  <svg className="w-16 h-16 md:w-20 md:h-20 text-blue-500/10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative">
                  <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-relaxed font-light max-w-5xl mx-auto px-4">
                    At{' '}
                    <span className="font-semibold bg-gradient-to-r from-[#5680E9] to-[#84CEEB] bg-clip-text text-transparent">
                      RDC Corporate
                    </span>
                    , your business goals shape our direction — together, we design solutions that{' '}
                    <span className="relative inline-block font-medium text-gray-900">
                      empower growth
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-200/40 -rotate-1"></div>
                    </span>
                    ,{' '}
                    <span className="relative inline-block font-medium text-gray-900">
                      strengthen compliance
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-cyan-200/40 rotate-1"></div>
                    </span>
                    , and{' '}
                    <span className="relative inline-block font-medium text-gray-900">
                      unlock lasting value
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-cyan-200/40 -rotate-1"></div>
                    </span>
                    .
                  </p>
                </div>
              </blockquote>
            </div>

            {/* Director info card */}
            <div className="max-w-2xl mx-auto mb-14">
              <div className="text-center">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Teck Leong
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    CA, MBA, ChFC
                  </p>
                  <p className="text-sm text-gray-500">
                    Director
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom decorative accent */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400/60"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80"></div>
                <div className="w-1 h-1 rounded-full bg-cyan-400/60"></div>
              </div>
            </div>
          </div>
        </div>
      </section> 

     

      {/* Services Section */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-20 relative overflow-hidden" style={{
        background: 'radial-gradient(at left top, rgba(86, 128, 233, 0.08) 0%, transparent 50%), radial-gradient(at right top, rgba(132, 206, 235, 0.08) 0%, transparent 50%), radial-gradient(at left bottom, rgba(90, 185, 234, 0.08) 0%, transparent 50%), radial-gradient(at right bottom, rgba(136, 96, 208, 0.08) 0%, transparent 50%), radial-gradient(rgba(193, 200, 228, 0.05) 0%, transparent 70%), linear-gradient(135deg, rgba(86, 128, 233, 0.03) 0%, rgba(132, 206, 235, 0.03) 25%, rgba(90, 185, 234, 0.03) 50%, rgba(193, 200, 228, 0.03) 75%, rgba(136, 96, 208, 0.03) 100%)',
        backgroundColor: '#fafbfc'
      }}>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 font-sans">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4 font-body">
              Comprehensive business solutions tailored for the Asian market
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto auto-rows-fr">
            {/* Main Service Categories */}
            <Link
              to="/services/formation-singapore-entities"
              className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5680E9] flex flex-col overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/10 to-[#84CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 font-sans leading-tight">
                  Formation of Singapore Entities
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                  Complete setup and registration of Singapore companies and business entities
                </p>
                <div className="flex items-center text-[#5680E9] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            <Link
              to="/services/formation-foreign-companies"
              className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#8860D0] flex flex-col overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/10 to-[#5AB9EA]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#5AB9EA] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8860D0] transition-colors duration-300 font-sans">
                  Formation of Foreign Companies
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                  International entity formation and offshore company setup
                </p>
                <div className="flex items-center text-[#8860D0] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            <Link
              to="/services/corporate-secretarial-services"
              className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#84CEEB] flex flex-col overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/10 to-[#C1C8E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#84CEEB] transition-colors duration-300 font-sans">
                  Corporate Secretarial Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                  Professional corporate compliance and secretarial support
                </p>
                <div className="flex items-center text-[#84CEEB] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Services - Collapsible */}
          {showAllServices && (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
              <Link
                to="/services/accounting-taxation"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5AB9EA] flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/10 to-[#84CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#84CEEB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5AB9EA] transition-colors duration-300 font-sans">
                    Accounting & Taxation
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Bookkeeping, financial reporting, GST compliance and corporate tax advisory
                  </p>
                  <div className="flex items-center text-[#5AB9EA] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              <Link
                to="/services/cfo-bpo"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#8860D0] flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/10 to-[#C1C8E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#C1C8E4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8860D0] transition-colors duration-300 font-sans">
                    CFO & BPO Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Outsourced financial leadership and operational support
                  </p>
                  <div className="flex items-center text-[#8860D0] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              <Link
                to="/services/private-clients"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5680E9] flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/10 to-[#84CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5680E9] transition-colors duration-300 font-sans">
                    Private Clients
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Strategic advisory for family offices and wealth management
                  </p>
                  <div className="flex items-center text-[#5680E9] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              <Link
                to="/services/payroll-services"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#84CEEB] flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#84CEEB]/10 to-[#C1C8E4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#84CEEB] to-[#C1C8E4] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#84CEEB] transition-colors duration-300 font-sans">
                    Payroll Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Comprehensive payroll management and compliance services
                  </p>
                  <div className="flex items-center text-[#84CEEB] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              <Link
                to="/services/assurance"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5AB9EA] flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5AB9EA]/10 to-[#5680E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5AB9EA] to-[#5680E9] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5AB9EA] transition-colors duration-300 font-sans">
                    Assurance Services
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Professional audit and assurance services for your business
                  </p>
                  <div className="flex items-center text-[#5AB9EA] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>

              <Link
                to="/services/insurance"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#8860D0] flex flex-col h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8860D0]/10 to-[#5680E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8860D0] to-[#5680E9] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8860D0] transition-colors duration-300 font-sans">
                    Insurance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Business and corporate insurance solutions
                  </p>
                  <div className="flex items-center text-[#8860D0] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex justify-center">
              <Link
                to="/services/visas-employment-passes"
                className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-[#5680E9] flex flex-col overflow-hidden w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#5680E9]/10 to-[#84CEEB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#5680E9] transition-colors duration-300 font-sans">
                    Visas & Employment Passes
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-body flex-grow mb-4">
                    Work visa and employment pass application assistance
                  </p>
                  <div className="flex items-center text-[#5680E9] font-semibold text-sm group-hover:gap-3 transition-all duration-300 font-sans">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
            </>
          )}

          {/* See More Services Button */}
          <div className="text-center mb-12 mt-8">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl font-semibold text-lg hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300"
            >
              {showAllServices ? 'Show Less Services' : 'See More Services'}
              {showAllServices ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              )}
            </button>
          </div>
          
        </div>
      </section>

      {/* Partners Section */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-sans text-gray-900">
              Members, Agencies & Associates
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-body">
              Trusted partnerships with leading professional bodies, regulatory authorities, and global networks
            </p>
          </div>

          {/* Modern Partners Slider */}
          <div className="mb-12">
            <div className="relative overflow-hidden">
              <div className="partners-slider-track flex gap-8 animate-slide-infinite">
                {partnersData.map((partner, index) => (
                  <div key={`set1-${index}`} className="flex-shrink-0 group">
                    {partner.url ? (
                      <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Visit ${partner.name}`}>
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="h-16 w-auto object-contain transition-all duration-300 opacity-70 hover:opacity-100 group-hover:scale-110 filter grayscale hover:grayscale-0"
                          style={{ maxWidth: '160px' }}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </a>
                    ) : (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="h-16 w-auto object-contain transition-all duration-300 opacity-70 hover:opacity-100 group-hover:scale-110 filter grayscale hover:grayscale-0"
                        style={{ maxWidth: '160px' }}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                ))}
                
                {partnersData.map((partner, index) => (
                  <div key={`set2-${index}`} className="flex-shrink-0 group">
                    {partner.url ? (
                      <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Visit ${partner.name}`}>
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} logo`}
                          className="h-16 w-auto object-contain transition-all duration-300 opacity-70 hover:opacity-100 group-hover:scale-110 filter grayscale hover:grayscale-0"
                          style={{ maxWidth: '160px' }}
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </a>
                    ) : (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="h-16 w-auto object-contain transition-all duration-300 opacity-70 hover:opacity-100 group-hover:scale-110 filter grayscale hover:grayscale-0"
                        style={{ maxWidth: '160px' }}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse animation-delay-200"></div>
              </div>
              <span className="text-lg text-gray-800 font-bold font-sans">
                Certified & Regulated Professional Services
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse animation-delay-400"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Global Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;