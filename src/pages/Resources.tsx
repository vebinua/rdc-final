import React from 'react';
import PageHeader from '../components/PageHeader';

const Resources: React.FC = () => {
  return (
    <div className="text-white">
      {/* Header Banner Section */}
      <header role="banner" className="relative">
        {/* Background Image Container */}
        <div 
          id="header-background"
          className="header-background absolute inset-0"
          style={{
            backgroundImage: 'url(/marinabay3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            imageRendering: 'crisp-edges',
            filter: 'contrast(1.1) saturate(1.05) brightness(1.02)',
            zIndex: -1
          }}
        />

        {/* Background Overlay */}
        <div 
          id="header-overlay"
          className="header-overlay absolute inset-0 z-10 bg-gradient-to-br from-black/40 via-black/30 to-black/50"
        >
          {/* Radial overlay for focus */}
          <div 
            id="header-radial-overlay"
            className="header-radial-overlay absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/40 pb-8"
          />
        </div>
        
        {/* Main Hero Section */}
        <section
          id="hero-section"
          className="hero-section relative min-h-screen flex items-center justify-center"
        >
          {/* Content Container */}
          <div 
            id="hero-content-container"
            className="hero-content-container relative z-20 text-center text-white px-6 max-w-7xl mx-auto"
          >
            <div 
              id="hero-content-wrapper"
              className="hero-content-wrapper py-12 md:py-16 font-sans"
            >
              {/* Main Heading */}
              <h1 
                id="main-heading"
                className="main-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
              >
                Resources
              </h1>
              
              {/* Subheading */}
              <h2 
                id="sub-heading"
                className="sub-heading text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-8 text-white/95 drop-shadow-xl"
              >
                Coming Soon
              </h2>
              
              {/* Description Section */}
              <div 
                id="description-section"
                className="description-section max-w-5xl mx-auto mb-12"
              >
                <p 
                  id="main-description"
                  className="main-description text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-white/90 leading-relaxed font-light drop-shadow-lg"
                >
                  Your comprehensive resource center for business insights and guidance
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Visual Separation Element */}
      <div className="relative z-20">
        {/* Decorative separator with gradient and shadow */}
        <div className="h-4 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
        
        {/* Main separator bar with brand colors */}
        <div className="relative overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#5680E9] via-[#5AB9EA] to-[#84CEEB] shadow-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
        
        {/* Bottom shadow for depth */}
        <div className="h-6 bg-gradient-to-b from-[#C1C8E4]/10 to-transparent"></div>
      </div>

      {/* Content Section */}
      <section 
        className="py-20 relative" 
        style={{ backgroundColor: '#C1C8E4' }}
        aria-label="Resources content"
      >
        {/* Subtle top border for additional separation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-2xl shadow-lg" style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }}>
              <h2 className="text-3xl font-bold mb-6 font-sans text-white">
                Resources Coming Soon
              </h2>
              <p className="text-lg leading-relaxed font-body text-white">
                We're preparing a comprehensive collection of resources to help you navigate the complexities of business in Singapore and across Asia. Stay tuned for valuable insights, guides, and tools.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;