import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Line } from "rc-progress";
import Footer from "../../components/student/Footer";
import { toast } from "react-toastify";
import axios from "axios";
import { data } from "react-router-dom";



const MyEnrollMents = () => {
	const {
		navigate,
		enrolledCourses,
		calculateCourseDuration,
		userData,
		fetchUserEnrolledCourses,
		backendUrl,
		getToken,
		calculateNoOfLectures,
	} = useContext(AppContext);

	const [progressArray, setProgressArray] = useState([]);

	const getCourseProgress = async () => {
		try {
			const token = await getToken();

			const tempProgressArray = await Promise.all(
				enrolledCourses.map(async (course) => {
					const { data } = await axios.post(
						`${backendUrl}/api/user/get-course-progress`,
						{ courseId: course._id },
						{ headers: { Authorization: `Bearer ${token}` } }
					);
					console.log("dta", data.progressData);
					

					let totalLectures = calculateNoOfLectures(course);

					const lectureCompleted = data.progressData
						? data.progressData.lectureCompleted.length
						: 0;
					return { totalLectures, lectureCompleted };
				})
			);

			setProgressArray(tempProgressArray);
		} catch (error) {
			toast.error(error.message);
		}
	};

  useEffect(()=>{
    if(userData){
      fetchUserEnrolledCourses();
    }
  },[userData])

  useEffect(()=>{
    if(enrolledCourses.length > 0){
      getCourseProgress();
    }
  },[enrolledCourses])

	return (
		<>
			{/* Main Content Section - White Theme */}
			<div className="section-white min-h-screen">
				<div className="md:px-36 px-8 pt-16 pb-20">
					{/* Page Header */}
					<div className="mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
							My Enrollments
						</h1>
						<div className="w-24 h-1 bg-black"></div>
						<p className="text-gray-600 mt-4 text-lg">
							Track your learning progress and continue your courses
						</p>
					</div>

					{/* Enrollments Table/Grid */}
					{enrolledCourses.length > 0 ? (
						<div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
							{/* Desktop Table View */}
							<div className="hidden md:block">
								<table className="w-full">
									<thead className="bg-black text-white">
										<tr>
											<th className="px-6 py-4 text-left font-semibold">Course</th>
											<th className="px-6 py-4 text-left font-semibold">Duration</th>
											<th className="px-6 py-4 text-left font-semibold">Progress</th>
											<th className="px-6 py-4 text-left font-semibold">Status</th>
											<th className="px-6 py-4 text-center font-semibold">Action</th>
										</tr>
									</thead>
									<tbody>
										{enrolledCourses.map((course, index) => (
											<tr 
												key={index} 
												className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200"
											>
												<td className="px-6 py-6">
													<div className="flex items-center space-x-4">
														<img
															className="w-20 h-14 object-cover rounded-lg cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200"
															onClick={() => navigate("/player/" + course._id)}
															src={course.courseThumbnail}
															alt="Course Thumbnail"
														/>
														<div className="flex-1">
															<h3 
																className="font-semibold text-black mb-2 cursor-pointer hover:text-gray-700 transition-colors duration-200 line-clamp-2"
																onClick={() => navigate("/player/" + course._id)}
															>
																{course.courseTitle}
															</h3>
															<div className="w-full bg-gray-200 rounded-full h-2">
																<div 
																	className="bg-black h-2 rounded-full transition-all duration-300"
																	style={{
																		width: `${progressArray[index]
																			? (progressArray[index].lectureCompleted * 100) /
																			  progressArray[index].totalLectures
																			: 0}%`
																	}}
																></div>
															</div>
															<p className="text-sm text-gray-600 mt-1">
																{progressArray[index] 
																	? `${Math.round((progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures)}% Complete`
																	: '0% Complete'
																}
															</p>
														</div>
													</div>
												</td>
												<td className="px-6 py-6 text-gray-700 font-medium">
													{calculateCourseDuration(course)}
												</td>
												<td className="px-6 py-6 text-gray-700">
													<div className="text-sm">
														<span className="font-semibold">
															{progressArray[index] ? progressArray[index].lectureCompleted : 0}
														</span>
														<span className="text-gray-500"> / </span>
														<span>
															{progressArray[index] ? progressArray[index].totalLectures : 0}
														</span>
														<div className="text-gray-500 text-xs mt-1">Lectures</div>
													</div>
												</td>
												<td className="px-6 py-6">
													<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
														progressArray[index] &&
														progressArray[index].lectureCompleted /
															progressArray[index].totalLectures === 1
															? 'bg-green-100 text-green-800'
															: 'bg-blue-100 text-blue-800'
													}`}>
														{progressArray[index] &&
														progressArray[index].lectureCompleted /
															progressArray[index].totalLectures === 1
															? "Completed"
															: "In Progress"}
													</span>
												</td>
												<td className="px-6 py-6 text-center">
													<button
														className="btn-black px-6 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-200"
														onClick={() => navigate("/player/" + course._id)}
													>
														Continue Learning
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>

							{/* Mobile Card View */}
							<div className="md:hidden space-y-4 p-4">
								{enrolledCourses.map((course, index) => (
									<div key={index} className="card-white rounded-lg p-4 shadow-md">
										<div className="flex items-start space-x-4 mb-4">
											<img
												className="w-16 h-12 object-cover rounded-lg cursor-pointer"
												onClick={() => navigate("/player/" + course._id)}
												src={course.courseThumbnail}
												alt="Course Thumbnail"
											/>
											<div className="flex-1">
												<h3 
													className="font-semibold text-black mb-2 cursor-pointer text-sm line-clamp-2"
													onClick={() => navigate("/player/" + course._id)}
												>
													{course.courseTitle}
												</h3>
												<div className="w-full bg-gray-200 rounded-full h-2 mb-2">
													<div 
														className="bg-black h-2 rounded-full"
														style={{
															width: `${progressArray[index]
																? (progressArray[index].lectureCompleted * 100) /
																  progressArray[index].totalLectures
																: 0}%`
														}}
													></div>
												</div>
											</div>
										</div>
										
										<div className="grid grid-cols-2 gap-4 text-sm mb-4">
											<div>
												<span className="text-gray-500">Duration:</span>
												<p className="font-medium">{calculateCourseDuration(course)}</p>
											</div>
											<div>
												<span className="text-gray-500">Progress:</span>
												<p className="font-medium">
													{progressArray[index] ? progressArray[index].lectureCompleted : 0} / {progressArray[index] ? progressArray[index].totalLectures : 0} Lectures
												</p>
											</div>
										</div>

										<div className="flex justify-between items-center">
											<span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
												progressArray[index] &&
												progressArray[index].lectureCompleted /
													progressArray[index].totalLectures === 1
													? 'bg-green-100 text-green-800'
													: 'bg-blue-100 text-blue-800'
											}`}>
												{progressArray[index] &&
												progressArray[index].lectureCompleted /
													progressArray[index].totalLectures === 1
													? "Completed"
													: "In Progress"}
											</span>
											<button
												className="btn-black px-4 py-2 rounded-lg font-medium text-xs"
												onClick={() => navigate("/player/" + course._id)}
											>
												Continue
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						/* Empty State */
						<div className="text-center py-20">
							<div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-black mb-2">No Enrollments Yet</h3>
							<p className="text-gray-600 mb-6">Start your learning journey by enrolling in a course</p>
							<button 
								className="btn-black px-8 py-3 rounded-lg font-medium"
								onClick={() => navigate("/course-list")}
							>
								Browse Courses
							</button>
						</div>
					)}
				</div>
			</div>
			
			{/* Section Divider */}
			<div className="section-divider"></div>
			
			<Footer />
		</>
	);
};

export default MyEnrollMents;
