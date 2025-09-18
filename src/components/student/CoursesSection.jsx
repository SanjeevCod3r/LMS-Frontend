import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";
import Loading from "./Loading";

const CoursesSection = () => {
    const { allCourses } = useContext(AppContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (allCourses && allCourses.length > 0) {
            setLoading(false);
        }
    }, [allCourses]);

    return (
        <div className="relative py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-40 bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/5 to-orange-400/5 rounded-full blur-2xl" />

            {/* Curved top design */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-100/40"></path>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h2 
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Learn from the <span className="relative">
                            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-black">best</span>
                            <motion.div 
                                className="absolute -bottom-2 left-0 w-full h-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-40 rounded-full blur-sm"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                            <motion.div 
                                className="absolute -bottom-1 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                viewport={{ once: true }}
                            />
                        </span>
                    </motion.h2>
                    
                    <motion.div 
                        className="w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full shadow-lg mb-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    
                    <motion.p 
                        className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Discover our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">top-rated courses</span> across various categories. From coding and design to business and wellness, our courses are crafted to deliver exceptional results.
                    </motion.p>

                    {/* Stats Section */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {[
                            { number: "500+", label: "Expert Instructors" },
                            { number: "10K+", label: "Students Enrolled" },
                            { number: "50+", label: "Course Categories" },
                            { number: "4.9★", label: "Average Rating" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Courses Grid */}
                {loading ? (
                    <Loading />
                ) : (
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {allCourses.slice(0, 4).map((course, index) => (
                            <motion.div
                                key={index}
                                className="group relative"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Simplified Course card */}
                                <div className="relative">
                                    {/* Popular badge for first course */}
                                    {index === 0 && (
                                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            🔥 Popular
                                        </div>
                                    )}
                                    
                                    {/* New badge for second course */}
                                    {index === 1 && (
                                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            ✨ New
                                        </div>
                                    )}
                                    
                                    {/* Trending badge for third course */}
                                    {index === 2 && (
                                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            📈 Trending
                                        </div>
                                    )}
                                    
                                    {/* Best Seller badge for fourth course */}
                                    {index === 3 && (
                                        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            ⭐ Best Seller
                                        </div>
                                    )}
                                    
                                    <CourseCard course={course} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Call to Action */}
                <div className="text-center">
                    <Link
                        to={"/course-list"}
                        onClick={() => scrollTo(0, 0)}
                        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                        </svg>
                        Explore All Courses
                    </Link>
                    
                    <p className="text-gray-600 mt-4">
                        Join thousands of learners on their journey to success ✨
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;
