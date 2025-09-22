import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import YouTube from "react-youtube";
import { toast } from "react-toastify";
import axios from "axios";

const CourseDetails = () => {
	const { id } = useParams();

	const [courseData, setCourseData] = useState(null);
	const [openSections, setOpenSections] = useState({});
	const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
	const [playerData, setPlayerData] = useState(null);

	// Function to extract YouTube video ID from various URL formats
	const extractYouTubeVideoId = (url) => {
		if (!url) return null;
		
		// Handle different YouTube URL formats
		const patterns = [
			/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
			/^([a-zA-Z0-9_-]{11})$/ // Direct video ID
		];
		
		for (const pattern of patterns) {
			const match = url.match(pattern);
			if (match) {
				return match[1];
			}
		}
		
		// Fallback: try splitting by '/' and taking the last part
		const parts = url.split('/');
		const lastPart = parts[parts.length - 1];
		
		// Remove any query parameters
		const videoId = lastPart.split('?')[0].split('&')[0];
		
		// Validate video ID format (YouTube video IDs are 11 characters)
		if (videoId && videoId.length === 11) {
			return videoId;
		}
		
		console.warn('Could not extract YouTube video ID from URL:', url);
		return null;
	};

	const {
		allCourses,
		currency,
		calculateRating,
		calculateChapterTime,
		calculateCourseDuration,
		calculateNoOfLectures,
		backendUrl,
		userData,
		getToken,
	} = useContext(AppContext);

	const fetcheCourseData = async () => {
		// const findCourse = allCourses.find((course) => course._id === id);
		// setCourseData(findCourse);

		try {
			const { data } = await axios.get(backendUrl + "/api/course/" + id);
			if (data.success) {
				setCourseData(data.courseData);
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const enrollCourse = async () => {
		try {
			if (!userData) {
				return toast.warn("Login to Enroll!");
			}
			if (isAlreadyEnrolled) {
				return toast.warn("Already Enrolled");
			}

			const token = await getToken();
			const { data } = await axios.post(
				backendUrl + "/api/user/purchase",
				{ courseId: courseData._id },
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (data.success) {
				if (data.redirect) {
					// Free course enrollment - redirect to enrollments page
					toast.success(data.message);
					window.location.href = data.redirect;
				} else if (data.orderId) {
					// Paid course - initiate Razorpay payment
					initiateRazorpayPayment(data);
				}
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	const initiateRazorpayPayment = (paymentData) => {
		const options = {
			key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Your Razorpay Key ID
			amount: paymentData.amount,
			currency: paymentData.currency,
			name: "Hey.Naimish",
			description: `Payment for ${paymentData.courseName}`,
			order_id: paymentData.orderId,
			handler: async function (response) {
				// Payment successful - verify on backend
				await verifyPayment(response, paymentData.purchaseId);
			},
			prefill: {
				name: userData.name,
				email: userData.email,
				contact: userData.phone || ""
			},
			theme: {
				color: "#2563eb"
			},
			modal: {
				ondismiss: function() {
					toast.info("Payment cancelled");
				}
			}
		};

		const razorpay = new window.Razorpay(options);
		razorpay.open();
	};

	const verifyPayment = async (paymentResponse, purchaseId) => {
		try {
			const token = await getToken();
			const { data } = await axios.post(
				backendUrl + "/api/user/verify-payment",
				{
					razorpay_order_id: paymentResponse.razorpay_order_id,
					razorpay_payment_id: paymentResponse.razorpay_payment_id,
					razorpay_signature: paymentResponse.razorpay_signature,
					purchaseId: purchaseId
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);

			if (data.success) {
				toast.success(data.message);
				// Redirect to my enrollments
				window.location.href = "/my-enrollments";
			} else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error("Payment verification failed: " + error.message);
		}
	};

	useEffect(() => {
		fetcheCourseData();
	}, []);

	useEffect(() => {
		if (userData && courseData) {
			setIsAlreadyEnrolled(userData.enrolledCourses.includes(courseData._id));
		}
	}, [userData, courseData]);

	const toggleSection = (index) => {
		setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	return courseData ? (
		<>
			<div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:placeholder-teal-300 pt-20 text-left">
				<div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from-cyan-100/70"></div>

				{/* left column */}
				<div className="max-w-xl z-10 text-gray-500">
					<h1 className="md:text-course-details-heading-large text-course-details-heading-small font-semibold text-gray-800">
						{courseData.courseTitle}
					</h1>
					<p
						className="pt-4 md:text-base text-sm"
						dangerouslySetInnerHTML={{
							__html: courseData.courseDescription.slice(0, 200),
						}}
					></p>

					{/* review and rating  */}
					<div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
						<p>{calculateRating(courseData)}</p>
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<img
									className="w-3.5 h-3.5"
									key={i}
									src={
										i < Math.floor(calculateRating(courseData))
											? assets.star
											: assets.star_blank
									}
									alt="star"
								/>
							))}
						</div>
						<p className="text-blue-600">
							({courseData.courseRatings.length}{" "}
							{courseData.courseRatings.length > 1 ? "ratings" : "rating"})
						</p>

						<p>
							{courseData.enrolledStudents.length}{" "}
							{courseData.enrolledStudents.length > 1 ? "students" : "student"}
						</p>
					</div>
					<p className="text-sm">
						Course by{" "}
						<span className="text-blue-600 underline">
							{courseData.educator.name}
						</span>
					</p>

					{/* Course Structure Section */}
					<div className="pt-12 text-black">
						{/* Section Header */}
						<div className="mb-8">
							<h2 className="text-3xl font-bold text-black mb-3">Course Structure</h2>
							<div className="w-16 h-1 bg-black"></div>
							<p className="text-gray-600 mt-3">
								Explore the course curriculum and preview available lectures
							</p>
						</div>

						{/* Course Chapters */}
						<div className="space-y-4">
							{courseData.courseContent.map((chapter, index) => (
								<div
									className="bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
									key={index}
								>
									{/* Chapter Header */}
									<div
										className="flex items-center justify-between px-6 py-4 cursor-pointer select-none bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-200"
										onClick={() => toggleSection(index)}
									>
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
												<img
													className={`w-4 h-4 transform transition-transform duration-300 ${
														openSections[index] ? "rotate-180" : ""
													}`}
													src={assets.down_arrow_icon}
													alt="expand"
													style={{ filter: 'brightness(0) invert(1)' }}
												/>
											</div>
											<div>
												<p className="font-semibold text-black text-lg">
													Chapter {index + 1}: {chapter.chapterTitle}
												</p>
												<p className="text-sm text-gray-500 mt-1">
													{chapter.chapterContent.length} lectures • {calculateChapterTime(chapter)}
												</p>
											</div>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-xs bg-black text-white px-3 py-1 rounded-full font-medium">
												{chapter.chapterContent.length} lectures
											</span>
										</div>
									</div>

									{/* Chapter Content */}
									<div
										className={`overflow-hidden transition-all duration-500 ease-in-out ${
											openSections[index] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
										}`}
									>
										<div className="border-t border-gray-200 bg-gray-50">
											<ul className="p-4 space-y-3">
												{chapter.chapterContent.map((lecture, i) => (
													<li key={i} className="flex items-center gap-4 p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200">
														{/* Play/Lock Icon */}
														<div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${
															lecture.isPreviewFree 
																? 'bg-black cursor-pointer hover:bg-gray-800' 
																: 'bg-gray-300 cursor-not-allowed'
														}`}>
															{lecture.isPreviewFree ? (
																<img
																	onClick={() => {
																		const videoId = extractYouTubeVideoId(lecture.lectureUrl);
																		if (videoId) {
																			setPlayerData({ videoId });
																		} else {
																			toast.error('Invalid YouTube URL for this lecture');
																		}
																	}}
																	className="w-4 h-4 ml-0.5"
																	src={assets.play_icon}
																	alt="play"
																	style={{ filter: 'brightness(0) invert(1)' }}
																/>
															) : (
																<svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
																</svg>
															)}
														</div>

														{/* Lecture Content */}
														<div className="flex-1 min-w-0">
															<div className="flex items-center justify-between">
																<div className="flex-1">
																	<h4 className="font-medium text-black text-sm md:text-base truncate">
																		{i + 1}. {lecture.lectureTitle}
																	</h4>
																	<div className="flex items-center gap-4 mt-1">
																		<span className="text-xs text-gray-500">
																			{humanizeDuration(
																				lecture.lectureDuration * 60 * 1000,
																				{ units: ["h", "m"] }
																			)}
																		</span>
																		{lecture.isPreviewFree && (
																			<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
																				Free Preview
																			</span>
																		)}
																	</div>
																</div>
																
																{/* Action Button */}
																{lecture.isPreviewFree ? (
																	<button
																		onClick={() => {
																			const videoId = extractYouTubeVideoId(lecture.lectureUrl);
																			if (videoId) {
																				setPlayerData({ videoId });
																			} else {
																				toast.error('Invalid YouTube URL for this lecture');
																			}
																		}}
																		className="btn-black px-4 py-2 text-xs font-medium rounded-lg hover:shadow-md transition-all duration-200"
																	>
																		Preview
																	</button>
																) : (
																	<span className="text-xs text-gray-400 px-4 py-2 bg-gray-100 rounded-lg font-medium">
																		Locked
																	</span>
																)}
															</div>
														</div>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="py-20 text-sm md:text-default">
						<h3 className="text-xl font-semibold text-gray-800 ">
							Course Description
						</h3>
						<p
							className="pt-3 rich-text"
							dangerouslySetInnerHTML={{
								__html: courseData.courseDescription,
							}}
						></p>
					</div>
				</div>

				{/* right column */}
				<div className="max-w-course-card z-10 shadow-custom-card rounded-t md:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
					{playerData ? (
						playerData.videoId ? (
							<YouTube
								videoId={playerData.videoId}
								opts={{ 
									playerVars: { 
										autoplay: 1,
										controls: 1,
										rel: 0,
										showinfo: 0,
										modestbranding: 1
									} 
								}}
								iframeClassName="w-full aspect-video"
								onError={(error) => {
									console.error('YouTube player error:', error);
									toast.error('Error loading preview video.');
								}}
								onReady={() => {
									console.log('Preview video ready');
								}}
							/>
						) : (
							<div className="w-full aspect-video bg-red-50 border-2 border-red-200 flex items-center justify-center rounded-lg">
								<div className="text-center">
									<p className="text-red-600 font-medium">Invalid Preview Video</p>
									<p className="text-gray-500 text-xs mt-2">Please contact support to fix this video.</p>
								</div>
							</div>
						)
					) : (
						<img src={courseData.courseThumbnail} alt="courseThumbnail" />
					)}

					<div className="p-5">
						<div className="flex items-center gap-2">
							<img
								className="w-3.5"
								src={assets.time_left_clock_icon}
								alt="time_left_clock_icon"
							/>

							<p className="text-red-500">
								<span className="font-medium">5 days</span> left at this price!
							</p>
						</div>

						<div className="flex gap-3 items-center pt-2">
							<p className="text-gray-800 md:text-4xl text-2xl font-semibold">
								{currency}{" "}
								{(
									courseData.coursePrice -
									(courseData.discount * courseData.coursePrice) / 100
								).toFixed(2)}
							</p>
							<p className="md:text-lg text-gray-500 line-through">
								{currency} {courseData.coursePrice}{" "}
							</p>
							<p className="md:text-lg text-gray-500">
								{currency} {courseData.discount}% off{" "}
							</p>
						</div>

						<div className="flex items-center text-sm md:text-default gap-4 pt-2 md:pt-4 text-gray-500">
							<div className="flex items-center gap-1">
								<img src={assets.star} alt="star icon" />
								<p>{calculateRating(courseData)}</p>
							</div>

							<div className="h-4 w-px bg-gray-500/40"></div>

							<div className="flex items-center gap-1">
								<img src={assets.time_clock_icon} alt="time_clock_icon" />
								<p>{calculateCourseDuration(courseData)}</p>
							</div>

							<div className="h-4 w-px bg-gray-500/40"></div>

							<div className="flex items-center gap-1">
								<img src={assets.lesson_icon} alt="lesson_icon" />
								<p>{calculateNoOfLectures(courseData)} lessons</p>
							</div>
						</div>

						<div>
							{isAlreadyEnrolled
								? <p className="md:mt-6 mt-4 w-full py-3 rounded text-center bg-green-600 text-white font-medium"> Already Enrolled </p>
								: courseData.coursePrice -
										(courseData.discount * courseData.coursePrice) / 100 ===
								  0.00
								? <button onClick={enrollCourse} className="md:mt-6 mt-4 w-full py-3 rounded text-center bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-200"> Enroll Free </button>
								: <button onClick={enrollCourse} className="md:mt-6 mt-4 w-full py-3 rounded text-center bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"> Enroll Now</button>}
						</div>

						<div>
							{isAlreadyEnrolled ? (
								<Link to="/my-enrollments">
									<button className="md:mt-6 mt-4 w-full text-center py-3 rounded bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors duration-200">
										Go to My Enrollments
									</button>
								</Link>
							) : courseData.coursePrice - (courseData.discount * courseData.coursePrice) / 100 === 0.00 ? (
								<p className="md:mt-6 mt-4 w-full text-center py-3 rounded bg-gray-100 text-gray-600 font-medium text-sm">
									Preview available lectures below
								</p>
							) : null}
						</div>

						<div className="pt-6">
							<p className="md:text-xl text-lg font-medium text-gray-800">
								What's in the course?{" "}
							</p>
							<ul className="ml-4 pt-2 text-sm md:text-default list-disc text-gray-500">
								<li>Lifetime access with free updates.</li>
								<li>Step-by-step, hands-on project guidance.</li>
								<li>Downloadable resources and source code.</li>
								<li>Quizzes to test your knowledge.</li>
								<li>Certificate of completion.</li>
								<li>Quizzes to test your knowledge.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	) : (
		<Loading />
	);
};

export default CourseDetails;
