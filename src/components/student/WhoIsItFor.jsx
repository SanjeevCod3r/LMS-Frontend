import React from 'react';
import { motion } from 'framer-motion';

const WhoIsItFor = () => {
  const targetAudience = [
    {
      icon: "🎓",
      title: "Students",
      description: "Learn digital marketing concepts not covered in traditional schooling and build real-world skills.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      emoji: "📚",
      color: "blue"
    },
    {
      icon: "💼",
      title: "Working Professionals",
      description: "Develop essential digital marketing skills to enhance career growth and boost productivity.",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      emoji: "📈",
      color: "green"
    },
    {
      icon: "💻",
      title: "Freelancers",
      description: "Discover strategies to grow, manage, and scale your freelance business with digital marketing.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      emoji: "🚀",
      color: "purple"
    },
    {
      icon: "🔄",
      title: "Career Shifters",
      description: "Get the guidance needed to pivot confidently into digital marketing and online business.",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      emoji: "🎯",
      color: "orange"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Entrepreneurs",
      description: "Learn to build and market your business online while managing time and personal growth.",
      gradient: "from-pink-500 to-pink-600",
      bgGradient: "from-pink-50 to-pink-100",
      emoji: "💡",
      color: "pink"
    },
    {
      icon: "⭐",
      title: "Dreamers & Creators",
      description: "Gain insights and strategies to turn your passion into a profitable online presence.",
      gradient: "from-indigo-500 to-indigo-600",
      bgGradient: "from-indigo-50 to-indigo-100",
      emoji: "✨",
      color: "indigo"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 relative overflow-hidden">
      {/* Subtle background elements for black section */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/3 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center relative z-10"
      >
        {/* Enhanced Header */}
        <motion.div className="mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Who is Hey.Naimish For?
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1.5 bg-white mx-auto rounded-full shadow-lg mb-6"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed px-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our courses are designed for <motion.span 
              className="text-white font-bold"
              whileHover={{ scale: 1.05 }}
            >ambitious learners</motion.span> from all walks of life, each with unique goals and aspirations
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {targetAudience.map((audience, index) => (
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
                      {audience.icon}
                    </span>
                    
                    {/* Static emoji */}
                    <span className="absolute -top-2 -right-2 text-lg">
                      {audience.emoji}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-black">
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed font-medium flex-1">
                    {audience.description}
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

export default WhoIsItFor;
