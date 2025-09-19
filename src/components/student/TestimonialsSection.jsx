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
		<div className="py-12 md:py-20 px-4 sm:px-6 md:px-40 relative overflow-hidden">
			{/* Subtle background elements for black section */}
			<div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
			<div className="absolute bottom-10 right-10 w-32 h-32 bg-white/3 rounded-full blur-2xl" />
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl" />

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
						className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
					>
						What Our Students Say
					</motion.h2>
					
					<motion.div 
						className="w-32 h-1.5 bg-white mx-auto rounded-full shadow-lg mb-6"
					/>
					
					<motion.p 
						variants={itemVariants}
						className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed px-4"
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						Discover how Hey.Naimish has <motion.span 
							className="text-white font-bold"
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
							{/* Card Container */}
							<div className="relative bg-white p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl border border-gray-200 transition-all duration-300 h-full hover:scale-105">
								
								{/* Quote Icon */}
								<div className="absolute top-6 right-6 opacity-20">
									<svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
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
										<span className="ml-2 text-sm font-bold text-black">
											{testimonial.rating}/5
										</span>
									</div>

									{/* Testimonial Text */}
									<blockquote className="text-gray-700 leading-relaxed text-base font-medium italic">
										<span className="text-2xl text-black font-bold">"</span>
										{testimonial.feedback}
										<span className="text-2xl text-black font-bold">"</span>
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
											<h3 className="text-lg font-bold text-black">
												{testimonial.name}
											</h3>
											<p className="text-sm text-gray-500 font-medium">
												{testimonial.role}
											</p>
										</div>
									</div>

									{/* Bottom Accent */}
									<div className="w-full h-1 bg-black rounded-full" />
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div 
					className="text-center mt-16"
					variants={itemVariants}
				>
					<p className="text-lg md:text-xl text-gray-300 mb-8 font-medium">
						Join <span className="text-white font-bold">thousands of satisfied learners</span> today
					</p>
					<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<button className="px-10 py-4 btn-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
							Start Learning Now ✨
						</button>
						<button className="px-10 py-4 btn-outline-white font-semibold rounded-full transition-all duration-300">
							View All Reviews 📝
						</button>
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default TestimonialsSection;
