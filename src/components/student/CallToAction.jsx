import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Login from "../auth/Login";
import Signup from "../auth/Signup";


const CallToAction = () => {
  const { user } = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Whether you're a student looking to enhance your skills or an educator wanting to share knowledge, Hey.Naimish is the perfect platform for you.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        {user ? (
						<Link to="/course-list" className="px-10 py-3 rounded-md text-white bg-blue-600">Get Started</Link>
					) : (
						<button
							onClick={() => setShowSignup(true)}
							className="px-10 py-3 rounded-md text-white bg-blue-600"
						>
							Get Started
						</button>
            )}
        <Link to="/about">
        <button className='flex items-center gap-2'>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
        </Link>
      </div>

			{/* Auth Modals */}
			{showLogin && (
				<Login 
					onClose={() => setShowLogin(false)}
					onSwitchToSignup={() => {
						setShowLogin(false);
						setShowSignup(true);
					}}
				/>
			)}

			{showSignup && (
				<Signup 
					onClose={() => setShowSignup(false)}
					onSwitchToLogin={() => {
						setShowSignup(false);
						setShowLogin(true);
					}}
				/>
			)}
    </div>
  )
}

export default CallToAction
