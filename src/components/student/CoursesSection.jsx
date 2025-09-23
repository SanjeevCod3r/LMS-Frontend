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
        <div className="relative py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-40 overflow-hidden">
            {/* Subtle background elements for black section */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/3 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl" />

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
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        What This Program Is 
                        <span className="relative">
                            <span className="text-white font-black underline decoration-white decoration-4 underline-offset-8"> About</span>
                        </span>
                    </motion.h2>
                    
                    <motion.div 
                        className="w-40 h-2 bg-white mx-auto rounded-full shadow-lg mb-8"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                    
                    <motion.p 
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Join our <span className="text-white font-semibold">Digital Marketing & Personal Branding Mentorship Program</span> to learn key skills step by step. Work on live projects with expert help to gain real experience &  attract clients faster—up to 40% quicker.
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
                                className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    {stat.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-300 font-medium">
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
                        className="course-card-grid mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {allCourses.slice(0, 4).map((course, index) => (
                            <motion.div
                                key={course._id || index}
                                className="group relative h-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Course card with badge overlay */}
                                <div className="relative h-full">
                                    {/* Popular badge for first course */}
                                    {index === 0 && (
                                        <div className="absolute top-4 right-4 z-20 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                                            🔥 Popular
                                        </div>
                                    )}
                                    
                                    {/* New badge for second course */}
                                    {index === 1 && (
                                        <div className="absolute top-4 right-4 z-20 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white">
                                            ✨ New
                                        </div>
                                    )}
                                    
                                    {/* Trending badge for third course */}
                                    {index === 2 && (
                                        <div className="absolute top-4 right-4 z-20 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                            📈 Trending
                                        </div>
                                    )}
                                    
                                    {/* Best Seller badge for fourth course */}
                                    {index === 3 && (
                                        <div className="absolute top-4 right-4 z-20 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white">
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
                        className="inline-flex items-center gap-3 px-10 py-4 btn-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                        </svg>
                        Explore All Courses
                    </Link>
                    
                    <p className="text-gray-300 mt-4">
                        Join thousands of learners on their journey to success ✨
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;
