import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
  icon?: React.ReactNode;
  titleColor?: string;
  descriptionColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  // Updated default path - make sure this matches your actual file location
  backgroundImage = '/8. singapore-skyline-at-the-marina-during-twilight-2025-03-25-03-01-37-utc.jpg',
  icon,
  titleColor = '#5AB9EA',
  descriptionColor = '#ffffff'
}) => {
  // Add error handling for image loading
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = backgroundImage;
  }, [backgroundImage]);

  const backgroundStyle = React.useMemo(() => {
    if (imageLoaded && !imageError) {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };
    }
    return {
      backgroundImage: 'linear-gradient(135deg, #1b2c6a 0%, #2563eb 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  }, [imageLoaded, imageError, backgroundImage]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-32"
      style={backgroundStyle}
    >
      {/* Loading indicator */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center z-5">
          <div className="text-white text-lg">Loading...</div>
        </div>
      )}
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16">
        <div className="bg-gray-800 bg-opacity-40 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          {icon && (
            <div className="flex items-center justify-center gap-4 mb-6">
              {React.cloneElement(icon as React.ReactElement, { 
                className: "w-16 h-16",
                style: { color: titleColor }
              })}
            </div>
          )}
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans fade-in drop-shadow-2xl text-shadow-lg"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
          {description && (
            <p 
              className="text-xl max-w-3xl mx-auto font-body font-medium text-shadow-xl"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;