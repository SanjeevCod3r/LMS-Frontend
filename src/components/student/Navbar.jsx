import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
	const { user, isEducator, logout } = useAuth();
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// const becomeEducator = async () => {
	// 	if(isEducator){
	// 		navigate('/educator')
	// 		return;
	// 	}

	// 	const result = await updateRoleToEducator();
	// 	if (result.success) {
	// 		navigate('/educator');
	// 	}
	// }

	const handleLogout = () => {
		logout();
		navigate('/');
	};
    
	return (
		<>
			<div
				className={`flex items-center justify-between w-full px-4 sm:px-6 md:px-8 lg:px-36 border-b border-gray-500 py-3 ${
					isCourseListPage ? "bg-white" : "bg-cyan-100/70"
				} relative z-50`}
			>
				<div onClick={()=>navigate('/')} className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0">
					<img 
						src={assets.Logo1}
						alt="Logo"
						className="w-8 sm:w-10 lg:w-12"
					/>
					<span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Hey.Naimish</span>
				</div>
			<div className="hidden md:flex items-center gap-5 text-gray-500">
				<div className="flex items-center gap-5">
					<Logger/>
				</div>
				<div className="flex items-center gap-5">
					{user && (
						<>
							{isEducator && (<button onClick={() => navigate("/educator")}>Educator Dashboard</button>)}
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
				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<motion.button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<motion.div
							animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
							transition={{ duration: 0.2 }}
						>
							{isMobileMenuOpen ? (
								<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</motion.div>
					</motion.button>
				</div>
			</div>

			{/* Mobile Drawer */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsMobileMenuOpen(false)}
							className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
						/>
						
						{/* Drawer */}
						<motion.div
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ type: "spring", stiffness: 300, damping: 30 }}
							className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
						>
							{/* Drawer Header */}
							<div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
								<div className="flex items-center gap-3">
									<img 
										src={assets.Logo1}
										alt="Logo"
										className="w-8 h-8"
									/>
									<span className="text-lg font-bold text-gray-800">Hey.Naimish</span>
								</div>
								<motion.button
									onClick={() => setIsMobileMenuOpen(false)}
									className="p-2 rounded-full hover:bg-gray-100"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									<svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
									</svg>
								</motion.button>
							</div>

							{/* Drawer Content */}
							<div className="p-6 space-y-6">
								{user ? (
									<>
										{/* User Profile Section */}
										<div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
											<img 
												src={user.imageUrl || assets.user_icon} 
												alt="Profile" 
												className="w-12 h-12 rounded-full border-2 border-white shadow-md"
											/>
											<div>
												<p className="font-semibold text-gray-800">{user.name}</p>
												<p className="text-sm text-gray-600">{user.email}</p>
											</div>
										</div>

										{/* Navigation Links */}
										<div className="space-y-3">
											{isEducator && (
												<motion.button
													onClick={() => {
														navigate("/educator");
														setIsMobileMenuOpen(false);
													}}
													className="w-full flex items-center gap-3 p-3 text-left bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg"
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h6m-6 4h6m-2 4h2M7 7h.01M7 11h.01M7 15h.01" />
													</svg>
													<span className="font-medium">Educator Dashboard</span>
												</motion.button>
											)}
											
											<motion.div
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<Link 
													to="/my-enrollments"
													onClick={() => setIsMobileMenuOpen(false)}
													className="w-full flex items-center gap-3 p-3 text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
												>
													<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
													</svg>
													<span className="font-medium">My Enrollments</span>
												</Link>
											</motion.div>
										</div>

										{/* Logout Button */}
										<motion.button
											onClick={() => {
												handleLogout();
												setIsMobileMenuOpen(false);
											}}
											className="w-full flex items-center justify-center gap-3 p-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl shadow-lg"
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
										>
											<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
											</svg>
											<span className="font-medium">Logout</span>
										</motion.button>
									</>
								) : (
									<>
										{/* Login/Signup Buttons */}
										<div className="space-y-4">
											<motion.button
												onClick={() => {
													setShowLogin(true);
													setIsMobileMenuOpen(false);
												}}
												className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl shadow-lg"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
												</svg>
												<span className="font-semibold text-lg">Login</span>
											</motion.button>

											<motion.button
												onClick={() => {
													setShowSignup(true);
													setIsMobileMenuOpen(false);
												}}
												className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl shadow-lg"
												whileHover={{ scale: 1.02 }}
												whileTap={{ scale: 0.98 }}
											>
												<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
												</svg>
												<span className="font-semibold text-lg">Sign Up</span>
											</motion.button>
										</div>

										{/* Additional Info */}
										<div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
											<p className="text-sm text-gray-600 text-center">
												Join thousands of learners and start your journey with Hey.Naimish today!
											</p>
										</div>
									</>
								)}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

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
		</>
	);
};

export default Navbar;
