import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
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
    <div className='flex flex-col items-center space-y-7 text-center'>
      <Hero/>
      <div className="block sm:hidden ">
					<Logger/>
			</div>
      <Companies/>
      <CoursesSection/>
      <WhyUs/>
      <WhoIsItFor/>
      <MeetFounder/>
      <TestimonialsSection/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home
