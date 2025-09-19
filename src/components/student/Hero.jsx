import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='relative flex flex-col items-center justify-center w-full max-w-full md:pt-40 pt-16 px-4 sm:px-6 md:px-0 pb-12 md:pb-20 text-center overflow-hidden'>
      
      {/* Subtle background elements for white section */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-black/3 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-black/2 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/1 rounded-full blur-3xl" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-6xl w-full mx-auto space-y-6 md:space-y-8"
      >
        {/* Enhanced Headline */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black max-w-5xl mx-auto leading-tight px-2'>
            <span className="inline-block">✨</span>{" "}
            Build, Grow & Monetize Your Personal Brand
          </h1>
          
          <div className="w-40 h-1.5 bg-black mx-auto rounded-full shadow-lg" />
        </motion.div>

        {/* Enhanced Sub-Headline */}
        <motion.div variants={itemVariants}>
          <p className='text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-4'>
            Blending <span className="text-black font-bold">storytelling, strategy & digital growth</span>, I help coaches, creators & professionals discover their niche, design their identity, and land their first clients — without agency costs or endless workshops.
          </p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 md:pt-8 px-4"
        >
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 btn-black font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg">
            <span className="inline-block mr-2">🚀</span>
            Explore Courses
          </button>
          
          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 btn-outline-black font-bold rounded-full transition-all duration-300 text-base sm:text-lg">
            <span className="inline-block mr-2">📞</span>
            Book Mentorship Call
          </button>
        </motion.div>

        {/* Simplified Search Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-6 md:pt-8 w-full"
        >
          <SearchBar />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero
