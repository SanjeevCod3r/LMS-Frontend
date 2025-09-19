import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { assets } from '../../assets/assets'

const Loading = () => {

  const {path} = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    if (path) {
      const timer = setTimeout(() => {
        navigate(`/${path}`);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className='min-h-[50vh] flex flex-col items-center justify-center space-y-6'>
      {/* Logo with rotation */}
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
          <img
            src={assets.Logo1}
            alt="Loading"
            className="w-10 h-10 object-contain"
          />
        </div>
      </motion.div>

      {/* Loading dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-black rounded-full"
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
      </div>

      {/* Loading text */}
      <motion.p
        className="text-gray-600 text-sm font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading...
      </motion.p>
    </div>
  )
}

export default Loading
