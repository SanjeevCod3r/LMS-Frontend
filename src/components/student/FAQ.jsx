import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  const faqData = [
    {
      question: "What is Hey.Naimish?",
      answer: "Hey.Naimish is a comprehensive Learning Management System designed to help students learn new skills and educators share their knowledge. Our platform offers a wide range of courses across various subjects with interactive content and expert instructors."
    },
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll need to create an account if you haven't already, and then you can proceed with the enrollment process."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Hey.Naimish is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. You can learn anywhere, anytime with our mobile-friendly platform."
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Yes, upon successful completion of a course, you'll receive a certificate of completion that you can download and share on your professional profiles like LinkedIn."
    },
    {
      question: "How can I become an educator on Hey.Naimish?",
      answer: "To become an educator, click on the 'Become an Educator' option in the navigation menu. You'll need to create an educator account, provide your credentials, and once approved, you can start creating and publishing courses."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and digital payment methods. All transactions are secure and encrypted to protect your financial information."
    },
    {
      question: "Can I get a refund if I'm not satisfied with a course?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with a course within 30 days of enrollment, you can request a full refund through your account dashboard."
    },
    {
      question: "How do I track my learning progress?",
      answer: "Your learning progress is automatically tracked as you complete lessons and assignments. You can view your progress in the 'My Enrollments' section of your dashboard, which shows completion percentages and upcoming deadlines."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen py-20 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Amazing Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
        
        {/* Interactive Mouse Follower */}
        {!isMobile && (
          <motion.div
            className="absolute w-80 h-80 bg-black/5 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 160,
              y: mousePosition.y - 160,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
        )}

        {/* Floating Question Mark Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-black/5 font-bold pointer-events-none select-none"
            style={{
              fontSize: Math.random() * 40 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            ?
          </motion.div>
        ))}

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, black 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, black 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Animated Lines */}
        {!isMobile && [...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
            style={{
              top: `${25 + i * 20}%`,
              left: '-50%',
              right: '-50%',
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Corner Decorations */}
        <motion.div
          className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-black/10"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-black/10"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-black/10"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-black/10"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="w-40 h-2 bg-black mx-auto rounded-full shadow-lg mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Find answers to common questions about <span className="text-black font-semibold">Hey.Naimish</span>. Can't find what you're looking for? Feel free to contact our support team.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  backgroundColor: "rgba(255,255,255,0.95)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 opacity-0"
                  animate={{ 
                    opacity: openIndex === index ? 0.1 : 0,
                    scale: openIndex === index ? 1.02 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Question number */}
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center"
                      animate={{
                        backgroundColor: openIndex === index ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)",
                        scale: openIndex === index ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-sm font-bold text-black">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                    
                    {/* Question text */}
                    <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-black transition-colors duration-300 flex-1">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Enhanced toggle button */}
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center ml-4"
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3, type: "spring" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-100 pt-5">
                          <motion.p 
                            className="text-lg text-gray-600 leading-relaxed"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Contact Support Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 opacity-50" />
            
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-6xl mb-6"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🤔
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Still have questions?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you 24/7. Get instant answers to your questions!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Support
                </motion.a>
                
                <motion.a
                  href="mailto:support@heynaimish.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black border-2 border-black text-lg font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
