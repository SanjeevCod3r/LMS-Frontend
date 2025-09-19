import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

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

  // Auto-rotate active feature
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Interactive Feature List */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activeFeature === index 
                    ? 'bg-black text-white shadow-2xl scale-105' 
                    : 'bg-white text-black hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: activeFeature === index ? 1.05 : 1.02 }}
                style={{
                  borderRadius: '20px',
                  padding: '20px 24px',
                  border: activeFeature === index ? '2px solid black' : '2px solid #e5e7eb'
                }}
              >
                <div className="flex items-center space-x-6">
                  {/* Feature Number */}
                  <div className={`text-2xl font-bold ${
                    activeFeature === index ? 'text-white' : 'text-gray-400'
                  }`}>
                    {feature.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-3xl">
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${
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
                          className="text-gray-300 leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* Emoji indicator */}
                  <div className="text-xl">
                    {feature.emoji}
                  </div>
                </div>
                
                {/* Active indicator line */}
                {activeFeature === index && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Dynamic Visual Display */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Display Container */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl border border-gray-200 min-h-[400px] flex flex-col justify-center items-center">
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 border border-black/5 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  />
                ))}
              </div>

              {/* Active Feature Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-center relative z-10"
                >
                  {/* Large Icon Display */}
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {features[activeFeature].icon}
                  </motion.div>
                  
                  {/* Feature Title */}
                  <h3 className="text-3xl font-bold text-black mb-4">
                    {features[activeFeature].title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-lg text-gray-700 leading-relaxed max-w-md">
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

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-black text-white p-4 rounded-2xl shadow-xl"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-2xl">{features[activeFeature].emoji}</span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white border-2 border-black p-3 rounded-xl shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="text-xl font-bold text-black">{features[activeFeature].number}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
