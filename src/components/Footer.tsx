import React from 'react';
import { ExternalLink, MapPin, Phone, Mail, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { partnersData } from '../data/partners';

const Footer: React.FC = () => {
  const agencyLinks = [
    { name: 'ACRA', url: 'https://www.acra.gov.sg/' },
    { name: 'IRAS', url: 'https://www.iras.gov.sg/' },
    { name: 'MOM', url: 'https://www.mom.gov.sg/' },
  ];

  return (
    <footer className="bg-gray-900 py-6 md:py-8 shadow-2xl text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Professional subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-transparent to-gray-700/20"></div>
        
        {/* Minimal geometric elements */}
        <div className="absolute top-1/4 left-1/5 w-24 h-24 border border-gray-600/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-gray-600/15 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
          {/* Company Info */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3 mb-3">
              <Link to="/" className="flex items-center space-x-2 group">
  <img
    src="/RDC reverse logo (transparent BG).png"
    alt="RDC Corporate"
    className="h-12 w-auto transition-all duration-300 hover:scale-105 filter drop-shadow-md"
    style={{ imageRendering: 'crisp-edges' }}
  />
</Link>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 text-base leading-relaxed font-medium font-body">
                Trusted professionals in corporate and private client services since 2002.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600/30 shadow-md">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-300 font-semibold font-sans">
                  UEN: 201408289W
                </p>
              </div>
              
              {/* Gateway to Asia Image */}
              <div className="mt-5">
                <img 
                  src="/gateway-to-asia.png" 
                  alt="Your Gateway to Asia" 
                  className="h-40 w-40 object-cover transition-all duration-300  filter drop-shadow-md rounded-lg"
                  style={{ imageRendering: 'crisp-edges' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Contact & Address */}
          <div className="space-y-4 text-left">
            <div className="relative mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg md:text-xl font-sans">
                    Contact & Address
                  </h4>
                  <div className="w-full h-0.5 bg-gradient-to-r from-gray-500 to-gray-400 mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {/* Address */}
              <div className="group hover:bg-gray-800/50 rounded-xl p-2 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-300 mb-1 font-sans">Office Address</p>
                    <a
                      href="https://www.google.com/maps/place/RDC+Corporate+F.K.A+Red+Dot+Consult/@1.291139,103.8513761,19z/data=!3m2!4b1!5s0x31da190a6a7e722b:0xc6cbf45ccb1e5bab!4m6!3m5!1s0x31da19a7286aafa5:0xd468d5e630faa716!8m2!3d1.291139!4d103.8513761!16s%2Fg%2F11hz17fptb?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 font-body leading-relaxed block"
                    >
                      1 Coleman St, #10-10, Singapore 179803
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="group hover:bg-gray-800/50 rounded-xl p-2 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-300 mb-1 font-sans">Phone</p>
                    <a href="tel:+6562235466" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 font-body">
                      +65 6223 5466
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Fax */}
              <div className="group hover:bg-gray-800/50 rounded-xl p-2 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Printer size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-300 mb-1 font-sans">Fax</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 font-body">+65 6298 2938</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Email */}
              <div className="group hover:bg-gray-800/50 rounded-xl p-2 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-300 mb-1 font-sans">Email</p>
                    <a 
                      href="mailto:contact@rdccorporate.com" 
                      className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 font-body hover:underline"
                    >
                      contact@rdccorporate.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Associate Company */}
          <div className="space-y-3">
            <div className="relative mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg font-sans">
                    Associates & Partners
                  </h4>
                  <div className="w-full h-0.5 bg-gradient-to-r from-gray-500 to-gray-400 mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <p className="text-sm text-gray-300 font-semibold font-sans">
                    Associate Company
                  </p>
                </div>
               <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300">
  <a 
    href="https://thecorporatesg.com/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group font-body min-h-[44px] font-light"
  >
    https://thecorporatesg.com/
    <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-all duration-300" />
  </a>
</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
                  <p className="text-sm text-gray-300 font-semibold font-sans">
                    Global Network Partner
                  </p>
                </div> 
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-3 border border-gray-600/30 hover:bg-gray-700/50 transition-all duration-300">
                  <a 
                    href="https://www.irglobal.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                   className="text-sm text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group font-body min-h-[44px] font-light"
  >
                    www.irglobal.com
                    <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-all duration-300" />
                  </a> 
                </div>
              </div>
            </div>
          </div> 

          {/* Agency & Membership */}
          <div className="space-y-3">
            <div className="relative mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <h4 className="font-bold text-white text-lg font-sans">
                    Certifications
                  </h4>
                  <div className="w-full h-0.5 bg-gradient-to-r from-gray-500 to-gray-400 mt-2 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30 mb-3">
              <p className="text-sm text-gray-300 font-medium leading-relaxed font-body">
                Registered and certified with Singapore regulatory bodies
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {agencyLinks.map((link) => (
                <div
                  key={link.name}
                  className="group relative"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/30 font-body min-h-[44px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                      <div className="flex-1 min-w-0"> 
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-base text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                            {link.name}
                            {link.name === 'ACRA' && (
                             <div className="text-sm text-gray-400 font-light mt-1 leading-relaxed">
  {partnersData.find(p => p.name === 'ACRA')?.fullName || 'Accounting and Corporate Regulatory Authority'}
</div>
                            )}
                            {link.name === 'IRAS' && (
                              <div className="text-sm text-gray-400 font-light mt-1 leading-relaxed">
                                {partnersData.find(p => p.name === 'IRAS')?.fullName || 'Inland Revenue Authority of Singapore'}
                              </div>
                            )}
                            {link.name === 'MOM' && (
                              <div className="text-sm text-gray-400 font-light mt-1 leading-relaxed">
                                {partnersData.find(p => p.name === 'MOM')?.fullName || 'Ministry of Manpower'}
                              </div>
                            )}
                          </span>
                          <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-400 transition-all duration-300 flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-300 font-semibold text-center md:text-left font-body">
                © 2024 RDC Corporate Pte. Ltd.
              </p>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-gray-600 to-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-400 font-medium font-body">All rights reserved</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a
                href="/privacy-policy"
                className="text-sm hover:text-blue-400 transition-all duration-300 text-gray-300 font-semibold hover:underline flex items-center gap-1.5 group font-body min-h-[44px]"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm hover:text-blue-400 transition-all duration-300 text-gray-300 font-semibold hover:underline flex items-center gap-1.5 group bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-600/30 hover:bg-gray-700/50 font-body min-h-[44px]"
                aria-label="Back to top"
              >
                Back to Top
                <svg className="w-3 h-3 group-hover:-translate-y-0.5 transition-all duration-300 text-gray-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> {/* ✅ This closes the "container mx-auto\" div */}
    </footer>
  );
};

export default Footer;