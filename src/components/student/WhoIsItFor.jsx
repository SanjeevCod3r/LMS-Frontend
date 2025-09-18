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
    <div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 relative overflow-hidden">
      {/* Curved bottom design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-blue-100/30"></path>
        </svg>
      </div>
      {/* Static background elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-2xl" />

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
            className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Who is Hey.Naimish For?
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
            Our courses are designed for <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
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
              {/* Simplified Card Container */}
              <div className={`relative bg-gradient-to-br ${audience.bgGradient} p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl border border-white/50 transition-shadow duration-300 h-full`}>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                  {/* Simplified Icon Container */}
                  <div className={`relative p-6 bg-gradient-to-r ${audience.gradient} rounded-2xl shadow-lg`}>
                    <span className="text-4xl text-white drop-shadow-lg">
                      {audience.icon}
                    </span>
                    
                    {/* Static emoji */}
                    <span className="absolute -top-2 -right-2 text-lg">
                      {audience.emoji}
                    </span>
                  </div>

                  {/* Simplified Title */}
                  <h3 className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${audience.gradient} bg-clip-text text-transparent`}>
                    {audience.title}
                  </h3>

                  {/* Simplified Description */}
                  <p className="text-gray-700 leading-relaxed font-medium flex-1">
                    {audience.description}
                  </p>

                  {/* Simple bottom accent */}
                  <div className={`w-full h-1 bg-gradient-to-r ${audience.gradient} rounded-full opacity-50`} />
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
