import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
    <div className="relative w-full min-h-screen py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-xl" />

      {/* Curved top design */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white/50"></path>
        </svg>
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg mb-8"
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
            Find answers to common questions about <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Hey.Naimish</span>. Can't find what you're looking for? Feel free to contact our support team.
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
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                  whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.02)" }}
                >
                  <span className="text-xl md:text-2xl font-semibold text-gray-800 pr-4 group-hover:text-blue-600 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.div 
                    className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-4 h-4 text-white"
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Support Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-10 border border-white/50 shadow-lg">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Still have questions? 🤔
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Our support team is here to help you 24/7
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Support
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
