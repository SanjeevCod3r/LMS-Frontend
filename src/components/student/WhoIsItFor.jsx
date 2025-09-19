import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhoIsItFor = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeParticles, setActiveParticles] = useState([]);

  const targetAudience = [
    {
      icon: "🎓",
      title: "Students",
      description: "Learn digital marketing concepts not covered in traditional schooling and build real-world skills.",
      emoji: "📚",
      stats: "2K+ Students",
      highlight: "Future Leaders"
    },
    {
      icon: "💼",
      title: "Working Professionals",
      description: "Develop essential digital marketing skills to enhance career growth and boost productivity.",
      emoji: "📈",
      stats: "1.5K+ Professionals",
      highlight: "Career Growth"
    },
    {
      icon: "💻",
      title: "Freelancers",
      description: "Discover strategies to grow, manage, and scale your freelance business with digital marketing.",
      emoji: "🚀",
      stats: "800+ Freelancers",
      highlight: "Business Scale"
    },
    {
      icon: "🔄",
      title: "Career Shifters",
      description: "Get the guidance needed to pivot confidently into digital marketing and online business.",
      emoji: "🎯",
      stats: "600+ Shifters",
      highlight: "New Beginnings"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Entrepreneurs",
      description: "Learn to build and market your business online while managing time and personal growth.",
      emoji: "💡",
      stats: "400+ Entrepreneurs",
      highlight: "Business Builders"
    },
    {
      icon: "⭐",
      title: "Dreamers & Creators",
      description: "Gain insights and strategies to turn your passion into a profitable online presence.",
      emoji: "✨",
      stats: "1K+ Creators",
      highlight: "Dream Achievers"
    }
  ];

  // Generate floating particles
  useEffect(() => {
    const particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setActiveParticles(particles);
  }, []);

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 relative overflow-hidden min-h-screen">
      {/* Amazing Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(white 1px, transparent 1px),
              linear-gradient(90deg, white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        {activeParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Large Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 border border-white/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 border border-white/5 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Diagonal Lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: '-50%',
                right: '-50%',
                transform: 'rotate(-15deg)',
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8"
            animate={{
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Who is Hey.Naimish For?
          </motion.h2>
          
          <motion.div 
            className="w-40 h-2 bg-white mx-auto rounded-full shadow-2xl mb-8"
            animate={{
              scaleX: [1, 1.2, 1],
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Our courses are designed for <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">ambitious learners</span> from all walks of life, each with unique goals and aspirations
          </motion.p>
        </motion.div>

        {/* Revolutionary Hexagonal Grid Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Hexagonal Container */}
                <div className="relative">
                  {/* Glowing Background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-3xl blur-xl"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      opacity: hoveredIndex === index ? 0.3 : 0.1,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Main Card */}
                  <motion.div
                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8 h-full"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Floating Icon */}
                    <motion.div
                      className="relative mb-6 flex justify-center"
                      animate={{
                        y: hoveredIndex === index ? [-5, 5, -5] : [0, -2, 0],
                        rotate: hoveredIndex === index ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{
                        duration: hoveredIndex === index ? 1 : 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="relative">
                        {/* Icon Glow */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        />
                        
                        {/* Icon Container */}
                        <div className="relative bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6">
                          <span className="text-5xl block">
                            {audience.icon}
                          </span>
                        </div>
                        
                        {/* Floating Emoji */}
                        <motion.span
                          className="absolute -top-2 -right-2 text-2xl"
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        >
                          {audience.emoji}
                        </motion.span>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {audience.title}
                      </h3>
                      
                      {/* Highlight Badge */}
                      <motion.div
                        className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-white font-semibold text-sm">
                          {audience.highlight}
                        </span>
                      </motion.div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed font-medium mb-6">
                        {audience.description}
                      </p>

                      {/* Stats */}
                      <motion.div
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4"
                        whileHover={{ 
                          backgroundColor: "rgba(255,255,255,0.15)",
                          scale: 1.02
                        }}
                      >
                        <span className="text-white font-bold text-lg">
                          {audience.stats}
                        </span>
                        <p className="text-gray-400 text-sm mt-1">
                          Already Learning
                        </p>
                      </motion.div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            className="bg-white text-black font-bold text-lg px-12 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255,255,255,0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Find Your Perfect Course ✨
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoIsItFor;
