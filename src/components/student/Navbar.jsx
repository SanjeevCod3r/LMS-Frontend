import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Logger from "../Logger";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const Navbar = () => {


	const isCourseListPage = location.pathname.includes("/course-list");
	const {navigate, backendUrl} = useContext(AppContext);
	const { user, isEducator, setIsEducator, getToken, logout, updateRoleToEducator } = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);

	const becomeEducator = async () => {
		if(isEducator){
			navigate('/educator')
			return;
		}

		const result = await updateRoleToEducator();
		if (result.success) {
			navigate('/educator');
		}
	}

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<div
			className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-3 ${
				isCourseListPage ? "bg-white" : "bg-cyan-100/70"
			} `}
		>
			<img onClick={()=>navigate('/')}
				src={assets.logo}
				alt="Logo"
				className="w-28 lg:w-32  cursor-pointer"
			/>
			<div className="hidden md:flex items-center gap-5 text-gray-500">
				<div className="flex items-center gap-5">
					<Logger/>
				</div>
				<div className="flex items-center gap-5">
					{user && (
						<>
							<button onClick={becomeEducator}>{isEducator ? "Educator Dashboard" : "Become Educator" }</button>|{" "}
							<Link to="/my-enrollments">My Enrollments</Link>
						</>
					)}
				</div>

				{user ? (
					<div className="flex items-center gap-3">
						<img 
							src={user.imageUrl || assets.user_icon} 
							alt="Profile" 
							className="w-8 h-8 rounded-full"
						/>
						<span className="text-sm font-medium">{user.name}</span>
						<button
							onClick={handleLogout}
							className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
						>
							Logout
						</button>
					</div>
				) : (
					<div className="flex gap-2">
						<button
							onClick={() => setShowLogin(true)}
							className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
						>
							Login
						</button>
						<button
							onClick={() => setShowSignup(true)}
							className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
						>
							Sign Up
						</button>
					</div>
				)}
			</div>
			<div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
				{/* for phone scree  */}
				
				<div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
        {user && (
						<>
						<button onClick={becomeEducator}>{isEducator ? "Educator Dashboard" : "Become Educator" }</button>|{" "}
						<Link to="/my-enrollments">My Enrollments</Link>
					</>
					)}
				</div>
        {user ? (
					<div className="flex items-center gap-2">
						<img 
							src={user.imageUrl || assets.user_icon} 
							alt="Profile" 
							className="w-6 h-6 rounded-full"
						/>
						<button
							onClick={handleLogout}
							className="bg-red-600 text-white px-2 py-1 rounded text-xs"
						>
							Logout
						</button>
					</div>
				) : (
					<div className="flex gap-1">
						<button 
							onClick={() => setShowLogin(true)}
							className="bg-gray-600 text-white px-2 py-1 rounded text-xs"
						>
							Login
						</button>
						<button 
							onClick={() => setShowSignup(true)}
							className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
						>
							Sign Up
						</button>
					</div>
				)}
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
	);
};

export default Navbar;
