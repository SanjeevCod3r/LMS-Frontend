import React from 'react';
import { motion } from 'framer-motion';

const WhoIsItFor = () => {
  const targetAudience = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: "Students",
      description: "Learn concepts that are not covered in traditional schooling.",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      hoverBg: "hover:bg-blue-100"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "Working Professionals",
      description: "Develop essential skills to enhance their career and boost productivity.",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      hoverBg: "hover:bg-green-100"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Freelancers",
      description: "Discover ways to grow, manage, and streamline your freelance business.",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      hoverBg: "hover:bg-purple-100"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Career Shifters",
      description: "Get the guidance needed to pivot confidently into a new field.",
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      hoverBg: "hover:bg-orange-100"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Parents",
      description: "Manage time and personal growth while balancing family needs.",
      gradient: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      hoverBg: "hover:bg-pink-100"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Dreamers",
      description: "Gain insights and strategies to create their own journey.",
      gradient: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverBg: "hover:bg-indigo-100"
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
    <div className="py-16 md:px-40 px-8 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Who is WebVeda For?
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-base text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Our courses are designed for learners from all walks of life, each with unique goals and aspirations
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((audience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className={`group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 ${audience.hoverBg} overflow-hidden cursor-pointer`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-300"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon container with hover effect */}
                <div className={`p-4 ${audience.bgColor} rounded-full group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg`}>
                  <div className="group-hover:animate-pulse">
                    {audience.icon}
                  </div>
                </div>
                
                {/* Title with hover effect */}
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {audience.title}
                </h3>
                
                {/* Description with hover effect */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {audience.description}
                </p>
                
                {/* Hover indicator */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
              
              {/* Floating particles effect on hover */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200"></div>
              <div className="absolute top-1/2 left-2 w-1 h-1 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-300"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhoIsItFor;
