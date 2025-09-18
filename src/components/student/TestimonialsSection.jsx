import React, { useState } from "react";
import { motion } from 'framer-motion';
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut"
			}
		}
	};

	return (
		<div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
			{/* Curved bottom design */}
			<div className="absolute bottom-0 left-0 w-full overflow-hidden">
				<svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-gray-100/40"></path>
				</svg>
			</div>
			{/* Static background elements */}
			<div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl" />
			<div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-2xl" />

			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={containerVariants}
				className="max-w-7xl mx-auto relative z-10"
			>
				{/* Enhanced Header Section */}
				<motion.div className="text-center mb-16">
					<motion.h2 
						variants={itemVariants}
						className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
						animate={{
							backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
						}}
						transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
						style={{ backgroundSize: "200% 200%" }}
					>
						What Our Students Say
					</motion.h2>
					
					<motion.div 
						className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg mb-6"
						animate={{
							scaleX: [1, 1.2, 1],
							boxShadow: [
								"0 4px 15px rgba(59, 130, 246, 0.3)",
								"0 4px 25px rgba(147, 51, 234, 0.5)",
								"0 4px 15px rgba(236, 72, 153, 0.3)",
								"0 4px 15px rgba(59, 130, 246, 0.3)"
							]
						}}
						transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
					/>
					
					<motion.p 
						variants={itemVariants}
						className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed px-4"
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						Discover how Hey.Naimish has <motion.span 
							className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
							whileHover={{ scale: 1.05 }}
						>transformed learning experiences</motion.span> and helped thousands achieve their goals through expert-led courses and personalized mentorship.
					</motion.p>
				</motion.div>

				{/* Enhanced Testimonials Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{dummyTestimonial.map((testimonial, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group relative"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							style={{ transitionDelay: `${index * 0.1}s` }}
						>
							{/* Simplified Card Container */}
							<div className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl border border-white/50 transition-shadow duration-300 h-full">
								
								{/* Static Quote Icon */}
								<div className="absolute top-6 right-6 opacity-20">
									<svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
									</svg>
								</div>

								{/* Card Content */}
								<div className="relative z-10 space-y-6">
									{/* Simplified Rating Stars */}
									<div className="flex items-center gap-2">
										<div className="flex gap-1">
											{[...Array(5)].map((_, i) => (
												<img 
													key={i}
													className="h-6 w-6" 
													src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
													alt="star" 
												/>
											))}
										</div>
										<span className="ml-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
											{testimonial.rating}/5
										</span>
									</div>

									{/* Simplified Testimonial Text */}
									<blockquote className="text-gray-700 leading-relaxed text-base font-medium italic">
										<span className="text-2xl text-blue-500 font-bold">"</span>
										{testimonial.feedback}
										<span className="text-2xl text-purple-500 font-bold">"</span>
									</blockquote>

									{/* Simplified User Info */}
									<div className="flex items-center gap-4">
										<div className="relative">
											<img 
												className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg" 
												src={testimonial.image} 
												alt={testimonial.name}
											/>
											{/* Static Status Indicator */}
											<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-lg" />
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
												{testimonial.name}
											</h3>
											<p className="text-sm text-gray-500 font-medium">
												{testimonial.role}
											</p>
										</div>
									</div>

									{/* Simple Bottom Accent */}
									<div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-50" />
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Simplified Call to Action */}
				<motion.div 
					className="text-center mt-16"
					variants={itemVariants}
				>
					<p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
						Join <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">thousands of satisfied learners</span> today
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<button className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
							Start Learning Now ✨
						</button>
						<button className="px-10 py-4 border-2 border-blue-500 text-gray-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300">
							View All Reviews 📝
						</button>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default TestimonialsSection;
