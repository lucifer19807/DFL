import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [displayLocation, setDisplayLocation] = useState(useLocation());
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      setTransitionStage('fadeOut');
    }
  }, [location.pathname, displayLocation.pathname]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      timeoutRef.current = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        
        // Allow a brief moment for the new content to render
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 200);
    }
  }, [transitionStage, location]);

  return (
    <div className="relative">
      {/* Loading overlay */}
     
      
      {/* Page content */}
      <div
        className={`transition-all duration-300 ease-out ${
          transitionStage === 'fadeOut'
            ? 'opacity-0 transform translate-y-6 scale-98'
            : 'opacity-100 transform translate-y-0 scale-100'
        }`}
        style={{
          minHeight: '100vh',
          willChange: transitionStage === 'fadeOut' ? 'transform, opacity' : 'auto'
        }}
      >
        {React.cloneElement(children, { key: displayLocation.pathname })}
      </div>
    </div>
  );
};

export default PageTransition; 