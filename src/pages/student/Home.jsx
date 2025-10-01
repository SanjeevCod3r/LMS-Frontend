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
      {/* Content with alternating black/white sections */}
      <div className='relative flex flex-col text-center'>
        {/* Section 1: Hero - White */}
        <div className="section-white">
          <Hero/>
          <div className="block sm:hidden">
            <Logger/>
          </div>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 2: Courses - Black */}
        <div id="courses" className="section-black">
          <CoursesSection/>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 3: Why Us - White */}
        <div className="section-white">
          <WhyUs/>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 4: Who Is It For - Black */}
        <div className="section-black">
          <WhoIsItFor/>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 5: Meet Founder - White */}
        <div className="section-white">
          <MeetFounder/>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 6: Testimonials - Black */}
        <div className="section-black">
          <TestimonialsSection/>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 7: FAQ - White */}
        <div className="section-white">
          <FAQ/>
        </div>
        
        {/* Section Divider */}
        <div className="section-divider"></div>
        
        {/* Section 8: Footer - Black */}
        <div className="section-black">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
