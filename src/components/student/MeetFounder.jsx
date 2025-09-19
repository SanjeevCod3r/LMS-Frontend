import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/assets';

const MeetFounder = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Clients Helped" },
    { number: "100+", label: "Courses Created" }
  ];

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 md:px-40 relative overflow-hidden">
      {/* Subtle background elements for white section */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-black/3 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-black/2 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/1 rounded-full blur-3xl" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          variants={textVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-black mb-6"
          >
            Meet Our Founder
          </motion.h2>
          <motion.div 
            className="w-32 h-1.5 bg-black mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Content - Show first on mobile */}
          <motion.div 
            variants={imageVariants}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Static background circles */}
              <div className="absolute inset-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-black/5 blur-xl" />
              <div className="absolute inset-4 w-56 sm:w-72 md:w-88 h-56 sm:h-72 md:h-88 rounded-full border-2 border-black/20 border-dashed" />

              {/* Simplified logo container */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Static backdrop */}
                <div className="absolute inset-0 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 rounded-full bg-black/5" />
                
                {/* Mobile-Optimized Logo */}
                <img
                  src={assets.Logo1}
                  alt="Naimish Srivastava - Founder"
                  className="relative z-20 w-40 sm:w-48 md:w-60 lg:w-72 h-40 sm:h-48 md:h-60 lg:h-72 object-contain drop-shadow-2xl hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300"
                />

              </div>
                
              {/* Badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-black text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-2xl z-30 border-2 border-white">
                <span>Founder & CEO</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Show second on mobile */}
          <motion.div 
            variants={textVariants}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-black"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Naimish Srivastava
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                <motion.span 
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚡ Engineer
                </motion.span>
                <motion.span 
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black border-2 border-black rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Digital Marketer
                </motion.span>
                <motion.span 
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black text-white rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 Mentor & Coach
                </motion.span>
              </div>
            </div>

            <motion.div 
              className="space-y-6 text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.p 
                className="text-lg md:text-xl font-medium text-gray-700"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I started as an <motion.strong 
                  className="text-black font-bold"
                  whileHover={{ scale: 1.05 }}
                >engineer</motion.strong>, moved into <motion.strong 
                  className="text-black font-bold"
                  whileHover={{ scale: 1.05 }}
                >digital marketing jobs</motion.strong>, and then launched my own journey helping businesses, freelancers, and coaches go online. Over the years, I've worked with startups and professionals to design visual identities, sales funnels, content strategies, and growth campaigns across <motion.strong 
                  className="text-black font-bold"
                  whileHover={{ scale: 1.05 }}
                >Meta ads, SEO, and social media</motion.strong>.
              </motion.p>
              
              <motion.div
                className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p 
                  className="text-lg font-semibold text-black mb-4"
                >
                  Now, I combine that experience into <strong className="text-black">mentorship & courses</strong> that help you:
                </motion.p>
                
                <ul className="space-y-3">
                  {[
                    { icon: "🎯", text: "Identify your niche & position yourself with clarity", color: "from-blue-500 to-blue-600" },
                    { icon: "🛠️", text: "Build your portfolio, landing pages, and content strategy", color: "from-purple-500 to-purple-600" },
                    { icon: "📖", text: "Use storytelling + digital growth tactics to stand out", color: "from-pink-500 to-pink-600" },
                    { icon: "💰", text: "Attract and convert your first paying clients", color: "from-green-500 to-green-600" }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start group cursor-pointer"
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      animate={{ opacity: 1, x: 0 }}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <motion.span 
                        className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <motion.span 
                        className="text-lg font-medium text-gray-700 group-hover:text-black transition-all duration-300"
                      >
                        {item.text}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Mobile-Optimized Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-3 bg-white text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default MeetFounder;
