import { useState, useEffect } from 'react';

export const useLoader = (minLoadingTime = 3000) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    
    // Simulate loading time with minimum duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minLoadingTime);

    // Also check if the page is fully loaded
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
      
      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [minLoadingTime]);

  return isLoading;
};
