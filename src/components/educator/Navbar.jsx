import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logger from "../Logger";
const Navbar = () => {
	const educatorData = dummyEducatorData;
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
			<Link to="/" className="flex items-center gap-3">
				<img 
					src={assets.Logo1} 
					alt="logo" 
					className="w-10 lg:w-12" 
				/>
				<span className="text-xl lg:text-2xl font-bold text-gray-800">Hey.Naimish</span>
			</Link>

			<div className="flex items-center gap-5 text-gray-500 relative">
				<div className="hidden md:block">
					<Logger />
				</div>
				<p>Hi! {user ? user.name : "Developers"} </p>
				{user ? (
					<div className="flex items-center gap-3">
						<img 
							src={user.imageUrl || assets.profile_img} 
							alt="Profile" 
							className="w-8 h-8 rounded-full"
						/>
						<button
							onClick={handleLogout}
							className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
						>
							Logout
						</button>
					</div>
				) : (
					<img className="max-w-8" src={assets.profile_img} alt="profile_img" />
				)}
			</div>
		</div>
	);
};

export default Navbar;
