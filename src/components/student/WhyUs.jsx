import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const features = [
    {
      icon: "🎥",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      title: "On-Demand Courses",
      description: "Watch courses, anytime, anywhere and learn at your own pace.",
      emoji: "⚡"
    },
    {
      icon: "⏰",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      title: "Lifetime Access",
      description: "Accessible as long as you need on a one-time payment.",
      emoji: "♾️"
    },
    {
      icon: "🔄",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      title: "Free Upgrades",
      description: "Get free unlimited upgrades whenever we update any of our courses.",
      emoji: "🆓"
    },
    {
      icon: "👥",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      title: "Live Group Sessions",
      description: "Attend live group Q&A sessions with Naimish every month.",
      emoji: "🔴"
    },
    {
      icon: "💬",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      title: "Community Learning",
      description: "Connect and engage with fellow students in a chat-based community.",
      emoji: "🤝"
    },
    {
      icon: "💰",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      title: "Practical & Affordable",
      description: "We only make courses that give you actionable steps at an affordable price.",
      emoji: "✨"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 relative overflow-hidden">
      {/* Subtle background elements for white section */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-black/3 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-black/2 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/1 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="text-center relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div className="mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-6"
          >
            Why Choose Hey.Naimish?
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-black mx-auto rounded-full shadow-lg mb-6"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Discover what makes our learning platform the <motion.span 
              className="text-black font-bold"
              whileHover={{ scale: 1.05 }}
            >perfect choice</motion.span> for your educational journey
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Card Container */}
              <div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 h-full hover:scale-105">

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                  {/* Icon Container */}
                  <div className="relative p-6 bg-black rounded-2xl shadow-lg">
                    <span className="text-4xl text-white drop-shadow-lg">
                      {feature.icon}
                    </span>
                    
                    {/* Static emoji */}
                    <span className="absolute -top-2 -right-2 text-lg">
                      {feature.emoji}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-black">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed font-medium flex-1">
                    {feature.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="w-full h-1 bg-black rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyUs;
