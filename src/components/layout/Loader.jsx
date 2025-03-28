import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[9999] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex flex-col items-center"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
      >
        {/* Animated Logo or Brand */}
        <motion.div 
          className="w-24 h-24 bg-white rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 100 100" 
            className="w-16 h-16 text-blue-600"
          >
            <motion.path 
              d="M50 10 L90 50 L50 90 L10 50 Z"
              fill="currentColor"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>

        {/* Loading Text */}
        <motion.h2 
          className="text-white text-2xl mt-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading...
        </motion.h2>

        {/* Animated Loading Bar */}
        <motion.div 
          className="w-64 h-2 bg-white/30 rounded-full mt-6 overflow-hidden"
        >
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const WebsiteWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - you can adjust or remove this
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Add event listeners for various loading indicators
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if all images are loaded
    const images = document.getElementsByTagName('img');
    let loadedImages = 0;
    
    const checkAllImagesLoaded = () => {
      loadedImages++;
      if (loadedImages === images.length) {
        setIsLoading(false);
      }
    };

    // Attach load event to images
    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        checkAllImagesLoaded();
      } else {
        images[i].addEventListener('load', checkAllImagesLoaded);
      }
    }

    // Optional: Listen for window load event
    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener('load', checkAllImagesLoaded);
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      
      {/* Main content appears when loading is complete */}
      <div className={`${isLoading ? 'hidden' : 'block'}`}>
        {children}
      </div>
    </>
  );
};

export default WebsiteWrapper;