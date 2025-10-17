import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device for animation optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: "🎥",
      title: "On-Demand Courses",
      description: "Watch courses, anytime, anywhere and learn at your own pace.",
      emoji: "⚡",
      number: "01"
    },
    {
      icon: "⏰",
      title: "Lifetime Access",
      description: "Accessible as long as you need on a one-time payment.",
      emoji: "♾️",
      number: "02"
    },
    {
      icon: "🔄",
      title: "Free Upgrades",
      description: "Get free unlimited upgrades whenever we update any of our courses.",
      emoji: "🆓",
      number: "03"
    },
    {
      icon: "👥",
      title: "Live Group Sessions",
      description: "Attend live group Q&A sessions with Naimish every month.",
      emoji: "🔴",
      number: "04"
    },
    {
      icon: "💬",
      title: "Community Learning",
      description: "Connect and engage with fellow students in a chat-based community.",
      emoji: "🤝",
      number: "05"
    },
    {
      icon: "💰",
      title: "Practical & Affordable",
      description: "We only make courses that give you actionable steps at an affordable price.",
      emoji: "✨",
      number: "06"
    }
  ];

  // Removed auto-rotation - now only changes when user clicks

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 relative overflow-hidden">
      {/* Subtle background elements for white section */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-black/3 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-black/2 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/1 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-6"
          >
            Why Choose Hey.Naimish?
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-black mx-auto rounded-full shadow-lg mb-6"
          />
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4"
          >
            Discover what makes our learning platform the <span className="text-black font-bold">perfect choice</span> for your educational journey
          </motion.p>
        </motion.div>

        {/* New Amazing Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Interactive Feature List */}
          <motion.div 
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all ${isMobile ? 'duration-300' : 'duration-500'} overflow-hidden ${
                  activeFeature === index 
                    ? 'bg-black text-white shadow-2xl scale-105' 
                    : 'bg-white text-black hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={isMobile ? {} : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  borderRadius: '16px',
                  padding: '16px 20px',
                  border: activeFeature === index ? '2px solid black' : '2px solid #e5e7eb'
                }}
              >
                {/* Active indicator line - Enhanced for mobile */}
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full z-10"
                      layoutId="activeIndicator"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={isMobile ? 
                        { duration: 0.2, ease: "easeOut" } : 
                        { 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30,
                          duration: 0.4
                        }
                      }
                      style={{ transformOrigin: "center" }}
                    />
                  )}
                </AnimatePresence>

                <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6 relative z-20">
                  {/* Feature Number - Mobile Optimized */}
                  <div className={`text-lg md:text-xl lg:text-2xl font-bold flex-shrink-0 ${
                    activeFeature === index ? 'text-white' : 'text-gray-400'
                  }`}>
                    {feature.number}
                  </div>
                  
                  {/* Icon - Mobile Optimized */}
                  <div className="text-2xl md:text-3xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  
                  {/* Content - Mobile Optimized */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 ${
                      activeFeature === index ? 'text-white' : 'text-black'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    <AnimatePresence>
                      {activeFeature === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-300 leading-relaxed text-sm md:text-base"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Emoji indicator - Mobile Optimized */}
                  <div className="text-lg md:text-xl flex-shrink-0">
                    {feature.emoji}
                  </div>
                </div>

              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Dynamic Visual Display */}
          <motion.div 
            className="relative mt-8 lg:mt-0 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Display Container - Mobile Optimized */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200 min-h-[300px] md:min-h-[400px] flex flex-col justify-center items-center">
              
              {/* Simplified Background Pattern */}
              {!isMobile && (
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 border border-black/2 rounded-full"
                      style={{
                        top: `${30 + i * 40}%`,
                        left: `${30 + i * 30}%`,
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: i * 2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Active Feature Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={isMobile ? 
                    { opacity: 0, y: 20 } : 
                    { opacity: 0, scale: 0.8, rotateY: 90 }
                  }
                  animate={isMobile ? 
                    { opacity: 1, y: 0 } : 
                    { opacity: 1, scale: 1, rotateY: 0 }
                  }
                  exit={isMobile ? 
                    { opacity: 0, y: -20 } : 
                    { opacity: 0, scale: 0.8, rotateY: -90 }
                  }
                  transition={isMobile ? 
                    { duration: 0.3, ease: "easeOut" } : 
                    { duration: 0.5, type: "spring" }
                  }
                  className="text-center relative z-10"
                >
                  {/* Large Icon Display - Mobile Optimized */}
                  <motion.div
                    className="text-6xl md:text-7xl lg:text-8xl mb-4 md:mb-6"
                    animate={isMobile ? {} : { 
                      scale: [1, 1.05, 1]
                    }}
                    transition={isMobile ? {} : { 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {features[activeFeature].icon}
                  </motion.div>
                  
                  {/* Feature Title - Mobile Optimized */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3 md:mb-4 px-2">
                    {features[activeFeature].title}
                  </h3>
                  
                  {/* Feature Description - Mobile Optimized */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-sm md:max-w-md px-2">
                    {features[activeFeature].description}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {features.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === activeFeature ? 'bg-black' : 'bg-gray-300'
                        }`}
                        animate={{
                          scale: index === activeFeature ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simplified Floating Elements - Desktop Only */}
            {!isMobile && (
              <>
                <motion.div
                  className="absolute -top-4 -right-4 bg-black text-white p-3 rounded-xl shadow-lg"
                  animate={{
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-xl">{features[activeFeature].emoji}</span>
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white border-2 border-black p-2 rounded-lg shadow-lg"
                  animate={{
                    y: [0, 5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.5
                  }}
                >
                  <span className="text-lg font-bold text-black">{features[activeFeature].number}</span>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
