import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const SiteLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Pulsing circles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo container with animations */}
        <motion.div
          className="relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
        >
          {/* Rotating ring around logo */}
          <motion.div
            className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-white border-r-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-2 w-28 h-28 border-2 border-transparent border-b-white border-l-white rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Logo with pulse effect */}
          <motion.div
            className="relative z-10 w-32 h-32 flex items-center justify-center bg-white rounded-full shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 40px rgba(255, 255, 255, 0.6)",
                "0 0 20px rgba(255, 255, 255, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.img
              src={assets.Logo1}
              alt="Hey.Naimish Logo"
              className="w-20 h-20 object-contain"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

        {/* Brand name with typewriter effect */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Hey.Naimish
          </motion.h1>
        </motion.div>

        {/* Loading progress bar */}
        <motion.div
          className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-white via-gray-200 to-white rounded-full"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-white text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 2.5
          }}
        >
          Loading amazing content...
        </motion.p>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      />
    </div>
  );
};

export default SiteLoader;
