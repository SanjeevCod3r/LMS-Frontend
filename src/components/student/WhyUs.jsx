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
    <div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Curved bottom design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-purple-100/30"></path>
        </svg>
      </div>
      {/* Static background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-xl" />

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
            className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Why Choose Hey.Naimish?
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg mb-6"
            animate={{
              scaleX: [1, 1.2, 1],
              boxShadow: [
                "0 4px 15px rgba(59, 130, 246, 0.3)",
                "0 4px 25px rgba(147, 51, 234, 0.5)",
                "0 4px 15px rgba(236, 72, 153, 0.3)",
                "0 4px 15px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Discover what makes our learning platform the <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
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
              {/* Simplified Card Container */}
              <div className={`relative bg-gradient-to-br ${feature.bgGradient} p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl border border-white/50 transition-shadow duration-300 h-full`}>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                  {/* Simplified Icon Container */}
                  <div className={`relative p-6 bg-gradient-to-r ${feature.gradient} rounded-2xl shadow-lg`}>
                    <span className="text-4xl text-white drop-shadow-lg">
                      {feature.icon}
                    </span>
                    
                    {/* Static emoji */}
                    <span className="absolute -top-2 -right-2 text-lg">
                      {feature.emoji}
                    </span>
                  </div>

                  {/* Simplified Title */}
                  <h3 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.title}
                  </h3>

                  {/* Simplified Description */}
                  <p className="text-gray-700 leading-relaxed font-medium flex-1">
                    {feature.description}
                  </p>

                  {/* Simple bottom accent */}
                  <div className={`w-full h-1 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50`} />
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
