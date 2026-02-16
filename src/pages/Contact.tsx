import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Building2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [captchaValue, setCaptchaValue] = useState(generateCaptcha());

  function generateCaptcha() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const offices = [
    {
      country: 'SINGAPORE',
      company: 'RDC Corporate Pte. Ltd.',
      address: '1 Coleman St, #10-10, Singapore 179803',
      phone: '+65 6223 5466',
      fax: '+65 6298 2938',
      email: 'contact@rdccorporate.com',
      flag: '/singapore.png',
      isHQ: true
    },
    {
      country: 'HONG KONG',
      company: 'RDC Corporate Limited',
      address: 'Unit A, 15/F,\nTAL Building, 49 Austin Road,\nKowloon, Hong Kong',
      phone: '+65 6223 5466',
      fax: '+65 6298 2938',
      email: 'contact@rdccorporate.com',
      flag: '/flag.png'
    },
    {
      country: 'INDONESIA',
      company: 'RDC Corporate Indonesia',
      address: 'Jl. Tanah Abang IV\nNo.34-B, Jakarta Pusat-Indonesia 90',
      phone: '+65 6223 5466',
      fax: '+65 6298 2938',
      email: 'contact@rdccorporate.com',
      flag: '/indonesia.png'
    },
    {
      country: 'MALAYSIA',
      company: 'RDC Corporate Malaysia',
      address: '8-3-1, Jalan 3/50,\nDiamond Square,\n53000 Kuala Lumpur',
      phone: '+65 6223 5466',
      fax: '+65 6298 2938',
      email: 'contact@rdccorporate.com',
      flag: '/flag.png'
    },
    {
      country: 'THAILAND',
      company: 'RDC Corporate Thailand',
      address: '23/72, Fl. 2-4,\nRoyal City Avenue,Block G,\nRama 9 Road, Bangkapi,\nHuaykwang,\nBangkok 10310, Thailand',
      phone: '+65 6223 5466',
      fax: '+65 6298 2938',
      email: 'contact@rdccorporate.com',
      flag: '/thailand.png'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const refreshCaptcha = () => {
    setCaptchaValue(generateCaptcha());
    setFormData(prev => ({ ...prev, captcha: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate captcha
    if (formData.captcha.toUpperCase() !== captchaValue) {
      setSubmitStatus('captcha_error');
      setIsSubmitting(false);
      refreshCaptcha();
      return;
    }

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '', captcha: '' });
      refreshCaptcha();
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   <div className="min-h-screen">
      <SEOHead 
        title="Contact Us - RDC Corporate"
        description="We'd love to help. Contact us for all your business needs across Singapore, Hong Kong, Indonesia, Malaysia, and Thailand."
        keywords="contact RDC Corporate, Singapore office, Hong Kong office, Indonesia office, Malaysia office, Thailand office, corporate services contact"
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
     We'd love to help
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
          Contact us for all your business needs      </p>
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

      {/* Main Contact Section - 2 Column Layout */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:items-start">
              
              {/* LEFT COLUMN: Get in Touch Form + Google Map */}
              <div className="flex flex-col space-y-12">
                
                {/* Contact Form */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden flex-1">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-50/50 to-transparent rounded-full"></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h2 className="text-4xl font-bold text-gray-900 mb-4 font-sans">Get in Touch</h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="text-green-800 font-medium">Thank you! Your message has been sent successfully.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                        <span className="text-red-800 font-medium">Sorry, there was an error sending your message. Please try again.</span>
                      </div>
                    )}

                    {submitStatus === 'captcha_error' && (
                      <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4">
                        <AlertCircle className="w-6 h-6 text-red-600" />
                        <span className="text-red-800 font-medium">Captcha verification failed. Please try again.</span>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical text-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                          placeholder="Tell us about your requirements or questions..."
                        />
                      </div>

                      {/* Web Captcha */}
                      <div>
                        <label htmlFor="captcha" className="block text-sm font-bold text-gray-700 mb-3">
                          Security Verification *
                        </label>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-4 rounded-xl border-2 border-dashed border-gray-300 font-mono text-2xl font-bold text-gray-700 tracking-widest select-none">
                            {captchaValue}
                          </div>
                          <button
                            type="button"
                            onClick={refreshCaptcha}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-semibold"
                          >
                            Refresh
                          </button>
                        </div>
                        <input
                          type="text"
                          id="captcha"
                          name="captcha"
                          value={formData.captcha}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg bg-white/80 backdrop-blur-sm hover:bg-white"
                          placeholder="Enter the characters above"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#5680E9] to-[#84CEEB] text-white py-5 px-8 rounded-xl font-bold text-xl hover:from-[#4c6fd4] hover:to-[#7bb3e8] focus:ring-2 focus:ring-[#5680E9] focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-4"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 text-center">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Our Singapore Headquarters</h3>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.805!2d103.8513761!3d1.291139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a7286aafa5:0xd468d5e630faa716!2sRDC%20Corporate%20F.K.A%20Red%20Dot%20Consult!5e0!3m2!1sen!2s!4v1707635673951!5m2!1sen!2s"
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RDC Corporate Singapore Office Location"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: HQ Office Info + Other Locations */}
              <div className="flex flex-col space-y-8">
                
                {/* Singapore HQ - Featured */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full"></div>
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl animate-pulse">
                    HQ
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Building2 className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">SINGAPORE</h3>
                        <p className="text-blue-600 font-semibold">RDC Corporate Pte. Ltd.</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 whitespace-pre-line">{offices[0].address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <a href={`tel:${offices[0].phone}`} className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">{offices[0].phone}</a>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-4 flex items-center justify-center flex-shrink-0">
                          <div className="w-4 h-3 border-2 border-blue-600 rounded-sm"></div>
                        </div>
                        <span className="text-gray-700">{offices[0].fax}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <a href={`mailto:${offices[0].email}`} className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">{offices[0].email}</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Locations */}
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    Our Regional Offices
                  </h3>
                  
                  <div className="space-y-8">
                    {offices.slice(1).map((office, index) => (
                      <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-blue-400 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={office.flag} 
                            alt={`${office.country} flag`}
                            className="w-8 h-6 object-cover rounded shadow-sm"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <h4 className="font-bold text-gray-900 text-lg">{office.country}</h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-4 whitespace-pre-line leading-relaxed">{office.address}</p>
                        <div className="flex flex-wrap gap-6 text-sm">
                          <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            {office.phone}
                          </a>
                          <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;