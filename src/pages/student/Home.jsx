import React from 'react'
import Hero from '../../components/student/Hero'
import CoursesSection from '../../components/student/CoursesSection'
import WhyUs from '../../components/student/WhyUs'
import WhoIsItFor from '../../components/student/WhoIsItFor'
import MeetFounder from '../../components/student/MeetFounder'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import FAQ from '../../components/student/FAQ'
import Footer from '../../components/student/Footer'
import Logger from '../../components/Logger'

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      {/* Beautiful Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50/30" />
        
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-green-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse" />
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-bounce" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400/20 rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full animate-pulse" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className='relative flex flex-col items-center space-y-7 text-center'>
        <Hero/>
        <div className="block sm:hidden ">
          <Logger/>
        </div>
        <CoursesSection/>
        <WhyUs/>
        <WhoIsItFor/>
        <MeetFounder/>
        <TestimonialsSection/>
        <FAQ/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
