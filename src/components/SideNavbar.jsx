import { useState, useEffect } from 'react';

export default function SideNavbar() {
  const [isClosed, setIsClosed] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    linkedin: true,
    github: true
  });

  // Update the path for Vite public assets
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Handle missing images
  const handleImageError = (name) => {
    setImagesLoaded(prev => ({
      ...prev,
      [name]: false
    }));
    document.documentElement.style.setProperty('--icon-fallback', 'inline');
  };
  
  const toggleNavbar = () => {
    setIsClosed(!isClosed);
  };

  return (
    <>
      <button 
        className={`side-navbar-toggle ${isClosed ? 'closed' : ''}`} 
        onClick={toggleNavbar}
      >
        {isClosed ? '›' : '‹'}
      </button>
      <div className={`side-navbar ${isClosed ? 'closed' : ''}`}>
        <a 
          href="mailto:itaywagner@gmail.com" 
          data-tooltip="Email"
          className="email-link"
        >
          <span className="email-emoji">✉️</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/itay-wagner-6a3551210/" 
          target="_blank" 
          rel="noopener noreferrer" 
          data-tooltip="LinkedIn"
        >
          {imagesLoaded.linkedin && (
            <img 
              src={`${basePath}logos/linkedin.png`} 
              alt="LinkedIn"
              onError={() => handleImageError('linkedin')} 
            />
          )}
        </a>
        <a 
          href="https://github.com/ItaiWagner" 
          target="_blank" 
          rel="noopener noreferrer" 
          data-tooltip="GitHub"
        >
          {imagesLoaded.github && (
            <img 
              src={`${basePath}logos/github.png`} 
              alt="GitHub"
              onError={() => handleImageError('github')} 
            />
          )}
        </a>
        <a 
          href={`${basePath}cv/resume.pdf`} 
          target="_blank" 
          rel="noopener noreferrer" 
          data-tooltip="Resume"
          className="cv-link"
        >
          <span className="cv-emoji">📄</span>
        </a>
      </div>
    </>
  );
}
