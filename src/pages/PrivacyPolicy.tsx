import React from 'react';
import SEOHead from '../components/SEOHead';

const PrivacyPolicy: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - RDC Corporate",
    "description": "Privacy Policy for RDC Corporate Pte. Ltd. and its subsidiaries regarding the collection, use, and disclosure of personal data.",
    "url": "https://rdccorporate.com/privacy-policy"
  };

  return (
    <div className="text-white">
      <SEOHead
        title="Privacy Policy - RDC Corporate"
        description="Privacy Policy for RDC Corporate Pte. Ltd. and its subsidiaries regarding the collection, use, and disclosure of personal data."
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
            backgroundAttachment: 'scroll',
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.1) saturate(1.05) brightness(1.02)',
            zIndex: -1
          }}
        />

        {/* Gradient Overlay — Brand Colors */}
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
                Privacy Policy
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
                  Our commitment to protecting your personal data and privacy
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

      {/* Privacy Policy Content */}
      <section 
        className="py-20 bg-gray-50" 
        aria-label="Privacy Policy content"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-6 md:p-10">
                <div className="max-w-none">
                  {/* Header Section */}
                  <div className="text-center mb-10 pb-8 border-b-2 border-gray-200">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-1 bg-gradient-to-r from-[#5680E9] to-[#84CEEB] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#5680E9] rounded-full animate-pulse"></div>
                      <div className="w-12 h-1 bg-gradient-to-r from-[#84CEEB] to-[#5680E9] rounded-full"></div>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#5680E9] font-sans mb-4">PRIVACY POLICY</h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#5680E9] to-[#84CEEB] mx-auto rounded-full"></div>
                  </div>
                  
                  {/* Introduction Section */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-[#5680E9]">
                    <p className="text-base leading-relaxed mb-4 font-body text-gray-800 font-medium">
                      This is the RDC Corporate Pte Ltd, its Subsidiaries and Associate Companies (collectively known as RDC Group) Privacy Policy. This Privacy Policy applies to all personal data you provide to the Group and use our services.
                    </p>
                    <p className="text-base leading-relaxed mb-4 font-body text-gray-800">
                      By providing us with your personal data, you consent and agree to our collecting, using, and disclosing your personal data in the manner set out in this Privacy Policy.
                    </p>
                    <p className="text-sm leading-relaxed font-body text-gray-600 italic">
                      This Privacy Policy is effective as of 10 January 2021.
                    </p>
                  </div>

                  {/* Content Sections */}
                  <div className="space-y-8">
                    {/* Section 1 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h2 className="text-xl font-bold mb-4 text-[#5680E9] font-sans flex items-center gap-3">
                        <span className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center text-white text-sm font-bold">1</span>
                        Company website
                      </h2>
                      <p className="text-base leading-relaxed font-body text-gray-700 pl-11">
                        <a href="https://www.rdccorporate.com" target="_blank" rel="noopener noreferrer" className="text-[#5680E9] hover:underline font-semibold">
                          www.rdccorporate.com
                        </a>
                      </p>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h2 className="text-xl font-bold mb-6 text-[#5680E9] font-sans flex items-center gap-3">
                        <span className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center text-white text-sm font-bold">2</span>
                        Collection, use and disclosure
                      </h2>
                      
                      <div className="pl-11 space-y-6">
                        <div className="space-y-4">
                          <p className="text-base leading-relaxed font-body text-gray-700">
                            RDC Group offers a variety of services that are collectively referred to as the "Services". RDC Group is committed to protecting your personal data and complying with all appropriate legislation.
                          </p>
                          <p className="text-base leading-relaxed font-body text-gray-700">
                            Notwithstanding any other provision in this Privacy Policy, you agree that RDC Group shall be entitled to use and disclose any information and feedback arising from your use of the Services, subject to such information and feedback being anonymised and such use and disclosure complying with applicable privacy laws.
                          </p>
                        </div>

                        {/* Subsection 2.1 */}
                        <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#84CEEB]">
                          <h3 className="text-lg font-bold mb-4 text-gray-900 font-sans">2.1 Personal data we collect</h3>
                          <p className="text-base leading-relaxed mb-4 font-body text-gray-700">
                            When you use the Services, RDC Group may collect, amongst others, the following information:
                          </p>
                          <div className="space-y-2">
                            {[
                              'Full Name',
                              'Residential Address', 
                              'Date of Birth',
                              'NRIC / Passport number',
                              'Contact Phone numbers and Email addresses',
                              'Job title and Industry',
                              'Copy of NRIC / Passport',
                              'Proof of Address documents'
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#5680E9] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm font-body text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Subsection 2.2 */}
                        <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#8860D0]">
                          <h3 className="text-lg font-bold mb-4 text-gray-900 font-sans">2.2 How do we use the personal data?</h3>
                          <p className="text-base leading-relaxed mb-4 font-body text-gray-700">
                            The personal data is collected, used, disclosed and/or processed for the following purposes:
                          </p>
                          <div className="space-y-3">
                            {[
                              'Provide and deliver the Services you have requested',
                              'Operate our internal operations, systems, products, and services',
                              'Provide customer service related to our products and services',
                              'Facilitating any proposed or confirmed merger, acquisition or business asset transaction involving any part of the Group and/or its related corporations, or corporate restructuring process'
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#8860D0] to-[#5680E9] rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5 flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm font-body text-gray-700 leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Subsection 2.3 */}
                        <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#C1C8E4]">
                          <h3 className="text-lg font-bold mb-4 text-gray-900 font-sans">2.3 Who do we share the personal data with?</h3>
                          <p className="text-base leading-relaxed mb-4 font-body text-gray-700">
                            RDC Group may disclose personal data about you to the following third parties for any of the purposes described in this Privacy Policy:
                          </p>
                          <div className="space-y-3">
                            {[
                              'Any person to whom you authorise us to disclose your personal data',
                              'Law enforcement agencies, relevant government ministries, regulators, statutory boards or authorities in compliance with any laws, rules, guidelines and regulations or schemes imposed by any governmental authority',
                              'Our professional advisors, who may include lawyers, auditors, accountants, or other consultants',
                              'Service providers we hire to perform services on our behalf, including, but not limited to the generation of invoices, managing our information technology systems etc. These service providers do not have the right to use your personal data for their purposes. If you have consented, RDC Group may share your personal data with the Group\'s service providers so that these service providers can contact you on our behalf'
                            ].map((item, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#C1C8E4] rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm font-body text-gray-700 leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Subsection 2.4 */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
                          <h3 className="text-lg font-bold mb-6 text-gray-900 font-sans">2.4 Your rights relating to the personal data</h3>
                          
                          <div className="space-y-6">
                            {/* Access Rights */}
                            <div className="bg-white rounded-lg p-4 border-l-4 border-[#5680E9]">
                              <h4 className="text-base font-bold mb-3 text-gray-900 font-sans">2.4.1 Access</h4>
                              <div className="space-y-3 text-sm font-body text-gray-700 leading-relaxed">
                                <p>
                                  You are entitled to request access to a copy of the personal data which we hold about you or information about the ways in which your personal data has been or may have been used or disclosed by us by contacting our Data Protection Officer at this email address: <a href="mailto:support@rdccorporate.com" className="text-[#5680E9] hover:text-[#84CEEB] underline font-semibold">support@rdccorporate.com</a>
                                </p>
                                <p>
                                  Please note that a reasonable fee may be charged for an access request. If so, we will inform you of the estimated fee before processing your request. We reserve the right not to provide access to the personal data until you have paid the access fee.
                                </p>
                                <p>
                                  We will respond to your request as soon as reasonably possible. Should we not be able to respond to your request within 30 calendar days of receiving your request, we will inform you in writing within 30 calendar days of the time by which we will be able to respond to your request and/or the reasons we are unable to do so.
                                </p>
                              </div>
                            </div>

                            {/* Correction Rights */}
                            <div className="bg-white rounded-lg p-4 border-l-4 border-[#84CEEB]">
                              <h4 className="text-base font-bold mb-3 text-gray-900 font-sans">2.4.2 Correction</h4>
                              <div className="space-y-3 text-sm font-body text-gray-700 leading-relaxed">
                                <p>
                                  You are entitled to request to correct an error or omission in the personal data which we hold about you by contacting our Data Protection Officer at this email address: <a href="mailto:support@rdccorporate.com" className="text-[#5680E9] hover:text-[#84CEEB] underline font-semibold">support@rdccorporate.com</a>
                                </p>
                                <p>
                                  We will respond to your request as soon as practicable. Should we not be able to respond to your request within 30 calendar days of receiving your request, we will inform you in writing within 30 calendar days of the time by which we will be able to respond to your request and/or the reasons we are unable to do so.
                                </p>
                              </div>
                            </div>

                            {/* Withdrawal Rights */}
                            <div className="bg-white rounded-lg p-4 border-l-4 border-[#8860D0]">
                              <h4 className="text-base font-bold mb-3 text-gray-900 font-sans">2.4.3 Withdrawal of consent</h4>
                              <div className="space-y-3 text-sm font-body text-gray-700 leading-relaxed">
                                <p>
                                  The consent that you have provided for the collection, use and disclosure of your personal data will remain valid until such time it is being withdrawn by you in writing.
                                </p>
                                <p>
                                  You are entitled to withdraw any consent you have provided to us previously and to request us to cease collecting, using and/or disclosing your personal data for any or all the purposes listed herein, by contacting our Data Protection Officer at this email address: <a href="mailto:support@rdccorporate.com" className="text-[#5680E9] hover:text-[#84CEEB] underline font-semibold">support@rdccorporate.com</a>. Please note that we are generally not obliged to forward any request for withdrawal of consent to any third party to whom we have disclosed your personal data – such request should be made directly with such third-party.
                                </p>
                                <p>
                                  Upon receipt of your written request to withdraw your consent, we may require reasonable time (depending on the complexity of the request and its impact on our relationship with you) for your request to be processed and for us to notify you of the consequences of us acceding to the same. We will respond to your request as soon as reasonably possible. In general, we shall seek to process your request within 10 working days of receiving it. Should we not be able to respond to your request within 10 working days of receiving your request, we will inform you in writing within 10 working days of the time by which we will be able to respond to your request.
                                </p>
                                <p>
                                  Please note that the withdrawal of your consent does not affect our right to continue to collect, use and disclose your personal data, where such collection, use and/or disclosure without consent is permitted or required under applicable laws and regulations. Further, we are generally not obliged to delete or destroy personal data after your withdrawal of consent (but such personal data will continue to be protected and retained in accordance with our internal policies and applicable laws and regulations).
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                          <h3 className="text-lg font-bold mb-4 text-gray-900 font-sans">2.5 How to contact us</h3>
                          <p className="text-base leading-relaxed mb-4 font-body text-gray-700">
                            You may submit your queries, feedback, or requests in writing or via email to our Data Protection Officer at the contact details below:
                          </p>
                          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">DPO</span>
                                  </div>
                                  <div>
                                    <p className="text-sm font-bold text-gray-900 font-sans">Data Protection Officer</p>
                                  </div>
                                </div>
                                <div className="pl-11">
                                  <p className="text-sm font-body text-gray-700 leading-relaxed">
                                    <strong>Address:</strong><br />
                                    RDC Corporate Pte Ltd<br />
                                    1 Coleman Street #10-10<br />
                                    Singapore 179803
                                  </p>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <p className="text-sm font-body text-gray-700">
                                  <strong>Email:</strong> <a href="mailto:support@rdccorporate.com" className="text-[#5680E9] hover:text-[#84CEEB] underline font-semibold">support@rdccorporate.com</a>
                                </p>
                                <p className="text-sm font-body text-gray-700">
                                  <strong>Tel:</strong> <a href="tel:+6562235466" className="text-[#5680E9] hover:text-[#84CEEB] underline font-semibold">+65 6223 5466</a>
                                </p>
                                <p className="text-sm font-body text-gray-700">
                                  <strong>Fax:</strong> +65 6298 2938
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h2 className="text-xl font-bold mb-6 text-[#5680E9] font-sans flex items-center gap-3">
                        <span className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center text-white text-sm font-bold">3</span>
                        Website navigational information
                      </h2>
                      
                      <div className="pl-11 space-y-6">
                        <p className="text-base leading-relaxed font-body text-gray-700">
                          RDC Group uses commonly used information-gathering tools, such as cookies and web beacons, to collect information as you navigate the Group's Website ("Website Navigational Information"). This section describes the types of Website Navigational Information that may be collected on the Group's Website and how this information may be used.
                        </p>

                        <div className="space-y-6">
                          <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#84CEEB]">
                            <h3 className="text-lg font-bold mb-4 text-gray-900 font-sans">3.1 Cookies</h3>
                            <p className="text-base leading-relaxed font-body text-gray-700">
                              RDC Group uses cookies to make interactions with the Group's Website easy and meaningful. When you visit the Group's Website, RDC Group's servers send a cookie to your computer. Such cookies do not personally identify you. They merely recognise your Web browser you remain anonymous to the Group. RDC Group does not collect nor analyse users who visit our website.
                            </p>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-5 border-l-4 border-[#8860D0]">
                            <h3 className="text-lg font-bold mb-4 text-gray-900 font-sans">3.2 Links to another website</h3>
                            <p className="text-base leading-relaxed font-body text-gray-700">
                              RDC Group's Website may contain links to other website of interest. However, once you have used these links to leave RDC Group's Website, you should note that we do not have any control over such third parties' website. Therefore, we cannot be responsible for the protection of the privacy of any personal data which you may provide whilst visit such third-party website. You should exercise caution and review the privacy policy(ies) of such third-party website before disclosing your personal data to such third parties.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sections 4, 5, 6 */}
                    {[
                      {
                        number: 4,
                        title: 'Public forums and customer testimonials',
                        content: [
                          'RDC Group may provide bulletin boards, blogs, or chat rooms on our website. Any personal data you choose to submit in such a forum may be read, collected, or used by others who visit these forums and may be used to send you unsolicited messages. RDC Group is not responsible for the personal data you choose to submit in these forums.',
                          'RDC Group may post a list of Customers and relevant testimonials on the Group\'s Website that contain personal data such as Customer names and titles. RDC Group shall obtain the consent of each Customer prior to posting any such personal data.'
                        ]
                      },
                      {
                        number: 5,
                        title: 'Security',
                        content: [
                          'RDC Group uses appropriate administrative, technical, and physical security measures to protect personal data of RDC Group\'s Visitors and Customers.'
                        ]
                      },
                      {
                        number: 6,
                        title: 'Changes to this privacy statement',
                        content: [
                          'RDC Group may amend this Privacy Policy from time to time. RDC Group shall provide notification of the material changes to this Privacy Policy on the Group\'s Website at least thirty (30) business days prior to the change(s) taking effect.'
                        ]
                      }
                    ].map((section) => (
                      <div key={section.number} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <h2 className="text-xl font-bold mb-6 text-[#5680E9] font-sans flex items-center gap-3">
                          <span className="w-8 h-8 bg-gradient-to-br from-[#5680E9] to-[#84CEEB] rounded-lg flex items-center justify-center text-white text-sm font-bold">{section.number}</span>
                          {section.title}
                        </h2>
                        <div className="pl-11 space-y-4">
                          {section.content.map((paragraph, index) => (
                            <p key={index} className="text-base leading-relaxed font-body text-gray-700">
                              {paragraph}
                            </p>
                          ))}
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

export default PrivacyPolicy;