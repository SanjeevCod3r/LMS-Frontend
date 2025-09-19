import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollMents from './pages/student/MyEnrollMents'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'
import ProtectedRoute from './components/auth/ProtectedRoute'
import "quill/dist/quill.snow.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About'
import ContactForm from './components/ContactForm'
import EditCourse from './pages/educator/EditCourse';

const App = () => {


  const isEducatorRoute = useMatch('/educator/*')



  return (
    <div className='text-default min-h-screen bg-white'>
      <ToastContainer />
      {!isEducatorRoute &&<Navbar/> }
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/course-list' element={<CoursesList/>} />
        <Route path='/course-list/:input' element={<CoursesList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        
        {/* Protected student routes */}
        <Route path='/my-enrollments' element={
          <ProtectedRoute requireAuth={true}>
            <MyEnrollMents/>
          </ProtectedRoute>
        } />
        <Route path='/player/:courseId' element={
          <ProtectedRoute requireAuth={true}>
            <Player/>
          </ProtectedRoute>
        } />
        <Route path='/loading/:path' element={
          <ProtectedRoute requireAuth={true}>
            <Loading/>
          </ProtectedRoute>
        } />

        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactForm/>} />

        {/* Protected educator routes */}
        <Route path='/educator' element={
          <ProtectedRoute requireAuth={true} requireRole={['educator', 'admin']}>
            <Educator />
          </ProtectedRoute>
        } >
            <Route path='/educator' element={<Dashboard />} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='my-courses' element={<MyCourses />} />
            <Route path='student-enrolled' element={<StudentsEnrolled />} />
            <Route path='edit-course/:id' element={<EditCourse />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
