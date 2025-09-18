import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { data, useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CoursesList = () => {
	const { navigate, allCourses } = useContext(AppContext);
	const { input } = useParams();
	const [filteredCourse, setFilteredcourse] = useState([]);

	useEffect(() => {
		if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice()

      input ? 
        setFilteredcourse(
          tempCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
      : setFilteredcourse(tempCourses);
    }
	}, [allCourses, input]);
	return (
		<div className='relative min-h-screen'>
			{/* Beautiful Background */}
			<div className="fixed inset-0 -z-10 overflow-hidden">
				{/* Gradient Background */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30" />
				
				{/* Floating Background Elements */}
				<div className="absolute top-32 left-16 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl" />
				<div className="absolute top-20 right-32 w-80 h-80 bg-gradient-to-r from-purple-400/6 to-pink-400/6 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-r from-green-400/8 to-emerald-400/8 rounded-full blur-3xl" />
				<div className="absolute bottom-40 right-16 w-56 h-56 bg-gradient-to-r from-orange-400/8 to-yellow-400/8 rounded-full blur-3xl animate-pulse" />
				
				{/* Geometric Patterns */}
				<div className="absolute top-1/5 left-1/5 w-2 h-2 bg-blue-400/15 rounded-full animate-bounce" />
				<div className="absolute top-2/5 right-1/4 w-3 h-3 bg-purple-400/15 rounded-full animate-pulse" />
				<div className="absolute bottom-1/5 left-2/5 w-2 h-2 bg-green-400/15 rounded-full animate-bounce" />
				<div className="absolute bottom-2/5 right-1/5 w-3 h-3 bg-pink-400/15 rounded-full animate-pulse" />
				
				{/* Subtle Pattern */}
				<div className="absolute inset-0 opacity-[0.015]" style={{
					backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.3) 1px, transparent 0)`,
					backgroundSize: '60px 60px'
				}} />
			</div>

			{/* Content */}
			<div className="relative">
				<div className="md:px-36 px-8 pt-20 text-left">
					<div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
						<div>
							<h1 className="text-4xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								Course List
							</h1>
							<p className="text-gray-500">
								<span
									onClick={() => navigate("/")}
									className="text-blue-600 cursor-pointer hover:text-blue-700 transition-colors"
								>
									Home{" "}
								</span>{" "}
								/ <span>Course List</span>
							</p>
						</div>
						<SearchBar data={input} />
					</div>

					{
						input && <div className="inline-flex items-center gap-4 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg mt-8 -mb-8 text-gray-600 shadow-lg">
							<p className="font-medium">Search: "{input}"</p>
							<img src={assets.cross_icon} alt="cross_icon" className="cursor-pointer hover:scale-110 transition-transform" onClick={()=> navigate('/course-list')}/>
						</div>
					}

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-6 px-2 md:p-0">
						{filteredCourse.map((course, index) => (
							<CourseCard key={index} course={course} />
						))}
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	);
};

export default CoursesList;
