import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({course}) => {
  const {currency, calculateRating} = useContext(AppContext)
  return (
    <div className='h-full flex flex-col card-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group'>
      {/* Course Image */}
      <div className='relative overflow-hidden rounded-t-2xl'>
        <img 
          className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
          src={course.courseThumbnail} 
          alt="courseThumbnail" 
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
      
      {/* Course Content */}
      <div className='p-5 flex-1 flex flex-col space-y-3'>
        {/* Title */}
        <h3 className='text-lg font-bold text-theme-primary line-clamp-2 leading-tight min-h-[3.5rem] flex items-start'>
          {course.courseTitle}
        </h3>
        
        {/* Rating */}
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <span className='text-sm font-semibold text-theme-primary'>{calculateRating(course)}</span>
            <div className='flex space-x-1'>
              {[...Array(5)].map((_,i)=>(
                <img 
                  className='w-3.5 h-3.5' 
                  key={i} 
                  src={i<Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} 
                  alt='star' 
                />
              ))}
            </div>
          </div>
          <span className='text-xs text-theme-secondary bg-gray-100 px-2 py-1 rounded-full'>({course.courseRatings.length})</span>
        </div>
        
        {/* Price Section */}
        <div className='space-y-2'>
          <div className='flex items-baseline space-x-2'>
            <p className='text-2xl font-bold text-theme-primary'>
              {currency} {(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
            </p>
            {course.discount > 0 && (
              <span className='text-sm text-theme-secondary line-through'>
                {currency} {course.coursePrice.toFixed(2)}
              </span>
            )}
          </div>
          {course.discount > 0 && (
            <div className='flex justify-start'>
              <span className='text-xs bg-black text-white px-3 py-1 rounded-full font-semibold shadow-sm'>
                {course.discount}% OFF
              </span>
            </div>
          )}
        </div>
        
        {/* Check out course button */}
        <div className='mt-auto pt-2'>
          <Link to={'/course/' + course._id} onClick={()=>scrollTo(0,0)}>
            <button className='w-full btn-black font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5'>
              <div className='flex items-center justify-center gap-2'>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
