import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  const {currency, calculateRating} = useContext(AppContext)
  return (
    <div className='h-full flex flex-col bg-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group'>
      {/* Course Image */}
      <div className='relative overflow-hidden'>
        <img 
          className='w-full h-48 object-cover' 
          src={course.courseThumbnail} 
          alt="courseThumbnail" 
        />
      </div>
      
      {/* Course Content */}
      <div className='p-4 flex-1 flex flex-col'>
        {/* Title */}
        <h3 className='text-lg font-bold text-gray-800 mb-2 line-clamp-2'>
          {course.courseTitle}
        </h3>
        
        {/* Rating */}
        <div className='flex items-center space-x-2 mb-3'>
          <span className='text-sm font-semibold text-yellow-600'>{calculateRating(course)}</span>
          <div className='flex'>
            {[...Array(5)].map((_,i)=>(
              <img 
                className='w-4 h-4' 
                key={i} 
                src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} 
                alt='star' 
              />
            ))}
          </div>
          <span className='text-sm text-gray-500'>({course.courseRatings.length})</span>
        </div>
        
        {/* Price */}
        <div className='mb-4'>
          <p className='text-xl font-bold text-gray-800'>
            {currency} {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
          </p>
          {course.discount > 0 && (
            <div className='flex items-center gap-2'>
              <span className='text-sm text-gray-500 line-through'>
                {currency} {course.coursePrice.toFixed(2)}
              </span>
              <span className='text-sm bg-red-100 text-red-600 px-2 py-1 rounded-full font-semibold'>
                {course.discount}% OFF
              </span>
            </div>
          )}
        </div>
        
        {/* Check out course button */}
        <div className='mt-auto'>
          <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)}>
            <button className='w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200'>
              <div className='flex items-center justify-center gap-2'>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Check out course
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
