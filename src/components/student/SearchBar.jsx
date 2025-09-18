import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../../assets/assets";
import {data, useNavigate} from "react-router-dom"

const SearchBar = ({data}) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '');
  const [isFocused, setIsFocused] = useState(false);

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input)
  }

	return (
		<div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
			<form 
				onSubmit={onSearchHandler} 
				className="relative max-w-3xl w-full mx-auto"
			>
				{/* Mobile-Optimized Search Container */}
				<div className="space-y-3 sm:space-y-0">
					{/* Search Input Container */}
					<div 
						className={`relative flex items-center bg-transparent backdrop-blur-sm border-2 rounded-2xl shadow-xl transition-all duration-300 ${
							isFocused 
								? 'border-blue-500 shadow-2xl shadow-blue-500/20 bg-white/95' 
								: 'border-gray-200 hover:border-blue-300 bg-white/80'
						}`}
					>
						{/* Simplified Search Icon */}
						<div className="flex items-center justify-center pl-4 sm:pl-6 pr-3">
							<img
								src={assets.search_icon}
								alt="search icon"
								className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
							/>
						</div>

						{/* Enhanced Input Field */}
						<input
							onChange={e => setInput(e.target.value)} 
							value={input}
							type="text"
							placeholder="🎯 Search courses..."
							className="flex-1 h-12 sm:h-16 outline-none text-gray-700 placeholder-gray-400 bg-transparent text-base sm:text-lg font-medium px-2 pr-4"
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
						/>

						{/* Desktop Search Button */}
						<button
							type="submit"
							className="hidden sm:block relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl mx-2 my-2 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<div className="flex items-center gap-2">
								<span className="text-lg">🔍</span>
								<span>Search</span>
							</div>
						</button>
					</div>

					{/* Mobile Search Button - Below Input */}
					<button
						type="submit"
						className="sm:hidden w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300"
					>
						<div className="flex items-center justify-center gap-2">
							<span className="text-lg">🔍</span>
							<span>Search Courses</span>
						</div>
					</button>
				</div>

			</form>
		</div>
	);
};

export default SearchBar;
