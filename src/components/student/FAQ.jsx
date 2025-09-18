import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is Edemy LMS?",
      answer: "Edemy LMS is a comprehensive Learning Management System designed to help students learn new skills and educators share their knowledge. Our platform offers a wide range of courses across various subjects with interactive content and expert instructors."
    },
    {
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, simply browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll need to create an account if you haven't already, and then you can proceed with the enrollment process."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Yes! Edemy LMS is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. You can learn anywhere, anytime with our mobile-friendly platform."
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer: "Yes, upon successful completion of a course, you'll receive a certificate of completion that you can download and share on your professional profiles like LinkedIn."
    },
    {
      question: "How can I become an educator on Edemy?",
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
    <div className="pb-14 px-8 md:px-0 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="md:text-base text-gray-500">
          Find answers to common questions about Edemy LMS. Can't find what you're looking for? 
          <br className="hidden md:block" />
          Feel free to contact our support team.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
            >
              <span className="text-lg font-medium text-gray-800 pr-4">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
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
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-500 mb-4">
          Still have questions?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition-colors duration-200"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
};

export default FAQ;
