import React from 'react';
import { Building2, Users, Globe, Award, TrendingUp, Heart } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About RDC Corporate",
    "description": "Learn about RDC Corporate, your trusted partner in corporate services, accounting, taxation, and private client advisory since 2002.",
    "url": "https://rdccorporate.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "RDC Corporate Pte. Ltd.",
      "foundingDate": "2002",
      "description": "Professional corporate services, accounting, taxation, and private client advisory in Singapore and across Asia."
    }
  };

  const values = [
    {
      icon: Users,
      title: 'Trusted Partnership',
      description: 'Guiding clients through every stage of their business journey with expertise and personalised attention'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extended network of professionals, bankers, and investment advisors across Asia and beyond'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Strong reputation for delivering high-quality Corporate Services, Accountancy, and BPO solutions'
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'One-stop destination for comprehensive business needs from formation to expansion'
    },
    {
      icon: Heart,
      title: 'Collaborative Spirit',
      description: 'Working closely with you to craft tailored solutions that align with your unique goals'
    },
    {
      icon: Building2,
      title: 'Established Legacy',
      description: 'Over two decades of experience helping businesses establish and thrive in Asia since 2002'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHead
        title="About Us - RDC Corporate"
        description="Learn about RDC Corporate, your trusted partner in corporate services, accounting, taxation, and private client advisory since 2002."
        structuredData={structuredData}
      />

      <header role="banner" className="relative overflow-hidden">
        {/* Background Image Container */}
        <div
          id="header-background"
          className="header-background absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/marinabay_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 50%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.1) saturate(1.05) brightness(1.02)'
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
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <p className="text-white/90 text-sm font-medium">Established 2002</p>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
            >
              Your Gateway to Asia
            </h1>
            <p
              className="text-xl md:text-2xl text-white/95 leading-relaxed"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
            >
              Trusted partner in corporate services, accounting, taxation, and private client advisory
            </p>
          </div>
        </section>
      </header>

      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#5680E9]/10 to-[#8860D0]/10 rounded-full border border-[#5680E9]/20">
              <p className="text-[#5680E9] text-sm font-semibold">Our Story</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              RDC Corporate:<br />Your Gateway to Asia
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 2002 as Red Dot Consult, RDC Corporate has built a strong reputation for delivering high-quality Corporate Services, Accountancy, BPO services and Taxation solutions to companies and individuals looking to establish their presence in Singapore and across Asia.
              </p>
              <p>
                We serve as a trusted partner, guiding clients through every stage of their business journey with expertise and personalised attention. Over the years, we have expanded our offerings to become a one-stop destination for a wide range of business needs, including CFO-as-a-service, corporate consultancy, assurance services, visa applications, insurance consultancy, and private clients services through our extended global network.
              </p>
              <p>
                At RDC Corporate, collaboration is at the heart of what we do. We work closely with professionals, bankers, and investment advisors—both locally and internationally—to craft tailored solutions that align with your unique goals.
              </p>
              <p className="text-gray-900 font-semibold text-xl">
                We look forward to supporting your success and helping turn your aspirations into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;