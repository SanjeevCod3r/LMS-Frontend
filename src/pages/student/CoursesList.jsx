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
		<div className='relative min-h-screen section-white'>
			{/* Content */}
			<div className="relative">
				<div className="md:px-36 px-8 pt-20 text-left">
					<div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
						<div>
							<h1 className="text-4xl font-semibold text-black">
								Course List
							</h1>
							<p className="text-gray-600">
								<span
									onClick={() => navigate("/")}
									className="text-black cursor-pointer hover:text-gray-700 transition-colors font-medium"
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

					<div className="course-card-grid my-16">
						{filteredCourse.map((course, index) => (
							<div key={course._id || index} className="h-full">
								<CourseCard course={course} />
							</div>
						))}
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	);
};

export default CoursesList;
