import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import  humanizeDuration  from "humanize-duration";
import YouTube from 'react-youtube'
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/student/Loading";

const Player = () => {

  const {enrolledCourses, calculateChapterTime, backendUrl, getToken, userData, fetchUserEnrolledCourses} = useContext(AppContext)
  const {courseId} = useParams();
  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [playerData, setPlayerData] = useState(null)
  const [progressData, setProgressData] = useState(null)
  const [initialRating, setInitialRating] = useState(0)

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
  }


  const getCourseData = () =>{
    enrolledCourses.map((course)=>{
      if(course._id === courseId)
      {
        setCourseData(course)
		course.courseRatings.map((item)=>{
			if(item.userId === userData._id){
			setInitialRating(item.rating)
			}
		})
        
        // Auto-select the first lecture if no playerData is set
        if (!playerData && course.courseContent && course.courseContent.length > 0) {
          const firstChapter = course.courseContent[0];
          if (firstChapter.chapterContent && firstChapter.chapterContent.length > 0) {
            const firstLecture = firstChapter.chapterContent[0];
            setPlayerData({
              ...firstLecture,
              chapter: 1,
              lecture: 1
            });
            // Also open the first section by default
            setOpenSections(prev => ({ ...prev, 0: true }));
          }
        }
      }
    })
  }

  const toggleSection = (index) => {
		setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
	};

  useEffect(()=>{
	if(enrolledCourses.length > 0){
		getCourseData()
	}
  },[enrolledCourses])

  const markLectureAsCompleted = async (lectureId) => {
	try {
		const token = await getToken();
		const {data} = await axios.post(backendUrl + '/api/user/update-course-progress',{courseId, lectureId}, {headers: {Authorization: `Bearer ${token}`}})
		
		if(data.success){
			// console.log("data palyer", data);
			toast.success(data.message)
			getCourseProgress()
		}else{
			toast.error(data.message)
		}
	} catch (error) {
		toast.error(error.message)
	}
  }


  

  const getCourseProgress = async () => {
	try {
		const token = await getToken();
		const {data} = await axios.post(backendUrl + '/api/user/get-course-progress', {courseId}, {headers: {Authorization: `Bearer ${token}`}})

		if(data.success){
			setProgressData(data.progressData)
			toast.success(data.message)
		}else{
			toast.error(data.message)
		}
	} catch (error) {
		toast.error(error.message)
	}
  }

  const handleRate = async (rating)=>{
	try {
		const token = await getToken();

		const {data} = await axios.post(backendUrl + '/api/user/add-rating', {courseId, rating},{headers: {Authorization: `Bearer ${token}`}})
		console.log("data", data);
		
		if(data.success){
			toast.success(data.message)
			fetchUserEnrolledCourses();
		}
		else{
			toast.error(data.message)
		}
		
	} catch (error) {
		toast.error(error.message)
	}
  }


  useEffect(()=>{
	getCourseProgress();
  },[])

	return courseData ? (
		<>
			<div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
				{/* Left column - Course Structure */}
				<div className="text-black">
					{/* Section Header */}
					<div className="mb-8">
						<h2 className="text-3xl font-bold text-black mb-3">Course Structure</h2>
						<div className="w-16 h-1 bg-black"></div>
						<p className="text-gray-600 mt-3">
							Navigate through the course content and track your progress
						</p>
					</div>

					{/* Course Chapters */}
					<div className="space-y-4">
						{courseData &&  courseData.courseContent.map((chapter, index) => (
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
													{/* Play/Completed Icon */}
													<div 
														onClick={() =>
															setPlayerData({
																...lecture, chapter: index + 1, lecture: i+1
															})
														}
														className="w-10 h-10 bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors duration-200 group"
													>
														{progressData && progressData.lectureCompleted.includes(lecture.lectureId) ? (
															<img
																className="w-5 h-5"
																src={assets.blue_tick_icon}
																alt="completed"
																style={{ filter: 'brightness(0) invert(1)' }}
															/>
														) : (
															<img
																className="w-4 h-4 ml-0.5"
																src={assets.play_icon}
																alt="play"
																style={{ filter: 'brightness(0) invert(1)' }}
															/>
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
																	{progressData && progressData.lectureCompleted.includes(lecture.lectureId) && (
																		<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
																			Completed
																		</span>
																	)}
																</div>
															</div>
															
															{/* Action Button */}
															{lecture.lectureUrl && (
																<button
																	onClick={() =>
																		setPlayerData({
																			...lecture, chapter: index + 1, lecture: i+1
																		})
																	}
																	className="btn-black px-4 py-2 text-xs font-medium rounded-lg hover:shadow-md transition-all duration-200"
																>
																	{progressData && progressData.lectureCompleted.includes(lecture.lectureId) ? 'Rewatch' : 'Watch'}
																</button>
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

            <div className=" flex items-center gap-2 py-3 mt-10 ">
              <h1 className="text-xl font-bold">Rate this Course:</h1>
              <Rating initialRating={initialRating} onRate={handleRate}/>
            </div>


				</div>

				{/* right column */}
				<div className="md:mt-10">
          {playerData ? (
            <div className="">
              {playerData.lectureUrl ? (
                (() => {
                  const videoId = extractYouTubeVideoId(playerData.lectureUrl);
                  console.log('Extracted video ID:', videoId, 'from URL:', playerData.lectureUrl);
                  
                  return videoId ? (
                    <YouTube 
                      videoId={videoId}  
                      iframeClassName="w-full aspect-video"
                      opts={{
                        playerVars: {
                          autoplay: 0,
                          controls: 1,
                          rel: 0,
                          showinfo: 0,
                          modestbranding: 1
                        }
                      }}
                      onError={(error) => {
                        console.error('YouTube player error:', error);
                        toast.error('Error loading video. Please check the video URL.');
                      }}
                      onReady={(event) => {
                        console.log('YouTube player ready');
                      }}
                    />
                  ) : (
                    <div className="w-full aspect-video bg-red-50 border-2 border-red-200 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <p className="text-red-600 font-medium">Invalid YouTube URL</p>
                        <p className="text-red-500 text-sm mt-1">URL: {playerData.lectureUrl}</p>
                        <p className="text-gray-500 text-xs mt-2">Please contact support to fix this video.</p>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="w-full aspect-video bg-gray-200 flex items-center justify-center rounded-lg">
                  <p className="text-gray-500">Video URL not available</p>
                </div>
              )}
              
              <div className="flex justify-between items-center mt-1">
                <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle} </p>
                <button onClick={() => markLectureAsCompleted(playerData.lectureId)} className="text-blue-600">{progressData && progressData.lectureCompleted.includes(playerData.lectureId) ? 'Completed' : 'Mark As Complete'}</button>
              </div>
            </div>
          ) 
          :  
          <div className="text-center">
            <img src={courseData ? courseData.courseThumbnail : ''} alt="courseThumbnail" className="w-full aspect-video object-cover rounded-lg mb-4" />
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Welcome to your course!</h3>
              <p className="text-gray-600 mb-4">Click on any lecture from the course structure on the left to start watching.</p>
              <p className="text-sm text-gray-500">Select a lecture to begin your learning journey.</p>
            </div>
          </div>
        }
        </div>
			</div>
      <Footer/>
		</>
	)
	: <Loading/>;
};

export default Player;
