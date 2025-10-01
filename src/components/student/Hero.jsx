import React, { useState, useEffect } from 'react'
import frontVideo from '../../assets/frontvideo.mp4'
import SearchBar from './SearchBar'
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const dynamicWords = [
    "Personal Brand",
    "Online Presence", 
    "Success Story",
    "Dream Business"
  ];

  const stats = [
    { label: "Live 1-on-1 Mentorship", icon: "👨‍🏫" },
    { label: "Weekly Sessions", icon: "📅" },
    { label: "Practical & Affordable", icon: "💡" },
    { label: "Get Certifications", icon: "🏅" }
  ];

  // Auto-rotate words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMentorshipClick = () => {
    window.open('https://wa.link/dv21xs', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='relative flex flex-col items-center justify-center w-full max-w-full min-h-screen px-4 sm:px-6 md:px-8 text-center overflow-hidden'>
      
      {/* Amazing Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-black/5 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-black/5 rounded-full"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(black 1px, transparent 1px),
              linear-gradient(90deg, black 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Rotating Rings */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-black/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-black/5 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto space-y-8 md:space-y-12 py-20">

        {/* Dynamic Headline */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="space-y-4">
            <motion.h1 
              className='text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black max-w-6xl mx-auto leading-tight px-2'
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              🚀 Build Your{" "}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 20, rotateX: 90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: -90 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="inline-block bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent font-black"
                  >
                    {dynamicWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-6 px-4"
          >
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] bg-white">
              <div className="absolute -inset-1 bg-gradient-to-r from-black/10 via-gray-400/10 to-black/10 rounded-3xl blur-2xl pointer-events-none" />
              <video
                src={frontVideo}
                autoPlay
                muted
                loop
                playsInline
                className="relative w-full h-auto aspect-video"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Sub-Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <p className='text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed font-medium px-4'>
          Master Digital Marketing Hands-On <motion.span 
              className="text-black font-bold bg-black/5 px-2 py-1 rounded-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.1)" }}
            >No Agency Fees, No Boring Lectures, No Endless Workshops</motion.span>.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto py-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center p-5 md:p-6 bg-white/90 backdrop-blur-sm border border-black/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition"
              whileHover={{ 
                scale: 1.04,
                y: -4,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                backgroundColor: "rgba(255,255,255,0.96)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-3xl md:text-4xl mb-3 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-black/5 border border-black/10"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-sm md:text-base text-gray-800 font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 px-4"
        >
          <motion.button 
            className="group relative w-full sm:w-auto px-10 py-4 bg-black text-white font-bold rounded-full shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreClick}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center justify-center text-lg">
              <motion.span 
                className="inline-block mr-3 text-xl"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                🚀
              </motion.span>
              Explore Courses
            </span>
          </motion.button>
          
          <motion.button 
            className="group w-full sm:w-auto px-10 py-4 bg-white text-black border-2 border-black font-bold rounded-full transition-all duration-300 hover:bg-black hover:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMentorshipClick}
          >
            <span className="flex items-center justify-center text-lg">
              <motion.span 
                className="inline-block mr-3 text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                📞
              </motion.span>
              Book Mentorship Call
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="pt-8 w-full max-w-2xl mx-auto"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SearchBar />
          </motion.div>
        </motion.div>

        

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-12 hidden md:flex flex-col items-center"
        >
          <p className="text-gray-500 text-sm mb-4 font-medium">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-black/40 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
