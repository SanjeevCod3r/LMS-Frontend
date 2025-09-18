import React, { useState } from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
	const [hoveredCard, setHoveredCard] = useState(null);

	return (
		<div className="pb-14 px-8 md:px-0 max-w-7xl mx-auto">
			{/* Header Section */}
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
					What Our Students Say
				</h2>
				<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
					Discover how our platform has transformed learning experiences and helped thousands 
					of students achieve their goals through expert-led courses and personalized learning paths.
				</p>
			</div>

			{/* Testimonials Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{dummyTestimonial.map((testimonial, index) => (
					<div
						key={index}
						className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out overflow-hidden border border-gray-100"
						onMouseEnter={() => setHoveredCard(index)}
						onMouseLeave={() => setHoveredCard(null)}
					>
						{/* Gradient Background Overlay */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						
						{/* Quote Icon */}
						<div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
							<svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
								<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
							</svg>
						</div>

						{/* Card Content */}
						<div className="relative p-6">
							{/* Rating Stars */}
							<div className="flex gap-1 mb-4">
								{[...Array(5)].map((_, i) => (
									<div key={i} className="relative">
										<img 
											className={`h-5 w-5 transition-transform duration-200 ${
												hoveredCard === index ? 'scale-110' : ''
											}`} 
											src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
											alt="star" 
										/>
									</div>
								))}
								<span className="ml-2 text-sm font-medium text-gray-600">
									{testimonial.rating}/5
								</span>
							</div>

							{/* Testimonial Text */}
							<blockquote className="text-gray-700 leading-relaxed mb-6 text-base">
								"{testimonial.feedback}"
							</blockquote>

							{/* User Info */}
							<div className="flex items-center gap-4">
								<div className="relative">
									<img 
										className="w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md group-hover:ring-blue-100 transition-all duration-300" 
										src={testimonial.image} 
										alt={testimonial.name} 
									/>
									{/* Online Status Indicator */}
									<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
										{testimonial.name}
									</h3>
									<p className="text-sm text-gray-500 font-medium">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>

						{/* Bottom Accent Line */}
						<div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
					</div>
				))}
			</div>

			{/* Call to Action */}
			<div className="text-center mt-16">
				<p className="text-gray-600 mb-6 text-lg">
					Join thousands of satisfied learners today
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
						Start Learning Now
					</button>
					<button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
						View All Reviews
					</button>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsSection;
